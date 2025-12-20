import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// CORS mínimo: só responde OPTIONS, não ativa CORS para POST/GET
function getCorsHeaders(req: Request): Record<string, string> {
  if (req.method === "OPTIONS") {
    return {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": "86400"
    };
  }
  return {};
}

// Safe JSON response helper
function jsonResponse(data: object, corsHeaders: Record<string, string>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

// Safe body parser for webhooks - very permissive, never fails
async function safeParseWebhookBody(req: Request): Promise<{ data: any; rawBody: string }> {
  let rawBody = "";
  
  try {
    // Clone to safely read
    const clonedReq = req.clone();
    
    try {
      rawBody = await clonedReq.text();
    } catch (textError) {
      console.warn("Failed to read body as text, trying arrayBuffer:", textError);
      try {
        const buffer = await req.arrayBuffer();
        rawBody = new TextDecoder().decode(buffer);
      } catch (bufferError) {
        console.error("Failed to read body:", bufferError);
        return { data: {}, rawBody: "" };
      }
    }
    
    console.log("Webhook body length:", rawBody.length);
    if (rawBody.length > 0) {
      console.log("Webhook body:", rawBody.substring(0, 1000));
    }
    
    // Empty body is OK for health checks
    if (!rawBody || rawBody.trim() === "") {
      return { data: {}, rawBody };
    }
    
    // Try to parse JSON
    try {
      const parsed = JSON.parse(rawBody);
      return { data: parsed, rawBody };
    } catch (parseError) {
      console.warn("Webhook JSON parse failed - treating as raw data:", parseError);
      return { data: { rawBody }, rawBody };
    }
  } catch (error) {
    console.error("Unexpected error in webhook body parse:", error);
    return { data: {}, rawBody };
  }
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  
  // Log all incoming request details
  console.log("=== Webhook Request ===");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Origin:", req.headers.get("origin") || "none (expected for webhooks)");
  console.log("Content-Type:", req.headers.get("content-type") || "none");
  console.log("Content-Length:", req.headers.get("content-length") || "none");
  console.log("User-Agent:", req.headers.get("user-agent") || "none");
  
  // Handle CORS preflight - immediate response
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS preflight");
    return new Response(null, { 
      headers: corsHeaders,
      status: 200 
    });
  }

  // Handle GET requests (health checks from Abacate Pay or monitoring)
  if (req.method === "GET") {
    console.log("Health check received - responding OK");
    return jsonResponse({ 
      status: "ok", 
      service: "payment-webhook",
      timestamp: new Date().toISOString() 
    }, corsHeaders);
  }

  // Accept any method for webhooks, but primarily POST
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Safe body parsing
    const { data: payload, rawBody } = await safeParseWebhookBody(req);

    // Não exige authorization nem valida assinatura (webhook público)
    
    // Empty body - acknowledge as health check
    if (!rawBody || rawBody.trim() === "" || Object.keys(payload).length === 0) {
      console.log("Empty body received - treating as health check");
      return jsonResponse({ 
        success: true, 
        message: "Empty body acknowledged" 
      }, corsHeaders);
    }

    console.log("Webhook payload:", JSON.stringify(payload));

    const event = payload.event || payload.type || "billing.updated";
    const data = payload.data || {};
    
    // Parsing robusto e logs detalhados
    // Universal payment object extractor
    const paymentObject = data.pixQrCode || data.billing || data;
    const billingId = paymentObject.id;
    const status = paymentObject.status;
    const metadata = paymentObject.metadata || payload.metadata;
    console.log(`[Webhook] Event=${event}, BillingID=${billingId}, Status=${status}, Metadata:`, JSON.stringify(metadata));
    if (!billingId) {
      console.error("No billing ID found. Payload:", JSON.stringify(payload));
      return jsonResponse({ 
        success: true, 
        message: "No billing ID found in payload" 
      }, corsHeaders);
    }


    // Find payment by abacate_pay_id
    let payment;
    const { data: paymentByAbacate, error: findError } = await supabase
      .from("payments")
      .select("*")
      .eq("abacate_pay_id", billingId)
      .maybeSingle();

    if (findError) {
      console.error("Error finding payment by abacate_pay_id:", findError);
    } else {
      payment = paymentByAbacate;
    }

    // Tenta encontrar por metadata.paymentId se não achou por abacate_pay_id
    if (!payment) {
      const paymentIdFromMetadata = metadata?.paymentId || paymentObject?.metadata?.paymentId || payload?.metadata?.paymentId;
      console.log("Trying to find by metadata.paymentId:", paymentIdFromMetadata);
      if (paymentIdFromMetadata) {
        const { data: paymentByMeta, error: metaError } = await supabase
          .from("payments")
          .select("*")
          .eq("id", paymentIdFromMetadata)
          .maybeSingle();
        if (!metaError && paymentByMeta) {
          payment = paymentByMeta;
          // Atualiza abacate_pay_id se necessário
          if (!payment.abacate_pay_id) {
            await supabase
              .from("payments")
              .update({ abacate_pay_id: billingId })
              .eq("id", paymentIdFromMetadata);
            console.log("Found payment by metadata and updated abacate_pay_id");
          }
        }
      }
    }

    // Fallback: tentar encontrar por valor e status para debug
    if (!payment) {
      console.warn("Payment not found for billing:", billingId);
      console.warn("Payload recebido:", JSON.stringify(payload));
      // Tenta buscar por valor e status 'processing' (última tentativa)
      const { data: paymentByAmount } = await supabase
        .from("payments")
        .select("*")
        .eq("amount", paymentObject.amount)
        .eq("status", "processing")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (paymentByAmount) {
        payment = paymentByAmount;
        // Atualiza abacate_pay_id para vincular corretamente
        await supabase
          .from("payments")
          .update({ abacate_pay_id: billingId })
          .eq("id", payment.id);
        console.log("Found payment by amount/status and updated abacate_pay_id");
      }
    }

    if (!payment) {
      console.warn("Payment not found after all attempts. Webhook acknowledged.");
      return jsonResponse({ 
        success: true, 
        message: "Payment not found but webhook acknowledged",
        debug: { billingId, amount: paymentObject.amount }
      }, corsHeaders);
    }

    console.log("Found payment:", payment.id, "Current status:", payment.status);


    // Mapeamento robusto de status Abacate Pay para status universal
    let newStatus: "processing" | "paid" | "expired" | "cancelled" | "failed" = "processing";
    const statusUpper = (status || "").toUpperCase();
    const eventUpper = (event || "").toUpperCase();
    if (["PAID", "APPROVED", "COMPLETED", "SUCCESS", "CONFIRMED"].some(s => eventUpper.includes(s) || statusUpper === s)) {
      newStatus = "paid";
    } else if (["CANCEL", "CANCELED", "CANCELLED", "REFUND", "REFUNDED"].some(s => eventUpper.includes(s) || statusUpper === s)) {
      newStatus = "cancelled";
    } else if (["EXPIRE", "EXPIRED"].some(s => eventUpper.includes(s) || statusUpper === s)) {
      newStatus = "expired";
    } else if (["FAIL", "FAILED", "REJECT", "REJECTED", "ERROR"].some(s => eventUpper.includes(s) || statusUpper === s)) {
      newStatus = "failed";
    } else {
      newStatus = "processing";
    }
    console.log("Status mapping:", { event, status: statusUpper, newStatus });

    // Só atualiza se mudou
    if (payment.status !== newStatus) {
      const updateData: Record<string, any> = { status: newStatus };
      if (newStatus === "paid") {
        updateData.paid_at = new Date().toISOString();
      }
      const { error: updateError } = await supabase
        .from("payments")
        .update(updateData)
        .eq("id", payment.id);
      if (updateError) {
        console.error("Erro ao atualizar status do pagamento:", updateError);
        return jsonResponse({
          success: false,
          error: "Erro ao atualizar status do pagamento.",
          debug: updateError.message,
          paymentId: payment.id,
          status: newStatus
        }, corsHeaders, 200);
      } else {
        console.log("Payment updated successfully:", payment.id, "->", newStatus);
      }
    } else {
      console.log("Status unchanged, no update needed");
    }

    return jsonResponse({ 
      success: true, 
      paymentId: payment.id,
      status: newStatus,
      timestamp: new Date().toISOString()
    }, corsHeaders);

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("=== Webhook Error ===");
    console.error("Error:", errorMessage);
    console.error("Stack:", error instanceof Error ? error.stack : "no stack");
    
    // Always return 200 for webhooks to prevent problematic retries
    return jsonResponse({ 
      success: true, 
      error: errorMessage,
      message: "Error occurred but webhook acknowledged to prevent retries"
    }, corsHeaders);
  }
});

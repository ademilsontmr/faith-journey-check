import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Ultra-permissive CORS for any domain (Cloudflare, custom domains, localhost, etc.)
function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("origin");
  const requestHeaders = req.headers.get("access-control-request-headers");
  
  const allowedHeaders = requestHeaders || "authorization, x-client-info, apikey, content-type, x-requested-with, accept, accept-encoding, accept-language, cache-control, pragma, origin, referer, user-agent";

  if (!origin) {
    return {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": allowedHeaders,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD",
    };
  }

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": allowedHeaders,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin, Access-Control-Request-Headers",
  };
}

interface CreateChargeRequest {
  testType: "relationship" | "spiritual_gifts";
  customerEmail?: string;
  customerName?: string;
  baseUrl?: string;
  quizAnswers?: Record<number, string>;
  quizQuestions?: Array<{ id: number; category: string; text: string }>;
  score?: number;
  maxScore?: number;
}

const TEST_PRICES: Record<string, number> = {
  relationship: 14.90,
  spiritual_gifts: 9.90,
};

const TEST_NAMES: Record<string, string> = {
  relationship: "Relatório Premium - Avaliação do Relacionamento Cristão",
  spiritual_gifts: "Relatório Premium - Teste de Dons Espirituais",
};

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

// Safe body parser - handles all Cloudflare edge cases
async function safeParseBody(req: Request): Promise<{ data: CreateChargeRequest | null; error: string | null; rawBody: string }> {
  let rawBody = "";
  
  try {
    // Clone the request to safely read the body
    const clonedReq = req.clone();
    
    // Try to read as text first (handles chunked, gzip via runtime decompression)
    try {
      rawBody = await clonedReq.text();
    } catch (textError) {
      console.error("Failed to read body as text:", textError);
      // Try arrayBuffer as fallback
      try {
        const buffer = await req.arrayBuffer();
        rawBody = new TextDecoder().decode(buffer);
      } catch (bufferError) {
        console.error("Failed to read body as buffer:", bufferError);
        return { data: null, error: "Failed to read request body", rawBody: "" };
      }
    }
    
    // Log received body for debugging
    console.log("Received body length:", rawBody.length);
    console.log("Received body preview:", rawBody.substring(0, 500));
    
    // Handle empty body
    if (!rawBody || rawBody.trim() === "") {
      console.warn("Empty body received");
      return { data: null, error: "Empty request body", rawBody };
    }
    
    // Try to parse JSON
    try {
      const parsed = JSON.parse(rawBody);
      return { data: parsed, error: null, rawBody };
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      console.error("Body that failed to parse:", rawBody);
      
      // Check if body looks like it was corrupted
      if (rawBody.startsWith("{") && !rawBody.endsWith("}")) {
        return { data: null, error: "Truncated JSON body - likely Cloudflare issue", rawBody };
      }
      
      return { data: null, error: `Invalid JSON: ${parseError}`, rawBody };
    }
  } catch (error) {
    console.error("Unexpected error in safeParseBody:", error);
    return { data: null, error: `Unexpected error: ${error}`, rawBody };
  }
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  
  // Log all incoming request details for debugging
  console.log("=== Incoming Request ===");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Origin:", req.headers.get("origin") || "none");
  console.log("Content-Type:", req.headers.get("content-type") || "none");
  console.log("Content-Length:", req.headers.get("content-length") || "none");
  console.log("Content-Encoding:", req.headers.get("content-encoding") || "none");
  console.log("Transfer-Encoding:", req.headers.get("transfer-encoding") || "none");
  console.log("User-Agent:", req.headers.get("user-agent") || "none");
  
  // Handle CORS preflight - must return immediately
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS preflight");
    return new Response(null, { 
      headers: corsHeaders,
      status: 200 
    });
  }

  // Handle GET requests (health check)
  if (req.method === "GET") {
    console.log("Handling GET health check");
    return jsonResponse({ status: "ok", timestamp: new Date().toISOString() }, corsHeaders);
  }

  // Only accept POST for actual payment creation
  if (req.method !== "POST") {
    console.log("Rejecting non-POST method:", req.method);
    return jsonResponse({ success: false, error: "Method not allowed" }, corsHeaders, 405);
  }

  try {
    // 1. Validação de variáveis de ambiente
    const abacatePayApiKey = Deno.env.get("ABACATE_PAY_API_KEY");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!abacatePayApiKey || !supabaseUrl || !supabaseServiceKey) {
      const missingVars = [
        !abacatePayApiKey && "ABACATE_PAY_API_KEY",
        !supabaseUrl && "SUPABASE_URL",
        !supabaseServiceKey && "SUPABASE_SERVICE_ROLE_KEY"
      ].filter(Boolean).join(", ");
      const msg = `Variáveis de ambiente ausentes: ${missingVars}`;
      console.error(msg);
      return jsonResponse({ success: false, error: msg }, corsHeaders, 500);
    }
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 2. Validação do body e campos obrigatórios
    const { data: requestData, error: parseError, rawBody } = await safeParseBody(req);
    if (parseError || !requestData) {
      console.error("Body parsing failed:", parseError);
      console.error("Raw body was:", rawBody);
      return jsonResponse({ 
        success: false, 
        error: parseError || "Failed to parse request body",
        debug: {
          bodyLength: rawBody.length,
          bodyPreview: rawBody.substring(0, 100),
        }
      }, corsHeaders, 400);
    }
    const { testType, customerEmail, customerName, baseUrl, quizAnswers, quizQuestions, score, maxScore } = requestData;
    // Validação detalhada dos campos obrigatórios
    const missingFields = [];
    if (!testType) missingFields.push("testType");
    if (!customerEmail) missingFields.push("customerEmail");
    if (!customerName) missingFields.push("customerName");
    if (missingFields.length > 0) {
      const msg = `Campos obrigatórios ausentes: ${missingFields.join(", ")}`;
      console.error(msg);
      return jsonResponse({ success: false, error: msg }, corsHeaders, 400);
    }

    // 3. baseUrl sempre preenchido corretamente
    const siteBaseUrl = baseUrl && typeof baseUrl === "string" && baseUrl.length > 7 ? baseUrl : "https://bomcatolico.com.br";
    console.log("Using baseUrl:", siteBaseUrl);

    // 4. Buscar preço e nome do produto
    let amount = TEST_PRICES[testType];
    let description = TEST_NAMES[testType];
    const productKeyMap: Record<string, string> = {
      "relationship": "relationship_test",
      "spiritual_gifts": "spiritual_gifts_test"
    };
    const productKey = productKeyMap[testType];
    if (productKey) {
      const { data: productData, error: productError } = await supabase
        .from("products")
        .select("price, name")
        .eq("key", productKey)
        .maybeSingle();
      if (!productError && productData) {
        amount = productData.price;
        description = productData.name;
      }
    }

    // 5. Insert no banco: todos os campos obrigatórios enviados
    const { data: payment, error: paymentError } = await supabase
      .from("payments")
      .insert({
        test_type: testType,
        amount: amount,
        customer_email: customerEmail,
        customer_name: customerName,
        status: "processing", // status inicial igual ao enum do banco
        quiz_answers: quizAnswers || null,
        quiz_questions: quizQuestions || null,
        score: score || null,
        max_score: maxScore || null,
      })
      .select()
      .single();
    if (paymentError) {
      console.error("Error creating payment record:", paymentError);
      return jsonResponse({ 
        success: false, 
        error: "Erro ao criar registro de pagamento no banco.",
        debug: { dbError: paymentError.message }
      }, corsHeaders, 500);
    }

    // 6. Monta payload e chama Abacate Pay
    const webhookUrl = `${supabaseUrl}/functions/v1/payment-webhook`;
    const abacatePayPayload = {
      frequency: "ONE_TIME",
      methods: ["PIX"],
      products: [
        {
          externalId: productKey || testType,
          name: description,
          quantity: 1,
          price: Math.round(amount * 100),
        },
      ],
      returnUrl: `${siteBaseUrl}/payment-success?token=${payment.access_token}&test_type=${testType}`,
      completionUrl: `${siteBaseUrl}/payment-success?token=${payment.access_token}&test_type=${testType}`,
      url: webhookUrl,
      metadata: {
        paymentId: payment.id,
        testType: testType,
      },
    };
    let abacatePayData = null;
    let abacatePayResponse = null;
    try {
      abacatePayResponse = await fetch("https://api.abacatepay.com/v1/billing/create", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${abacatePayApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(abacatePayPayload),
      });
      abacatePayData = await abacatePayResponse.json();
    } catch (err) {
      console.error("Erro ao chamar Abacate Pay:", err);
      return jsonResponse({ success: false, error: "Erro ao conectar ao provedor de pagamento." }, corsHeaders, 502);
    }
    if (!abacatePayResponse?.ok || !abacatePayData?.data) {
      const msg = abacatePayData?.message || abacatePayData?.error || "Erro desconhecido ao criar cobrança Pix.";
      console.error("Abacate Pay error:", abacatePayData);
      return jsonResponse({ success: false, error: msg, provider: abacatePayData }, corsHeaders, 500);
    }

    // 7. Atualiza registro com dados Pix
    const { error: updateError } = await supabase
      .from("payments")
      .update({
        abacate_pay_id: abacatePayData.data?.id,
        pix_qr_code: abacatePayData.data?.pix?.qrCode,
        pix_qr_code_base64: abacatePayData.data?.pix?.qrCodeBase64,
        pix_copy_paste: abacatePayData.data?.pix?.copyPaste,
      })
      .eq("id", payment.id);
    if (updateError) {
      console.error("Erro ao atualizar registro com dados Pix:", updateError);
    }

    // 8. Resposta detalhada para o frontend
    const successResponse = {
      success: true,
      paymentId: payment.id,
      accessToken: payment.access_token,
      checkoutUrl: abacatePayData.data?.url,
      pix: {
        qrCode: abacatePayData.data?.pix?.qrCode,
        qrCodeBase64: abacatePayData.data?.pix?.qrCodeBase64,
        copyPaste: abacatePayData.data?.pix?.copyPaste,
      },
      provider: abacatePayData,
    };
    return jsonResponse(successResponse, corsHeaders);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("=== Unhandled Error ===");
    console.error("Error:", errorMessage);
    console.error("Stack:", error instanceof Error ? error.stack : "no stack");
    return jsonResponse({ 
      success: false, 
      error: errorMessage || "Internal server error" 
    }, corsHeaders, 500);
  }
});

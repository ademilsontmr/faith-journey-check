import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ABACATE_PAY_API_KEY = Deno.env.get("ABACATE_PAY_API_KEY");
    if (!ABACATE_PAY_API_KEY) {
      console.error("ABACATE_PAY_API_KEY not configured");
      throw new Error("Payment service not configured");
    }

    const { sessionId, userName, userWhatsapp } = await req.json();

    if (!sessionId) {
      throw new Error("Session ID is required");
    }

    console.log("Creating billing for session:", sessionId);

    // Get the origin for return URLs
    const origin = req.headers.get("origin") || "https://bom-catolico.lovable.app";

    // Create billing on Abacate Pay
    const response = await fetch("https://api.abacatepay.com/v1/billing/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${ABACATE_PAY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        frequency: "ONE_TIME",
        methods: ["PIX"],
        products: [
          {
            externalId: `quiz-${sessionId}`,
            name: "Resultado do Quiz + Guia da Vida Católica",
            description: "Acesso ao resultado personalizado do quiz e guia completo",
            quantity: 1,
            price: 990, // R$ 9,90 in centavos
          },
        ],
        returnUrl: `${origin}/pagamento?session=${sessionId}`,
        completionUrl: `${origin}/resultado?session=${sessionId}`,
        customer: {
          name: userName || "Cliente",
          cellphone: userWhatsapp || "",
        },
        metadata: {
          sessionId: sessionId,
        },
      }),
    });

    const data = await response.json();

    console.log("Abacate Pay response:", JSON.stringify(data));

    if (!response.ok) {
      console.error("Abacate Pay error:", data);
      throw new Error(data.message || "Failed to create billing");
    }

    // Update quiz_sessions with payment_id
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: updateError } = await supabase
      .from("quiz_sessions")
      .update({ payment_id: data.data?.id || data.id })
      .eq("id", sessionId);

    if (updateError) {
      console.error("Error updating session with payment_id:", updateError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        billingUrl: data.url,
        billingId: data.data?.id || data.id,
        pixQrCode: data.data?.pixQrCode,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in create-billing:", error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

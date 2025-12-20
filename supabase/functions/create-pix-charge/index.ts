import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const abacateApiKey = Deno.env.get("ABACATE_PAY_API_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { 
      amount, 
      customerName, 
      customerEmail, 
      customerTaxId, 
      customerPhone,
      testType,
      quizAnswers,
      score,
      maxScore
    } = await req.json();

    // 1. Chamar o endpoint ESPECÍFICO para Checkout Transparente
    // Documentação: https://docs.abacatepay.com/pages/pix-qrcode/create
    const abacateResponse = await fetch("https://api.abacatepay.com/v1/pixQrCode/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${abacateApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Centavos
        description: `Pagamento - ${testType || 'Teste'}`,
        customer: {
          name: customerName,
          email: customerEmail,
          taxId: customerTaxId, // CPF é obrigatório
          cellphone: customerPhone,
        },
      }),
    });

    const abacateData = await abacateResponse.json();

    if (!abacateResponse.ok) {
      console.error("Abacate Pay Error:", abacateData);
      throw new Error(abacateData.error || "Failed to create Pix charge");
    }

    // No endpoint pixQrCode, o ID e o código vêm direto em 'data'
    const brCode = abacateData.data.brCode; 
    const billingId = abacateData.data.id; // Começa com "pix_char_..."

    // 2. Salvar no Supabase
    const { data: payment, error: dbError } = await supabase
      .from("payments")
      .insert({
        amount: amount,
        status: "processing",
        abacate_pay_id: billingId, // Webhook vai achar por esse ID
        customer_email: customerEmail,
        customer_name: customerName,
        customer_phone: customerPhone,
        pix_copy_paste: brCode,
        test_type: testType || "combo",
        quiz_answers: quizAnswers,
        score: score,
        max_score: maxScore
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database Error:", dbError);
      throw new Error("Failed to save payment record");
    }

    return new Response(
      JSON.stringify({
        paymentId: payment.id,
        billingId: billingId,
        brCode: brCode, // Garantido que existe
        accessToken: payment.access_token
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error in create-payment:", error);
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});

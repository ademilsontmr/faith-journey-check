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

    const { paymentId } = await req.json();

    if (!paymentId) {
      throw new Error("Missing paymentId");
    }

    // 1. Get payment from Supabase to find the Abacate ID
    const { data: payment, error: dbError } = await supabase
      .from("payments")
      .select("*")
      .eq("id", paymentId)
      .single();

    if (dbError || !payment) {
      throw new Error("Payment not found");
    }

    if (!payment.abacate_pay_id) {
      throw new Error("No Abacate Pay ID associated with this payment");
    }

    // 2. Check status with Abacate Pay
    const abacateResponse = await fetch(`https://api.abacatepay.com/v1/pixQrCode/check?id=${payment.abacate_pay_id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${abacateApiKey}`,
      },
    });

    const abacateData = await abacateResponse.json();

    if (!abacateResponse.ok) {
      console.error("Abacate Pay Error:", abacateData);
      throw new Error(abacateData.error || "Failed to check Pix status");
    }

    const status = abacateData.data.status; // "PENDING", "PAID", "EXPIRED"?
    console.log(`Payment ${paymentId} status: ${status}`);

    // 3. Update Supabase if status changed
    // Map Abacate status to our database enum: processing, paid, expired, cancelled, failed
    let newStatus: "processing" | "paid" | "expired" | "cancelled" | "failed" = payment.status;
    const statusUpper = (status || "").toUpperCase();
    
    if (statusUpper === "PAID" || statusUpper === "COMPLETED" || statusUpper === "APPROVED") {
      newStatus = "paid";
    } else if (statusUpper === "EXPIRED") {
      newStatus = "expired";
    } else if (statusUpper === "CANCELLED" || statusUpper === "CANCELED") {
      newStatus = "cancelled";
    } else if (statusUpper === "FAILED" || statusUpper === "REJECTED") {
      newStatus = "failed";
    }

    if (newStatus !== payment.status) {
      const updateData: Record<string, any> = { status: newStatus };
      if (newStatus === "paid") {
        updateData.paid_at = new Date().toISOString();
      }
      
      const { error: updateError } = await supabase
        .from("payments")
        .update(updateData)
        .eq("id", paymentId);

      if (updateError) {
        console.error("Failed to update payment status:", updateError);
      }
    }

    return new Response(
      JSON.stringify({
        status: newStatus,
        abacateStatus: status,
        accessToken: payment.access_token // Return this so frontend can use it if needed
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error in check-payment-status:", error);
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});

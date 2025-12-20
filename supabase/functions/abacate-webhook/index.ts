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
    const body = await req.json();
    
    console.log("Webhook received:", JSON.stringify(body));

    // Check if this is a payment confirmation
    if (body.event !== "billing.paid") {
      console.log("Ignoring non-payment event:", body.event);
      return new Response(
        JSON.stringify({ success: true, message: "Event ignored" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Extract session ID from metadata or find by billing ID
    const billingId = body.data?.billing?.id || body.id;
    const sessionId = body.data?.billing?.metadata?.sessionId;

    console.log("Processing payment for billing:", billingId, "session:", sessionId);

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Update payment status in quiz_sessions
    let updateQuery = supabase
      .from("quiz_sessions")
      .update({ paid: true })
      .eq("payment_id", billingId);

    // If we have sessionId, use that instead for more reliable update
    if (sessionId) {
      updateQuery = supabase
        .from("quiz_sessions")
        .update({ paid: true, payment_id: billingId })
        .eq("id", sessionId);
    }

    const { data, error } = await updateQuery.select();

    if (error) {
      console.error("Error updating payment status:", error);
      throw new Error("Failed to update payment status");
    }

    console.log("Payment status updated successfully:", data);

    return new Response(
      JSON.stringify({ success: true, message: "Payment confirmed" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Webhook error:", error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

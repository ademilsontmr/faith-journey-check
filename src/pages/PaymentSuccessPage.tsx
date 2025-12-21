import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type PaymentStatus = "loading" | "success" | "processing" | "expired" | "cancelled" | "failed" | "error";

interface PaymentData {
  id: string;
  test_type: string;
  status: string;
  score: number | null;
  max_score: number | null;
  quiz_answers: unknown;
  quiz_questions: unknown;
  customer_name: string;
  customer_email: string;
  access_token: string | null;
  paid_at: string | null;
}

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const token = searchParams.get("token");
  const testType = searchParams.get("test_type");
  
  const [status, setStatus] = useState<PaymentStatus>("loading");
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    const checkPayment = async () => {
      if (!token) {
        setStatus("error");
        return;
      }

      try {
        // Fetch payment by access_token
        const { data: payment, error } = await supabase
          .from("payments")
          .select("*")
          .eq("access_token", token)
          .maybeSingle();

        if (error || !payment) {
          console.error("Error fetching payment:", error);
          setStatus("error");
          return;
        }

        setPaymentData(payment as PaymentData);

        if (payment.status === "paid") {
          // Redireciona imediatamente para o resultado premium
          const premiumRoute = payment.test_type === "relationship" 
            ? "/premium-result-relationship" 
            : "/premium-result-gifts";
          
          navigate(premiumRoute, {
            state: {
              token,
              testType: payment.test_type,
              paymentId: payment.id,
              score: payment.score || 0,
              maxScore: payment.max_score || 150,
              answers: payment.quiz_answers || {},
              questions: payment.quiz_questions || [],
            },
          });
          return;
        }

        if (payment.status === "processing") {
          setStatus("processing");
          // Poll for status updates using edge function
          pollPaymentStatus(payment.id);
        } else {
          setStatus(payment.status as PaymentStatus);
        }
      } catch (error) {
        console.error("Error checking payment:", error);
        setStatus("error");
      }
    };

    checkPayment();
  }, [token, navigate]);

  const pollPaymentStatus = async (paymentId: string) => {
    const interval = setInterval(async () => {
      try {
        const { data, error } = await supabase.functions.invoke("check-payment-status", {
          body: { paymentId },
        });

        if (!error && data?.status === "paid") {
          setStatus("success");
          clearInterval(interval);
          
          // Fetch updated payment data and redirect
          const { data: updatedPayment } = await supabase
            .from("payments")
            .select("*")
            .eq("id", paymentId)
            .maybeSingle();

          if (updatedPayment) {
            const premiumRoute = updatedPayment.test_type === "relationship" 
              ? "/premium-result-relationship" 
              : "/premium-result-gifts";
            
            navigate(premiumRoute, {
              state: {
                token,
                testType: updatedPayment.test_type,
                paymentId: updatedPayment.id,
                score: updatedPayment.score || 0,
                maxScore: updatedPayment.max_score || 150,
                answers: updatedPayment.quiz_answers || {},
                questions: updatedPayment.quiz_questions || [],
              },
            });
          }
        } else if (data?.status && ["failed", "cancelled", "expired"].includes(data.status)) {
          setStatus(data.status as PaymentStatus);
          clearInterval(interval);
        }
      } catch (err) {
        console.error("Poll error:", err);
      }
    }, 5000);

    // Clear interval after 5 minutes
    setTimeout(() => clearInterval(interval), 300000);
  };

  const handleAccessPremium = () => {
    if (paymentData && token) {
      const premiumRoute = paymentData.test_type === "relationship" 
        ? "/premium-result-relationship" 
        : "/premium-result-gifts";
      
      navigate(premiumRoute, {
        state: {
          token,
          testType: paymentData.test_type,
          paymentId: paymentData.id,
          score: paymentData.score || 0,
          maxScore: paymentData.max_score || 150,
          answers: paymentData.quiz_answers || {},
          questions: paymentData.quiz_questions || [],
        },
      });
    }
  };

  const handleBackToCheckout = () => {
    if (paymentData) {
      navigate("/checkout", {
        state: {
          testType: paymentData.test_type,
          score: paymentData.score,
          maxScore: paymentData.max_score,
          answers: paymentData.quiz_answers,
          questions: paymentData.quiz_questions,
        }
      });
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <Card className="relative max-w-md w-full">
        <CardHeader className="text-center">
          {status === "loading" && (
            <>
              <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
              <CardTitle>Verificando pagamento...</CardTitle>
            </>
          )}

          {status === "processing" && (
            <>
              <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
              <CardTitle>Aguardando pagamento</CardTitle>
            </>
          )}

          {status === "success" && (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>Pagamento confirmado!</CardTitle>
            </>
          )}

          {(status === "error" || status === "expired" || status === "cancelled" || status === "failed") && (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mx-auto mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle>
                {status === "expired" && "Pagamento expirado"}
                {status === "cancelled" && "Pagamento cancelado"}
                {status === "failed" && "Pagamento falhou"}
                {status === "error" && "Pagamento não encontrado"}
              </CardTitle>
            </>
          )}
        </CardHeader>

        <CardContent className="text-center space-y-4">
          {status === "loading" && (
            <p className="text-muted-foreground">
              Aguarde enquanto confirmamos seu pagamento.
            </p>
          )}

          {status === "processing" && (
            <>
              <p className="text-muted-foreground">
                Seu pagamento está sendo processado. Assim que for confirmado, você será redirecionado automaticamente.
              </p>
              <p className="text-sm text-muted-foreground">
                Verifique se você concluiu o pagamento via Pix no seu aplicativo bancário.
              </p>
              <Button variant="outline" onClick={handleBackToCheckout} className="w-full">
                Voltar para o Checkout
              </Button>
            </>
          )}

          {status === "success" && (
            <>
              <p className="text-muted-foreground">
                Redirecionando para seu resultado premium...
              </p>
              <Button onClick={handleAccessPremium} className="w-full">
                Acessar Resultado Premium
              </Button>
            </>
          )}

          {(status === "error" || status === "expired" || status === "cancelled" || status === "failed") && (
            <>
              <p className="text-muted-foreground">
                Não foi possível verificar seu pagamento. Se você realizou o pagamento, entre em contato conosco.
              </p>
              <Button onClick={handleBackToCheckout} className="w-full">
                Voltar ao Checkout
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;

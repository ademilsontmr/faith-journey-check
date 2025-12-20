import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type PaymentStatus = "loading" | "success" | "pending" | "error";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<PaymentStatus>("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    const testType = searchParams.get("test_type");

    if (!token) {
      setStatus("error");
      setMessage("Token de pagamento não encontrado.");
      return;
    }

    // Store accessToken for result page access
    localStorage.setItem("payment_access_token", token);
    if (testType) {
      localStorage.setItem("payment_test_type", testType);
    }

    checkPaymentStatus(token);
  }, [searchParams]);

  const checkPaymentStatus = async (token: string) => {
    try {
      // Fetch payment by access_token
      const { data: payment, error } = await supabase
        .from("payments")
        .select("*")
        .eq("access_token", token)
        .maybeSingle();

      if (error || !payment) {
        console.error("Payment not found:", error);
        setStatus("error");
        setMessage("Pagamento não encontrado.");
        return;
      }

      if (payment.status === "paid") {
        setStatus("success");
        setMessage("Pagamento confirmado! Redirecionando para seu resultado...");
        
        // Redirect to result page with accessToken
        setTimeout(() => {
          navigate(`/resultado?token=${token}`);
        }, 2000);
      } else if (payment.status === "processing") {
        setStatus("pending");
        setMessage("Aguardando confirmação do pagamento...");
        
        // Poll for status updates
        pollPaymentStatus(payment.id, token);
      } else {
        setStatus("error");
        setMessage(`Status do pagamento: ${payment.status}`);
      }
    } catch (err) {
      console.error("Error checking payment:", err);
      setStatus("error");
      setMessage("Erro ao verificar pagamento.");
    }
  };

  const pollPaymentStatus = async (paymentId: string, token: string) => {
    let attempts = 0;
    const maxAttempts = 30; // Poll for up to 30 seconds

    const poll = async () => {
      if (attempts >= maxAttempts) {
        setStatus("pending");
        setMessage("O pagamento ainda está sendo processado. Você pode verificar novamente em alguns minutos.");
        return;
      }

      attempts++;

      try {
        const { data, error } = await supabase.functions.invoke("check-payment-status", {
          body: { paymentId },
        });

        if (!error && data?.status === "paid") {
          setStatus("success");
          setMessage("Pagamento confirmado! Redirecionando para seu resultado...");
          
          setTimeout(() => {
            navigate(`/resultado?token=${token}`);
          }, 2000);
          return;
        }

        // Continue polling
        setTimeout(poll, 1000);
      } catch {
        setTimeout(poll, 1000);
      }
    };

    poll();
  };

  const handleGoToResult = () => {
    const token = searchParams.get("token");
    if (token) {
      navigate(`/resultado?token=${token}`);
    } else {
      navigate("/resultado");
    }
  };

  const handleGoToPayment = () => {
    navigate("/pagamento");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative bg-card rounded-2xl shadow-sacred p-8 md:p-12 border border-border/50 max-w-md text-center">
        {status === "loading" && (
          <>
            <Loader2 className="w-16 h-16 animate-spin text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Verificando Pagamento
            </h2>
            <p className="text-muted-foreground">
              Aguarde enquanto verificamos seu pagamento...
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Pagamento Confirmado!
            </h2>
            <p className="text-muted-foreground mb-6">{message}</p>
            <Button
              onClick={handleGoToResult}
              className="w-full h-12 bg-gold-gradient hover:opacity-90 text-accent-foreground font-semibold text-lg"
            >
              Ver Meu Resultado
            </Button>
          </>
        )}

        {status === "pending" && (
          <>
            <Loader2 className="w-16 h-16 animate-spin text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Aguardando Pagamento
            </h2>
            <p className="text-muted-foreground mb-6">{message}</p>
            <Button
              onClick={() => checkPaymentStatus(searchParams.get("token")!)}
              variant="outline"
              className="w-full h-12 mb-4"
            >
              Verificar Novamente
            </Button>
            <Button
              onClick={handleGoToPayment}
              variant="ghost"
              className="text-muted-foreground"
            >
              Voltar ao Pagamento
            </Button>
          </>
        )}

        {status === "error" && (
          <>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 mb-6">
              <XCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Erro no Pagamento
            </h2>
            <p className="text-muted-foreground mb-6">{message}</p>
            <Button
              onClick={handleGoToPayment}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Tentar Novamente
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccessPage;

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { calculateNormalizedScore, getResultLevel } from "@/data/quizQuestions";
import { useQuizSession } from "@/hooks/useQuizSession";
import { Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface PaymentData {
  id: string;
  status: string;
  customer_name: string;
  quiz_answers: number[] | null;
  score: number | null;
  access_token: string;
}

const ResultadoPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { sessionId, session, loading, clearSession } = useQuizSession();
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [payment, setPayment] = useState<PaymentData | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  // Check for access token in URL or localStorage
  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    const tokenFromStorage = localStorage.getItem("payment_access_token");
    const token = tokenFromUrl || tokenFromStorage;

    if (token) {
      loadPaymentByToken(token);
    }
  }, [searchParams]);

  const loadPaymentByToken = async (token: string) => {
    setIsLoadingPayment(true);
    setPaymentError(null);
    
    try {
      const { data, error } = await supabase
        .from("payments")
        .select("id, status, customer_name, quiz_answers, score, access_token")
        .eq("access_token", token)
        .maybeSingle();

      if (error) {
        console.error("Error loading payment:", error);
        setPaymentError("Erro ao carregar pagamento.");
        return;
      }
      
      if (data) {
        setPayment(data as PaymentData);
        // Store token for future visits
        localStorage.setItem("payment_access_token", token);
      } else {
        setPaymentError("Pagamento não encontrado.");
      }
    } catch (err) {
      console.error("Error loading payment:", err);
      setPaymentError("Erro ao carregar pagamento.");
    } finally {
      setIsLoadingPayment(false);
    }
  };

  // Determine if user has access (payment is paid)
  const isPaid = payment?.status === "paid";
  
  // Get answers from payment or session
  const answers = payment?.quiz_answers || session?.answers || [];
  const userName = payment?.customer_name || session?.user_name || "Católico";

  // Redirect if no data source
  useEffect(() => {
    if (!loading && !isLoadingPayment && !payment && !session && !searchParams.get("token")) {
      navigate("/quiz");
    }
  }, [loading, isLoadingPayment, payment, session, searchParams, navigate]);

  const handleRestart = () => {
    // Clear all payment data
    localStorage.removeItem("payment_id");
    localStorage.removeItem("payment_access_token");
    localStorage.removeItem("billing_url");
    localStorage.removeItem("pix_code");
    clearSession();
    navigate("/quiz");
  };

  const handleGoToPayment = () => {
    navigate("/pagamento");
  };

  const handleCheckPayment = async () => {
    const token = searchParams.get("token") || localStorage.getItem("payment_access_token");
    if (token) {
      await loadPaymentByToken(token);
    }
  };

  // Loading state
  if (loading || isLoadingPayment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-text-muted">Carregando resultado...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (paymentError && !session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-surface rounded-2xl shadow-soft p-8 md:p-12 border border-border/50 max-w-md text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background-muted mb-6">
            <Lock className="w-10 h-10 text-text-muted" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
            {paymentError}
          </h2>
          <Button onClick={() => navigate("/quiz")} className="w-full">
            Fazer o Quiz
          </Button>
        </div>
      </div>
    );
  }

  // No data
  if (!payment && !session) {
    return null;
  }

  // Block access if not paid
  if (!isPaid) {
    return (
      <div className="min-h-screen bg-background">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
          <div className="bg-surface rounded-2xl shadow-soft p-8 md:p-12 border border-border/50 max-w-md text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background-muted mb-6">
              <Lock className="w-10 h-10 text-text-muted" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Resultado Bloqueado
            </h2>
            
            <p className="text-text-muted mb-6">
              Para acessar seu resultado personalizado e o Guia da Vida Católica, é necessário concluir o pagamento.
            </p>

            {payment && payment.status === "processing" && (
              <Button
                onClick={handleCheckPayment}
                variant="outline"
                className="w-full h-12 mb-4"
              >
                Verificar Pagamento
              </Button>
            )}

            <Button
              onClick={handleGoToPayment}
              className="w-full h-12 bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-glow transition-all duration-300 mb-4"
            >
              Ir para Pagamento
            </Button>

            <Button
              onClick={handleRestart}
              variant="ghost"
              className="text-text-muted"
            >
              Refazer Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate results
  const totalPoints = answers.reduce((sum: number, points: number) => sum + (points || 0), 0);
  const normalizedScore = calculateNormalizedScore(totalPoints);
  const resultLevel = getResultLevel(normalizedScore);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col justify-center py-8">
          <ResultScreen
            score={normalizedScore}
            level={resultLevel}
            userName={userName}
            answers={answers}
            onRestart={handleRestart}
          />
        </main>

        <footer className="py-6 text-center">
          <p className="text-sm text-text-muted">
            © 2024 Bom Católico · Todos os direitos reservados
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ResultadoPage;

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { calculateNormalizedScore, getResultLevel } from "@/data/quizQuestions";
import { useQuizSession } from "@/hooks/useQuizSession";
import { Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const ResultadoPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { sessionId, session, loading, refreshSession, clearSession } = useQuizSession();
  const [isLoadingFromUrl, setIsLoadingFromUrl] = useState(false);
  const [urlSession, setUrlSession] = useState<any>(null);

  // Check for session ID in URL (for redirect from Abacate Pay)
  useEffect(() => {
    const urlSessionId = searchParams.get("session");
    if (urlSessionId && urlSessionId !== sessionId) {
      loadSessionFromUrl(urlSessionId);
    }
  }, [searchParams, sessionId]);

  const loadSessionFromUrl = async (id: string) => {
    setIsLoadingFromUrl(true);
    try {
      const { data, error } = await supabase
        .from("quiz_sessions")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        setUrlSession(data);
        // Store in localStorage for future visits
        localStorage.setItem("quiz_session_id", id);
      }
    } catch (err) {
      console.error("Error loading session from URL:", err);
    } finally {
      setIsLoadingFromUrl(false);
    }
  };

  // Determine which session to use
  const activeSession = urlSession || session;

  // Refresh session on mount to get latest payment status
  useEffect(() => {
    if (sessionId && !urlSession) {
      refreshSession();
    }
  }, [sessionId, refreshSession, urlSession]);

  // Redirect if no session
  useEffect(() => {
    if (!loading && !isLoadingFromUrl && !activeSession) {
      navigate("/quiz");
    }
  }, [loading, isLoadingFromUrl, activeSession, navigate]);

  const handleRestart = () => {
    clearSession();
    navigate("/quiz");
  };

  const handleGoToPayment = () => {
    navigate("/pagamento");
  };

  if (loading || isLoadingFromUrl) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando resultado...</p>
        </div>
      </div>
    );
  }

  if (!activeSession) {
    return null;
  }

  // Block access if not paid
  if (!activeSession.paid) {
    return (
      <div className="min-h-screen bg-background">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
          <div className="bg-card rounded-2xl shadow-sacred p-8 md:p-12 border border-border/50 max-w-md text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <Lock className="w-10 h-10 text-muted-foreground" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Resultado Bloqueado
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Para acessar seu resultado personalizado e o Guia da Vida Católica, é necessário concluir o pagamento.
            </p>

            <Button
              onClick={handleGoToPayment}
              className="w-full h-12 bg-gold-gradient hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-gold-glow transition-all duration-300 mb-4"
            >
              Ir para Pagamento
            </Button>

            <Button
              onClick={handleRestart}
              variant="ghost"
              className="text-muted-foreground"
            >
              Refazer Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate results from session data
  const answers = activeSession.answers || [];
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
            userName={activeSession.user_name || "Católico"}
            answers={answers}
            onRestart={handleRestart}
          />
        </main>

        <footer className="py-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Bom Católico · Todos os direitos reservados
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ResultadoPage;

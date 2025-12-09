import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { calculateNormalizedScore, getResultLevel } from "@/data/quizQuestions";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface UserData {
  name: string;
  whatsapp: string;
}

interface QuizData {
  answers: number[];
  userData: UserData;
  paymentId: string;
  createdAt: string;
}

const ResultadoPage = () => {
  const navigate = useNavigate();
  const { paymentId } = useParams<{ paymentId: string }>();
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!paymentId) {
        setError("ID de pagamento não encontrado");
        setIsLoading(false);
        return;
      }

      // Check payment status
      const { data: paymentData, error: paymentError } = await supabase
        .from('payment_confirmations')
        .select('status')
        .eq('payment_id', paymentId)
        .maybeSingle();

      if (paymentError) {
        console.error('Error checking payment:', paymentError);
        setError("Erro ao verificar pagamento");
        setIsLoading(false);
        return;
      }

      if (!paymentData || paymentData.status !== 'confirmed') {
        setError("Pagamento não confirmado. Complete o pagamento para acessar seu resultado.");
        setIsLoading(false);
        return;
      }

      // Load quiz data from localStorage
      const storedData = localStorage.getItem(`quiz_${paymentId}`);
      
      if (!storedData) {
        setError("Dados do quiz não encontrados. Por favor, refaça o quiz.");
        setIsLoading(false);
        return;
      }

      try {
        const parsed = JSON.parse(storedData) as QuizData;
        setQuizData(parsed);
      } catch (err) {
        console.error('Error parsing quiz data:', err);
        setError("Erro ao carregar dados do quiz");
      }

      setIsLoading(false);
    };

    loadData();
  }, [paymentId]);

  const handleRestart = () => {
    navigate("/quiz");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando seu resultado...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h2 className="text-2xl font-display text-primary mb-4">Ops!</h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <button
            onClick={() => navigate("/quiz")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Fazer o Quiz
          </button>
        </div>
      </div>
    );
  }

  if (!quizData) return null;

  const { answers, userData } = quizData;
  const totalPoints = answers.reduce((sum, points) => sum + (points || 0), 0);
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
            userName={userData.name}
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

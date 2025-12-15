import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { calculateNormalizedScore, getResultLevel } from "@/data/quizQuestions";

interface UserData {
  name: string;
  whatsapp: string;
}

const ResultadoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const answers = location.state?.answers as number[] | undefined;
  const userData = location.state?.userData as UserData | undefined;

  useEffect(() => {
    if (!answers || !userData) {
      navigate("/quiz");
    }
  }, [answers, userData, navigate]);

  const handleRestart = () => {
    navigate("/quiz");
  };

  if (!answers || !userData) return null;

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

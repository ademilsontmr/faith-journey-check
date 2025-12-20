import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { questions } from "@/data/quizQuestions";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuizSession } from "@/hooks/useQuizSession";

const QuizPage = () => {
  const navigate = useNavigate();
  const { sessionId, session, loading, createSession, updateAnswers, clearSession } = useQuizSession();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);

  // Initialize session on mount
  useEffect(() => {
    const initSession = async () => {
      if (!sessionId) {
        await createSession();
      } else if (session) {
        // Restore progress from existing session
        if (session.answers && session.answers.length > 0) {
          setAnswers(session.answers);
          // If quiz was completed, restart fresh
          if (session.completed_at) {
            clearSession();
            await createSession();
          } else {
            setCurrentQuestion(session.answers.length);
          }
        }
      }
      setIsInitializing(false);
    };

    if (!loading) {
      initSession();
    }
  }, [sessionId, session, loading, createSession, clearSession]);

  const handleSelectAnswer = useCallback(async (points: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);

    // Save to Supabase
    await updateAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        navigate("/dados");
      }
    }, 300);
  }, [answers, currentQuestion, navigate, updateAnswers]);

  if (loading || isInitializing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>

        <QuizHeader />

        <main className="flex-1 flex flex-col justify-center py-8">
          <ProgressBar current={currentQuestion + 1} total={questions.length} />
          <QuestionCard
            key={currentQuestion}
            question={questions[currentQuestion]}
            selectedAnswer={answers[currentQuestion] ?? null}
            onSelectAnswer={handleSelectAnswer}
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

export default QuizPage;

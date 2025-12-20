import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { questions } from "@/data/quizQuestions";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuizSession } from "@/hooks/useQuizSession";
import { toast } from "sonner";

const QuizPage = () => {
  const navigate = useNavigate();
  const { sessionId, session, loading, createSession, updateAnswers, clearSession } = useQuizSession();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);
  const initRef = useRef(false);

  // Initialize session on mount - only once
  useEffect(() => {
    const initSession = async () => {
      if (initRef.current) return;
      initRef.current = true;

      console.log("Initializing quiz session...", { sessionId, hasSession: !!session, loading });

      if (!sessionId) {
        console.log("No session ID, creating new session...");
        const newSession = await createSession();
        console.log("New session created:", newSession?.id);
      } else if (session) {
        console.log("Existing session found:", session.id, "answers:", session.answers);
        // Restore progress from existing session
        if (session.answers && session.answers.length > 0) {
          // If quiz was completed, restart fresh
          if (session.completed_at) {
            console.log("Session was completed, starting fresh...");
            clearSession();
            const newSession = await createSession();
            console.log("Fresh session created:", newSession?.id);
          } else {
            console.log("Restoring progress, question:", session.answers.length);
            setAnswers(session.answers);
            setCurrentQuestion(session.answers.length);
          }
        }
      }
      setIsInitializing(false);
    };

    if (!loading) {
      initSession();
    }
  }, [loading]); // Only depend on loading to prevent re-runs

  const handleSelectAnswer = useCallback(async (points: number) => {
    console.log("Answer selected:", points, "for question:", currentQuestion);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);

    // Save to Supabase (don't await to not block UI)
    updateAnswers(newAnswers).then(success => {
      console.log("Answers saved:", success);
    }).catch(err => {
      console.error("Error saving answers:", err);
      toast.error("Erro ao salvar resposta");
    });

    // Navigate after short delay for visual feedback
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        console.log("Moving to next question:", currentQuestion + 1);
        setCurrentQuestion((prev) => prev + 1);
      } else {
        console.log("Quiz completed! Navigating to /dados");
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

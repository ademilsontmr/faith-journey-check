import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { LeadForm } from "@/components/quiz/LeadForm";
import { PaymentScreen } from "@/components/quiz/PaymentScreen";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import {
  questions,
  calculateNormalizedScore,
  getResultLevel,
} from "@/data/quizQuestions";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type QuizStep = "quiz" | "lead" | "payment" | "result";

interface UserData {
  name: string;
  whatsapp: string;
}

const QuizPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<QuizStep>("quiz");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [userData, setUserData] = useState<UserData>({ name: "", whatsapp: "" });

  const handleSelectAnswer = useCallback((points: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setStep("lead");
      }
    }, 300);
  }, [answers, currentQuestion]);

  const handleLeadSubmit = useCallback((name: string, whatsapp: string) => {
    setUserData({ name, whatsapp });
    console.log("Lead captured:", { name, whatsapp });
    setStep("payment");
  }, []);

  const handlePaymentComplete = useCallback(() => {
    setStep("result");
  }, []);

  const handleRestart = useCallback(() => {
    setStep("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
    setUserData({ name: "", whatsapp: "" });
  }, []);

  const totalPoints = answers.reduce((sum, points) => sum + (points || 0), 0);
  const normalizedScore = calculateNormalizedScore(totalPoints);
  const resultLevel = getResultLevel(normalizedScore);

  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        {/* Back button */}
        {step === "quiz" && (
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
        )}

        {step !== "result" && <QuizHeader />}

        <main className="flex-1 flex flex-col justify-center py-8">
          {step === "quiz" && (
            <>
              <ProgressBar current={currentQuestion + 1} total={questions.length} />
              <QuestionCard
                key={currentQuestion}
                question={questions[currentQuestion]}
                selectedAnswer={answers[currentQuestion] ?? null}
                onSelectAnswer={handleSelectAnswer}
              />
            </>
          )}

          {step === "lead" && <LeadForm onSubmit={handleLeadSubmit} />}

          {step === "payment" && (
            <PaymentScreen onPaymentComplete={handlePaymentComplete} />
          )}

          {step === "result" && (
            <ResultScreen
              score={normalizedScore}
              level={resultLevel}
              userName={userData.name.split(" ")[0]}
              onRestart={handleRestart}
            />
          )}
        </main>

        <footer className="py-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Bom Cristão · Todos os direitos reservados
          </p>
        </footer>
      </div>
    </div>
  );
};

export default QuizPage;

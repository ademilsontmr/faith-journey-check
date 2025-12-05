import { useState, useCallback } from "react";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { StartScreen } from "@/components/quiz/StartScreen";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { LeadForm } from "@/components/quiz/LeadForm";
import { PaymentScreen } from "@/components/quiz/PaymentScreen";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import {
  questions,
  answerOptions,
  calculateNormalizedScore,
  getResultLevel,
} from "@/data/quizQuestions";

type QuizStep = "start" | "quiz" | "lead" | "payment" | "result";

interface UserData {
  name: string;
  whatsapp: string;
}

const Index = () => {
  const [step, setStep] = useState<QuizStep>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [userData, setUserData] = useState<UserData>({ name: "", whatsapp: "" });

  const handleStart = useCallback(() => {
    setStep("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  }, []);

  const handleSelectAnswer = useCallback((points: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);

    // Auto-advance after selection with a small delay
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
    
    // Here you would send the lead data to your API
    console.log("Lead captured:", { name, whatsapp });
    
    setStep("payment");
  }, []);

  const handlePaymentComplete = useCallback(() => {
    setStep("result");
  }, []);

  const handleRestart = useCallback(() => {
    setStep("start");
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
        {step !== "start" && step !== "result" && <QuizHeader />}

        <main className="flex-1 flex flex-col justify-center py-8">
          {step === "start" && <StartScreen onStart={handleStart} />}

          {step === "quiz" && (
            <>
              <ProgressBar current={currentQuestion + 1} total={questions.length} />
              <QuestionCard
                key={currentQuestion}
                question={questions[currentQuestion]}
                options={answerOptions}
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

        {/* Footer */}
        <footer className="py-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Bom Cristão · Todos os direitos reservados
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

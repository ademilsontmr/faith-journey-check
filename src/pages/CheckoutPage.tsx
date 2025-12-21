import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { LeadForm, CustomerData } from "@/components/quiz/LeadForm";
import { CheckoutPix } from "@/components/checkout/CheckoutPix";
import { useQuizSession } from "@/hooks/useQuizSession";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type CheckoutStep = "form" | "payment";

interface LocationState {
  testType?: string;
  score?: number;
  answers?: number[];
  maxScore?: number;
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sessionId, session, loading, updateUserData } = useQuizSession();
  
  const [step, setStep] = useState<CheckoutStep>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);
  
  // Get data from location state or session
  const locationState = location.state as LocationState | null;
  const testType = locationState?.testType || "spiritual_gifts";
  const answers = locationState?.answers || session?.answers || [];
  const score = locationState?.score ?? answers.reduce((a, b) => a + b, 0);
  const maxScore = locationState?.maxScore ?? answers.length * 3;

  // Guard: redirect if no session or no answers
  useEffect(() => {
    if (!loading && (!sessionId || !session?.answers || session.answers.length === 0)) {
      navigate("/quiz");
    }
  }, [sessionId, session, loading, navigate]);

  const handleLeadSubmit = async (data: CustomerData) => {
    setIsSubmitting(true);
    
    // Store customer data for payment step
    setCustomerData(data);
    
    // Update session with user name and phone
    const success = await updateUserData(data.name, data.phone);
    
    if (success) {
      // Link quiz session to payment (will be created in CheckoutPix)
      if (sessionId) {
        await supabase
          .from("quiz_sessions")
          .update({ 
            user_name: data.name,
            user_whatsapp: data.phone,
            completed_at: new Date().toISOString()
          })
          .eq("id", sessionId);
      }
      
      // Transition to payment step (no page navigation)
      setStep("payment");
    }
    
    setIsSubmitting(false);
  };

  const handlePaymentSuccess = (accessToken: string) => {
    // Mark quiz session as paid
    if (sessionId) {
      supabase
        .from("quiz_sessions")
        .update({ paid: true })
        .eq("id", sessionId);
    }
    
    // Navigate to PaymentSuccess for final confirmation
    navigate(`/payment-success?token=${accessToken}&test_type=${testType}`, {
      state: {
        testType,
        score,
        answers,
        maxScore,
      }
    });
  };

  if (loading || !session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-accent mx-auto mb-4" />
          <p className="text-text-muted">Carregando...</p>
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
        <QuizHeader />

        <main className="flex-1 flex flex-col justify-center py-8">
          {step === "form" && (
            <LeadForm onSubmit={handleLeadSubmit} isSubmitting={isSubmitting} />
          )}

          {step === "payment" && customerData && (
            <CheckoutPix
              customerData={customerData}
              testType={testType}
              quizAnswers={answers}
              score={score}
              maxScore={maxScore}
              onSuccess={handlePaymentSuccess}
            />
          )}
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

export default CheckoutPage;

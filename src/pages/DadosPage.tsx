import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { LeadForm } from "@/components/quiz/LeadForm";
import { useQuizSession } from "@/hooks/useQuizSession";
import { Loader2 } from "lucide-react";

const DadosPage = () => {
  const navigate = useNavigate();
  const { sessionId, session, loading, updateUserData } = useQuizSession();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && (!sessionId || !session?.answers || session.answers.length === 0)) {
      navigate("/quiz");
    }
  }, [sessionId, session, loading, navigate]);

  const handleLeadSubmit = async (name: string, whatsapp: string) => {
    setIsSubmitting(true);
    const success = await updateUserData(name, whatsapp);
    if (success) {
      navigate("/pagamento");
    } else {
      setIsSubmitting(false);
    }
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
          <LeadForm onSubmit={handleLeadSubmit} isSubmitting={isSubmitting} />
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

export default DadosPage;

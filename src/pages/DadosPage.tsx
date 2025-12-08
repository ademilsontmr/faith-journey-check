import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { LeadForm } from "@/components/quiz/LeadForm";

const DadosPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const answers = location.state?.answers as number[] | undefined;

  useEffect(() => {
    if (!answers || answers.length === 0) {
      navigate("/quiz");
    }
  }, [answers, navigate]);

  const handleLeadSubmit = (name: string, whatsapp: string) => {
    console.log("Lead captured:", { name, whatsapp });
    navigate("/pagamento", { state: { answers, userData: { name, whatsapp } } });
  };

  if (!answers) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        <QuizHeader />

        <main className="flex-1 flex flex-col justify-center py-8">
          <LeadForm onSubmit={handleLeadSubmit} />
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

export default DadosPage;

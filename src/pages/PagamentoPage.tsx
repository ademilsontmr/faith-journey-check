import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { Button } from "@/components/ui/button";
import { QrCode, Copy, CheckCircle2, Gift, BookOpen, Heart, Star, Loader2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { useQuizSession } from "@/hooks/useQuizSession";
import { supabase } from "@/integrations/supabase/client";

const PagamentoPage = () => {
  const navigate = useNavigate();
  const { sessionId, session, loading, refreshSession } = useQuizSession();
  const [copied, setCopied] = useState(false);
  const [isCreatingBilling, setIsCreatingBilling] = useState(false);
  const [billingUrl, setBillingUrl] = useState<string | null>(null);
  const [pixCode, setPixCode] = useState<string | null>(null);
  const [isCheckingPayment, setIsCheckingPayment] = useState(false);

  useEffect(() => {
    if (!loading && (!sessionId || !session?.user_name)) {
      navigate("/quiz");
    }
  }, [sessionId, session, loading, navigate]);

  // Redirect if already paid
  useEffect(() => {
    if (session?.paid) {
      navigate("/resultado");
    }
  }, [session?.paid, navigate]);

  // Create billing on mount
  useEffect(() => {
    if (sessionId && session?.user_name && !billingUrl && !isCreatingBilling) {
      createBilling();
    }
  }, [sessionId, session?.user_name]);

  const createBilling = async () => {
    if (!sessionId || !session) return;

    setIsCreatingBilling(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-billing", {
        body: {
          sessionId,
          userName: session.user_name,
          userWhatsapp: session.user_whatsapp,
        },
      });

      if (error) throw error;

      console.log("Billing created:", data);
      setBillingUrl(data.billingUrl);
      
      if (data.pixQrCode?.brCode) {
        setPixCode(data.pixQrCode.brCode);
      }
    } catch (error) {
      console.error("Error creating billing:", error);
      toast.error("Erro ao criar cobrança. Tente novamente.");
    } finally {
      setIsCreatingBilling(false);
    }
  };

  const handleCopyPix = async () => {
    if (!pixCode) return;
    
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      toast.success("Código PIX copiado!");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error("Erro ao copiar o código");
    }
  };

  const handleOpenPayment = () => {
    if (billingUrl) {
      window.open(billingUrl, "_blank");
    }
  };

  const handleCheckPayment = async () => {
    setIsCheckingPayment(true);
    await refreshSession();
    
    setTimeout(() => {
      setIsCheckingPayment(false);
      if (session?.paid) {
        navigate("/resultado");
      } else {
        toast.info("Pagamento ainda não confirmado. Aguarde alguns segundos e tente novamente.");
      }
    }, 1000);
  };

  if (loading || !session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando...</p>
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
          <div className="w-full max-w-md mx-auto px-4 animate-slide-up">
            <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-gradient mb-4">
                  <QrCode className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                  Desbloqueie seu Resultado
                </h2>
                <p className="text-muted-foreground mb-4">
                  Acesse seu resultado completo + Guia Exclusivo da Vida Católica
                </p>
                
                <div className="bg-gold-gradient text-accent-foreground rounded-xl p-4 mb-6">
                  <span className="text-sm font-medium">Valor único</span>
                  <p className="text-4xl font-bold">R$ 9,90</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-foreground">
                  <Star className="w-5 h-5 text-accent" />
                  <span>Resultado detalhado da sua vivência católica</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span>Guia completo com orações e devoções</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Dicas para crescer na fé católica</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Gift className="w-5 h-5 text-accent" />
                  <span>Conteúdos exclusivos por WhatsApp</span>
                </div>
              </div>

              {isCreatingBilling ? (
                <div className="bg-secondary/50 rounded-xl p-6 mb-4 text-center">
                  <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Gerando pagamento...</p>
                </div>
              ) : billingUrl ? (
                <>
                  <Button
                    onClick={handleOpenPayment}
                    className="w-full h-12 mb-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Pagar com PIX
                  </Button>

                  {pixCode && (
                    <Button
                      onClick={handleCopyPix}
                      variant="outline"
                      className="w-full h-12 mb-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 mr-2" />
                          Código Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5 mr-2" />
                          Copiar Código PIX
                        </>
                      )}
                    </Button>
                  )}
                </>
              ) : (
                <div className="bg-secondary/50 rounded-xl p-6 mb-4 text-center">
                  <p className="text-destructive">Erro ao gerar pagamento.</p>
                  <Button
                    onClick={createBilling}
                    variant="outline"
                    className="mt-4"
                  >
                    Tentar novamente
                  </Button>
                </div>
              )}

              <Button
                onClick={handleCheckPayment}
                disabled={isCheckingPayment}
                className="w-full h-12 bg-gold-gradient hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-gold-glow transition-all duration-300"
              >
                {isCheckingPayment ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  "Já Fiz o Pagamento"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Após o pagamento, clique no botão acima para liberar seu resultado.
              </p>
            </div>
          </div>
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

export default PagamentoPage;

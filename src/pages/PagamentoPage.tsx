import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { Button } from "@/components/ui/button";
import { QrCode, Copy, CheckCircle2, Gift, BookOpen, Heart, Star, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface UserData {
  name: string;
  whatsapp: string;
}

const generatePaymentId = () => {
  return `pmt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const PagamentoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const answers = location.state?.answers as number[] | undefined;
  const userData = location.state?.userData as UserData | undefined;
  const [copied, setCopied] = useState(false);
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [isPolling, setIsPolling] = useState(false);
  const [isCreatingPayment, setIsCreatingPayment] = useState(false);

  const pixCode = "00020126580014br.gov.bcb.pix0136a629532e-7693-4846-b028-ejemplo520400005303986540510.905802BR5925GUIA DA VIDA CATOLICA6009SAO PAULO62070503***6304E2CA";

  useEffect(() => {
    if (!answers || !userData) {
      navigate("/quiz");
    }
  }, [answers, userData, navigate]);

  const createPayment = useCallback(async () => {
    if (!answers || !userData || isCreatingPayment) return;
    
    setIsCreatingPayment(true);
    const newPaymentId = generatePaymentId();
    
    try {
      // Save data to localStorage
      const quizData = {
        answers,
        userData,
        paymentId: newPaymentId,
        createdAt: new Date().toISOString()
      };
      localStorage.setItem(`quiz_${newPaymentId}`, JSON.stringify(quizData));
      
      // Create pending payment in Supabase
      const { error } = await supabase
        .from('payment_confirmations')
        .insert({ 
          payment_id: newPaymentId, 
          status: 'pending' 
        });
      
      if (error) {
        console.error('Error creating payment:', error);
        toast.error("Erro ao criar pagamento. Tente novamente.");
        return;
      }
      
      setPaymentId(newPaymentId);
    } catch (err) {
      console.error('Error:', err);
      toast.error("Erro ao processar. Tente novamente.");
    } finally {
      setIsCreatingPayment(false);
    }
  }, [answers, userData, isCreatingPayment]);

  useEffect(() => {
    if (answers && userData && !paymentId && !isCreatingPayment) {
      createPayment();
    }
  }, [answers, userData, paymentId, isCreatingPayment, createPayment]);

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      toast.success("Código PIX copiado!");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error("Erro ao copiar o código");
    }
  };

  const checkPaymentStatus = useCallback(async () => {
    if (!paymentId) return false;
    
    try {
      const { data, error } = await supabase
        .from('payment_confirmations')
        .select('status')
        .eq('payment_id', paymentId)
        .maybeSingle();
      
      if (error) {
        console.error('Error checking payment:', error);
        return false;
      }
      
      return data?.status === 'confirmed';
    } catch (err) {
      console.error('Error:', err);
      return false;
    }
  }, [paymentId]);

  const handlePaymentComplete = async () => {
    if (!paymentId) {
      toast.error("Erro: ID de pagamento não encontrado");
      return;
    }
    
    setIsPolling(true);
    
    // Check immediately
    const isConfirmed = await checkPaymentStatus();
    
    if (isConfirmed) {
      navigate(`/resultado/${paymentId}`);
      return;
    }
    
    // Poll every 3 seconds for up to 60 seconds
    let attempts = 0;
    const maxAttempts = 20;
    
    const pollInterval = setInterval(async () => {
      attempts++;
      const confirmed = await checkPaymentStatus();
      
      if (confirmed) {
        clearInterval(pollInterval);
        setIsPolling(false);
        navigate(`/resultado/${paymentId}`);
      } else if (attempts >= maxAttempts) {
        clearInterval(pollInterval);
        setIsPolling(false);
        toast.error("Pagamento não confirmado. Verifique se completou o PIX e tente novamente.");
      }
    }, 3000);
  };

  // For testing: simulate payment confirmation
  const handleSimulatePayment = async () => {
    if (!paymentId) return;
    
    try {
      const { error } = await supabase
        .from('payment_confirmations')
        .update({ status: 'confirmed', confirmed_at: new Date().toISOString() })
        .eq('payment_id', paymentId);
      
      if (error) {
        console.error('Error confirming payment:', error);
        return;
      }
      
      toast.success("Pagamento confirmado!");
      navigate(`/resultado/${paymentId}`);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  if (!answers || !userData) return null;

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

              <div className="bg-secondary/50 rounded-xl p-6 mb-4">
                <div className="w-48 h-48 mx-auto bg-background rounded-lg flex items-center justify-center border-2 border-dashed border-border mb-4">
                  <QrCode className="w-24 h-24 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Escaneie o QR Code ou copie o código PIX abaixo
                </p>
              </div>

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

              <Button
                onClick={handlePaymentComplete}
                disabled={isPolling || !paymentId}
                className="w-full h-12 bg-gold-gradient hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-gold-glow transition-all duration-300"
              >
                {isPolling ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Verificando pagamento...
                  </>
                ) : (
                  "Já Fiz o Pagamento"
                )}
              </Button>

              {/* Temporary: Simulate payment for testing */}
              <Button
                onClick={handleSimulatePayment}
                variant="ghost"
                className="w-full h-10 mt-2 text-xs text-muted-foreground hover:text-foreground"
                disabled={!paymentId}
              >
                [Dev] Simular Confirmação de Pagamento
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Após o pagamento, clique no botão acima para liberar seu resultado.
              </p>

              {paymentId && (
                <p className="text-xs text-muted-foreground text-center mt-2">
                  ID do pagamento: {paymentId}
                </p>
              )}
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

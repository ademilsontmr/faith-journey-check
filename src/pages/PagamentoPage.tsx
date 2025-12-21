import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { Button } from "@/components/ui/button";
import { QrCode, Copy, CheckCircle2, Gift, BookOpen, Heart, Star, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useQuizSession } from "@/hooks/useQuizSession";
import { supabase } from "@/integrations/supabase/client";
import { CustomerData } from "@/components/quiz/LeadForm";

const CUSTOMER_DATA_KEY = "checkout_customer_data";

const PagamentoPage = () => {
  const navigate = useNavigate();
  const { sessionId, session, loading } = useQuizSession();
  const [copied, setCopied] = useState(false);
  const [isCreatingBilling, setIsCreatingBilling] = useState(false);
  const [pixCode, setPixCode] = useState<string | null>(null);
  const [isCheckingPayment, setIsCheckingPayment] = useState(false);
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);

  // Restore payment data and customer data from localStorage on mount
  useEffect(() => {
    const storedPaymentId = localStorage.getItem("payment_id");
    const storedAccessToken = localStorage.getItem("payment_access_token");
    const storedPixCode = localStorage.getItem("pix_code");
    const storedCustomerData = localStorage.getItem(CUSTOMER_DATA_KEY);
    
    if (storedPaymentId) setPaymentId(storedPaymentId);
    if (storedAccessToken) setAccessToken(storedAccessToken);
    if (storedPixCode) setPixCode(storedPixCode);
    if (storedCustomerData) {
      try {
        setCustomerData(JSON.parse(storedCustomerData));
      } catch {
        // Invalid JSON, ignore
      }
    }
  }, []);

  // Redirect if no session or no customer data
  useEffect(() => {
    if (!loading && (!sessionId || !session?.user_name)) {
      navigate("/quiz");
      return;
    }
    
    // Check if customer data exists
    const storedCustomerData = localStorage.getItem(CUSTOMER_DATA_KEY);
    if (!loading && session && !storedCustomerData) {
      navigate("/dados");
    }
  }, [sessionId, session, loading, navigate]);

  // NOTE: Removed auto-redirect to /resultado
  // User must always confirm payment via PaymentSuccess page

  // Create billing only if no existing payment and customer data exists
  useEffect(() => {
    const storedCustomerData = localStorage.getItem(CUSTOMER_DATA_KEY);
    if (
      sessionId && 
      session?.user_name && 
      !pixCode && 
      !isCreatingBilling && 
      !paymentId && 
      storedCustomerData
    ) {
      try {
        const parsedData = JSON.parse(storedCustomerData);
        setCustomerData(parsedData);
        createBilling(parsedData);
      } catch {
        navigate("/dados");
      }
    }
  }, [sessionId, session?.user_name, paymentId, pixCode]);

  const createBilling = async (data: CustomerData) => {
    if (!sessionId || !session) return;

    setIsCreatingBilling(true);
    setPaymentError(null);
    
    try {
      const { data: responseData, error } = await supabase.functions.invoke("create-payment", {
        body: {
          amount: 9.90,
          testType: "spiritual_gifts",
          customerEmail: data.email,
          customerName: data.name,
          customerPhone: data.phone,
          customerTaxId: data.taxId,
          quizAnswers: session.answers,
          score: session.answers?.reduce((a: number, b: number) => a + b, 0) || 0,
          maxScore: session.answers?.length ? session.answers.length * 3 : 0,
        },
      });

      if (error) throw error;

      console.log("PIX charge created:", responseData);
      
      // Store payment data - brCode comes directly from response
      if (responseData.paymentId) {
        setPaymentId(responseData.paymentId);
        localStorage.setItem("payment_id", responseData.paymentId);
      }
      
      if (responseData.accessToken) {
        setAccessToken(responseData.accessToken);
        localStorage.setItem("payment_access_token", responseData.accessToken);
      }
      
      // brCode is the PIX copy-paste code
      if (responseData.brCode) {
        setPixCode(responseData.brCode);
        localStorage.setItem("pix_code", responseData.brCode);
      }
      
      // Link payment to quiz session
      if (responseData.paymentId && sessionId) {
        await supabase
          .from("quiz_sessions")
          .update({ payment_id: responseData.paymentId })
          .eq("id", sessionId);
      }
    } catch (error) {
      console.error("Error creating PIX charge:", error);
      setPaymentError("Erro ao criar cobrança. Tente novamente.");
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

  const handleRetry = () => {
    if (customerData) {
      createBilling(customerData);
    } else {
      navigate("/dados");
    }
  };

  const handleCheckPayment = async () => {
    setIsCheckingPayment(true);
    
    try {
      const currentPaymentId = paymentId || localStorage.getItem("payment_id");
      const currentAccessToken = accessToken || localStorage.getItem("payment_access_token");
      
      if (currentPaymentId) {
        const { data, error } = await supabase.functions.invoke("check-payment-status", {
          body: { paymentId: currentPaymentId },
        });
        
        // Normalize status: "paid" -> "approved"
        const normalizedStatus = data?.status === "paid" ? "approved" : data?.status;
        
        if (!error && normalizedStatus === "approved") {
          toast.success("Pagamento aprovado!");
          
          // Also mark quiz session as paid
          if (sessionId) {
            await supabase
              .from("quiz_sessions")
              .update({ paid: true })
              .eq("id", sessionId);
          }
          
          // Redirect to PaymentSuccess for confirmation flow
          navigate(`/payment-success?token=${currentAccessToken}&test_type=spiritual_gifts`);
          return;
        }
      }
      
      // Fallback: check by access token directly in DB
      if (currentAccessToken) {
        const { data: payment } = await supabase
          .from("payments")
          .select("status")
          .eq("access_token", currentAccessToken)
          .maybeSingle();
        
        // Normalize status
        const normalizedStatus = payment?.status === "paid" ? "approved" : payment?.status;
        
        if (normalizedStatus === "approved") {
          toast.success("Pagamento aprovado!");
          // Redirect to PaymentSuccess for confirmation flow
          navigate(`/payment-success?token=${currentAccessToken}&test_type=spiritual_gifts`);
          return;
        }
      }
      
      toast.info("Pagamento ainda não confirmado. Aguarde alguns segundos e tente novamente.");
    } catch (error) {
      console.error("Error checking payment:", error);
      toast.info("Pagamento ainda não confirmado. Aguarde alguns segundos e tente novamente.");
    } finally {
      setIsCheckingPayment(false);
    }
  };

  if (loading || !session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
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
          <div className="w-full max-w-md mx-auto px-4 animate-slide-up">
            <div className="bg-surface rounded-2xl shadow-soft p-6 md:p-8 border border-border/50">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <QrCode className="w-8 h-8 text-button-text" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
                  Pague com PIX
                </h2>
                <p className="text-text-muted mb-4">
                  Copie o código abaixo e pague no app do seu banco
                </p>
                
                <div className="bg-gradient-accent text-accent-foreground rounded-xl p-4 mb-6">
                  <span className="text-sm font-medium">Valor único</span>
                  <p className="text-4xl font-bold">R$ 9,90</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-text">
                  <Star className="w-5 h-5 text-accent" />
                  <span>Resultado detalhado da sua vivência católica</span>
                </div>
                <div className="flex items-center gap-3 text-text">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span>Guia completo com orações e devoções</span>
                </div>
                <div className="flex items-center gap-3 text-text">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Dicas para crescer na fé católica</span>
                </div>
                <div className="flex items-center gap-3 text-text">
                  <Gift className="w-5 h-5 text-accent" />
                  <span>Conteúdos exclusivos por WhatsApp</span>
                </div>
              </div>

              {isCreatingBilling ? (
                <div className="bg-secondary/50 rounded-xl p-6 mb-4 text-center">
                  <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                  <p className="text-text-muted">Gerando código PIX...</p>
                </div>
              ) : pixCode ? (
                <>
                  {/* PIX Code Display */}
                  <div className="bg-background-muted rounded-xl p-4 mb-4">
                    <p className="text-xs text-text-muted mb-2 text-center">Código PIX Copia e Cola:</p>
                    <div className="bg-background rounded-lg p-3 break-all text-xs text-text font-mono max-h-24 overflow-y-auto">
                      {pixCode}
                    </div>
                  </div>

                  <Button
                    onClick={handleCopyPix}
                    className="w-full h-12 mb-4 bg-button hover:bg-button-hover text-button-text font-semibold text-lg transition-all duration-300"
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
                </>
              ) : paymentError ? (
                <div className="bg-secondary/50 rounded-xl p-6 mb-4 text-center">
                  <p className="text-error mb-4">{paymentError}</p>
                  <Button
                    onClick={handleRetry}
                    variant="outline"
                  >
                    Tentar novamente
                  </Button>
                </div>
              ) : null}

              <Button
                onClick={handleCheckPayment}
                disabled={isCheckingPayment || !pixCode}
                className="w-full h-12 bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-glow transition-all duration-300"
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

              <p className="text-xs text-text-muted text-center mt-4">
                Após o pagamento, clique no botão acima para liberar seu resultado.
              </p>
            </div>
          </div>
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

export default PagamentoPage;

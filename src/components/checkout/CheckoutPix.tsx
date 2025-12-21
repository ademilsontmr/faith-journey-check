import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { QrCode, Copy, CheckCircle2, Gift, BookOpen, Heart, Star, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export interface CheckoutPixProps {
  customerData: {
    name: string;
    email: string;
    phone: string;
    taxId: string;
  };
  testType: string;
  quizAnswers: number[];
  score: number;
  maxScore: number;
  onSuccess: (accessToken: string) => void;
}

export function CheckoutPix({
  customerData,
  testType,
  quizAnswers,
  score,
  maxScore,
  onSuccess,
}: CheckoutPixProps) {
  const [copied, setCopied] = useState(false);
  const [isCreatingBilling, setIsCreatingBilling] = useState(false);
  const [pixCode, setPixCode] = useState<string | null>(null);
  const [isCheckingPayment, setIsCheckingPayment] = useState(false);
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  // Normalize payment status to "approved"
  const normalizePaymentStatus = (status: string) => {
    return status === "paid" ? "approved" : status;
  };

  // Create billing on mount
  useEffect(() => {
    if (!pixCode && !isCreatingBilling && !paymentId) {
      createBilling();
    }
  }, []);

  const createBilling = async () => {
    setIsCreatingBilling(true);
    setPaymentError(null);

    try {
      const { data: responseData, error } = await supabase.functions.invoke("create-payment", {
        body: {
          amount: 9.90,
          testType,
          customerEmail: customerData.email,
          customerName: customerData.name,
          customerPhone: customerData.phone,
          customerTaxId: customerData.taxId,
          quizAnswers,
          score,
          maxScore,
        },
      });

      if (error) throw error;

      console.log("PIX charge created:", responseData);

      // Store payment data
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
    createBilling();
  };

  const handleCheckPayment = useCallback(async () => {
    setIsCheckingPayment(true);

    try {
      const currentPaymentId = paymentId || localStorage.getItem("payment_id");
      const currentAccessToken = accessToken || localStorage.getItem("payment_access_token");

      if (currentPaymentId) {
        const { data, error } = await supabase.functions.invoke("check-payment-status", {
          body: { paymentId: currentPaymentId },
        });

        const normalizedStatus = normalizePaymentStatus(data?.status || "");

        if (!error && normalizedStatus === "approved") {
          toast.success("Pagamento aprovado!");
          
          if (currentAccessToken) {
            onSuccess(currentAccessToken);
          }
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

        const normalizedStatus = normalizePaymentStatus(payment?.status || "");

        if (normalizedStatus === "approved") {
          toast.success("Pagamento aprovado!");
          onSuccess(currentAccessToken);
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
  }, [paymentId, accessToken, onSuccess]);

  return (
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
            <Button onClick={handleRetry} variant="outline">
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
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QrCode, Copy, CheckCircle2, Gift, BookOpen, Heart, Star } from "lucide-react";
import { toast } from "sonner";

interface PaymentScreenProps {
  onPaymentComplete: () => void;
}

export function PaymentScreen({ onPaymentComplete }: PaymentScreenProps) {
  const [copied, setCopied] = useState(false);
  
  // Placeholder PIX code - in production this would be dynamic
  const pixCode = "00020126580014br.gov.bcb.pix0136a629532e-7693-4846-b028-ejemplo520400005303986540510.905802BR5925GUIA DA VIDA CATOLICA6009SAO PAULO62070503***6304E2CA";

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

  return (
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

        {/* Benefits */}
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

        {/* QR Code placeholder */}
        <div className="bg-secondary/50 rounded-xl p-6 mb-4">
          <div className="w-48 h-48 mx-auto bg-background rounded-lg flex items-center justify-center border-2 border-dashed border-border mb-4">
            <QrCode className="w-24 h-24 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Escaneie o QR Code ou copie o código PIX abaixo
          </p>
        </div>

        {/* Copy PIX button */}
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

        {/* Confirm payment button */}
        <Button
          onClick={onPaymentComplete}
          className="w-full h-12 bg-gold-gradient hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-gold-glow transition-all duration-300"
        >
          Já Fiz o Pagamento
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Após o pagamento, clique no botão acima para liberar seu resultado.
        </p>
      </div>
    </div>
  );
}

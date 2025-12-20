import { Button } from "@/components/ui/button";
import { Cross, BookOpen, Clock, Award, CheckCircle } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="w-full max-w-lg mx-auto px-4 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center gap-2 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center animate-float">
            <Cross className="w-6 h-6 text-accent-foreground" />
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
            <BookOpen className="w-6 h-6 text-button-text" />
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
          Como é a sua{" "}
          <span className="text-gradient-accent">vivência católica</span>?
        </h1>

        <p className="text-lg text-text-muted mb-8 max-w-md mx-auto">
          Descubra como está sua caminhada de fé através deste quiz simples e sincero.
        </p>
      </div>

      {/* Info Card */}
      <div className="bg-surface rounded-2xl shadow-soft p-6 md:p-8 border border-border/50 mb-8">
        <h2 className="font-display text-xl text-center text-text mb-6">
          O que você vai descobrir
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-text">Diagnóstico da sua Fé</h3>
              <p className="text-sm text-text-muted">
                Avalie sua participação na vida sacramental da Igreja
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-text">Seu Nível de Praticante</h3>
              <p className="text-sm text-text-muted">
                Descubra onde você está na sua jornada espiritual
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-text">Guia Exclusivo</h3>
              <p className="text-sm text-text-muted">
                Receba dicas personalizadas para crescer na fé
              </p>
            </div>
          </div>
        </div>

        {/* Quiz Info */}
        <div className="flex items-center justify-center gap-6 py-4 border-y border-border mb-6">
          <div className="flex items-center gap-2 text-text-muted">
            <Clock className="w-4 h-4" />
            <span className="text-sm">~5 minutos</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-text-muted">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">30 perguntas</span>
          </div>
        </div>

        <Button
          onClick={onStart}
          size="lg"
          className="w-full h-14 bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-glow transition-all duration-300"
        >
          Começar o Quiz
        </Button>

        <p className="text-xs text-center text-text-muted mt-4">
          Suas respostas são confidenciais e não serão compartilhadas.
        </p>
      </div>
    </div>
  );
}

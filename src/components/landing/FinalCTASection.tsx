import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cross, ChevronRight, Clock, CheckCircle, Shield } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Card */}
          <div className="bg-surface rounded-3xl shadow-soft border border-border/50 p-8 md:p-12 text-center">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-gradient-accent mx-auto mb-8 flex items-center justify-center shadow-glow">
              <Cross className="w-10 h-10 text-accent-foreground" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Pronto para Descobrir seu Nível de Fé?
            </h2>
            
            <p className="text-lg text-text-muted mb-8 max-w-xl mx-auto">
              Faça o quiz agora e receba um diagnóstico completo da sua vivência católica. 
              É rápido e transformador.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Apenas 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>30 perguntas</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>100% seguro</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/quiz">
              <Button
                size="lg"
                className="h-16 px-12 bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold text-xl shadow-glow transition-all duration-300 group"
              >
                Começar o Quiz Agora
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <p className="mt-6 text-sm text-text-muted">
              Suas respostas são confidenciais e não serão compartilhadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

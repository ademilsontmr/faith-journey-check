import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardList, UserCheck, Gift, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Responda 30 Perguntas",
    description: "Perguntas simples sobre sua vida de oração, participação na Missa, sacramentos e devoções.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Receba Seu Diagnóstico",
    description: "Descubra seu nível de vivência católica com base nas suas respostas sinceras.",
  },
  {
    number: "03",
    icon: Gift,
    title: "Baixe Seu Guia",
    description: "Receba um guia exclusivo com orações e dicas para fortalecer sua caminhada de fé.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Simples e Rápido
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Como Funciona?
          </h2>
          <p className="text-text-muted text-lg">
            Em apenas 5 minutos você terá uma visão clara da sua vida espiritual.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}
              
              <div className="relative bg-surface rounded-2xl p-8 border border-border/50 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-button text-button-text px-4 py-1 rounded-full text-sm font-bold">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/quiz">
            <Button
              size="lg"
              className="h-14 px-10 bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-glow transition-all duration-300 group"
            >
              Começar Agora
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

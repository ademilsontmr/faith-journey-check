import { Heart, Target, BookOpen, Users, Star, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Diagnóstico Completo",
    description: "Avalie sua participação na vida sacramental, oração e devoções da Igreja Católica.",
  },
  {
    icon: Star,
    title: "Classificação Personalizada",
    description: "Descubra seu nível de praticante: de 'Início da Jornada' a 'Católico Exemplar'.",
  },
  {
    icon: BookOpen,
    title: "Guia Exclusivo",
    description: "Receba um PDF com orações, devoções e dicas práticas para crescer na fé.",
  },
  {
    icon: Heart,
    title: "Reflexão Espiritual",
    description: "30 perguntas que vão te fazer refletir sobre sua relação com Deus e a Igreja.",
  },
  {
    icon: Users,
    title: "Comunidade de Fé",
    description: "Faça parte de milhares de católicos buscando viver melhor sua fé.",
  },
  {
    icon: Trophy,
    title: "Acompanhamento",
    description: "Receba conteúdos exclusivos para continuar sua jornada espiritual.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Por que fazer o quiz?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Conheça os Benefícios
          </h2>
          <p className="text-text-muted text-lg">
            Mais do que um quiz, uma oportunidade de refletir e crescer na sua vida cristã.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
                <benefit.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-text mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

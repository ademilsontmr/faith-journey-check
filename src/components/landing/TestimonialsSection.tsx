import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Fernanda",
    location: "São Paulo, SP",
    rating: 5,
    text: "O quiz me fez perceber que preciso voltar a rezar o terço diariamente. Muito edificante!",
    level: "Católico em Crescimento",
  },
  {
    name: "José Roberto",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Excelente ferramenta para fazer um exame de consciência sobre nossa vida de fé. Recomendo!",
    level: "Católico Comprometido",
  },
  {
    name: "Ana Carolina",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "O guia que recebi está me ajudando muito a organizar minha vida de oração. Gratidão!",
    level: "Católico Praticante Exemplar",
  },
  {
    name: "Pedro Henrique",
    location: "Curitiba, PR",
    rating: 5,
    text: "Fiquei surpreso com o resultado! Me motivou a participar mais da vida da minha paróquia.",
    level: "Católico em Busca",
  },
  {
    name: "Lucia Helena",
    location: "Porto Alegre, RS",
    rating: 5,
    text: "As perguntas são muito bem elaboradas. Me fizeram refletir profundamente sobre minha fé.",
    level: "Católico Comprometido",
  },
  {
    name: "Francisco Carlos",
    location: "Fortaleza, CE",
    rating: 5,
    text: "Compartilhei com meu grupo de oração. Todos amaram e estão usando para crescer na fé!",
    level: "Católico Praticante Exemplar",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            O Que Dizem os Participantes
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Milhares de católicos já fizeram o quiz e estão crescendo na fé.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.location}</p>
                </div>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                  {testimonial.level.split(" ").slice(-1)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent">10k+</p>
            <p className="text-primary-foreground/70 mt-2">Quizzes Realizados</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent">4.9</p>
            <p className="text-primary-foreground/70 mt-2">Avaliação Média</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent">98%</p>
            <p className="text-primary-foreground/70 mt-2">Recomendam</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent">27</p>
            <p className="text-primary-foreground/70 mt-2">Estados do Brasil</p>
          </div>
        </div>
      </div>
    </section>
  );
}

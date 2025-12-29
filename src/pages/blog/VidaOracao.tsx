import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

export default function VidaOracao() {
  return (
    <>
      <Helmet>
        <title>A Vida de Oração: Como Cultivar uma Intimidade com Deus | Bom Católico</title>
        <meta name="description" content="Descubra como desenvolver uma vida de oração profunda e constante. Dicas práticas e espirituais para fortalecer sua amizade com Deus diariamente." />
        <meta name="keywords" content="vida de oração, como orar, intimidade com Deus, oração católica, espiritualidade" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/vida-oracao" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="bg-primary text-button-text py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-button-text" />
              </div>
              <span className="font-display text-xl font-bold">Bom Católico</span>
            </Link>
            <Link to="/quiz">
              <Button variant="secondary" size="sm">
                Fazer o Quiz
              </Button>
            </Link>
          </div>
        </header>

        <div className="bg-background-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">A Vida de Oração</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Espiritualidade
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  29 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 min de leitura
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                A Vida de Oração: Como Cultivar uma Intimidade com Deus
              </h1>
              
              <p className="text-xl text-text-muted leading-relaxed">
                A oração não é apenas um dever, mas uma necessidade da alma. Aprenda como transformar seu diálogo com Deus em uma fonte de vida e paz.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Santa Teresa d'Ávila definia a oração como "um trato de amizade, estando muitas vezes a sós com Quem sabemos que nos ama". Para o católico, a oração é o oxigênio da alma. Sem ela, a fé enfraquece, a esperança vacila e a caridade esfria. No entanto, muitos encontram dificuldades em manter uma rotina constante de diálogo com o Criador.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Por que a Oração é Essencial?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A oração nos sintoniza com a vontade de Deus. Ela não serve para convencer Deus a fazer o que queremos, mas para preparar nosso coração para receber o que Ele deseja nos dar. Através da oração, recebemos as graças necessárias para enfrentar as tentações, discernir caminhos e encontrar sentido nos sofrimentos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Dicas Práticas para Começar
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Reserve um Tempo e um Lugar
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Deus está em todo lugar, mas nossa mente se dispersa facilmente. Ter um "cantinho de oração" com uma imagem, uma vela ou a Bíblia ajuda a focar. Da mesma forma, escolher um horário fixo — seja ao acordar ou antes de dormir — cria o hábito necessário.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Use Orações Vocais e Silêncio
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Comece com as orações que a Igreja nos ensinou: Pai-Nosso, Ave-Maria, Glória. Elas são a base. Mas não pare nelas. Reserve momentos de silêncio para ouvir o que Deus fala ao seu coração através das inspirações e da paz interior.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Oração Mental e a Meditação
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A meditação cristã consiste em refletir sobre as verdades da fé ou passagens da Escritura. Ao meditar sobre a Paixão de Cristo, por exemplo, não apenas recordamos um fato histórico, mas nos unimos ao amor de Jesus por nós, permitindo que esse amor transforme nossas atitudes.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "A oração é a melhor arma que temos; é uma chave que abre o coração de Deus."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — São Padre Pio de Pietrelcina
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Como está sua conexão com Deus?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra em que nível está sua jornada espiritual e como você pode crescer ainda mais na fé.
              </p>
              <Link to="/quiz">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Fazer o Quiz Agora
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}

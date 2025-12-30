import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

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
                Santa Teresa d'Ávila definia a oração como "um trato de amizade, estando muitas vezes a sós com Quem sabemos que nos ama". Para o católico, a oração é o oxigênio da alma. Sem ela, a fé enfraquece, a esperança vacila e a caridade esfria. No entanto, muitos encontram dificuldades em manter uma rotina constante de diálogo com o Criador. A boa notícia é que Deus não exige perfeição – Ele exige apenas sinceridade e perseverança.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A oração não é uma técnica complicada reservada aos monges e santos. É simplesmente conversar com Deus como você conversaria com um amigo querido. Jesus nos ensinou: "Quando orarem, não façam como os hipócritas... Mas você, quando orar, entre em seu quarto, feche a porta e ore a seu Pai em secreto" (Mt 6,5-6). A oração é um encontro íntimo, pessoal, onde Deus nos conhece completamente e nos ama apesar de tudo.
              </p>

              <QuizCTA
                title="Como está sua conexão com Deus?"
                description="A oração é o oxigênio da alma e o trato de amizade com o Criador. Faça nosso quiz e descubra em que nível está sua jornada espiritual e como crescer na intimidade com o Senhor."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Por que a Oração é Essencial?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A oração nos sintoniza com a vontade de Deus. Ela não serve para convencer Deus a fazer o que queremos – Ele já sabe o que precisamos antes mesmo de pedirmos. A oração nos transforma. Ela nos prepara para receber o que Deus deseja nos dar. Através da oração, recebemos as graças necessárias para enfrentar as tentações, discernir caminhos confusos e encontrar sentido nos sofrimentos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Paulo nos exorta: "Orai sem cessar" (1Ts 5,17). Não significa estar de joelhos o tempo todo, mas manter o coração voltado para Deus em todas as circunstâncias. Quando você trabalha com a intenção de agradar a Deus, está orando. Quando sofre com paciência, está orando. Quando ama o próximo, está orando. A vida inteira pode se tornar uma oração.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Diferentes Tipos de Oração
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Oração de Adoração
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Reconhecer a grandeza de Deus e nossa pequenez diante Dele. É simplesmente dizer: "Senhor, Tu és Deus e eu sou nada. Mas que privilégio ser criado por Ti!"
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Oração de Ação de Graças
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Agradecer a Deus por tudo – pelas alegrias óbvias, mas também pelas dificuldades que nos fazem crescer. São Paulo diz: "Em tudo dai graças" (1Ts 5,18).
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Oração de Petição
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Pedir a Deus o que precisamos. Jesus nos encorajou: "Pedi e vos será dado" (Mt 7,7). Não tenha medo de pedir – Deus quer nos abençoar.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Oração de Intercessão
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Rezar pelos outros. É um ato de caridade poderoso. Quando você reza por alguém, está colocando essa pessoa nos braços de Deus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Dicas Práticas para Começar
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Reserve um Tempo e um Lugar
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Deus está em todo lugar, mas nossa mente se dispersa facilmente. Ter um "cantinho de oração" com uma imagem, uma vela ou a Bíblia ajuda a focar. Da mesma forma, escolher um horário fixo — seja ao acordar ou antes de dormir — cria o hábito necessário. Comece com apenas 10 minutos. A consistência é mais importante que a duração.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Use Orações Vocais e Silêncio
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Comece com as orações que a Igreja nos ensinou: Pai-Nosso, Ave-Maria, Glória. Elas são a base sólida. Mas não pare nelas. Reserve momentos de silêncio para ouvir o que Deus fala ao seu coração através das inspirações e da paz interior. Muitas vezes, Deus nos fala não em palavras, mas em sentimentos de paz, clareza ou amor.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                3. Não Desista nas Securas
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Haverá dias em que a oração parecerá árida, sem sabor, como se Deus estivesse longe. Esses são os dias mais preciosos! Quando você ora sem sentir consolação, está amando a Deus por Ele mesmo, não pelos sentimentos que Ele nos dá. São João da Cruz chamava isso de "noite escura" – é quando a fé cresce mais.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Oração Mental e a Meditação
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A meditação cristã consiste em refletir sobre as verdades da fé ou passagens da Escritura. Ao meditar sobre a Paixão de Cristo, por exemplo, não apenas recordamos um fato histórico, mas nos unimos ao amor de Jesus por nós, permitindo que esse amor transforme nossas atitudes. Você pode meditar sobre um mistério do Rosário, um versículo da Bíblia ou um ensinamento da Igreja. O importante é deixar que a verdade penetre seu coração.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Oração Contemplativa
              </h2>
              <p className="text-text leading-relaxed mb-6">
                É o pico da vida de oração – simplesmente estar na presença de Deus sem palavras, sem pensamentos, apenas amando. Santa Teresa d'Ávila descrevia como "estar a sós com Quem sabemos que nos ama". Nem todos chegam a esse nível, mas todos podem aspirar a ele. Comece com oração vocal e meditação; a contemplação virá como um presente de Deus.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "A oração é a melhor arma que temos; é uma chave que abre o coração de Deus."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — São Padre Pio de Pietrelcina
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Orar é amar. E amar é orar."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Santa Teresa de Calcutá
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="vida-oracao" />

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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OInfernoCeuPurgatorio() {
  return (
    <>
      <Helmet>
        <title>Céu, Inferno e Purgatório: O Destino Eterno da Alma | Bom Católico</title>
        <meta name="description" content="Entenda a doutrina católica sobre o Céu, Inferno e Purgatório. O que a Igreja ensina sobre o destino eterno e como viver preparado para a eternidade." />
        <meta name="keywords" content="céu, inferno, purgatório, vida eterna, julgamento, destino eterno, doutrina católica" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/ceu-inferno-purgatorio" />
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
              <span className="text-text">Céu, Inferno e Purgatório</span>
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
                  Doutrina
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  13 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Céu, Inferno e Purgatório: O Destino Eterno da Alma
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A morte não é o fim. Entenda o que a Igreja Católica ensina sobre os três destinos possíveis da alma e como viver preparado para a eternidade.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Cloud className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                A morte é o fim da vida terrena, mas não o fim da existência. Cada alma é imortal e viverá para sempre. A grande questão não é "vou viver para sempre?", mas "onde vou viver para sempre?". A resposta depende das escolhas que fazemos nesta vida. A Igreja Católica nos ensina que existem três destinos possíveis: o Céu, o Inferno e o Purgatório.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Muitos modernos acham estranho falar sobre o Inferno. Preferem acreditar que "todos vão para o Céu" ou que "Deus é tão bom que não mandaria ninguém para o Inferno". Mas Jesus falou mais sobre o Inferno do que qualquer outro tema. Ele não o fez para nos assustar, mas para nos avisar com amor, como um pai avisa seu filho sobre o perigo.
              </p>

              <QuizCTA
                title="Você está preparado para a eternidade?"
                description="O destino eterno é a questão mais importante da vida. Faça nosso quiz e descubra como viver em preparação para encontrar Deus face a face."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Céu: A Bem-Aventurança Eterna
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O Céu é a presença de Deus. É a visão beatífica – ver Deus face a face e ser transformado por Seu amor infinito. Não é um lugar de nuvens e harpas, como muitos imaginam, mas uma realidade muito mais gloriosa. É a comunhão perfeita com Deus e com todos os santos. É a alegria completa, sem tristeza, sem medo, sem dor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Para entrar no Céu, você precisa estar em estado de graça – em amizade com Deus. Se você morrer em pecado mortal, não pode entrar no Céu. Mas se você morrer em estado de graça, mesmo que tenha pecados veniais não confessados, você irá para o Purgatório, onde será purificado, e depois entrará no Céu. O Céu é o destino de todos os que amam a Deus e buscam viver segundo Sua vontade.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Inferno: A Separação Eterna de Deus
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O Inferno é a ausência de Deus. É o que acontece quando uma alma, por sua própria escolha, se recusa a amar a Deus e a viver segundo Sua vontade. Deus não manda ninguém para o Inferno – somos nós que nos mandamos, através de nossas escolhas. Como disse C.S. Lewis: "As portas do Inferno estão trancadas por dentro."
              </p>
              <p className="text-text leading-relaxed mb-6">
                O Inferno é real e eterno. Jesus falou sobre "o fogo eterno preparado para o diabo e seus anjos" (Mt 25,41). Não é um lugar de tortura física, mas de tormento espiritual – a consciência de ter rejeitado o Amor infinito. É a pior coisa que pode acontecer a uma alma: estar separada de Deus para sempre.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Quem vai para o Inferno? Aqueles que morrem em pecado mortal sem arrependimento. Aqueles que rejeitam deliberadamente a Deus e Sua graça. Aqueles que escolhem o mal sabendo que é mal. Mas aqui está a boa notícia: Deus não quer que ninguém vá para o Inferno. Ele oferece Sua graça a todos. A condenação é sempre uma escolha pessoal.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Purgatório: A Purificação Final
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O Purgatório é um estado de purificação. Muitos protestantes não acreditam no Purgatório, mas a Igreja Católica o ensina baseada na Escritura e na Tradição. Se você morre em estado de graça, mas com pecados veniais não confessados ou com apego desordenado às coisas criadas, você não pode entrar imediatamente no Céu – precisa ser purificado.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O Purgatório não é um segundo Inferno. É um lugar de esperança e alegria, porque você sabe que em breve estará com Deus. É como estar em um hospital espiritual, onde as feridas da alma são curadas. E aqui está o mais importante: você pode ajudar as almas no Purgatório através de suas orações, missas oferecidas por elas, e indulgências. Isso é um ato de caridade extraordinário.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Julgamento Particular
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Imediatamente após a morte, cada alma passa pelo Julgamento Particular. Você se apresenta diante de Deus e vê sua vida inteira com clareza perfeita. Não há engano, não há desculpas. Você vê exatamente quem você foi, o bem que fez e o mal que cometeu. E naquele momento, você escolhe seu destino: Céu, Purgatório ou Inferno.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Não é Deus que o julga – você se julga a si mesmo. Se você amou a Deus e ao próximo, você deseja estar com Deus. Se você rejeitou a Deus, você não quer estar com Ele. É uma questão de compatibilidade. Você não pode estar no Céu se não ama a Deus, assim como não pode estar em um casamento se não ama seu cônjuge.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Viver Preparado para a Eternidade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A melhor preparação para a morte é viver bem. Mantenha-se em estado de graça através da confissão frequente. Receba a Eucaristia regularmente. Reze o Rosário. Pratique as virtudes. Ame a Deus e ao próximo. Não acumule apegos desordenados às coisas materiais. Lembre-se sempre: você vai morrer. Essa não é uma verdade assustadora – é uma verdade libertadora. Quando você aceita que vai morrer, deixa de viver para as coisas passageiras e começa a viver para o que é eterno.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Bem-aventurados os que morrem no Senhor! Sim, diz o Espírito, que descansem de seus trabalhos, pois as suas obras os acompanham."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Apocalipse 14,13
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Memento Mori – Lembra-te de que hás de morrer. E quando lembrares, viverás melhor."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Tradição Cristã Medieval
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="ceu-inferno-purgatorio" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Qual é seu destino eterno?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra como você está vivendo em preparação para a eternidade.
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

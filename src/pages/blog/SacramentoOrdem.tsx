import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SacramentoOrdem() {
  return (
    <>
      <Helmet>
        <title>O Sacramento da Ordem: Bispos, Padres e Diáconos | Bom Católico</title>
        <meta name="description" content="Entenda o Sacramento da Ordem na Igreja Católica. Os três graus do sacerdócio, a vocação sacerdotal, o celibato e a missão dos ministros ordenados." />
        <meta name="keywords" content="sacramento da ordem, o que é ordenação sacerdotal, como ser padre, vocação sacerdotal, diácono, bispo, celibato, sete sacramentos" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/sacramento-ordem" />
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
              <span className="text-text">Sacramento da Ordem</span>
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
                  Sacramentos
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                O Sacramento da Ordem: Bispos, Padres e Diáconos
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                O Sacramento da Ordem consagra homens para o serviço da Igreja como bispos, padres e diáconos. É através deles que Cristo continua a santificar Seu povo.
              </p>
            </header>

            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10">
              <Crown className="w-24 h-24 text-purple-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Jesus escolheu doze Apóstolos e lhes deu poderes especiais: celebrar a Eucaristia, perdoar pecados, pregar o Evangelho, governar a Igreja. Antes de subir ao Céu, Ele disse: "Como o Pai me enviou, assim também eu vos envio" (Jo 20,21). Os Apóstolos, por sua vez, transmitiram esses poderes a outros através da imposição das mãos – e assim nasceu o Sacramento da Ordem.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O sacerdócio ministerial é diferente do sacerdócio comum dos fiéis. Todos os batizados participam do sacerdócio de Cristo de alguma forma, mas os ministros ordenados recebem um poder especial para agir "in persona Christi" – na pessoa de Cristo – especialmente na celebração dos sacramentos.
              </p>

              <QuizCTA
                title="Você reza pelas vocações sacerdotais?"
                description="A Igreja precisa de padres santos. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Três Graus da Ordem
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Episcopado (Bispos)
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Os bispos são os sucessores dos Apóstolos. Eles recebem a plenitude do Sacramento da Ordem e têm o poder de ordenar outros bispos, padres e diáconos. São responsáveis por governar uma diocese, ensinar a fé e santificar o povo através dos sacramentos. O Papa é o Bispo de Roma e o sucessor de Pedro.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Presbiterado (Padres)
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Os padres são colaboradores dos bispos. Eles podem celebrar a Missa, ouvir confissões, batizar, celebrar matrimônios, ungir os enfermos e pregar. São os pastores mais próximos do povo, geralmente responsáveis por uma paróquia. Não podem ordenar outros ministros nem crismar (exceto com delegação especial).
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                3. Diaconado (Diáconos)
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Os diáconos são ordenados para o serviço. Podem batizar, proclamar o Evangelho, pregar, assistir ao matrimônio e presidir funerais. Não podem celebrar a Missa nem ouvir confissões. Existem diáconos transitórios (a caminho do sacerdócio) e diáconos permanentes (que podem ser casados).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Vocação Sacerdotal
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Ninguém se faz padre por conta própria – é preciso ser chamado por Deus e aceito pela Igreja. A vocação sacerdotal é um dom gratuito que Deus dá a alguns homens. Os sinais de vocação incluem: desejo de servir a Deus e à Igreja, vida de oração, amor à Eucaristia, capacidade de celibato, e aptidão para o ministério.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Se você sente que pode ter vocação sacerdotal, converse com seu pároco ou com um diretor espiritual. A formação para o sacerdócio dura vários anos no seminário, onde o candidato estuda filosofia, teologia e espiritualidade, além de fazer experiências pastorais.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Celibato Sacerdotal
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Na Igreja Latina (rito romano), os padres são celibatários – não se casam. Isso não é um dogma, mas uma disciplina que a Igreja mantém por razões espirituais e pastorais. O celibato permite ao padre dedicar-se inteiramente a Deus e à Igreja, sem as preocupações de uma família.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus era celibatário. São Paulo recomendava o celibato para quem pudesse vivê-lo (1Cor 7,32-34). O celibato é um sinal do Reino dos Céus, onde "não haverá casamento" (Mt 22,30). É um sacrifício, mas também uma graça que Deus dá a quem Ele chama.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Rezar pelas Vocações
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Jesus disse: "A messe é grande, mas os trabalhadores são poucos. Rogai ao Senhor da messe que envie trabalhadores para a sua messe" (Mt 9,37-38). A Igreja precisa de padres santos. Reze pelas vocações sacerdotais, especialmente pelos seminaristas e pelos padres de sua paróquia.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Se você conhece um jovem que parece ter vocação, encoraje-o! Muitas vocações se perdem porque ninguém disse ao jovem: "Você já pensou em ser padre?"
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Vós não me escolhestes a mim, mas eu vos escolhi a vós e vos designei para que vades e deis fruto."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — João 15,16
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Dai-me, Senhor, sacerdotes santos! Dai-me muitos sacerdotes santos!"
                </p>
                <p className="text-text-muted text-center mt-2">
                  — São João Maria Vianney
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sacramento-ordem" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você reza pelos sacerdotes?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra como está sua vivência da fé católica.
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

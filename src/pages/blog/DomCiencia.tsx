import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DomCiencia() {
  return (
    <>
      <Helmet>
        <title>Dom da Ciência: Conhecer as Criaturas à Luz de Deus | Bom Católico</title>
        <meta name="description" content="Descubra o Dom da Ciência, que nos faz ver as criaturas como sinais de Deus. Como este dom nos ajuda a usar corretamente os bens criados." />
        <meta name="keywords" content="dom ciência, espírito santo, dons espírito santo, criaturas, criação, desapego" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/dom-ciencia-espirito-santo" />
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
              <Button variant="secondary" size="sm">Fazer o Quiz</Button>
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
              <span className="text-text">Dom da Ciência</span>
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
                  Dons do Espírito Santo
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />10 min de leitura
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Dom da Ciência: Ver as Criaturas à Luz de Deus
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Ciência é o dom que nos faz conhecer as criaturas em sua relação com Deus, usando-as como degraus para subir ao Criador.
              </p>
            </header>

            <div className="aspect-video bg-green-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-green-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Espírito de ciência e de piedade" (Is 11,2). O dom da Ciência nos dá um conhecimento sobrenatural das coisas criadas, permitindo-nos vê-las como sinais de Deus e usá-las corretamente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Não se trata da ciência natural (física, química, biologia), mas de um conhecimento espiritual que julga as criaturas à luz da fé. É saber o verdadeiro valor das coisas – o que vale e o que não vale diante de Deus.
              </p>

              <QuizCTA
                title="Você vê Deus nas criaturas?"
                description="O dom da Ciência nos faz ver o mundo com olhos de fé. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que é o Dom da Ciência
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom da Ciência é uma luz sobrenatural que nos faz julgar retamente as coisas criadas em sua relação com Deus. Ele nos mostra o que as criaturas são (boas, mas limitadas) e para que servem (conduzir a Deus).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Santo Tomás de Aquino explica que enquanto a Sabedoria julga as coisas pela causa suprema (Deus), a Ciência julga pelas causas criadas, mas à luz da fé. É conhecer as criaturas como Deus as conhece.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Este dom nos livra de dois erros: desprezar as criaturas (como se fossem más) ou idolatrá-las (como se fossem Deus). As criaturas são boas, mas não são o Bem supremo.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                As Criaturas Como Degraus
              </h2>
              <p className="text-text leading-relaxed mb-6">
                São Paulo ensina: "Desde a criação do mundo, as perfeições invisíveis de Deus, o seu poder eterno e a sua divindade, tornaram-se visíveis à inteligência através das suas obras" (Rm 1,20).
              </p>
              <p className="text-text leading-relaxed mb-6">
                O dom da Ciência nos faz ver em cada criatura um reflexo do Criador. A beleza de um pôr do sol aponta para a Beleza infinita. O amor humano é sombra do Amor divino. A ordem do universo revela a Sabedoria de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Francisco de Assis é o modelo perfeito deste dom. Ele via em todas as criaturas – sol, lua, água, fogo, animais – irmãos que louvavam o Criador. Seu Cântico das Criaturas é fruto do dom da Ciência.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Frutos da Ciência
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Desapego:</strong> Quem conhece o verdadeiro valor das criaturas não se apega a elas desordenadamente. Sabe que são passageiras e não podem satisfazer o coração.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Uso correto dos bens:</strong> A Ciência nos ensina a usar as criaturas como meios, não como fins. Usá-las para ir a Deus, não para afastar-se d'Ele.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Contemplação da natureza:</strong> Ver a criação como livro que fala de Deus. Cada flor, cada estrela, cada ser vivo é uma palavra do Criador.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Compunção:</strong> A Ciência nos faz chorar pelos pecados – nossos e alheios – que usam mal as criaturas de Deus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Cultivar a Ciência
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Contemple a criação:</strong> Pare para admirar a natureza. Veja nela a mão de Deus. Deixe que as criaturas falem do Criador.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Examine seu apego:</strong> Pergunte-se: estou usando as criaturas para ir a Deus ou para afastar-me d'Ele? Meu coração está preso a algo criado?
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pratique o desprendimento:</strong> Exercite-se em renunciar a coisas lícitas. Isso purifica o coração e abre espaço para Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Medite na vaidade das coisas:</strong> "Vaidade das vaidades, tudo é vaidade" (Ecl 1,2). Não no sentido de que as criaturas são más, mas de que são insuficientes.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Agradeça pelos dons:</strong> A gratidão nos faz ver as criaturas como dons de Deus, não como direitos nossos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Ciência e a Bem-Aventurança
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom da Ciência corresponde à bem-aventurança dos que choram: "Bem-aventurados os que choram, porque serão consolados" (Mt 5,4). A Ciência nos faz chorar pela vaidade das coisas e pelo mau uso que fazemos delas.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Santos Modelos de Ciência
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Francisco de Assis:</strong> Via em todas as criaturas irmãos que louvavam o Criador. Seu amor pela natureza era fruto do dom da Ciência.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santo Inácio de Loyola:</strong> Ensinava a "encontrar Deus em todas as coisas". Sua espiritualidade é marcada pelo dom da Ciência.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Teresa de Calcutá:</strong> Via Cristo nos pobres e sofredores. Cada pessoa era para ela um sacramento da presença de Deus.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Os céus proclamam a glória de Deus, e o firmamento anuncia a obra de suas mãos."
                </p>
                <p className="text-text-muted text-center mt-2">— Salmo 19,1</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O dom da ciência é a luz pela qual julgamos retamente as coisas criadas, conhecendo o que devemos crer e o que não devemos crer."
                </p>
                <p className="text-text-muted text-center mt-2">— Santo Tomás de Aquino</p>
              </div>
            </div>

            <RelatedArticles currentSlug="dom-ciencia-espirito-santo" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você vê Deus em todas as coisas?</h3>
              <p className="text-text-muted mb-6">Faça nosso quiz e descubra como está sua vivência da fé católica.</p>
              <Link to="/quiz">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button>
              </Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}

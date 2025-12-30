import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function QuintoMandamento() {
  return (
    <>
      <Helmet>
        <title>5º Mandamento: Não Matarás | Bom Católico</title>
        <meta name="description" content="Entenda o Quinto Mandamento da Lei de Deus. A sacralidade da vida humana, aborto, eutanásia, legítima defesa e o respeito à vida desde a concepção até a morte natural." />
        <meta name="keywords" content="quinto mandamento, não matarás, vida humana, aborto, eutanásia, legítima defesa, sacralidade vida" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/quinto-mandamento-nao-mataras" />
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
              <span className="text-text">5º Mandamento</span>
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
                  Mandamentos
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  11 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                5º Mandamento: Não Matarás
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A vida humana é sagrada desde a concepção até a morte natural. Este mandamento protege o dom mais precioso que Deus nos deu: a vida.
              </p>
            </header>

            <div className="aspect-video bg-red-100 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-red-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Não matarás" (Ex 20,13). Este mandamento parece simples, mas suas implicações são profundas. A vida humana é sagrada porque o ser humano foi criado à imagem e semelhança de Deus. Tirar uma vida inocente é um atentado contra o próprio Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus aprofundou este mandamento: "Ouvistes que foi dito aos antigos: Não matarás... Eu, porém, vos digo: todo aquele que se encoleriza contra seu irmão será réu de juízo" (Mt 5,21-22). O mandamento não proíbe apenas o assassinato físico, mas também a raiva, o ódio, o desejo de vingança.
              </p>

              <QuizCTA
                title="Você respeita a vida em todas as suas formas?"
                description="O quinto mandamento protege a vida humana. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Sacralidade da Vida
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A vida humana é sagrada desde o momento da concepção. O embrião não é um "amontoado de células" – é um ser humano em desenvolvimento, com dignidade e direitos. A Igreja defende a vida desde a concepção até a morte natural, sem exceções.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Isso significa que a Igreja se opõe ao aborto, à eutanásia, ao suicídio assistido, à pena de morte (na maioria dos casos), e a qualquer forma de violência contra a vida humana inocente.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Aborto
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O aborto é a morte deliberada de um ser humano inocente. A Igreja ensina que o aborto é um pecado gravíssimo, um crime contra a vida. Quem pratica ou colabora diretamente com um aborto incorre em excomunhão automática.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Isso não significa que não há perdão. Deus perdoa todos os pecados quando há arrependimento sincero. Se você participou de um aborto, procure um padre para se confessar. A misericórdia de Deus é maior que qualquer pecado.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Eutanásia
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A eutanásia é a morte provocada de uma pessoa doente ou idosa, supostamente para "aliviar o sofrimento". A Igreja a condena como assassinato, mesmo quando feita com "boas intenções". Não temos o direito de decidir quando uma vida deve terminar.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Isso não significa que devemos prolongar a vida artificialmente a todo custo. É lícito recusar tratamentos extraordinários ou desproporcionais. Mas há uma diferença entre deixar morrer naturalmente e matar ativamente.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Legítima Defesa
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O quinto mandamento não proíbe a legítima defesa. Se alguém ataca você ou sua família, você tem o direito de se defender, mesmo que isso resulte na morte do agressor. A intenção não é matar, mas proteger a vida inocente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A defesa deve ser proporcional à ameaça. Não é lícito matar alguém que apenas o insultou. Mas diante de uma ameaça real à vida, a defesa é não apenas um direito, mas às vezes um dever.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Pecados Contra a Vida
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Além do assassinato direto, o quinto mandamento proíbe:
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Suicídio:</strong> Tirar a própria vida é um pecado grave, pois a vida pertence a Deus. Porém, a Igreja reconhece que muitos suicídios ocorrem em estados de perturbação mental que diminuem a responsabilidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Escândalo:</strong> Levar outros ao pecado é uma forma de "matar" espiritualmente. Jesus disse que seria melhor amarrar uma pedra de moinho no pescoço do que escandalizar um pequenino.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Abuso de drogas e álcool:</strong> Destruir a própria saúde é uma ofensa contra a vida que Deus nos deu.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Raiva e ódio:</strong> "Todo aquele que odeia seu irmão é homicida" (1Jo 3,15). O ódio é o assassinato do coração.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Antes de te formar no ventre materno, eu te conheci; antes de saíres do seio, eu te consagrei."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Jeremias 1,5
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A vida humana é sagrada porque desde a sua origem ela supõe a ação criadora de Deus e permanece para sempre numa relação especial com o Criador."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catecismo da Igreja Católica, 2258
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="quinto-mandamento-nao-mataras" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você defende a vida?
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SextoMandamento() {
  return (
    <>
      <Helmet>
        <title>6º Mandamento: Não Pecar Contra a Castidade | Bom Católico</title>
        <meta name="description" content="Entenda o Sexto Mandamento da Lei de Deus. A virtude da castidade, pureza, sexualidade no plano de Deus e como viver a castidade em cada estado de vida." />
        <meta name="keywords" content="sexto mandamento, castidade, pureza, sexualidade, adultério, pornografia, virtude" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/sexto-mandamento-castidade" />
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
              <span className="text-text">6º Mandamento</span>
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
                6º Mandamento: Não Pecar Contra a Castidade
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A castidade não é repressão – é a integração da sexualidade na pessoa. Este mandamento nos chama a viver o amor de forma pura e verdadeira.
              </p>
            </header>

            <div className="aspect-video bg-pink-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-pink-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Não cometerás adultério" (Ex 20,14). Este mandamento, na tradição católica, abrange toda a virtude da castidade. A sexualidade é um dom de Deus, criada boa e bela. Mas, como todo dom, deve ser usada de acordo com o plano do Criador.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A cultura moderna vê a castidade como repressão, como algo negativo. Mas a verdadeira castidade é libertadora. Ela nos liberta da escravidão dos instintos, da objetificação do outro, da busca vazia de prazer. A castidade é o amor verdadeiro em ação.
              </p>

              <QuizCTA
                title="Você vive a castidade?"
                description="A castidade é uma virtude para todos os estados de vida. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que É Castidade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Castidade não é o mesmo que celibato. Celibato é não se casar. Castidade é viver a sexualidade de acordo com seu estado de vida. Os solteiros vivem a castidade na abstinência. Os casados vivem a castidade na fidelidade conjugal. Os consagrados vivem a castidade no celibato por amor ao Reino.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A castidade é a integração da sexualidade na pessoa. Significa que você controla seus desejos, em vez de ser controlado por eles. Significa que você vê o outro como pessoa, não como objeto de prazer. Significa que você reserva a intimidade sexual para o contexto do amor matrimonial.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Pecados Contra a Castidade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Adultério:</strong> Relação sexual entre uma pessoa casada e alguém que não é seu cônjuge. É uma traição grave ao sacramento do matrimônio.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Fornicação:</strong> Relação sexual entre pessoas não casadas. A Igreja ensina que o ato sexual pertence exclusivamente ao matrimônio.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pornografia:</strong> Consumir imagens ou vídeos de conteúdo sexual. A pornografia objetifica as pessoas, distorce a visão da sexualidade e cria dependência.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Masturbação:</strong> A busca solitária do prazer sexual. É um uso desordenado da sexualidade, que foi criada para a comunhão entre pessoas.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Atos homossexuais:</strong> A Igreja distingue entre a inclinação (que não é pecado) e os atos (que são contrários à lei natural). Pessoas com atração pelo mesmo sexo são chamadas à castidade, como todos os solteiros.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Sexualidade no Plano de Deus
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Deus criou a sexualidade com dois propósitos inseparáveis: a união dos esposos e a procriação. O ato sexual é a expressão mais íntima do amor conjugal e o meio pelo qual Deus cria novas vidas. Separar esses dois aspectos distorce o plano de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Por isso, a Igreja se opõe à contracepção artificial, que separa o ato sexual da abertura à vida. Os métodos naturais de planejamento familiar respeitam a natureza do ato conjugal.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Viver a Castidade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reze:</strong> A castidade é uma virtude que só se alcança com a graça de Deus. Peça a ajuda de Nossa Senhora e de São José.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evite ocasiões de pecado:</strong> Não frequente lugares, não veja conteúdos, não mantenha relacionamentos que o levem à tentação.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Confesse-se regularmente:</strong> A confissão dá força para recomeçar e graças para resistir às tentações.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Cultive amizades saudáveis:</strong> Cerque-se de pessoas que compartilham seus valores e o ajudam a crescer na virtude.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Bem-aventurados os puros de coração, porque verão a Deus."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Mateus 5,8
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A castidade significa a integração bem-sucedida da sexualidade na pessoa e, por isso, a unidade interior do homem no seu ser corporal e espiritual."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catecismo da Igreja Católica, 2337
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sexto-mandamento-castidade" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você busca a pureza de coração?
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

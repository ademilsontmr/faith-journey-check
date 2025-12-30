import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OitavoMandamento() {
  return (
    <>
      <Helmet>
        <title>8º Mandamento: Não Levantar Falso Testemunho | Bom Católico</title>
        <meta name="description" content="Entenda o Oitavo Mandamento da Lei de Deus. A verdade, mentira, fofoca, calúnia, difamação e como viver na verdade que liberta." />
        <meta name="keywords" content="oitavo mandamento, não levantar falso testemunho, mentir é pecado, fofoca é pecado, calúnia, difamação, falar a verdade, mandamentos da lei de deus" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/oitavo-mandamento-falso-testemunho" />
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
              <span className="text-text">8º Mandamento</span>
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
                  9 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                8º Mandamento: Não Levantar Falso Testemunho
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Jesus disse: "A verdade vos libertará." Este mandamento nos chama a viver na verdade, evitando toda forma de mentira e engano.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <MessageSquare className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Não levantarás falso testemunho contra o teu próximo" (Ex 20,16). Este mandamento proíbe toda forma de falsidade: mentira, engano, calúnia, difamação, fofoca. Deus é a Verdade, e quem segue a Deus deve viver na verdade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus disse: "Eu sou o caminho, a verdade e a vida" (Jo 14,6). Ele também disse que o diabo é "o pai da mentira" (Jo 8,44). Quando mentimos, nos afastamos de Cristo e nos aproximamos do inimigo. A verdade é libertadora; a mentira escraviza.
              </p>

              <QuizCTA
                title="Você vive na verdade?"
                description="O oitavo mandamento nos chama à honestidade. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Pecados Contra a Verdade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Mentira:</strong> Dizer o que é falso com intenção de enganar. Toda mentira é pecado, embora a gravidade varie conforme o dano causado.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Falso testemunho:</strong> Mentir em tribunal ou em situações oficiais. É especialmente grave porque pode causar injustiça a inocentes.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Calúnia:</strong> Atribuir a alguém faltas que não cometeu. É uma mentira que prejudica a reputação do outro.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Difamação:</strong> Revelar, sem motivo justo, faltas reais de alguém. Mesmo que seja verdade, não temos o direito de destruir a reputação alheia.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Fofoca:</strong> Espalhar informações sobre a vida alheia, verdadeiras ou falsas. A fofoca destrói relacionamentos e comunidades.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Juízo temerário:</strong> Assumir como verdadeiro, sem fundamento suficiente, um defeito moral do próximo.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Dever de Reparar
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Quem prejudicou a reputação de alguém com mentiras ou fofocas tem o dever de reparar o dano. Isso pode ser muito difícil – como diz o ditado, "é mais fácil juntar penas espalhadas pelo vento do que reparar uma calúnia". Mas o esforço deve ser feito.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A reparação pode incluir: desmentir publicamente a mentira, pedir desculpas à pessoa prejudicada, e fazer o possível para restaurar sua reputação.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Segredo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O oitavo mandamento também protege o direito ao segredo. Nem tudo precisa ser dito. Informações confidenciais devem ser guardadas. O sigilo profissional (médicos, advogados, padres) é sagrado.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O sigilo da confissão é absoluto. O padre não pode revelar nada do que ouviu na confissão, sob nenhuma circunstância, nem mesmo para salvar sua própria vida.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Viver na Verdade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Seja honesto:</strong> Diga a verdade, mesmo quando for difícil. A mentira pode parecer mais fácil no momento, mas sempre traz consequências.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evite a fofoca:</strong> Não fale da vida alheia. Se não tem nada de bom para dizer, não diga nada.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Defenda a reputação dos outros:</strong> Quando ouvir alguém sendo caluniado, defenda-o. Não participe de conversas que destroem reputações.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Seja discreto:</strong> Guarde segredos. Não revele informações confidenciais. Respeite a privacidade alheia.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Conhecereis a verdade, e a verdade vos libertará."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — João 8,32
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A mentira é a destruição da sociedade."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — São João Crisóstomo
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="oitavo-mandamento-falso-testemunho" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Suas palavras são verdadeiras?
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

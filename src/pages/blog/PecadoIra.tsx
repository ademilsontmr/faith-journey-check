import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PecadoIra() {
  return (
    <>
      <Helmet>
        <title>Ira: A Raiva Descontrolada | Bom Católico</title>
        <meta name="description" content="Entenda a Ira, o pecado capital da raiva descontrolada. Como reconhecê-la e combatê-la com a mansidão e a paciência cristã." />
        <meta name="keywords" content="ira pecado capital, o que é ira, raiva é pecado, como controlar a raiva, mansidão cristã, perdão, paciência, sete pecados capitais" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/pecado-ira" />
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
            <Link to="/quiz"><Button variant="secondary" size="sm">Fazer o Quiz</Button></Link>
          </div>
        </header>

        <div className="bg-background-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Ira</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Voltar ao Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Pecados Capitais</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min de leitura</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Ira: A Raiva Descontrolada
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Ira é o desejo desordenado de vingança. Ela cega a razão, destrói relacionamentos e afasta de Deus.
              </p>
            </header>

            <div className="aspect-video bg-red-100 rounded-2xl flex items-center justify-center mb-10">
              <Zap className="w-24 h-24 text-red-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Todo aquele que se encoleriza contra seu irmão será réu de juízo" (Mt 5,22). A Ira é o desejo desordenado de vingança, a raiva que ultrapassa os limites da razão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Existe uma ira justa – a indignação diante do mal, como Jesus expulsando os vendilhões do templo. Mas a ira pecaminosa é descontrolada, desproporcional, vingativa.
              </p>

              <QuizCTA
                title="Você cultiva a mansidão?"
                description="A paciência é fruto do Espírito. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Que é a Ira</h2>
              <p className="text-text leading-relaxed mb-6">
                A Ira é o movimento desordenado da alma que busca vingança. É a raiva que perde o controle, que quer fazer mal a quem nos ofendeu.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A ira em si não é sempre pecado. Sentir raiva diante da injustiça é natural e pode ser virtuoso. O pecado está no excesso: quando a ira é desproporcional, quando busca vingança, quando se prolonga em rancor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Paulo adverte: "Irai-vos, mas não pequeis; não se ponha o sol sobre a vossa ira" (Ef 4,26). A ira deve ser breve e controlada, não alimentada e prolongada.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">As Faces da Ira</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Explosão:</strong> Gritos, insultos, agressões físicas. A ira que explode sem controle.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Rancor:</strong> A ira que não explode, mas fica guardada. O ressentimento que dura anos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Vingança:</strong> O desejo de fazer o outro sofrer como nos fez sofrer. "Olho por olho."
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Amargura:</strong> A ira que se volta para dentro. A pessoa fica azeda, negativa, crítica.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Efeitos da Ira</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Cegueira:</strong> A ira cega a razão. Quem está com raiva não pensa direito, não vê a situação com clareza.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Destruição de relacionamentos:</strong> Palavras ditas na ira destroem amizades, casamentos, famílias.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Danos físicos:</strong> A ira crônica causa problemas de saúde: pressão alta, problemas cardíacos, úlceras.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Afastamento de Deus:</strong> "A ira do homem não realiza a justiça de Deus" (Tg 1,20). A ira impede a oração.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Combater a Ira</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Não reaja imediatamente:</strong> Quando sentir raiva, pare. Respire. Conte até dez. Não fale nem aja no calor da emoção.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Perdoe:</strong> O perdão é o antídoto da ira. "Perdoai e sereis perdoados" (Lc 6,37). Perdoar não é sentir, é decidir.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reze pelos inimigos:</strong> Jesus mandou: "Amai vossos inimigos, fazei bem aos que vos odeiam" (Lc 6,27). A oração transforma a ira em compaixão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Examine a causa:</strong> Por que você está com raiva? Muitas vezes a ira esconde orgulho ferido, medo, insegurança.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Contemple Cristo na Paixão:</strong> Ele foi insultado, cuspido, açoitado – e não abriu a boca. "Pai, perdoa-lhes."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Santos que Venceram a Ira</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Francisco de Sales:</strong> Era naturalmente colérico, mas pela graça tornou-se modelo de mansidão. "Mais moscas se apanham com uma gota de mel do que com um barril de vinagre."
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santo Estêvão:</strong> Enquanto era apedrejado, rezava: "Senhor, não lhes imputes este pecado" (At 7,60).
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Maria Goretti:</strong> Perdoou seu assassino antes de morrer. Ele se converteu e estava presente em sua canonização.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">"Bem-aventurados os mansos, porque possuirão a terra."</p>
                <p className="text-text-muted text-center mt-2">— Mateus 5,5</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">"Irai-vos, mas não pequeis; não se ponha o sol sobre a vossa ira."</p>
                <p className="text-text-muted text-center mt-2">— Efésios 4,26</p>
              </div>
            </div>

            <RelatedArticles currentSlug="pecado-ira" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você cultiva a paciência?</h3>
              <p className="text-text-muted mb-6">Faça nosso quiz e descubra como está sua vivência da fé católica.</p>
              <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}

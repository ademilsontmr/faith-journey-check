import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PecadoGula() {
  return (
    <>
      <Helmet>
        <title>Gula: O Excesso na Comida e Bebida | Bom Católico</title>
        <meta name="description" content="Entenda a Gula, o pecado capital do excesso na comida e bebida. Como reconhecê-la e combatê-la com a temperança cristã." />
        <meta name="keywords" content="gula pecado capital, o que é gula, comer demais é pecado, como vencer a gula, temperança, jejum católico, moderação, sete pecados capitais" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/pecado-gula" />
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
              <span className="text-text">Gula</span>
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
                Gula: O Excesso na Comida e Bebida
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Gula é o desejo desordenado de comer e beber. Ela escraviza o corpo e embota o espírito, afastando-nos de Deus.
              </p>
            </header>

            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
              <UtensilsCrossed className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Não vos embriagueis com vinho, que leva à devassidão" (Ef 5,18). A Gula é o desejo desordenado de comer e beber, buscando o prazer da comida além do necessário.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Paulo adverte sobre aqueles "cujo deus é o ventre" (Fl 3,19). O guloso faz da comida seu ídolo, vivendo para comer em vez de comer para viver.
              </p>

              <QuizCTA
                title="Você pratica a temperança?"
                description="A moderação é virtude cristã. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Que é a Gula</h2>
              <p className="text-text leading-relaxed mb-6">
                A Gula é o desejo desordenado do prazer da comida e da bebida. Não é simplesmente comer bem ou apreciar uma boa refeição – é fazer da comida um fim em si mesmo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A comida é dom de Deus, necessária para a vida. Mas a gula perverte esse dom, buscando o prazer de modo excessivo, seja na quantidade, na qualidade, ou na frequência.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A gula pode parecer um pecado menor, mas seus efeitos são sérios. Ela embota o espírito, enfraquece a vontade e abre portas para outros vícios.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">As Formas da Gula</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Comer demais (nimis):</strong> Exceder na quantidade. Comer além do necessário, até sentir-se mal.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Comer com sofreguidão (praepropere):</strong> Comer apressadamente, sem mastigar, sem saborear, como um animal.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Exigir comidas requintadas (laute):</strong> Só aceitar pratos sofisticados. Desprezar comida simples.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Comer fora de hora (studiose):</strong> Beliscar constantemente. Não respeitar horários de refeição.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Embriaguez:</strong> Beber até perder o controle. A embriaguez é forma grave de gula.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Efeitos da Gula</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Embotamento espiritual:</strong> O excesso de comida pesa o corpo e embota a mente. Dificulta a oração e a contemplação.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Enfraquecimento da vontade:</strong> Quem não controla o apetite dificilmente controlará outros desejos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Abertura para outros vícios:</strong> A gula frequentemente leva à luxúria. "Ventre cheio não crê em fome alheia."
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Danos à saúde:</strong> Obesidade, doenças, dependência do álcool – consequências físicas da gula.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Combater a Gula</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pratique o jejum:</strong> A Igreja prescreve jejum na Quarta-feira de Cinzas e Sexta-feira Santa. Mas pequenos jejuns regulares fortalecem a vontade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Coma com moderação:</strong> Levante-se da mesa com um pouco de fome. Não repita o prato desnecessariamente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Agradeça antes de comer:</strong> A bênção da mesa nos lembra que a comida é dom de Deus, não direito nosso.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evite a embriaguez:</strong> Beba com moderação. Se tem dificuldade, abstenha-se completamente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pense nos que têm fome:</strong> Enquanto você come em excesso, outros passam fome. A caridade modera a gula.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Santos que Venceram a Gula</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>São João Batista:</strong> Viveu no deserto comendo gafanhotos e mel silvestre. Sua austeridade preparou o caminho do Senhor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Francisco de Assis:</strong> Praticava jejuns rigorosos. Misturava cinza na comida para não sentir prazer excessivo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Catarina de Sena:</strong> Viveu anos alimentando-se apenas da Eucaristia. Seu jejum era sobrenatural.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">"Não vos embriagueis com vinho, que leva à devassidão, mas enchei-vos do Espírito."</p>
                <p className="text-text-muted text-center mt-2">— Efésios 5,18</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">"Quer comais, quer bebais, ou façais qualquer outra coisa, fazei tudo para a glória de Deus."</p>
                <p className="text-text-muted text-center mt-2">— 1 Coríntios 10,31</p>
              </div>
            </div>

            <RelatedArticles currentSlug="pecado-gula" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você pratica a temperança?</h3>
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

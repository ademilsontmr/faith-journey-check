import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SegundoMandamento() {
  return (
    <>
      <Helmet>
        <title>2º Mandamento: Não Tomar o Nome de Deus em Vão | Bom Católico</title>
        <meta name="description" content="Entenda o Segundo Mandamento da Lei de Deus. O respeito ao nome santo de Deus, blasfêmia, juramentos e como honrar o nome do Senhor." />
        <meta name="keywords" content="segundo mandamento, não tomar o nome de deus em vão, blasfêmia é pecado, juramento falso, respeito ao nome de deus, mandamentos da lei de deus" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/segundo-mandamento-nome-deus" />
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
              <span className="text-text">2º Mandamento</span>
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
                  8 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                2º Mandamento: Não Tomar o Nome de Deus em Vão
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                O nome de Deus é santo e deve ser tratado com reverência. Este mandamento nos ensina a honrar o nome do Senhor em nossas palavras e ações.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <MessageCircle className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Não tomarás o nome do Senhor teu Deus em vão, porque o Senhor não deixará impune aquele que tomar o seu nome em vão" (Ex 20,7). O nome de uma pessoa representa sua identidade, sua honra. Quanto mais o nome de Deus, que é santo, bendito e digno de toda adoração!
              </p>
              <p className="text-text leading-relaxed mb-6">
                Na cultura judaica, o nome de Deus (YHWH) era tão sagrado que não era pronunciado. Os judeus diziam "Adonai" (Senhor) em seu lugar. Essa reverência nos ensina algo importante: o nome de Deus não é uma palavra qualquer para ser usada levianamente.
              </p>

              <QuizCTA
                title="Você respeita o nome de Deus?"
                description="O segundo mandamento nos chama à reverência. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que Este Mandamento Proíbe
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Blasfêmia:</strong> Falar mal de Deus, insultá-Lo, amaldiçoá-Lo. A blasfêmia é um pecado grave que ofende diretamente a majestade divina. Inclui também falar mal de Jesus, da Virgem Maria e dos santos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Usar o nome de Deus como palavrão:</strong> Quantas vezes ouvimos "meu Deus!" ou "Jesus!" usados como expressões de surpresa ou raiva? Isso banaliza o nome santo e é uma falta de respeito.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Juramento falso:</strong> Jurar em nome de Deus e mentir é um pecado grave. Você está usando o nome de Deus para garantir uma mentira, o que é uma ofensa séria à Sua verdade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Juramento desnecessário:</strong> Jesus disse: "Seja o vosso falar: Sim, sim; não, não. O que passar disso vem do Maligno" (Mt 5,37). Não devemos jurar por qualquer coisa levianamente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Perjúrio:</strong> Jurar falsamente em tribunal ou em situações oficiais. Isso é especialmente grave porque envolve mentir sob juramento.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que Este Mandamento Ordena
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Louvar o nome de Deus:</strong> "Bendito seja o nome do Senhor, agora e para sempre!" (Sl 113,2). Devemos usar o nome de Deus para adorá-Lo, agradecê-Lo, invocá-Lo em nossas necessidades.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Respeitar os votos:</strong> Se você fez uma promessa a Deus (um voto), deve cumpri-la. "Quando fizeres um voto ao Senhor teu Deus, não tardes em cumpri-lo" (Dt 23,21).
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Honrar o nome cristão:</strong> Pelo Batismo, recebemos o nome de "cristãos" – seguidores de Cristo. Devemos honrar esse nome com nossa vida, não envergonhando o nome de Cristo com nossos pecados.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Viver o Segundo Mandamento
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Preste atenção às suas palavras. Quando você estiver prestes a dizer "meu Deus!" ou "Jesus!", pare e pense: estou usando o nome santo com reverência ou como uma expressão vazia?
              </p>
              <p className="text-text leading-relaxed mb-6">
                Substitua expressões que usam o nome de Deus em vão por outras. Em vez de "meu Deus!", diga "nossa!" ou "caramba!". É uma pequena mudança que demonstra respeito.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Quando ouvir alguém blasfemar ou usar o nome de Deus em vão, faça uma oração silenciosa de reparação: "Bendito seja o nome de Deus!"
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Santificado seja o Vosso nome."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Pai Nosso
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O nome do Senhor é uma torre forte; o justo corre para ela e está seguro."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Provérbios 18,10
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="segundo-mandamento-nome-deus" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Suas palavras honram a Deus?
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PrimeiroMandamento() {
  return (
    <>
      <Helmet>
        <title>1º Mandamento: Amar a Deus Sobre Todas as Coisas | Bom Católico</title>
        <meta name="description" content="Entenda o Primeiro Mandamento da Lei de Deus. O que significa amar a Deus sobre todas as coisas e como viver esse mandamento no dia a dia." />
        <meta name="keywords" content="primeiro mandamento, amar a deus, lei de deus, mandamentos, fé católica, idolatria" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/primeiro-mandamento-amar-deus" />
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
              <span className="text-text">1º Mandamento</span>
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
                  10 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                1º Mandamento: Amar a Deus Sobre Todas as Coisas
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Eu sou o Senhor teu Deus. Não terás outros deuses diante de mim." O primeiro e maior mandamento é a base de toda a vida moral cristã.
              </p>
            </header>

            <div className="aspect-video bg-red-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-red-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Quando perguntaram a Jesus qual era o maior mandamento, Ele respondeu: "Amarás o Senhor teu Deus de todo o teu coração, de toda a tua alma e de todo o teu entendimento" (Mt 22,37). Este é o primeiro e maior mandamento, do qual todos os outros dependem. Se você ama a Deus verdadeiramente, cumprirá todos os outros mandamentos naturalmente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Amar a Deus sobre todas as coisas significa colocá-Lo em primeiro lugar em sua vida. Significa que nada – nem dinheiro, nem prazer, nem fama, nem mesmo família – pode ocupar o lugar que pertence somente a Deus. Ele é o Criador, o Senhor, o Pai amoroso que merece toda a nossa adoração.
              </p>

              <QuizCTA
                title="Deus está em primeiro lugar na sua vida?"
                description="O primeiro mandamento é a base de toda a vida cristã. Faça nosso quiz e descubra como está sua relação com Deus."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                As Virtudes do Primeiro Mandamento
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O primeiro mandamento nos chama a praticar três virtudes teologais:
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Fé:</strong> Crer em Deus e em tudo o que Ele revelou. A fé não é apenas aceitar intelectualmente que Deus existe – é confiar nEle completamente, entregar-se a Ele, aceitar Sua Palavra como verdade absoluta.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Esperança:</strong> Confiar que Deus cumprirá Suas promessas. A esperança cristã não é um otimismo vago – é a certeza de que Deus nos dará a vida eterna e todas as graças necessárias para alcançá-la.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Caridade:</strong> Amar a Deus acima de tudo e ao próximo como a si mesmo. A caridade é a maior das virtudes, pois permanecerá para sempre no Céu.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Pecados Contra o Primeiro Mandamento
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Idolatria:</strong> Adorar qualquer coisa que não seja Deus. Hoje, poucos adoram estátuas de madeira, mas muitos adoram o dinheiro, o prazer, o poder, a fama ou até a si mesmos. Tudo o que você coloca acima de Deus se torna seu ídolo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Superstição:</strong> Atribuir poderes mágicos a objetos, rituais ou práticas. Isso inclui horóscopos, amuletos da sorte, simpatias, consulta a médiuns e cartomantes. Essas práticas ofendem a Deus porque colocam a confiança em algo que não é Ele.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Ateísmo:</strong> Negar a existência de Deus. O ateísmo pode ser teórico (afirmar que Deus não existe) ou prático (viver como se Deus não existisse).
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Indiferença religiosa:</strong> Não se importar com Deus, não rezar, não participar da vida da Igreja. É uma forma sutil de rejeitar Deus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Viver o Primeiro Mandamento
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reze todos os dias:</strong> A oração é a expressão do amor a Deus. Reserve tempo diário para conversar com Ele, agradecer, pedir, adorar.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Participe da Missa:</strong> A Eucaristia é o ato supremo de adoração. Não falte à Missa dominical sem motivo grave.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Estude a fé:</strong> Conheça melhor Aquele que você ama. Leia a Bíblia, o Catecismo, livros de espiritualidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Examine suas prioridades:</strong> O que ocupa mais espaço em sua vida? Trabalho, dinheiro, entretenimento? Coloque Deus em primeiro lugar.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Amarás o Senhor teu Deus de todo o teu coração, de toda a tua alma e de todo o teu entendimento."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Mateus 22,37
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Fizeste-nos para Ti, Senhor, e o nosso coração está inquieto enquanto não repousar em Ti."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Santo Agostinho
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="primeiro-mandamento-amar-deus" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Deus é o centro da sua vida?
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

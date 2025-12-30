import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SacramentoCrisma() {
  return (
    <>
      <Helmet>
        <title>O Sacramento da Crisma (Confirmação): O Pentecostes Pessoal | Bom Católico</title>
        <meta name="description" content="Entenda o Sacramento da Crisma na Igreja Católica. Os dons do Espírito Santo, preparação para a Confirmação e como viver como soldado de Cristo." />
        <meta name="keywords" content="crisma, confirmação, sacramento crisma, espírito santo, dons espírito santo, soldado de cristo" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/sacramento-crisma" />
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
              <span className="text-text">Sacramento da Crisma</span>
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
                O Sacramento da Crisma: Seu Pentecostes Pessoal
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A Crisma completa o Batismo e nos fortalece com os dons do Espírito Santo. É o momento em que nos tornamos soldados de Cristo, prontos para testemunhar a fé.
              </p>
            </header>

            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                No dia de Pentecostes, o Espírito Santo desceu sobre os Apóstolos em forma de línguas de fogo. Aqueles homens que estavam escondidos por medo dos judeus saíram às ruas e começaram a pregar com coragem. Pedro, que havia negado Jesus três vezes, proclamou o Evangelho diante de milhares. O Espírito Santo os transformou.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Crisma é o seu Pentecostes pessoal. É o momento em que você recebe a plenitude do Espírito Santo, com todos os Seus dons, para ser testemunha de Cristo no mundo. Se o Batismo é o nascimento, a Crisma é a maturidade cristã.
              </p>

              <QuizCTA
                title="Você vive os dons do Espírito Santo?"
                description="A Crisma nos dá força para testemunhar a fé. Faça nosso quiz e descubra como está sua vivência dos dons do Espírito."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Sete Dons do Espírito Santo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Na Crisma, recebemos os sete dons do Espírito Santo, profetizados por Isaías (Is 11,2-3):
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>1. Sabedoria:</strong> O dom de ver as coisas como Deus as vê, de julgar tudo à luz da eternidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>2. Entendimento:</strong> A capacidade de penetrar nas verdades da fé, de compreender o que Deus nos revela.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>3. Conselho:</strong> O dom de discernir o que fazer em situações difíceis, de tomar boas decisões.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>4. Fortaleza:</strong> A coragem para enfrentar dificuldades, perseguições e tentações por amor a Cristo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>5. Ciência:</strong> O conhecimento das coisas criadas em relação a Deus, a capacidade de ver Deus na criação.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>6. Piedade:</strong> O amor filial a Deus e a ternura para com o próximo como irmão em Cristo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>7. Temor de Deus:</strong> Não o medo servil, mas o respeito amoroso que nos faz evitar o pecado por amor a Deus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Rito da Crisma
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O rito essencial da Crisma consiste na unção com o Santo Crisma (óleo perfumado consagrado pelo bispo) na fronte do confirmando, acompanhada das palavras: "Recebe, por este sinal, o Espírito Santo, o Dom de Deus."
              </p>
              <p className="text-text leading-relaxed mb-6">
                O bispo (ou um padre delegado) impõe as mãos sobre os confirmandos, invocando o Espírito Santo. A unção na fronte simboliza que o cristão é marcado com o selo do Espírito e pertence totalmente a Cristo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O leve tapa no rosto que o bispo dá ao crismando simboliza que ele agora é um soldado de Cristo, pronto para enfrentar as batalhas espirituais.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Preparação para a Crisma
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A preparação para a Crisma (catequese) é um tempo de aprofundamento na fé. O candidato deve conhecer bem a doutrina católica, participar ativamente da vida da Igreja, e estar em estado de graça (confessado).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Escolher um nome de Crisma é uma tradição bonita. Muitos escolhem o nome de um santo que admiram e que desejam ter como patrono especial. Estude a vida desse santo e peça sua intercessão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O padrinho ou madrinha de Crisma deve ser um católico praticante, já crismado, que possa ser modelo de fé. Pode ser o mesmo padrinho do Batismo, simbolizando a continuidade da iniciação cristã.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Soldado de Cristo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Crisma nos torna "soldados de Cristo". Isso não significa violência, mas coragem para testemunhar a fé. Significa estar disposto a defender a verdade, a viver os valores do Evangelho mesmo quando é difícil, a não ter vergonha de ser católico.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Muitos jovens recebem a Crisma e depois abandonam a Igreja. Isso acontece quando a Crisma é vista apenas como uma "formatura" religiosa, não como um compromisso de vida. A Crisma não é o fim da catequese – é o início de uma vida adulta de fé.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Recebereis a força do Espírito Santo que descerá sobre vós, e sereis minhas testemunhas."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Atos 1,8
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A Confirmação aperfeiçoa a graça batismal; é o sacramento que dá o Espírito Santo para nos enraizar mais profundamente na filiação divina."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catecismo da Igreja Católica, 1316
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sacramento-crisma" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você é um soldado de Cristo?
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SacramentoConfissao() {
  return (
    <>
      <Helmet>
        <title>O Sacramento da Confissão (Reconciliação): A Misericórdia de Deus | Bom Católico</title>
        <meta name="description" content="Entenda o Sacramento da Confissão na Igreja Católica. Por que confessar ao padre, como fazer uma boa confissão e experimentar a misericórdia divina." />
        <meta name="keywords" content="sacramento da confissão, como se confessar, o que falar na confissão, reconciliação, penitência, perdão dos pecados, misericórdia de deus, sete sacramentos" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/sacramento-confissao" />
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
              <span className="text-text">Sacramento da Confissão</span>
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
                  11 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                O Sacramento da Confissão: A Misericórdia de Deus
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A Confissão é o sacramento do perdão. É onde experimentamos concretamente a misericórdia infinita de Deus e recebemos a graça de recomeçar.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Na noite da Ressurreição, Jesus apareceu aos Apóstolos e disse: "Recebei o Espírito Santo. A quem perdoardes os pecados, ser-lhes-ão perdoados; a quem os retiverdes, ser-lhes-ão retidos" (Jo 20,22-23). Com essas palavras, Jesus instituiu o Sacramento da Confissão e deu aos Apóstolos – e seus sucessores – o poder de perdoar pecados em Seu nome.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Confissão é um dos sacramentos mais mal compreendidos e mais evitados. Muitos têm vergonha, medo ou simplesmente não entendem por que precisam confessar a um padre. Mas quando você entende o que realmente acontece na Confissão, ela se torna um dos momentos mais libertadores da vida cristã.
              </p>

              <QuizCTA
                title="Você se confessa regularmente?"
                description="A Confissão é essencial para a vida espiritual. Faça nosso quiz e descubra como está sua vivência dos sacramentos."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Por Que Confessar a um Padre?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                "Por que não posso confessar diretamente a Deus?" Esta é a pergunta mais comum. A resposta está nas palavras de Jesus: Ele deu aos Apóstolos o poder de perdoar pecados. Se bastasse confessar diretamente a Deus, por que Jesus teria dado esse poder?
              </p>
              <p className="text-text leading-relaxed mb-6">
                O padre não perdoa por si mesmo – ele age "in persona Christi", na pessoa de Cristo. Quando o padre diz "Eu te absolvo", é Cristo quem está perdoando através dele. O padre é apenas o instrumento; a graça vem de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Além disso, a confissão oral tem um valor psicológico e espiritual imenso. Verbalizar nossos pecados nos ajuda a reconhecê-los verdadeiramente. Ouvir as palavras "Eu te absolvo" nos dá certeza do perdão. É muito diferente de uma vaga sensação de que "Deus provavelmente me perdoou".
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Sigilo Sacramental
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O padre é obrigado pelo sigilo sacramental a nunca revelar o que ouviu na confissão, sob nenhuma circunstância. Nem sob ameaça de morte, nem em tribunal, nem para salvar sua própria vida. Muitos padres ao longo da história foram martirizados por se recusarem a quebrar o sigilo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Isso significa que você pode confessar qualquer coisa com total confiança. O padre não vai contar a ninguém. Ele nem mesmo pode mencionar o assunto com você fora da confissão, a menos que você permita. Seus pecados estão seguros.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Elementos da Confissão
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Uma boa confissão tem três elementos essenciais:
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>1. Contrição:</strong> Arrependimento sincero pelos pecados cometidos. Não basta listar pecados mecanicamente – é preciso estar verdadeiramente arrependido e ter o propósito de não pecar mais.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>2. Confissão:</strong> Dizer os pecados ao padre de forma clara e completa. Todos os pecados mortais devem ser confessados em espécie (tipo) e número (quantas vezes, aproximadamente). Esconder pecados por vergonha invalida a confissão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>3. Satisfação:</strong> Cumprir a penitência dada pelo padre. A penitência não "paga" pelos pecados (isso só Cristo pode fazer), mas ajuda a reparar o dano causado e a fortalecer contra futuras tentações.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Efeitos da Confissão
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Confissão produz efeitos maravilhosos na alma:
              </p>
              <p className="text-text leading-relaxed mb-6">
                • Reconciliação com Deus: o pecado mortal nos separa de Deus; a confissão restaura a amizade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                • Reconciliação com a Igreja: o pecado também fere a comunidade; a confissão nos reintegra.
              </p>
              <p className="text-text leading-relaxed mb-6">
                • Paz de consciência: a culpa é removida; experimentamos a paz que só Deus pode dar.
              </p>
              <p className="text-text leading-relaxed mb-6">
                • Força espiritual: recebemos graças para resistir às tentações futuras.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Com Que Frequência Se Confessar?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Igreja obriga a confissão pelo menos uma vez por ano, especialmente antes da Páscoa. Mas isso é o mínimo. Os santos recomendavam a confissão mensal ou até semanal. Quanto mais frequente a confissão, mais limpa a alma e mais forte a vida espiritual.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Se você cometeu pecado mortal, deve se confessar o mais rápido possível, antes de comungar. Não deixe o pecado mortal "acumular" – ele é como um veneno na alma.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Se confessarmos os nossos pecados, Ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — 1 João 1,9
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A confissão é o sacramento da alegria. Não tenham medo! Quando alguém faz fila para se confessar, sente vergonha, mas depois sai livre, grande, belo, perdoado, feliz."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Papa Francisco
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sacramento-confissao" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Pronto para experimentar a misericórdia de Deus?
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function ComoSeConfessarGuia() {
  return (
    <>
      <Helmet>
        <title>Como Se Confessar: Guia Completo Passo a Passo | Bom Católico</title>
        <meta name="description" content="Aprenda como se confessar na Igreja Católica. Guia completo com passo a passo, exame de consciência, o que dizer ao padre e como fazer uma boa confissão." />
        <meta name="keywords" content="como se confessar, confissão católica, sacramento reconciliação, exame de consciência, penitência, perdão dos pecados" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/como-se-confessar-guia-completo" />
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
              <span className="text-text">Como Se Confessar</span>
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
                  12 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Como Se Confessar: Guia Completo Passo a Passo
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Faz tempo que você não se confessa? Tem vergonha ou não sabe o que dizer? Este guia completo vai te ajudar a fazer uma boa confissão e experimentar a misericórdia de Deus.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                A confissão é um dos sacramentos mais poderosos e libertadores da Igreja Católica. Muitos católicos, porém, evitam a confissão por vergonha, medo ou simplesmente porque não sabem como fazer. Se você está nessa situação, este guia é para você.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Não importa quanto tempo faz desde sua última confissão. Não importa quão graves sejam seus pecados. Deus está esperando você com os braços abertos, como o pai do filho pródigo. O padre está lá para ajudá-lo, não para julgá-lo. Vamos aprender juntos como fazer uma boa confissão.
              </p>

              <QuizCTA
                title="Você está em dia com a confissão?"
                description="A confissão regular é essencial para a vida espiritual. Faça nosso quiz e descubra como está sua vivência dos sacramentos."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Antes da Confissão: O Exame de Consciência
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Antes de se confessar, reserve um tempo para fazer um exame de consciência. Isso significa refletir sobre seus pensamentos, palavras e ações desde a última confissão. Peça ao Espírito Santo que ilumine sua memória e seu coração.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Use os Dez Mandamentos como guia:
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>1. Amar a Deus sobre todas as coisas:</strong> Coloquei algo acima de Deus? Negligenciei a oração? Duvidei da fé? Consultei horóscopos ou práticas supersticiosas?
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>2. Não tomar o nome de Deus em vão:</strong> Usei o nome de Deus como palavrão? Fiz juramentos falsos?
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>3. Guardar domingos e festas:</strong> Faltei à Missa dominical sem motivo grave? Trabalhei desnecessariamente no domingo?
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>4. Honrar pai e mãe:</strong> Desrespeitei meus pais? Negligenciei meus deveres familiares?
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>5. Não matar:</strong> Feri alguém fisicamente? Desejei mal a alguém? Pratiquei ou apoiei o aborto? Abusei de álcool ou drogas?
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>6. Não pecar contra a castidade:</strong> Tive relações fora do casamento? Consumi pornografia? Pratiquei masturbação? Tive pensamentos impuros deliberados?
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>7. Não roubar:</strong> Roubei algo? Fui desonesto no trabalho? Não paguei dívidas que podia pagar?
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>8. Não levantar falso testemunho:</strong> Menti? Fofoquei? Prejudiquei a reputação de alguém?
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>9 e 10. Não cobiçar:</strong> Tive inveja? Desejei o cônjuge de outro? Fui ganancioso?
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Durante a Confissão: Passo a Passo
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Saudação Inicial
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Ao entrar no confessionário, faça o sinal da cruz e diga: <em>"Em nome do Pai, do Filho e do Espírito Santo. Amém."</em> O padre pode responder com uma bênção ou saudação.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Diga Há Quanto Tempo Não Se Confessa
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Diga: <em>"Padre, faz [tempo] desde minha última confissão."</em> Se faz muito tempo ou se você não lembra, diga isso também. Não precisa ser exato – "alguns meses", "cerca de um ano", "muitos anos" está bom.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                3. Confesse Seus Pecados
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Confesse seus pecados de forma clara e direta. Não precisa dar muitos detalhes ou contar histórias longas. Diga o pecado e, se relevante, quantas vezes aproximadamente. Por exemplo: <em>"Menti várias vezes"</em>, <em>"Faltei à Missa três domingos"</em>, <em>"Tive relações fora do casamento"</em>.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Se você não sabe como dizer algo, pode simplesmente dizer: <em>"Padre, não sei como dizer isso, mas..."</em> O padre vai ajudá-lo.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                4. Ouça o Padre
              </h3>
              <p className="text-text leading-relaxed mb-6">
                O padre pode fazer perguntas para entender melhor ou dar conselhos. Ouça com atenção. Ele também dará uma penitência – geralmente algumas orações ou uma ação concreta para fazer após a confissão.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                5. Ato de Contrição
              </h3>
              <p className="text-text leading-relaxed mb-6">
                O padre pedirá que você faça um ato de contrição. Você pode usar esta oração tradicional ou expressar arrependimento com suas próprias palavras:
              </p>
              <p className="text-text leading-relaxed mb-6 italic bg-background-muted p-4 rounded-lg">
                "Meu Deus, eu me arrependo de todo o coração de Vos ter ofendido, porque sois tão bom e amável. Proponho firmemente, com a ajuda da Vossa graça, não mais Vos ofender e fugir das ocasiões de pecado. Amém."
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                6. Absolvição
              </h3>
              <p className="text-text leading-relaxed mb-6">
                O padre então pronunciará as palavras da absolvição: <em>"Eu te absolvo dos teus pecados, em nome do Pai, do Filho e do Espírito Santo."</em> Faça o sinal da cruz e responda: <em>"Amém."</em>
              </p>
              <p className="text-text leading-relaxed mb-6">
                Neste momento, seus pecados são verdadeiramente perdoados. Você está reconciliado com Deus e com a Igreja.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Depois da Confissão
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Após sair do confessionário, faça a penitência que o padre deu o mais rápido possível. Agradeça a Deus pelo perdão recebido. Muitas pessoas sentem uma grande paz e alegria após a confissão – é a graça de Deus agindo em você.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Dicas Importantes
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Não tenha vergonha:</strong> O padre já ouviu de tudo. Ele não está lá para julgar, mas para ser instrumento da misericórdia de Deus. Além disso, ele é obrigado pelo sigilo sacramental a nunca revelar o que ouviu na confissão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Seja honesto:</strong> Não esconda pecados por vergonha. Uma confissão incompleta não é válida. Deus já sabe tudo – a confissão é para você receber o perdão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Confesse-se regularmente:</strong> Não espere acumular pecados graves. A confissão mensal é uma boa prática para manter a alma limpa e crescer na santidade.
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
                  "Não tenham medo da confissão! Quando alguém faz fila para se confessar, sente todas essas coisas, até a vergonha, mas depois, quando termina a confissão, sai livre, grande, belo, perdoado, feliz."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Papa Francisco
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="como-se-confessar-guia-completo" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Pronto para experimentar a misericórdia de Deus?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra como está sua vida sacramental.
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

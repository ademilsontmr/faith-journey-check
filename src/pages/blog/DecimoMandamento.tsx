import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DecimoMandamento() {
  return (
    <>
      <Helmet>
        <title>10º Mandamento: Não Cobiçar as Coisas Alheias | Bom Católico</title>
        <meta name="description" content="Entenda o Décimo Mandamento da Lei de Deus. A cobiça dos bens alheios, inveja, avareza e como cultivar o desprendimento e a pobreza de espírito." />
        <meta name="keywords" content="décimo mandamento, cobiçar, inveja, avareza, desprendimento, pobreza espírito, bens materiais" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/decimo-mandamento-nao-cobicar-bens" />
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
              <span className="text-text">10º Mandamento</span>
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
                10º Mandamento: Não Cobiçar as Coisas Alheias
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                O último mandamento completa a lei de Deus tratando dos desejos do coração em relação aos bens materiais. Ele nos convida à pobreza de espírito e ao desprendimento.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Gem className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Não cobiçarás a casa do teu próximo, nem o seu campo, nem o seu servo, nem a sua serva, nem o seu boi, nem o seu jumento, nem coisa alguma que pertença ao teu próximo" (Dt 5,21). Este mandamento proíbe o desejo desordenado pelos bens alheios, raiz de muitos pecados.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Enquanto o sétimo mandamento proíbe roubar, o décimo proíbe desejar roubar. Enquanto o nono trata da cobiça da carne, o décimo trata da cobiça dos bens. Ambos revelam que Deus não se contenta com a retidão exterior – Ele quer a pureza do coração.
              </p>

              <QuizCTA
                title="Seu coração está livre da cobiça?"
                description="O décimo mandamento trata dos desejos do coração. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Cobiça e Seus Frutos Amargos
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A cobiça é o desejo desordenado de possuir o que pertence a outro. Não é simplesmente admirar algo belo ou desejar ter algo semelhante – é querer especificamente o que é do outro, sentir-se injustiçado por não ter o que ele tem.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Da cobiça nascem muitos pecados: a inveja, que se entristece com o bem do próximo; a avareza, que acumula bens sem necessidade; o roubo, que toma o que é do outro; a fraude, que engana para obter vantagem; a injustiça, que nega ao outro o que lhe é devido.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Paulo adverte: "O amor ao dinheiro é a raiz de todos os males" (1Tm 6,10). Não é o dinheiro em si que é mau, mas o amor desordenado a ele, que coloca os bens materiais acima de Deus e do próximo.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Inveja: O Pecado que Corrói
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A inveja é um dos sete pecados capitais. Ela se entristece com o bem do próximo e se alegra com seu mal. É um pecado particularmente grave porque se opõe diretamente à caridade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O invejoso não consegue se alegrar com a alegria do outro. Quando o vizinho compra um carro novo, ele se entristece. Quando o colega é promovido, ele se ressente. Quando o amigo é elogiado, ele diminui o mérito.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A inveja pode levar a pecados graves. Foi por inveja que Caim matou Abel. Foi por inveja que os irmãos de José o venderam como escravo. Foi por inveja que os fariseus entregaram Jesus à morte.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Avareza: O Apego Desordenado
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A avareza é o desejo imoderado de riquezas e o apego excessivo aos bens materiais. O avarento nunca tem o suficiente – sempre quer mais, mesmo que não precise.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus contou a parábola do rico insensato que acumulou tantos bens que precisou construir celeiros maiores. Ele disse a si mesmo: "Tens muitos bens em depósito para muitos anos; descansa, come, bebe, regala-te!" Mas Deus lhe disse: "Insensato! Nesta mesma noite ser-te-á reclamada a alma" (Lc 12,19-20).
              </p>
              <p className="text-text leading-relaxed mb-6">
                A avareza é uma forma de idolatria, pois coloca os bens materiais no lugar de Deus. O avarento confia mais em seu dinheiro do que em Deus. Sua segurança está na conta bancária, não na Providência divina.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Pobreza de Espírito
              </h2>
              <p className="text-text leading-relaxed mb-6">
                "Bem-aventurados os pobres de espírito, porque deles é o Reino dos Céus" (Mt 5,3). A pobreza de espírito não é necessariamente pobreza material – é o desprendimento interior dos bens, a liberdade do coração.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O pobre de espírito pode ter bens, mas não é possuído por eles. Ele usa os bens como meios, não como fins. Ele está disposto a partilhar, a doar, a abrir mão. Ele sabe que tudo vem de Deus e a Deus pertence.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Francisco de Assis é o modelo perfeito de pobreza de espírito. Filho de rico comerciante, renunciou a tudo para seguir Cristo. Chamava a pobreza de "Senhora Pobreza" e via nela a liberdade para amar a Deus sem impedimentos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Desprendimento Cristão
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O desprendimento não é desprezo pelos bens – os bens são criação de Deus e são bons. É a liberdade interior que permite usar os bens sem ser escravizado por eles.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Gratidão:</strong> Reconhecer que tudo é dom de Deus. O que temos não é mérito nosso – é graça. Isso nos livra da arrogância e da ganância.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Contentamento:</strong> Estar satisfeito com o que se tem. São Paulo escreveu: "Aprendi a viver contente em qualquer situação" (Fl 4,11). O contentamento é o antídoto contra a cobiça.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Generosidade:</strong> Partilhar com os necessitados. "Quem tiver duas túnicas, reparta com quem não tem" (Lc 3,11). A generosidade liberta o coração do apego.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Simplicidade:</strong> Viver sem luxo desnecessário. Não acumular além do necessário. Preferir o essencial ao supérfluo.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Desejo do Bem Supremo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O décimo mandamento, ao proibir a cobiça dos bens terrenos, nos convida a desejar o Bem supremo: Deus. Santo Agostinho disse: "Fizeste-nos para Ti, Senhor, e inquieto está o nosso coração enquanto não repousar em Ti."
              </p>
              <p className="text-text leading-relaxed mb-6">
                O coração humano foi feito para o infinito. Nenhum bem finito pode satisfazê-lo plenamente. Por isso a cobiça nunca se satisfaz – sempre quer mais. Só Deus pode preencher o vazio do coração.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus disse: "Buscai primeiro o Reino de Deus e sua justiça, e todas estas coisas vos serão dadas por acréscimo" (Mt 6,33). Quando colocamos Deus em primeiro lugar, os bens materiais encontram seu lugar correto.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Exame de Consciência
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Para viver bem o décimo mandamento, examine-se regularmente:
              </p>
              <p className="text-text leading-relaxed mb-6">
                Sinto inveja do sucesso, dos bens ou das qualidades dos outros? Fico triste quando algo de bom acontece ao próximo? Desejo secretamente que o outro fracasse?
              </p>
              <p className="text-text leading-relaxed mb-6">
                Sou apegado demais aos bens materiais? Fico ansioso com dinheiro? Tenho dificuldade em doar ou partilhar? Acumulo além do necessário?
              </p>
              <p className="text-text leading-relaxed mb-6">
                Estou satisfeito com o que tenho ou sempre quero mais? Comparo-me constantemente com os outros? Sinto-me injustiçado por não ter o que outros têm?
              </p>
              <p className="text-text leading-relaxed mb-6">
                Confio mais em Deus ou no dinheiro? Minha segurança está na Providência divina ou na conta bancária? Busco primeiro o Reino de Deus?
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Bem-aventurados os pobres de espírito, porque deles é o Reino dos Céus."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Mateus 5,3
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O décimo mandamento desdobra e completa o nono, que versa sobre a concupiscência da carne. Proíbe a cobiça do bem alheio, raiz do roubo, da rapina e da fraude."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catecismo da Igreja Católica, 2534
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="decimo-mandamento-nao-cobicar-bens" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Seu coração está livre?
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

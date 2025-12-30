import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function ImportanciaConfissao() {
  return (
    <>
      <Helmet>
        <title>A Importância da Confissão: Por Que Confessar Regularmente? | Bom Católico</title>
        <meta name="description" content="Descubra os benefícios espirituais da confissão frequente. Aprenda como se confessar bem e por que este sacramento transforma nossa vida cristã." />
        <meta name="keywords" content="confissão católica, sacramento da penitência, reconciliação, como se confessar, exame de consciência" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/importancia-confissao" />
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
              <span className="text-text">A Importância da Confissão</span>
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
                  28 de Novembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  6 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                A Importância da Confissão: Por Que Confessar Regularmente?
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A confissão é um dos maiores tesouros da Igreja Católica. Descubra como este sacramento
                pode transformar sua vida espiritual e aproximá-lo de Deus.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Se existe um sacramento que revela de modo especial o coração misericordioso de Deus, é a Confissão. Imagine: o Criador do universo, o Deus três vezes Santo, inclina-se sobre a miséria humana não para condenar, mas para curar. Não para humilhar, mas para restaurar. O confessionário não é um tribunal de condenação – é um hospital de almas, onde o Médico divino aplica o bálsamo de Sua misericórdia sobre as feridas do pecado.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus instituiu este sacramento na noite da Ressurreição, quando soprou sobre os Apóstolos e disse: "Recebei o Espírito Santo. Àqueles a quem perdoardes os pecados, serão perdoados" (Jo 20,22-23). Que presente extraordinário! O mesmo poder que ressuscitou Cristo dos mortos está disponível para nos ressuscitar da morte espiritual do pecado. Cada confissão sincera é uma pequena Páscoa, uma passagem da morte para a vida.
              </p>

              <QuizCTA
                title="Quando foi sua última ressurreição espiritual?"
                description="A confissão é o sacramento da alegria. Faça nosso quiz e descubra como superar o medo do confessionário e viver a liberdade que só o perdão de Deus pode proporcionar."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que Acontece na Confissão?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Quando você entra no confessionário, não está simplesmente conversando com um padre – está diante do próprio Cristo, que age através do sacerdote. O padre é apenas o instrumento; quem perdoa é Jesus. Quando o confessor pronuncia as palavras de absolvição – "Eu te absolvo dos teus pecados, em nome do Pai, do Filho e do Espírito Santo" – acontece um milagre maior do que a criação do mundo: uma alma morta pelo pecado volta à vida.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Este encontro restaura nossa amizade com Deus, devolvendo-nos a graça santificante se a perdemos por pecado mortal, ou aumentando-a se confessamos pecados veniais. O Catecismo chama a confissão de "segunda tábua de salvação após o naufrágio da graça perdida". Se o Batismo é a primeira tábua, a Confissão é a segunda chance que Deus nos dá – e Ele a oferece quantas vezes precisarmos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Santa Faustina Kowalska, a apóstola da Divina Misericórdia, registrou em seu diário as palavras de Jesus: "Quando te aproximas da confissão, saiba que Eu mesmo te espero no confessionário; apenas Me oculto no sacerdote, mas sou Eu mesmo que atuo na tua alma." Que consolação saber que não enfrentamos nossos pecados sozinhos, mas nas mãos do Amor infinito!
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Benefícios Espirituais da Confissão Frequente
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Crescimento no Autoconhecimento
              </h3>
              <p className="text-text leading-relaxed mb-6">
                A preparação para a confissão exige um exame de consciência honesto. Este exercício regular nos ajuda a conhecer melhor nossas fraquezas, tendências pecaminosas e padrões de comportamento. Com o tempo, desenvolvemos uma consciência mais delicada e sensível ao pecado, o que nos permite evitá-lo com mais eficácia.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Fortalecimento da Vontade
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Cada confissão sincera fortalece nossa vontade de evitar o pecado. As graças sacramentais nos dão força para resistir às tentações e praticar as virtudes. São João Paulo II recomendava a confissão mensal, e muitos santos se confessavam semanalmente, reconhecendo que esta prática era essencial para seu progresso espiritual.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Paz Interior e Alegria
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Quem se confessa regularmente experimenta uma paz que o mundo não pode dar. O peso da culpa é removido, a consciência fica tranquila, e o coração se enche de alegria verdadeira. Esta paz não depende das circunstâncias externas, mas brota do íntimo da alma reconciliada com Deus.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Proteção Contra o Pecado Mortal
              </h3>
              <p className="text-text leading-relaxed mb-6">
                A confissão frequente cria uma espécie de "escudo espiritual" contra pecados graves. Quando nos habituamos a confessar regularmente, mesmo os pecados veniais, desenvolvemos uma sensibilidade maior ao pecado e uma resistência mais forte às tentações que poderiam nos levar a pecados mortais.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Fazer uma Boa Confissão
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Exame de Consciência
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Antes da confissão, dedique tempo para examinar sua consciência à luz dos Dez Mandamentos e das obrigações do seu estado de vida. Peça ao Espírito Santo que ilumine sua mente para reconhecer seus pecados. Seja honesto consigo mesmo, sem minimizar nem exagerar suas faltas.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Contrição Sincera
              </h3>
              <p className="text-text leading-relaxed mb-6">
                A contrição é a dor da alma pelo pecado cometido, unida ao propósito de não mais pecar. A contrição perfeita nasce do amor a Deus; a contrição imperfeita (atrição), do medo do inferno ou da fealdade do pecado. Ambas são suficientes para o sacramento, mas devemos aspirar à contrição perfeita.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                3. Confissão Íntegra
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Confesse todos os pecados mortais de que se lembra, indicando seu número e circunstâncias que alterem sua natureza. Os pecados veniais não precisam ser confessados, mas é muito proveitoso fazê-lo. Seja claro, conciso e completo, evitando detalhes desnecessários.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                4. Propósito de Emenda
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Tenha um propósito firme de não mais pecar e de evitar as ocasiões de pecado. Este propósito não precisa ser acompanhado da certeza de que nunca mais cairá, mas deve ser sincero e determinado. Peça a Deus a graça para cumprir este propósito.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                5. Satisfação ou Penitência
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Cumpra a penitência indicada pelo confessor. Ela serve para reparar os danos causados pelo pecado e ajuda no processo de conversão. Se esquecer a penitência, deve voltar ao confessor para recebê-la novamente.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Com Que Frequência se Confessar?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Igreja obriga a confissão pelo menos uma vez por ano, especialmente antes da Páscoa, se houver pecado grave. Contudo, este é o mínimo absoluto – como quem diz que é obrigado a comer pelo menos uma vez por semana para não morrer de fome. Os mestres espirituais recomendam a confissão mensal para quem deseja progredir na vida espiritual, e muitos santos se confessavam semanalmente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Josemaría Escrivá ensinava: "A confissão frequente é uma das maiores ajudas para a vida interior." São João Paulo II se confessava semanalmente, mesmo sendo Papa. Santa Teresa de Calcutá também. Eles entendiam que a confissão não é apenas para "limpar" pecados graves, mas para polir a alma, remover as imperfeições, crescer em santidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Não espere cometer um pecado grave para procurar o sacramento. Confesse também os pecados veniais, as imperfeições, as tendências desordenadas. Cada confissão é uma oportunidade de receber graças especiais para vencer aquele defeito que tanto o incomoda, aquela tentação que sempre volta, aquele vício que parece invencível. Com a graça de Deus, nada é impossível.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Vencendo o Medo do Confessionário
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Muitos católicos evitam a confissão por vergonha ou medo. Mas pense: o padre já ouviu de tudo. Seu pecado não vai escandalizá-lo nem diminuir o respeito que ele tem por você. Pelo contrário, ele se alegrará com sua humildade e coragem. Além disso, o sigilo sacramental é absoluto – o padre preferiria morrer a revelar o que ouviu em confissão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O demônio faz de tudo para nos afastar do confessionário. Antes da confissão, ele minimiza nossos pecados: "Isso não é nada, todo mundo faz." Depois, ele os maximiza: "Você é imperdoável, nem adianta confessar." Não dê ouvidos a essas mentiras. A misericórdia de Deus é maior que qualquer pecado. Como disse Jesus a Santa Faustina: "Mesmo que os pecados das almas fossem negros como a noite, quando o pecador se volta para a Minha misericórdia, ele Me presta a maior glória."
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Não há pecado, por mais grave que seja, que a Igreja não possa perdoar."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catecismo da Igreja Católica, 982
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A confissão é o sacramento da alegria. Não tenham medo de se confessar!"
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Papa Francisco
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="importancia-confissao" />

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Descubra Como Está Sua Vida de Fé
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz gratuito e receba um diagnóstico personalizado da sua caminhada católica.
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

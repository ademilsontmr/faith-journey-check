import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function MissaDominical() {
  return (
    <>
      <Helmet>
        <title>A Missa Dominical: Centro da Vida Cristã | Bom Católico</title>
        <meta name="description" content="Descubra por que a participação na Missa aos domingos é essencial para todo católico. Aprenda como aproveitar melhor a Santa Missa e crescer na fé." />
        <meta name="keywords" content="missa dominical, santa missa, eucaristia, preceito dominical, liturgia católica" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/missa-dominical" />
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
              <span className="text-text">A Missa Dominical</span>
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
                  Liturgia
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  15 de Novembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  9 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                A Missa Dominical: Centro da Vida Cristã
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A Santa Missa é o tesouro mais precioso da Igreja Católica, onde o sacrifício de
                Cristo se torna presente e nos alimentamos do Pão da Vida.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                A Missa dominical é o coração pulsante da vida católica. Desde os primeiros tempos da Igreja, os cristãos se reuniam no "Dia do Senhor" para celebrar a Ressurreição de Cristo e participar do banquete eucarístico. Esta tradição apostólica permanece como mandamento da Igreja: todo católico deve participar da Missa aos domingos e festas de guarda, a menos que esteja legitimamente impedido. Mas a Missa é muito mais do que uma obrigação – é um privilégio inestimável e fonte inesgotável de graças.
              </p>

              <QuizCTA
                title="A Missa é o centro da sua semana?"
                description="Participar da Eucaristia é o maior privilégio de um católico. Faça nosso quiz e descubra como viver a Santa Missa com mais profundidade, recebendo todas as graças do altar."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que Acontece na Santa Missa?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Missa não é uma simples recordação da Última Ceia ou uma representação simbólica do Calvário. É a renovação incruenta do único Sacrifício de Cristo na Cruz. O mesmo Cristo que se ofereceu uma vez por todas no Calvário continua oferecendo-se ao Pai através das mãos do sacerdote. O sacrifício é o mesmo, a vítima é a mesma, apenas o modo de oferecimento é diferente: no Calvário foi cruento (com derramamento de sangue), na Missa é incruento (sem derramamento de sangue).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Além disso, na Missa recebemos o próprio Cristo na Sagrada Comunhão. O pão e o vinho são verdadeiramente transformados no Corpo, Sangue, Alma e Divindade de Nosso Senhor Jesus Cristo. Esta transformação, chamada transubstanciação, é o maior milagre que acontece diariamente em todo o mundo.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Estrutura da Santa Missa
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Ritos Iniciais
              </h3>
              <p className="text-text leading-relaxed mb-6">
                A Missa começa com a procissão de entrada, saudação, ato penitencial, Glória (nos domingos e festas) e oração coleta. Estes ritos preparam nossa alma para o encontro com Deus, ajudando-nos a deixar para trás as preocupações mundanas e entrar no mistério sagrado.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Liturgia da Palavra
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Na Liturgia da Palavra, Deus nos fala através das Sagradas Escrituras. Ouvimos leituras do Antigo e Novo Testamentos, cantamos o Salmo Responsorial, e o Evangelho é proclamado solenemente. A homilia do sacerdote aplica a Palavra de Deus à nossa vida. Esta parte culmina com a Profissão de Fé (Credo) e as Preces dos Fiéis.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Liturgia Eucarística
              </h3>
              <p className="text-text leading-relaxed mb-6">
                O coração da Missa é a Liturgia Eucarística. Começa com a apresentação das oferendas (pão e vinho), seguida pela Oração Eucarística, quando acontece a consagração. No momento em que o sacerdote pronuncia as palavras de Cristo – "Isto é o meu Corpo... Este é o meu Sangue" – o pão e o vinho tornam-se verdadeiramente Cristo. Depois rezamos o Pai-Nosso, trocamos o sinal da paz, e recebemos a Sagrada Comunhão.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Ritos Finais
              </h3>
              <p className="text-text leading-relaxed mb-6">
                A Missa conclui com avisos, bênção e despedida. A palavra "Missa" vem do latim "missio" (envio), indicando que somos enviados ao mundo para testemunhar Cristo. Não saímos da Missa apenas consolados, mas também com uma missão.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Por Que a Missa Dominical é Obrigatória?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O terceiro mandamento ordena: "Guardarás o dia do Senhor." A Igreja determina que os católicos cumpram este mandamento participando da Missa aos domingos e festas de guarda. Esta obrigação não é um peso arbitrário, mas uma expressão do mínimo que devemos a Deus por tudo que Ele nos dá. Se alguém ama verdadeiramente a Deus, não considera a Missa uma obrigação, mas um privilégio.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Faltar à Missa dominical sem motivo grave constitui pecado mortal. Motivos que escusam da obrigação incluem: doença, cuidado de crianças pequenas ou doentes, trabalho verdadeiramente necessário, distância extrema da igreja, e outras impossibilidades sérias. A preguiça, o desejo de dormir mais, ou compromissos sociais não são motivos válidos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Frutos da Participação na Missa
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>União íntima com Cristo através da Comunhão</li>
                <li>Perdão dos pecados veniais</li>
                <li>Preservação contra pecados mortais</li>
                <li>Aumento da graça santificante</li>
                <li>Participação nos méritos de Cristo</li>
                <li>Comunhão com a Igreja universal</li>
                <li>Sufrágio pelas almas do Purgatório</li>
                <li>Bênçãos temporais e espirituais</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Participar Melhor da Missa
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Preparação Antes da Missa
              </h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Chegue com antecedência para se recolher em oração</li>
                <li>Vista-se de modo digno e modesto</li>
                <li>Leia as leituras do dia antecipadamente</li>
                <li>Faça um breve exame de consciência</li>
                <li>Ofereça a Missa por uma intenção especial</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Durante a Missa
              </h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Participe ativamente das respostas e cantos</li>
                <li>Evite distrações (celular, conversas)</li>
                <li>Acompanhe com atenção as leituras e homilia</li>
                <li>Faça genuflexões e reverências com devoção</li>
                <li>Una-se espiritualmente ao sacrifício do altar</li>
                <li>Receba a Comunhão em estado de graça</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Após a Missa
              </h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Faça uma ação de graças (pelo menos alguns minutos)</li>
                <li>Não saia correndo após a bênção final</li>
                <li>Leve a graça recebida para sua semana</li>
                <li>Pratique o que ouviu na homilia</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Missa Durante a Semana
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Embora a obrigação seja apenas dominical, participar da Missa durante a semana é altamente recomendado. Muitos santos participavam da Missa diariamente, reconhecendo nela a fonte de todas as graças. Mesmo que só possamos ir uma vez além do domingo, os frutos espirituais são imensos. Santa Teresa de Calcutá dizia: "Quando você olha para o Crucifixo, você entende quanto Jesus o amou então. Quando você olha para a Hóstia Sagrada, você entende quanto Jesus o ama agora."
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Se conhecêssemos o valor da Santa Missa, morreríamos de alegria."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — São Padre Pio de Pietrelcina
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="missa-dominical" />

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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OPecadoOriginalRedencao() {
  return (
    <>
      <Helmet>
        <title>O Pecado Original e a Redenção: O Plano de Deus para Salvar a Humanidade | Bom Católico</title>
        <meta name="description" content="Entenda o mistério do pecado original, por que Deus permitiu, e como Cristo nos redimiu através de Sua morte e ressurreição. A história da salvação explicada." />
        <meta name="keywords" content="o que é pecado original, adão e eva pecado, por que jesus morreu na cruz, redenção de cristo, história da salvação, batismo apaga pecado original" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/pecado-original-redencao" />
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
              <span className="text-text">Pecado Original e Redenção</span>
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
                  Doutrina
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
                O Pecado Original e a Redenção: O Plano de Deus para Salvar a Humanidade
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Por que sofremos? Por que morremos? Por que há mal no mundo? A resposta está no mistério do pecado original e na glória da redenção em Cristo.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                No início, Deus criou o homem e a mulher à Sua imagem e semelhança, colocando-os em um jardim de delícias, o Éden. Tudo era perfeito: não havia sofrimento, doença, morte ou medo. Adão e Eva viviam em amizade com Deus, em harmonia com a natureza e consigo mesmos. Mas Deus lhes deu uma prova de amor: a liberdade. E com a liberdade veio a possibilidade de escolher o mal.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Quando Adão e Eva comeram do fruto proibido, não foi apenas um ato de desobediência – foi um ato de desconfiança em Deus. Eles acreditaram na mentira da serpente: "Sereis como Deus" (Gn 3,5). Queriam ser deuses por si mesmos, independentes do Criador. E naquele momento, o pecado entrou no mundo, e com ele, a morte (Rm 5,12).
              </p>

              <QuizCTA
                title="Você compreende o plano de Deus para sua salvação?"
                description="O pecado original nos separou de Deus, mas Cristo nos redimiu. Faça nosso quiz e descubra como viver a graça da redenção em sua vida diária."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                As Consequências do Pecado Original
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O pecado original não afetou apenas Adão e Eva – afetou toda a humanidade. Todos nós nascemos com a mancha do pecado original em nossas almas. Não é culpa nossa, mas é uma realidade que herdamos. Por isso, a Igreja batiza até os bebês – para limpá-los dessa mancha e abri-los à vida de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                As consequências do pecado original são profundas: a morte física (nossos corpos morrem), a morte espiritual (a separação de Deus), o sofrimento, a doença, a fadiga no trabalho, e a concupiscência (a inclinação para o mal que permanece em nós mesmo após o Batismo). O mundo que deveria ser um paraíso se tornou um vale de lágrimas.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Por Que Deus Permitiu o Pecado?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Esta é uma pergunta que muitos fazem. Se Deus é onipotente e onisciente, por que permitiu que Adão e Eva pecassem? A resposta está no amor. Deus nos criou livres porque o amor verdadeiro exige liberdade. Um robô programado para amar não ama realmente. Deus preferiu criar seres livres, mesmo sabendo que alguns escolheriam o mal, porque o amor sem liberdade não é amor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Além disso, Deus já tinha um plano. Ele sabia que permitiria o pecado, mas também sabia que usaria esse mal para um bem maior. Como diz a liturgia da Vigília Pascal: "Ó feliz culpa, que mereceu ter um Redentor tão grande!" O pecado de Adão permitiu que Cristo viesse e nos redimisse de forma ainda mais gloriosa.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Promessa da Redenção
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Imediatamente após o pecado, Deus não abandonou a humanidade. Ele fez uma promessa: "Porei inimizade entre ti e a mulher, entre a tua descendência e a dela; ela te esmagará a cabeça" (Gn 3,15). Esta é a primeira profecia de Cristo – a "Mulher" é Maria, e sua "descendência" é Jesus. Desde o início, Deus planejava nossa salvação.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Ao longo dos séculos, Deus preparou a humanidade para a vinda do Messias. Enviou profetas, fez alianças, escolheu um povo. E quando chegou a plenitude dos tempos, Deus Se fez homem em Jesus Cristo. Não como um juiz que vinha condenar, mas como um Redentor que vinha salvar.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Mistério da Redenção
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Cristo morreu na Cruz para nos redimir. Sua morte não foi uma derrota – foi a vitória final sobre o pecado e a morte. Quando Jesus gritou "Está consumado!" (Jo 19,30), Ele quis dizer que a obra da redenção estava completa. O preço do pecado foi pago. A dívida foi quitada.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Mas a redenção não é apenas um evento do passado – é uma realidade presente. Cada vez que você se confessa, você participa da redenção de Cristo. Cada vez que você recebe a Eucaristia, você se une ao sacrifício redentor. Cada vez que você sofre com paciência, você completa "o que falta aos sofrimentos de Cristo" (Cl 1,24).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Ressurreição: A Vitória Final
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Se a Cruz é o ponto mais baixo da história, a Ressurreição é o ponto mais alto. Quando Cristo ressuscitou no terceiro dia, Ele venceu a morte de uma vez por todas. Abriu as portas do Céu que haviam sido fechadas pelo pecado de Adão. Agora, todos nós que cremos nEle podemos ressuscitar também.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Ressurreição não é apenas a promessa de uma vida após a morte – é a transformação de toda a realidade. Um dia, quando Cristo voltar em glória, Ele renovará todas as coisas. Haverá novos céus e nova terra. Não haverá mais morte, nem lágrimas, nem dor (Ap 21,4). O plano de Deus será finalmente consumado.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Onde está, ó morte, tua vitória? Onde está, ó morte, teu aguilhão? Mas graças a Deus, que nos dá a vitória por nosso Senhor Jesus Cristo."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — 1 Coríntios 15,55-57
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Ó feliz culpa, que mereceu ter um Redentor tão grande!"
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Exultet, Vigília Pascal
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="pecado-original-redencao" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você está vivendo a graça da redenção?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra como você está vivendo o mistério da salvação em sua vida diária.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SacramentoUncaoEnfermos() {
  return (
    <>
      <Helmet>
        <title>O Sacramento da Unção dos Enfermos: Conforto na Doença | Bom Católico</title>
        <meta name="description" content="Entenda o Sacramento da Unção dos Enfermos na Igreja Católica. Quando pedir, seus efeitos espirituais e físicos, e como preparar-se para recebê-lo." />
        <meta name="keywords" content="unção dos enfermos, sacramento doentes, extrema unção, doença, morte, conforto espiritual" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/sacramento-uncao-enfermos" />
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
              <span className="text-text">Sacramento da Unção dos Enfermos</span>
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
                  9 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                O Sacramento da Unção dos Enfermos: Conforto na Doença
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A Unção dos Enfermos não é apenas para quem está morrendo. É o sacramento que traz força, paz e cura para todos que enfrentam doenças graves.
              </p>
            </header>

            <div className="aspect-video bg-green-100 rounded-2xl flex items-center justify-center mb-10">
              <HeartPulse className="w-24 h-24 text-green-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                São Tiago escreve: "Alguém dentre vós está doente? Chame os presbíteros da Igreja, e estes façam oração sobre ele, ungindo-o com óleo em nome do Senhor. A oração da fé salvará o doente, e o Senhor o levantará; e, se houver cometido pecados, ser-lhe-ão perdoados" (Tg 5,14-15). Este é o fundamento bíblico do Sacramento da Unção dos Enfermos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Antigamente chamado de "Extrema Unção", este sacramento era frequentemente adiado até o último momento, quando a pessoa já estava inconsciente ou à beira da morte. Hoje, a Igreja encoraja que seja recebido mais cedo, quando a pessoa ainda pode participar conscientemente e receber todos os seus benefícios.
              </p>

              <QuizCTA
                title="Você conhece os sacramentos de cura?"
                description="A Unção dos Enfermos é um sacramento de cura e conforto. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Quem Pode Receber a Unção dos Enfermos?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Unção dos Enfermos pode ser recebida por qualquer católico batizado que esteja em perigo de morte por doença ou velhice. Não é necessário estar "morrendo" – basta que a doença seja grave ou que a pessoa esteja em idade avançada com saúde debilitada.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Pode ser recebida antes de uma cirurgia grave, durante uma doença séria, ou quando a pessoa idosa sente que suas forças estão diminuindo. Se a pessoa se recuperar e depois adoecer novamente, pode receber o sacramento outra vez.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Não espere até o último momento! Chame o padre quando a doença for diagnosticada ou quando a cirurgia for marcada. Assim, a pessoa pode participar conscientemente e receber a plenitude das graças.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Rito da Unção
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O rito essencial consiste na unção da fronte e das mãos do doente com o Óleo dos Enfermos (azeite abençoado pelo bispo), acompanhada das palavras: "Por esta santa unção e pela sua infinita misericórdia, o Senhor venha em teu auxílio com a graça do Espírito Santo, para que, liberto dos teus pecados, Ele te salve e, na sua bondade, alivie os teus sofrimentos."
              </p>
              <p className="text-text leading-relaxed mb-6">
                Geralmente, o sacramento é acompanhado da Confissão (se o doente puder) e da Comunhão (chamada "Viático" quando dada a alguém em perigo de morte). Assim, o doente recebe os três sacramentos de cura e fortalecimento.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Efeitos da Unção dos Enfermos
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>1. Graça de conforto e paz:</strong> O doente recebe força para enfrentar a doença com fé e esperança. A ansiedade e o medo são substituídos pela paz de Cristo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>2. União com a Paixão de Cristo:</strong> O sofrimento do doente é unido ao sofrimento de Cristo na Cruz, tornando-se redentor para si e para os outros.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>3. Perdão dos pecados:</strong> Se o doente não pôde se confessar, a Unção perdoa os pecados (desde que haja arrependimento).
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>4. Cura física (se for da vontade de Deus):</strong> Às vezes, Deus concede a cura física através deste sacramento. Mas mesmo quando não há cura física, sempre há cura espiritual.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>5. Preparação para a passagem:</strong> Se a morte estiver próxima, o sacramento prepara a alma para o encontro com Deus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Não Tenha Medo de Chamar o Padre
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Muitas famílias hesitam em chamar o padre por medo de "assustar" o doente ou de "admitir" que a situação é grave. Mas a Unção dos Enfermos não é um "atestado de óbito" – é um sacramento de cura e esperança.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Os padres estão disponíveis 24 horas para atender doentes. Não hesite em ligar para a paróquia, mesmo de madrugada, se alguém estiver em perigo de morte. É uma das missões mais importantes do sacerdote.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Alguém dentre vós está doente? Chame os presbíteros da Igreja, e estes façam oração sobre ele, ungindo-o com óleo em nome do Senhor."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Tiago 5,14
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A Unção dos Enfermos confere ao doente a graça do Espírito Santo que o ajuda a confiar em Deus e a resistir às tentações do maligno."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catecismo da Igreja Católica, 1520
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sacramento-uncao-enfermos" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você conhece os sacramentos de cura?
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

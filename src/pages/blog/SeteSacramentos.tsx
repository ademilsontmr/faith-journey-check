import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

export default function SeteSacramentos() {
  return (
    <>
      <Helmet>
        <title>Os 7 Sacramentos da Igreja Católica Explicados | Bom Católico</title>
        <meta name="description" content="Entenda a importância e o significado de cada um dos sete sacramentos instituídos por Cristo: Batismo, Eucaristia, Confirmação, Confissão, Unção, Ordem e Matrimônio." />
        <meta name="keywords" content="sacramentos católicos, sete sacramentos, batismo, eucaristia, confirmação, confissão, matrimônio católico" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/sete-sacramentos" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-accent-foreground" />
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

        {/* Breadcrumb */}
        <div className="bg-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Os 7 Sacramentos</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Formação
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  03 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min de leitura
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Os 7 Sacramentos da Igreja Católica Explicados
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conheça os sinais sagrados instituídos por Cristo que comunicam a graça divina 
                e nos santificam em cada etapa da vida cristã.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                Os sacramentos são sinais eficazes da graça, instituídos por Cristo e confiados à Igreja, pelos quais nos é dispensada a vida divina. Os sete sacramentos tocam todas as etapas e todos os momentos importantes da vida cristã: nascimento, crescimento, cura e missão. Através deles, recebemos as graças necessárias para nossa santificação e salvação.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Sacramentos de Iniciação Cristã
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                1. Batismo: A Porta da Vida Cristã
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                O Batismo é o fundamento de toda a vida cristã e a porta que abre o acesso aos outros sacramentos. Pelo Batismo, somos libertados do pecado original e de todos os pecados pessoais, renascemos como filhos de Deus, tornamo-nos membros de Cristo e somos incorporados à Igreja. O sacramento imprime na alma um caráter espiritual indelével, razão pela qual só pode ser recebido uma vez.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                A matéria do Batismo é a água natural, e a forma são as palavras: "Eu te batizo em nome do Pai, do Filho e do Espírito Santo." Este sacramento pode ser administrado por qualquer pessoa que tenha a intenção de fazer o que a Igreja faz, em caso de necessidade urgente. Os padrinhos assumem o compromisso de ajudar o batizado em sua caminhada de fé.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                2. Confirmação: O Sacramento da Maturidade Cristã
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                A Confirmação, também chamada Crisma, aperfeiçoa a graça batismal e nos une mais firmemente a Cristo. Por este sacramento, recebemos de modo especial o Espírito Santo, somos enriquecidos com uma força particular do Espírito Santo e ficamos mais estritamente obrigados a difundir e defender a fé por palavras e obras, como verdadeiras testemunhas de Cristo.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                O rito essencial da Confirmação consiste na unção com o santo crisma na fronte do batizado, imposta juntamente com as palavras: "Recebe por este sinal o Espírito Santo, o Dom de Deus." Esta unção significa e imprime o selo espiritual, o caráter, que também é indelével e marca a pertença total a Cristo.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                3. Eucaristia: O Sacramento por Excelência
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                A Eucaristia é "fonte e ápice de toda a vida cristã". É o próprio Cristo que se oferece em sacrifício e se dá como alimento para a vida eterna. Na Missa, o pão e o vinho são transubstanciados no Corpo e Sangue de Cristo por meio das palavras da consagração pronunciadas pelo sacerdote e pela ação do Espírito Santo.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                A comunhão eucarística aumenta nossa união com Cristo, perdoa os pecados veniais, preserva-nos de pecados mortais futuros e fortalece os laços de caridade. O católico deve estar em estado de graça para comungar e observar o jejum eucarístico de pelo menos uma hora antes da comunhão. A Igreja recomenda aos fiéis receberem a Eucaristia toda vez que participam da Missa.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Sacramentos de Cura
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                4. Penitência e Reconciliação: O Sacramento do Perdão
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                A Confissão, também chamada Sacramento da Penitência ou Reconciliação, oferece ao batizado a possibilidade de se converter, recuperar a graça e reconciliar-se com Deus após ter cometido pecados. É o sacramento pelo qual os pecados cometidos após o Batismo são perdoados pelo poder de Cristo, através da absolvição do sacerdote.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Os atos do penitente são: contrição (arrependimento sincero), confissão (acusação dos pecados ao sacerdote) e satisfação (cumprimento da penitência imposta). A absolvição do sacerdote perdoa os pecados e reconcilia o pecador com Deus e com a Igreja. Todo fiel que atingiu a idade da razão é obrigado a confessar fielmente seus pecados graves pelo menos uma vez por ano.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                5. Unção dos Enfermos: Conforto e Graça na Doença
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                A Unção dos Enfermos confere ao cristão uma graça especial para enfrentar as dificuldades próprias do estado de doença grave ou da velhice. Este sacramento pode ser recebido toda vez que uma pessoa sofre de doença grave, antes de uma operação arriscada, ou quando a velhice se agrava. Não é destinado apenas aos que estão prestes a morrer.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Os efeitos deste sacramento incluem: a união do doente à Paixão de Cristo, o conforto, a paz e a coragem, o perdão dos pecados (se o doente não pôde confessar-se), a restauração da saúde (se for conveniente para a salvação) e a preparação para a passagem à vida eterna. O sacramento é administrado pelo sacerdote com a unção de óleo bento.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Sacramentos a Serviço da Comunhão
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                6. Ordem: O Sacramento do Ministério Apostólico
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                O Sacramento da Ordem é aquele pelo qual a missão confiada por Cristo aos Apóstolos continua a ser exercida na Igreja, até o fim dos tempos. Compreende três graus: o episcopado, o presbiterado e o diaconado. Os bispos recebem a plenitude do sacramento da Ordem, os presbíteros (padres) participam do ministério de Cristo, e os diáconos são ordenados para o serviço.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                O ministro deste sacramento é o bispo. Só os homens batizados podem receber validamente a Ordem. A Igreja confere o sacramento da Ordem somente a homens batizados, cujas aptidões para o exercício do ministério tenham sido devidamente reconhecidas. O celibato sacerdotal é sinal de consagração total a Cristo na Igreja latina.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                7. Matrimônio: União Sagrada e Indissolúvel
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                O Matrimônio é a aliança pela qual um homem e uma mulher constituem entre si uma comunhão de toda a vida, ordenada por sua índole natural ao bem dos cônjuges e à geração e educação da prole. Entre batizados, o matrimônio foi elevado por Cristo à dignidade de sacramento. Os próprios esposos são ministros do sacramento.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                As propriedades essenciais do matrimônio são a unidade (um homem e uma mulher) e a indissolubilidade (até que a morte os separe). O consentimento matrimonial deve ser livre, consciente e dado na presença de testemunhas e do ministro sagrado. O matrimônio confere aos esposos a graça para se amarem com o amor com que Cristo amou a Igreja, aperfeiçoando seu amor humano, fortalecendo sua unidade indissolúvel e santificando-os no caminho da vida eterna.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                A Importância dos Sacramentos na Vida Cristã
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Os sacramentos são canais privilegiados da graça divina. Eles nos acompanham do nascimento à morte, santificando cada momento importante de nossa existência. Como ensina o Catecismo, "os sacramentos são necessários para a salvação" e "conferem a graça que significam". Por isso, todo católico deve buscar vivê-los com fé, devoção e regularidade.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-10">
                <p className="text-foreground italic text-center">
                  "Os sacramentos são forças que brotam do Corpo de Cristo, sempre vivo e vivificante."
                </p>
                <p className="text-muted-foreground text-center mt-2">
                  — Catecismo da Igreja Católica, 1116
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Descubra Como Está Sua Vida de Fé
              </h3>
              <p className="text-muted-foreground mb-6">
                Faça nosso quiz gratuito e receba um diagnóstico personalizado da sua caminhada católica.
              </p>
              <Link to="/quiz">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
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

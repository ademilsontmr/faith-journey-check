import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

export default function SantosPadroeiros() {
  return (
    <>
      <Helmet>
        <title>Santos Padroeiros: Como Escolher e Honrar o Seu | Bom Católico</title>
        <meta name="description" content="Conheça a tradição dos santos padroeiros na Igreja Católica. Aprenda como escolher seu santo protetor e como honrá-lo para receber sua intercessão." />
        <meta name="keywords" content="santos padroeiros, santo protetor, intercessão dos santos, devoção aos santos, católico" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/santos-padroeiros" />
      </Helmet>

      <div className="min-h-screen bg-background">
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

        <div className="bg-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Santos Padroeiros</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Devoções
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  25 de Novembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 min de leitura
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Santos Padroeiros: Como Escolher e Honrar o Seu
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Os santos são nossos irmãos mais velhos na fé, que já alcançaram a glória celeste e 
                continuam intercedendo por nós junto a Deus.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Users className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                A devoção aos santos é uma das mais belas tradições da Igreja Católica. Desde os primeiros séculos, os cristãos veneravam aqueles que deram testemunho heroico de fé, muitas vezes com o próprio sangue. Os santos padroeiros são intercessores especiais que nos acompanham em nossa jornada terrena, protegendo-nos e inspirando-nos com seu exemplo de santidade.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                O Que é um Santo Padroeiro?
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Um santo padroeiro é um santo reconhecido como protetor especial de uma pessoa, lugar, profissão, grupo ou causa. A palavra "padroeiro" vem do latim "patronus", que significa "protetor" ou "defensor". Quando escolhemos ou recebemos um santo padroeiro, estabelecemos uma relação espiritual especial com ele, confiando-nos à sua intercessão junto a Deus.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Esta tradição remonta aos primeiros séculos da Igreja, quando os cristãos começaram a invocar os mártires como intercessores. Com o tempo, a prática se expandiu para incluir confessores, virgens, doutores da Igreja e todos os que foram canonizados. Hoje, cada católico pode ter um ou mais santos padroeiros que o acompanham em sua caminhada de fé.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Como Recebemos um Santo Padroeiro?
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                No Batismo
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                O momento mais comum para receber um santo padroeiro é no Batismo. Tradicionalmente, os pais escolhem para o filho um nome de santo, que se torna seu padroeiro batismal. Este santo acompanhará a pessoa por toda a vida, intercedendo por ela e servindo de modelo de virtude. Por isso, é importante conhecer a história e as virtudes do santo cujo nome carregamos.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                Na Crisma
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                No Sacramento da Confirmação, o crismando escolhe um segundo santo padroeiro. Esta escolha, feita de forma mais consciente e pessoal, representa um compromisso de seguir o exemplo daquele santo em sua vida adulta de fé. Muitos escolhem santos cujas virtudes desejam imitar ou que enfrentaram desafios semelhantes aos seus.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                Por Devoção Pessoal
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Além dos santos do Batismo e da Crisma, podemos desenvolver devoção a outros santos ao longo da vida. Muitas vezes, um santo "nos escolhe" – sentimos uma atração especial por sua história, suas palavras ou seu carisma. Outros são adotados como padroeiros de profissões, estados de vida ou necessidades específicas.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Como Escolher um Santo Padroeiro
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Se você está buscando um santo padroeiro, considere estas orientações:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
                <li><strong>Seu nome:</strong> Pesquise sobre o santo que carrega seu nome de Batismo</li>
                <li><strong>Sua profissão:</strong> Muitas profissões têm santos padroeiros tradicionais</li>
                <li><strong>Suas dificuldades:</strong> Procure santos que enfrentaram desafios semelhantes</li>
                <li><strong>Suas virtudes:</strong> Escolha um santo cujas virtudes você deseja desenvolver</li>
                <li><strong>Sua data de nascimento:</strong> O santo do dia pode ser um bom padroeiro</li>
                <li><strong>Intuição espiritual:</strong> Confie na graça – muitas vezes o santo nos encontra</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Santos Padroeiros Populares e Suas Causas
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                São José
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Padroeiro da Igreja Universal, dos trabalhadores, das famílias e da boa morte. Esposo de Maria e pai adotivo de Jesus, São José é modelo de fé silenciosa, obediência a Deus e dedicação à família. É invocado especialmente pelos pais de família e por quem busca emprego.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                Santa Teresinha do Menino Jesus
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Padroeira das missões e dos floristas. Sua "pequena via" de amor e confiança em Deus inspira milhões. É invocada em causas impossíveis e costuma manifestar sua intercessão enviando rosas.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                Santo Antônio de Pádua
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Padroeiro de objetos perdidos, dos pobres e casamenteiro popular. Doutor da Igreja, famoso por sua pregação e milagres, é um dos santos mais invocados no mundo.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                São Judas Tadeu
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Padroeiro das causas impossíveis e desesperadas. Apóstolo de Cristo, é invocado quando todas as esperanças parecem perdidas.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Como Honrar Seu Santo Padroeiro
              </h2>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
                <li>Estude sua vida e escritos</li>
                <li>Reze diariamente pedindo sua intercessão</li>
                <li>Celebre sua festa litúrgica de modo especial</li>
                <li>Imite suas virtudes em seu cotidiano</li>
                <li>Tenha uma imagem ou medalha do santo</li>
                <li>Faça promessas e novenas em sua honra</li>
                <li>Visite locais associados ao santo, se possível</li>
                <li>Divulgue sua devoção, especialmente entre familiares</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                A Intercessão dos Santos
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Quando invocamos um santo, não estamos adorando-o – a adoração é devida somente a Deus. Estamos pedindo sua intercessão, assim como pedimos orações a amigos e familiares na terra. A diferença é que os santos estão na presença de Deus e sua intercessão é particularmente poderosa. Como ensina o Apocalipse, as orações dos santos sobem como incenso diante do trono de Deus (Ap 8,3-4).
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-10">
                <p className="text-foreground italic text-center">
                  "Os santos não cessam de interceder por nós junto ao Pai. Sua preocupação fraterna ajuda muito nossa fraqueza."
                </p>
                <p className="text-muted-foreground text-center mt-2">
                  — Catecismo da Igreja Católica, 956
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

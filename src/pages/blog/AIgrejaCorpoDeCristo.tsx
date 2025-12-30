import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function AIgrejaCorpoDeCristo() {
  return (
    <>
      <Helmet>
        <title>A Igreja: O Corpo de Cristo e a Comunhão dos Santos | Bom Católico</title>
        <meta name="description" content="Entenda o mistério da Igreja como Corpo de Cristo. A importância da comunidade cristã, a comunhão dos santos, e como você faz parte dessa realidade viva." />
        <meta name="keywords" content="igreja corpo de cristo, o que é a igreja católica, comunhão dos santos, por que pertencer à igreja, unidade da igreja, povo de deus" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/igreja-corpo-cristo" />
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
              <span className="text-text">A Igreja: Corpo de Cristo</span>
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
                  11 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                A Igreja: O Corpo de Cristo e a Comunhão dos Santos
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A Igreja não é apenas uma instituição humana. É o Corpo vivo de Cristo, onde cada membro tem um papel essencial. Descubra o mistério da comunhão dos santos.
              </p>
            </header>

            <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10">
              <Users className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Quando você se torna católico, você não apenas acredita em um conjunto de doutrinas – você entra em uma comunidade. Você se torna membro de um Corpo vivo, cuja Cabeça é Cristo. Esta é uma das verdades mais profundas e transformadoras da fé católica: a Igreja não é apenas uma organização, mas um organismo vivo, animado pelo Espírito Santo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Paulo escreve: "Vós sois o corpo de Cristo, e membros dele, cada um por sua parte" (1Cor 12,27). Isso significa que você não é um cristão isolado – você é parte de algo muito maior. Suas ações afetam todo o Corpo. Sua oração beneficia não apenas você, mas toda a Igreja. Sua santidade contribui para a santidade de todos.
              </p>

              <QuizCTA
                title="Você sente-se parte do Corpo de Cristo?"
                description="A Igreja é a comunidade viva de Cristo. Faça nosso quiz e descubra como você pode viver mais plenamente sua pertença à Igreja e à comunhão dos santos."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Igreja Visível e Invisível
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Igreja tem duas dimensões: a visível e a invisível. A Igreja visível é a que você vê: o Papa, os bispos, os padres, as paróquias, as catedrais. É a estrutura hierárquica que Cristo estabeleceu. A Igreja invisível é a comunhão espiritual de todos os batizados, vivos e mortos, que estão em estado de graça.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Ambas são reais e importantes. A estrutura visível é necessária para a transmissão da fé, para a administração dos sacramentos, para a unidade. Mas a realidade invisível é o que dá vida a essa estrutura. Uma Igreja sem o Espírito Santo seria apenas uma instituição humana. Mas a Igreja Católica é muito mais – é o Corpo de Cristo, animado por Seu Espírito.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                As Marcas da Igreja: Uma, Santa, Católica e Apostólica
              </h2>
              <p className="text-text leading-relaxed mb-6">
                No Credo, professamos que a Igreja é "uma, santa, católica e apostólica". Essas são as quatro marcas que identificam a verdadeira Igreja de Cristo.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Uma
              </h3>
              <p className="text-text leading-relaxed mb-6">
                A Igreja é una porque tem um único Cabeça (Cristo), um único Espírito, uma única fé e um único batismo. Apesar das diferenças culturais e linguísticas, todos os católicos estão unidos na mesma fé e nos mesmos sacramentos. Essa unidade é um sinal do Espírito Santo.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Santa
              </h3>
              <p className="text-text leading-relaxed mb-6">
                A Igreja é santa porque é santificada pelo Espírito Santo e porque seu objetivo é a santidade de seus membros. Embora a Igreja seja composta por pecadores (todos nós), ela é santa porque é o instrumento de santificação de Deus. Os sacramentos que ela administra são santos. Sua doutrina é santa. Seus santos são santos.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Católica
              </h3>
              <p className="text-text leading-relaxed mb-6">
                "Católica" significa "universal". A Igreja é católica porque é destinada a todos os povos, em todos os tempos, em todos os lugares. Não é uma Igreja apenas para judeus ou apenas para gregos, apenas para ricos ou apenas para pobres. É para toda a humanidade. E é universal em sua doutrina – contém toda a verdade revelada por Cristo.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Apostólica
              </h3>
              <p className="text-text leading-relaxed mb-6">
                A Igreja é apostólica porque foi fundada por Cristo sobre os Apóstolos, especialmente sobre Pedro. A sucessão apostólica é ininterrupta desde os tempos dos Apóstolos até hoje. O Papa é o sucessor de Pedro, e os bispos são os sucessores dos Apóstolos. Isso garante que a doutrina que recebemos hoje é a mesma que foi ensinada por Cristo e pelos Apóstolos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Comunhão dos Santos
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Um dos mistérios mais belos da fé católica é a comunhão dos santos. Isso significa que todos nós – vivos e mortos, na terra, no Purgatório e no Céu – estamos conectados em Cristo. Quando você reza, sua oração beneficia não apenas você, mas toda a Igreja. Quando você sofre com paciência, você oferece esse sofrimento pelos pecados do mundo. Quando você pratica a caridade, você ajuda não apenas a pessoa que recebe, mas toda a comunidade cristã.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Além disso, você pode pedir a intercessão dos santos. Eles não são deuses – apenas pessoas que chegaram ao Céu e agora rezam por nós. Quando você pede a São José que interceda por você, você está pedindo a um amigo no Céu que reze por você. E essa oração é poderosa porque ele está na presença de Deus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Sua Missão na Igreja
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Você não é um mero espectador na Igreja. Você tem uma missão. Você é chamado a ser um apóstolo, um missionário, um santo. Sua vocação pode ser o matrimônio, o sacerdócio, a vida religiosa ou o estado laical. Mas qualquer que seja sua vocação, você é chamado à santidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Como membro do Corpo de Cristo, você tem dons e talentos que o Espírito Santo quer usar. Talvez você seja chamado a ensinar, a servir os pobres, a rezar, a evangelizar, a trabalhar pela justiça social. Qualquer que seja seu carisma, ele é necessário para o bem de toda a Igreja. Não subestime sua importância. Você é essencial.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Vós sois o corpo de Cristo, e membros dele, cada um por sua parte."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — 1 Coríntios 12,27
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A Igreja é o Corpo de Cristo. Nós somos os membros. Cada um de nós é necessário."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Santo Agostinho
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="igreja-corpo-cristo" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Qual é seu papel no Corpo de Cristo?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra como você pode viver mais plenamente sua vocação e sua missão na Igreja.
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

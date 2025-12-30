import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SacramentoBatismo() {
  return (
    <>
      <Helmet>
        <title>O Sacramento do Batismo: Porta de Entrada para a Vida Cristã | Bom Católico</title>
        <meta name="description" content="Entenda o Sacramento do Batismo na Igreja Católica. Significado, efeitos espirituais, como batizar seu filho e por que o Batismo é essencial para a salvação." />
        <meta name="keywords" content="sacramento do batismo, o que é batismo católico, como batizar filho, batismo de criança, pecado original, padrinho de batismo, sete sacramentos" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/sacramento-batismo" />
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
              <span className="text-text">Sacramento do Batismo</span>
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
                O Sacramento do Batismo: Porta de Entrada para a Vida Cristã
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                O Batismo é o primeiro e mais fundamental dos sacramentos. É a porta que nos abre para todos os outros sacramentos e nos torna membros do Corpo de Cristo.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Droplets className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Jesus disse a Nicodemos: "Em verdade, em verdade te digo: quem não nascer da água e do Espírito não pode entrar no Reino de Deus" (Jo 3,5). O Batismo é esse novo nascimento. É o momento em que morremos para o pecado e nascemos para a vida em Cristo. É o início de nossa jornada como filhos de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Antes de subir ao Céu, Jesus deu aos Apóstolos a missão de batizar: "Ide, pois, e fazei discípulos de todas as nações, batizando-os em nome do Pai, do Filho e do Espírito Santo" (Mt 28,19). Desde então, a Igreja batiza todos aqueles que desejam seguir a Cristo.
              </p>

              <QuizCTA
                title="Você vive as graças do seu Batismo?"
                description="O Batismo nos dá uma nova identidade como filhos de Deus. Faça nosso quiz e descubra como viver plenamente essa graça."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que Acontece no Batismo?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O Batismo não é apenas um ritual simbólico – é uma transformação real da alma. Quando alguém é batizado, várias coisas acontecem:
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>1. O pecado original é apagado:</strong> Todos nascemos com a mancha do pecado original, herdada de Adão e Eva. O Batismo lava essa mancha e nos restaura à amizade com Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>2. Tornamo-nos filhos de Deus:</strong> Pelo Batismo, somos adotados como filhos de Deus. Podemos chamá-Lo de "Pai" com toda a confiança. Recebemos a graça santificante, que nos torna participantes da natureza divina.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>3. Somos incorporados à Igreja:</strong> O Batismo nos torna membros do Corpo de Cristo, que é a Igreja. Passamos a fazer parte da comunidade dos fiéis, com todos os direitos e deveres que isso implica.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>4. Recebemos um caráter indelével:</strong> O Batismo imprime na alma um "selo" espiritual permanente. Por isso, o Batismo só pode ser recebido uma vez – ele marca a pessoa para sempre como pertencente a Cristo.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Por Que Batizar Bebês?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Algumas pessoas perguntam: "Por que batizar bebês se eles não podem escolher?" A resposta está na natureza do Batismo como dom gratuito de Deus. Assim como os pais não esperam que o filho escolha ser alimentado ou educado, também não esperam que ele escolha receber a graça de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Igreja batiza bebês desde os tempos apostólicos. Quando a Bíblia fala de famílias inteiras sendo batizadas (At 16,15.33), certamente incluía crianças. O Batismo de bebês expressa a iniciativa gratuita de Deus – Ele nos ama antes mesmo de podermos responder a esse amor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Os pais e padrinhos assumem o compromisso de educar a criança na fé, para que ela possa, mais tarde, confirmar pessoalmente as promessas batismais na Crisma.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Rito do Batismo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O rito essencial do Batismo consiste em derramar água sobre a cabeça do batizando (ou imergir) enquanto se pronunciam as palavras: "Eu te batizo em nome do Pai, do Filho e do Espírito Santo." A água simboliza purificação e vida nova.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Outros elementos do rito incluem: a unção com o óleo dos catecúmenos (antes) e com o crisma (depois), a veste branca (símbolo da nova vida em Cristo), e a vela acesa (símbolo de Cristo, luz do mundo).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Padrinhos
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Os padrinhos têm um papel importante no Batismo. Eles se comprometem a ajudar os pais na educação cristã da criança. Por isso, os padrinhos devem ser católicos praticantes, já crismados, que vivam de acordo com a fé.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Escolha padrinhos que realmente possam ser modelos de fé para seu filho. Não escolha apenas por amizade ou conveniência social – escolha pessoas que levarão a sério o compromisso de ajudar na formação espiritual da criança.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Vivendo o Batismo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O Batismo não é apenas um evento do passado – é uma realidade que devemos viver todos os dias. Cada vez que fazemos o sinal da cruz com água benta, recordamos nosso Batismo. Cada vez que renovamos as promessas batismais (como na Vigília Pascal), reafirmamos nosso compromisso com Cristo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Você sabe a data do seu Batismo? Celebre-a como um segundo aniversário – o aniversário do seu nascimento para a vida eterna. Agradeça a Deus pelo dom da fé e peça a graça de viver fielmente as promessas do seu Batismo.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Quem crer e for batizado será salvo."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Marcos 16,16
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O Batismo é o fundamento de toda a vida cristã, o pórtico da vida no Espírito e a porta que abre o acesso aos outros sacramentos."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catecismo da Igreja Católica, 1213
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sacramento-batismo" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você vive as graças do seu Batismo?
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

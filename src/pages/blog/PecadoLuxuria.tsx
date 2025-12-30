import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PecadoLuxuria() {
  return (
    <>
      <Helmet>
        <title>Luxúria: O Desejo Desordenado do Prazer | Bom Católico</title>
        <meta name="description" content="Entenda a Luxúria, o pecado capital contra a castidade. Como reconhecê-la, seus efeitos na alma e como combatê-la com a pureza." />
        <meta name="keywords" content="luxúria, pecado capital, castidade, pureza, impureza, pecados sexuais" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/pecado-luxuria" />
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
            <Link to="/quiz"><Button variant="secondary" size="sm">Fazer o Quiz</Button></Link>
          </div>
        </header>

        <div className="bg-background-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Luxúria</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Voltar ao Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Pecados Capitais</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min de leitura</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Luxúria: O Desejo Desordenado do Prazer
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Luxúria é a busca desordenada do prazer sexual. Ela degrada a dignidade humana e escraviza a pessoa aos instintos.
              </p>
            </header>

            <div className="aspect-video bg-red-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-red-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Fugi da fornicação. Todo pecado que o homem comete é exterior ao seu corpo; mas o fornicador peca contra o próprio corpo" (1Cor 6,18). A Luxúria é o desejo desordenado do prazer sexual, fora do contexto do matrimônio.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A sexualidade é dom de Deus, criada boa e santa. Mas a luxúria perverte esse dom, buscando o prazer como fim em si mesmo, separado do amor e da abertura à vida.
              </p>

              <QuizCTA
                title="Você busca a pureza?"
                description="A castidade é possível com a graça de Deus. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Que é a Luxúria</h2>
              <p className="text-text leading-relaxed mb-6">
                A Luxúria é a busca desordenada do prazer sexual. Não é o desejo sexual em si (que é natural e bom), mas o desejo descontrolado, que busca o prazer fora do plano de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Deus criou a sexualidade para o matrimônio, unindo amor e procriação. A luxúria separa o prazer do amor e da vida, reduzindo a pessoa a objeto de satisfação.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A luxúria é particularmente perigosa porque envolve prazeres intensos que facilmente escravizam. Uma vez cedido, o vício se fortalece e a liberdade diminui.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">As Formas da Luxúria</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pensamentos impuros:</strong> Alimentar fantasias sexuais, deleitar-se em imaginações impuras.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Olhares impuros:</strong> Olhar com cobiça, consumir pornografia, buscar imagens provocantes.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Palavras impuras:</strong> Conversas obscenas, piadas de mau gosto, insinuações.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Atos impuros:</strong> Relações fora do matrimônio, autoerotismo, e outras práticas contrárias à castidade.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Efeitos da Luxúria</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Escravidão:</strong> A luxúria vicia. O que começa como escolha torna-se compulsão. A pessoa perde a liberdade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Cegueira espiritual:</strong> A luxúria obscurece a inteligência. O impuro não consegue ver as coisas de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Destruição de relacionamentos:</strong> A luxúria usa as pessoas. Destrói casamentos, famílias, amizades.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Afastamento de Deus:</strong> A impureza afasta da oração, dos sacramentos, da vida espiritual.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Combater a Luxúria</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Guarde os olhos:</strong> Evite olhar o que não deve. Desvie o olhar de imagens provocantes. Fuja da pornografia.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Guarde a mente:</strong> Rejeite pensamentos impuros imediatamente. Não os alimente. Substitua por pensamentos bons.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evite ocasiões:</strong> Não frequente lugares, não veja conteúdos, não mantenha conversas que alimentem a luxúria.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Confesse-se frequentemente:</strong> A confissão dá graças para vencer. Não desanime com as quedas – levante-se sempre.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reze:</strong> A pureza é graça. Peça a Nossa Senhora, modelo de pureza. Reze o terço diariamente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pratique a mortificação:</strong> Pequenas renúncias fortalecem a vontade contra os instintos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Santos que Venceram a Luxúria</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santo Agostinho:</strong> Viveu na impureza por anos. Sua conversão incluiu a vitória sobre a luxúria pela graça.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Maria Madalena:</strong> De pecadora pública a grande santa. Prova de que a graça pode transformar qualquer um.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Tomás de Aquino:</strong> Resistiu a tentações violentas e recebeu de Deus o dom da castidade perfeita.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">"Bem-aventurados os puros de coração, porque verão a Deus."</p>
                <p className="text-text-muted text-center mt-2">— Mateus 5,8</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">"Fugi da fornicação. Todo pecado que o homem comete é exterior ao seu corpo; mas o fornicador peca contra o próprio corpo."</p>
                <p className="text-text-muted text-center mt-2">— 1 Coríntios 6,18</p>
              </div>
            </div>

            <RelatedArticles currentSlug="pecado-luxuria" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você busca a pureza de coração?</h3>
              <p className="text-text-muted mb-6">Faça nosso quiz e descubra como está sua vivência da fé católica.</p>
              <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}

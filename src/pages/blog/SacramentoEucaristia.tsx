import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SacramentoEucaristia() {
  return (
    <>
      <Helmet>
        <title>O Sacramento da Eucaristia: O Corpo e Sangue de Cristo | Bom Católico</title>
        <meta name="description" content="Entenda o Sacramento da Eucaristia na Igreja Católica. A presença real de Cristo, a transubstanciação, como comungar dignamente e a importância da Missa." />
        <meta name="keywords" content="sacramento da eucaristia, o que é eucaristia, comunhão católica, corpo e sangue de cristo, transubstanciação, presença real de jesus, primeira comunhão, sete sacramentos" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/sacramento-eucaristia" />
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
              <span className="text-text">Sacramento da Eucaristia</span>
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
                  12 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                O Sacramento da Eucaristia: O Corpo e Sangue de Cristo
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A Eucaristia é o coração da vida católica. Não é um símbolo – é o próprio Jesus Cristo, presente de forma real sob as aparências do pão e do vinho.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Wine className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Na Última Ceia, Jesus tomou o pão, abençoou, partiu e deu aos discípulos dizendo: "Isto é o meu corpo, que é dado por vós." Depois tomou o cálice e disse: "Este cálice é a nova aliança no meu sangue, que é derramado por vós" (Lc 22,19-20). Jesus não disse "isto representa" ou "isto simboliza" – Ele disse "isto É".
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Eucaristia é o maior tesouro da Igreja Católica. É o próprio Deus que se faz alimento para nós. É o Céu que desce à terra. É o sacrifício do Calvário tornado presente em cada Missa. Nenhum outro sacramento se compara à Eucaristia em dignidade e importância.
              </p>

              <QuizCTA
                title="Você comunga com frequência e dignamente?"
                description="A Eucaristia é o centro da vida cristã. Faça nosso quiz e descubra como está sua vivência deste sacramento."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Presença Real de Cristo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Igreja ensina que, após a consagração, o pão e o vinho se tornam verdadeiramente o Corpo e o Sangue de Cristo. Isso se chama "transubstanciação" – a substância muda, embora as aparências (cor, sabor, textura) permaneçam as mesmas.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Não é uma presença simbólica ou espiritual apenas – é uma presença real, verdadeira e substancial. Jesus está inteiro em cada partícula da hóstia consagrada. Por isso tratamos a Eucaristia com tanta reverência: genuflexões, silêncio, adoração.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus disse claramente: "Minha carne é verdadeira comida e meu sangue é verdadeira bebida. Quem come a minha carne e bebe o meu sangue permanece em mim e eu nele" (Jo 6,55-56). Muitos discípulos abandonaram Jesus por causa dessa doutrina "dura" – mas Ele não voltou atrás.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Missa: O Sacrifício de Cristo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Missa não é apenas uma refeição comunitária ou uma celebração memorial. É a renovação do sacrifício de Cristo na Cruz. Não é um novo sacrifício – é o mesmo e único sacrifício do Calvário, tornado presente de forma incruenta (sem derramamento de sangue).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Quando você participa da Missa, você está presente no Calvário. Você está aos pés da Cruz com Maria e João. O sacerdote age "in persona Christi" – na pessoa de Cristo – oferecendo ao Pai o mesmo sacrifício que Jesus ofereceu há dois mil anos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Comungar Dignamente
              </h2>
              <p className="text-text leading-relaxed mb-6">
                São Paulo adverte: "Quem come o pão ou bebe o cálice do Senhor indignamente será réu do corpo e do sangue do Senhor" (1Cor 11,27). Comungar em pecado mortal é um sacrilégio grave. Por isso, antes de comungar, devemos:
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>1. Estar em estado de graça:</strong> Se você cometeu pecado mortal, deve se confessar antes de comungar. Não basta um ato de contrição – é necessária a confissão sacramental.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>2. Guardar o jejum eucarístico:</strong> Não comer nem beber nada (exceto água e remédios) por pelo menos uma hora antes da comunhão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>3. Ter a intenção correta:</strong> Comungar por amor a Jesus, não por rotina ou pressão social.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>4. Vestir-se adequadamente:</strong> Com modéstia e respeito, como quem vai encontrar o Rei dos reis.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Frutos da Comunhão
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A comunhão frequente e digna produz frutos maravilhosos: aumenta nossa união com Cristo, perdoa os pecados veniais, fortalece contra as tentações, nos une mais à Igreja, e nos dá um "penhor" da vida eterna.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Os santos tinham uma fome insaciável pela Eucaristia. Santa Teresinha dizia que a comunhão era o momento mais feliz do seu dia. São João Paulo II celebrou Missa todos os dias de sua vida sacerdotal. Eles sabiam que na Eucaristia encontravam o próprio Deus.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Eu sou o pão vivo que desceu do céu. Quem comer deste pão viverá eternamente."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — João 6,51
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A Eucaristia é a fonte e o ápice de toda a vida cristã."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Concílio Vaticano II, Lumen Gentium 11
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sacramento-eucaristia" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                A Eucaristia é o centro da sua vida?
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

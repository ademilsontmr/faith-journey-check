import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DomTemorDeus() {
  return (
    <>
      <Helmet>
        <title>Dom do Temor de Deus: Reverência e Amor | Bom Católico</title>
        <meta name="description" content="Descubra o Dom do Temor de Deus, que nos faz reverenciar a Deus e evitar o pecado por amor. Como este dom nos protege e nos aproxima de Deus." />
        <meta name="keywords" content="dom temor de deus, espírito santo, dons espírito santo, reverência, santo temor, evitar pecado" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/dom-temor-deus-espirito-santo" />
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
              <Button variant="secondary" size="sm">Fazer o Quiz</Button>
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
              <span className="text-text">Dom do Temor de Deus</span>
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
                  Dons do Espírito Santo
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />10 min de leitura
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Dom do Temor de Deus: Reverência e Amor
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                O Temor de Deus é o dom que nos faz reverenciar a grandeza de Deus e evitar o pecado, não por medo servil, mas por amor filial.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <Crown className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Espírito de temor do Senhor" (Is 11,2). O Temor de Deus fecha a lista dos sete dons, mas não é o menos importante. É o fundamento da vida espiritual: "O temor do Senhor é o princípio da sabedoria" (Pr 9,10).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Este dom é frequentemente mal compreendido. Não se trata de ter medo de Deus como de um tirano cruel. É uma reverência amorosa diante da grandeza e santidade de Deus, que nos faz evitar ofendê-Lo.
              </p>

              <QuizCTA
                title="Você reverencia a Deus?"
                description="O dom do Temor de Deus nos protege do pecado. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que é o Dom do Temor de Deus
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom do Temor de Deus é uma inclinação sobrenatural que nos faz reverenciar a Deus por sua infinita majestade e evitar o pecado pelo horror de ofender a quem tanto amamos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Santo Tomás de Aquino distingue dois tipos de temor: o temor servil, que teme o castigo, e o temor filial, que teme ofender o Pai amado. O dom do Temor de Deus é o temor filial elevado ao máximo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                É o temor de um filho que ama profundamente o pai e não quer decepcioná-lo. Não é medo de punição, mas horror de magoar quem se ama.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Temor Servil vs. Temor Filial
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Temor servil:</strong> Evita o pecado por medo do inferno ou de castigos. É um temor imperfeito, mas não é mau – pode ser o início da conversão. Porém, não é o ideal.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Temor filial:</strong> Evita o pecado por amor a Deus. Não quer ofender o Pai amado. É o temor dos santos, fruto do dom do Espírito Santo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O temor servil diz: "Não peco porque tenho medo do castigo." O temor filial diz: "Não peco porque amo a Deus e não quero ofendê-Lo."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Frutos do Temor de Deus
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Horror ao pecado:</strong> Quem possui este dom sente repugnância pelo pecado. Não porque teme o castigo, mas porque ama a Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Humildade:</strong> Diante da grandeza de Deus, reconhecemos nossa pequenez. O Temor de Deus nos livra do orgulho.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reverência:</strong> Tratamos as coisas de Deus com respeito – a Eucaristia, os lugares sagrados, o nome de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Vigilância:</strong> O Temor de Deus nos mantém alertas contra as tentações. Não nos fiamos em nossas forças.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Esperança:</strong> Paradoxalmente, o Temor de Deus aumenta a esperança. Quem teme a Deus confia em sua misericórdia.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Cultivar o Temor de Deus
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Contemple a grandeza de Deus:</strong> Medite em sua majestade, santidade, poder. Quanto mais conhecemos Deus, mais O reverenciamos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Medite na Paixão:</strong> Veja o que o pecado custou a Cristo. Isso gera horror ao pecado por amor, não por medo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Examine-se diariamente:</strong> O exame de consciência mantém vivo o temor de ofender a Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Frequente a confissão:</strong> A confissão regular mantém a consciência sensível ao pecado.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evite a familiaridade excessiva:</strong> Deus é Pai, mas também é o Santo, o Todo-Poderoso. Mantenha o equilíbrio entre intimidade e reverência.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Temor de Deus e a Bem-Aventurança
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom do Temor de Deus corresponde à bem-aventurança dos pobres de espírito: "Bem-aventurados os pobres de espírito, porque deles é o Reino dos Céus" (Mt 5,3). O Temor de Deus nos esvazia de nós mesmos e nos abre para Deus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Santos Modelos de Temor de Deus
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Luís Maria de Montfort:</strong> Sua devoção intensa e seu horror ao pecado revelavam profundo temor de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santo Cura d'Ars:</strong> Chorava ao falar dos pecados dos homens. Seu temor de ofender a Deus era visível.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Faustina:</strong> Sua reverência diante de Jesus Misericordioso unia amor e temor filial de modo admirável.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Temor de Deus Hoje
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Vivemos numa época que perdeu o senso do sagrado. Tudo é banalizado, profanado, dessacralizado. O dom do Temor de Deus é antídoto contra essa mentalidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Recuperar o Temor de Deus não é voltar a uma religião de medo. É redescobrir a grandeza de Deus, a gravidade do pecado, a seriedade da vida eterna. É amar a Deus o suficiente para não querer ofendê-Lo.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "O temor do Senhor é o princípio da sabedoria."
                </p>
                <p className="text-text-muted text-center mt-2">— Provérbios 9,10</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O dom do temor de Deus nos faz evitar o pecado e fugir de tudo o que pode desagradar a Deus, não por medo do castigo, mas por amor."
                </p>
                <p className="text-text-muted text-center mt-2">— Catecismo da Igreja Católica, 1831</p>
              </div>
            </div>

            <RelatedArticles currentSlug="dom-temor-deus-espirito-santo" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você reverencia a Deus?</h3>
              <p className="text-text-muted mb-6">Faça nosso quiz e descubra como está sua vivência da fé católica.</p>
              <Link to="/quiz">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button>
              </Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function BelezaDaLiturgia() {
    return (
        <>
            <Helmet>
                <title>A Beleza da Liturgia: Símbolos e Ritos | Bom Católico</title>
                <meta name="description" content="Entenda por que a liturgia católica é rica em símbolos, ritos e beleza. Descubra como a forma de celebrar nos ajuda a mergulhar no mistério de Deus." />
                <meta name="keywords" content="o que é liturgia católica, símbolos da missa, significado do incenso na missa, por que a missa é assim, ritos católicos, lex orandi lex credendi, participação na missa, beleza da liturgia, música sacra, arte sacra católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/beleza-liturgia-simbolos-ritos-importancia" />
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
                            <span className="text-text">Beleza da Liturgia</span>
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
                                    29 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Beleza da Liturgia: Por que os Símbolos e Ritos são Importantes?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A liturgia não é um teatro, mas a oração oficial da Igreja que nos transporta para a eternidade através dos sentidos.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Para muitos, os ritos da Igreja podem parecer complicados ou desnecessários. No entanto, a liturgia católica é profundamente humana: como seres compostos de corpo e alma, precisamos de sinais visíveis para alcançar as realidades invisíveis. A beleza na liturgia é um reflexo da beleza de Deus.
                            </p>

                            <QuizCTA
                                title="Você entende o que acontece na Missa?"
                                description="Cada gesto e cada cor tem um significado profundo. Faça nosso quiz litúrgico e descubra como participar das celebrações com muito mais consciência e devoção."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Linguagem dos Símbolos
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O incenso que sobe (nossas orações), a luz das velas (Cristo, a luz do mundo), a água (purificação), o pão e o vinho (alimento espiritual). Esses elementos não são meros enfeites; eles falam ao nosso subconsciente e preparam o nosso espírito para o encontro com o Sagrado.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Lex Orandi, Lex Credendi
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Este antigo adágio latino significa: "A lei da oração é a lei da fé". A forma como rezamos expressa o que acreditamos. Por isso, a Igreja cuida com tanto zelo dos ritos litúrgicos. Quando a liturgia é celebrada com dignidade e beleza, ela protege a integridade da nossa fé.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Participação Ativa e Consciente
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Participar ativamente não significa necessariamente "fazer algo" externo, mas unir o nosso coração ao sacrifício de Cristo. A beleza da música sacra, do silêncio e da arquitetura das igrejas servem para nos ajudar a manter o foco no que é essencial: a presença real de Deus entre nós.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A liturgia é o cume para o qual tende a ação da Igreja e, ao mesmo tempo, a fonte de onde emana toda a sua força."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Sacrosanctum Concilium, 10
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="beleza-liturgia-simbolos-ritos-importancia" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer conhecer mais sobre os ritos da Igreja?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Aprofunde seu conhecimento sobre a Santa Missa e os sacramentos através do nosso quiz educativo e espiritual.
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

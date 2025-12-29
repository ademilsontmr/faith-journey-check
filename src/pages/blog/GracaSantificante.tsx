import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function GracaSantificante() {
    return (
        <>
            <Helmet>
                <title>O Que é a Graça Santificante? Como Viver em Estado de Amizade com Deus | Bom Católico</title>
                <meta name="description" content="Entenda o conceito fundamental da graça santificante na teologia católica e como manter a alma em estado de amizade com Deus através dos sacramentos e da oração." />
                <meta name="keywords" content="graça santificante, amizade com deus, estado de graça, teologia católica, vida espiritual" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/o-que-e-graca-santificante-amizade-deus" />
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
                            <span className="text-text">Graça Santificante</span>
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
                                    05 de Abril, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    11 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Que é a Graça Santificante? Como Viver em Estado de Amizade com Deus
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A graça não é apenas uma ajuda externa, mas a própria vida de Deus habitando em nossa alma. Descubra como preservar esse tesouro infinito.
                            </p>
                        </header>

                        <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Vida Divina em Nós
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Para a teologia católica, a **Graça Santificante** é um dom gratuito e sobrenatural pelo qual Deus nos comunica Sua própria vida. No Batismo, nossa alma é purificada e elevada a uma nova dignidade: tornamo-nos filhos de Deus e templos do Espírito Santo. É o que chamamos de estar em "estado de graça".
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Graça Santificante vs. Graça Atual
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                É importante distinguir: a *graça atual* é um auxílio passageiro de Deus para realizarmos uma boa obra ou evitarmos um pecado. Já a *graça santificante* é uma disposição estável e permanente na alma (um hábito sobrenatural) que nos torna santos e agradáveis a Deus.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como se perde a Graça?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Infelizmente, a graça santificante pode ser perdida através do **pecado mortal**. O pecado grave rompe a amizade com Deus e expulsa a vida divina da alma. É por isso que a Igreja insiste tanto na gravidade do pecado e na necessidade da vigilância constante.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como recuperar e aumentar a Graça?
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-4 mb-6">
                                <li><strong>Confissão:</strong> É o meio ordinário para recuperar a graça perdida pelo pecado mortal.</li>
                                <li><strong>Eucaristia:</strong> Receber o Corpo de Cristo aumenta a graça santificante e fortalece a alma contra as tentações.</li>
                                <li><strong>Oração e Caridade:</strong> Cada ato de amor feito por Deus aumenta nossa capacidade de receber Sua vida.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Viver em Amizade com Deus
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Viver em estado de graça é viver em paz. É saber que, se partirmos deste mundo hoje, seremos acolhidos pelo Pai. É a maior felicidade que um ser humano pode experimentar ainda nesta terra.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A graça santificante é uma participação na natureza divina."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Catecismo da Igreja Católica, 1997
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="o-que-e-graca-santificante-amizade-deus" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está o estado da sua alma?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz doutrinário e descubra mais sobre os tesouros da graça e como você pode crescer em sua amizade com Deus através de práticas espirituais diárias.
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

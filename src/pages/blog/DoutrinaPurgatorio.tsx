import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function DoutrinaPurgatorio() {
    return (
        <>
            <Helmet>
                <title>O Purgatório: O que a Igreja Realmente Ensina sobre a Purificação Final | Bom Católico</title>
                <meta name="description" content="Entenda o dogma do Purgatório, por que ele é uma manifestação da misericórdia de Deus e como podemos ajudar as almas que estão se purificando para o Céu." />
                <meta name="keywords" content="purgatório, dogma católico, purificação final, almas do purgatório, oração pelos mortos, misericórdia divina" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/doutrina-purgatorio-purificacao-final" />
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
                            <span className="text-text">Doutrina do Purgatório</span>
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
                                    20 de Abril, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Purgatório: O que a Igreja Realmente Ensina sobre a Purificação Final
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O Purgatório não é um "segundo inferno", mas a ante-sala do Céu. Descubra por que este dogma é uma das maiores provas do amor de Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <BookOpen className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Muitos têm medo do Purgatório, mas para o católico, ele é motivo de esperança. Ele garante que, mesmo que não morramos em perfeita santidade, Deus providenciou um meio de nos purificar para que possamos contemplar Sua face.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O que é o Purgatório?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Catecismo da Igreja Católica ensina que "os que morrem na graça e na amizade de Deus, mas não perfeitamente purificados, embora tenham garantida a sua salvação eterna, sofrem após a morte uma purificação, a fim de obterem a santidade necessária para entrar na alegria do céu" (CIC 1030).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que a purificação é necessária?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Deus é a Santidade em essência. No Céu, nada de impuro pode entrar. O Purgatório é o "fogo purificador" que queima as escórias do egoísmo e do apego ao pecado que ainda restam em nós ao morrermos. É um processo doloroso, mas cheio de alegria, pois a alma sabe que está a caminho da glória.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como podemos ajudar as almas?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Pela comunhão dos santos, nossas orações e sacrifícios podem aliviar e abreviar o tempo de purificação das almas. A Igreja recomenda especialmente:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>A Santa Missa:</strong> O sufrágio mais eficaz.</li>
                                <li><strong>Indulgências:</strong> Aplicadas em favor dos defuntos.</li>
                                <li><strong>Oração do Terço e Esmolas:</strong> Atos de caridade oferecidos por elas.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O Purgatório é uma invenção da misericórdia de Deus para que possamos entrar no Céu sem manchas."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Santa Catarina de Gênova
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="doutrina-purgatorio-purificacao-final" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você reza pelas almas do Purgatório?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e aprenda mais sobre a escatologia católica e como você pode viver hoje de forma a minimizar sua própria purificação futura.
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

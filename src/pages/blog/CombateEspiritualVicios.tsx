import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function CombateEspiritualVicios() {
    return (
        <>
            <Helmet>
                <title>Combate Espiritual: Como Vencer os Vícios | Bom Católico</title>
                <meta name="description" content="Aprenda as estratégias da tradição católica para o combate espiritual. Descubra como vencer os vícios e crescer nas virtudes com o auxílio da graça divina." />
                <meta name="keywords" content="como vencer vícios, combate espiritual católico, luta contra o pecado, virtudes cristãs, graça de deus, oração e jejum, tentações" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/combate-espiritual-vencer-vicios-graca-deus" />
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
                            <span className="text-text">Combate Espiritual</span>
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
                                    Formação
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Combate Espiritual: Como Vencer os Vícios com a Graça de Deus
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A vida cristã é uma guerra invisível. Para vencer, precisamos conhecer nossas fraquezas e usar as armas que a Igreja nos oferece.
                            </p>
                        </header>

                        <div className="aspect-video bg-slate-50 rounded-2xl flex items-center justify-center mb-10">
                            <Shield className="w-24 h-24 text-slate-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                São Paulo nos alerta: "Nossa luta não é contra o sangue e a carne, mas contra os principados e potestades". O combate espiritual começa dentro de nós, na luta contra as inclinações desordenadas que chamamos de vícios. Vencer um vício não é apenas uma questão de força de vontade, mas de cooperação com a Graça.
                            </p>

                            <QuizCTA
                                title="Como está sua armadura espiritual?"
                                description="O inimigo conhece seus pontos fracos. Faça nosso quiz e receba um diagnóstico das áreas da sua vida que mais precisam de vigilância e fortalecimento espiritual."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Identificando os Inimigos
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A tradição da Igreja enumera os sete pecados capitais: soberba, avareza, luxúria, inveja, gula, ira e preguiça. Eles são as raízes de todos os outros vícios. O primeiro passo para a vitória é a humildade de reconhecer qual desses "gigantes" tem mais poder sobre nós e dar nome ao nosso pecado.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Lei do Agere Contra
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Santo Inácio de Loyola ensina o princípio do *Agere Contra* (agir contra). Se você tende à preguiça, deve se esforçar na diligência; se tende à soberba, deve buscar atos de humilhação. Não se vence um vício apenas parando de praticá-lo, mas substituindo-o pela virtude oposta.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                As Armas do Combate
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Oração Vigilante:</strong> "Vigiai e orai para não cairdes em tentação".</li>
                                <li><strong>Sacramentos:</strong> A Confissão frequente e a Eucaristia são o alimento do soldado de Cristo.</li>
                                <li><strong>Jejum e Mortificação:</strong> Disciplinar o corpo para que a alma possa governar.</li>
                                <li><strong>Palavra de Deus:</strong> A espada do Espírito que corta as mentiras do tentador.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Não te deixes vencer pelo mal, mas vence o mal com o bem."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Romanos 12, 21
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="combate-espiritual-vencer-vicios-graca-deus" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Pronto para a batalha?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra quais virtudes você precisa fortalecer para vencer seus desafios diários através do nosso quiz de combate espiritual.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DizimoECaridade() {
    return (
        <>
            <Helmet>
                <title>A Importância do Dízimo e da Caridade: O Cristão e o Dinheiro | Bom Católico</title>
                <meta name="description" content="Descubra a visão cristã sobre o uso do dinheiro, a importância do dízimo para a manutenção da Igreja e o papel central da caridade na vida do fiel." />
                <meta name="keywords" content="dízimo, caridade, dinheiro e fé, generosidade cristã, manutenção da igreja, ajuda aos pobres" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/importancia-dizimo-caridade-crista" />
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
                            <span className="text-text">Dízimo e Caridade</span>
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
                                    Vida Cristã
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    25 de Abril, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Importância do Dízimo e da Caridade: O Cristão e o Uso do Dinheiro
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O dízimo não é uma taxa, mas um ato de gratidão. Entenda como a generosidade liberta o coração do apego material e nos aproxima de Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
                            <Coins className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Como cristãos, somos chamados a ser administradores dos bens que Deus nos confiou, e não proprietários absolutos. O uso do dinheiro é um termômetro da nossa vida espiritual.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O que é o Dízimo?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O dízimo é uma contribuição sistemática e periódica dos fiéis, por meio da qual eles assumem a corresponsabilidade pela manutenção da Igreja. Ele possui quatro dimensões:
                            </p>

                            <QuizCTA />
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Religiosa:</strong> Gratidão a Deus por tudo o que recebemos.</li>
                                <li><strong>Eclesial:</strong> Manutenção da paróquia, clero e funcionários.</li>
                                <li><strong>Missionária:</strong> Apoio à evangelização e missões em lugares distantes.</li>
                                <li><strong>Social:</strong> Ajuda direta aos pobres e obras de caridade da Igreja.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dízimo vs. Esmola
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Enquanto o dízimo é um compromisso com a comunidade, a esmola (ou caridade direta) é a resposta imediata à necessidade do irmão. Ambos são essenciais. A caridade é a "rainha das virtudes" e o critério pelo qual seremos julgados no fim da vida.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Liberdade do Desapego
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                "Onde está o teu tesouro, aí estará também o teu coração" (Mt 6, 21). Quando partilhamos o que temos, quebramos o poder do dinheiro sobre nós. A generosidade atrai a providência divina e nos ensina a confiar mais em Deus do que em nossas contas bancárias.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Deus ama quem dá com alegria."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — II Coríntios 9, 7
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="importancia-dizimo-caridade-crista" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua generosidade?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz sobre vida cristã e descubra como equilibrar suas finanças com os valores do Evangelho, vivendo com mais liberdade e propósito.
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

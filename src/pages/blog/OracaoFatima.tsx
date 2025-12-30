import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoFatima() {
    return (
        <>
            <Helmet>
                <title>Oração de Fátima: Ó Meu Jesus, Perdoai-nos | Bom Católico</title>
                <meta name="description" content="Aprenda a Oração de Fátima completa, ensinada por Nossa Senhora aos pastorinhos. Descubra o significado desta oração rezada após cada dezena do Terço." />
                <meta name="keywords" content="oração de fátima, ó meu jesus perdoai-nos, oração do terço, nossa senhora de fátima, pastorinhos de fátima, oração após dezena, livrai-nos do fogo do inferno, terço rosário, aparições de fátima, oração católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-fatima" />
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
                            <span className="text-text">Oração de Fátima</span>
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
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Orações</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Oração de Fátima: Ó Meu Jesus, Perdoai-nos</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Oração de Fátima foi ensinada por Nossa Senhora aos três pastorinhos em 1917. É rezada após cada dezena do Santo Rosário.</p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração de Fátima</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Ó meu Jesus,<br />perdoai-nos, livrai-nos do fogo do inferno,<br />
                                    levai as almas todas para o Céu,<br />principalmente as que mais precisarem<br />
                                    da Vossa misericórdia.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                Esta oração foi ensinada por Nossa Senhora aos três pastorinhos de Fátima — Lúcia, Francisco e Jacinta — durante as aparições de 1917. Nossa Senhora pediu que fosse rezada após cada dezena do <Link to="/blog/como-rezar-rosario" className="text-accent hover:underline">Santo Rosário</Link>.
                            </p>

                            <QuizCTA
                                title="Você conhece as aparições de Fátima?"
                                description="A Oração de Fátima é um pedido de Nossa Senhora. Faça nosso quiz e aprofunde sua devoção mariana."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Significado da Oração</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Ó meu Jesus, perdoai-nos"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Começamos pedindo perdão por nossos pecados. Reconhecemos que ofendemos a Deus e precisamos de Sua misericórdia. É um eco do <Link to="/blog/oracao-ato-contricao" className="text-accent hover:underline">Ato de Contrição</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Livrai-nos do fogo do inferno"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Nossa Senhora mostrou aos pastorinhos uma visão do <Link to="/blog/ceu-inferno-purgatorio" className="text-accent hover:underline">inferno</Link>, que os impressionou profundamente. Esta oração nos lembra da realidade da condenação eterna e nos faz pedir a graça da perseverança final.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Levai as almas todas para o Céu"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Não rezamos apenas por nós, mas por todas as almas. É uma oração de intercessão universal, pedindo a salvação de toda a humanidade.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Principalmente as que mais precisarem"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Rezamos especialmente pelos pecadores mais afastados de Deus, pelos que estão em perigo de condenação, pelos que não têm ninguém que reze por eles. É um ato de caridade espiritual.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Mensagem de Fátima</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Nossa Senhora apareceu em Fátima com uma mensagem urgente: oração, penitência e conversão. Ela pediu especialmente a reza diária do <Link to="/blog/rosario-arma-espiritual-desafios-2026" className="text-accent hover:underline">Santo Rosário</Link> pela paz no mundo e pela conversão dos pecadores. Saiba mais sobre a <Link to="/blog/nossa-senhora-fatima-mensagem-oracao-penitencia" className="text-accent hover:underline">mensagem de Fátima</Link>.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Rezar no Terço</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Oração de Fátima é rezada após cada dezena do Rosário, logo depois do <Link to="/blog/oracao-gloria-ao-pai" className="text-accent hover:underline">Glória ao Pai</Link>. Assim, rezamos cinco vezes durante o Terço, uma vez para cada mistério meditado.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Rezem o Terço todos os dias para alcançar a paz no mundo."</p>
                                <p className="text-text-muted text-center mt-2">— Nossa Senhora de Fátima</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-fatima" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprender a rezar o Terço?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como o Rosário pode transformar sua vida espiritual.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

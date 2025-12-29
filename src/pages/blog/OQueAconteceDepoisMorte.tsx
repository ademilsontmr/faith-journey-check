import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function OQueAconteceDepoisMorte() {
    return (
        <>
            <Helmet>
                <title>O que Acontece Depois da Morte? Céu, Inferno e Purgatório | Bom Católico</title>
                <meta name="description" content="Explore a visão católica sobre os novíssimos do homem. Entenda o que a Igreja ensina sobre o Céu, o Inferno e o Purgatório, e como nossa vida terrena determina nosso destino eterno." />
                <meta name="keywords" content="vida após a morte, céu, inferno, purgatório, novíssimos, escatologia católica, eternidade" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/o-que-acontece-depois-da-morte-ceu-inferno-purgatorio" />
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
                            <span className="text-text">O que acontece depois da morte?</span>
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
                                    05 de Setembro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    12 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O que Acontece Depois da Morte? Céu, Inferno e Purgatório
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A morte não é o fim, mas o nascimento para a eternidade. Descubra o que a Igreja ensina sobre o destino final de cada alma.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Cloud className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A morte é a separação da alma e do corpo. No instante da morte, a alma comparece diante de Deus para o Juízo Particular. O destino eterno — Céu, Inferno ou Purgatório — é decidido com base na nossa resposta ao amor de Deus durante a vida terrena.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Céu: A Felicidade Eterna
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Céu é o estado de felicidade suprema e definitiva. É a visão beatífica, onde veremos Deus face a face. É o lugar onde não haverá mais dor, nem lágrimas, nem morte, mas apenas a plenitude do amor e da alegria na comunhão com a Santíssima Trindade, Maria e todos os santos.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Inferno: A Autoexclusão de Deus
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Inferno não é um "castigo vingativo" de Deus, mas a consequência da escolha livre do homem de viver separado d'Ele. É o estado de autoexclusão definitiva da comunhão com Deus e com os bem-aventurados. Aqueles que morrem em pecado mortal, sem arrependimento, escolhem este destino.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Purgatório: A Purificação Final
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Purgatório é um estado de purificação para aqueles que morrem na amizade de Deus, mas ainda com manchas de pecados veniais ou penas temporais. É a "antessala do Céu". As almas no Purgatório têm a certeza da salvação, mas precisam ser purificadas para entrar na santidade perfeita de Deus.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Viver Hoje?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Saber que a vida continua após a morte deve nos dar esperança e responsabilidade. Cada escolha nossa tem um eco na eternidade. Viver bem o hoje, na graça de Deus, é a melhor preparação para o encontro definitivo com o Senhor.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "No entardecer da vida, seremos julgados pelo amor."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São João da Cruz
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="o-que-acontece-depois-da-morte-ceu-inferno-purgatorio" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você está preparado para a eternidade?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz sobre os Novíssimos e descubra como sua vida espiritual atual está moldando seu destino eterno, recebendo conselhos práticos para crescer na santidade e na amizade com Deus.
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

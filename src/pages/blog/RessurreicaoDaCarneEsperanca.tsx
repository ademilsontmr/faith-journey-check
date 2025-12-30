import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function RessurreicaoDaCarneEsperanca() {
    return (
        <>
            <Helmet>
                <title>A Ressurreição da Carne: Nossa Esperança na Vida Eterna | Bom Católico</title>
                <meta name="description" content="Entenda o que significa a ressurreição dos corpos no fim dos tempos. Saiba como será nosso corpo glorioso e por que esta é a promessa central da fé cristã." />
                <meta name="keywords" content="ressurreição da carne, o que é ressurreição dos mortos, corpo glorioso, como será o corpo ressuscitado, creio na ressurreição da carne, vida eterna católica, escatologia católica, fim dos tempos, ressurreição de jesus, corpo e alma" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/ressurreicao-da-carne-nossa-esperanca-vida-eterna" />
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
                            <span className="text-text">Ressurreição da Carne</span>
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
                                    20 de Setembro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Ressurreição da Carne: Nossa Esperança na Vida Eterna
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "Creio na ressurreição da carne". O que essa frase do Credo realmente significa para o nosso futuro?
                            </p>
                        </header>

                        <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Diferente de algumas religiões que pregam a reencarnação ou a libertação definitiva do corpo, o cristianismo valoriza a matéria. Deus criou o homem como unidade de corpo e alma. Por isso, a salvação plena inclui a ressurreição do nosso corpo.
                            </p>

                            <QuizCTA
                                title="Você acredita na vida eterna?"
                                description="A ressurreição da carne é a promessa final de Cristo. Faça nosso quiz e aprofunde sua compreensão sobre o destino glorioso que Deus preparou para você."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como será o corpo ressuscitado?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Não sabemos os detalhes científicos, mas a Igreja ensina que nosso corpo será transformado à imagem do corpo glorioso de Jesus. Ele será o mesmo corpo que tivemos na terra, mas com qualidades novas: imortalidade, agilidade e beleza perfeita, livre de qualquer dor ou limitação.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que ressuscitar?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Porque a morte é uma ruptura antinatural causada pelo pecado. Cristo veio para restaurar a criação inteira. A ressurreição é a prova final de que a morte foi derrotada. Viveremos a eternidade como seres humanos completos, não como "fantasmas".
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Consequências para o hoje
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Se o nosso corpo vai ressuscitar, ele é sagrado. Devemos cuidar dele e respeitá-lo, assim como o corpo dos outros. O corpo é o "templo do Espírito Santo" e o instrumento através do qual amamos e servimos a Deus no mundo.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Se Cristo não ressuscitou, vazia é a nossa pregação, vazia também é a vossa fé."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — 1 Coríntios 15, 14
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="ressurreicao-da-carne-nossa-esperanca-vida-eterna" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você acredita na vida eterna?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz sobre a fé cristã e aprofunde sua compreensão sobre as promessas de Cristo para o nosso futuro, fortalecendo sua esperança diante das dificuldades da vida presente.
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

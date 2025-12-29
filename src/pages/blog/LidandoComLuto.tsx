import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function LidandoComLuto() {
    return (
        <>
            <Helmet>
                <title>Como Lidar com o Luto: O Consolo da Fé na Vida Eterna | Bom Católico</title>
                <meta name="description" content="Encontre esperança e sentido cristão em meio à dor da perda. Como a fé católica nos ajuda a atravessar o luto com a certeza da ressurreição." />
                <meta name="keywords" content="luto, perda, vida eterna, consolo cristão, ressurreição, esperança católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/como-lidar-com-luto-fe-crista" />
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
                            <span className="text-text">Lidando com o Luto</span>
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
                                    Espiritualidade
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    10 de Fevereiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    11 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como Lidar com o Luto: O Consolo da Fé na Vida Eterna
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A morte não é o fim, mas uma passagem. Aprenda como a esperança cristã transforma a dor da saudade em oração e confiança.
                            </p>
                        </header>

                        <div className="aspect-video bg-cyan-50 rounded-2xl flex items-center justify-center mb-10">
                            <Anchor className="w-24 h-24 text-cyan-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O luto é uma das experiências mais universais e, ao mesmo tempo, mais solitárias do ser humano. A perda de um ente querido rasga o tecido da nossa realidade. No entanto, para o católico, o luto é vivido sob a luz da Páscoa. Nós não choramos como aqueles que não têm esperança.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Jesus Também Chorou
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Diante do túmulo de Lázaro, Jesus chorou (Jo 11, 35). Isso nos ensina que a dor é legítima. A fé não nos torna insensíveis; ela nos dá um suporte para carregar a cruz. O luto é um processo de amor que precisa ser vivido, não reprimido.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Comunhão dos Santos: Uma Ponte de Amor
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A morte altera a forma da nossa relação, mas não a rompe. Através da Comunhão dos Santos, continuamos unidos aos nossos entes queridos. Nossa oração por eles (especialmente a Santa Missa) e a intercessão deles por nós criam uma ponte que a morte não pode destruir.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Passos Práticos para Atravessar o Vale
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Dê tempo ao tempo:</strong> O luto não tem cronômetro. Respeite seu ritmo.</li>
                                <li><strong>Reze com os Salmos:</strong> Os salmos de lamentação são orações divinamente inspiradas para momentos de angústia.</li>
                                <li><strong>Busque os Sacramentos:</strong> A Eucaristia nos une ao Cristo ressuscitado, vencedor da morte.</li>
                                <li><strong>Transforme a dor em caridade:</strong> Realizar obras de misericórdia em memória do falecido ajuda a dar um novo sentido à vida.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Certeza da Ressurreição
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                "Eu sou a ressurreição e a vida" (Jo 11, 25). Essa é a nossa âncora. O luto cristão é uma espera ativa pelo reencontro na Pátria Celeste, onde Deus enxugará toda lágrima.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A vida dos que em Vós creem, Senhor, não é tirada, mas transformada."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Prefácio dos Mortos, Liturgia Romana
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="como-lidar-com-luto-fe-crista" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você busca consolo e sentido?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Deixe que a fé ilumine sua caminhada. Faça nosso quiz e descubra como fortalecer sua esperança na vida eterna.
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

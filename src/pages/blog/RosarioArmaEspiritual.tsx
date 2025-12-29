import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function RosarioArmaEspiritual() {
    return (
        <>
            <Helmet>
                <title>O Rosário: Uma Arma Espiritual para os Desafios de 2026 | Bom Católico</title>
                <meta name="description" content="Descubra o poder da oração do Santo Rosário. Aprenda como meditar os mistérios e por que esta oração é tão recomendada pelos santos e papas para os tempos atuais." />
                <meta name="keywords" content="rosário, santo rosário, oração, arma espiritual, mistérios do rosário, meditação cristã" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/rosario-arma-espiritual-desafios-2026" />
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
                            <span className="text-text">O Rosário</span>
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
                                    Oração
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    10 de Agosto, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Rosário: Uma Arma Espiritual para os Desafios de 2026
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Em um mundo agitado e cheio de incertezas, o Rosário é a âncora que nos mantém unidos a Deus através das mãos de Maria.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Shield className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O Santo Rosário foi chamado por São Padre Pio de "a arma". Não uma arma de destruição, mas de combate espiritual contra o mal, o desânimo e o pecado. É uma oração contemplativa que nos faz percorrer a vida de Jesus com os olhos de Sua mãe.
                            </p>

                            <QuizCTA
                                title="Quer aprender a rezar com profundidade?"
                                description="O Rosário é a arma espiritual para os nossos tempos. Faça nosso quiz e receba um guia prático para transformar o Terço em um encontro diário com o Senhor."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que rezar o Rosário hoje?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Vivemos em uma era de distrações constantes. O Rosário nos impõe um ritmo de paz. A repetição das Ave-Marias não é um "vão palavreado", mas um fundo musical que nos permite meditar nos grandes mistérios da nossa salvação.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Mistérios: O Evangelho em Oração
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Mistérios Gozosos:</strong> A alegria da encarnação e infância de Jesus.</li>
                                <li><strong>Mistérios Luminosos:</strong> A vida pública e os ensinamentos de Cristo.</li>
                                <li><strong>Mistérios Dolorosos:</strong> A paixão e morte redentora do Senhor.</li>
                                <li><strong>Mistérios Gloriosos:</strong> A vitória da ressurreição e a glória do céu.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dicas para uma boa oração
                            </h2>
                            <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                                <li><strong>Não tenha pressa:</strong> Mais vale uma dezena bem rezada do que um terço inteiro por obrigação.</li>
                                <li><strong>Use a imaginação:</strong> Ao anunciar o mistério, tente se colocar na cena.</li>
                                <li><strong>Ofereça intenções:</strong> Reze por sua família, pelos doentes e pela paz no mundo.</li>
                                <li><strong>Reze em comunidade:</strong> O Rosário em família ou na paróquia tem uma força especial.</li>
                            </ol>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O Rosário é a oração que sempre acompanha a minha vida; é também a oração dos simples e dos santos... é a oração do meu coração."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Papa Francisco
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="rosario-arma-espiritual-desafios-2026" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer aprender a rezar o Terço com profundidade?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz de espiritualidade e receba um guia prático e meditado para rezar o Santo Rosário, ajudando você a transformar esta oração em um encontro diário com o Senhor.
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

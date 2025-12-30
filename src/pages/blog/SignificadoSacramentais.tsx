import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SignificadoSacramentais() {
    return (
        <>
            <Helmet>
                <title>O Significado dos Sacramentais: Água Benta, Escapulário e Medalhas | Bom Católico</title>
                <meta name="description" content="Entenda o que são os sacramentais, como eles diferem dos sacramentos e como usá-los corretamente para atrair a proteção e a graça de Deus em sua vida." />
                <meta name="keywords" content="o que são sacramentais, água benta para que serve, escapulário significado, medalha de são bento, medalha milagrosa, diferença sacramento e sacramental, como usar água benta, objetos abençoados, proteção espiritual católica, vela benta" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/significado-sacramentais-catolicos" />
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
                            <span className="text-text">Significado dos Sacramentais</span>
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
                                    25 de Março, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Significado dos Sacramentais: Água Benta, Escapulário e Medalhas
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Sacramentais não são "amuletos da sorte", mas sinais sagrados que nos ajudam a viver em estado de graça. Entenda como usá-los.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <ShieldCheck className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Muitos católicos usam o Escapulário do Carmo, a Medalha de São Bento ou têm água benta em casa, mas nem todos sabem o real significado desses objetos. A Igreja os chama de **sacramentais**.
                            </p>

                            <QuizCTA
                                title="Você sabe usar seus sacramentais?"
                                description="Água benta, medalhas e escapulários são sinais da proteção de Deus. Faça nosso quiz e descubra o significado profundo desses objetos sagrados em sua vida diária."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O que são Sacramentais?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Diferente dos sete Sacramentos, que foram instituídos por Cristo e conferem a graça por si mesmos, os sacramentais são instituídos pela Igreja. Eles não conferem a graça do Espírito Santo à maneira dos sacramentos, mas preparam a alma para recebê-la e dispõem a cooperar com ela.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Sacramentais mais Comuns
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-4 mb-6">
                                <li><strong>Água Benta:</strong> Lembra-nos do nosso Batismo e é usada para abençoar pessoas, casas e objetos, afastando as influências do mal.</li>
                                <li><strong>Escapulário do Carmo:</strong> Um sinal de consagração a Nossa Senhora. Não é um "seguro contra o inferno", mas um compromisso de viver como filho de Maria.</li>
                                <li><strong>Medalha de São Bento:</strong> Um sacramental de proteção e exorcismo, que nos lembra da vitória de Cristo sobre o mal.</li>
                                <li><strong>Velas Abençoadas:</strong> Simbolizam Cristo, a Luz do Mundo, e são usadas em momentos de oração e perigo.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Cuidado com a Superstição
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O uso dos sacramentais deve ser sempre acompanhado pela fé e pela vida de oração. Usar uma medalha sem buscar a santidade é cair na superstição. O objeto é um lembrete e um canal, mas a fonte de toda benção é Deus.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Os sacramentais são sinais sagrados por meio dos quais, à imitação dos sacramentos, são significados e obtidos efeitos, sobretudo espirituais."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Código de Direito Canônico, cân. 1166
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="significado-sacramentais-catolicos" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você sabe usar seus sacramentais?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra o significado profundo dos objetos sagrados que você tem em casa e como eles podem ajudar em sua caminhada de fé.
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

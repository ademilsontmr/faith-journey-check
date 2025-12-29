import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PorQueHonrarMaria() {
    return (
        <>
            <Helmet>
                <title>Por que os Católicos Honram Maria? Entenda o Dogma e a Devoção | Bom Católico</title>
                <meta name="description" content="Descubra as bases bíblicas e teológicas da honra a Maria. Entenda a diferença entre adoração e veneração e por que a Virgem Maria é fundamental na vida cristã." />
                <meta name="keywords" content="maria, virgem maria, dogmas marianos, veneração, catolicismo, mãe de deus" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/por-que-catolicos-honram-maria-dogma-devocao" />
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
                            <span className="text-text">Por que Honrar Maria?</span>
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
                                    05 de Agosto, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    11 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Por que os Católicos Honram Maria? Entenda o Dogma e a Devoção
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Maria não afasta de Jesus; ela é o caminho mais curto para chegar a Ele. Entenda por que a "Cheia de Graça" ocupa um lugar central em nossa fé.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Uma das perguntas mais frequentes feitas aos católicos é sobre a devoção a Maria. Muitos confundem veneração com adoração. Mas a Igreja é muito clara: adoramos somente a Deus (Latria) e veneramos os santos e, de modo especial, Maria (Hiperdulia).
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Base Bíblica
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A honra a Maria começa na própria Bíblia. O anjo Gabriel a saúda como "Cheia de Graça". Isabel, inspirada pelo Espírito Santo, exclama: "Bendita és tu entre as mulheres". E a própria Maria profetiza no Magnificat: "Todas as gerações me chamarão bem-aventurada".
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Quatro Dogmas Marianos
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-4 mb-6">
                                <li><strong>Maternidade Divina:</strong> Maria é verdadeiramente a Mãe de Deus (*Theotokos*), pois Jesus é Deus.</li>
                                <li><strong>Virgindade Perpétua:</strong> Maria permaneceu virgem antes, durante e depois do parto.</li>
                                <li><strong>Imaculada Conceição:</strong> Maria foi preservada do pecado original desde o primeiro instante de sua existência.</li>
                                <li><strong>Assunção:</strong> Ao fim de sua vida terrena, Maria foi elevada em corpo e alma à glória do céu.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Maria, Nossa Mãe
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Aos pés da cruz, Jesus nos deu Maria como mãe na pessoa do discípulo João: "Eis aí a tua mãe". Desde então, ela exerce sua maternidade espiritual sobre todos os cristãos, intercedendo por nós como fez nas Bodas de Caná.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "De Maria nunca se dirá o suficiente."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Bernardo de Claraval
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="por-que-catolicos-honram-maria-dogma-devocao" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua relação com a Mãe do Céu?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz mariano e descubra qual título de Nossa Senhora mais se aproxima da sua necessidade atual e receba uma oração especial para fortalecer sua devoção.
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

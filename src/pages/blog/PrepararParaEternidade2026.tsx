import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PrepararParaEternidade2026() {
    return (
        <>
            <Helmet>
                <title>Como se Preparar para a Eternidade no Dia a Dia de 2026 | Bom Católico</title>
                <meta name="description" content="Descubra como viver com o olhar fixo no Céu sem descuidar das responsabilidades terrenas. Dicas práticas de espiritualidade para manter a perspectiva eterna em meio à correria moderna." />
                <meta name="keywords" content="como se preparar para a morte, viver para a eternidade, santidade no dia a dia, céu, propósito de vida cristã, memento mori" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/como-se-preparar-para-eternidade-dia-a-dia" />
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
                            <span className="text-text">Preparar para a Eternidade</span>
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
                                    25 de Setembro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como se Preparar para a Eternidade no Dia a Dia de 2026
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Viver com o "olhar no Céu e os pés na terra". Saiba como manter a perspectiva eterna em um mundo que só pensa no agora.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Anchor className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Muitas vezes pensamos na eternidade como algo muito distante, que só nos dirá respeito no fim da vida. Mas a eternidade começa hoje. Cada decisão, cada palavra e cada gesto de amor são "tijolos" que estamos assentando em nossa morada eterna.
                            </p>

                            <QuizCTA
                                title="Qual é o seu propósito de vida?"
                                description="A eternidade começa hoje em cada pequena escolha. Faça nosso quiz e descubra como alinhar seus objetivos terrenos com sua vocação eterna para o Céu."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Perigo do Imediatismo
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O mundo moderno nos empurra para o imediatismo: queremos tudo agora, o prazer agora, o sucesso agora. Isso nos faz esquecer que somos passageiros nesta terra. Preparar-se para a eternidade é lembrar que "não temos aqui cidade permanente, mas buscamos a futura" (Hebreus 13, 14).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dicas Práticas para o Cotidiano
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-4 mb-6">
                                <li><strong>Oração da Manhã:</strong> Ofereça seu dia a Deus. Isso transforma o trabalho comum em obra eterna.</li>
                                <li><strong>Exame de Consciência:</strong> Ao fim do dia, pergunte-se: "Se eu morresse hoje, estaria pronto para encontrar o Senhor?".</li>
                                <li><strong>Desapego:</strong> Use as coisas do mundo sem se deixar escravizar por elas. Lembre-se que nada levaremos daqui, exceto o amor.</li>
                                <li><strong>Frequência aos Sacramentos:</strong> A Confissão e a Eucaristia são o "combustível" para a viagem rumo ao Céu.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Santidade nas Pequenas Coisas
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Santa Teresinha nos ensinou que não precisamos de grandes obras para ir ao Céu, mas de um grande amor nas pequenas coisas. Lavar a louça, atender um cliente difícil ou suportar uma contrariedade com paciência são formas reais de se preparar para a eternidade.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O Céu é o lugar onde se ama para sempre."
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="como-se-preparar-para-eternidade-dia-a-dia" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Qual é o seu propósito de vida?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz de propósito e descubra como alinhar seus objetivos terrenos com sua vocação eterna, encontrando mais sentido e paz em sua rotina diária.
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

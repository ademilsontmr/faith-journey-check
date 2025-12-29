import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SantosPaisEMaes() {
    return (
        <>
            <Helmet>
                <title>Santos que Foram Pais e Mães: A Santidade no Matrimônio | Bom Católico</title>
                <meta name="description" content="Conheça a história de santos que viveram a vocação matrimonial e educaram seus filhos na fé, provando que a santidade é possível na vida familiar cotidiana." />
                <meta name="keywords" content="santos casados, santidade no matrimônio, pais santos, família católica, vocação familiar" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/santos-pais-maes-santidade-matrimonio" />
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
                            <span className="text-text">Santos Pais e Mães</span>
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
                                    Santos
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    05 de Maio, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    12 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Santos que Foram Pais e Mães: A Santidade no Matrimônio
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A santidade não é exclusividade de padres e freiras. Descubra como homens e mulheres alcançaram o céu através do amor conjugal e da educação dos filhos.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Matrimônio como Caminho de Perfeição
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Durante muito tempo, pensou-se que para ser santo era preciso fugir do mundo. No entanto, a Igreja sempre ensinou que todos são chamados à santidade, cada um no seu estado de vida. O matrimônio é um sacramento que confere as graças necessárias para que o casal se santifique mutuamente e na missão de pais.
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Exemplos que nos Inspiram
                            </h2>
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                Santos Luís e Zélia Martin
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Os pais de Santa Teresinha do Menino Jesus foram o primeiro casal a ser canonizado junto. Eles viveram uma vida de trabalho, oração e caridade, enfrentando a perda de quatro filhos pequenos e a doença, sempre confiando na vontade de Deus.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                Santa Gianna Beretta Molla
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Médica, esposa e mãe, Gianna deu o testemunho supremo de amor ao dar a vida para que sua quarta filha pudesse nascer. Ela nos ensina que a santidade está no cumprimento heróico dos deveres cotidianos.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                Beatos Luigi e Maria Beltrame Quattrocchi
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                O primeiro casal beatificado na história da Igreja. Eles viveram uma vida comum em Roma, mas com uma fé extraordinária, transformando sua casa em uma verdadeira "Igreja Doméstica".
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como viver a santidade em família hoje?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Não é preciso fazer coisas extraordinárias. A santidade na família se constrói na paciência, no perdão, na oração em conjunto e no esforço de ver Cristo no cônjuge e nos filhos. É o "pequeno caminho" aplicado ao lar.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A família é o viveiro da santidade."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São João Paulo II
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="santos-pais-maes-santidade-matrimonio" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está a espiritualidade da sua família?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra qual casal de santos mais se assemelha ao perfil da sua família, recebendo dicas para fortalecer a fé no seu lar.
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

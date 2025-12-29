import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function MudancasIgrejaPos2025() {
    return (
        <>
            <Helmet>
                <title>O Que Muda na Igreja Após o Ano Santo de 2025? | Bom Católico</title>
                <meta name="description" content="Análise das perspectivas e mudanças na Igreja Católica para 2026 após o encerramento do Jubileu. O que esperar do pontificado e das dioceses." />
                <meta name="keywords" content="igreja católica 2026, pós-jubileu, papa francisco, mudanças na igreja, futuro do catolicismo" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/mudancas-igreja-pos-2025" />
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
                            <span className="text-text">Mudanças na Igreja Pós-2025</span>
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
                                    Atualidades
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    05 de Janeiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Que Muda na Igreja Após o Ano Santo de 2025?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O encerramento do Jubileu não é um ponto final, mas um novo fôlego para a missão. Entenda as tendências e desafios da Igreja para 2026.
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Com o fechamento das Portas Santas em janeiro de 2026, a Igreja Católica entra em um novo ciclo. O Jubileu de 2025 deixou uma marca profunda na espiritualidade global, mas agora o desafio é a "pastoral da esperança" — como transformar o entusiasmo das peregrinações em compromisso cristão duradouro.
                            </p>

                            <QuizCTA
                                title="Qual o seu lugar na Igreja?"
                                description="A Igreja está sempre se renovando e você faz parte dessa missão. Faça nosso quiz e descubra como seus dons podem ajudar a construir uma comunidade mais viva e missionária."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Consolidação da Sinodalidade
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Uma das grandes heranças do período 2024-2025 foi o Sínodo sobre a Sinodalidade. Em 2026, veremos a aplicação prática das diretrizes sinodais nas paróquias: uma maior participação dos leigos, escuta ativa e uma Igreja mais missionária e menos burocrática.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Foco na Ecologia Integral e Justiça Social
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Papa Francisco continuará a impulsionar os temas da *Laudato Si'* e *Fratelli Tutti*. Em 2026, a Igreja deve intensificar sua voz em questões climáticas e na defesa dos migrantes, vendo nessas causas uma forma concreta de viver a caridade cristã no mundo contemporâneo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Renovação do Episcopado Brasileiro
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                No Brasil, 2026 será um ano de transição em várias dioceses importantes. Com a renúncia de bispos que atingem a idade limite, o Papa terá a oportunidade de nomear novos pastores alinhados com a visão de uma "Igreja em saída", focada nas periferias existenciais.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Desafios Digitais e Evangelização
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja continuará a explorar as fronteiras digitais. O uso de Inteligência Artificial para a formação e a presença de influenciadores católicos serão temas centrais para atingir as novas gerações que buscam sentido em um mundo hiperconectado.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A Igreja não cresce por proselitismo, mas por atração."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Bento XVI, citado frequentemente pelo Papa Francisco
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="mudancas-igreja-pos-2025" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como você se encaixa na missão da Igreja?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra seus dons e como você pode contribuir para a renovação da sua comunidade paroquial através do nosso quiz vocacional e de talentos.
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

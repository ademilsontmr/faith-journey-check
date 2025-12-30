import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function LegadoJubileu2025() {
    return (
        <>
            <Helmet>
                <title>O Legado do Jubileu 2025: Como Continuar Sendo um Peregrino da Esperança? | Bom Católico</title>
                <meta name="description" content="O Ano Santo de 2025 chegou ao fim, mas sua missão continua. Descubra como manter viva a chama da esperança em sua vida cristã em 2026." />
                <meta name="keywords" content="jubileu 2025 o que foi, peregrinos da esperança, ano santo 2025, porta santa, papa francisco jubileu, indulgência jubileu, como viver após o jubileu, frutos do ano santo, esperança cristã, igreja católica 2026" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/legado-jubileu-2025" />
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
                            <span className="text-text">Legado do Jubileu 2025</span>
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
                                    Jubileu 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    01 de Janeiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Legado do Jubileu 2025: Como Continuar Sendo um Peregrino da Esperança?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                As Portas Santas se fecharam, mas o coração do cristão deve permanecer aberto. Descubra como levar os frutos do Ano Santo para o seu dia a dia em 2026.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O Jubileu de 2025, sob o tema "Peregrinos da Esperança", foi um tempo de graça extraordinária para a Igreja universal. Milhões de fiéis cruzaram as Portas Santas, buscaram a reconciliação e renovaram sua fé. No entanto, o fim do ano litúrgico jubilar não marca o fim da nossa jornada, mas o início de uma nova etapa de testemunho.
                            </p>

                            <QuizCTA
                                title="Você é um peregrino da esperança?"
                                description="O Jubileu de 2025 deixou um chamado para cada um de nós. Faça nosso quiz e descubra como manter viva a chama da esperança e os frutos do Ano Santo em sua vida."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Que Significa Ser um Peregrino em 2026?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ser um peregrino não se resume a viajar para Roma ou para um santuário. É uma atitude interior de quem sabe que não tem aqui morada permanente. Em 2026, somos chamados a ser "peregrinos no cotidiano", levando a luz da esperança para nossos ambientes de trabalho, estudo e família.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3 Frutos do Jubileu para Cultivar Agora
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>A Alegria do Perdão:</strong> A experiência da Indulgência Plenária deve nos tornar mais misericordiosos com os outros.</li>
                                <li><strong>A Centralidade da Esperança:</strong> Em um mundo marcado por incertezas, o cristão é aquele que aponta para a âncora que é Cristo.</li>
                                <li><strong>A Cultura do Encontro:</strong> O Jubileu nos ensinou a caminhar juntos; essa sinodalidade deve continuar em nossas paróquias.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Manter a Chama Acesa?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Para que o Jubileu não seja apenas uma lembrança distante, é preciso disciplina espiritual. Retome as leituras propostas pelo Papa Francisco, participe ativamente da vida sacramental e, acima de tudo, seja um sinal de contradição através da caridade concreta.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A esperança não decepciona, porque o amor de Deus foi derramado em nossos corações."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Romanos 5, 5
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="legado-jubileu-2025" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua jornada de esperança?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como você pode fortalecer sua fé e continuar vivendo os frutos do Jubileu em sua vida diária.
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

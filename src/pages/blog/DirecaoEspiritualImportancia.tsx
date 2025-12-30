import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DirecaoEspiritualImportancia() {
    return (
        <>
            <Helmet>
                <title>A Importância da Direção Espiritual | Bom Católico</title>
                <meta name="description" content="Entenda por que ter um diretor espiritual é fundamental para o crescimento na fé e como encontrar a pessoa certa para guiar sua alma." />
                <meta name="keywords" content="o que é direção espiritual, como encontrar um diretor espiritual, para que serve direção espiritual, padre diretor espiritual, discernimento vocacional, crescimento espiritual, acompanhamento espiritual católico, como escolher diretor espiritual, são felipe néri" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/importancia-direcao-espiritual-caminhada-fe" />
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
                            <span className="text-text">Direção Espiritual</span>
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
                                    Formação
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Importância da Direção Espiritual na Caminhada de Fé
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Ninguém chega ao Céu sozinho. Ter um guia para a alma é uma das tradições mais sábias e frutuosas da Igreja Católica.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Na vida espiritual, somos muitas vezes cegos para nossas próprias falhas e tendências. A direção espiritual é o auxílio de uma pessoa mais experiente na fé — geralmente um sacerdote, mas também pode ser um religioso ou leigo formado — que nos ajuda a discernir a vontade de Deus em nossa vida cotidiana.
                            </p>

                            <QuizCTA
                                title="Você se sente perdido em sua fé?"
                                description="O discernimento é um dom que se cultiva com ajuda. Faça nosso quiz e descubra se você está pronto para buscar um diretor espiritual e como isso pode acelerar sua busca pela santidade."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O que NÃO é Direção Espiritual?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                É importante não confundir direção espiritual com terapia psicológica ou com a Confissão. Enquanto a terapia foca na saúde mental e a Confissão no perdão dos pecados, a direção espiritual foca no progresso da alma em direção a Deus. O diretor não decide por você, mas ajuda você a ouvir o que o Espírito Santo está dizendo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Benefícios de um Guia
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Objetividade:</strong> Alguém de fora vê nossos "pontos cegos" morais e espirituais.</li>
                                <li><strong>Encorajamento:</strong> Nos momentos de aridez, o diretor nos lembra das promessas de Deus.</li>
                                <li><strong>Discernimento:</strong> Ajuda a distinguir entre as inspirações divinas e os nossos próprios desejos ou tentações.</li>
                                <li><strong>Ordem:</strong> Auxilia na criação de um plano de vida espiritual equilibrado.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Encontrar um Diretor?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Peça ao Espírito Santo que lhe mostre a pessoa certa. Procure alguém que tenha uma vida de oração sólida, fidelidade à Igreja e que transmita paz. Não tenha medo de abordar um sacerdote de sua paróquia ou de um mosteiro próximo e pedir uma conversa inicial.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Quem tem um diretor espiritual, chega mais depressa e com mais segurança à perfeição."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Felipe Néri
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="importancia-direcao-espiritual-caminhada-fe" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está seu discernimento vocacional?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Todos temos uma vocação. Descubra como ouvir melhor o chamado de Deus para sua vida através do nosso quiz de discernimento.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PeregrinacaoLocal() {
    return (
        <>
            <Helmet>
                <title>Como Organizar uma Peregrinação Local em Sua Diocese | Bom Católico</title>
                <meta name="description" content="Guia prático e espiritual para organizar peregrinações a santuários locais e igrejas jubilares, fortalecendo a fé comunitária em 2026." />
                <meta name="keywords" content="peregrinação, santuários locais, turismo religioso, fé comunitária, jubileu 2025" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/peregrinacao-local" />
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
                            <span className="text-text">Peregrinação Local</span>
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
                                    Devoções
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    15 de Janeiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como Organizar uma Peregrinação Local em Sua Diocese
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Você não precisa ir a Roma para ser um peregrino. Descubra como organizar uma jornada de fé para os santuários da sua região.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10">
                            <MapPin className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A peregrinação é uma metáfora da vida cristã: estamos a caminho da Pátria Celeste. Organizar uma peregrinação local é uma excelente forma de unir a comunidade, redescobrir a história da fé em sua região e obter as graças jubilares sem grandes custos.
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Defina o Objetivo e o Destino
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Escolha um local que tenha significado espiritual: a Catedral diocesana, um santuário mariano ou a igreja de um santo padroeiro local. O objetivo deve ser claro: é uma jornada de penitência, de agradecimento ou de pedido de graças?
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. Planejamento Espiritual
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Uma peregrinação não é um passeio turístico. Prepare um roteiro de orações para o trajeto:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Oração Inicial:</strong> Benção do envio pelo pároco.</li>
                                <li><strong>Santo Rosário:</strong> Meditado durante a caminhada ou viagem.</li>
                                <li><strong>Cantos:</strong> Hinos que ajudem na elevação da alma.</li>
                                <li><strong>Confissão e Missa:</strong> O ponto alto da chegada ao destino.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Logística e Organização
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Pense nos detalhes práticos para que nada atrapalhe o momento de fé: transporte (ônibus ou caminhada), alimentação, pontos de apoio e kit do peregrino (livreto de orações, água, identificação).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                4. O Pós-Peregrinação
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ao retornar, reserve um momento para partilhar os frutos da jornada. Como essa experiência mudou a visão de fé dos participantes? Que compromissos concretos a comunidade assume a partir de agora?
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Peregrinar é desinstalar-se para encontrar-se com Deus e com os irmãos."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Sabedoria Popular Cristã
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="peregrinacao-local" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Qual o seu perfil de peregrino?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra quais tipos de experiências espirituais e destinos de peregrinação mais combinam com seu momento de fé atual.
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

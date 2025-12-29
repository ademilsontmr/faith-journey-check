import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function PoderDaConfissao() {
    return (
        <>
            <Helmet>
                <title>O Poder da Confissão: Como se Preparar para uma Confissão que Muda a Vida | Bom Católico</title>
                <meta name="description" content="Descubra como realizar um bom exame de consciência e se preparar para o sacramento da Reconciliação, experimentando a misericórdia infinita de Deus." />
                <meta name="keywords" content="confissão, sacramento da penitência, exame de consciência, misericórdia de Deus, perdão dos pecados" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/poder-da-confissao-guia-preparacao" />
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
                            <span className="text-text">O Poder da Confissão</span>
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
                                    Sacramentos
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    10 de Março, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    12 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Poder da Confissão: Como se Preparar para uma Confissão que Muda a Vida
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A Confissão não é um tribunal de condenação, mas um hospital de cura. Aprenda a abrir o coração para a misericórdia que renova todas as coisas.
                            </p>
                        </header>

                        <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que se confessar?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O pecado é uma ferida que nos afasta de Deus e dos irmãos. O sacramento da Confissão (ou Reconciliação) é o meio que Jesus nos deixou para restaurar a graça batismal. É o encontro do filho pródigo com o Pai que sempre espera com os braços abertos.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os 5 Passos para uma Boa Confissão
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A tradição da Igreja ensina cinco etapas fundamentais para que o sacramento produza todos os seus frutos:
                            </p>
                            <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                                <li><strong>Exame de Consciência:</strong> Recordar os pecados cometidos desde a última confissão à luz dos Mandamentos.</li>
                                <li><strong>Arrependimento (Contrição):</strong> A dor sincera de ter ofendido a Deus, que é sumamente bom.</li>
                                <li><strong>Propósito de Emenda:</strong> A vontade firme de não voltar a pecar e de evitar as ocasiões de pecado.</li>
                                <li><strong>Confissão dos Pecados:</strong> Dizer ao padre os pecados graves por espécie e número, e também os veniais.</li>
                                <li><strong>Satisfação (Penitência):</strong> Cumprir a obra ou oração prescrita pelo confessor para reparar o dano do pecado.</li>
                            </ol>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como fazer um bom Exame de Consciência?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Não se limite a uma lista superficial. Pergunte-se: Como está minha relação com Deus? Tenho sido caridoso com meu próximo? Tenho cuidado da minha pureza e honestidade? O exame deve ser feito com calma, pedindo a luz do Espírito Santo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Vencendo o Medo e a Vergonha
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O demônio nos tira a vergonha para pecar e nos devolve a vergonha para nos confessar. Lembre-se: o padre está ali em nome de Cristo, e ele já ouviu de tudo. Nada do que você disser vai escandalizá-lo mais do que a alegria de ver uma alma voltando para Deus.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A confissão é o batismo das lágrimas."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Gregório Nazianzeno
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="poder-da-confissao-guia-preparacao" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quando foi sua última confissão?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e receba um roteiro completo de exame de consciência baseado no seu estado de vida (solteiro, casado, jovem) para ajudar em sua próxima confissão.
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

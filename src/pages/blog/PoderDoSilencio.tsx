import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PoderDoSilencio() {
    return (
        <>
            <Helmet>
                <title>O Poder do Silêncio: Retiros Espirituais para Curar o Burnout | Bom Católico</title>
                <meta name="description" content="Descubra como o silêncio e os retiros espirituais católicos podem ser o remédio eficaz contra o esgotamento profissional e o estresse moderno." />
                <meta name="keywords" content="silêncio, retiro espiritual, burnout, esgotamento, paz interior, espiritualidade" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/poder-do-silencio-burnout" />
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
                            <span className="text-text">O Poder do Silêncio</span>
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
                                    Espiritualidade
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    25 de Janeiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Poder do Silêncio: Retiros Espirituais para Curar o Burnout
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                No ruído ensurdecedor do século XXI, o silêncio não é um luxo, mas uma necessidade vital para a sobrevivência da alma.
                            </p>
                        </header>

                        <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-10">
                            <Wind className="w-24 h-24 text-slate-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O termo *burnout* tornou-se comum em nossos dias. Ele descreve o estado de exaustão física, mental e emocional causado pelo estresse crônico. Para o cristão, o burnout muitas vezes se manifesta como uma "aridez espiritual", onde a oração parece vazia e a vida perde o brilho.
                            </p>

                            <QuizCTA
                                title="Você está precisando de uma pausa?"
                                description="O silêncio é o lugar onde Deus fala ao coração. Faça nosso quiz e descubra como o silêncio e os retiros espirituais podem ser o remédio para o seu cansaço e estresse."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que o Silêncio Assusta?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Muitas pessoas evitam o silêncio porque, nele, somos confrontados com nós mesmos e com nossas feridas. No entanto, é exatamente nesse confronto que a cura começa. O Cardeal Robert Sarah, em seu livro *A Força do Silêncio*, afirma que "o silêncio é a linguagem de Deus". Sem ele, perdemos a capacidade de ouvir a voz do Criador.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Retiro como "Hospital de Campanha"
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Fazer um retiro espiritual — seja de um dia, um final de semana ou os Exercícios Espirituais de Santo Inácio — é como levar a alma para um "hospital de campanha". É o momento de desconectar das notificações e reconectar com a Fonte da Vida.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Práticas para o Dia a Dia
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>O "Deserto" de 15 Minutos:</strong> Reserve um tempo diário sem celular, apenas para estar na presença de Deus.</li>
                                <li><strong>Visita ao Santíssimo:</strong> O silêncio da igreja é um refúgio contra o barulho do mundo.</li>
                                <li><strong>Leitura Meditativa:</strong> Substitua o scroll infinito por uma página de um clássico da espiritualidade.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "No silêncio e na esperança estará a vossa força."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Isaías 30, 15
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="poder-do-silencio-burnout" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você está precisando de uma pausa?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra seu nível de estresse espiritual e receba recomendações de retiros e práticas de silêncio através do nosso quiz.
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

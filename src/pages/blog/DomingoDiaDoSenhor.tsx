import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DomingoDiaDoSenhor() {
    return (
        <>
            <Helmet>
                <title>Como Viver o Domingo como o Dia do Senhor em 2026 | Bom Católico</title>
                <meta name="description" content="Descubra o significado teológico do domingo e receba dicas práticas para santificar este dia, equilibrando descanso, família e vida espiritual." />
                <meta name="keywords" content="por que ir à missa no domingo, domingo dia do senhor, santificar o domingo, é pecado não ir à missa, descanso dominical, terceiro mandamento, missa dominical obrigatória, como viver o domingo, família no domingo, guardar o domingo" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/como-viver-domingo-dia-do-senhor" />
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
                            <span className="text-text">Domingo Dia do Senhor</span>
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
                                    25 de Julho, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como Viver o Domingo como o Dia do Senhor em 2026
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O domingo não é apenas o fim de semana, mas o "oitavo dia", o dia da Ressurreição. Saiba como resgatar a sacralidade deste dia em sua rotina.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
                            <Home className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Para muitos, o domingo tornou-se o dia do cansaço, das compras de última hora ou apenas da preguiça. Para o cristão, porém, o domingo é o centro da semana, o dia em que celebramos a vitória de Cristo sobre a morte.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Missa: O Coração do Domingo
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Participar da Eucaristia dominical não é uma "obrigação pesada", mas uma necessidade da alma. É onde nos reunimos como corpo de Cristo para sermos alimentados por Sua Palavra e Seu Corpo. Sem o domingo, não podemos viver.
                            </p>

                            <QuizCTA
                                title="Seu domingo é realmente o Dia do Senhor?"
                                description="O domingo é o oitavo dia, o dia da Ressurreição. Faça nosso quiz e descubra como resgatar a sacralidade do seu descanso e da sua participação na Missa, vivendo o domingo com mais propósito."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Descanso que Santifica
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Santificar o domingo também significa descansar. Mas não é um descanso vazio. É o *shabbat* cristão: parar as atividades produtivas para dar lugar à contemplação, à leitura espiritual e ao convívio gratuito com os entes queridos.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dicas Práticas para 2026
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-4 mb-6">
                                <li><strong>Prepare-se no sábado:</strong> Deixe as tarefas domésticas pesadas adiantadas.</li>
                                <li><strong>Almoço em família:</strong> Faça do almoço dominical um momento especial de união e gratidão.</li>
                                <li><strong>Desconexão digital:</strong> Tente reduzir o uso de telas para estar mais presente para Deus e para as pessoas.</li>
                                <li><strong>Obras de misericórdia:</strong> O domingo é um ótimo dia para visitar um doente ou ajudar alguém necessitado.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O domingo é o dia da alegria e do repouso do trabalho."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Catecismo da Igreja Católica, 2185
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="como-viver-domingo-dia-do-senhor" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está o seu descanso dominical?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como você pode melhorar a qualidade do seu domingo, transformando-o em um verdadeiro dia de renovação espiritual e familiar.
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

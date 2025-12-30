import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function LectioDivinaGuia() {
    return (
        <>
            <Helmet>
                <title>Lectio Divina: Guia Passo a Passo para Ler a Bíblia com o Coração | Bom Católico</title>
                <meta name="description" content="Aprenda a praticar a Lectio Divina, o método milenar da Igreja para ler, meditar e rezar com a Palavra de Deus todos os dias." />
                <meta name="keywords" content="o que é lectio divina, como fazer lectio divina, leitura orante da bíblia, meditação bíblica católica, como rezar com a bíblia, são jerônimo bíblia, passos da lectio divina, oração com as escrituras, evangelho do dia meditação, contemplação católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/lectio-divina-guia-passo-a-passo" />
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
                            <span className="text-text">Guia de Lectio Divina</span>
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
                                    Oração
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    30 de Março, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    11 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Lectio Divina: Guia Passo a Passo para Ler a Bíblia com o Coração
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A Bíblia não é um livro de história, mas uma carta de amor de Deus para você. Aprenda a ouvi-Lo através da Leitura Orante.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
                            <BookOpen className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A *Lectio Divina* é uma prática monástica milenar que permite que a Palavra de Deus desça da cabeça para o coração. Ela é composta por quatro degraus simples, mas profundos.
                            </p>

                            <QuizCTA
                                title="A Bíblia é sua bússola diária?"
                                description="Aprender a rezar com as Escrituras é o caminho para a santidade. Faça nosso quiz e descubra como a Lectio Divina pode iluminar suas decisões e fortalecer sua fé."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os 4 Degraus da Lectio Divina
                            </h2>
                            <ol className="list-decimal list-inside text-text space-y-6 mb-6">
                                <li><strong>Lectio (Leitura):</strong> O que o texto diz em si? Leia o trecho bíblico (recomenda-se o Evangelho do dia) com calma, prestando atenção aos detalhes, personagens e ações.</li>
                                <li><strong>Meditatio (Meditação):</strong> O que Deus me diz através deste texto? É o momento de ruminar a Palavra, trazendo-a para a sua realidade atual. Qual palavra ou frase mais tocou seu coração?</li>
                                <li><strong>Oratio (Oração):</strong> O que eu digo a Deus em resposta à Sua Palavra? Transforme sua meditação em louvor, pedido de perdão ou súplica. Fale com Deus como um amigo fala a outro.</li>
                                <li><strong>Contemplatio (Contemplação):</strong> Repousar na presença de Deus. É o momento de silêncio, onde deixamos que a Palavra nos transforme por dentro. É o "olhar de amor" entre a alma e o Criador.</li>
                            </ol>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dicas para uma boa prática
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Constância:</strong> Reserve 15 a 20 minutos todos os dias.</li>
                                <li><strong>Lugar calmo:</strong> Evite distrações e barulhos.</li>
                                <li><strong>Invoque o Espírito Santo:</strong> Ele é o autor das Escrituras e quem nos ajuda a compreendê-las.</li>
                                <li><strong>Tenha um diário espiritual:</strong> Anote as luzes que Deus te der durante a meditação.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Desconhecer as Escrituras é desconhecer o próprio Cristo."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Jerônimo
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="lectio-divina-guia-passo-a-passo" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua intimidade com a Palavra?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como a Bíblia pode iluminar suas decisões diárias, com um plano de leitura personalizado para o seu momento.
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

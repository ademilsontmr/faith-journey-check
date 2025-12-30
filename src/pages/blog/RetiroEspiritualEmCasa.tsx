import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function RetiroEspiritualEmCasa() {
    return (
        <>
            <Helmet>
                <title>Como Fazer um Retiro Espiritual em Casa | Bom Católico</title>
                <meta name="description" content="Aprenda como organizar e viver um retiro espiritual profundo sem sair de casa. Dicas de silêncio, oração e roteiro para um encontro pessoal com Deus." />
                <meta name="keywords" content="como fazer retiro espiritual em casa, retiro espiritual sozinho, roteiro de retiro, jejum digital, silêncio e oração, deserto espiritual, dia de oração em casa, retiro católico, como rezar em silêncio, exercícios espirituais em casa" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/como-fazer-retiro-espiritual-em-casa" />
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
                            <span className="text-text">Retiro em Casa</span>
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
                                    29 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Guia Prático: Como Fazer um Retiro Espiritual em Casa
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Nem sempre podemos ir a um mosteiro, mas podemos transformar nosso lar em um deserto fértil para ouvir a voz de Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
                            <Home className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Fazer um retiro espiritual é "retirar-se" da agitação do mundo para focar no essencial: o relacionamento com Deus. Embora os centros de retiro sejam ideais, é perfeitamente possível viver essa experiência em sua própria casa, desde que haja planejamento e disciplina.
                            </p>

                            <QuizCTA
                                title="Sua alma está precisando de descanso?"
                                description="O silêncio é a linguagem de Deus. Faça nosso quiz e descubra qual tipo de retiro ou prática espiritual mais combina com o seu momento atual de vida."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Escolha o Tempo e o Lugar
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Defina se o retiro será de algumas horas, um dia inteiro ou um final de semana. Avise as pessoas que moram com você e peça colaboração. Escolha um local tranquilo da casa, limpo e organizado, onde você possa criar um pequeno altar com uma vela, a Bíblia e uma imagem sacra.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. O Jejum Digital
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Este é o passo mais difícil e necessário. Desligue o celular, a televisão e as redes sociais. O objetivo é diminuir os ruídos externos para que os ruídos internos possam ser ouvidos e, finalmente, acalmados pela presença do Senhor.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Um Roteiro Sugerido
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Manhã:</strong> Oração de oferecimento, leitura de um Salmo e meditação sobre um tema (ex: a misericórdia de Deus).</li>
                                <li><strong>Meio-dia:</strong> Oração do Angelus e um momento de silêncio contemplativo.</li>
                                <li><strong>Tarde:</strong> Lectio Divina com o Evangelho do dia, Terço da Misericórdia e leitura espiritual de um livro de um santo.</li>
                                <li><strong>Noite:</strong> Exame de consciência, oração de gratidão e Completas.</li>
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

                        <RelatedArticles currentSlug="como-fazer-retiro-espiritual-em-casa" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua vida de oração?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra como fortalecer sua intimidade com Deus e superar as dificuldades na oração através do nosso quiz de espiritualidade.
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

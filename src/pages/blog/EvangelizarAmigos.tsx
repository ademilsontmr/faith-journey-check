import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function EvangelizarAmigos() {
    return (
        <>
            <Helmet>
                <title>Como Falar de Deus para Amigos Não Crentes sem Ser Chato | Bom Católico</title>
                <meta name="description" content="Aprenda estratégias de evangelização baseadas na amizade, no testemunho e no respeito, levando a luz do Evangelho para aqueles que ainda não conhecem a Deus." />
                <meta name="keywords" content="evangelização, falar de deus, testemunho cristão, amizade e fé, como evangelizar" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/como-falar-de-deus-amigos-nao-crentes" />
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
                            <span className="text-text">Evangelizar Amigos</span>
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
                                    Missão
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    20 de Junho, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como Falar de Deus para Amigos Não Crentes sem Ser Chato
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Evangelizar não é "ganhar discussões", mas compartilhar uma alegria. Saiba como ser uma testemunha autêntica no seu círculo de amizades.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <MessageCircle className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Muitos católicos sentem um "frio na barriga" só de pensar em falar de fé com amigos que não acreditam ou que estão afastados da Igreja. O medo de ser julgado como fanático ou "chato" é real. Mas a evangelização é um mandato de Jesus para todos nós.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. O Testemunho vem primeiro
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                "O homem contemporâneo escuta com melhor vontade as testemunhas do que os mestres", dizia São Paulo VI. Antes de falar, viva. Sua alegria, sua honestidade no trabalho e sua paz diante das dificuldades falarão muito mais alto do que qualquer argumento teológico.
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. Escute antes de falar
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Evangelizar é um diálogo, não um monólogo. Entenda as dores, as dúvidas e as buscas do seu amigo. Muitas vezes, as pessoas têm preconceitos contra a Igreja por causa de feridas do passado. Escutar com empatia abre portas que a argumentação fecha.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Compartilhe sua experiência pessoal
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Em vez de dizer "você deve fazer isso", diga "isso me ajudou muito". Fale de como a oração te dá força ou de como a fé mudou sua perspectiva sobre o sofrimento. Ninguém pode discutir com a sua experiência pessoal.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                4. Reze por eles
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A conversão é obra do Espírito Santo, não nossa. Fale mais com Deus sobre seus amigos do que com seus amigos sobre Deus. A oração silenciosa prepara o terreno para que a semente da Palavra possa germinar no momento certo.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A Igreja não cresce por proselitismo, mas por atração."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Bento XVI
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="como-falar-de-deus-amigos-nao-crentes" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você se sente preparado para evangelizar?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz missionário e descubra qual é o seu estilo de evangelização, recebendo dicas práticas para compartilhar sua fé de forma natural e eficaz no seu dia a dia.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function ParabolasDeJesus() {
    return (
        <>
            <Helmet>
                <title>Parábolas de Jesus: Lições de Sabedoria para o Mundo Moderno | Bom Católico</title>
                <meta name="description" content="Explore o significado profundo das parábolas de Jesus e como suas histórias simples continuam a desafiar e transformar nossas vidas hoje." />
                <meta name="keywords" content="parábolas de jesus, ensinamentos de cristo, sabedoria bíblica, evangelho, vida cristã" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/parabolas-jesus-licoes-sabedoria-moderna" />
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
                            <span className="text-text">Parábolas de Jesus</span>
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
                                    Bíblia
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    15 de Junho, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Parábolas de Jesus: Lições de Sabedoria para o Mundo Moderno
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Jesus não falava por conceitos abstratos, mas por histórias que tocavam o coração. Descubra o que Ele tem a nos dizer hoje através das parábolas.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Lightbulb className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Uma parábola é uma comparação que usa elementos do dia a dia (sementes, ovelhas, moedas, festas) para revelar verdades profundas sobre o Reino de Deus. Elas não são apenas "historinhas", mas espelhos que nos obrigam a olhar para nossa própria vida.
                            </p>

                            <QuizCTA
                                title="O que Jesus quer lhe dizer hoje?"
                                description="As parábolas são espelhos da nossa alma. Faça nosso quiz e descubra qual ensinamento de Cristo tem uma mensagem especial para os desafios que você enfrenta agora."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Bom Samaritano: Quem é o meu próximo?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Em um mundo polarizado, esta parábola nos lembra que o "próximo" não é quem pensa como eu, mas quem precisa de mim. A caridade não tem fronteiras ideológicas ou religiosas.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Filho Pródigo: A alegria do perdão
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Talvez a mais bela das histórias, ela nos revela o rosto do Pai que não julga, mas corre ao encontro do filho que volta. Ela nos desafia a também sermos misericordiosos como o Pai, vencendo o ressentimento do "irmão mais velho".
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Semeador: Que tipo de solo eu sou?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Palavra de Deus é lançada todos os dias. Às vezes, as preocupações do mundo e o apego às riquezas sufocam a semente. Esta parábola nos convida a preparar o terreno do nosso coração através da oração e da humildade.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que Jesus falava em parábolas?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ele queria que as pessoas fizessem um esforço para entender. A parábola esconde a verdade dos orgulhosos e a revela aos humildes. Ela exige uma resposta, uma mudança de atitude.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "As parábolas de Jesus são como janelas abertas para o mistério de Deus."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Bento XVI
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="parabolas-jesus-licoes-sabedoria-moderna" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Qual parábola descreve seu momento atual?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra qual ensinamento de Jesus tem uma mensagem especial para os desafios que você está enfrentando hoje.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function IgrejaDomestica() {
    return (
        <>
            <Helmet>
                <title>Igreja Doméstica: Passos Práticos para Rezar em Família | Bom Católico</title>
                <meta name="description" content="Transforme seu lar em uma verdadeira Igreja Doméstica. Dicas práticas e roteiros simples para iniciar e manter o hábito da oração em família." />
                <meta name="keywords" content="igreja doméstica, oração em família, espiritualidade familiar, lar cristão, catequese em casa" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/igreja-domestica-oracao-familia" />
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
                            <span className="text-text">Igreja Doméstica</span>
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
                                    Família
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    20 de Fevereiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Igreja Doméstica: Passos Práticos para Rezar em Família
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "Família que reza unida, permanece unida". Descubra como criar um ambiente de fé e oração dentro da sua própria casa.
                            </p>
                        </header>

                        <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
                            <Home className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O Concílio Vaticano II resgatou a expressão "Igreja Doméstica" para descrever a família cristã. O lar é o primeiro lugar onde se anuncia a fé e onde se aprende a amar a Deus. Mas, na prática, como transformar uma rotina corrida em um espaço de oração?
                            </p>

                            <QuizCTA
                                title="Seu lar é um lugar de oração?"
                                description="Família que reza unida permanece unida. Faça nosso quiz e receba sugestões práticas para transformar sua casa em uma verdadeira Igreja Doméstica, onde Deus é o centro de tudo."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Crie um "Canto de Oração" (Oratório)
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ter um lugar físico dedicado a Deus na casa ajuda a lembrar da Sua presença. Pode ser uma mesa pequena com uma Bíblia, um crucifixo, uma imagem de Nossa Senhora e uma vela. Esse se torna o ponto de encontro da família com o Sagrado.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. Comece Pequeno e com Constância
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Não tente rezar um Rosário completo com crianças pequenas no primeiro dia. Comece com a benção das refeições, um Pai Nosso ao acordar ou uma dezena do Terço antes de dormir. O segredo é a fidelidade diária, não a duração.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Use a Liturgia da Igreja
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Siga o calendário litúrgico em casa. No Advento, acenda a coroa; na Quaresma, faça um pequeno sacrifício comunitário; na Páscoa, celebre com alegria. Isso ajuda as crianças a entenderem que a fé não acontece apenas na igreja aos domingos.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                4. Reze com Suas Próprias Palavras
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Além das orações decoradas, incentive cada membro da família a agradecer por algo que aconteceu no dia ou a pedir por alguém que está sofrendo. Isso humaniza a oração e ensina que Deus se interessa pelos detalhes da nossa vida.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A família é, por assim dizer, a Igreja doméstica."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Lumen Gentium, 11
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="igreja-domestica-oracao-familia" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer fortalecer a fé no seu lar?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e receba um guia personalizado com roteiros de oração para diferentes idades e momentos da vida familiar.
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

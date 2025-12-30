import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OQueEPurgatorio() {
    return (
        <>
            <Helmet>
                <title>O Que é o Purgatório? Verdades de Fé | Bom Católico</title>
                <meta name="description" content="Entenda o dogma do Purgatório, por que ele existe e qual a importância de rezarmos pelas almas que lá estão." />
                <meta name="keywords" content="o que é purgatório, existe purgatório na bíblia, almas do purgatório, oração pelos mortos, como ajudar almas do purgatório, escatologia católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/o-que-e-purgatorio" />
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
                            <span className="text-text">O Que é o Purgatório?</span>
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
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Que é o Purgatório? Verdades de Fé
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O Purgatório é um dos dogmas mais consoladores da Igreja. Entenda por que ele é uma manifestação da misericórdia divina.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
                            <BookOpen className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O Purgatório é o estado daqueles que morrem na graça e na amizade de Deus, mas ainda não estão perfeitamente purificados. Embora tenham a certeza de sua salvação eterna, eles precisam passar por uma purificação para obter a santidade necessária para entrar na alegria do céu.
                            </p>

                            <QuizCTA
                                title="Você conhece a misericórdia do Purgatório?"
                                description="O Purgatório é um presente de amor para nos preparar para o Céu. Faça nosso quiz e aprofunde seu conhecimento sobre este dogma consolador da nossa fé."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Um Dogma de Misericórdia
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Longe de ser um "lugar de castigo" cruel, o Purgatório é uma "ante-sala" do céu. Deus, em Sua infinita santidade, não pode permitir que nada impuro entre em Sua presença. O Purgatório é, portanto, o recurso misericordioso que Deus oferece para que nossas faltas leves e as penas devidas aos nossos pecados sejam lavadas pelo fogo purificador do Seu amor.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Fundamento Bíblico e Tradição
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A doutrina do Purgatório baseia-se na prática de rezar pelos mortos, mencionada já no Antigo Testamento (II Macabeus 12, 46). No Novo Testamento, São Paulo fala de uma purificação "como que através do fogo" (I Coríntios 3, 15). A Igreja, desde os primeiros séculos, sempre honrou a memória dos defuntos e ofereceu sufrágios por eles, especialmente o sacrifício eucarístico.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Ajudar as Almas do Purgatório?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Nós, que ainda estamos na terra, podemos ajudar as "almas benditas" a apressarem sua entrada no céu através de:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>A Santa Missa:</strong> É o sufrágio mais poderoso.</li>
                                <li><strong>Oração do Rosário:</strong> Oferecer as contas do Rosário pelo descanso eterno.</li>
                                <li><strong>Indulgências:</strong> Aplicar as graças das indulgências em favor dos falecidos.</li>
                                <li><strong>Esmolas e Sacrifícios:</strong> Pequenas renúncias oferecidas com amor.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Não hesitemos em socorrer os que partiram e em oferecer por eles as nossas orações."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São João Crisóstomo
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="o-que-e-purgatorio" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você conhece bem a sua fé?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Teste seus conhecimentos sobre a doutrina católica e descubra áreas onde você pode crescer no entendimento da verdade.
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

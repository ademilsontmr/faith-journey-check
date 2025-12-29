import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoEMindfulness() {
    return (
        <>
            <Helmet>
                <title>Oração e Mindfulness: A Diferença entre Meditação Cristã e Práticas Seculares | Bom Católico</title>
                <meta name="description" content="Entenda as diferenças fundamentais entre a meditação cristã e o mindfulness secular, e como a oração católica leva a um encontro real com Deus." />
                <meta name="keywords" content="meditação cristã, mindfulness, oração católica, atenção plena, espiritualidade, saúde mental" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-vs-mindfulness-cristao" />
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
                            <span className="text-text">Oração e Mindfulness</span>
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
                                    05 de Fevereiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Oração e Mindfulness: A Diferença entre Meditação Cristã e Práticas Seculares
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Atenção plena ou presença de Deus? Entenda por que a meditação católica vai muito além do relaxamento mental.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
                            <Brain className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O *Mindfulness* (atenção plena) tornou-se uma ferramenta popular para reduzir o estresse. Embora suas técnicas de respiração e foco no presente possam ser úteis, o cristão deve estar atento: a meditação católica tem um objetivo e uma dinâmica fundamentalmente diferentes.
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Mindfulness: O Foco no "Eu"
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                No mindfulness secular, o objetivo é esvaziar a mente, observar os pensamentos sem julgamento e alcançar um estado de relaxamento. O foco está no bem-estar individual e no controle da própria psique. É uma técnica introspectiva.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Meditação Cristã: O Foco no "Tu"
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Para o católico, meditar não é esvaziar a mente, mas preenchê-la com a Palavra de Deus. Não buscamos apenas um estado mental, mas um **Encontro com uma Pessoa**: Jesus Cristo. A meditação cristã é extrospectiva; ela nos tira de nós mesmos para nos unir ao Criador.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Diferenças Fundamentais
                            </h2>
                            <table className="min-w-full border-collapse border border-border mb-6">
                                <thead>
                                    <tr className="bg-background-muted">
                                        <th className="border border-border p-2 text-left">Aspecto</th>
                                        <th className="border border-border p-2 text-left">Mindfulness</th>
                                        <th className="border border-border p-2 text-left">Oração Católica</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-border p-2 font-bold">Objetivo</td>
                                        <td className="border border-border p-2">Relaxamento / Foco</td>
                                        <td className="border border-border p-2">União com Deus</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-border p-2 font-bold">Centro</td>
                                        <td className="border border-border p-2">O próprio indivíduo</td>
                                        <td className="border border-border p-2">Jesus Cristo</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-border p-2 font-bold">Meio</td>
                                        <td className="border border-border p-2">Técnicas mentais</td>
                                        <td className="border border-border p-2">Graça e Palavra</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Prática da "Presença de Deus"
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O que o mundo chama de mindfulness, os santos chamavam de "viver na presença de Deus". É a consciência contínua de que Deus está conosco em cada respiração, em cada tarefa. Isso traz uma paz que o mundo não pode dar, pois não depende das circunstâncias, mas da fidelidade de Deus.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A meditação cristã é um olhar de fé, fixo em Jesus."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Catecismo da Igreja Católica, 2715
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-vs-mindfulness-cristao" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua concentração na oração?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra se você está apenas relaxando ou realmente encontrando Deus. Faça nosso quiz e receba um guia de meditação cristã.
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

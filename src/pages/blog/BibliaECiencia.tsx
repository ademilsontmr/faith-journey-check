import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function BibliaECiencia() {
    return (
        <>
            <Helmet>
                <title>Bíblia e Ciência: Fé e Razão em Diálogo | Bom Católico</title>
                <meta name="description" content="Descubra como a Igreja Católica entende a relação entre a Bíblia e a Ciência. Entenda por que a fé e a razão são como duas asas que nos elevam à verdade." />
                <meta name="keywords" content="bíblia e ciência, fé e razão, fides et ratio, criação, evolução, igreja e ciência" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/biblia-ciencia-dialogo-fe-razao-igreja" />
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
                            <span className="text-text">Bíblia e Ciência</span>
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
                                    29 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    11 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Bíblia e Ciência: O Diálogo entre a Fé e a Razão na Igreja Católica
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A verdade não pode contradizer a verdade. Descubra por que a Igreja nunca viu a ciência como uma inimiga, mas como uma aliada na busca pelo conhecimento.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Lightbulb className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Existe um mito persistente de que a fé e a ciência estão em guerra. No entanto, a Igreja Católica ensina que a fé e a razão são "como duas asas pelas quais o espírito humano se eleva à contemplação da verdade". Ambas têm a mesma origem: Deus, o autor de toda a verdade.
                            </p>

                            <QuizCTA
                                title="Sua fé tem fundamentos sólidos?"
                                description="A Igreja Católica é a mãe das universidades e de grandes descobertas científicas. Faça nosso quiz e descubra como equilibrar o conhecimento intelectual com a vida espiritual."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Ler a Bíblia Corretamente
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Bíblia não é um livro de ciências naturais. Seu objetivo não é explicar "como" os céus foram feitos, mas "como" se vai ao céu. Quando lemos o Gênesis, devemos buscar a verdade teológica (Deus criou tudo por amor) e não uma descrição literal e cronológica de processos biológicos ou geológicos.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Cientistas Católicos que Mudaram o Mundo
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Você sabia que a teoria do Big Bang foi proposta por um padre católico, Georges Lemaître? Ou que o pai da genética moderna foi o monge agostiniano Gregor Mendel? A Igreja sempre incentivou a pesquisa científica, entendendo que quanto mais conhecemos a criação, mais admiramos o Criador.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Evolução e Criação
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Para a Igreja, não há problema em aceitar a evolução como um processo biológico, desde que se reconheça que a alma humana é criada diretamente por Deus e que Ele é a causa primeira de tudo o que existe. A ciência explica os mecanismos; a fé explica o sentido e o propósito.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A fé e a razão são como duas asas pelas quais o espírito humano se eleva à contemplação da verdade."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São João Paulo II, Fides et Ratio
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="biblia-ciencia-dialogo-fe-razao-igreja" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer aprofundar sua formação católica?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Uma fé madura busca o entendimento. Descubra em que nível está seu conhecimento da doutrina através do nosso quiz personalizado.
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

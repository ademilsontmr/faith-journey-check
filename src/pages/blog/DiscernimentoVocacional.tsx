import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DiscernimentoVocacional() {
    return (
        <>
            <Helmet>
                <title>Como Discernir a Vontade de Deus em Sua Vida | Bom Católico</title>
                <meta name="description" content="Aprenda os princípios do discernimento espiritual para descobrir o plano de Deus para você. Dicas práticas para tomar decisões à luz da fé." />
                <meta name="keywords" content="discernimento vocacional, vontade de Deus, vocação, vida espiritual, decisões, oração" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/discernimento-vocacional" />
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
                            <span className="text-text">Discernimento Vocacional</span>
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
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como Discernir a Vontade de Deus em Sua Vida
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Deus tem um plano de amor para cada um de nós. Aprenda como silenciar os ruídos do mundo para ouvir a voz do Senhor e tomar decisões com paz e segurança.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O discernimento é a arte de descobrir a vontade de Deus em meio às diversas opções que a vida nos apresenta. Não se trata de uma fórmula mágica, mas de um processo espiritual que exige humildade, paciência e, acima de tudo, uma vida de oração sincera. Deus não joga charadas conosco; Ele deseja que sejamos felizes e realizados em nossa vocação.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Três Pilares do Discernimento
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Santo Inácio de Loyola, mestre do discernimento, ensina que devemos olhar para três direções:
                            </p>

                            <QuizCTA />

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. A Oração (O Diálogo)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                O discernimento começa de joelhos. É na oração que apresentamos ao Senhor nossos desejos, medos e dúvidas. Peça a graça da indiferença santa: o desejo de querer apenas o que Deus quer, independentemente de nossas preferências pessoais.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. A Realidade (Os Sinais)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Deus fala através das circunstâncias, das nossas capacidades naturais e das necessidades do mundo. Se você deseja ser médico, mas não suporta ver sangue, talvez esse não seja o caminho. A vontade de Deus geralmente se manifesta na intersecção entre nossos talentos e o serviço ao próximo.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. A Paz Interior (A Confirmação)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Um sinal clássico da vontade de Deus é a paz profunda, mesmo em meio às dificuldades. Se uma decisão traz uma agitação constante, ansiedade ou falta de liberdade interior, é preciso parar e reavaliar. A voz de Deus é mansa e traz serenidade.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Vocação: O Chamado Universal à Santidade
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Antes de discernir se você deve casar, ser padre ou leigo consagrado, lembre-se que todos temos uma vocação primária: a santidade. O discernimento vocacional específico serve para descobrir <strong>como</strong> você viverá essa santidade no mundo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Papel do Diretor Espiritual
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ninguém discerne bem sozinho. Ter um padre ou um leigo experiente para acompanhar sua jornada é fundamental. O diretor espiritual ajuda a identificar as armadilhas do ego e as inspirações do Espírito, servindo como um espelho para sua alma.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Senhor, o que queres que eu faça?"
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Francisco de Assis
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="discernimento-vocacional" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você conhece o propósito de Deus para você?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e receba uma reflexão sobre sua caminhada espiritual e como você pode estar mais atento aos sinais de Deus em sua vida.
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

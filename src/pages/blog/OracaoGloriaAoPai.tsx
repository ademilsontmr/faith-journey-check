import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoGloriaAoPai() {
    return (
        <>
            <Helmet>
                <title>Glória ao Pai: A Doxologia que Glorifica a Trindade | Bom Católico</title>
                <meta name="description" content="Aprenda o Glória ao Pai completo e descubra o significado desta pequena doxologia que louva a Santíssima Trindade e é rezada no Terço e na Liturgia das Horas." />
                <meta name="keywords" content="glória ao pai, gloria patri, doxologia, glória ao pai ao filho, como rezar glória, oração da trindade, glória ao pai completo, terço rosário, liturgia das horas, louvor a deus" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-gloria-ao-pai" />
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
                            <span className="text-text">Glória ao Pai</span>
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
                                    Orações
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    30 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    6 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Glória ao Pai: A Doxologia que Glorifica a Trindade
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O Glória ao Pai é uma das orações mais antigas da Igreja. Em poucas palavras, louvamos a Santíssima Trindade e proclamamos sua eternidade.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Sparkles className="w-24 h-24 text-yellow-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração do Glória ao Pai</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Glória ao Pai,<br />
                                    ao Filho<br />
                                    e ao Espírito Santo.<br />
                                    Como era no princípio,<br />
                                    agora e sempre.<br />
                                    Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Glória ao Pai, também chamado de "Doxologia Menor" (do grego <em>doxa</em> = glória + <em>logos</em> = palavra), é uma fórmula de louvor à Santíssima Trindade usada desde os primeiros séculos do cristianismo. É uma oração de pura adoração, sem pedidos — apenas glorificação.
                            </p>

                            <QuizCTA
                                title="Você conhece as orações do Terço?"
                                description="O Glória ao Pai é rezado após cada dezena do Rosário. Faça nosso quiz e descubra como aprofundar sua devoção mariana."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Significado de Cada Parte
                            </h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Glória ao Pai, ao Filho e ao Espírito Santo"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Damos glória às três Pessoas da Santíssima Trindade. "Glória" significa reconhecer a grandeza, a majestade e a santidade de Deus. É o mesmo louvor que os anjos cantam no céu: "Santo, Santo, Santo é o Senhor" (Isaías 6,3).
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Como era no princípio"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Proclamamos que Deus é eterno — Ele já existia antes de tudo, "no princípio" (João 1,1). A glória de Deus não começou em algum momento; ela sempre foi.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Agora e sempre"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                A glória de Deus permanece no presente ("agora") e continuará para sempre. Não há passado, presente ou futuro para Deus — Ele é o "Eu Sou" (Êxodo 3,14), eternamente presente.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Quando Rezamos o Glória ao Pai?
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Após cada dezena do <Link to="/blog/como-rezar-rosario" className="text-accent hover:underline">Santo Rosário</Link></li>
                                <li>Ao final de cada Salmo na Liturgia das Horas</li>
                                <li>No início e fim de muitas orações</li>
                                <li>Na <Link to="/blog/significado-missa" className="text-accent hover:underline">Santa Missa</Link>, após o Salmo Responsorial</li>
                                <li>Em momentos de louvor e adoração</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Origem Histórica
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Glória ao Pai surgiu nos primeiros séculos como resposta às heresias que negavam a divindade do Filho ou do Espírito Santo. Ao rezá-lo, os cristãos afirmavam que as três Pessoas são igualmente divinas e dignas de glória. O Concílio de Niceia (325) consolidou esta fé no <Link to="/blog/oracao-credo-apostolico" className="text-accent hover:underline">Credo</Link>.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Glória ao Pai no Terço
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                No Santo Rosário, após cada dezena de <Link to="/blog/oracao-ave-maria" className="text-accent hover:underline">Ave Marias</Link>, rezamos o Glória ao Pai. Este momento é uma pausa de louvor, elevando nossa mente da meditação dos mistérios para a adoração da Trindade. Muitos acrescentam também a <Link to="/blog/oracao-fatima" className="text-accent hover:underline">Oração de Fátima</Link> após o Glória.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A glória de Deus é o homem vivo, e a vida do homem é a visão de Deus."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Santo Irineu de Lyon
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-gloria-ao-pai" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer aprofundar sua vida de oração?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como as orações fundamentais podem transformar seu relacionamento com Deus.
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

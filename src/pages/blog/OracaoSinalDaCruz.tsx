import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoSinalDaCruz() {
    return (
        <>
            <Helmet>
                <title>Sinal da Cruz: O Gesto que Marca Nossa Fé | Bom Católico</title>
                <meta name="description" content="Aprenda o Sinal da Cruz corretamente e descubra o significado profundo deste gesto que nos identifica como cristãos e invoca a Santíssima Trindade." />
                <meta name="keywords" content="sinal da cruz, como fazer sinal da cruz, em nome do pai, santíssima trindade, gesto católico, sinal da cruz significado, oração católica, benzimento, sinal da cruz correto, cruz católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-sinal-da-cruz" />
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
                            <span className="text-text">Sinal da Cruz</span>
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
                                    7 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Sinal da Cruz: O Gesto que Marca Nossa Fé
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O Sinal da Cruz é o primeiro gesto que aprendemos como católicos. Simples e profundo, ele resume toda a nossa fé na Santíssima Trindade e na Redenção.
                            </p>
                        </header>

                        <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
                            <Cross className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração do Sinal da Cruz</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Em nome do Pai,<br />
                                    e do Filho,<br />
                                    e do Espírito Santo.<br />
                                    Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Sinal da Cruz é a oração mais curta e mais frequente do católico. Com ele começamos e terminamos nossas orações, a Missa, os sacramentos e tantos momentos do dia. É um gesto que nos identifica como discípulos de Cristo crucificado e ressuscitado.
                            </p>

                            <QuizCTA
                                title="Você conhece as orações fundamentais?"
                                description="O Sinal da Cruz é a porta de entrada para toda oração católica. Faça nosso quiz e descubra como aprofundar sua vida de fé."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Fazer o Sinal da Cruz Corretamente
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Com a mão direita aberta, tocamos:
                            </p>
                            <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                                <li><strong>A testa</strong> — dizendo "Em nome do Pai" (Deus está acima de tudo, governa nossa mente)</li>
                                <li><strong>O peito</strong> — dizendo "e do Filho" (Jesus desceu do céu e habita em nosso coração)</li>
                                <li><strong>O ombro esquerdo</strong> — dizendo "e do Espírito" (passamos do pecado...)</li>
                                <li><strong>O ombro direito</strong> — dizendo "Santo" (...para a graça)</li>
                                <li><strong>Juntamos as mãos</strong> — dizendo "Amém" (assim seja)</li>
                            </ol>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Significado Profundo
                            </h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                Profissão de Fé na Trindade
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Ao invocar o Pai, o Filho e o Espírito Santo, professamos nossa fé no mistério central do cristianismo: um só Deus em três Pessoas. Cada vez que fazemos o Sinal da Cruz, renovamos nosso <Link to="/blog/oracao-credo-apostolico" className="text-accent hover:underline">Credo</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                Memória da Redenção
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                O gesto da cruz nos lembra que fomos salvos pelo sacrifício de Cristo. A cruz, que era instrumento de tortura, tornou-se símbolo de amor e vitória sobre a morte. Saiba mais sobre o <Link to="/blog/significado-crucifixo" className="text-accent hover:underline">significado do crucifixo</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                Proteção Espiritual
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Desde os primeiros séculos, os cristãos usam o Sinal da Cruz como proteção contra o mal. São Cirilo de Jerusalém ensinava: "Não te envergonhes de confessar o Crucificado. Faz com confiança o sinal da cruz na fronte e em tudo."
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Quando Fazer o Sinal da Cruz?
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Ao acordar e ao dormir</li>
                                <li>Antes e depois das refeições</li>
                                <li>Ao iniciar e terminar qualquer oração</li>
                                <li>Ao entrar e sair de uma igreja</li>
                                <li>Ao passar diante de um templo ou cruz</li>
                                <li>Em momentos de tentação ou perigo</li>
                                <li>Ao receber uma bênção</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Sinal da Cruz na Liturgia
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Na <Link to="/blog/significado-missa" className="text-accent hover:underline">Santa Missa</Link>, fazemos o Sinal da Cruz várias vezes: no início, antes do Evangelho (na testa, lábios e peito), na bênção final. No <Link to="/blog/sacramento-batismo" className="text-accent hover:underline">Batismo</Link>, somos marcados com o sinal da cruz, tornando-nos propriedade de Cristo.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Quanto a mim, que eu jamais me glorie, a não ser na cruz de nosso Senhor Jesus Cristo."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Gálatas 6,14
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-sinal-da-cruz" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer aprofundar sua vida de oração?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como as orações fundamentais podem transformar seu dia a dia.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoSanto() {
    return (
        <>
            <Helmet>
                <title>Santo, Santo, Santo: O Hino dos Anjos na Missa | Bom Católico</title>
                <meta name="description" content="Aprenda o Santo (Sanctus) completo e descubra o significado deste hino celestial que cantamos na Missa, unindo nossa voz ao coro dos anjos que adoram a Deus." />
                <meta name="keywords" content="santo santo santo, sanctus, hino da missa, santo senhor deus do universo, hosana nas alturas, oração eucarística, missa católica, canto dos anjos, adoração a deus, bendito o que vem" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-santo" />
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
                        <Link to="/quiz"><Button variant="secondary" size="sm">Fazer o Quiz</Button></Link>
                    </div>
                </header>

                <div className="bg-background-muted/50 py-3">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
                            <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
                            <span className="text-text">Santo</span>
                        </nav>
                    </div>
                </div>

                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
                            <ArrowLeft className="w-4 h-4" />Voltar ao Blog
                        </Link>

                        <header className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Orações</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Santo, Santo, Santo: O Hino dos Anjos na Missa</h1>
                            <p className="text-xl text-text-muted leading-relaxed">O Santo (Sanctus) é o hino que cantamos na Missa unindo nossa voz ao coro celestial dos anjos que adoram a Deus eternamente.</p>
                        </header>

                        <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
                            <Sparkles className="w-24 h-24 text-amber-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração do Santo (Sanctus)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Santo, Santo, Santo,<br />Senhor, Deus do universo!<br />
                                    O céu e a terra proclamam a Vossa glória.<br />Hosana nas alturas!<br />
                                    Bendito o que vem em nome do Senhor!<br />Hosana nas alturas!
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Santo (em latim <em>Sanctus</em>) é cantado ou rezado no início da Oração Eucarística, após o Prefácio. É um dos momentos mais solenes da <Link to="/blog/significado-missa" className="text-accent hover:underline">Santa Missa</Link>, quando nos unimos aos anjos na adoração a Deus.
                            </p>

                            <QuizCTA
                                title="Você conhece as partes da Missa?"
                                description="O Santo é um dos momentos mais importantes da liturgia. Faça nosso quiz e aprofunde sua participação na Missa."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Origem Bíblica</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O "Santo, Santo, Santo" vem da visão do profeta Isaías no Templo: "Os serafins clamavam uns para os outros: Santo, Santo, Santo é o Senhor dos exércitos! Toda a terra está cheia de sua glória!" (Isaías 6,3). É o canto eterno dos anjos diante do trono de Deus.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Significado de Cada Parte</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Santo, Santo, Santo"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                A tripla repetição indica a perfeição absoluta da santidade de Deus. Em hebraico, repetir três vezes é o superlativo máximo. Deus é "santíssimo", absolutamente separado de todo pecado e imperfeição.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Senhor, Deus do universo"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Reconhecemos Deus como Senhor de toda a criação. Ele não é um deus local ou tribal, mas o Criador de tudo o que existe, visível e invisível.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"O céu e a terra proclamam a Vossa glória"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Toda a criação louva a Deus. Os céus narram a glória de Deus (Salmo 19,1). Na Missa, unimos nossa voz a este coro cósmico de louvor.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Hosana nas alturas"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Hosana" significa "salva-nos" em hebraico. Era a aclamação do povo quando Jesus entrou em Jerusalém no Domingo de Ramos. Pedimos a salvação que vem do alto.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Bendito o que vem em nome do Senhor"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Saudamos Jesus que vem ao altar na <Link to="/blog/sacramento-eucaristia" className="text-accent hover:underline">Eucaristia</Link>. Assim como o povo O aclamou em Jerusalém, nós O aclamamos quando Ele se torna presente sob as espécies do pão e do vinho.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Santo na Liturgia</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Santo marca a transição para a parte mais sagrada da Missa: a Oração Eucarística. Após cantá-lo, ajoelhamo-nos (onde é costume) para a consagração. É o momento de máxima reverência e adoração.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Santo, Santo, Santo é o Senhor, Deus todo-poderoso, Aquele que era, que é e que vem!"</p>
                                <p className="text-text-muted text-center mt-2">— Apocalipse 4,8</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-santo" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer participar melhor da Missa?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como viver mais profundamente cada momento da Santa Missa.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoAlmaDeCristo() {
    return (
        <>
            <Helmet>
                <title>Alma de Cristo: A Oração de União com Jesus | Bom Católico</title>
                <meta name="description" content="Aprenda a oração Alma de Cristo (Anima Christi) completa e descubra o significado desta bela prece que nos une intimamente a Jesus e Sua Paixão." />
                <meta name="keywords" content="alma de cristo, anima christi, oração alma de cristo, santificai-me, corpo de cristo salvai-me, oração eucarística, paixão de cristo, oração católica, santo inácio, exercícios espirituais" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-alma-de-cristo" />
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
                            <span className="text-text">Alma de Cristo</span>
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
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Alma de Cristo: A Oração de União com Jesus</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A oração Alma de Cristo (Anima Christi) é uma das mais belas preces de união com Jesus, especialmente após a Comunhão.</p>
                        </header>

                        <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-red-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração Alma de Cristo (Anima Christi)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Alma de Cristo, santificai-me.<br />Corpo de Cristo, salvai-me.<br />
                                    Sangue de Cristo, inebriai-me.<br />Água do lado de Cristo, lavai-me.<br />
                                    Paixão de Cristo, confortai-me.<br />Ó bom Jesus, ouvi-me.<br />
                                    Dentro de Vossas chagas, escondei-me.<br />Não permitais que me separe de Vós.<br />
                                    Do maligno inimigo, defendei-me.<br />Na hora da minha morte, chamai-me.<br />
                                    E mandai-me ir para Vós,<br />para que com os Vossos Santos Vos louve<br />
                                    por todos os séculos dos séculos. Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                A oração Alma de Cristo (em latim <em>Anima Christi</em>) data do século XIV e foi popularizada por Santo Inácio de Loyola, que a colocou no início de seus Exercícios Espirituais. É uma oração de profunda intimidade com Jesus, especialmente após a <Link to="/blog/sacramento-eucaristia" className="text-accent hover:underline">Comunhão</Link>.
                            </p>

                            <QuizCTA
                                title="Você conhece a devoção eucarística?"
                                description="A oração Alma de Cristo nos une a Jesus. Faça nosso quiz e aprofunde sua vida espiritual."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Significado de Cada Invocação</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Alma de Cristo, santificai-me"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos que a alma humana de Jesus, unida à divindade, nos santifique. A santidade de Cristo é a fonte de nossa santificação.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Corpo de Cristo, salvai-me"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O Corpo de Cristo, oferecido na cruz e recebido na Eucaristia, é o instrumento de nossa salvação. Saiba mais sobre a <Link to="/blog/eucaristia-presenca-real" className="text-accent hover:underline">presença real de Jesus na Eucaristia</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Sangue de Cristo, inebriai-me"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos para sermos "embriagados" pelo amor de Cristo, como os apóstolos em Pentecostes pareciam embriagados pelo Espírito. É uma entrega total ao amor divino.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Água do lado de Cristo, lavai-me"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Do lado de Cristo na cruz brotou sangue e água (João 19,34). A água simboliza o <Link to="/blog/sacramento-batismo" className="text-accent hover:underline">Batismo</Link> que nos purifica do pecado.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Dentro de Vossas chagas, escondei-me"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                As chagas de Cristo são nosso refúgio. Nelas encontramos proteção contra o mal e consolo nas tribulações. São Bernardo dizia: "Nas chagas de Cristo habito seguro."
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Na hora da minha morte, chamai-me"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos a graça de uma boa morte, com Jesus nos chamando para Si. É o mesmo pedido da <Link to="/blog/oracao-ave-maria" className="text-accent hover:underline">Ave Maria</Link>: "agora e na hora da nossa morte."
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quando Rezar o Alma de Cristo?</h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Após a Comunhão, em ação de graças</li>
                                <li>Durante a <Link to="/blog/adoracao-eucaristica" className="text-accent hover:underline">Adoração Eucarística</Link></li>
                                <li>Em momentos de tentação ou dificuldade</li>
                                <li>Antes de dormir</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Não permitais que me separe de Vós."</p>
                                <p className="text-text-muted text-center mt-2">— Oração Alma de Cristo</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-alma-de-cristo" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua união com Jesus?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como viver mais intensamente a presença de Cristo em sua vida.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

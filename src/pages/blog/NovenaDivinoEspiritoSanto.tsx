import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NovenaDivinoEspiritoSanto() {
    return (
        <>
            <Helmet>
                <title>Novena do Divino Espírito Santo: Renovação Espiritual | Bom Católico</title>
                <meta name="description" content="Reze a Novena do Divino Espírito Santo completa. Forte tradição no Brasil, especialmente no Sudeste e Centro-Oeste, ligada à renovação espiritual e Pentecostes." />
                <meta name="keywords" content="novena divino espírito santo, novena espírito santo, pentecostes novena, festa do divino, sete dons espírito santo, novena renovação espiritual, como rezar novena espírito santo, pomba divino, bandeira do divino, folias do divino" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/novena-divino-espirito-santo" />
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
                            <span className="text-text">Novena do Divino Espírito Santo</span>
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
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Novenas</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena do Divino Espírito Santo</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Novena do Divino Espírito Santo é uma das mais antigas da Igreja, rezada desde os tempos apostólicos em preparação para Pentecostes. No Brasil, é muito popular no Sudeste e Centro-Oeste.</p>
                        </header>

                        <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-red-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">A Origem da Novena</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Esta é a primeira novena da história da Igreja. Após a Ascensão de Jesus, os apóstolos permaneceram em oração com Maria durante nove dias, até receberem o Espírito Santo em Pentecostes. No Brasil, a Festa do Divino é celebrada com grande devoção, especialmente em Goiás, Minas Gerais e São Paulo.
                            </p>

                            <QuizCTA
                                title="Você conhece os dons do Espírito Santo?"
                                description="O Espírito Santo nos dá sete dons preciosos. Faça nosso quiz e descubra mais sobre eles."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Rezar a Novena</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A novena começa na sexta-feira após a Ascensão e termina no sábado antes de Pentecostes. Cada dia é dedicado a um dos <Link to="/blog/dons-espirito-santo" className="text-accent hover:underline">sete dons do Espírito Santo</Link>, mais dois dias para os frutos e a missão.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração Inicial (todos os dias)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Vinde, Espírito Santo,<br />
                                    enchei os corações dos vossos fiéis<br />
                                    e acendei neles o fogo do vosso amor.<br />
                                    Enviai o vosso Espírito e tudo será criado,<br />
                                    e renovareis a face da terra.<br /><br />
                                    Oremos: Ó Deus, que instruístes os corações dos vossos fiéis<br />
                                    com a luz do Espírito Santo,<br />
                                    fazei que apreciemos retamente todas as coisas<br />
                                    segundo o mesmo Espírito<br />
                                    e gozemos sempre da sua consolação.<br />
                                    Por Cristo, Senhor nosso. Amém.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Nove Dias da Novena</h2>
                            
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1º Dia - Dom da Sabedoria</h3>
                            <p className="text-text leading-relaxed mb-4">O <Link to="/blog/dom-sabedoria-espirito-santo" className="text-accent hover:underline">dom da Sabedoria</Link> nos faz ver tudo com os olhos de Deus e saborear as coisas divinas.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2º Dia - Dom do Entendimento</h3>
                            <p className="text-text leading-relaxed mb-4">O <Link to="/blog/dom-entendimento-espirito-santo" className="text-accent hover:underline">dom do Entendimento</Link> nos ajuda a penetrar nas verdades da fé e compreender os mistérios de Deus.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3º Dia - Dom do Conselho</h3>
                            <p className="text-text leading-relaxed mb-4">O <Link to="/blog/dom-conselho-espirito-santo" className="text-accent hover:underline">dom do Conselho</Link> nos ilumina nas decisões difíceis e nos ajuda a discernir a vontade de Deus.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4º Dia - Dom da Fortaleza</h3>
                            <p className="text-text leading-relaxed mb-4">O <Link to="/blog/dom-fortaleza-espirito-santo" className="text-accent hover:underline">dom da Fortaleza</Link> nos dá coragem para enfrentar as dificuldades e perseverar no bem.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">5º Dia - Dom da Ciência</h3>
                            <p className="text-text leading-relaxed mb-4">O <Link to="/blog/dom-ciencia-espirito-santo" className="text-accent hover:underline">dom da Ciência</Link> nos faz conhecer o valor das criaturas e usá-las para a glória de Deus.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">6º Dia - Dom da Piedade</h3>
                            <p className="text-text leading-relaxed mb-4">O <Link to="/blog/dom-piedade-espirito-santo" className="text-accent hover:underline">dom da Piedade</Link> nos faz tratar Deus como Pai amoroso e os outros como irmãos.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">7º Dia - Dom do Temor de Deus</h3>
                            <p className="text-text leading-relaxed mb-4">O <Link to="/blog/dom-temor-deus-espirito-santo" className="text-accent hover:underline">dom do Temor de Deus</Link> nos faz evitar o pecado por amor a Deus, não por medo.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">8º Dia - Os Frutos do Espírito</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos os frutos do Espírito: amor, alegria, paz, paciência, benignidade, bondade, fidelidade, mansidão e domínio próprio.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">9º Dia - A Missão do Espírito</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos que o Espírito Santo nos envie em missão, como enviou os apóstolos em Pentecostes.</p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Oração Final</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Após a meditação de cada dia, reza-se: 3 <Link to="/blog/oracao-ave-maria" className="text-accent hover:underline">Ave Marias</Link>, 1 <Link to="/blog/oracao-pai-nosso" className="text-accent hover:underline">Pai Nosso</Link>, 1 <Link to="/blog/oracao-gloria-ao-pai" className="text-accent hover:underline">Glória ao Pai</Link> e o <Link to="/blog/oracao-vinde-espirito-criador" className="text-accent hover:underline">Veni Creator</Link>.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Recebereis a força do Espírito Santo que descerá sobre vós, e sereis minhas testemunhas."</p>
                                <p className="text-text-muted text-center mt-2">— Atos dos Apóstolos 1,8</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="novena-divino-espirito-santo" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer conhecer melhor o Espírito Santo?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como os dons do Espírito podem transformar sua vida.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

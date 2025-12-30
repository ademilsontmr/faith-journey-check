import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoEspiritoSanto() {
    return (
        <>
            <Helmet>
                <title>Oração ao Espírito Santo: Vinde Espírito Santo | Bom Católico</title>
                <meta name="description" content="Aprenda a Oração ao Espírito Santo completa e descubra como invocar o Paráclito para iluminar sua mente, inflamar seu coração e guiar seus passos." />
                <meta name="keywords" content="oração ao espírito santo, vinde espírito santo, oração do espírito santo, como invocar espírito santo, paráclito, fogo do amor, dons do espírito santo, pentecostes, oração católica, espírito consolador" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-espirito-santo" />
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
                            <span className="text-text">Oração ao Espírito Santo</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Oração ao Espírito Santo: Vinde Espírito Santo</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Oração ao Espírito Santo invoca a terceira Pessoa da Trindade para iluminar nossa mente e inflamar nosso coração com o fogo do amor divino.</p>
                        </header>

                        <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-orange-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração ao Espírito Santo</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Vinde, Espírito Santo,<br />enchei os corações dos vossos fiéis<br />
                                    e acendei neles o fogo do Vosso amor.<br />Enviai o Vosso Espírito e tudo será criado,<br />
                                    e renovareis a face da terra.<br /><br />
                                    Oremos: Ó Deus, que instruístes os corações dos vossos fiéis<br />com a luz do Espírito Santo,<br />
                                    fazei que apreciemos retamente todas as coisas<br />segundo o mesmo Espírito<br />
                                    e gozemos sempre da Sua consolação.<br />Por Cristo, Senhor nosso. Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                Esta oração é uma das mais belas invocações ao Espírito Santo. Ela pede que o Paráclito (Consolador) venha habitar em nossos corações, trazendo luz, amor e renovação.
                            </p>

                            <QuizCTA
                                title="Você conhece os Dons do Espírito Santo?"
                                description="O Espírito Santo nos concede sete dons preciosos. Faça nosso quiz e descubra como eles podem transformar sua vida."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Significado da Oração</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Vinde, Espírito Santo"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Invocamos a vinda do Espírito, assim como os apóstolos no Cenáculo esperaram Pentecostes. O Espírito não vem automaticamente — precisamos desejá-Lo, invocá-Lo, abrir nosso coração para Sua ação.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Enchei os corações dos vossos fiéis"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos que o Espírito não apenas nos visite, mas nos preencha completamente. Um coração cheio do Espírito Santo não tem espaço para o pecado, o medo ou a tristeza.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Acendei neles o fogo do Vosso amor"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O fogo é símbolo do Espírito Santo desde Pentecostes, quando línguas de fogo pousaram sobre os apóstolos. Este fogo purifica, ilumina e aquece — transforma corações frios em brasas de amor.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Renovareis a face da terra"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O Espírito Santo é o Criador que renova todas as coisas. Ele pode renovar nossa vida, nossa família, nossa comunidade e o mundo inteiro. Nada é impossível para Ele.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Sete Dons do Espírito Santo</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ao invocar o Espírito Santo, pedimos também Seus <Link to="/blog/sete-dons-espirito-santo-como-usar" className="text-accent hover:underline">sete dons</Link>:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><Link to="/blog/dom-sabedoria-espirito-santo" className="text-accent hover:underline">Sabedoria</Link> — ver as coisas como Deus vê</li>
                                <li><Link to="/blog/dom-entendimento-espirito-santo" className="text-accent hover:underline">Entendimento</Link> — compreender as verdades da fé</li>
                                <li><Link to="/blog/dom-conselho-espirito-santo" className="text-accent hover:underline">Conselho</Link> — discernir o que fazer</li>
                                <li><Link to="/blog/dom-fortaleza-espirito-santo" className="text-accent hover:underline">Fortaleza</Link> — coragem para enfrentar dificuldades</li>
                                <li><Link to="/blog/dom-ciencia-espirito-santo" className="text-accent hover:underline">Ciência</Link> — conhecer o valor das criaturas</li>
                                <li><Link to="/blog/dom-piedade-espirito-santo" className="text-accent hover:underline">Piedade</Link> — amor filial a Deus</li>
                                <li><Link to="/blog/dom-temor-deus-espirito-santo" className="text-accent hover:underline">Temor de Deus</Link> — respeito reverente</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quando Rezar ao Espírito Santo?</h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Antes de tomar decisões importantes</li>
                                <li>Ao iniciar um trabalho ou estudo</li>
                                <li>Antes da oração e leitura da Bíblia</li>
                                <li>Em momentos de confusão ou dúvida</li>
                                <li>Na preparação para a <Link to="/blog/sacramento-crisma" className="text-accent hover:underline">Crisma</Link></li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"O Espírito sopra onde quer; ouves a sua voz, mas não sabes de onde vem nem para onde vai."</p>
                                <p className="text-text-muted text-center mt-2">— João 3,8</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-espirito-santo" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer conhecer os Dons do Espírito?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como o Espírito Santo pode transformar sua vida com Seus dons.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

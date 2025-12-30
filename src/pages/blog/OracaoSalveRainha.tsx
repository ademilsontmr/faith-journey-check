import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoSalveRainha() {
    return (
        <>
            <Helmet>
                <title>Salve Rainha: A Oração à Mãe de Misericórdia | Bom Católico</title>
                <meta name="description" content="Aprenda a Salve Rainha completa e descubra o significado desta bela oração mariana que invoca Nossa Senhora como Mãe de misericórdia e nossa advogada." />
                <meta name="keywords" content="salve rainha, salve rainha oração, mãe de misericórdia, oração mariana, nossa senhora rainha, salve rainha completa, como rezar salve rainha, vida doçura esperança, advogada nossa, terço rosário" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-salve-rainha" />
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
                            <span className="text-text">Salve Rainha</span>
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
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Salve Rainha: A Oração à Mãe de Misericórdia</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Salve Rainha é uma das mais belas orações marianas, cantada há séculos pela Igreja para invocar a intercessão de Nossa Senhora.</p>
                        </header>

                        <div className="aspect-video bg-purple-50 rounded-2xl flex items-center justify-center mb-10">
                            <Crown className="w-24 h-24 text-purple-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração da Salve Rainha</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Salve, Rainha, Mãe de misericórdia,<br />vida, doçura e esperança nossa, salve!<br />
                                    A Vós bradamos, os degredados filhos de Eva.<br />A Vós suspiramos, gemendo e chorando<br />
                                    neste vale de lágrimas.<br />Eia, pois, advogada nossa,<br />
                                    esses Vossos olhos misericordiosos a nós volvei.<br />E depois deste desterro,<br />
                                    mostrai-nos Jesus, bendito fruto do Vosso ventre.<br />Ó clemente, ó piedosa, ó doce sempre Virgem Maria.<br />
                                    Rogai por nós, Santa Mãe de Deus,<br />para que sejamos dignos das promessas de Cristo. Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                A Salve Rainha (em latim <em>Salve Regina</em>) é uma antífona mariana composta provavelmente no século XI. É rezada ao final do <Link to="/blog/como-rezar-rosario" className="text-accent hover:underline">Santo Rosário</Link> e nas Completas (oração da noite) da Liturgia das Horas.
                            </p>

                            <QuizCTA
                                title="Você conhece a devoção mariana?"
                                description="A Salve Rainha é uma das orações mais queridas à Nossa Senhora. Faça nosso quiz e aprofunde sua relação com a Mãe de Deus."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Significado de Cada Invocação</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Salve, Rainha, Mãe de misericórdia"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Saudamos Maria como Rainha do céu e da terra, coroada por seu Filho. Ela é "Mãe de misericórdia" porque é Mãe dAquele que é a própria Misericórdia — Jesus Cristo.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Vida, doçura e esperança nossa"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Maria é chamada "vida" porque nos deu Jesus, que é a Vida. É "doçura" porque sua presença traz consolo. É "esperança" porque intercede por nós e nos conduz ao céu.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Os degredados filhos de Eva"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Reconhecemos nossa condição de exilados, afastados do Paraíso pelo <Link to="/blog/pecado-original-redencao" className="text-accent hover:underline">pecado original</Link>. Somos peregrinos nesta terra, a caminho da pátria celeste.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Neste vale de lágrimas"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                A vida terrena é marcada por sofrimentos, provações e lágrimas. Mas não estamos sozinhos — temos uma Mãe que nos acompanha e consola.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Advogada nossa"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Maria intercede por nós diante de Deus. Como advogada, ela apresenta nossas causas ao Juiz misericordioso, seu próprio Filho. Saiba mais sobre <Link to="/blog/por-que-catolicos-rezam-santos" className="text-accent hover:underline">por que rezamos aos santos</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Mostrai-nos Jesus"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O objetivo final de toda devoção mariana é nos levar a Jesus. Maria sempre aponta para seu Filho: "Fazei tudo o que Ele vos disser" (João 2,5).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quando Rezar a Salve Rainha?</h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Ao final do <Link to="/blog/como-rezar-rosario" className="text-accent hover:underline">Santo Rosário</Link></li>
                                <li>Nas Completas (oração da noite)</li>
                                <li>Em momentos de aflição e necessidade</li>
                                <li>Nas festas marianas</li>
                                <li>Ao pedir a intercessão de Nossa Senhora</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Quem se refugia em Maria não se perde, quem a ela suplica não se desespera."</p>
                                <p className="text-text-muted text-center mt-2">— São Bernardo de Claraval</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-salve-rainha" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua devoção mariana?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como Nossa Senhora pode transformar sua vida espiritual.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoVindeEspiritoCriador() {
    return (
        <>
            <Helmet>
                <title>Vinde Espírito Criador: O Hino de Pentecostes | Bom Católico</title>
                <meta name="description" content="Aprenda o Veni Creator Spiritus completo e descubra o significado deste hino milenar que invoca o Espírito Santo em ordenações, concílios e momentos solenes." />
                <meta name="keywords" content="veni creator spiritus, vinde espírito criador, hino ao espírito santo, pentecostes, ordenação sacerdotal, crisma, espírito santo, hino católico, oração espírito santo, sete dons" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-vinde-espirito-criador" />
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
                            <span className="text-text">Vinde Espírito Criador</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Vinde Espírito Criador: O Hino de Pentecostes</h1>
                            <p className="text-xl text-text-muted leading-relaxed">O Veni Creator Spiritus é um dos hinos mais solenes da Igreja, cantado em ordenações, concílios e na festa de Pentecostes.</p>
                        </header>

                        <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-orange-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Vinde Espírito Criador (Veni Creator Spiritus)</h3>
                                <p className="text-text italic text-center leading-relaxed text-sm">
                                    Vinde, Espírito Criador, visitai as almas dos Vossos fiéis,<br />
                                    enchei de graça celestial os corações que criastes.<br /><br />
                                    Vós sois chamado o Consolador, dom do Deus Altíssimo,<br />
                                    fonte viva, fogo, caridade e unção espiritual.<br /><br />
                                    Sois o autor dos sete dons, dedo da mão de Deus,<br />
                                    promessa do Pai, que enriqueceis as línguas com a Palavra.<br /><br />
                                    Acendei a luz nos sentidos, infundi o amor nos corações,<br />
                                    sustentai com perpétua força a fraqueza do nosso corpo.<br /><br />
                                    Afastai para longe o inimigo, dai-nos prontamente a paz,<br />
                                    sendo Vós o nosso guia, evitaremos todo o mal.<br /><br />
                                    Por Vós possamos conhecer o Pai e também o Filho,<br />
                                    e em Vós, Espírito de ambos, creiamos em todo o tempo. Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Veni Creator Spiritus é um hino do século IX, atribuído a Rabano Mauro. É cantado em momentos solenes da vida da Igreja: ordenações sacerdotais, eleição de papas, concílios, <Link to="/blog/sacramento-crisma" className="text-accent hover:underline">Crisma</Link> e na festa de Pentecostes.
                            </p>

                            <QuizCTA
                                title="Você conhece os Dons do Espírito Santo?"
                                description="O Veni Creator invoca os sete dons do Espírito. Faça nosso quiz e descubra como eles podem transformar sua vida."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Títulos do Espírito Santo</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Espírito Criador"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O Espírito Santo é Criador junto com o Pai e o Filho. "O Espírito de Deus pairava sobre as águas" (Gênesis 1,2). Ele continua criando e renovando todas as coisas.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Consolador"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus prometeu enviar o Paráclito, o Consolador (João 14,16). O Espírito consola, fortalece e defende os fiéis em suas tribulações.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Fonte viva, fogo, caridade"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O Espírito é fonte de água viva (João 7,38-39), fogo que purifica e inflama (Atos 2,3), e o próprio Amor entre o Pai e o Filho derramado em nossos corações (Romanos 5,5).
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Autor dos sete dons"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O Espírito nos concede os <Link to="/blog/sete-dons-espirito-santo-como-usar" className="text-accent hover:underline">sete dons</Link>: sabedoria, entendimento, conselho, fortaleza, ciência, piedade e temor de Deus (Isaías 11,2-3).
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Dedo da mão de Deus"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus disse que expulsava demônios "pelo dedo de Deus" (Lucas 11,20), referindo-se ao Espírito Santo. É o poder de Deus em ação no mundo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quando Cantamos o Veni Creator?</h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Na festa de Pentecostes</li>
                                <li>Nas ordenações sacerdotais e episcopais</li>
                                <li>Na eleição do Papa (Conclave)</li>
                                <li>Na abertura de Concílios</li>
                                <li>Na <Link to="/blog/sacramento-crisma" className="text-accent hover:underline">Crisma</Link></li>
                                <li>Antes de decisões importantes</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do Vosso amor."</p>
                                <p className="text-text-muted text-center mt-2">— <Link to="/blog/oracao-espirito-santo" className="text-accent hover:underline">Oração ao Espírito Santo</Link></p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-vinde-espirito-criador" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer conhecer os Dons do Espírito?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como o Espírito Santo pode transformar sua vida.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

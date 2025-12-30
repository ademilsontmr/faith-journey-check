import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoComunhaoEspiritual() {
    return (
        <>
            <Helmet>
                <title>Comunhão Espiritual: Quando Não Podemos Comungar | Bom Católico</title>
                <meta name="description" content="Aprenda a oração da Comunhão Espiritual e descubra como receber Jesus espiritualmente quando não é possível comungar sacramentalmente na Missa." />
                <meta name="keywords" content="comunhão espiritual, oração comunhão espiritual, quando não pode comungar, desejo de comungar, comunhão de desejo, missa online, comunhão sacramental, eucaristia espiritual, receber jesus, comunhão católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-comunhao-espiritual" />
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
                            <span className="text-text">Comunhão Espiritual</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Comunhão Espiritual: Quando Não Podemos Comungar</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Comunhão Espiritual é uma forma de receber Jesus pelo desejo quando não é possível comungar sacramentalmente.</p>
                        </header>

                        <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-sky-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração da Comunhão Espiritual</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Meu Jesus, eu creio que estais<br />realmente presente no Santíssimo Sacramento.<br />
                                    Amo-Vos sobre todas as coisas<br />e desejo ardentemente receber-Vos em minha alma.<br />
                                    Já que não posso receber-Vos sacramentalmente,<br />vinde ao menos espiritualmente ao meu coração.<br />
                                    Como se já Vos tivesse recebido,<br />abraço-Vos e uno-me inteiramente a Vós.<br />
                                    Não permitais que jamais me separe de Vós. Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                A Comunhão Espiritual é uma prática antiga da Igreja, recomendada por santos como Santo Tomás de Aquino e Santo Afonso de Ligório. Ela nos permite unir-nos a Jesus pelo desejo quando não podemos recebê-Lo sacramentalmente.
                            </p>

                            <QuizCTA
                                title="Você conhece a Eucaristia?"
                                description="A Comunhão Espiritual é um ato de amor a Jesus Eucarístico. Faça nosso quiz e aprofunde sua devoção."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quando Fazer a Comunhão Espiritual?</h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Quando está doente e não pode ir à Missa</li>
                                <li>Quando assiste à Missa online ou pela TV</li>
                                <li>Quando está em pecado mortal e ainda não se confessou</li>
                                <li>Quando não guardou o jejum eucarístico</li>
                                <li>Durante a <Link to="/blog/adoracao-eucaristica" className="text-accent hover:underline">Adoração Eucarística</Link></li>
                                <li>Em qualquer momento do dia, por devoção</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Elementos da Comunhão Espiritual</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Fé na Presença Real</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Eu creio que estais realmente presente" — A Comunhão Espiritual pressupõe a fé na <Link to="/blog/eucaristia-presenca-real" className="text-accent hover:underline">presença real de Jesus na Eucaristia</Link>. Cremos que Ele está verdadeiramente presente sob as espécies do pão e do vinho.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Amor e Desejo</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Amo-Vos sobre todas as coisas e desejo ardentemente receber-Vos" — O amor a Jesus e o desejo sincero de recebê-Lo são essenciais. Não é uma fórmula mágica, mas um ato de amor.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">União Espiritual</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Vinde ao menos espiritualmente ao meu coração" — Pedimos que Jesus venha habitar em nós pelo Espírito Santo, mesmo sem a comunhão sacramental.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Frutos da Comunhão Espiritual</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Embora não substitua a Comunhão sacramental, a Comunhão Espiritual produz frutos reais: aumento da graça, fortalecimento da fé, crescimento no amor a Jesus. Santo Tomás de Aquino ensina que ela pode produzir os mesmos efeitos da Comunhão sacramental, proporcionalmente ao fervor de quem a faz.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Comunhão Espiritual e a Sacramental</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Comunhão Espiritual não substitui a <Link to="/blog/sacramento-eucaristia" className="text-accent hover:underline">Comunhão sacramental</Link>. Quem pode comungar deve fazê-lo. Mas para quem está impedido, é um meio precioso de união com Cristo. Se está em pecado mortal, busque a <Link to="/blog/sacramento-confissao" className="text-accent hover:underline">Confissão</Link> o quanto antes.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Quando não puderes comungar sacramentalmente, comunga ao menos espiritualmente, com ardente desejo."</p>
                                <p className="text-text-muted text-center mt-2">— Santo Afonso de Ligório</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-comunhao-espiritual" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua devoção eucarística?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como viver mais intensamente o amor a Jesus Eucarístico.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

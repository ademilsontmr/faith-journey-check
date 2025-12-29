import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function CastidadeMundoModerno() {
    return (
        <>
            <Helmet>
                <title>Viver a Castidade no Mundo Moderno: Desafios e Graças | Bom Católico</title>
                <meta name="description" content="Entenda o verdadeiro significado da castidade cristã e como vivê-la no mundo atual. Um convite à liberdade e ao amor autêntico segundo o Evangelho." />
                <meta name="keywords" content="castidade, pureza, moral católica, amor autêntico, vida cristã, mundo moderno" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/castidade-mundo-moderno" />
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
                            <span className="text-text">Castidade no Mundo Moderno</span>
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
                                    Formação
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Viver a Castidade no Mundo Moderno: Desafios e Graças
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A castidade não é um "não" ao prazer, mas um "sim" ao amor verdadeiro. Descubra como esta virtude liberta o coração para amar como Cristo amou.
                            </p>
                        </header>

                        <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Falar de castidade hoje parece, para muitos, um anacronismo. Em uma cultura que prega a satisfação imediata de todos os impulsos, a proposta cristã da pureza é frequentemente ridicularizada ou mal compreendida. No entanto, a castidade é a virtude que ordena a nossa afetividade e sexualidade, integrando-as na pessoa humana para o bem do amor autêntico.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Que é Realmente a Castidade?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Catecismo da Igreja Católica ensina que a castidade significa a integração bem-sucedida da sexualidade na pessoa. Ela não é a negação da sexualidade, mas o seu domínio de si. Um coração casto é um coração livre, que não usa o outro como objeto de prazer, mas o respeita como imagem e semelhança de Deus.
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Castidade para Todos os Estados de Vida
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Muitos pensam que a castidade é apenas para os solteiros ou consagrados. Na verdade, todos os cristãos são chamados à castidade segundo o seu estado de vida:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Solteiros:</strong> Vivem a castidade na continência, preparando o coração para uma entrega futura ou para o serviço a Deus.</li>
                                <li><strong>Casados:</strong> Vivem a castidade na fidelidade conjugal e na abertura à vida, amando o cônjuge com um amor exclusivo e sacrificial.</li>
                                <li><strong>Consagrados:</strong> Vivem a castidade no celibato pelo Reino dos Céus, como sinal da união futura com Deus.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Desafios do Mundo Digital
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Hoje, a batalha pela pureza passa, em grande parte, pelas telas. A pornografia e a erotização precoce das redes sociais são venenos para a alma. Viver a castidade exige "custódia dos olhos" e prudência no uso da tecnologia. É preciso coragem para ser "contracorrente".
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Meios para Viver a Pureza
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ninguém é casto por esforço próprio. A castidade é um dom de Deus e uma tarefa humana. Os meios fundamentais são: a oração humilde, a confissão frequente (que cura nossas quedas), a Eucaristia (que fortalece a carne e o espírito) e a devoção à Virgem Maria, a Toda Pura.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A castidade é a flor das virtudes."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Francisco de Sales
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="castidade-mundo-moderno" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua busca pela santidade?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e receba uma orientação sobre como viver as virtudes cristãs e fortalecer seu caráter no seguimento de Jesus.
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

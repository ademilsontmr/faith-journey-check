import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoConfesso() {
    return (
        <>
            <Helmet>
                <title>Confesso a Deus: O Ato Penitencial da Missa | Bom Católico</title>
                <meta name="description" content="Aprenda o Confesso a Deus completo e descubra o significado desta oração do ato penitencial que rezamos no início da Santa Missa para reconhecer nossos pecados." />
                <meta name="keywords" content="confesso a deus, confiteor, ato penitencial, missa católica, minha culpa, confesso a deus todo poderoso, oração da missa, início da missa, pecados veniais, confesso completo" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-confesso" />
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
                            <span className="text-text">Confesso a Deus</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Confesso a Deus: O Ato Penitencial da Missa</h1>
                            <p className="text-xl text-text-muted leading-relaxed">O Confesso a Deus é a oração que rezamos no início da Missa para reconhecer nossos pecados e pedir perdão antes de participar dos santos mistérios.</p>
                        </header>

                        <div className="aspect-video bg-slate-50 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-slate-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração do Confesso (Confiteor)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Confesso a Deus todo-poderoso<br />e a vós, irmãos,<br />
                                    que pequei muitas vezes<br />por pensamentos e palavras,<br />
                                    atos e omissões,<br /><em>(batendo no peito)</em> por minha culpa, minha culpa,<br />
                                    minha tão grande culpa.<br />E peço à Virgem Maria,<br />
                                    aos anjos e santos<br />e a vós, irmãos,<br />
                                    que rogueis por mim a Deus, nosso Senhor.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Confesso a Deus (em latim <em>Confiteor</em>) é uma das formas do ato penitencial no início da <Link to="/blog/significado-missa" className="text-accent hover:underline">Santa Missa</Link>. É uma confissão pública e geral de nossos pecados, preparando-nos para participar dignamente dos santos mistérios.
                            </p>

                            <QuizCTA
                                title="Você sabe participar bem da Missa?"
                                description="O Confesso nos prepara para a Eucaristia. Faça nosso quiz e aprofunde sua participação na liturgia."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Significado de Cada Parte</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Confesso a Deus todo-poderoso e a vós, irmãos"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Confessamos nossos pecados diante de Deus e da comunidade. O pecado não é apenas uma ofensa a Deus, mas também fere o Corpo de Cristo, a <Link to="/blog/igreja-corpo-cristo" className="text-accent hover:underline">Igreja</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Por pensamentos e palavras, atos e omissões"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Reconhecemos que pecamos de várias formas: pensamentos maus, palavras que ferem, ações pecaminosas e também omissões — o bem que deixamos de fazer. Nenhuma área de nossa vida escapa ao exame.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Por minha culpa, minha culpa, minha tão grande culpa"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Batemos no peito três vezes, assumindo pessoalmente a responsabilidade por nossos pecados. Não culpamos os outros ou as circunstâncias — reconhecemos nossa própria culpa.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Peço à Virgem Maria, aos anjos e santos"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos a intercessão de toda a Igreja triunfante: Maria, os anjos e os santos. Eles rogam por nós diante de Deus. Saiba mais sobre <Link to="/blog/por-que-catolicos-rezam-santos" className="text-accent hover:underline">por que rezamos aos santos</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"E a vós, irmãos"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos também a oração da comunidade presente. Somos membros uns dos outros e nos ajudamos mutuamente no caminho da salvação.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Confesso e a Confissão Sacramental</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Confesso na Missa perdoa os pecados veniais, mas não substitui a <Link to="/blog/sacramento-confissao" className="text-accent hover:underline">Confissão sacramental</Link> para os pecados mortais. Quem está em pecado grave deve se confessar antes de comungar. Veja nosso <Link to="/blog/como-se-confessar-guia-completo" className="text-accent hover:underline">guia de como se confessar</Link>.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Se confessarmos os nossos pecados, Ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça."</p>
                                <p className="text-text-muted text-center mt-2">— 1 João 1,9</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-confesso" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer viver melhor a Missa?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como participar mais ativamente da Santa Missa.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

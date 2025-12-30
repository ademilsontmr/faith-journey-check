import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoSaoFrancisco() {
    return (
        <>
            <Helmet>
                <title>Oração de São Francisco: Senhor, Fazei-me Instrumento | Bom Católico</title>
                <meta name="description" content="Aprenda a Oração de São Francisco completa e descubra o significado desta bela prece que nos ensina a ser instrumentos de paz, amor e perdão no mundo." />
                <meta name="keywords" content="oração de são francisco, senhor fazei-me instrumento, oração da paz, são francisco de assis, instrumento da paz, onde houver ódio, oração franciscana, paz e bem, oração completa, espiritualidade franciscana" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-sao-francisco" />
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
                            <span className="text-text">Oração de São Francisco</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Oração de São Francisco: Senhor, Fazei-me Instrumento</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Oração de São Francisco é um hino à paz e ao amor que nos convida a ser instrumentos de Deus no mundo.</p>
                        </header>

                        <div className="aspect-video bg-green-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-green-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração de São Francisco</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Senhor, fazei-me instrumento de Vossa paz.<br />Onde houver ódio, que eu leve o amor;<br />
                                    Onde houver ofensa, que eu leve o perdão;<br />Onde houver discórdia, que eu leve a união;<br />
                                    Onde houver dúvida, que eu leve a fé;<br />Onde houver erro, que eu leve a verdade;<br />
                                    Onde houver desespero, que eu leve a esperança;<br />Onde houver tristeza, que eu leve a alegria;<br />
                                    Onde houver trevas, que eu leve a luz.<br /><br />
                                    Ó Mestre, fazei que eu procure mais<br />consolar que ser consolado;<br />
                                    compreender que ser compreendido;<br />amar que ser amado.<br />
                                    Pois é dando que se recebe,<br />é perdoando que se é perdoado,<br />
                                    e é morrendo que se vive para a vida eterna. Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                Embora atribuída a São Francisco de Assis, esta oração provavelmente foi composta no início do século XX. Independentemente de sua origem, ela captura perfeitamente o espírito franciscano de paz, simplicidade e amor. Saiba mais sobre <Link to="/blog/sao-francisco-ecologia-integral" className="text-accent hover:underline">São Francisco e a ecologia integral</Link>.
                            </p>

                            <QuizCTA
                                title="Você conhece a espiritualidade franciscana?"
                                description="A Oração de São Francisco nos ensina a ser instrumentos de paz. Faça nosso quiz e aprofunde sua vida espiritual."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Significado da Oração</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Senhor, fazei-me instrumento de Vossa paz"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Não pedimos paz para nós, mas para sermos canais da paz de Deus para os outros. Somos instrumentos nas mãos do Mestre — Ele é quem age através de nós.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">As Antíteses</h3>
                            <p className="text-text leading-relaxed mb-6">
                                A oração apresenta contrastes: ódio/amor, ofensa/perdão, discórdia/união, dúvida/fé, erro/verdade, desespero/esperança, tristeza/alegria, trevas/luz. Somos chamados a transformar o negativo em positivo pelo poder de Deus.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"É dando que se recebe"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                A segunda parte inverte a lógica do mundo. O caminho para a felicidade não é buscar ser servido, mas servir. Jesus ensinou: "Há mais felicidade em dar do que em receber" (Atos 20,35).
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"É morrendo que se vive"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O paradoxo cristão: morrendo para o egoísmo, nascemos para a vida eterna. Jesus disse: "Quem quiser salvar a sua vida, vai perdê-la; mas quem perder a sua vida por causa de mim, vai encontrá-la" (Mateus 16,25).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Viver a Oração de São Francisco</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Esta oração não é apenas para ser rezada, mas vivida. Cada dia nos oferece oportunidades de ser instrumentos de paz: em casa, no trabalho, nas redes sociais. Onde você pode levar amor hoje? A quem pode perdoar?
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">São Francisco de Assis</h2>
                            <p className="text-text leading-relaxed mb-6">
                                São Francisco (1181-1226) foi um dos santos mais amados da história. Filho de um rico comerciante, renunciou a tudo para seguir Cristo na pobreza radical. Fundou a Ordem Franciscana e é conhecido por seu amor à natureza e aos pobres. Seu lema era "Paz e Bem".
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível."</p>
                                <p className="text-text-muted text-center mt-2">— São Francisco de Assis</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-sao-francisco" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer ser instrumento de paz?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como viver a espiritualidade franciscana no dia a dia.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

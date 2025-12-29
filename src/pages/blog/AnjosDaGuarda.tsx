import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function AnjosDaGuarda() {
    return (
        <>
            <Helmet>
                <title>O Papel dos Anjos da Guarda em Nossa Vida | Bom Católico</title>
                <meta name="description" content="Conheça a doutrina católica sobre os Anjos da Guarda. Saiba como eles nos protegem, guiam e intercedem por nós em nossa jornada terrena." />
                <meta name="keywords" content="anjos da guarda, anjos, proteção divina, espiritualidade católica, intercessão" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/anjos-da-guarda" />
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
                            <span className="text-text">Anjos da Guarda</span>
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
                                    Devoções
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    7 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Papel dos Anjos da Guarda em Nossa Vida
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Você nunca está sozinho. Deus confiou a cada um de nós um companheiro celestial para nos guiar e proteger. Conheça a missão dos Anjos da Guarda.
                            </p>
                        </header>

                        <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A existência dos anjos é uma verdade de fé. O Catecismo da Igreja Católica ensina que, desde o início da vida até a morte, a vida humana é cercada pela proteção e intercessão dos anjos. Cada fiel tem ao seu lado um anjo como protetor e pastor para o conduzir à vida eterna.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Quem são os Anjos da Guarda?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Os anjos são seres puramente espirituais, dotados de inteligência e vontade. Eles são mensageiros de Deus e executores de Seus planos. O Anjo da Guarda é um presente pessoal de Deus para você; ele não é uma energia ou um símbolo, mas uma pessoa espiritual real que te ama e deseja sua salvação.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Missão do Anjo da Guarda
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A missão do seu anjo é tripla:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Proteger:</strong> Ele nos defende dos perigos físicos e, principalmente, dos perigos espirituais (as tentações do demônio).</li>
                                <li><strong>Guiar:</strong> Ele ilumina nossa inteligência para que possamos discernir a vontade de Deus e tomar boas decisões.</li>
                                <li><strong>Interceder:</strong> Ele apresenta nossas orações e boas obras diante do trono de Deus, intercedendo por nossas necessidades.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como se Relacionar com seu Anjo?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Muitas vezes esquecemos do nosso anjo porque ele age de forma silenciosa. No entanto, devemos cultivar uma amizade com ele:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Invoque-o diariamente:</strong> Reze a oração do "Santo Anjo" ao acordar e ao deitar.</li>
                                <li><strong>Peça sua ajuda:</strong> Em momentos de dúvida ou perigo, peça que ele te ilumine e proteja.</li>
                                <li><strong>Agradeça:</strong> Reconheça as graças e livramentos que você recebe através da intercessão dele.</li>
                                <li><strong>Respeite sua presença:</strong> Lembre-se que ele está sempre ao seu lado; evite o que possa entristecê-lo.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, me guarde, me governe, me ilumine. Amém."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Oração ao Anjo da Guarda
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="anjos-da-guarda" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua sensibilidade espiritual?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como você pode estar mais atento às inspirações de Deus e à presença dos Seus anjos em sua vida cotidiana.
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

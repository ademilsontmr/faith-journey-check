import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function ComoViverQuaresma() {
    return (
        <>
            <Helmet>
                <title>Como Viver a Quaresma com Frutos Espirituais | Bom Católico</title>
                <meta name="description" content="Prepare-se para a Páscoa com este guia prático sobre como viver bem a Quaresma através da oração, jejum e caridade." />
                <meta name="keywords" content="como viver a quaresma, o que fazer na quaresma, oração jejum e esmola, quaresma católica, penitência quaresmal, via sacra, quarta-feira de cinzas, preparação para páscoa, conversão quaresma, jejum na quaresma o que comer" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/como-viver-quaresma" />
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
                            <span className="text-text">Como Viver a Quaresma</span>
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
                                    Espiritualidade
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
                                Como Viver a Quaresma com Frutos Espirituais
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A Quaresma não é um tempo de tristeza, mas de renovação. Descubra como os pilares quaresmais podem transformar seu coração para a Páscoa.
                            </p>
                        </header>

                        <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A Quaresma é o tempo litúrgico de quarenta dias que precede a Páscoa. É um convite à conversão, um "retiro espiritual" que a Igreja nos oferece para que possamos morrer para o pecado e ressuscitar com Cristo. Para viver bem este tempo, a Igreja nos propõe três pilares fundamentais: a Oração, o Jejum e a Esmola (Caridade).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Oração: O Diálogo com o Pai
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Na Quaresma, somos chamados a intensificar nossa vida de oração. Não se trata apenas de rezar mais, mas de rezar melhor. É o momento de silenciar as vozes do mundo para ouvir a voz de Deus. Experimente a Lectio Divina, a Via-Sacra ou o Rosário diário.
                            </p>

                            <QuizCTA
                                title="Sua Quaresma está dando frutos?"
                                description="A conversão é um caminho contínuo. Faça nosso quiz e receba um direcionamento sobre como viver os pilares da oração, jejum e caridade de forma mais profunda e transformadora."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. Jejum: O Domínio de Si
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O jejum não é uma dieta, mas um exercício espiritual. Ao privarmos o corpo de algo lícito (como comida ou entretenimento), mostramos à nossa alma que ela é quem deve governar nossos impulsos. O jejum nos torna mais sensíveis à fome de Deus e à fome dos nossos irmãos.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Esmola: A Prática da Caridade
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A caridade é o fruto natural da oração e do jejum. O que "economizamos" com o jejum deve ser revertido em favor dos pobres. A esmola nos liberta do egoísmo e do apego aos bens materiais, abrindo nosso coração para o amor concreto ao próximo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dicas Práticas para sua Quaresma
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Escolha uma penitência concreta:</strong> Algo que realmente custe, mas que seja possível cumprir.</li>
                                <li><strong>Faça um bom exame de consciência:</strong> E procure o sacramento da Confissão.</li>
                                <li><strong>Participe da Via-Sacra:</strong> Meditar a Paixão de Cristo nos ajuda a entender o preço da nossa salvação.</li>
                                <li><strong>Reduza o ruído digital:</strong> Menos redes sociais, mais tempo de silêncio e leitura bíblica.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Lembra-te que és pó e ao pó hás de voltar."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Quarta-feira de Cinzas
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="como-viver-quaresma" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua caminhada de conversão?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e receba uma orientação sobre como você pode viver melhor este tempo de graça e se preparar para a alegria da Ressurreição.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function GuiaIndulgenciaPlenaria() {
    return (
        <>
            <Helmet>
                <title>Indulgência Plenária: Guia Completo para os Últimos Dias do Jubileu | Bom Católico</title>
                <meta name="description" content="Ainda dá tempo! Saiba como obter a indulgência plenária no encerramento do Jubileu 2025 e entenda o valor espiritual desta graça." />
                <meta name="keywords" content="o que é indulgência plenária, como ganhar indulgência, jubileu 2025, condições para indulgência, indulgência para almas do purgatório, porta santa, ano santo católico, perdão das penas, indulgência parcial e plenária, obras de misericórdia jubileu" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/guia-indulgencia-plenaria" />
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
                            <span className="text-text">Guia da Indulgência Plenária</span>
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
                                    28 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Indulgência Plenária: Guia Completo para os Últimos Dias do Jubileu
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A Igreja abre seus tesouros de graça de forma especial no Jubileu. Entenda como receber a remissão total das penas devidas aos seus pecados.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
                            <BookOpen className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Muitos católicos confundem Indulgência com Confissão. Enquanto a Confissão perdoa a culpa do pecado, a Indulgência plenária apaga a "pena temporal" — a marca ou desordem que o pecado deixa em nossa alma. No Jubileu 2025, o Papa Francisco facilitou o acesso a essa graça imensa.
                            </p>

                            <QuizCTA
                                title="Você quer começar vida nova hoje?"
                                description="A Igreja abre seus tesouros de misericórdia para você. Faça nosso quiz e entenda como obter a indulgência plenária, limpando as marcas do pecado e renovando sua caminhada espiritual."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                As 4 Condições Habituais
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Para qualquer indulgência plenária, são necessários quatro atos fundamentais:
                            </p>
                            <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                                <li><strong>Confissão Sacramental:</strong> Pode ser feita alguns dias antes ou depois.</li>
                                <li><strong>Comunhão Eucarística:</strong> Preferencialmente no dia em que se realiza a obra indulgenciada.</li>
                                <li><strong>Oração pelas Intenções do Papa:</strong> Geralmente um Pai Nosso e uma Ave Maria.</li>
                                <li><strong>Desapego Total do Pecado:</strong> Inclusive dos pecados veniais.</li>
                            </ol>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Obras Específicas do Jubileu 2025
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Além das condições acima, o fiel deve realizar uma das seguintes obras:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Peregrinação:</strong> Visitar uma das Basílicas Papais em Roma ou a Catedral de sua diocese.</li>
                                <li><strong>Visita Piedosa:</strong> Passar um tempo em adoração ou oração em igrejas jubilares designadas.</li>
                                <li><strong>Obras de Misericórdia:</strong> Visitar doentes, presos ou idosos solitários.</li>
                                <li><strong>Penitência:</strong> Abster-se de distrações (redes sociais, TV) ou jejum por um dia.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que buscar a Indulgência agora?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Jubileu é um "tempo favorável". É a oportunidade de começar o ano de 2026 com a alma totalmente renovada, como se tivéssemos acabado de sair do Batismo. Além disso, você pode aplicar a indulgência em favor de uma alma no Purgatório.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A indulgência é a manifestação da plenitude da misericórdia do Pai, que vem ao encontro de todos com o seu rosto de amor."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Papa Francisco
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="guia-indulgencia-plenaria" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você está em estado de graça?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz de consciência e prepare seu coração para receber as graças que Deus tem reservado para você neste final de Ano Santo.
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

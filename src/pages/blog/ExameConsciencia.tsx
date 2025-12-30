import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function ExameConsciencia() {
    return (
        <>
            <Helmet>
                <title>Como Fazer um Bom Exame de Consciência para a Confissão | Bom Católico</title>
                <meta name="description" content="Guia prático para realizar um exame de consciência profundo e sincero. Prepare-se para o sacramento da Reconciliação com este roteiro espiritual." />
                <meta name="keywords" content="exame de consciência completo, como fazer exame de consciência, lista de pecados para confissão, preparação para confissão, pecados mortais e veniais" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/exame-consciencia" />
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
                            <span className="text-text">Exame de Consciência</span>
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
                                    Sacramentos
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como Fazer um Bom Exame de Consciência para a Confissão
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A Confissão começa muito antes de entrar no confessionário. O exame de consciência é o espelho que nos mostra onde precisamos da cura de Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O Sacramento da Reconciliação é um dos maiores presentes que Jesus deixou à Sua Igreja. No entanto, para receber plenamente a graça do perdão, é necessário um coração contrito e uma preparação sincera. O exame de consciência não é um exercício de culpa, mas um ato de amor e verdade diante de um Deus que é Pai e Misericórdia.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Que é o Exame de Consciência?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                É o esforço de recordar os pecados cometidos por pensamentos, palavras, atos e omissões desde a última confissão bem feita. É colocar-se sob a luz do Espírito Santo para enxergar as feridas que o pecado causou em nossa relação com Deus, com o próximo e conosco mesmos.
                            </p>

                            <QuizCTA
                                title="Como está a saúde da sua alma?"
                                description="Um bom exame de consciência é o primeiro passo para a cura. Faça nosso quiz e receba um roteiro prático para preparar sua próxima confissão, mergulhando na misericórdia de Deus."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Passo a Passo para um Bom Exame
                            </h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Invoque o Espírito Santo
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Sozinhos, temos a tendência de justificar nossos erros ou de nos desesperar. Peça ao Espírito Santo que lhe dê clareza, coragem e um verdadeiro arrependimento. "Vinde, Espírito Santo, iluminai minha mente para que eu veja meus pecados e tocai meu coração para que eu os deteste".
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Use um Roteiro (Mandamentos)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                A forma mais clássica é seguir os Dez Mandamentos. Pergunte-se: Dei a Deus o primeiro lugar? Usei Seu nome em vão? Guardei os domingos? Honrei meus pais? Fui violento ou guardei rancor? Fui puro em meus pensamentos e ações? Fui honesto? Falei a verdade?
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                As Três Dimensões do Pecado
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Relação com Deus:</strong> Omissão de orações, falta de confiança, superstições.</li>
                                <li><strong>Relação com o Próximo:</strong> Julgamentos, fofocas, falta de caridade, desonestidade.</li>
                                <li><strong>Relação Consigo Mesmo:</strong> Orgulho, preguiça, gula, falta de cuidado com a própria alma.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Dor do Coração (Contrição)
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Mais importante que a lista de pecados é o arrependimento. A contrição é a dor da alma por ter ofendido a um Deus tão bom. Sem o propósito de não mais pecar, a confissão perde seu sentido transformador.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A confissão é o batismo das lágrimas."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São João Crisóstomo
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="exame-consciencia" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua saúde espiritual?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e receba uma orientação sobre como fortalecer sua vida sacramental e sua caminhada de santidade.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function FeFilhosEraDigital() {
    return (
        <>
            <Helmet>
                <title>Como Transmitir a Fé Católica aos Filhos na Era das Telas? | Bom Católico</title>
                <meta name="description" content="Guia prático para pais católicos sobre como educar os filhos na fé em meio aos desafios do mundo digital e das redes sociais em 2026." />
                <meta name="keywords" content="educação católica, fé e filhos, era digital, pais católicos, transmissão da fé" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/como-transmitir-fe-filhos-era-digital" />
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
                            <span className="text-text">Fé na Era Digital</span>
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
                                    Família
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    15 de Fevereiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    11 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como Transmitir a Fé Católica aos Filhos na Era das Telas?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Educar para o céu nunca foi tão desafiador. Descubra como competir com o algoritmo e plantar sementes de eternidade no coração dos seus filhos.
                            </p>
                        </header>

                        <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10">
                            <Smartphone className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Desafio do "Algoritmo da Descrença"
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Em 2026, as crianças e jovens estão imersos em um fluxo constante de informações que, muitas vezes, contradizem os valores cristãos. O desafio dos pais não é apenas proibir, mas oferecer algo mais atraente: a beleza da Verdade. A transmissão da fé não pode ser apenas teórica; ela deve ser uma experiência de vida.
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Exemplo é o Primeiro Catecismo
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Seus filhos não farão o que você diz, mas o que você faz. Se eles veem os pais rezando com fervor, tratando os outros com caridade e priorizando a Missa dominical sobre o lazer, eles entenderão que a fé é a bússola da vida. O uso equilibrado das telas pelos pais também é fundamental para ensinar o domínio de si.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Estratégias Práticas para a Família Digital
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Zonas Livres de Telas:</strong> A mesa das refeições e o momento da oração familiar devem ser sagrados e sem dispositivos.</li>
                                <li><strong>Curadoria de Conteúdo:</strong> Use a tecnologia a favor da fé. Existem excelentes canais, apps e podcasts católicos para crianças.</li>
                                <li><strong>Diálogo Aberto:</strong> Não fuja das perguntas difíceis. Se você não der a resposta católica, o Google dará uma resposta secular.</li>
                                <li><strong>Rituais de Fé:</strong> Benção da mesa, oração da noite e celebração do dia do santo padroeiro de cada filho.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Importância da Comunidade
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ninguém educa sozinho. É vital que os filhos tenham amigos católicos e participem de grupos de jovens ou coroinhas. Ver outros jovens vivendo a fé valida a experiência deles e cria um senso de pertencimento à grande família que é a Igreja.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Educar é um ato de amor, é dar vida. E o amor é exigente, pede para usar os melhores recursos."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Papa Francisco
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="como-transmitir-fe-filhos-era-digital" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está a vida espiritual da sua família?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz para pais e descubra pontos fortes e áreas de melhoria na educação religiosa dos seus filhos, com dicas práticas para o dia a dia.
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

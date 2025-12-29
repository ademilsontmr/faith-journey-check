import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function PlanoLeituraBiblia2026() {
    return (
        <>
            <Helmet>
                <title>Como Ler a Bíblia em um Ano: Um Plano Prático para 2026 | Bom Católico</title>
                <meta name="description" content="Aprenda como organizar sua leitura bíblica para ler toda a Sagrada Escritura em um ano, com dicas de métodos, aplicativos e roteiros católicos." />
                <meta name="keywords" content="ler a bíblia em um ano, plano de leitura bíblica, bíblia católica, estudo bíblico, palavra de deus" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/como-ler-biblia-em-um-ano-plano-2026" />
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
                            <span className="text-text">Ler a Bíblia em um Ano</span>
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
                                    Bíblia
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    05 de Junho, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    11 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como Ler a Bíblia em um Ano: Um Plano Prático para 2026
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Ler a Bíblia inteira parece uma tarefa impossível? Com o método certo e constância, você pode mergulhar na Palavra de Deus de Gênesis ao Apocalipse.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
                            <BookOpen className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que ler a Bíblia inteira?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Bíblia é a história da nossa salvação. Conhecer apenas trechos isolados é como ler apenas algumas páginas de uma grande carta de amor. Ao ler o texto completo, entendemos a unidade entre o Antigo e o Novo Testamento e como cada promessa de Deus se cumpre em Jesus Cristo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Métodos de Leitura
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-4 mb-6">
                                <li><strong>Cronológico:</strong> Lê os livros na ordem em que os eventos aconteceram historicamente.</li>
                                <li><strong>Canônico:</strong> Segue a ordem em que os livros aparecem na Bíblia (de Gênesis a Apocalipse).</li>
                                <li><strong>Misto (Recomendado):</strong> Alterna entre o Antigo e o Novo Testamento para manter a leitura dinâmica e ver as conexões imediatas.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dicas para não desistir
                            </h2>
                            <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                                <li><strong>Tenha um horário fixo:</strong> Trate a leitura como um compromisso inadiável com Deus.</li>
                                <li><strong>Use uma boa tradução:</strong> Para estudo e leitura diária, a Bíblia de Jerusalém ou a Bíblia da CNBB são excelentes opções.</li>
                                <li><strong>Não pare nas genealogias:</strong> Se um trecho for difícil, continue lendo. O objetivo é a visão geral, não o estudo profundo de cada versículo neste momento.</li>
                                <li><strong>Reze antes de começar:</strong> Peça ao Espírito Santo que ilumine sua inteligência.</li>
                            </ol>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Plano de 20 Minutos
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Você sabia que, se ler cerca de 3 a 4 capítulos por dia, terminará a Bíblia em um ano? Isso leva, em média, apenas 20 minutos. É menos tempo do que muitos gastam nas redes sociais.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A ignorância das Escrituras é a ignorância de Cristo."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Jerônimo
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="como-ler-biblia-em-um-ano-plano-2026" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer um plano de leitura personalizado?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e, com base no seu tempo disponível e nível de conhecimento bíblico, geraremos um roteiro de leitura ideal para você começar hoje mesmo.
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

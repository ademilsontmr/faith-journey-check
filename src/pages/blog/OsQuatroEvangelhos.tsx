import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function OsQuatroEvangelhos() {
    return (
        <>
            <Helmet>
                <title>Os 4 Evangelhos: Diferenças e Riquezas de Cada Relato | Bom Católico</title>
                <meta name="description" content="Entenda as características únicas de Mateus, Marcos, Lucas e João, e como cada evangelista apresenta uma faceta diferente do mistério de Jesus Cristo." />
                <meta name="keywords" content="quatro evangelhos, mateus, marcos, lucas, joão, bíblia, vida de jesus, evangelistas" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/os-quatro-evangelhos-diferencas-riquezas" />
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
                            <span className="text-text">Os 4 Evangelhos</span>
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
                                    10 de Junho, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Os 4 Evangelhos: Diferenças e Riquezas de Cada Relato
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Por que temos quatro livros para contar a mesma história? Descubra como cada evangelista pintou um retrato único do Salvador.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Book className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Os Evangelhos são o coração de toda a Escritura. Embora narrem a mesma vida de Jesus, cada um foi escrito para um público diferente e com uma ênfase teológica específica. Juntos, eles formam uma visão completa do mistério de Cristo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Mateus: Jesus, o Novo Moisés
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Escrito principalmente para judeus convertidos, Mateus enfatiza como Jesus cumpre as profecias do Antigo Testamento. Ele apresenta Jesus como o Messias e o grande Mestre que traz a Nova Lei. Seu símbolo é o **Homem**, pois começa com a genealogia humana de Cristo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. Marcos: Jesus, o Servo Sofredor
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                É o evangelho mais curto e dinâmico. Marcos foca nas ações de Jesus e em Sua autoridade sobre o mal. Foi escrito para os cristãos de Roma que enfrentavam perseguições. Seu símbolo é o **Leão**, representando o grito no deserto e a força de Cristo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Lucas: Jesus, o Salvador Misericordioso
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Lucas, o médico, destaca a compaixão de Jesus pelos pobres, mulheres e pecadores. É o evangelho da alegria e do Espírito Santo. Ele também nos dá os detalhes mais belos sobre a infância de Jesus e Maria. Seu símbolo é o **Touro**, animal do sacrifício no Templo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                4. João: Jesus, o Verbo Eterno
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Muito diferente dos outros três (chamados sinóticos), João mergulha na divindade de Cristo. É um evangelho espiritual e simbólico, focado nos grandes discursos de Jesus. Seu símbolo é a **Águia**, que voa alto nas alturas da teologia.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O Evangelho é o poder de Deus para a salvação de todo aquele que crê."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Romanos 1, 16
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="os-quatro-evangelhos-diferencas-riquezas" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Qual Evangelho mais combina com você?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz bíblico e descubra qual dos quatro relatos ressoa mais com sua forma de rezar e entender a fé, recebendo sugestões de leitura para aprofundar seu conhecimento.
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

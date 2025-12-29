import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function LectioDivina() {
    return (
        <>
            <Helmet>
                <title>A Importância da Leitura Orante da Bíblia (Lectio Divina) | Bom Católico</title>
                <meta name="description" content="Aprenda a praticar a Lectio Divina, o método milenar de leitura orante da Bíblia. Transforme sua leitura das Escrituras em um encontro pessoal com Deus." />
                <meta name="keywords" content="Lectio Divina, leitura orante, Bíblia, oração com a palavra, espiritualidade católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/lectio-divina" />
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
                            <span className="text-text">Lectio Divina</span>
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
                                    7 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Importância da Leitura Orante da Bíblia (Lectio Divina)
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A Bíblia não é apenas um livro de história, mas a Palavra viva de Deus. Aprenda o método da Lectio Divina e deixe que as Escrituras falem ao seu coração.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
                            <BookOpen className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Muitos católicos sentem dificuldade em ler a Bíblia. Começam com entusiasmo, mas logo se perdem em genealogias ou leis antigas. A Lectio Divina, ou "Leitura Divina", é um método monástico milenar que nos ensina a ler as Escrituras não apenas com a inteligência, mas com o coração, transformando a leitura em oração.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Quatro Degraus da Lectio Divina
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Tradicionalmente, a Lectio Divina é composta por quatro passos fundamentais que nos conduzem ao encontro com Deus:
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Lectio (Leitura)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Leia o texto escolhido (recomenda-se o Evangelho do dia) com calma e atenção. A pergunta aqui é: <strong>"O que o texto diz em si mesmo?"</strong>. Observe os personagens, o cenário, as ações e as palavras de Jesus.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Meditatio (Meditação)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Agora, rumine a Palavra. Deixe que ela ecoe em sua vida. A pergunta é: <strong>"O que o texto diz para mim?"</strong>. Qual palavra ou frase mais tocou meu coração? O que Deus está me revelando hoje através desta passagem?
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. Oratio (Oração)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                A Palavra de Deus gera uma resposta em nós. A pergunta é: <strong>"O que o texto me faz dizer a Deus?"</strong>. Pode ser uma oração de louvor, de agradecimento, de pedido de perdão ou de súplica por uma graça necessária.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                4. Contemplatio (Contemplação)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                É o momento de silêncio e repouso em Deus. Não há mais palavras, apenas a presença. É deixar-se transformar pelo olhar amoroso do Pai. A pergunta final é: <strong>"O que a Palavra de Deus mudará em minha vida?"</strong>.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dicas para uma Boa Prática
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Escolha um local silencioso, invoque o Espírito Santo antes de começar e não tenha pressa. Mais vale um versículo bem meditado do que dez capítulos lidos apenas por obrigação. A Bíblia é o "lugar" onde Deus nos espera todos os dias.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Desconhecer as Escrituras é desconhecer o próprio Cristo."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Jerônimo
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="lectio-divina" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua intimidade com a Palavra?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como você pode aprofundar seu conhecimento bíblico e sua vida de oração através das Escrituras.
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

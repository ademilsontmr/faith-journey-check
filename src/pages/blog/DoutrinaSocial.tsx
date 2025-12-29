import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function DoutrinaSocial() {
    return (
        <>
            <Helmet>
                <title>A Doutrina Social da Igreja: O Olhar Católico sobre a Sociedade | Bom Católico</title>
                <meta name="description" content="Conheça os princípios fundamentais da Doutrina Social da Igreja. Entenda como a fé católica propõe soluções para os desafios sociais, políticos e econômicos." />
                <meta name="keywords" content="doutrina social da igreja, bem comum, solidariedade, subsidiariedade, dignidade humana, ética católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/doutrina-social" />
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
                            <span className="text-text">Doutrina Social da Igreja</span>
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
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Doutrina Social da Igreja: O Olhar Católico sobre a Sociedade
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A fé não se limita às sacristias. Descubra como os princípios católicos podem iluminar a construção de uma sociedade mais justa, humana e solidária.
                            </p>
                        </header>

                        <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A Doutrina Social da Igreja (DSI) é o conjunto de ensinamentos da Igreja sobre as realidades sociais, políticas e econômicas. Ela não é uma "terceira via" entre o capitalismo e o socialismo, nem uma ideologia política, mas uma reflexão teológica e ética que busca aplicar a mensagem do Evangelho aos desafios da convivência humana.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Quatro Princípios Fundamentais
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Toda a Doutrina Social se sustenta sobre quatro pilares essenciais:
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Dignidade da Pessoa Humana
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                É o princípio base. Todo ser humano, criado à imagem e semelhança de Deus, possui uma dignidade intrínseca que não depende de sua utilidade, riqueza ou saúde. Por isso, a Igreja defende a vida desde a concepção até a morte natural.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Bem Comum
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                O bem comum é o conjunto de condições sociais que permitem aos grupos e a cada um de seus membros atingirem a sua própria perfeição. Não é a simples soma de interesses individuais, mas o compromisso com o bem de todos.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. Subsidiariedade
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Este princípio afirma que as instâncias superiores (como o Estado) não devem absorver as funções que podem ser realizadas pelas instâncias inferiores (como a família ou associações locais), mas sim apoiá-las e ajudá-las a crescer.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                4. Solidariedade
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                É a determinação firme e perseverante de se empenhar pelo bem comum; não é um sentimento de compaixão vaga, mas uma virtude moral que nos faz sentir responsáveis por todos.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Destinação Universal dos Bens
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja reconhece o direito à propriedade privada, mas ensina que sobre ela pesa uma "hipoteca social". Deus deu a terra a todo o gênero humano para o sustento de todos os seus membros, sem excluir ninguém nem privilegiar ninguém.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Cristão no Mundo
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O leigo católico tem a missão específica de "ordenar as realidades temporais segundo Deus". Isso significa levar a ética, a justiça e a caridade para o trabalho, para a política, para a economia e para a cultura. Ser um "bom católico" implica ser também um cidadão exemplar.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A caridade social e política não é um sentimento, mas uma virtude."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Papa Francisco (Fratelli Tutti)
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="doutrina-social" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você vive sua fé na sociedade?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como você pode ser sal da terra e luz do mundo em seu ambiente de trabalho e em sua comunidade.
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

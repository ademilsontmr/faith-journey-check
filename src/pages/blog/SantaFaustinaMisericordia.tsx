import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SantaFaustinaMisericordia() {
    return (
        <>
            <Helmet>
                <title>Santa Faustina e a Divina Misericórdia | Bom Católico</title>
                <meta name="description" content="Conheça a vida de Santa Faustina Kowalska e a mensagem da Divina Misericórdia. Descubra como confiar no amor infinito de Jesus em tempos difíceis." />
                <meta name="keywords" content="santa faustina, divina misericórdia, jesus eu confio em vós, terço da misericórdia, diário de santa faustina" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/santa-faustina-divina-misericordia-apelo-jesus" />
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
                            <span className="text-text">Santa Faustina</span>
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
                                    Santos
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Santa Faustina e a Divina Misericórdia: O Apelo de Jesus para o Mundo
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "A humanidade não encontrará a paz enquanto não se voltar com confiança para a Minha misericórdia."
                            </p>
                        </header>

                        <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Santa Faustina Kowalska, uma simples freira polonesa, foi escolhida por Jesus para ser a "secretária" da Sua Misericórdia. Através de suas visões e do seu Diário, o mundo recebeu uma mensagem urgente: o amor de Deus é maior que qualquer pecado, e a Sua misericórdia é a última tábua de salvação para a humanidade.
                            </p>

                            <QuizCTA
                                title="Você confia plenamente na Misericórdia de Deus?"
                                description="Muitas vezes carregamos o peso da culpa e do medo. Faça nosso quiz e descubra como a espiritualidade de Santa Faustina pode libertar seu coração para uma vida de paz e confiança absoluta no Senhor."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Imagem de Jesus Misericordioso
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus pediu que se pintasse uma imagem conforme Faustina O via: com dois raios saindo do Seu Coração — um vermelho (o Sangue) e outro pálido (a Água). A inscrição "Jesus, eu confio em Vós" é a chave para abrir as portas da graça divina. Ter essa imagem em casa é um convite constante à confiança.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Terço da Divina Misericórdia
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Uma oração poderosa ditada por Jesus para aplacar a ira divina e obter a conversão dos pecadores. Rezado especialmente às 15h (a Hora da Misericórdia), o terço nos lembra do sacrifício de Cristo e nos convida a interceder pelo mundo inteiro: "Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro".
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                As Obras de Misericórdia
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A devoção à Divina Misericórdia não é apenas oração, mas ação. Jesus disse a Faustina que a misericórdia deve ser exercida de três formas: por atos, por palavras e pela oração. Ser misericordioso com o próximo é a prova real de que recebemos a misericórdia de Deus em nossa vida.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Quanto maior o pecador, tanto maior direito tem à Minha misericórdia."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Diário de Santa Faustina, 723
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="santa-faustina-divina-misericordia-apelo-jesus" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Precisa de um novo começo?
                            </h3>
                            <p className="text-text-muted mb-6">
                                A misericórdia de Deus se renova a cada manhã. Descubra como mergulhar nesse oceano de amor através do nosso quiz de espiritualidade.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function CarloAcutisInternet() {
    return (
        <>
            <Helmet>
                <title>Carlo Acutis: O Padroeiro da Internet e a Eucaristia | Bom Católico</title>
                <meta name="description" content="Conheça a vida do Beato Carlo Acutis, o jovem que usou a tecnologia para evangelizar e nos ensinou que a Eucaristia é a nossa 'autoestrada para o Céu'." />
                <meta name="keywords" content="quem é carlo acutis, carlo acutis santo, padroeiro da internet, milagres eucarísticos, jovem santo, carlo acutis história, autoestrada para o céu, como usar internet para deus, evangelização digital, carlo acutis beatificação" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/carlo-acutis-padroeiro-internet-eucaristia" />
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
                            <span className="text-text">Carlo Acutis</span>
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
                                    10 de Maio, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Carlo Acutis: O Padroeiro da Internet e a Eucaristia
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Carlo Acutis nos mostrou que é possível ser um jovem moderno, gostar de videogames e computadores, e ser profundamente apaixonado por Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Smartphone className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Carlo Acutis, falecido em 2006 aos 15 anos, tornou-se um fenômeno mundial. Ele não era um monge de clausura, mas um adolescente que vestia jeans e tênis, jogava PlayStation e tinha um talento incrível para a programação. No entanto, seu coração estava em outro lugar.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Autoestrada para o Céu
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Para Carlo, a Eucaristia era o centro de tudo. Ele a chamava de sua "autoestrada para o Céu". Desde sua Primeira Comunhão, ele nunca faltou à Missa diária e passava tempo em adoração ao Santíssimo Sacramento. Sua vida prova que a intimidade com Jesus é o que dá sentido a todas as outras atividades.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Evangelização Digital
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Carlo usou seus conhecimentos de informática para criar um site que catalogava todos os milagres eucarísticos do mundo. Ele entendeu que a internet poderia ser um poderoso instrumento para levar Deus às pessoas. Ele é um modelo para todos nós sobre como usar a tecnologia de forma santa e produtiva.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                "Todos nascem originais, mas muitos morrem como fotocópias"
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Carlo não era um jovem "fora do mundo". Ele gostava de computadores, videogames e futebol. Mas ele entendeu algo profundo: a internet e a tecnologia não são fins em si mesmas, mas ferramentas que podem ser usadas para a glória de Deus ou para a perdição das almas. Ele escolheu a primeira opção.
                            </p>

                            <QuizCTA
                                title="Sua vida digital te aproxima de Deus?"
                                description="Carlo Acutis usou a tecnologia para o Céu. Faça nosso quiz e descubra como equilibrar seu uso da internet com uma vida de oração profunda e autêntica, seguindo o exemplo do beato."
                            />

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Estar sempre unido a Jesus, esse é o meu projeto de vida."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Beato Carlo Acutis
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="carlo-acutis-padroeiro-internet-eucaristia" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você usa a internet para crescer na fé?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como você pode seguir o exemplo de Carlo Acutis, equilibrando sua vida digital com uma espiritualidade profunda e autêntica.
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

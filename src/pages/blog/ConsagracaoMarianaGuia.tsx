import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function ConsagracaoMarianaGuia() {
    return (
        <>
            <Helmet>
                <title>Consagração a Nossa Senhora: O que é e Como Fazer | Bom Católico</title>
                <meta name="description" content="Aprenda o significado da consagração total a Jesus por Maria, segundo o método de São Luís Maria Grignion de Montfort. Um guia para quem deseja se entregar inteiramente a Deus." />
                <meta name="keywords" content="consagração mariana, montfort, escravidão de amor, maria, espiritualidade católica, tratado da verdadeira devoção" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/consagracao-nossa-senhora-guia-pratico" />
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
                            <span className="text-text">Consagração Mariana</span>
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
                                    25 de Agosto, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Consagração a Nossa Senhora: O que é e Como Fazer
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Consagrar-se a Maria é entregar as chaves da sua vida para aquela que melhor soube dizer "Sim" a Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Anchor className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A consagração total a Jesus por Maria, popularizada por São Luís Maria Grignion de Montfort em seu "Tratado da Verdadeira Devoção", é um caminho de santidade que tem transformado a vida de milhões de católicos, incluindo santos como João Paulo II.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O que significa se consagrar?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Não é apenas uma oração bonita. É uma entrega de tudo o que somos e temos: nosso corpo, nossa alma, nossos bens materiais e até o valor espiritual de nossas boas obras. Entregamos tudo a Maria para que ela disponha de nós para a maior glória de Deus.
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que "por Maria"?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Porque Deus quis vir ao mundo por Maria. É o caminho que Ele escolheu. Ao nos entregarmos a ela, estamos usando o meio mais seguro, fácil e rápido de nos unirmos perfeitamente a Jesus Cristo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como se preparar?
                            </h2>
                            <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                                <li><strong>Leitura do Tratado:</strong> É fundamental entender o que se está fazendo.</li>
                                <li><strong>Exercícios Espirituais:</strong> São 33 dias de orações e meditações para esvaziar-se do espírito do mundo e encher-se do espírito de Jesus.</li>
                                <li><strong>Data Especial:</strong> Escolha uma festa mariana para o dia da consagração.</li>
                                <li><strong>Confissão e Comunhão:</strong> No dia da consagração, receba os sacramentos com fervor.</li>
                            </ol>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Fruto da Consagração
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O consagrado vive uma paz profunda, pois sabe que sua vida está nas mãos da melhor das mães. Ele não caminha mais sozinho; Maria caminha com ele, ensinando-o a amar Jesus com o mesmo coração dela.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Totus Tuus ego sum, et omnia mea tua sunt." (Sou todo teu, e tudo o que é meu é teu).
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Lema de São João Paulo II
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="consagracao-nossa-senhora-guia-pratico" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você está pronto para este passo?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz de maturidade espiritual e descubra se este é o momento ideal para você iniciar sua preparação para a consagração total a Nossa Senhora, recebendo orientações personalizadas para sua caminhada.
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

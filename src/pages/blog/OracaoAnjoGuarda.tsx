import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoAnjoGuarda() {
    return (
        <>
            <Helmet>
                <title>Oração do Anjo da Guarda: Santo Anjo do Senhor | Bom Católico</title>
                <meta name="description" content="Aprenda a Oração do Anjo da Guarda completa e descubra como seu anjo protetor cuida de você. Reze todos os dias pedindo sua proteção e orientação." />
                <meta name="keywords" content="oração do anjo da guarda, santo anjo do senhor, meu zeloso guardador, anjo protetor, oração ao anjo, como rezar ao anjo da guarda, anjo da guarda católico, proteção angelical, oração de proteção, anjo custódio" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-anjo-da-guarda" />
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
                        <Link to="/quiz"><Button variant="secondary" size="sm">Fazer o Quiz</Button></Link>
                    </div>
                </header>

                <div className="bg-background-muted/50 py-3">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
                            <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
                            <span className="text-text">Oração do Anjo da Guarda</span>
                        </nav>
                    </div>
                </div>

                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
                            <ArrowLeft className="w-4 h-4" />Voltar ao Blog
                        </Link>

                        <header className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Orações</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Oração do Anjo da Guarda: Santo Anjo do Senhor</h1>
                            <p className="text-xl text-text-muted leading-relaxed">Cada pessoa tem um anjo da guarda designado por Deus para protegê-la e guiá-la. Aprenda a rezar a ele todos os dias.</p>
                        </header>

                        <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
                            <Shield className="w-24 h-24 text-sky-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração do Anjo da Guarda</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Santo Anjo do Senhor,<br />meu zeloso guardador,<br />
                                    se a ti me confiou a piedade divina,<br />sempre me rege, guarda, governa e ilumina.<br />
                                    Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                A Oração do Anjo da Guarda é uma das primeiras orações que aprendemos na infância. Simples e profunda, ela nos lembra que nunca estamos sozinhos — Deus nos deu um companheiro celestial para nos proteger e guiar.
                            </p>

                            <QuizCTA
                                title="Você conhece a doutrina dos anjos?"
                                description="Os anjos são mensageiros de Deus que nos protegem. Faça nosso quiz e aprofunde sua fé católica."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Significado de Cada Pedido</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Santo Anjo do Senhor"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Reconhecemos que nosso anjo é santo (separado para Deus) e pertence ao Senhor. Ele não é nosso servo, mas servo de Deus enviado para nos ajudar. Saiba mais sobre os <Link to="/blog/anjos-da-guarda" className="text-accent hover:underline">Anjos da Guarda</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Meu zeloso guardador"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O anjo da guarda é zeloso — cuida de nós com dedicação e amor. Ele é nosso guardador, protetor contra perigos físicos e espirituais, especialmente contra as tentações do demônio.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Se a ti me confiou a piedade divina"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Foi Deus, em Sua piedade (amor misericordioso), quem nos confiou ao anjo da guarda. Desde o momento de nossa concepção, temos este protetor celestial ao nosso lado.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Sempre me rege, guarda, governa e ilumina"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos quatro coisas ao anjo:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Rege:</strong> que nos dirija no caminho certo</li>
                                <li><strong>Guarda:</strong> que nos proteja dos perigos</li>
                                <li><strong>Governa:</strong> que nos ajude a controlar nossas paixões</li>
                                <li><strong>Ilumina:</strong> que nos dê luz para discernir a vontade de Deus</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O que a Igreja Ensina sobre os Anjos da Guarda</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Catecismo da Igreja Católica ensina: "Desde a infância até a morte, a vida humana é cercada pela proteção e intercessão dos anjos" (CIC 336). Jesus mesmo disse: "Cuidado para não desprezar nenhum desses pequeninos, pois eu vos digo que os seus anjos nos céus veem continuamente a face de meu Pai" (Mateus 18,10).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quando Rezar ao Anjo da Guarda?</h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Ao acordar, pedindo proteção para o dia</li>
                                <li>Antes de dormir, agradecendo pela proteção</li>
                                <li>Antes de viagens ou situações de perigo</li>
                                <li>Em momentos de tentação</li>
                                <li>Quando precisar de orientação para decisões</li>
                                <li>Na festa dos Santos Anjos da Guarda (2 de outubro)</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Cultivar a Devoção ao Anjo da Guarda</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Além de rezar a oração tradicional, você pode conversar com seu anjo da guarda ao longo do dia, pedir sua ajuda em situações difíceis, agradecer por sua proteção e pedir que ele interceda por você diante de Deus. Alguns santos, como Padre Pio, tinham uma relação muito próxima com seus anjos.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Ele dará ordens a seus anjos a seu respeito, para que o guardem em todos os seus caminhos."</p>
                                <p className="text-text-muted text-center mt-2">— Salmo 91,11</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-anjo-da-guarda" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer conhecer mais sobre os anjos?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como a doutrina católica sobre os anjos pode fortalecer sua fé.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

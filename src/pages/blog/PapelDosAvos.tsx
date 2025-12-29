import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function PapelDosAvos() {
    return (
        <>
            <Helmet>
                <title>O Papel dos Avós na Transmissão da Tradição Cristã | Bom Católico</title>
                <meta name="description" content="Descubra a importância vital dos avós como guardiões da memória e da fé na família católica, e como eles podem influenciar positivamente os netos em 2026." />
                <meta name="keywords" content="avós católicos, transmissão da fé, tradição cristã, família católica, educação dos netos" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/papel-dos-avos-transmissao-fe" />
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
                            <span className="text-text">O Papel dos Avós</span>
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
                                    05 de Março, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Papel dos Avós na Transmissão da Tradição Cristã
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Os avós são os guardiões da memória e as raízes que sustentam a árvore da família. Saiba como sua influência é insubstituível na vida dos netos.
                            </p>
                        </header>

                        <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O Papa Francisco tem sido um grande defensor da dignidade dos idosos, chamando-os de "o tesouro da Igreja". Em uma sociedade que muitas vezes descarta o que é antigo, os avós católicos têm a missão profética de manter viva a chama da tradição e da fé.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Guardiões da Memória
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Os avós são os contadores de histórias da família. Ao narrarem como a fé os ajudou a superar dificuldades no passado, eles dão aos netos uma perspectiva histórica e espiritual que os livros não podem oferecer. Eles mostram que a Igreja não começou hoje, mas é uma corrente de amor que atravessa gerações.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Poder da Oração Silenciosa
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Muitas vezes, os avós são os grandes intercessores da família. Suas mãos calejadas segurando o Terço são um testemunho silencioso de confiança em Deus. Quando os pais estão sobrecarregados com o trabalho, os avós oferecem o tempo e a paciência necessários para ensinar as primeiras orações aos netos.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Influenciar sem Impor?
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Testemunho de Alegria:</strong> Mostre que a fé traz felicidade, não apenas obrigações.</li>
                                <li><strong>Respeito aos Pais:</strong> Apoie a autoridade dos pais, sendo um porto seguro de sabedoria e não de conflito.</li>
                                <li><strong>Pequenos Gestos:</strong> Presentear com um livro de santos, levar à Missa ou contar sobre o dia do Batismo do neto.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Conclusão: Uma Aliança entre Gerações
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Uma família que honra seus avós é uma família com raízes profundas. Que em 2026 possamos valorizar esses mestres da vida e da fé, garantindo que a herança cristã continue a florescer nos corações dos mais jovens.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Os avós são a memória de um povo, e um povo que não cuida dos seus avós é um povo sem futuro."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Papa Francisco
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="papel-dos-avos-transmissao-fe" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Qual o legado que você está deixando?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Seja você avô, pai ou neto, faça nosso quiz e descubra como fortalecer os laços de fé em sua família e honrar sua herança cristã.
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

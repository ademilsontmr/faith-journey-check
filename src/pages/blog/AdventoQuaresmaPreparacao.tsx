import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function AdventoQuaresmaPreparacao() {
    return (
        <>
            <Helmet>
                <title>Advento e Quaresma: Como se Preparar para as Grandes Festas | Bom Católico</title>
                <meta name="description" content="Saiba como viver intensamente os tempos de preparação da Igreja. Dicas práticas de oração, jejum e caridade para o Advento e a Quaresma em 2026." />
                <meta name="keywords" content="advento, quaresma, preparação litúrgica, natal, páscoa, vida espiritual" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/advento-quaresma-como-se-preparar" />
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
                            <span className="text-text">Advento e Quaresma</span>
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
                                    Liturgia
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    10 de Julho, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Advento e Quaresma: Como se Preparar para as Grandes Festas
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Não deixe que as festas passem em branco. Descubra como os tempos de preparação podem transformar seu coração para receber o Senhor.
                            </p>
                        </header>

                        <div className="aspect-video bg-purple-50 rounded-2xl flex items-center justify-center mb-10">
                            <Wind className="w-24 h-24 text-purple-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O Advento e a Quaresma são os dois grandes tempos de "deserto" e "espera" na Igreja. Enquanto o Advento nos prepara para a alegria do Natal, a Quaresma nos conduz à sobriedade da Paixão e à glória da Ressurreição. Ambos exigem de nós uma atitude de conversão e vigilância.
                            </p>

                            <QuizCTA
                                title="Você sabe se preparar para os tempos fortes?"
                                description="Advento e Quaresma são oportunidades únicas de conversão. Faça nosso quiz e descubra qual prática espiritual é a mais indicada para você viver intensamente o próximo tempo litúrgico."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Advento: O Tempo da Esperança
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Advento é marcado pela vigilância. Não é apenas esperar o Papai Noel, mas esperar o Rei que vem.
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Coroa do Advento:</strong> Acenda uma vela a cada domingo, rezando em família.</li>
                                <li><strong>Presépio:</strong> Monte-o aos poucos, deixando a manjedoura vazia até a noite de Natal.</li>
                                <li><strong>Confissão:</strong> Limpe a "casa do coração" para receber o Menino Deus.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Quaresma: O Tempo da Conversão
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Quaresma é um retiro de quarenta dias. O foco é o combate espiritual e o retorno a Deus.
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Oração:</strong> Intensifique seus momentos de diálogo com Deus, talvez com a Via-Sacra.</li>
                                <li><strong>Jejum:</strong> Faça pequenas renúncias (doces, redes sociais, reclamações) para fortalecer a vontade.</li>
                                <li><strong>Caridade:</strong> Olhe para as necessidades dos outros e partilhe o que você tem.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Equilíbrio Necessário
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Preparar-se não significa ficar triste, mas ficar focado. É retirar o excesso para que o essencial — Jesus — possa aparecer. Sem preparação, a festa vira apenas um evento social; com preparação, ela vira um encontro de salvação.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O tempo é de Deus, e nós somos Seus convidados."
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="advento-quaresma-como-se-preparar" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você sabe como se preparar bem?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra qual prática espiritual (oração, jejum ou esmola) é a mais indicada para você focar no próximo tempo forte da Igreja.
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

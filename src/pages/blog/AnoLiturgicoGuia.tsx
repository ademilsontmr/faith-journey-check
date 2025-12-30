import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function AnoLiturgicoGuia() {
    return (
        <>
            <Helmet>
                <title>O Ano Litúrgico: Entenda as Cores e os Tempos da Igreja | Bom Católico</title>
                <meta name="description" content="Descubra como a Igreja organiza o tempo para celebrar os mistérios de Cristo. Conheça o significado das cores litúrgicas e dos tempos de Advento, Natal, Quaresma, Páscoa e Comum." />
                <meta name="keywords" content="ano litúrgico católico, o que é ano litúrgico, cores litúrgicas significado, quando começa o ano litúrgico, tempo comum, tempo pascal, tempo do advento, cor roxa na missa, cor verde na missa, calendário litúrgico 2026" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/ano-liturgico-guia-cores-tempos" />
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
                            <span className="text-text">O Ano Litúrgico</span>
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
                                    05 de Julho, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    12 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Ano Litúrgico: Entenda as Cores e os Tempos da Igreja
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Para o cristão, o tempo não é apenas um relógio que corre, mas um caminho de santificação. Descubra como a Igreja nos conduz através da vida de Cristo.
                            </p>
                        </header>

                        <div className="aspect-video bg-purple-50 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-purple-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O Ano Litúrgico não coincide com o ano civil. Ele começa no primeiro domingo do Advento e termina na solenidade de Cristo Rei. Ao longo desse ciclo, a Igreja celebra todo o mistério de Cristo, da Encarnação e Natal até a Ascensão, ao dia de Pentecostes e à expectativa da ditosa esperança e da vinda do Senhor.
                            </p>

                            <QuizCTA
                                title="Você vive o tempo de Deus ou o do mundo?"
                                description="O Ano Litúrgico nos conduz pelos mistérios de Cristo. Faça nosso quiz e descubra como sintonizar sua vida com o calendário da Igreja para crescer em santidade o ano todo."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                As Cores Litúrgicas e seus Significados
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-4 mb-6">
                                <li><strong>Verde:</strong> Usado no Tempo Comum. Simboliza a esperança e o crescimento da vida cristã.</li>
                                <li><strong>Roxo:</strong> Usado no Advento e na Quaresma. Simboliza a penitência, a preparação e a espera.</li>
                                <li><strong>Branco:</strong> Usado no Natal, Páscoa e festas de santos não mártires. Simboliza a alegria, a pureza e a ressurreição.</li>
                                <li><strong>Vermelho:</strong> Usado no Domingo de Ramos, Sexta-feira Santa, Pentecostes e festas de mártires. Simboliza o fogo do Espírito Santo e o sangue do sacrifício.</li>
                                <li><strong>Rosa:</strong> Usado apenas dois domingos no ano (*Gaudete* e *Laetare*). Simboliza uma alegria suave em meio à penitência.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Tempos Fortes
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja nos oferece momentos de maior intensidade espiritual para que não caiamos na rotina:
                            </p>
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                Advento e Natal
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Quatro semanas de preparação para o nascimento de Jesus e Sua segunda vinda, culminando na alegria da encarnação.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                Quaresma e Páscoa
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Quarenta dias de deserto e conversão que nos preparam para o Tríduo Pascal e os cinquenta dias de festa da Ressurreição.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                Tempo Comum
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                É o tempo do amadurecimento, onde acompanhamos a vida pública de Jesus e Seus ensinamentos no dia a dia.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A liturgia é o cume para o qual tende a ação da Igreja e, ao mesmo tempo, a fonte donde emana toda a sua força."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Sacrosanctum Concilium, 10
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="ano-liturgico-guia-cores-tempos" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você vive o tempo de Deus ou o tempo do mundo?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz litúrgico e descubra como você pode sintonizar sua vida com o calendário da Igreja, vivendo cada tempo com mais profundidade e sentido.
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

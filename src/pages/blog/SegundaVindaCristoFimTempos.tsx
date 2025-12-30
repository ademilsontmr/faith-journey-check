import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SegundaVindaCristoFimTempos() {
    return (
        <>
            <Helmet>
                <title>A Segunda Vinda de Cristo: Como a Igreja Entende o Fim dos Tempos | Bom Católico</title>
                <meta name="description" content="Entenda a doutrina católica sobre a Parusia. Saiba o que esperar da segunda vinda de Jesus, o fim do mundo e a restauração de todas as coisas em Deus." />
                <meta name="keywords" content="segunda vinda de cristo, o que é parusia, fim dos tempos católico, apocalipse católico, juízo final, quando jesus vai voltar, sinais do fim dos tempos, anticristo, escatologia católica, novos céus e nova terra" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/segunda-vinda-cristo-fim-dos-tempos-parusia" />
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
                            <span className="text-text">A Segunda Vinda de Cristo</span>
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
                                    Doutrina
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    10 de Setembro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    11 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Segunda Vinda de Cristo: Como a Igreja Entende o Fim dos Tempos
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "Maranathá! Vem, Senhor Jesus!" Descubra o que a Igreja ensina sobre a Parusia e a consumação da história.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                No Credo, professamos que Jesus "de novo há de vir, em sua glória, para julgar os vivos e os mortos". Este evento é conhecido como Parusia. Não é motivo de medo, mas de esperança para o cristão, pois marca a vitória definitiva de Deus sobre o mal e a morte.
                            </p>

                            <QuizCTA
                                title="Como está sua vigilância espiritual?"
                                description="Jesus virá em sua glória para julgar os vivos e os mortos. Faça nosso quiz sobre o fim dos tempos e descubra como viver com mais esperança e prontidão para o encontro com o Senhor."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O que acontecerá na Parusia?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja ensina que, antes da vinda de Cristo, ela deverá passar por uma prova final que abalará a fé de muitos crentes. Surgirá o Anticristo, uma impostura religiosa que oferece aos homens uma solução aparente para seus problemas ao preço da apostasia da verdade.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Triunfo de Cristo
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A vinda gloriosa de Cristo porá fim a esta última provação. Ele virá para julgar a história e estabelecer definitivamente o Seu Reino. O mundo como o conhecemos será transformado, e haverá "novos céus e uma nova terra".
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Vigilância, não Curiosidade
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus foi claro: "Quanto a esse dia e a essa hora, ninguém sabe". O objetivo da doutrina sobre o fim dos tempos não é satisfazer nossa curiosidade sobre datas, mas nos manter em estado de vigilância e oração, trabalhando para que o Reino de Deus cresça já aqui na terra.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A Igreja só entrará na glória do Reino através desta última Páscoa, em que seguirá seu Senhor em sua Morte e Ressurreição."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Catecismo da Igreja Católica, 677
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="segunda-vinda-cristo-fim-dos-tempos-parusia" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua vigilância espiritual?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz sobre o fim dos tempos e descubra como você pode viver com mais esperança e prontidão para o encontro com o Senhor, focando no que realmente importa para a eternidade.
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

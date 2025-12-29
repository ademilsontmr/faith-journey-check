import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function JuizoParticularEFinal() {
    return (
        <>
            <Helmet>
                <title>O Juízo Particular e o Juízo Final: Qual a Diferença? | Bom Católico</title>
                <meta name="description" content="Entenda os dois momentos de julgamento da alma segundo a doutrina católica. Saiba o que acontece no instante da morte e o que esperar do julgamento universal no fim dos tempos." />
                <meta name="keywords" content="juízo particular, juízo final, julgamento de deus, escatologia, vida eterna, ressurreição" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/juizo-particular-e-juizo-final-diferencas" />
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
                            <span className="text-text">Juízo Particular e Final</span>
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
                                    15 de Setembro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Juízo Particular e o Juízo Final: Qual a Diferença?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Seremos julgados uma ou duas vezes? Entenda como a Igreja explica os momentos em que prestaremos contas de nossa vida a Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Shield className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A doutrina católica fala de dois juízos. Embora o veredito sobre nossa salvação ou condenação seja decidido no primeiro, o segundo tem um significado profundo para toda a criação.
                            </p>

                            <QuizCTA
                                title="Você está preparado para o encontro com Deus?"
                                description="O Juízo Particular é um momento de verdade e misericórdia. Faça nosso quiz e descubra como viver cada dia com o olhar na eternidade, crescendo na amizade com Cristo."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. O Juízo Particular
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ocorre no instante imediato após a morte. A alma, separada do corpo, vê sua vida à luz da verdade de Deus. É um encontro pessoal com Cristo, onde se decide o destino eterno: Céu (diretamente ou via Purgatório) ou Inferno. Não há mais tempo para mudar de escolha; a eternidade começa ali.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. O Juízo Final (ou Universal)
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ocorre no fim dos tempos, na Segunda Vinda de Cristo. Todos os mortos ressuscitarão e comparecerão diante do trono de Deus.
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Manifestação da Verdade:</strong> Tudo o que foi feito em segredo será revelado. Veremos as consequências de nossas ações e omissões na história.</li>
                                <li><strong>Justiça de Deus:</strong> Veremos como a providência divina conduziu todas as coisas, mesmo através do mal, para o bem final.</li>
                                <li><strong>Corpo e Alma:</strong> No Juízo Final, a alma se une ao corpo ressuscitado para viver a eternidade na plenitude da pessoa humana.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que dois juízos?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Juízo Particular decide o destino individual. O Juízo Final manifesta a glória de Deus e a vitória definitiva de Cristo sobre a história. É o momento em que a justiça de Deus é plenamente compreendida por todas as criaturas.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O Juízo Final revelará, até às suas últimas consequências, o bem que cada um tiver feito ou deixado de fazer durante a sua vida terrena."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Catecismo da Igreja Católica, 1039
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="juizo-particular-e-juizo-final-diferencas" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você tem medo do julgamento de Deus?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz sobre a misericórdia divina e entenda como o julgamento de Deus é, acima de tudo, um ato de amor que respeita nossa liberdade, aprendendo a confiar mais no Pai.
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

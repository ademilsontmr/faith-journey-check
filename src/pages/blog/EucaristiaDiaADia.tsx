import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function EucaristiaDiaADia() {
    return (
        <>
            <Helmet>
                <title>A Eucaristia no Dia a Dia: Por que a Missa Diária é o Segredo dos Santos? | Bom Católico</title>
                <meta name="description" content="Descubra os benefícios espirituais de participar da Santa Missa diariamente e como a Eucaristia pode transformar sua rotina e fortalecer sua fé em 2026." />
                <meta name="keywords" content="missa diária benefícios, por que ir à missa todo dia, comunhão diária, eucaristia todos os dias, como participar da missa diária, santos e missa diária, padre pio missa, pão da vida, força espiritual, rotina de oração católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/eucaristia-missa-diaria-segredo-santos" />
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
                            <span className="text-text">Eucaristia no Dia a Dia</span>
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
                                    Sacramentos
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    15 de Março, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Eucaristia no Dia a Dia: Por que a Missa Diária é o Segredo dos Santos?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Receber o Pão do Céu todos os dias não é um privilégio de poucos, mas um convite de amor para todos os que buscam a santidade.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Se você perguntasse a qualquer santo qual era o motor da sua vida, a resposta seria invariavelmente a mesma: a Santa Missa. A Eucaristia é a "fonte e o ápice de toda a vida cristã". Mas como encaixar a Missa em uma rotina de trabalho, estudos e família?
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Alimento para a Batalha Diária
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Assim como nosso corpo precisa de alimento físico todos os dias, nossa alma precisa do alimento espiritual. A Missa diária nos dá a força necessária para enfrentar as tentações, as dificuldades no trabalho e os desafios familiares com paciência e caridade. É o momento de "reabastecer" a alma na fonte da Graça.
                            </p>

                            <QuizCTA
                                title="Como está sua fome de Deus?"
                                description="A Missa diária é o segredo da força dos santos. Faça nosso quiz e descubra como a Eucaristia cotidiana pode transformar sua rotina e te dar a graça necessária para cada desafio."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Benefícios da Missa Diária
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>União com Cristo:</strong> A comunhão nos torna um só com o Senhor, transformando nossos pensamentos e ações.</li>
                                <li><strong>Perdão dos Pecados Veniais:</strong> A participação devota na Missa purifica a alma das faltas cotidianas.</li>
                                <li><strong>Paz Interior:</strong> O silêncio e a liturgia ajudam a reordenar nossas prioridades e acalmar a mente.</li>
                                <li><strong>Intercessão pelo Mundo:</strong> Em cada Missa, oferecemos o sacrifício de Cristo pela salvação de todos.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dicas para Começar
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Não precisa começar indo todos os dias. Tente escolher um dia da semana além do domingo. Muitas paróquias oferecem missas em horários alternativos (cedo pela manhã ou final da tarde). Organize sua agenda para que esse momento seja o centro do seu dia, e não apenas um "encaixe".
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Seria mais fácil o mundo sobreviver sem o sol do que sem a Santa Missa."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Padre Pio de Pietrelcina
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="eucaristia-missa-diaria-segredo-santos" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua fome de Deus?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como a Eucaristia pode se tornar o centro da sua vida, com dicas para viver melhor cada parte da Santa Missa.
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

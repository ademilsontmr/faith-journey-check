import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SignificadoCrucifixo() {
    return (
        <>
            <Helmet>
                <title>A História e o Significado do Crucifixo | Bom Católico</title>
                <meta name="description" content="Entenda por que o crucifixo é o símbolo central da fé católica. Conheça sua história, simbolismo e a importância de tê-lo em nossos lares." />
                <meta name="keywords" content="crucifixo, cruz, paixão de cristo, símbolo católico, redenção, fé cristã" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/significado-crucifixo" />
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
                            <span className="text-text">Significado do Crucifixo</span>
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
                                    Devoções
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    6 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A História e o Significado do Crucifixo
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O crucifixo não é apenas um adorno, mas o resumo de nossa fé. Descubra por que este símbolo é tão central para a vida do católico.
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Para o mundo, a cruz é loucura ou escândalo; para nós, católicos, ela é o sinal da vitória e a prova suprema do amor de Deus. O crucifixo (a cruz com a imagem de Jesus) nos lembra constantemente o preço que foi pago pela nossa salvação e o convite de Jesus: "Quem quiser me seguir, tome sua cruz e siga-me".
                            </p>

                            <QuizCTA
                                title="Você vive o mistério da Cruz?"
                                description="O crucifixo é o resumo da nossa fé e do amor de Deus. Faça nosso quiz e reflita sobre como você tem carregado sua própria cruz no seguimento de Jesus Cristo."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Diferença entre Cruz e Crucifixo
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Enquanto a cruz vazia enfatiza a Ressurreição, o crucifixo enfatiza o Sacrifício. A Igreja Católica utiliza o crucifixo para nos manter focados na Paixão de Cristo, pois não há Ressurreição sem o Calvário. Olhar para o crucifixo é olhar para o Amor que se entregou por nós.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Simbolismo do Crucifixo
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>O Título (INRI):</strong> "Jesus Nazareno Rei dos Judeus", proclamando Sua realeza divina.</li>
                                <li><strong>Os Braços Abertos:</strong> O desejo de Deus de abraçar toda a humanidade e reconciliá-la consigo.</li>
                                <li><strong>As Chagas:</strong> Sinais da nossa cura; "por Suas chagas fomos curados".</li>
                                <li><strong>A Vertical e a Horizontal:</strong> A união entre o céu e a terra, entre Deus e os homens.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que ter um Crucifixo em Casa?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ter um crucifixo em um lugar de destaque no lar (um "oratório" ou sobre a porta) santifica o ambiente. Ele serve como um lembrete para rezar, um consolo nas horas de dor e uma proteção contra as forças do mal. É o sinal de que aquela casa pertence a Cristo.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Ave Crux, Spes Unica" (Salve a Cruz, nossa única esperança).
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Lema da Ordem da Santa Cruz
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="significado-crucifixo" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você vive o mistério da Cruz?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e reflita sobre como você tem carregado sua própria cruz no seguimento de Jesus e como fortalecer sua fé nos momentos de provação.
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

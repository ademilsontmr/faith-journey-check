import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function EucaristiaPresencaReal() {
    return (
        <>
            <Helmet>
                <title>A Eucaristia: Presença Real de Jesus no Pão e no Vinho | Bom Católico</title>
                <meta name="description" content="Entenda o dogma da Transubstanciação e a importância da Eucaristia como fonte e ápice da vida cristã. Descubra por que Jesus está realmente presente na Hóstia Santa." />
                <meta name="keywords" content="Eucaristia, presença real, transubstanciação, corpo de Cristo, santíssimo sacramento, comunhão" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/eucaristia-presenca-real" />
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
                            <span className="text-text">A Eucaristia</span>
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
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Eucaristia: Presença Real de Jesus no Pão e no Vinho
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "Isto é o meu corpo". A Eucaristia não é um símbolo, mas a presença viva e substancial de Jesus Cristo. Entenda o mistério que sustenta a Igreja há dois milênios.
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A Eucaristia é o "tesouro da Igreja". Enquanto nos outros sacramentos recebemos a graça de Deus, na Eucaristia recebemos o próprio Autor da graça. É o mistério da fé por excelência, onde o pão e o vinho deixam de ser o que eram para se tornarem, em substância, o Corpo, o Sangue, a Alma e a Divindade de Nosso Senhor Jesus Cristo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Que é a Transubstanciação?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Este termo teológico explica o que ocorre na consagração: a mudança de toda a substância do pão na substância do Corpo de Cristo e de toda a substância do vinho na substância do Seu Sangue. As "aparências" (gosto, cor, cheiro, forma) permanecem as mesmas, mas a realidade profunda mudou completamente. É um milagre que exige os olhos da fé.
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Instituição e Fundamento Bíblico
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus instituiu a Eucaristia na Última Ceia, na noite em que foi entregue. Ao dizer "Isto é o meu corpo" e "Isto é o meu sangue", Ele não usou uma metáfora. No capítulo 6 do Evangelho de São João, Jesus é enfático: "Quem come a minha carne e bebe o meu sangue tem a vida eterna". Muitos O abandonaram por causa desse ensinamento, mas Ele não voltou atrás.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Efeitos da Sagrada Comunhão
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>União com Cristo:</strong> A comunhão nos incorpora intimamente a Jesus.</li>
                                <li><strong>Aumento da Graça:</strong> Fortalece a vida espiritual recebida no Batismo.</li>
                                <li><strong>Remissão de Pecados Veniais:</strong> O fogo do amor de Cristo purifica nossas faltas leves.</li>
                                <li><strong>União com a Igreja:</strong> Faz de nós um só corpo em Cristo.</li>
                                <li><strong>Antídoto contra o Pecado:</strong> Dá-nos força para vencer as tentações.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Receber Dignamente?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Para comungar, o católico deve estar em estado de graça (sem pecados graves não confessados), observar o jejum eucarístico de uma hora e ter consciência de Quem está recebendo. Receber a Eucaristia em pecado grave é cometer um sacrilégio, como ensina São Paulo.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A Eucaristia é o caminho mais curto para o Céu."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Pio X
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="eucaristia-presenca-real" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você valoriza o Pão da Vida?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como está sua vivência sacramental e seu amor pela Eucaristia, o centro da vida cristã.
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

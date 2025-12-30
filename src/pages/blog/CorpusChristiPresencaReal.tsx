import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function CorpusChristiPresencaReal() {
    return (
        <>
            <Helmet>
                <title>Corpus Christi: A Fé na Presença Real de Jesus na Eucaristia | Bom Católico</title>
                <meta name="description" content="Entenda a origem e o significado da festa de Corpus Christi. Descubra por que os católicos acreditam na presença real de Cristo sob as espécies do pão e do vinho." />
                <meta name="keywords" content="o que é corpus christi, presença real de jesus na eucaristia, transubstanciação, procissão de corpus christi, tapetes de corpus christi, por que católicos adoram a hóstia, corpo e sangue de cristo, festa de corpus christi, eucaristia católica, adoração ao santíssimo" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/corpus-christi-presenca-real-jesus-eucaristia" />
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
                            <span className="text-text">Corpus Christi</span>
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
                                    20 de Julho, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Corpus Christi: A Fé na Presença Real de Jesus na Eucaristia
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Corpus Christi não é apenas um feriado ou uma tradição de tapetes coloridos. É a proclamação pública de que Deus caminha conosco.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A solenidade do Santíssimo Corpo e Sangue de Cristo (Corpus Christi) é uma das festas mais queridas do povo católico. Ela foi instituída para honrar solenemente a presença real de Jesus na Eucaristia, um mistério que celebramos em cada Missa, mas que nesta data ganha as ruas.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O que é a Transubstanciação?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja ensina que, pelas palavras da consagração e pela força do Espírito Santo, ocorre a mudança de toda a substância do pão na substância do Corpo de Cristo e de toda a substância do vinho na substância do Seu Sangue. As aparências (gosto, cor, forma) permanecem, mas a realidade profunda mudou. Jesus está ali, vivo e inteiro.
                            </p>

                            <QuizCTA
                                title="Você crê na Presença Real?"
                                description="A Eucaristia é o coração da nossa fé. Faça nosso quiz e descubra como aprofundar sua adoração e amor por Jesus Sacramentado, vivendo o mistério de Corpus Christi todos os dias."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que a Procissão?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Levar o ostensório pelas ruas é um gesto profético. Dizemos ao mundo que Jesus não está "preso" no sacrário, mas quer abençoar nossas casas, nosso trabalho e nossa cidade. Os famosos tapetes de serragem e flores são a nossa forma de preparar o caminho para o Rei.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como viver bem esta festa?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Participe da Santa Missa e, se possível, da procissão. Mas, acima de tudo, renove sua fé na Eucaristia. Adore o Senhor em silêncio e peça que Ele transforme seu coração, para que você também se torne "pão partido" para os outros.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Eu sou o pão vivo descido do céu. Quem comer deste pão viverá eternamente."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — João 6, 51
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="corpus-christi-presenca-real-jesus-eucaristia" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Qual é o lugar da Eucaristia em sua vida?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz sobre a Eucaristia e descubra como aprofundar sua devoção ao Santíssimo Sacramento, compreendendo melhor este grande mistério de amor.
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

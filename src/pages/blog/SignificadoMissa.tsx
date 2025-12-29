import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SignificadoMissa() {
    return (
        <>
            <Helmet>
                <title>O Significado da Santa Missa: Entenda Cada Parte da Liturgia | Bom Católico</title>
                <meta name="description" content="Aprenda o significado profundo de cada momento da Santa Missa. Um guia completo sobre a liturgia para participar com mais consciência e devoção." />
                <meta name="keywords" content="significado da missa, liturgia católica, ritos da missa, eucaristia, partes da missa" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/significado-missa" />
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
                            <span className="text-text">O Significado da Santa Missa</span>
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
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Significado da Santa Missa: Entenda Cada Parte da Liturgia
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A Missa é o sacrifício de Cristo que se torna presente em nosso altar. Entender seus ritos é a chave para uma participação plena e frutuosa.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
                            <BookOpen className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Muitos católicos frequentam a Missa dominical por hábito ou preceito, mas poucos compreendem a riqueza teológica e espiritual contida em cada gesto, palavra e silêncio da liturgia. A Santa Missa não é uma encenação da Última Ceia, mas a atualização do sacrifício do Calvário. É o céu que toca a terra.
                            </p>

                            <QuizCTA
                                title="Você participa da Missa com profundidade?"
                                description="A Santa Missa é o céu que toca a terra. Faça nosso quiz e descubra como participar de cada rito com mais consciência, amor e devoção ao mistério eucarístico."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Ritos Iniciais: Preparando o Coração
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Missa começa com o sinal da cruz, lembrando-nos que estamos ali em nome da Trindade. O Ato Penitencial é um momento crucial de humildade, onde reconhecemos nossa pequenez diante da grandeza de Deus, pedindo perdão para celebrar dignamente os santos mistérios.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Liturgia da Palavra: Deus Fala ao Seu Povo
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Nas leituras bíblicas, é o próprio Deus quem fala. A primeira leitura (geralmente do Antigo Testamento), o Salmo, a segunda leitura e, finalmente, o Evangelho, formam um diálogo de amor. A homilia do sacerdote deve nos ajudar a aplicar essa Palavra em nossa vida cotidiana.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Liturgia Eucarística: O Ápice da Celebração
                            </h2>
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                O Ofertório
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Levamos ao altar o pão e o vinho, frutos da terra e do trabalho humano, mas também levamos nossas vidas, alegrias e sofrimentos para serem transformados.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                A Consagração
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Este é o momento mais sagrado. Pelas palavras do sacerdote e o poder do Espírito Santo, a substância do pão e do vinho torna-se o Corpo e o Sangue de Cristo. É o milagre da Transubstanciação.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Ritos de Comunhão e Envio
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ao comungar, nos unimos intimamente a Jesus e aos nossos irmãos. A Missa termina com a bênção e o envio: "Ide em paz e o Senhor vos acompanhe". A celebração continua em nossa vida, no testemunho que daremos no mundo.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Se conhecêssemos o valor do Santo Sacrifício da Missa, que zelo não teríamos para assistir a ela!"
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São João Maria Vianney (Cura d'Ars)
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="significado-missa" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você vive a Missa com profundidade?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra como está seu conhecimento litúrgico e sua vivência sacramental através do nosso quiz personalizado.
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

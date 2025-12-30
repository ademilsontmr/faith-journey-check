import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SantaTeresinhaPequenaVia() {
    return (
        <>
            <Helmet>
                <title>Santa Teresinha e a Pequena Via da Santidade | Bom Católico</title>
                <meta name="description" content="Conheça a espiritualidade de Santa Teresinha do Menino Jesus. Descubra como a Pequena Via pode transformar seus atos cotidianos em grandes gestos de amor a Deus." />
                <meta name="keywords" content="santa teresinha do menino jesus, pequena via de santidade, infância espiritual, como ser santo, carmelo, doutora da igreja, florzinha de jesus" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/santa-teresinha-pequena-via-santidade" />
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
                            <span className="text-text">Santa Teresinha e a Pequena Via</span>
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
                                    Santos
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Santa Teresinha do Menino Jesus e a Pequena Via da Santidade
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A santidade não consiste em fazer coisas extraordinárias, mas em fazer as coisas comuns com um amor extraordinário.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Santa Teresinha de Lisieux, a "maior santa dos tempos modernos" segundo o Papa São Pio X, revolucionou a espiritualidade católica com sua **Pequena Via** (ou Infância Espiritual). Ela nos mostrou que o caminho para o Céu está aberto a todos, especialmente aos pequenos e humildes.
                            </p>

                            <QuizCTA
                                title="Você busca a santidade no dia a dia?"
                                description="A Pequena Via é o caminho da confiança e do abandono total em Deus. Faça nosso quiz e descubra qual característica de Santa Teresinha mais se assemelha à sua personalidade espiritual."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Elevador para o Céu
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Teresinha sentia-se pequena demais para subir a íngreme escada da perfeição. Ela pedia a Jesus que fosse o seu "elevador". Essa imagem poderosa descreve a confiança absoluta na misericórdia divina: não são nossos méritos que nos salvam, mas o amor de Deus que nos carrega em Seus braços.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Teologia do Pequeno Gesto
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Para Teresinha, apanhar um alfinete do chão por amor a Deus tinha o mesmo valor espiritual que converter uma nação. A Pequena Via consiste em santificar cada momento: um sorriso para alguém difícil, a paciência em uma fila, o trabalho bem feito. Tudo oferecido como uma rosa ao Senhor.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                "No Coração da Igreja, eu serei o Amor"
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Mesmo vivendo em um carmelo isolado, Teresinha tornou-se a Padroeira das Missões. Ela compreendeu que todas as vocações — apóstolo, mártir, doutor — se resumem em uma só: o Amor. Ao amar intensamente em sua pequena cela, ela alcançava as almas em todo o mundo.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Para mim, a oração é um impulso do coração, é um simples olhar lançado para o céu."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Santa Teresinha do Menino Jesus
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="santa-teresinha-pequena-via-santidade" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você conhece sua missão na Igreja?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Como Santa Teresinha, cada um de nós tem um lugar único no Corpo de Cristo. Descubra seus dons espirituais através do nosso quiz.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function EscolherSantoPadroeiro() {
    return (
        <>
            <Helmet>
                <title>Como Escolher um Santo Padroeiro para 2026: Um Guia Espiritual | Bom Católico</title>
                <meta name="description" content="Descubra a importância de ter um santo padroeiro e aprenda como escolher um intercessor celestial que combine com sua vocação, profissão ou momento de vida." />
                <meta name="keywords" content="santo padroeiro, intercessão dos santos, amizade com os santos, vida espiritual, guia católico" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/como-escolher-santo-padroeiro-guia" />
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
                            <span className="text-text">Escolher um Santo Padroeiro</span>
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
                                    Espiritualidade
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    20 de Maio, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como Escolher um Santo Padroeiro para 2026: Um Guia Espiritual
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Ter um santo padroeiro não é apenas uma tradição, mas uma amizade espiritual que nos ajuda a caminhar seguros em direção ao Céu.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Star className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Na Igreja Católica, acreditamos na "Comunhão dos Santos". Isso significa que os santos no céu não estão distantes, mas intercedem por nós e nos acompanham. Escolher um santo padroeiro para o ano (ou para a vida) é convidar um "irmão mais velho" para nos guiar.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por onde começar?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Existem várias formas de identificar um santo que tenha uma conexão especial com você:
                            </p>

                            <QuizCTA />
                            <ul className="list-disc list-inside text-text space-y-4 mb-6">
                                <li><strong>Pelo Nome:</strong> Muitos santos levam o nosso nome de batismo. Conhecer a vida do seu onomástico é o primeiro passo.</li>
                                <li><strong>Pela Profissão:</strong> Quase toda profissão tem um padroeiro (ex: São Lucas para médicos, São José para trabalhadores).</li>
                                <li><strong>Pelo Momento de Vida:</strong> Se você está enfrentando um luto, Santa Rita; se busca um emprego, São Jorge ou São José.</li>
                                <li><strong>Pela Afinidade Espiritual:</strong> Às vezes, lemos a biografia de um santo e sentimos que ele "fala" diretamente ao nosso coração.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O que fazer após escolher?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Uma vez escolhido o padroeiro, cultive essa relação. Leia seus escritos, tenha uma imagem ou estampa dele no seu lugar de oração, e peça sua intercessão diariamente. Lembre-se: o objetivo do santo é sempre nos levar a Jesus.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Os santos não são super-homens, nem nasceram perfeitos. São pessoas que, antes de chegar ao céu, viveram uma vida normal, com alegrias e dores, fadigas e esperanças."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Papa Francisco
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="como-escolher-santo-padroeiro-guia" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Qual santo quer ser seu amigo este ano?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz especial de padroeiros e, com base no seu momento atual e personalidade, sugeriremos um santo intercessor para acompanhar sua jornada em 2026.
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

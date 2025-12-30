import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NovenaNossaSenhoraGracas() {
    return (
        <>
            <Helmet>
                <title>Novena de Nossa Senhora das Graças: Medalha Milagrosa | Bom Católico</title>
                <meta name="description" content="Reze a Novena de Nossa Senhora das Graças completa. Ligada à Medalha Milagrosa, esta novena reforça a confiança em Maria e pede graças e conversão." />
                <meta name="keywords" content="novena nossa senhora das graças, medalha milagrosa, 27 de novembro, nossa senhora das graças, santa catarina labouré, novena medalha milagrosa, ó maria concebida sem pecado, graças de maria, conversão, novena completa" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/novena-nossa-senhora-gracas" />
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
                        <Link to="/quiz"><Button variant="secondary" size="sm">Fazer o Quiz</Button></Link>
                    </div>
                </header>

                <div className="bg-background-muted/50 py-3">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
                            <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
                            <span className="text-text">Novena de Nossa Senhora das Graças</span>
                        </nav>
                    </div>
                </div>

                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
                            <ArrowLeft className="w-4 h-4" />Voltar ao Blog
                        </Link>

                        <header className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Novenas</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena de Nossa Senhora das Graças</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Novena de Nossa Senhora das Graças está ligada à Medalha Milagrosa e é fonte de inúmeras graças e conversões.</p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Star className="w-24 h-24 text-blue-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">A História da Medalha Milagrosa</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Em 1830, Nossa Senhora apareceu a Santa Catarina Labouré em Paris, pedindo que fosse cunhada uma medalha com a invocação: "Ó Maria concebida sem pecado, rogai por nós que recorremos a Vós." Maria prometeu grandes graças a quem usasse a medalha com fé. A festa é celebrada em 27 de novembro.
                            </p>

                            <QuizCTA
                                title="Você conhece a devoção mariana?"
                                description="Nossa Senhora das Graças derrama bênçãos sobre seus devotos. Faça nosso quiz e aprofunde sua fé."
                            />

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração da Medalha Milagrosa</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Ó Virgem Imaculada, sabemos que sempre e em toda parte<br />
                                    estais disposta a atender às preces de vossos filhos,<br />
                                    mas sabemos também que há lugares e momentos<br />
                                    em que Vos dignais derramar mais abundantemente os Vossos favores.<br />
                                    E foi para nos dar um penhor de Vossa bondade sem limites<br />
                                    que fizestes cair do Vosso coração maternal<br />
                                    a santa Medalha que traz a Vossa imagem.<br />
                                    Nós a usamos com fé e confiança,<br />
                                    certos de que nos ajudareis em todas as necessidades.<br />
                                    Ó Maria concebida sem pecado,<br />
                                    rogai por nós que recorremos a Vós. Amém.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Nove Dias da Novena</h2>
                            
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1º Dia - A Imaculada Conceição</h3>
                            <p className="text-text leading-relaxed mb-4">Meditamos no privilégio de Maria, concebida sem pecado original. Pedimos pureza de coração.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2º Dia - Maria Medianeira de Graças</h3>
                            <p className="text-text leading-relaxed mb-4">Todas as graças passam pelas mãos de Maria. Pedimos sua intercessão para nossas necessidades.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3º Dia - A Conversão dos Pecadores</h3>
                            <p className="text-text leading-relaxed mb-4">Maria é refúgio dos pecadores. Pedimos a conversão de quem está afastado de Deus.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4º Dia - A Proteção de Maria</h3>
                            <p className="text-text leading-relaxed mb-4">Sob o manto de Maria estamos protegidos. Pedimos sua proteção contra todo mal.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">5º Dia - A Cura dos Enfermos</h3>
                            <p className="text-text leading-relaxed mb-4">Maria é Saúde dos Enfermos. Pedimos a cura dos doentes do corpo e da alma.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">6º Dia - O Consolo dos Aflitos</h3>
                            <p className="text-text leading-relaxed mb-4">Maria é Consoladora dos Aflitos. Pedimos conforto para os que sofrem.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">7º Dia - A Paz nas Famílias</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos a paz e a harmonia para todas as famílias, especialmente as que passam por dificuldades.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">8º Dia - As Vocações</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos vocações sacerdotais e religiosas, para que muitos respondam ao chamado de Deus.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">9º Dia - Nossas Intenções</h3>
                            <p className="text-text leading-relaxed mb-4">Apresentamos nossas intenções particulares a Nossa Senhora das Graças.</p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Usar a Medalha Milagrosa</h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Use a medalha com fé e devoção</li>
                                <li>Reze frequentemente: "Ó Maria concebida sem pecado, rogai por nós"</li>
                                <li>Confie na proteção de Nossa Senhora</li>
                                <li>Distribua medalhas aos outros como ato de caridade</li>
                                <li>Faça a novena anualmente, especialmente em novembro</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Ó Maria concebida sem pecado, rogai por nós que recorremos a Vós."</p>
                                <p className="text-text-muted text-center mt-2">— Jaculatória da Medalha Milagrosa</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="novena-nossa-senhora-gracas" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua devoção mariana?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como Nossa Senhora pode transformar sua vida.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

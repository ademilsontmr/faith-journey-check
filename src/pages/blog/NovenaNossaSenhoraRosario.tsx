import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NovenaNossaSenhoraRosario() {
    return (
        <>
            <Helmet>
                <title>Novena de Nossa Senhora do Rosário: Mês de Outubro | Bom Católico</title>
                <meta name="description" content="Reze a Novena de Nossa Senhora do Rosário completa. Tradicional em outubro, mês do Rosário, ligada à devoção do Santo Terço e à Batalha de Lepanto." />
                <meta name="keywords" content="novena nossa senhora rosário, novena do rosário, mês do rosário outubro, nossa senhora do rosário, como rezar o terço, santo rosário, batalha de lepanto, 7 de outubro, novena terço, mistérios do rosário" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/novena-nossa-senhora-rosario" />
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
                            <span className="text-text">Novena de Nossa Senhora do Rosário</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena de Nossa Senhora do Rosário</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Novena de Nossa Senhora do Rosário é tradicionalmente rezada em outubro, mês dedicado ao Santo Rosário. A festa é celebrada em 7 de outubro, lembrando a vitória de Lepanto.</p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-blue-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">A História do Rosário</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Rosário foi dado por Nossa Senhora a São Domingos no século XIII. Em 1571, a vitória cristã na Batalha de Lepanto foi atribuída à intercessão de Nossa Senhora do Rosário. O Papa Pio V instituiu a festa em 7 de outubro. Outubro é o mês do Rosário, quando somos convidados a rezar o <Link to="/blog/como-rezar-rosario" className="text-accent hover:underline">Santo Terço</Link> com mais fervor.
                            </p>

                            <QuizCTA
                                title="Você conhece os mistérios do Rosário?"
                                description="O Rosário é a arma espiritual por excelência. Faça nosso quiz e aprofunde sua devoção mariana."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Rezar a Novena</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A novena começa no dia 28 de setembro e termina no dia 6 de outubro, véspera da festa. Cada dia medita-se sobre um aspecto do Rosário e reza-se pelo menos um terço.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração Inicial (todos os dias)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Virgem Santíssima do Rosário,<br />
                                    que em Fátima revelastes aos pastorinhos<br />
                                    o poder desta oração,<br />
                                    ensinai-nos a rezar o Rosário com fé e amor.<br />
                                    Que cada Ave Maria seja uma rosa<br />
                                    que depositamos em vossas mãos.<br />
                                    Que cada mistério nos aproxime mais de Jesus.<br />
                                    Ó Rainha do Santíssimo Rosário,<br />
                                    rogai por nós. Amém.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Nove Dias da Novena</h2>
                            
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1º Dia - Os Mistérios Gozosos</h3>
                            <p className="text-text leading-relaxed mb-4">Meditamos sobre a alegria da Encarnação: Anunciação, Visitação, Nascimento, Apresentação e Encontro no Templo.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2º Dia - Os Mistérios Luminosos</h3>
                            <p className="text-text leading-relaxed mb-4">Contemplamos a vida pública de Jesus: Batismo, Caná, Pregação, Transfiguração e Instituição da Eucaristia.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3º Dia - Os Mistérios Dolorosos</h3>
                            <p className="text-text leading-relaxed mb-4">Meditamos sobre a Paixão: Agonia, Flagelação, Coroação de Espinhos, Via Crucis e Crucificação.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4º Dia - Os Mistérios Gloriosos</h3>
                            <p className="text-text leading-relaxed mb-4">Contemplamos a glória: Ressurreição, Ascensão, Pentecostes, Assunção e Coroação de Maria.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">5º Dia - O Poder do Rosário</h3>
                            <p className="text-text leading-relaxed mb-4">Meditamos sobre as vitórias alcançadas pelo Rosário, especialmente Lepanto. Maria é nossa arma espiritual.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">6º Dia - Fátima e o Rosário</h3>
                            <p className="text-text leading-relaxed mb-4">Em <Link to="/blog/oracao-fatima" className="text-accent hover:underline">Fátima</Link>, Nossa Senhora pediu que rezássemos o Terço todos os dias pela paz do mundo.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">7º Dia - O Rosário em Família</h3>
                            <p className="text-text leading-relaxed mb-4">Família que reza unida permanece unida. Pedimos a graça de rezar o Terço em família.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">8º Dia - Pela Paz no Mundo</h3>
                            <p className="text-text leading-relaxed mb-4">O Rosário é a oração pela paz. Pedimos a paz para o mundo, especialmente onde há guerras e conflitos.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">9º Dia - Pelas Nossas Intenções</h3>
                            <p className="text-text leading-relaxed mb-4">Apresentamos todas as nossas intenções a Nossa Senhora do Rosário, confiando em sua intercessão.</p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Oração Final</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Após a meditação de cada dia, reza-se um Terço completo (5 dezenas) meditando os mistérios do dia.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Rezai o Terço todos os dias para alcançar a paz para o mundo e o fim da guerra."</p>
                                <p className="text-text-muted text-center mt-2">— Nossa Senhora de Fátima, 1917</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="novena-nossa-senhora-rosario" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua devoção ao Rosário?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como o Terço pode transformar sua vida espiritual.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NovenaSantoAntonio() {
    return (
        <>
            <Helmet>
                <title>Novena de Santo Antônio: Padroeiro dos Pobres e Casamenteiro | Bom Católico</title>
                <meta name="description" content="Reze a Novena de Santo Antônio completa. Popular no Brasil, especialmente em junho, para pedidos de casamento, trabalho e causas urgentes." />
                <meta name="keywords" content="novena santo antônio, santo antônio casamenteiro, 13 de junho, novena de santo antônio completa, santo antônio de pádua, padroeiro dos pobres, oração para encontrar marido, oração para encontrar esposa, festa junina santo antônio, trezena santo antônio, santo antônio achados e perdidos" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/novena-santo-antonio" />
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
                            <span className="text-text">Novena de Santo Antônio</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena de Santo Antônio de Pádua</h1>
                            <p className="text-xl text-text-muted leading-relaxed">Santo Antônio é um dos santos mais populares do Brasil, invocado para encontrar objetos perdidos, casamento, trabalho e causas urgentes. Sua festa em 13 de junho é celebrada em todo o país.</p>
                        </header>

                        <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-amber-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">Quem Foi Santo Antônio</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Santo Antônio nasceu em Lisboa em 1195 e morreu em Pádua em 1231. Foi franciscano, grande pregador e doutor da Igreja. É conhecido como "santo casamenteiro" e padroeiro dos pobres. Sua festa é 13 de junho, muito celebrada nas festas juninas brasileiras.
                            </p>

                            <QuizCTA
                                title="Você conhece os santos?"
                                description="Santo Antônio é intercessor poderoso. Faça nosso quiz e aprofunde sua devoção aos santos."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Rezar a Novena</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A novena começa no dia 4 de junho e termina no dia 12, véspera da festa. Pode ser rezada em qualquer época do ano para pedir a intercessão do santo. Tradicionalmente, também se reza a Trezena (13 dias) em preparação para sua festa.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração Inicial (todos os dias)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Ó glorioso Santo Antônio,<br />
                                    que recebestes de Deus o poder especial<br />
                                    de socorrer os que vos invocam,<br />
                                    olhai para mim que humildemente vos suplico.<br />
                                    Vós que fostes tão compassivo para com os pobres,<br />
                                    ajudai-me em minhas necessidades.<br />
                                    Vós que encontrastes o Menino Jesus perdido,<br />
                                    ajudai-me a encontrar o que perdi.<br />
                                    Vós que unistes tantos corações,<br />
                                    ajudai-me a encontrar o amor verdadeiro.<br />
                                    Por vossa intercessão, alcançai-me de Deus<br />
                                    a graça que tanto desejo. Amém.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Nove Dias da Novena</h2>
                            
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1º Dia - Pela Fé</h3>
                            <p className="text-text leading-relaxed mb-4">Santo Antônio foi grande defensor da fé católica. Pedimos uma fé firme e inabalável como a dele.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2º Dia - Pela Humildade</h3>
                            <p className="text-text leading-relaxed mb-4">Apesar de sua sabedoria, Santo Antônio era humilde. Pedimos a graça de sermos humildes de coração.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3º Dia - Pela Caridade</h3>
                            <p className="text-text leading-relaxed mb-4">Padroeiro dos pobres, Santo Antônio amava os necessitados. Pedimos um coração generoso e caridoso.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4º Dia - Pelo Trabalho</h3>
                            <p className="text-text leading-relaxed mb-4">Muitos pedem a Santo Antônio por emprego e trabalho digno. Confiamos nossas necessidades profissionais.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">5º Dia - Pela Família</h3>
                            <p className="text-text leading-relaxed mb-4">Santo Antônio é protetor das famílias. Pedimos paz e união em nossos lares, como ensina <Link to="/blog/novena-sao-jose" className="text-accent hover:underline">São José</Link>.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">6º Dia - Pelo Casamento</h3>
                            <p className="text-text leading-relaxed mb-4">Como "santo casamenteiro", pedimos por um bom casamento ou pela santificação do matrimônio já existente.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">7º Dia - Pelas Coisas Perdidas</h3>
                            <p className="text-text leading-relaxed mb-4">Santo Antônio é invocado para encontrar objetos perdidos. Pedimos também para encontrar o que perdemos espiritualmente.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">8º Dia - Pela Conversão</h3>
                            <p className="text-text leading-relaxed mb-4">Grande pregador, Santo Antônio converteu muitos. Pedimos pela conversão dos pecadores e nossa própria conversão.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">9º Dia - Pelas Nossas Intenções</h3>
                            <p className="text-text leading-relaxed mb-4">Apresentamos todas as nossas intenções particulares a Santo Antônio, confiando em sua poderosa intercessão.</p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Oração Final</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Após a meditação de cada dia, reza-se: 3 <Link to="/blog/oracao-ave-maria" className="text-accent hover:underline">Ave Marias</Link>, 1 <Link to="/blog/oracao-pai-nosso" className="text-accent hover:underline">Pai Nosso</Link>, 1 <Link to="/blog/oracao-gloria-ao-pai" className="text-accent hover:underline">Glória ao Pai</Link>.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Responsório de Santo Antônio</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Se milagres desejais, recorrei a Santo Antônio.<br />
                                    Vereis fugir o demônio e as tentações do mal.<br />
                                    Recupera-se o perdido, rompe-se a prisão, o erro;<br />
                                    Fogem a peste e o perigo, os doentes ficam sãos.<br />
                                    O mar se acalma e cede, os cativos são libertos;<br />
                                    Jovens e velhos podem andar e ver.<br />
                                    Somem os males, foge a miséria;<br />
                                    Digam-no os que experimentaram, digam-no os padovanos.<br />
                                    Glória ao Pai, ao Filho e ao Espírito Santo. Amém.
                                </p>
                            </div>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Ó língua bendita, que sempre louvaste o Senhor e O fizeste ser louvado pelos outros, agora se vê claramente quão grande foi o teu mérito diante de Deus."</p>
                                <p className="text-text-muted text-center mt-2">— São Boaventura, sobre Santo Antônio</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="novena-santo-antonio" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua devoção aos santos?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como os santos podem transformar sua vida espiritual.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

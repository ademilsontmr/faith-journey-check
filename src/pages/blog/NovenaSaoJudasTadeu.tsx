import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NovenaSaoJudasTadeu() {
    return (
        <>
            <Helmet>
                <title>Novena de São Judas Tadeu: Padroeiro das Causas Impossíveis | Bom Católico</title>
                <meta name="description" content="Reze a Novena de São Judas Tadeu completa. Padroeiro das causas impossíveis e desesperadas, muito invocado em situações difíceis." />
                <meta name="keywords" content="novena são judas tadeu, são judas tadeu causas impossíveis, oração são judas tadeu, 28 de outubro, novena causas desesperadas, santo das causas perdidas, oração para causas urgentes, são judas tadeu milagres, novena poderosa são judas" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/novena-sao-judas-tadeu" />
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
                            <span className="text-text">Novena de São Judas Tadeu</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena de São Judas Tadeu: Padroeiro das Causas Impossíveis</h1>
                            <p className="text-xl text-text-muted leading-relaxed">São Judas Tadeu é um dos apóstolos de Jesus, invocado especialmente nas causas impossíveis e desesperadas. Sua devoção é muito forte no Brasil.</p>
                        </header>

                        <div className="aspect-video bg-green-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-green-600" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">Quem Foi São Judas Tadeu</h2>
                            <p className="text-text leading-relaxed mb-6">
                                São Judas Tadeu foi um dos doze apóstolos de Jesus, primo do Senhor. É autor de uma das cartas do Novo Testamento. Pregou na Mesopotâmia e Pérsia, onde foi martirizado. Sua festa é celebrada em 28 de outubro. É chamado "padroeiro das causas impossíveis" porque, por ter nome semelhante a Judas Iscariotes, poucos o invocavam, e ele atendia prontamente quem recorria a ele.
                            </p>

                            <QuizCTA
                                title="Você conhece os apóstolos?"
                                description="São Judas Tadeu foi um dos doze. Faça nosso quiz e aprofunde seu conhecimento sobre os apóstolos."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Rezar a Novena</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A novena pode ser rezada em qualquer época do ano, especialmente quando enfrentamos situações difíceis ou aparentemente impossíveis. Tradicionalmente, começa no dia 19 de outubro, terminando no dia 27, véspera da festa.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração Inicial (todos os dias)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    São Judas Tadeu, glorioso apóstolo,<br />
                                    fiel servo e amigo de Jesus,<br />
                                    o nome do traidor foi a causa<br />
                                    de serdes esquecido por muitos.<br />
                                    Mas a Igreja vos honra e invoca universalmente<br />
                                    como padroeiro dos casos desesperados<br />
                                    e dos negócios sem remédio.<br />
                                    Rogai por mim que sou tão miserável.<br />
                                    Fazei uso, eu vos imploro,<br />
                                    desse privilégio especial a vós concedido<br />
                                    de socorrer visivelmente e prontamente<br />
                                    quando quase se perdeu toda a esperança.<br />
                                    Vinde em meu auxílio nesta grande necessidade,<br />
                                    para que eu receba as consolações e o socorro do céu<br />
                                    em todas as minhas necessidades, tribulações e sofrimentos.<br />
                                    Amém.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Nove Dias da Novena</h2>
                            
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1º Dia - Pela Esperança</h3>
                            <p className="text-text leading-relaxed mb-4">São Judas Tadeu nos ensina a nunca perder a esperança. Pedimos a graça de confiar em Deus mesmo nas situações mais difíceis.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2º Dia - Pela Fé</h3>
                            <p className="text-text leading-relaxed mb-4">Como apóstolo, São Judas Tadeu teve fé inabalável. Pedimos uma fé forte que não vacile diante das provações.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3º Dia - Pela Perseverança</h3>
                            <p className="text-text leading-relaxed mb-4">São Judas perseverou até o martírio. Pedimos a graça de perseverar em nossas orações e na busca do bem.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4º Dia - Pelas Causas Difíceis</h3>
                            <p className="text-text leading-relaxed mb-4">Apresentamos a São Judas Tadeu todas as nossas causas difíceis, confiando em sua poderosa intercessão.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">5º Dia - Pela Família</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos por nossas famílias, especialmente pelos membros que enfrentam situações difíceis. Que <Link to="/blog/novena-sao-jose" className="text-accent hover:underline">São José</Link> e São Judas protejam nossos lares.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">6º Dia - Pelo Trabalho</h3>
                            <p className="text-text leading-relaxed mb-4">Muitos recorrem a São Judas Tadeu por emprego e trabalho. Confiamos nossas necessidades profissionais.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">7º Dia - Pela Saúde</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos pela cura dos enfermos, especialmente aqueles com doenças graves ou sem diagnóstico.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">8º Dia - Pela Conversão</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos pela conversão dos pecadores, especialmente aqueles que parecem mais distantes de Deus.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">9º Dia - Pelas Nossas Intenções</h3>
                            <p className="text-text leading-relaxed mb-4">Apresentamos todas as nossas intenções particulares, especialmente as causas que parecem impossíveis.</p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Oração Final</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Após a meditação de cada dia, reza-se: 3 <Link to="/blog/oracao-ave-maria" className="text-accent hover:underline">Ave Marias</Link>, 1 <Link to="/blog/oracao-pai-nosso" className="text-accent hover:underline">Pai Nosso</Link>, 1 <Link to="/blog/oracao-gloria-ao-pai" className="text-accent hover:underline">Glória ao Pai</Link>.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Conservai-vos no amor de Deus, esperando a misericórdia de nosso Senhor Jesus Cristo para a vida eterna."</p>
                                <p className="text-text-muted text-center mt-2">— Carta de São Judas, versículo 21</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="novena-sao-judas-tadeu" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua fé católica?</h3>
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

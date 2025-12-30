import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoGloriaMissa() {
    return (
        <>
            <Helmet>
                <title>Glória a Deus nas Alturas: O Hino de Louvor da Missa | Bom Católico</title>
                <meta name="description" content="Aprenda o Glória a Deus nas Alturas completo e descubra o significado deste hino de louvor cantado na Missa dominical e nas festas litúrgicas." />
                <meta name="keywords" content="glória a deus nas alturas, gloria in excelsis deo, hino da missa, glória missa, louvor a deus, missa dominical, canto dos anjos, natal, glória completo, liturgia católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-gloria-missa" />
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
                            <span className="text-text">Glória a Deus nas Alturas</span>
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
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Orações</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Glória a Deus nas Alturas: O Hino de Louvor da Missa</h1>
                            <p className="text-xl text-text-muted leading-relaxed">O Glória é o hino angélico que cantamos na Missa para louvar a Santíssima Trindade. Começa com as palavras dos anjos no Natal.</p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Sparkles className="w-24 h-24 text-yellow-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Hino do Glória (Gloria in Excelsis Deo)</h3>
                                <p className="text-text italic text-center leading-relaxed text-sm">
                                    Glória a Deus nas alturas e paz na terra aos homens por Ele amados.<br />
                                    Senhor Deus, Rei dos céus, Deus Pai todo-poderoso: nós Vos louvamos, nós Vos bendizemos,<br />
                                    nós Vos adoramos, nós Vos glorificamos, nós Vos damos graças por Vossa imensa glória.<br />
                                    Senhor Jesus Cristo, Filho Unigênito, Senhor Deus, Cordeiro de Deus, Filho de Deus Pai:<br />
                                    Vós que tirais o pecado do mundo, tende piedade de nós;<br />
                                    Vós que tirais o pecado do mundo, acolhei a nossa súplica;<br />
                                    Vós que estais à direita do Pai, tende piedade de nós.<br />
                                    Só Vós sois o Santo, só Vós, o Senhor, só Vós, o Altíssimo, Jesus Cristo,<br />
                                    com o Espírito Santo, na glória de Deus Pai. Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Glória (em latim <em>Gloria in Excelsis Deo</em>) é um hino antiquíssimo, cantado na <Link to="/blog/significado-missa" className="text-accent hover:underline">Santa Missa</Link> desde os primeiros séculos. Começa com as palavras dos anjos aos pastores na noite de Natal (Lucas 2,14).
                            </p>

                            <QuizCTA
                                title="Você conhece as partes da Missa?"
                                description="O Glória é um dos hinos mais importantes da liturgia. Faça nosso quiz e aprofunde sua participação na Missa."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quando Cantamos o Glória?</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Glória é cantado ou rezado nos domingos (fora do Advento e da Quaresma), nas solenidades e festas. É omitido nos dias de semana comuns, no Advento e na Quaresma, para que sua alegria seja mais intensa quando retorna no Natal e na Páscoa.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Estrutura do Glória</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Louvor ao Pai</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Senhor Deus, Rei dos céus, Deus Pai todo-poderoso" — Começamos louvando o Pai com cinco verbos: louvamos, bendizemos, adoramos, glorificamos, damos graças. É uma explosão de louvor à majestade divina.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Súplica ao Filho</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Senhor Jesus Cristo, Filho Unigênito, Cordeiro de Deus" — Dirigimo-nos a Jesus com títulos que expressam Sua divindade e Sua obra redentora. Pedimos piedade e acolhimento.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Aclamação Trinitária</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Só Vós sois o Santo... com o Espírito Santo, na glória de Deus Pai" — Concluímos proclamando a unicidade de Cristo e a glória da Santíssima Trindade.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Glória e o Natal</h2>
                            <p className="text-text leading-relaxed mb-6">
                                As primeiras palavras do Glória são o canto dos anjos na noite de Natal: "Glória a Deus nas alturas e paz na terra aos homens por Ele amados" (Lucas 2,14). Por isso, o Glória tem um sabor especialmente natalino — é o canto que celebra a Encarnação do Verbo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Glória na Vigília Pascal</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Na <Link to="/blog/significado-vigilia-pascal-noite-santa" className="text-accent hover:underline">Vigília Pascal</Link>, após semanas de silêncio quaresmal, o Glória retorna com toda a força. Os sinos tocam, as luzes se acendem, e a Igreja explode em alegria pela Ressurreição de Cristo.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Glória a Deus nas alturas e paz na terra aos homens por Ele amados."</p>
                                <p className="text-text-muted text-center mt-2">— Lucas 2,14</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-gloria-missa" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer participar melhor da Missa?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como viver mais profundamente cada momento da liturgia.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

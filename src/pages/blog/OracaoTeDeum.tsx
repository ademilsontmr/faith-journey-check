import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoTeDeum() {
    return (
        <>
            <Helmet>
                <title>Te Deum: O Grande Hino de Ação de Graças | Bom Católico</title>
                <meta name="description" content="Aprenda o Te Deum completo e descubra o significado deste hino milenar de ação de graças cantado em momentos solenes de gratidão a Deus." />
                <meta name="keywords" content="te deum, te deum laudamus, hino de ação de graças, a vós ó deus louvamos, hino católico, ano novo, ação de graças, liturgia das horas, hino solene, louvor a deus" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-te-deum" />
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
                            <span className="text-text">Te Deum</span>
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
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Te Deum: O Grande Hino de Ação de Graças</h1>
                            <p className="text-xl text-text-muted leading-relaxed">O Te Deum é o hino solene de ação de graças da Igreja, cantado em momentos de grande alegria e gratidão a Deus.</p>
                        </header>

                        <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
                            <Music className="w-24 h-24 text-amber-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Te Deum (Início)</h3>
                                <p className="text-text italic text-center leading-relaxed text-sm">
                                    A Vós, ó Deus, louvamos, a Vós, Senhor, bendizemos.<br />
                                    A Vós, eterno Pai, toda a terra venera.<br />
                                    A Vós todos os anjos, a Vós os céus e todas as potestades,<br />
                                    a Vós os querubins e serafins proclamam sem cessar:<br />
                                    Santo, Santo, Santo, Senhor Deus dos exércitos!<br />
                                    Os céus e a terra estão cheios da majestade da Vossa glória.<br />
                                    A Vós louva o glorioso coro dos Apóstolos,<br />
                                    a Vós a multidão venerável dos Profetas,<br />
                                    a Vós louva o exército resplandecente dos Mártires...
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Te Deum (em latim "A Ti, Deus") é um dos hinos mais antigos e solenes da Igreja, datando do século IV. Segundo a tradição, foi composto espontaneamente por Santo Ambrósio e Santo Agostinho no batismo deste último. É cantado em momentos de grande alegria e gratidão.
                            </p>

                            <QuizCTA
                                title="Você conhece os hinos da Igreja?"
                                description="O Te Deum é um dos hinos mais importantes da tradição católica. Faça nosso quiz e aprofunde sua vida de oração."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Estrutura do Te Deum</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Louvor ao Pai</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O hino começa louvando Deus Pai, unindo nossa voz à dos anjos, querubins e serafins que cantam eternamente "Santo, Santo, Santo". É o mesmo canto do <Link to="/blog/oracao-santo" className="text-accent hover:underline">Sanctus</Link> da Missa.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Louvor da Igreja</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Mencionamos os apóstolos, profetas e mártires que louvam a Deus. A Igreja inteira — no céu e na terra — se une neste canto de gratidão.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Louvor a Cristo</h3>
                            <p className="text-text leading-relaxed mb-6">
                                A segunda parte do hino é dedicada a Jesus Cristo: sua encarnação, paixão, ressurreição e glória. Proclamamos que Ele virá julgar os vivos e os mortos.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Súplicas Finais</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O hino termina com pedidos: que Deus nos salve, nos abençoe, nos guarde do pecado e tenha misericórdia de nós.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quando Cantamos o Te Deum?</h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Na noite de Ano Novo (31 de dezembro)</li>
                                <li>Após eleições papais e ordenações episcopais</li>
                                <li>Em canonizações de santos</li>
                                <li>Após vitórias e libertações</li>
                                <li>Nos domingos e solenidades (Liturgia das Horas)</li>
                                <li>Em qualquer momento de grande ação de graças</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Te Deum na História</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ao longo da história, o Te Deum foi cantado em momentos decisivos: após batalhas, coroações, tratados de paz, descobertas. É o hino que expressa a gratidão da Igreja por todas as bênçãos recebidas de Deus.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Te Deum e o Ano Novo</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Na noite de 31 de dezembro, muitas paróquias celebram uma Missa de Ação de Graças com o canto do Te Deum. É uma forma de agradecer a Deus pelo ano que passou e pedir Suas bênçãos para o ano que começa.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"A Vós, ó Deus, louvamos, a Vós, Senhor, bendizemos."</p>
                                <p className="text-text-muted text-center mt-2">— Te Deum Laudamus</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-te-deum" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua vida de oração?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como os hinos e orações da Igreja podem transformar sua espiritualidade.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

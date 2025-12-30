import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NovenaSaoJose() {
    return (
        <>
            <Helmet>
                <title>Novena de São José: Padroeiro das Famílias e Trabalhadores | Bom Católico</title>
                <meta name="description" content="Reze a Novena de São José completa. Padroeiro das famílias, trabalhadores e da boa morte, muito rezada em março antes do dia 19." />
                <meta name="keywords" content="novena são josé, novena de são josé, 19 de março, padroeiro das famílias, padroeiro dos trabalhadores, são josé operário, pai adotivo de jesus, esposo de maria, novena completa são josé, oração são josé" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/novena-sao-jose" />
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
                            <span className="text-text">Novena de São José</span>
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
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena de São José: Padroeiro das Famílias</h1>
                            <p className="text-xl text-text-muted leading-relaxed">São José é o protetor da Sagrada Família, padroeiro dos trabalhadores e da boa morte. Sua novena é muito rezada em março.</p>
                        </header>

                        <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
                            <Shield className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">Quem Foi São José</h2>
                            <p className="text-text leading-relaxed mb-6">
                                São José foi o esposo de Maria e pai adotivo de Jesus. Homem justo e trabalhador, protegeu a Sagrada Família com seu trabalho de carpinteiro. A Igreja o venera como padroeiro universal, das famílias, dos trabalhadores e da boa morte. Sua festa principal é 19 de março, e São José Operário é celebrado em 1º de maio.
                            </p>

                            <QuizCTA
                                title="Você conhece São José?"
                                description="São José é modelo de pai e trabalhador. Faça nosso quiz e aprofunde sua devoção."
                            />

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração a São José (todos os dias)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    A vós, ó bem-aventurado São José,<br />recorremos em nossa tribulação<br />
                                    e, depois de implorar o auxílio de vossa santíssima Esposa,<br />
                                    cheios de confiança, solicitamos também o vosso patrocínio.<br />
                                    Por aquele afeto que vos uniu à Virgem Imaculada, Mãe de Deus,<br />
                                    e pelo amor paternal que tivestes ao Menino Jesus,<br />
                                    ardentemente vos suplicamos que lanceis um olhar benigno<br />
                                    sobre a herança que Jesus Cristo conquistou com seu Sangue,<br />
                                    e nos socorrais em nossas necessidades com vosso auxílio e poder.<br />
                                    Protegei, ó providentíssimo guardião da Sagrada Família,<br />
                                    os filhos eleitos de Jesus Cristo.<br />
                                    Afastai de nós, ó Pai amantíssimo, a peste do erro e do vício.<br />
                                    Assisti-nos propício do alto do céu, ó nosso fortíssimo sustentáculo,<br />
                                    na luta contra o poder das trevas.<br />
                                    E, assim como outrora salvastes da morte a vida ameaçada do Menino Jesus,<br />
                                    assim também defendei agora a santa Igreja de Deus<br />
                                    das ciladas do inimigo e de toda adversidade.<br />
                                    Amém.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Nove Dias da Novena</h2>
                            
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1º Dia - A Fé de São José</h3>
                            <p className="text-text leading-relaxed mb-4">José acreditou no anjo e acolheu Maria. Pedimos a graça de uma fé firme como a dele.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2º Dia - A Obediência de São José</h3>
                            <p className="text-text leading-relaxed mb-4">José obedeceu prontamente a Deus, fugindo para o Egito. Pedimos docilidade à vontade divina.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3º Dia - O Silêncio de São José</h3>
                            <p className="text-text leading-relaxed mb-4">José não tem palavras registradas no Evangelho, mas suas ações falam. Pedimos a graça do silêncio fecundo.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4º Dia - O Trabalho de São José</h3>
                            <p className="text-text leading-relaxed mb-4">José sustentou a família com seu trabalho de carpinteiro. Pedimos bênçãos para nosso trabalho.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">5º Dia - A Paternidade de São José</h3>
                            <p className="text-text leading-relaxed mb-4">José foi pai adotivo de Jesus com amor e dedicação. Pedimos pelos pais de família.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">6º Dia - A Castidade de São José</h3>
                            <p className="text-text leading-relaxed mb-4">José viveu em castidade com Maria. Pedimos pureza de coração e corpo.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">7º Dia - A Proteção de São José</h3>
                            <p className="text-text leading-relaxed mb-4">José protegeu Jesus e Maria dos perigos. Pedimos sua proteção para nossas famílias.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">8º Dia - A Morte de São José</h3>
                            <p className="text-text leading-relaxed mb-4">José morreu nos braços de Jesus e Maria. Pedimos a graça de uma boa morte.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">9º Dia - A Intercessão de São José</h3>
                            <p className="text-text leading-relaxed mb-4">Apresentamos nossas intenções a São José, confiando em sua poderosa intercessão.</p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Por que Rezar a São José?</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Santa Teresa de Ávila dizia: "Não me lembro de ter pedido algo a São José que ele não me tenha concedido." O Papa Francisco declarou 2021 como Ano de São José e escreveu a carta <em>Patris Corde</em> sobre ele. São José é intercessor poderoso para:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Proteção das famílias</li>
                                <li>Conseguir emprego e bênçãos no trabalho</li>
                                <li>Vender ou comprar imóveis</li>
                                <li>Graça de uma boa morte</li>
                                <li>Proteção contra o mal</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Ide a José e fazei tudo o que ele vos disser."</p>
                                <p className="text-text-muted text-center mt-2">— Gênesis 41,55 (aplicado a São José)</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="novena-sao-jose" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer conhecer mais São José?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como São José pode proteger sua família.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

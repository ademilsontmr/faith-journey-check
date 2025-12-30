import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NovenaNatal() {
    return (
        <>
            <Helmet>
                <title>Novena de Natal: Preparação para o Nascimento de Jesus | Bom Católico</title>
                <meta name="description" content="Reze a Novena de Natal completa. Tradição brasileira de preparação para o nascimento de Jesus, muito rezada em família de 16 a 24 de dezembro." />
                <meta name="keywords" content="novena de natal, novena natal completa, como rezar novena natal, preparação natal católico, 16 a 24 dezembro, nascimento jesus, presépio, advento, novena natal família, tradição natal brasil, oração natal" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/novena-natal" />
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
                            <span className="text-text">Novena de Natal</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena de Natal: Preparação para o Nascimento de Jesus</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Novena de Natal é uma das tradições mais queridas do Brasil, rezada em família de 16 a 24 de dezembro para preparar os corações para o nascimento do Menino Jesus.</p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Star className="w-24 h-24 text-yellow-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">A Tradição da Novena de Natal</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Novena de Natal é uma tradição católica que remonta ao século XVIII. No Brasil, tornou-se uma das práticas religiosas mais populares, reunindo famílias em torno do presépio para rezar e cantar. Começa no dia 16 de dezembro e termina na véspera de Natal, dia 24.
                            </p>

                            <QuizCTA
                                title="Você conhece as tradições católicas?"
                                description="O Natal é o centro do ano litúrgico. Faça nosso quiz e aprofunde sua fé católica."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Rezar a Novena</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A novena é rezada preferencialmente em família, diante do presépio. Cada dia tem uma meditação sobre a vinda do Salvador. Tradicionalmente, canta-se "Vinde, vinde, Emmanuel" ou outros cânticos natalinos.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração Inicial (todos os dias)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Ó Deus, que iluminastes esta noite santíssima<br />
                                    com o esplendor da verdadeira luz,<br />
                                    concedei-nos que, tendo conhecido na terra<br />
                                    os mistérios desta luz,<br />
                                    possamos também gozar de suas alegrias no céu.<br />
                                    Por Nosso Senhor Jesus Cristo, vosso Filho,<br />
                                    que convosco vive e reina na unidade do Espírito Santo,<br />
                                    Deus, por todos os séculos dos séculos. Amém.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Nove Dias da Novena</h2>
                            
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1º Dia (16/12) - A Promessa do Salvador</h3>
                            <p className="text-text leading-relaxed mb-4">Meditamos sobre as profecias do Antigo Testamento que anunciavam a vinda do Messias. Deus prometeu enviar um Salvador.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2º Dia (17/12) - A Anunciação</h3>
                            <p className="text-text leading-relaxed mb-4">O anjo Gabriel anuncia a Maria que ela será a Mãe do Salvador. Maria diz seu "sim" e o Verbo se faz carne.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3º Dia (18/12) - A Visitação</h3>
                            <p className="text-text leading-relaxed mb-4">Maria visita Isabel e canta o <Link to="/blog/oracao-magnificat" className="text-accent hover:underline">Magnificat</Link>. João Batista salta de alegria no ventre de sua mãe.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4º Dia (19/12) - São José</h3>
                            <p className="text-text leading-relaxed mb-4"><Link to="/blog/novena-sao-jose" className="text-accent hover:underline">São José</Link>, homem justo, aceita sua missão de ser o pai adotivo de Jesus e esposo de Maria.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">5º Dia (20/12) - A Viagem a Belém</h3>
                            <p className="text-text leading-relaxed mb-4">Maria e José viajam a Belém para o recenseamento. Não encontram lugar nas hospedarias.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">6º Dia (21/12) - A Espera</h3>
                            <p className="text-text leading-relaxed mb-4">Maria e José esperam o nascimento do Menino. Preparamos nossos corações como eles prepararam a manjedoura.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">7º Dia (22/12) - Os Pastores</h3>
                            <p className="text-text leading-relaxed mb-4">Os pastores serão os primeiros a receber a boa nova. Deus escolhe os humildes para revelar seus mistérios.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">8º Dia (23/12) - Os Anjos</h3>
                            <p className="text-text leading-relaxed mb-4">Os anjos cantarão "Glória a Deus nas alturas e paz na terra aos homens de boa vontade".</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">9º Dia (24/12) - A Noite Santa</h3>
                            <p className="text-text leading-relaxed mb-4">É a véspera de Natal. Jesus está prestes a nascer. Preparamos nossos corações para recebê-Lo.</p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Oração Final</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Após a meditação de cada dia, reza-se: 3 <Link to="/blog/oracao-ave-maria" className="text-accent hover:underline">Ave Marias</Link>, 1 <Link to="/blog/oracao-pai-nosso" className="text-accent hover:underline">Pai Nosso</Link>, 1 <Link to="/blog/oracao-gloria-ao-pai" className="text-accent hover:underline">Glória ao Pai</Link>.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Eis que a Virgem conceberá e dará à luz um filho, e ele será chamado Emanuel, que significa: Deus conosco."</p>
                                <p className="text-text-muted text-center mt-2">— Mateus 1,23</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="novena-natal" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer viver um Natal mais católico?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como aprofundar sua fé neste tempo de graça.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

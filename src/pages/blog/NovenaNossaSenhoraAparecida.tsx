import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NovenaNossaSenhoraAparecida() {
    return (
        <>
            <Helmet>
                <title>Novena de Nossa Senhora Aparecida: Padroeira do Brasil | Bom Católico</title>
                <meta name="description" content="Reze a Novena de Nossa Senhora Aparecida completa. Aprenda como fazer a novena à Padroeira do Brasil, muito rezada em outubro e em família." />
                <meta name="keywords" content="novena nossa senhora aparecida, novena aparecida, padroeira do brasil, 12 de outubro, como rezar novena aparecida, nossa senhora aparecida oração, novena completa aparecida, mãe aparecida, santuário aparecida, devoção mariana brasil" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/novena-nossa-senhora-aparecida" />
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
                            <span className="text-text">Novena de Nossa Senhora Aparecida</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena de Nossa Senhora Aparecida: Padroeira do Brasil</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Novena de Nossa Senhora Aparecida é uma das devoções mais queridas do povo brasileiro, rezada especialmente em outubro em preparação para o dia 12.</p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-blue-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">A História de Nossa Senhora Aparecida</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Em 1717, pescadores encontraram no rio Paraíba do Sul uma pequena imagem de Nossa Senhora da Conceição, escurecida pelas águas. A partir daquele dia, os milagres começaram a acontecer. Em 1930, Pio XI proclamou Nossa Senhora Aparecida Padroeira do Brasil, e sua festa é celebrada em 12 de outubro.
                            </p>

                            <QuizCTA
                                title="Você conhece a devoção mariana?"
                                description="Nossa Senhora Aparecida é a Mãe do povo brasileiro. Faça nosso quiz e aprofunde sua fé católica."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Rezar a Novena</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A novena começa no dia 3 de outubro e termina no dia 11, véspera da festa. Pode ser rezada em família, na paróquia ou individualmente. Cada dia tem uma intenção especial.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração Inicial (todos os dias)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Ó incomparável Senhora da Conceição Aparecida,<br />
                                    Mãe de meu Deus, Rainha dos Anjos, Advogada dos pecadores,<br />
                                    refúgio e consolação dos aflitos e atribulados,<br />
                                    ó Virgem Santíssima, cheia de poder e bondade,<br />
                                    lançai sobre nós um olhar favorável,<br />
                                    para que sejamos socorridos em todas as necessidades.<br />
                                    Lembrai-vos, clementíssima Mãe Aparecida,<br />
                                    que não se consta que algum daqueles que têm a vós recorrido,<br />
                                    implorado a vossa assistência e reclamado o vosso socorro,<br />
                                    fosse por vós desamparado.<br />
                                    Animado com igual confiança, a vós recorro,<br />
                                    tomo-vos de hoje em diante por minha Mãe,<br />
                                    minha protetora, minha consolação e guia,<br />
                                    minha esperança e minha luz na hora da morte.<br />
                                    Assim seja.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Nove Dias da Novena</h2>
                            
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1º Dia - Pela Igreja</h3>
                            <p className="text-text leading-relaxed mb-4">Rezamos pelo Papa, bispos, padres e toda a Igreja. Pedimos que Nossa Senhora proteja a <Link to="/blog/igreja-corpo-cristo" className="text-accent hover:underline">Igreja, Corpo de Cristo</Link>.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2º Dia - Pelo Brasil</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos pela nossa pátria, seus governantes e todo o povo brasileiro. Que Nossa Senhora Aparecida abençoe e proteja o Brasil.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3º Dia - Pelas Famílias</h3>
                            <p className="text-text leading-relaxed mb-4">Rezamos por todas as famílias, especialmente as que passam por dificuldades. Que Maria seja o modelo de mãe e esposa.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4º Dia - Pelos Enfermos</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos pela cura dos doentes e conforto para os que sofrem. Nossa Senhora é a Saúde dos Enfermos.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">5º Dia - Pelos Jovens</h3>
                            <p className="text-text leading-relaxed mb-4">Rezamos pela juventude, para que encontre em Maria um modelo de fé e pureza.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">6º Dia - Pelas Vocações</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos por vocações sacerdotais e religiosas. Que muitos jovens respondam ao chamado de Deus.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">7º Dia - Pelos Pecadores</h3>
                            <p className="text-text leading-relaxed mb-4">Rezamos pela conversão dos pecadores. Maria é o Refúgio dos Pecadores e intercede por nossa salvação.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">8º Dia - Pelos Falecidos</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos pelas almas do <Link to="/blog/o-que-e-purgatorio" className="text-accent hover:underline">Purgatório</Link>, especialmente nossos familiares. Que alcancem a glória do Céu.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">9º Dia - Pelas Nossas Intenções</h3>
                            <p className="text-text leading-relaxed mb-4">Apresentamos nossas intenções particulares a Nossa Senhora Aparecida, confiando em sua intercessão maternal.</p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Oração Final</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Após a meditação de cada dia, reza-se: 3 <Link to="/blog/oracao-ave-maria" className="text-accent hover:underline">Ave Marias</Link>, 1 <Link to="/blog/oracao-pai-nosso" className="text-accent hover:underline">Pai Nosso</Link>, 1 <Link to="/blog/oracao-gloria-ao-pai" className="text-accent hover:underline">Glória ao Pai</Link> e a Salve Rainha.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Viva a Mãe de Deus e nossa, sem pecado concebida! Viva a Virgem Imaculada, a Senhora Aparecida!"</p>
                                <p className="text-text-muted text-center mt-2">— Hino a Nossa Senhora Aparecida</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="novena-nossa-senhora-aparecida" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua devoção mariana?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como Nossa Senhora pode transformar sua vida espiritual.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

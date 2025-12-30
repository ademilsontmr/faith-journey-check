import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NovenaSagradoCoracao() {
    return (
        <>
            <Helmet>
                <title>Novena do Sagrado Coração de Jesus: Amor e Misericórdia | Bom Católico</title>
                <meta name="description" content="Reze a Novena do Sagrado Coração de Jesus completa. Uma das novenas mais antigas da Igreja, focada no amor, misericórdia e reparação ao Coração de Cristo." />
                <meta name="keywords" content="novena sagrado coração de jesus, sagrado coração, coração de jesus, novena das sextas-feiras, primeiras sextas-feiras, reparação ao coração de jesus, amor de jesus, misericórdia divina, devoção ao sagrado coração, promessas do sagrado coração" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/novena-sagrado-coracao-jesus" />
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
                            <span className="text-text">Novena do Sagrado Coração de Jesus</span>
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
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena do Sagrado Coração de Jesus</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Novena do Sagrado Coração é uma das mais antigas e poderosas devoções da Igreja, centrada no amor infinito de Jesus por nós.</p>
                        </header>

                        <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-red-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">A Devoção ao Sagrado Coração</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus revelou Seu Sagrado Coração a Santa Margarida Maria Alacoque no século XVII, pedindo amor e reparação. O Coração de Jesus, traspassado na cruz, é símbolo do amor infinito de Deus pela humanidade. A festa do Sagrado Coração é celebrada na sexta-feira após Corpus Christi.
                            </p>

                            <QuizCTA
                                title="Você conhece o amor de Jesus?"
                                description="O Sagrado Coração é fonte de misericórdia. Faça nosso quiz e aprofunde sua relação com Cristo."
                            />

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração ao Sagrado Coração (todos os dias)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Ó Coração Santíssimo de Jesus,<br />fonte de toda bênção,<br />
                                    eu Vos adoro, eu Vos amo<br />e com viva dor de meus pecados<br />
                                    Vos ofereço este pobre coração.<br />Fazei-o humilde, paciente,<br />
                                    puro e inteiramente conforme aos Vossos desejos.<br />
                                    Concedei, ó bom Jesus,<br />que eu viva em Vós e para Vós.<br />
                                    Protegei-me nos perigos,<br />consolai-me nas aflições,<br />
                                    concedei-me a saúde do corpo,<br />a assistência em minhas necessidades,<br />
                                    a bênção em todas as minhas obras<br />e a graça de uma santa morte. Amém.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">As Doze Promessas do Sagrado Coração</h2>
                            <p className="text-text leading-relaxed mb-4">Jesus fez doze promessas aos devotos do Seu Sagrado Coração:</p>
                            <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                                <li>Dar-lhes-ei todas as graças necessárias ao seu estado</li>
                                <li>Porei a paz em suas famílias</li>
                                <li>Consolá-los-ei em todas as suas aflições</li>
                                <li>Serei seu refúgio seguro durante a vida e na hora da morte</li>
                                <li>Derramarei abundantes bênçãos sobre suas empresas</li>
                                <li>Os pecadores encontrarão em meu Coração a fonte da misericórdia</li>
                                <li>As almas tíbias se tornarão fervorosas</li>
                                <li>As almas fervorosas elevar-se-ão à grande perfeição</li>
                                <li>Abençoarei as casas onde a imagem do meu Coração for exposta</li>
                                <li>Darei aos sacerdotes o dom de tocar os corações mais endurecidos</li>
                                <li>Os nomes dos que propagarem esta devoção serão escritos em meu Coração</li>
                                <li>A todos que comungarem nas primeiras sextas-feiras, durante nove meses, darei a graça da perseverança final</li>
                            </ol>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Nove Dias da Novena</h2>
                            
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1º Dia - O Amor do Coração de Jesus</h3>
                            <p className="text-text leading-relaxed mb-4">Meditamos no amor infinito que Jesus tem por cada um de nós, manifestado em Seu Coração traspassado.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2º Dia - A Misericórdia do Coração de Jesus</h3>
                            <p className="text-text leading-relaxed mb-4">Contemplamos a misericórdia que brota do Coração de Cristo para os pecadores arrependidos.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3º Dia - A Humildade do Coração de Jesus</h3>
                            <p className="text-text leading-relaxed mb-4">"Aprendei de mim que sou manso e humilde de coração" (Mt 11,29). Pedimos a graça da humildade.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4º Dia - A Paciência do Coração de Jesus</h3>
                            <p className="text-text leading-relaxed mb-4">Meditamos na paciência de Jesus diante das ofensas e pedimos força para suportar as provações.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">5º Dia - A Obediência do Coração de Jesus</h3>
                            <p className="text-text leading-relaxed mb-4">Jesus foi obediente até a morte de cruz. Pedimos a graça de fazer a vontade de Deus.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">6º Dia - A Pureza do Coração de Jesus</h3>
                            <p className="text-text leading-relaxed mb-4">Contemplamos a pureza do Coração de Cristo e pedimos um coração limpo.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">7º Dia - A Generosidade do Coração de Jesus</h3>
                            <p className="text-text leading-relaxed mb-4">Jesus deu tudo por nós. Pedimos a graça de sermos generosos com Deus e o próximo.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">8º Dia - O Zelo do Coração de Jesus</h3>
                            <p className="text-text leading-relaxed mb-4">Meditamos no zelo de Jesus pela salvação das almas e pedimos ardor missionário.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">9º Dia - A Reparação ao Coração de Jesus</h3>
                            <p className="text-text leading-relaxed mb-4">Oferecemos reparação pelas ofensas cometidas contra o Sagrado Coração e pedimos nossas graças.</p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Eis aqui este Coração que tanto amou os homens e que, em troca, só recebe ingratidões."</p>
                                <p className="text-text-muted text-center mt-2">— Jesus a Santa Margarida Maria</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="novena-sagrado-coracao-jesus" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer conhecer mais o amor de Jesus?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como o Sagrado Coração pode transformar sua vida.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

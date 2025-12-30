import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoCordeiroDeDeus() {
    return (
        <>
            <Helmet>
                <title>Cordeiro de Deus: A Oração Antes da Comunhão | Bom Católico</title>
                <meta name="description" content="Aprenda o Cordeiro de Deus (Agnus Dei) completo e descubra o significado desta oração que rezamos na Missa antes de receber a Sagrada Comunhão." />
                <meta name="keywords" content="cordeiro de deus, agnus dei, oração da missa, cordeiro de deus que tirais, tende piedade de nós, antes da comunhão, missa católica, fração do pão, dai-nos a paz, comunhão eucarística" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-cordeiro-de-deus" />
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
                            <span className="text-text">Cordeiro de Deus</span>
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
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Cordeiro de Deus: A Oração Antes da Comunhão</h1>
                            <p className="text-xl text-text-muted leading-relaxed">O Cordeiro de Deus (Agnus Dei) é cantado durante a fração do pão, preparando-nos para receber Jesus na Sagrada Comunhão.</p>
                        </header>

                        <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração do Cordeiro de Deus (Agnus Dei)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Cordeiro de Deus, que tirais o pecado do mundo,<br />tende piedade de nós.<br />
                                    Cordeiro de Deus, que tirais o pecado do mundo,<br />tende piedade de nós.<br />
                                    Cordeiro de Deus, que tirais o pecado do mundo,<br />dai-nos a paz.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Cordeiro de Deus (em latim <em>Agnus Dei</em>) é cantado ou rezado durante a fração do pão, quando o sacerdote parte a hóstia consagrada. É o último canto antes da Comunhão, preparando nossos corações para receber Jesus.
                            </p>

                            <QuizCTA
                                title="Você conhece as partes da Missa?"
                                description="O Cordeiro de Deus nos prepara para a Comunhão. Faça nosso quiz e aprofunde sua participação na liturgia."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Origem Bíblica</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O título "Cordeiro de Deus" vem de João Batista, que ao ver Jesus disse: "Eis o Cordeiro de Deus, que tira o pecado do mundo" (João 1,29). Jesus é o verdadeiro Cordeiro Pascal, cujo sangue nos liberta da escravidão do pecado, assim como o sangue do cordeiro libertou Israel do Egito.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Significado de Cada Parte</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Cordeiro de Deus, que tirais o pecado do mundo"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Reconhecemos Jesus como o sacrifício perfeito que expia nossos pecados. Na cruz, Ele se ofereceu como o Cordeiro sem mancha para nos reconciliar com o Pai. Saiba mais sobre a <Link to="/blog/pecado-original-redencao" className="text-accent hover:underline">Redenção</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Tende piedade de nós"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos a misericórdia de Jesus. Mesmo após a Redenção, continuamos pecadores necessitados de Sua piedade. É um eco do <Link to="/blog/oracao-ato-contricao" className="text-accent hover:underline">Ato de Contrição</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"Dai-nos a paz"</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Na terceira invocação, pedimos a paz — dom do Ressuscitado aos apóstolos: "A paz esteja convosco" (João 20,19). É a paz que o mundo não pode dar, fruto da reconciliação com Deus.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Cordeiro de Deus na Liturgia</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Agnus Dei é cantado enquanto o sacerdote parte a hóstia e coloca um fragmento no cálice. Este gesto simboliza a unidade do Corpo e Sangue de Cristo. Logo após, o sacerdote mostra a hóstia dizendo: "Eis o Cordeiro de Deus..." — e nós respondemos: "Senhor, eu não sou digno..."
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Cordeiro no Apocalipse</h2>
                            <p className="text-text leading-relaxed mb-6">
                                No livro do Apocalipse, Jesus aparece como "o Cordeiro que foi imolado" (Ap 5,12), adorado por toda a criação. A <Link to="/blog/sacramento-eucaristia" className="text-accent hover:underline">Eucaristia</Link> é uma antecipação desta liturgia celestial.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Digno é o Cordeiro que foi imolado de receber o poder, a riqueza, a sabedoria, a força, a honra, a glória e o louvor!"</p>
                                <p className="text-text-muted text-center mt-2">— Apocalipse 5,12</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-cordeiro-de-deus" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer participar melhor da Missa?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como viver mais profundamente a Santa Missa.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoCredoApostolico() {
    return (
        <>
            <Helmet>
                <title>Credo dos Apóstolos: A Profissão de Fé Católica | Bom Católico</title>
                <meta name="description" content="Aprenda o Credo dos Apóstolos completo e entenda o significado de cada artigo desta profissão de fé que resume as verdades fundamentais do cristianismo." />
                <meta name="keywords" content="credo, credo dos apóstolos, creio em deus pai, profissão de fé, símbolo dos apóstolos, credo católico, creio em deus pai todo poderoso, artigos do credo, fé católica, credo completo" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-credo-apostolico" />
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
                        <Link to="/quiz">
                            <Button variant="secondary" size="sm">
                                Fazer o Quiz
                            </Button>
                        </Link>
                    </div>
                </header>

                <div className="bg-background-muted/50 py-3">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link to="/" className="hover:text-accent">Home</Link>
                            <span>/</span>
                            <Link to="/blog" className="hover:text-accent">Blog</Link>
                            <span>/</span>
                            <span className="text-text">Credo dos Apóstolos</span>
                        </nav>
                    </div>
                </div>

                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Voltar ao Blog
                        </Link>

                        <header className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                                    Orações
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    30 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    12 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Credo dos Apóstolos: A Profissão de Fé Católica
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O Credo é o resumo da fé cristã. Cada palavra foi cuidadosamente escolhida para expressar as verdades que cremos e pelas quais vivemos.
                            </p>
                        </header>

                        <div className="aspect-video bg-purple-50 rounded-2xl flex items-center justify-center mb-10">
                            <BookOpen className="w-24 h-24 text-purple-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Credo dos Apóstolos (Símbolo Apostólico)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Creio em Deus Pai todo-poderoso,<br />
                                    Criador do céu e da terra.<br />
                                    E em Jesus Cristo, seu único Filho, nosso Senhor,<br />
                                    que foi concebido pelo poder do Espírito Santo,<br />
                                    nasceu da Virgem Maria,<br />
                                    padeceu sob Pôncio Pilatos,<br />
                                    foi crucificado, morto e sepultado,<br />
                                    desceu à mansão dos mortos,<br />
                                    ressuscitou ao terceiro dia,<br />
                                    subiu aos céus,<br />
                                    está sentado à direita de Deus Pai todo-poderoso,<br />
                                    donde há de vir a julgar os vivos e os mortos.<br />
                                    Creio no Espírito Santo,<br />
                                    na Santa Igreja Católica,<br />
                                    na comunhão dos santos,<br />
                                    na remissão dos pecados,<br />
                                    na ressurreição da carne,<br />
                                    na vida eterna.<br />
                                    Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Credo dos Apóstolos, também chamado de "Símbolo Apostólico", é uma das mais antigas profissões de fé da Igreja. Segundo a tradição, cada um dos doze apóstolos contribuiu com um artigo. Embora isso seja uma piedosa lenda, o Credo certamente reflete a fé apostólica transmitida desde os primeiros séculos.
                            </p>

                            <QuizCTA
                                title="Você conhece sua fé?"
                                description="O Credo resume tudo o que cremos como católicos. Faça nosso quiz e descubra o quanto você conhece as verdades fundamentais da fé cristã."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Três Artigos Principais
                            </h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Creio em Deus Pai
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Professamos a fé em Deus como Pai todo-poderoso e Criador. Ele não é uma força impessoal, mas um Pai amoroso que criou todas as coisas do nada e as sustenta com sua providência. Saiba mais sobre a criação em <Link to="/blog/pecado-original-redencao" className="text-accent hover:underline">O Pecado Original e a Redenção</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Creio em Jesus Cristo
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                A parte central do Credo fala de Jesus: sua concepção virginal, nascimento, paixão, morte, descida aos infernos, ressurreição, ascensão e segunda vinda. Cada evento é um mistério de salvação. Entenda mais sobre a <Link to="/blog/segunda-vinda-cristo-fim-dos-tempos-parusia" className="text-accent hover:underline">Segunda Vinda de Cristo</Link>.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. Creio no Espírito Santo
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Professamos a fé no Espírito Santo e em seus frutos: a Igreja, a comunhão dos santos, o perdão dos pecados, a ressurreição e a vida eterna. Conheça os <Link to="/blog/sete-dons-espirito-santo-como-usar" className="text-accent hover:underline">Sete Dons do Espírito Santo</Link>.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Verdades que Professamos
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>A Santa Igreja Católica:</strong> A Igreja fundada por Cristo sobre Pedro, una, santa, católica e apostólica. Leia sobre <Link to="/blog/igreja-corpo-cristo" className="text-accent hover:underline">A Igreja como Corpo de Cristo</Link>.</li>
                                <li><strong>A Comunhão dos Santos:</strong> A união espiritual entre os fiéis na terra, as almas do <Link to="/blog/o-que-e-purgatorio" className="text-accent hover:underline">Purgatório</Link> e os santos no Céu.</li>
                                <li><strong>A Remissão dos Pecados:</strong> O perdão obtido através do <Link to="/blog/sacramento-batismo" className="text-accent hover:underline">Batismo</Link> e da <Link to="/blog/sacramento-confissao" className="text-accent hover:underline">Confissão</Link>.</li>
                                <li><strong>A Ressurreição da Carne:</strong> Nossos corpos ressuscitarão no último dia. Entenda mais sobre a <Link to="/blog/ressurreicao-da-carne-nossa-esperanca-vida-eterna" className="text-accent hover:underline">Ressurreição da Carne</Link>.</li>
                                <li><strong>A Vida Eterna:</strong> O destino final de comunhão com Deus no <Link to="/blog/ceu-inferno-purgatorio" className="text-accent hover:underline">Céu</Link>.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Quando Rezamos o Credo?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Credo é rezado na Missa dominical, no início do <Link to="/blog/como-rezar-rosario" className="text-accent hover:underline">Santo Rosário</Link>, no Batismo (renovação das promessas) e em momentos de profissão de fé. É uma oração que nos une a todos os cristãos que, ao longo dos séculos, professaram a mesma fé.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A fé é o fundamento das coisas que se esperam e a prova das que não se veem."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Hebreus 11,1
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-credo-apostolico" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quanto você conhece da fé católica?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra o quanto você conhece as verdades que professamos no Credo.
                            </p>
                            <Link to="/quiz">
                                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                                    Fazer o Quiz Agora
                                </Button>
                            </Link>
                        </div>
                    </div>
                </article>

                <Footer />
            </div>
        </>
    );
}

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoPaiNosso() {
    return (
        <>
            <Helmet>
                <title>Pai Nosso: A Oração que Jesus nos Ensinou | Bom Católico</title>
                <meta name="description" content="Aprenda o Pai Nosso completo e descubra o significado profundo de cada pedido desta oração ensinada pelo próprio Jesus Cristo aos seus discípulos." />
                <meta name="keywords" content="pai nosso, oração do pai nosso, pai nosso que estais no céu, como rezar o pai nosso, significado do pai nosso, oração de jesus, pai nosso completo, oração dominical, venha a nós o vosso reino" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-pai-nosso" />
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
                            <span className="text-text">Pai Nosso</span>
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
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Pai Nosso: A Oração que Jesus nos Ensinou
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O Pai Nosso é a oração perfeita, ensinada pelo próprio Jesus. Cada palavra é um tesouro de sabedoria divina que nos ensina a nos relacionar com Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração do Pai Nosso</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Pai nosso que estais no céu,<br />
                                    santificado seja o Vosso nome;<br />
                                    venha a nós o Vosso Reino;<br />
                                    seja feita a Vossa vontade,<br />
                                    assim na terra como no céu.<br />
                                    O pão nosso de cada dia nos dai hoje;<br />
                                    perdoai-nos as nossas ofensas,<br />
                                    assim como nós perdoamos a quem nos tem ofendido;<br />
                                    e não nos deixeis cair em tentação,<br />
                                    mas livrai-nos do mal.<br />
                                    Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                Quando os discípulos pediram a Jesus que os ensinasse a rezar, Ele não lhes deu um tratado de teologia, mas uma oração simples e profunda. O Pai Nosso, também chamado de "Oração Dominical" (do latim <em>Dominus</em>, Senhor), é o modelo perfeito de toda oração cristã.
                            </p>

                            <QuizCTA
                                title="Você conhece as orações fundamentais?"
                                description="O Pai Nosso é a oração que Jesus nos ensinou. Faça nosso quiz e descubra como aprofundar sua vida de oração com as preces mais importantes da fé católica."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Significado de Cada Pedido
                            </h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Pai nosso que estais no céu"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus nos convida a chamar Deus de "Pai" (<em>Abba</em>), um termo de intimidade e confiança. Ele não é apenas "meu" Pai, mas "nosso", pois somos todos irmãos em Cristo. "Que estais no céu" não indica distância, mas a transcendência e majestade de Deus.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Santificado seja o Vosso nome"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos que o nome de Deus seja reconhecido como santo por toda a humanidade. Mais do que isso, pedimos a graça de viver de tal forma que nossa vida glorifique o nome do Pai.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Venha a nós o Vosso Reino"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Desejamos que o Reino de Deus — de justiça, paz e amor — se estabeleça em nossos corações, em nossas famílias e no mundo inteiro. É também a expectativa da vinda gloriosa de Cristo.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Seja feita a Vossa vontade"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Unimos nossa vontade à vontade de Deus, como Jesus no Getsêmani. Pedimos a graça de aceitar os planos de Deus, mesmo quando não os compreendemos.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "O pão nosso de cada dia nos dai hoje"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos o sustento material e espiritual. O "pão" é também a Eucaristia, o Pão da Vida que nos alimenta para a eternidade. Confiamos na providência divina dia após dia.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Perdoai-nos as nossas ofensas"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Reconhecemos nossa condição de pecadores e pedimos a misericórdia de Deus. Mas há uma condição: "assim como nós perdoamos". Não podemos receber o perdão se não estivermos dispostos a perdoar.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Não nos deixeis cair em tentação"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos a força para resistir às tentações e a sabedoria para evitar as ocasiões de pecado. Reconhecemos nossa fraqueza e dependência da graça divina.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Mas livrai-nos do mal"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos proteção contra o Maligno e contra todo mal físico e espiritual. É um grito de confiança no poder de Deus sobre todas as forças das trevas.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Quando Rezar o Pai Nosso?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Pai Nosso é rezado em todas as Missas, no <Link to="/blog/como-rezar-rosario" className="text-accent hover:underline">Santo Rosário</Link>, na <Link to="/blog/lectio-divina" className="text-accent hover:underline">Liturgia das Horas</Link> e em momentos de oração pessoal. É a oração que une todos os cristãos do mundo.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O Pai Nosso é verdadeiramente o resumo de todo o Evangelho."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Tertuliano
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-pai-nosso" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer aprofundar sua vida de oração?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como as orações fundamentais da Igreja podem transformar seu relacionamento com Deus.
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

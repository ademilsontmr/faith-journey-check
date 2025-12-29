import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function DonsEspiritoSanto() {
    return (
        <>
            <Helmet>
                <title>Os Dons do Espírito Santo: Como Identificá-los e Usá-los | Bom Católico</title>
                <meta name="description" content="Conheça os sete dons do Espírito Santo e saiba como eles atuam em sua vida para guiá-lo no caminho da santidade e do serviço ao próximo." />
                <meta name="keywords" content="dons do espírito santo, sabedoria, entendimento, conselho, fortaleza, ciência, piedade, temor de deus" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/sete-dons-espirito-santo-como-usar" />
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
                            <span className="text-text">Os Dons do Espírito Santo</span>
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
                                    Formação
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    15 de Abril, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Os Dons do Espírito Santo e Como Eles Atuam em Nossa Vida
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O Espírito Santo é o "Doce Hóspede da Alma". Descubra como Seus sete dons transformam nossa inteligência e vontade para vivermos como verdadeiros filhos de Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                No dia do nosso Batismo, e de forma plena na Confirmação (Crisma), recebemos o Espírito Santo com Seus sete dons. Eles não são talentos naturais, mas disposições sobrenaturais que tornam o homem dócil para seguir as inspirações divinas. São como as velas de um barco que, abertas, permitem que o sopro do Espírito nos conduza ao mar alto da santidade.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Sete Dons Explicados
                            </h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Sabedoria
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Não é o acúmulo de conhecimento, mas o "gosto" pelas coisas de Deus. O dom da Sabedoria nos permite ver o mundo, as pessoas e os acontecimentos através do olhar de Deus.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Entendimento (ou Inteligência)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Ajuda-nos a penetrar no sentido profundo das verdades reveladas e dos mistérios da fé, indo além das aparências.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. Conselho
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                É a luz que o Espírito nos dá para discernir o que é correto fazer em situações complexas da vida, escolhendo sempre o caminho que mais agrada a Deus.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                4. Fortaleza
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Dá-nos a coragem e a perseverança necessárias para enfrentar as dificuldades, perseguições e tentações, mantendo-nos fiéis a Cristo até o fim.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                5. Ciência
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Permite-nos julgar retamente as coisas criadas, vendo nelas o reflexo do Criador e não as transformando em ídolos.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                6. Piedade
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Cura nosso coração da dureza e nos dá um afeto filial para com Deus e uma fraternidade sincera para com o próximo.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                7. Temor de Deus
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Não é medo de um castigo, mas o receio amoroso de ofender a Deus, que é nosso Pai e nos ama infinitamente. É o início da verdadeira sabedoria.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Cultivar a Presença do Espírito?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Espírito Santo é uma pessoa divina com quem podemos e devemos conversar. Peça diariamente: "Vinde, Espírito Santo!". Mantenha-se em estado de graça através da confissão frequente e busque o silêncio interior para ouvir Suas moções.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O Espírito Santo é o mestre interior que nos conduz à verdade plena."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São João Paulo II
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="sete-dons-espirito-santo-como-usar" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você conhece os frutos do Espírito em sua vida?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como os dons do Espírito Santo estão atuando em sua jornada de fé e como você pode se abrir mais à Sua graça.
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

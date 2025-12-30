import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SaoFranciscoEcologia() {
    return (
        <>
            <Helmet>
                <title>São Francisco de Assis e a Ecologia Integral | Bom Católico</title>
                <meta name="description" content="Descubra como o exemplo de São Francisco de Assis nos inspira a cuidar da nossa casa comum através da ecologia integral e do respeito à criação." />
                <meta name="keywords" content="são francisco de assis, ecologia integral, laudato si, cântico das criaturas, cuidado com a criação, meio ambiente e fé, padroeiro da ecologia, espiritualidade franciscana, conversão ecológica, casa comum" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/sao-francisco-ecologia-integral" />
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
                            <span className="text-text">São Francisco e a Ecologia</span>
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
                                    Espiritualidade
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                São Francisco de Assis e a Ecologia Integral: Cuidar da Casa Comum
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O "Pobrezinho de Assis" não amava a natureza por um vago sentimentalismo, mas porque via nela a assinatura do Criador.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
                            <Leaf className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                São Francisco de Assis, o padroeiro da ecologia, nos ensina que tudo está interconectado. Sua visão de mundo, expressa de forma sublime no "Cântico das Criaturas", não separa o amor a Deus do amor ao próximo e do respeito por toda a criação. Hoje, a Igreja chama essa visão de **Ecologia Integral**.
                            </p>

                            <QuizCTA
                                title="Você cuida da obra de Deus?"
                                description="A criação é um presente divino que exige nossa responsabilidade. Faça nosso quiz e descubra como a espiritualidade franciscana pode inspirar você a viver de forma mais sustentável e santa."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Cântico das Criaturas
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ao chamar o sol de "irmão" e a lua de "irmã", Francisco reconhecia uma fraternidade universal que brota da paternidade de Deus. Para ele, a natureza não era um objeto de exploração, mas um espelho da bondade divina. Cada criatura, da menor flor ao astro mais grandioso, canta a glória do Senhor.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Laudato Si' e a Ecologia Integral
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Papa Francisco, inspirado pelo santo de Assis, escreveu a encíclica *Laudato Si'*, onde propõe que não há duas crises separadas — uma ambiental e outra social — mas uma única e complexa crise socioambiental. Cuidar da natureza é inseparável da justiça para com os pobres e da proteção da vida humana em todas as suas fases.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Passos Práticos para uma Conversão Ecológica
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Sobriedade Feliz:</strong> Viver com o que é necessário, combatendo o consumismo desenfreado.</li>
                                <li><strong>Gratidão:</strong> Reconhecer cada alimento e cada recurso como um dom de Deus.</li>
                                <li><strong>Respeito:</strong> Evitar o desperdício de água, energia e alimentos.</li>
                                <li><strong>Contemplação:</strong> Reservar momentos para admirar a beleza da criação e louvar o Criador.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Louvado sejas, meu Senhor, com todas as tuas criaturas."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Francisco de Assis
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="sao-francisco-ecologia-integral" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer aprofundar sua caminhada franciscana?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra como os valores de pobreza, paz e cuidado com a criação podem transformar sua vida espiritual através do nosso quiz personalizado.
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

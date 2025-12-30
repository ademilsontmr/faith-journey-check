import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoAveMaria() {
    return (
        <>
            <Helmet>
                <title>Ave Maria: A Saudação Angélica Completa | Bom Católico</title>
                <meta name="description" content="Aprenda a Ave Maria completa e descubra a origem bíblica e o significado profundo desta oração mariana que une as palavras do Anjo Gabriel e de Santa Isabel." />
                <meta name="keywords" content="ave maria, oração da ave maria, ave maria cheia de graça, como rezar ave maria, saudação angélica, santa maria mãe de deus, oração mariana, ave maria completa, bendita sois vós entre as mulheres" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-ave-maria" />
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
                            <span className="text-text">Ave Maria</span>
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
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Ave Maria: A Saudação Angélica Completa
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A Ave Maria é a oração mariana mais conhecida do mundo. Suas palavras vêm diretamente da Bíblia e nos conectam ao mistério da Encarnação.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração da Ave Maria</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Ave Maria, cheia de graça,<br />
                                    o Senhor é convosco,<br />
                                    bendita sois vós entre as mulheres<br />
                                    e bendito é o fruto do vosso ventre, Jesus.<br />
                                    Santa Maria, Mãe de Deus,<br />
                                    rogai por nós, pecadores,<br />
                                    agora e na hora da nossa morte.<br />
                                    Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                A Ave Maria é composta de duas partes: a primeira vem diretamente das Escrituras (as saudações do Anjo Gabriel e de Santa Isabel), e a segunda é uma súplica da Igreja pedindo a intercessão de Maria.
                            </p>

                            <QuizCTA
                                title="Você conhece a devoção mariana?"
                                description="A Ave Maria é a porta de entrada para o coração de Maria. Faça nosso quiz e descubra como aprofundar sua relação com a Mãe de Deus através das orações marianas."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Origem Bíblica da Ave Maria
                            </h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Ave Maria, cheia de graça, o Senhor é convosco"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Estas são as palavras do Anjo Gabriel na Anunciação (Lucas 1,28). "Ave" significa "alegra-te" ou "salve". "Cheia de graça" (<em>kecharitomene</em> em grego) indica que Maria foi cumulada da graça divina desde o primeiro instante de sua existência — o dogma da Imaculada Conceição.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Estas palavras foram pronunciadas por Santa Isabel, cheia do Espírito Santo, quando Maria a visitou (Lucas 1,42). Isabel reconhece a bênção única de Maria: ser a Mãe do Salvador. A Igreja acrescentou o nome "Jesus" para completar a saudação.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Santa Maria, Mãe de Deus, rogai por nós, pecadores"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Esta segunda parte foi acrescentada pela Igreja no século XVI. Reconhecemos Maria como "Mãe de Deus" (<em>Theotokos</em>), título definido no Concílio de Éfeso (431). Pedimos sua intercessão como pecadores necessitados de sua maternal proteção.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                "Agora e na hora da nossa morte"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Pedimos a intercessão de Maria em dois momentos cruciais: o presente (com todas as suas lutas e tentações) e o momento da morte, quando mais precisaremos de sua proteção maternal contra o inimigo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Ave Maria no Santo Rosário
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Ave Maria é a oração central do <Link to="/blog/como-rezar-rosario" className="text-accent hover:underline">Santo Rosário</Link>. Ao rezar 50 Ave Marias (ou 150 no Rosário completo), meditamos nos mistérios da vida de Cristo e de Maria. A repetição não é vã, mas uma forma de contemplação amorosa, como um filho que repete "eu te amo" à sua mãe.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que os Católicos Rezam para Maria?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Não adoramos Maria — a adoração é devida somente a Deus. Mas a honramos como a mais perfeita das criaturas e pedimos sua intercessão, assim como pedimos orações a um amigo. Maria não substitui Jesus; ela nos leva a Ele. Como disse em Caná: "Fazei tudo o que Ele vos disser" (João 2,5). Saiba mais em <Link to="/blog/por-que-catolicos-honram-maria-dogma-devocao" className="text-accent hover:underline">Por que os Católicos Honram Maria</Link>.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Nunca se ouviu dizer que algum daqueles que recorreram à vossa proteção, imploraram a vossa assistência ou reclamaram o vosso socorro, fosse por vós desamparado."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Oração do Lembrai-vos (São Bernardo)
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-ave-maria" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer conhecer mais orações marianas?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como a devoção a Nossa Senhora pode transformar sua vida espiritual.
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

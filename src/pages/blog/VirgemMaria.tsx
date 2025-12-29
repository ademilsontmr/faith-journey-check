import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function VirgemMaria() {
    return (
        <>
            <Helmet>
                <title>A Virgem Maria na Doutrina Católica: Dogmas e Devoção | Bom Católico</title>
                <meta name="description" content="Conheça os quatro dogmas marianos e a importância de Nossa Senhora na história da salvação. Entenda por que os católicos honram a Mãe de Deus." />
                <meta name="keywords" content="Virgem Maria, dogmas marianos, Nossa Senhora, devoção mariana, Mãe de Deus" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/virgem-maria" />
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
                            <span className="text-text">A Virgem Maria</span>
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
                                    Devoções
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Virgem Maria na Doutrina Católica: Dogmas e Devoção
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "Todas as gerações me chamarão bem-aventurada". Entenda o papel fundamental de Maria no plano de Deus e os pilares da fé mariana.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A devoção à Santíssima Virgem Maria não é um "acessório" da fé católica, mas uma consequência lógica da Encarnação. Ao escolher Maria para ser a Mãe de Seu Filho, Deus a colocou no coração da história da salvação. Honrar Maria é, em última análise, glorificar a Deus pelas maravilhas que Ele realizou nela.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Quatro Dogmas Marianos
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja Católica professa quatro verdades fundamentais sobre Maria, definidas solenemente ao longo dos séculos:
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Maternidade Divina (Theotokos)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Definido no Concílio de Éfeso (431), este dogma afirma que Maria é verdadeiramente a Mãe de Deus, pois Aquele que ela concebeu pelo Espírito Santo e que se tornou seu Filho segundo a carne, não é outro senão o Filho eterno do Pai, a segunda pessoa da Santíssima Trindade.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Virgindade Perpétua
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja professa que Maria foi virgem antes, durante e depois do parto. Sua virgindade é o sinal de sua entrega total a Deus e da iniciativa divina na Encarnação.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. Imaculada Conceição
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Proclamado pelo Papa Pio IX em 1854, afirma que Maria, desde o primeiro instante de sua concepção, foi preservada imune de toda mancha do pecado original, por uma graça e privilégio singular de Deus, em vista dos méritos de Jesus Cristo.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                4. Assunção aos Céus
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Definido pelo Papa Pio XII em 1950, este dogma ensina que a Imaculada Mãe de Deus, terminado o curso de sua vida terrestre, foi assumida em corpo e alma à glória celestial.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Veneração, não Adoração
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                É fundamental distinguir: adoramos somente a Deus (latria). A Maria e aos santos, prestamos veneração (dulia). No caso de Maria, por sua dignidade única, prestamos uma veneração especial chamada hiperdulia. Ela é a nossa intercessora, aquela que sempre nos aponta para Jesus, dizendo: "Fazei tudo o que Ele vos disser".
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "De Maria nunca se dirá o suficiente."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Bernardo de Claraval
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="virgem-maria" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua devoção mariana?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra como a presença de Maria pode transformar sua caminhada de fé através do nosso quiz espiritual.
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

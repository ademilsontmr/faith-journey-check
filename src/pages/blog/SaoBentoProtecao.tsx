import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function SaoBentoProtecao() {
    return (
        <>
            <Helmet>
                <title>A Vida de São Bento e a Proteção contra o Mal | Bom Católico</title>
                <meta name="description" content="Descubra a história de São Bento, o pai do monaquismo ocidental, e o significado espiritual da sua medalha como instrumento de fé e proteção." />
                <meta name="keywords" content="são bento, medalha de são bento, proteção espiritual, regra de são bento, combate espiritual" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/vida-sao-bento-protecao-contra-mal" />
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
                            <span className="text-text">São Bento e Proteção</span>
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
                                    Santos
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    25 de Maio, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    11 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Vida de São Bento e a Proteção contra o Mal
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                São Bento não é apenas o santo da medalha, mas o mestre da vida espiritual que nos ensina a vencer as ciladas do inimigo com a oração e o trabalho.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <ShieldCheck className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                São Bento de Núrsia, nascido no século V, é o Padroeiro da Europa e o fundador da Ordem dos Beneditinos. Sua famosa máxima, *Ora et Labora* (Reza e Trabalha), moldou a civilização ocidental e continua sendo um guia seguro para a nossa vida hoje.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Combate Espiritual
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A vida de São Bento foi marcada por grandes vitórias sobre o mal. Ele sobreviveu a tentativas de envenenamento e a inúmeras tentações diabólicas, sempre usando o sinal da cruz como arma. Por isso, ele é invocado como um poderoso protetor contra as forças das trevas.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Significado da Medalha
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Medalha de São Bento não é um amuleto mágico. Ela é um sacramental que contém orações de exorcismo e de confiança em Deus. As letras gravadas nela (como C S S M L - *Crux Sacra Sit Mihi Lux*) são iniciais de preces latinas que pedem que a Cruz Sagrada seja nossa luz e que o dragão nunca seja nosso guia.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Regra de São Bento para os Leigos
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Mesmo quem não vive em um mosteiro pode aprender com São Bento. A busca pelo equilíbrio, o valor do silêncio, a obediência amorosa a Deus e a acolhida ao próximo como se fosse o próprio Cristo são lições atemporais para todo católico.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Não antepor nada ao amor de Cristo."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Regra de São Bento
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="vida-sao-bento-protecao-contra-mal" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você se sente protegido em sua caminhada?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como a espiritualidade beneditina pode trazer mais ordem e proteção para sua vida diária, ajudando você a vencer os desafios espirituais de 2026.
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

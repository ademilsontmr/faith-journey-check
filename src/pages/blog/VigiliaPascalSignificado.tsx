import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function VigiliaPascalSignificado() {
    return (
        <>
            <Helmet>
                <title>O Significado da Vigília Pascal: A Noite mais Santa do Ano | Bom Católico</title>
                <meta name="description" content="Entenda a simbologia da Vigília Pascal, desde a bênção do fogo até a proclamação da Ressurreição. Descubra por que esta celebração é o coração do ano litúrgico." />
                <meta name="keywords" content="vigília pascal, páscoa, ressurreição de jesus, círio pascal, liturgia da luz" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/significado-vigilia-pascal-noite-santa" />
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
                            <span className="text-text">Vigília Pascal</span>
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
                                    Liturgia
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    15 de Julho, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    11 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Significado da Vigília Pascal: A Noite mais Santa do Ano
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A Vigília Pascal é a "mãe de todas as vigílias". Descubra a beleza dos ritos que celebram a vitória definitiva da vida sobre a morte.
                            </p>
                        </header>

                        <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Na noite do Sábado Santo, a Igreja permanece em vigília, à espera da Ressurreição do Senhor. É uma celebração rica em símbolos que nos transportam das trevas para a luz, da morte para a vida.
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Quatro Momentos da Vigília
                            </h2>
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Liturgia da Luz
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Começa do lado de fora da igreja, com a bênção do fogo novo. O Círio Pascal é aceso, representando Cristo, a Luz do Mundo. À medida que as velas dos fiéis são acesas, a escuridão é vencida.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Liturgia da Palavra
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Percorremos a história da salvação através de sete leituras do Antigo Testamento, culminando no canto solene do Glória e no Aleluia, que não era cantado desde o início da Quaresma.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. Liturgia Batismal
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                A água é abençoada e novos membros são batizados. Todos os fiéis renovam suas promessas batismais, reafirmando sua fé em Cristo ressuscitado.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                4. Liturgia Eucarística
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                É o ápice da noite, onde participamos do banquete pascal que o Senhor preparou para nós através de Sua morte e ressurreição.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Esta é a noite em que Cristo rompeu as cadeias da morte e do inferno e subiu vitorioso do abismo."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Precônio Pascal (Exsultet)
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="significado-vigilia-pascal-noite-santa" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você entende os símbolos da Páscoa?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz sobre a Semana Santa e a Páscoa e aprofunde seu conhecimento sobre os ritos mais importantes da nossa fé, preparando-se para viver a próxima Vigília com novo fervor.
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

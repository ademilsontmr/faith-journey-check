import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NamoroSanto2026() {
    return (
        <>
            <Helmet>
                <title>Namoro Santo em 2026: Desafios da Castidade no Mundo Digital | Bom Católico</title>
                <meta name="description" content="Como viver um namoro santo e casto em 2026? Dicas para jovens católicos sobre aplicativos de relacionamento, redes sociais e a busca pelo matrimônio." />
                <meta name="keywords" content="namoro santo, castidade, namoro católico, aplicativos de relacionamento, santidade jovem" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/namoro-santo-castidade-2026" />
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
                            <span className="text-text">Namoro Santo em 2026</span>
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
                                    Juventude
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    01 de Março, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Namoro Santo em 2026: Desafios da Castidade no Mundo Digital
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                É possível viver a castidade em um mundo que a ridiculariza? Descubra como construir um relacionamento baseado no amor real e não apenas na atração passageira.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O namoro cristão tem um objetivo claro: o discernimento para o matrimônio. Em 2026, com a onipresença de aplicativos de "fast-dating" e a hipersexualização da cultura, o namoro santo tornou-se um ato de rebeldia espiritual.
                            </p>

                            <QuizCTA
                                title="Você busca um amor que vale a pena?"
                                description="Viver um namoro santo é o melhor caminho para um casamento feliz. Faça nosso quiz e descubra como cultivar a castidade e o respeito em seus relacionamentos."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Castidade como Liberdade
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Muitas vezes vista como uma lista de "nãos", a castidade é, na verdade, o "sim" a um amor maior. Ela protege o casal de usar o outro como objeto e permite que a amizade e a admiração mútua cresçam antes da entrega total do corpo, que pertence apenas ao casamento.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Namoro e Redes Sociais
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O "namoro de vitrine" no Instagram pode ser uma armadilha. A comparação com outros casais e a necessidade de aprovação externa podem minar a intimidade real. O casal deve aprender a viver momentos sagrados longe das câmeras, cultivando uma vida interior compartilhada.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dicas Práticas para 2026
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Oração em Casal:</strong> Rezar juntos desde o início cria um vínculo espiritual que as dificuldades não conseguem romper.</li>
                                <li><strong>Limites Claros:</strong> Conversem sobre os limites físicos e evitem situações de ocasião de pecado.</li>
                                <li><strong>Conheça a Família:</strong> O namoro não é uma ilha; envolver as famílias ajuda a dar solidez ao relacionamento.</li>
                                <li><strong>Apps Católicos:</strong> Se for usar tecnologia para encontrar alguém, prefira plataformas que compartilham seus valores.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Conclusão: Vale a Pena Esperar
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Um namoro santo prepara o terreno para um casamento santo. Não tenha medo de ser "diferente". O mundo oferece prazeres momentâneos, mas Deus oferece a alegria eterna.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O amor não é apenas um sentimento; é uma decisão."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São João Paulo II
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="namoro-santo-castidade-2026" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está seu coração e seus relacionamentos?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz para solteiros e namorados e descubra como você pode crescer na virtude da castidade e se preparar para um amor autêntico.
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

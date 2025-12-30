import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SantaDulcePobres() {
    return (
        <>
            <Helmet>
                <title>Santa Dulce dos Pobres: O Legado de Caridade no Brasil | Bom Católico</title>
                <meta name="description" content="Conheça a história inspiradora do 'Anjo Bom da Bahia', a primeira santa nascida no Brasil, e seu exemplo de amor incondicional aos mais necessitados." />
                <meta name="keywords" content="santa dulce dos pobres, irmã dulce, anjo bom da bahia, primeira santa brasileira, obras sociais irmã dulce, caridade cristã, santos do brasil, canonização irmã dulce, história de santa dulce, milagres de irmã dulce" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/santa-dulce-dos-pobres-legado-caridade" />
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
                            <span className="text-text">Santa Dulce dos Pobres</span>
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
                                    15 de Maio, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Santa Dulce dos Pobres: O Legado de Caridade no Brasil
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Irmã Dulce não esperava as condições ideais para ajudar; ela transformava galinheiros em hospitais e a indiferença em amor.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Maria Rita de Souza Brito Lopes Pontes, a Irmã Dulce, é uma das figuras mais amadas do Brasil. Sua vida foi um hino à caridade cristã, vivida nas ruas de Salvador, entre os doentes, os famintos e os abandonados.
                            </p>

                            <QuizCTA
                                title="Como você pode amar mais hoje?"
                                description="Santa Dulce nos ensinou que a caridade não pode esperar. Faça nosso quiz e descubra como seus dons podem ser colocados a serviço dos que mais precisam."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Anjo Bom da Bahia
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Dulce tinha uma saúde frágil, mas uma vontade de ferro. Quando lhe negaram um lugar para abrigar doentes, ela ocupou o galinheiro do convento. Aquele pequeno gesto deu origem às Obras Sociais Irmã Dulce (OSID), que hoje realizam milhões de atendimentos gratuitos por ano. Ela nos ensina que o amor a Deus passa obrigatoriamente pelo serviço ao próximo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Uma Fé que se faz Obras
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Santa Dulce não era apenas uma ativista social; sua força vinha da oração e da Eucaristia. Ela via o rosto de Cristo em cada sofredor. Sua canonização em 2019 foi o reconhecimento de uma vida inteira gasta em favor dos "últimos".
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Lições para o nosso tempo
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Em um mundo muitas vezes marcado pelo egoísmo, Santa Dulce nos convida à "revolução do cuidado". Ela nos mostra que não precisamos de grandes recursos para começar a mudar o mundo; precisamos apenas de um coração disposto a amar sem medidas.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "No amor de Deus, não há impossíveis."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Santa Dulce dos Pobres
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="santa-dulce-dos-pobres-legado-caridade" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como você pode exercer a caridade hoje?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como seus talentos e dons podem ser colocados a serviço do próximo, inspirando-se no exemplo de Santa Dulce.
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

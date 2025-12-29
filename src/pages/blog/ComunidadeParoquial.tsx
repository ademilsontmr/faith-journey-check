import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function ComunidadeParoquial() {
    return (
        <>
            <Helmet>
                <title>A Importância de Pertencer a uma Comunidade Paroquial | Bom Católico</title>
                <meta name="description" content="Descubra por que a fé cristã não pode ser vivida de forma isolada e como a participação ativa em uma paróquia fortalece nossa caminhada espiritual e social." />
                <meta name="keywords" content="comunidade paroquial, paróquia, vida em comunidade, fé católica, pertencer à igreja" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/importancia-pertencer-comunidade-paroquial" />
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
                            <span className="text-text">Comunidade Paroquial</span>
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
                                    Vida Cristã
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    25 de Junho, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Importância de Pertencer a uma Comunidade Paroquial
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Ninguém se salva sozinho. A paróquia é a nossa família espiritual, o lugar onde a fé se torna concreta e o amor se faz serviço.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Vivemos em uma era de individualismo, onde muitos dizem: "eu acredito em Deus, mas não na Igreja". No entanto, Jesus não chamou indivíduos isolados, mas formou uma comunidade: os Doze Apóstolos. A paróquia é a expressão local dessa grande família de Deus.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que participar de uma paróquia?
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-4 mb-6">
                                <li><strong>Nutrição Espiritual:</strong> É na paróquia que recebemos os sacramentos, ouvimos a Palavra e crescemos na doutrina.</li>
                                <li><strong>Apoio Mútuo:</strong> Nos momentos de dor ou dificuldade, a comunidade é a rede de apoio que nos sustenta na fé.</li>
                                <li><strong>Oportunidade de Serviço:</strong> Através das pastorais e movimentos, podemos colocar nossos talentos à disposição de Deus e dos irmãos.</li>
                                <li><strong>Sentido de Pertencimento:</strong> Saber que fazemos parte de algo maior nos dá identidade e propósito.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Paróquia como "Casa entre as casas"
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                São João XXIII chamava a paróquia de "a fonte da aldeia", onde todos vêm buscar a água da vida. Ela deve ser um lugar de acolhida, onde ninguém se sinta estrangeiro. Participar ativamente significa ir além da Missa dominical; é envolver-se, conhecer as pessoas e partilhar a vida.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Superando as dificuldades
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Comunidades são feitas de pessoas imperfeitas. Pode haver fofocas, desentendimentos ou falta de organização. Mas é justamente aí que exercitamos a caridade e a paciência. Amar a Igreja é amar também seus membros limitados, assim como Cristo nos ama.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A paróquia é a presença da Igreja no território, âmbito da escuta da Palavra, do crescimento da vida cristã, do diálogo, do anúncio, da caridade generosa, da adoração e da celebração."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Papa Francisco, Evangelii Gaudium
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="importancia-pertencer-comunidade-paroquial" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua participação na Igreja?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra qual pastoral ou movimento paroquial mais combina com seu perfil e disponibilidade, ajudando você a se integrar melhor em sua comunidade.
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function TercoSemDistracao() {
    return (
        <>
            <Helmet>
                <title>Como Rezar o Terço sem Distrações: Dicas de Concentração | Bom Católico</title>
                <meta name="description" content="Aprenda técnicas práticas e espirituais para manter o foco e a profundidade ao rezar o Santo Terço, transformando a repetição em meditação real." />
                <meta name="keywords" content="rezar o terço, distrações na oração, meditação mariana, rosário, foco na oração" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/como-rezar-terco-sem-distracoes" />
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
                            <span className="text-text">Terço sem Distrações</span>
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
                                    Oração
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    20 de Março, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Como Rezar o Terço sem Distrações: Dicas de Concentração
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Rezar o Terço não é apenas repetir palavras, mas contemplar o rosto de Cristo com Maria. Saiba como vencer as batalhas da mente.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Quem nunca começou um Terço e, de repente, se viu pensando na lista de compras ou no problema do trabalho? As distrações são normais, mas existem formas de minimizá-las e tornar nossa oração mais profunda e proveitosa.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Prepare o Ambiente e o Coração
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Antes de começar, faça um minuto de silêncio. Desligue as notificações do celular. Coloque-se na presença de Deus e peça a ajuda de Nossa Senhora. Ter um lugar fixo e tranquilo para rezar ajuda o cérebro a entender que aquele é um momento sagrado.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. Use Imagens e Meditações
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Terço é uma oração contemplativa. Olhar para uma imagem do mistério que está sendo rezado ou ler uma pequena meditação bíblica antes de cada dezena ajuda a ancorar a mente na cena da vida de Jesus.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Ofereça cada Dezena por uma Intenção
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Quando rezamos por alguém ou por algo específico, nosso coração se envolve mais na oração. "Esta dezena eu ofereço pela saúde da minha mãe". Isso dá um sentido concreto à repetição das Ave-Marias.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                4. Não lute contra as distrações
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Se uma distração vier, não se irrite. Simplesmente volte suavemente para a oração. São Francisco de Sales dizia que, se você passar o Terço inteiro voltando de distrações, terá feito uma excelente oração, pois terá exercitado a paciência e a vontade.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O Rosário é a minha oração predileta. Oração maravilhosa! Maravilhosa na sua simplicidade e na sua profundidade."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São João Paulo II
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="como-rezar-terco-sem-distracoes" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua vida de oração mariana?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como o Terço pode se tornar uma fonte de paz e força em seu dia a dia, com dicas personalizadas para sua rotina.
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

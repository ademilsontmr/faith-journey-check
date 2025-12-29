import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracoesEsperanca2026() {
    return (
        <>
            <Helmet>
                <title>Orações de Esperança para Momentos de Crise em 2026 | Bom Católico</title>
                <meta name="description" content="Encontre consolo e força nas orações católicas tradicionais e contemporâneas focadas na virtude da esperança para enfrentar os desafios de 2026." />
                <meta name="keywords" content="orações de esperança, fé em momentos difíceis, oração católica, esperança cristã, 2026" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracoes-esperanca-2026" />
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
                            <span className="text-text">Orações de Esperança</span>
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
                                    10 de Janeiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    6 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Orações de Esperança para Momentos de Crise em 2026
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Quando as forças parecem esgotar, a oração é o nosso refúgio. Conheça preces poderosas para renovar sua confiança em Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A esperança é uma virtude teologal, o que significa que ela é um dom de Deus. Em momentos de crise pessoal, familiar ou social, a esperança nos impede de cair no desespero. Rezar não muda necessariamente a situação externa imediatamente, mas muda o nosso coração para enfrentar a tempestade com serenidade.
                            </p>

                            <QuizCTA
                                title="Como está sua confiança em Deus?"
                                description="A esperança é a âncora da alma em meio às tempestades. Faça nosso quiz e descubra qual método de oração pode fortalecer sua fé nos momentos de dificuldade."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Oração de Abandono (São Charles de Foucauld)
                            </h2>
                            <p className="text-text leading-relaxed mb-4 italic bg-surface p-6 rounded-xl border border-border">
                                "Meu Pai, a Vós me abandono, fazei de mim o que quiserdes. O que de mim fizerdes, eu Vos agradeço. Estou pronto para tudo, aceito tudo. Desde que a Vossa vontade se faça em mim e em todas as Vossas criaturas, nada mais desejo, meu Deus."
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Oração pela Esperança (Papa Francisco)
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Esta prece foi muito difundida durante o Jubileu e continua sendo um bálsamo para a alma:
                                <br /><br />
                                "Senhor, dai-nos a graça de sermos peregrinos da esperança. Que em meio às trevas do mundo, possamos ser luz. Que em meio ao desespero, sejamos consolo. Não permitais que nos roubem a esperança, pois ela é a âncora da nossa alma em Vós."
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Salmo 23: O Senhor é meu Pastor
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Salmo 23 é a oração de confiança por excelência. Recitá-lo pausadamente, meditando em cada versículo, traz uma paz profunda: "Ainda que eu caminhe pelo vale da sombra da morte, não temerei mal algum, porque Tu estás comigo".
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Dicas para uma Oração Eficaz
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Constância:</strong> Reze mesmo quando não sentir vontade. A oração é um compromisso, não apenas um sentimento.</li>
                                <li><strong>Sinceridade:</strong> Diga a Deus exatamente como você se sente. Ele já sabe, mas deseja ouvir de você.</li>
                                <li><strong>Silêncio:</strong> Após falar, silencie. Deixe que a paz de Deus preencha o vazio da sua alma.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Nada te turbe, nada te espante, tudo passa, Deus não muda. A paciência tudo alcança; quem a Deus tem, nada lhe falta: só Deus basta."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Santa Teresa de Ávila
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracoes-esperanca-2026" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua vida de diálogo com Deus?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra qual método de oração melhor se adapta ao seu momento de vida atual e como fortalecer sua intimidade com o Pai.
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

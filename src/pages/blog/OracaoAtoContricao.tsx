import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoAtoContricao() {
    return (
        <>
            <Helmet>
                <title>Ato de Contrição: A Oração do Arrependimento | Bom Católico</title>
                <meta name="description" content="Aprenda o Ato de Contrição completo e descubra como esta oração expressa nosso arrependimento sincero e nos prepara para receber o perdão de Deus na Confissão." />
                <meta name="keywords" content="ato de contrição, oração de arrependimento, meu deus eu me arrependo, confissão católica, como se arrepender, contrição perfeita, perdão dos pecados, oração antes da confissão, ato de contrição completo" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-ato-contricao" />
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
                            <Button variant="secondary" size="sm">Fazer o Quiz</Button>
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
                            <span className="text-text">Ato de Contrição</span>
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
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Orações</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Ato de Contrição: A Oração do Arrependimento</h1>
                            <p className="text-xl text-text-muted leading-relaxed">O Ato de Contrição é a oração que expressa nosso arrependimento sincero. É rezada na Confissão e em momentos de exame de consciência.</p>
                        </header>

                        <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-red-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração do Ato de Contrição</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Meu Deus, eu me arrependo de todo o coração<br />de Vos ter ofendido,<br />
                                    porque sois infinitamente bom e amável,<br />e o pecado Vos desagrada.<br />
                                    Proponho firmemente, com o auxílio da Vossa graça,<br />fazer penitência,<br />
                                    não mais pecar e evitar as ocasiões de pecado.<br />Amém.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Ato de Contrição é uma oração essencial na vida do católico. Ela expressa três elementos fundamentais: o arrependimento pelos pecados, o reconhecimento da bondade de Deus e o propósito de não pecar mais.
                            </p>

                            <QuizCTA
                                title="Você sabe como se confessar bem?"
                                description="O Ato de Contrição é parte essencial da Confissão. Faça nosso quiz e descubra como viver melhor o Sacramento da Reconciliação."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Três Elementos da Contrição</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1. Arrependimento Sincero</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Eu me arrependo de todo o coração" — não basta um arrependimento superficial. A contrição deve vir do fundo da alma, reconhecendo que o pecado ofende a Deus e prejudica a nós mesmos e aos outros.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2. Motivo do Arrependimento</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Porque sois infinitamente bom e amável" — a contrição perfeita nasce do amor a Deus, não apenas do medo do castigo. Arrependemo-nos porque ofendemos Aquele que nos ama infinitamente.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3. Propósito de Emenda</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Proponho firmemente não mais pecar" — o arrependimento verdadeiro inclui a decisão de mudar de vida, evitar as ocasiões de pecado e buscar a graça de Deus para vencer as tentações.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Contrição Perfeita e Imperfeita</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja distingue dois tipos de contrição:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Contrição perfeita:</strong> nasce do amor a Deus. Perdoa os pecados mortais mesmo antes da Confissão, desde que haja o propósito de se confessar.</li>
                                <li><strong>Contrição imperfeita (atrição):</strong> nasce do medo do inferno ou da feiura do pecado. É suficiente para a <Link to="/blog/sacramento-confissao" className="text-accent hover:underline">Confissão</Link> válida.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quando Rezar o Ato de Contrição?</h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Durante a <Link to="/blog/como-se-confessar-guia-completo" className="text-accent hover:underline">Confissão</Link>, após confessar os pecados</li>
                                <li>No <Link to="/blog/exame-consciencia" className="text-accent hover:underline">exame de consciência</Link> diário</li>
                                <li>Ao perceber que cometeu um pecado</li>
                                <li>Em perigo de morte, se não houver padre disponível</li>
                                <li>Antes de dormir, arrependendo-se das faltas do dia</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Um coração contrito e humilhado, ó Deus, não desprezareis."</p>
                                <p className="text-text-muted text-center mt-2">— Salmo 51,19</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-ato-contricao" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer viver melhor a Confissão?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como o Sacramento da Reconciliação pode transformar sua vida espiritual.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

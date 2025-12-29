import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function HomeschoolingCatolico() {
    return (
        <>
            <Helmet>
                <title>Educação Clássica e Católica: Por que o Homeschooling Cresce no Brasil? | Bom Católico</title>
                <meta name="description" content="Entenda o movimento de educação domiciliar católica no Brasil, seus fundamentos na educação clássica e como ele busca a formação integral da pessoa humana." />
                <meta name="keywords" content="homeschooling católico, educação clássica, educação domiciliar, formação cristã, trivium, quadrivium" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/homeschooling-catolico-educacao-classica" />
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
                            <span className="text-text">Homeschooling Católico</span>
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
                                    Educação
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    25 de Fevereiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    12 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Educação Clássica e Católica: Por que o Homeschooling Cresce no Brasil?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Mais do que uma alternativa escolar, o homeschooling católico é um resgate da missão dos pais como primeiros educadores.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <GraduationCap className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Nos últimos anos, o Brasil tem visto um crescimento exponencial de famílias que optam pela educação domiciliar (homeschooling). Entre os católicos, esse movimento é impulsionado pelo desejo de oferecer uma formação que integre fé, razão e virtude, muitas vezes utilizando o modelo da Educação Clássica.
                            </p>

                            <QuizCTA />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Resgate da Educação Clássica
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Educação Clássica baseia-se no *Trivium* (Gramática, Lógica e Retórica) e no *Quadrivium*. O objetivo não é apenas passar em provas, mas ensinar o aluno a pensar, a comunicar-se bem e a amar o que é Verdadeiro, Bom e Belo. Para a família católica, isso significa ler os grandes clássicos da literatura e da teologia sob a luz do Evangelho.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Pais: Os Primeiros e Principais Educadores
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Catecismo da Igreja Católica é claro: "O direito e o dever da educação são para os pais primordiais e inalienáveis". O homeschooling é visto por muitas famílias como a forma mais plena de exercer esse dever, protegendo os filhos de ideologias contrárias à fé e personalizando o ensino de acordo com o ritmo de cada criança.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Desafios e Mitos
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Socialização:</strong> Homeschoolers não vivem isolados; eles participam de comunidades, esportes e atividades paroquiais, muitas vezes com uma socialização mais rica e multigeracional.</li>
                                <li><strong>Carga Horária:</strong> Exige dedicação e organização dos pais, mas permite uma flexibilidade que a escola tradicional não oferece.</li>
                                <li><strong>Legalidade:</strong> O cenário jurídico no Brasil tem avançado, mas ainda exige atenção e acompanhamento das famílias.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Conclusão: Uma Vocação Educativa
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O homeschooling católico não é para todos, mas é uma resposta profética de muitas famílias que desejam formar não apenas bons cidadãos, mas santos. É um caminho de sacrifício que gera frutos de sabedoria e unidade familiar.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A educação é a arma mais poderosa que você pode usar para mudar o mundo."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Nelson Mandela (aplicado aqui à formação integral cristã)
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="homeschooling-catolico-educacao-classica" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você está pensando em educar em casa?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra se o perfil da sua família se alinha com a proposta do homeschooling e conheça os primeiros passos para essa jornada através do nosso quiz.
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

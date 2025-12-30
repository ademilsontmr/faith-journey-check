import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SaoJoseModeloPai() {
    return (
        <>
            <Helmet>
                <title>São José: O Modelo de Pai e Protetor | Bom Católico</title>
                <meta name="description" content="Descubra por que São José é o modelo perfeito de paternidade, silêncio e proteção para as famílias católicas no mundo moderno." />
                <meta name="keywords" content="são josé, paternidade cristã, sagrada família, são josé padroeiro, terror dos demônios, castíssimo esposo de maria, oração a são josé, dia de são josé, são josé trabalhador, devoção a são josé" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/sao-jose-modelo-pai-protetor" />
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
                            <span className="text-text">São José Modelo de Pai</span>
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
                                    Família
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                São José: O Modelo de Pai e Protetor para a Família Moderna
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                No silêncio de Nazaré, São José nos ensina que a verdadeira grandeza de um pai está no serviço humilde e na obediência a Deus.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                São José é frequentemente chamado de "o santo do silêncio", pois não há uma única palavra sua registrada nos Evangelhos. No entanto, suas ações falam mais alto que qualquer discurso. Como guardião do Redentor e esposo da Virgem Maria, ele personifica as virtudes que todo homem cristão deve buscar.
                            </p>

                            <QuizCTA
                                title="Você vive a missão de São José em sua casa?"
                                description="Proteger, prover e guiar são os pilares da paternidade de José. Faça nosso quiz e descubra como a intercessão do Terror dos Demônios pode fortalecer sua família e sua vida espiritual."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Homem Justo e Obediente
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Bíblia define José como um homem "justo". Sua justiça não era apenas o cumprimento da lei, mas uma total abertura à vontade de Deus. Quando o anjo lhe apareceu em sonhos, ele não questionou; ele levantou-se e fez o que o Senhor ordenou. Essa prontidão é o que falta em muitos corações hoje.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Protetor da Sagrada Família
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                José enfrentou perigos reais para proteger Jesus e Maria. Da fuga para o Egito ao retorno a Nazaré, ele foi o escudo humano da Divindade. No mundo moderno, onde a família é atacada de tantas formas, São José surge como o baluarte e o defensor necessário contra as ciladas do mal.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Valor do Trabalho Santificado
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Como carpinteiro, José ensinou a Jesus o valor do suor e do esforço. Ele nos mostra que o trabalho cotidiano, por mais simples que seja, é um caminho de santificação quando oferecido a Deus e feito com amor. Ele é o padroeiro dos trabalhadores e o mestre da vida interior no meio da atividade.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Ide a José; fazei o que ele vos disser."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Gênesis 41, 55 (aplicado tradicionalmente a São José)
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="sao-jose-modelo-pai-protetor" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Quer aprofundar sua devoção a São José?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra como as virtudes do Castíssimo Esposo de Maria podem transformar sua vida de oração e seu papel na família através do nosso quiz.
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

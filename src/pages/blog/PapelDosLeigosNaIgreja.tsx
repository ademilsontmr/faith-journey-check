import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PapelDosLeigosNaIgreja() {
    return (
        <>
            <Helmet>
                <title>O Protagonismo dos Leigos na Missão da Igreja | Bom Católico</title>
                <meta name="description" content="Descubra a importância vital dos leigos na evangelização do mundo moderno. Entenda sua missão de santificar as realidades temporais e ser sal da terra." />
                <meta name="keywords" content="papel dos leigos na igreja, o que é leigo católico, missão do leigo, apostolado leigo, concílio vaticano II leigos, lumen gentium, sal da terra luz do mundo, como servir na igreja, vocação do leigo, santificar o trabalho" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/protagonismo-leigos-missao-igreja-hoje" />
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
                            <span className="text-text">O Papel dos Leigos</span>
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
                                    Missão
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Protagonismo dos Leigos na Missão da Igreja Hoje
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A Igreja não é feita apenas de clérigos. Os leigos são a linha de frente da fé no mundo, chamados a santificar o trabalho, a família e a sociedade.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Desde o Concílio Vaticano II, a Igreja tem enfatizado a "vocação universal à santidade". Isso significa que todo batizado, independentemente de seu estado de vida, é um missionário. Os leigos têm uma missão própria e insubstituível: levar o Evangelho aos lugares onde os padres e bispos muitas vezes não chegam.
                            </p>

                            <QuizCTA
                                title="Como você vive sua missão no mundo?"
                                description="Ser sal da terra e luz do mundo é o chamado de todo católico. Faça nosso quiz e descubra como seus talentos profissionais e pessoais podem ser usados para a glória de Deus."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Santificar as Realidades Temporais
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Enquanto o clero se dedica ao ministério sagrado, os leigos são chamados a transformar o mundo "por dentro". Seja na política, na economia, na educação ou na arte, o leigo deve agir de tal forma que os valores cristãos se tornem presentes nessas estruturas. O trabalho não é apenas um meio de subsistência, mas um altar de santificação.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Sal da Terra e Luz do Mundo
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus usou essas imagens para descrever a influência discreta, mas poderosa, que Seus seguidores devem ter. O sal dá sabor e preserva; a luz ilumina e guia. O leigo católico deve ser aquele que, pelo seu exemplo de integridade e caridade, torna o ambiente ao seu redor mais humano e mais divino.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Corresponsabilidade na Igreja
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Os leigos não são "ajudantes" dos padres, mas corresponsáveis pela missão da Igreja. Isso se manifesta na participação em conselhos paroquiais, pastorais, movimentos e, sobretudo, no testemunho fiel no seio da família, que é a Igreja Doméstica.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Os leigos são, por vocação própria, os que devem procurar o Reino de Deus, tratando das coisas temporais e ordenando-as segundo Deus."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Lumen Gentium, 31
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="protagonismo-leigos-missao-igreja-hoje" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Qual é o seu papel na Igreja?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra como você pode servir melhor à sua comunidade e ao mundo através do nosso quiz de dons e ministérios leigos.
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

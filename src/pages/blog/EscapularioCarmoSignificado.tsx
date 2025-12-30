import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function EscapularioCarmoSignificado() {
    return (
        <>
            <Helmet>
                <title>O Escapulário do Carmo: Significado e Promessas de Proteção | Bom Católico</title>
                <meta name="description" content="Descubra a história e o valor espiritual do Escapulário de Nossa Senhora do Carmo. Entenda as promessas de proteção e o compromisso de vida que este sacramental exige." />
                <meta name="keywords" content="o que é escapulário, escapulário do carmo, nossa senhora do carmo, promessa do escapulário, privilégio sabatino, como usar escapulário, escapulário é amuleto, são simão stock, imposição do escapulário, escapulário marrom significado" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/escapulario-carmo-significado-promessas" />
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
                            <span className="text-text">O Escapulário</span>
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
                                    Devoção
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    20 de Agosto, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                O Escapulário do Carmo: Significado e Promessas de Proteção
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                O Escapulário não é um amuleto mágico, mas um sinal de pertença a Maria e um compromisso de seguir a Jesus.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
                            <ShieldCheck className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                O Escapulário de Nossa Senhora do Carmo é um dos sacramentais mais difundidos na Igreja. Sua origem remonta ao século XIII, quando a Virgem apareceu a São Simão Stock e lhe entregou este sinal de proteção.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O que é o Escapulário?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Originalmente parte do hábito dos carmelitas, o escapulário foi adaptado para os leigos como duas pequenas peças de lã marrom unidas por cordões. Ele representa o "manto" de Maria, sob o qual nos refugiamos.
                            </p>

                            <QuizCTA
                                title="Você conhece o valor do seu Escapulário?"
                                description="O Escapulário é um sinal de proteção e pertença a Maria. Faça nosso quiz e descubra como viver com fidelidade esse compromisso mariano e usufruir das promessas da Virgem do Carmo."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                As Promessas de Maria
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A promessa principal é: "Aquele que morrer revestido com este escapulário não sofrerá o fogo eterno". Além disso, existe o chamado "Privilégio Sabatino", a promessa de que Maria libertará do Purgatório, no primeiro sábado após a morte, aqueles que usaram o escapulário com fidelidade.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Condições para o uso
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Para valer-se das promessas, o fiel deve:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Ser imposto por um sacerdote:</strong> A primeira vez deve ser um rito oficial.</li>
                                <li><strong>Usar continuamente:</strong> Deve ser usado dia e noite (pode ser substituído por uma medalha após a imposição).</li>
                                <li><strong>Viver a castidade:</strong> Segundo o próprio estado de vida.</li>
                                <li><strong>Oração diária:</strong> Geralmente o Terço ou o Ofício de Nossa Senhora.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O Escapulário é um sinal de aliança com Maria."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São João Paulo II
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="escapulario-carmo-significado-promessas" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você conhece os sacramentais da Igreja?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz sobre sacramentais e descubra como o uso correto de objetos como o Escapulário, a Medalha Milagrosa e a Água Benta pode auxiliar sua caminhada de fé e proteção espiritual.
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

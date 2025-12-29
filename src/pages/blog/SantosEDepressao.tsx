import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SantosEDepressao() {
    return (
        <>
            <Helmet>
                <title>Santos que Enfrentaram a Depressão e a Noite Escura da Alma | Bom Católico</title>
                <meta name="description" content="Conheça a história de santos que lutaram contra a melancolia, a depressão e a aridez espiritual, e como eles encontraram a luz em meio às trevas." />
                <meta name="keywords" content="santos e depressão, noite escura da alma, saúde mental católica, melancolia, fé e dor" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/santos-depressao-noite-escura" />
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
                            <span className="text-text">Santos e Depressão</span>
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
                                    Hagiografia
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    30 de Janeiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Santos que Enfrentaram a Depressão e a Noite Escura da Alma
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                A santidade não é ausência de sofrimento psíquico, mas a capacidade de amar a Deus mesmo em meio à escuridão da mente.
                            </p>
                        </header>

                        <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10">
                            <Cloud className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Existe um mito perigoso de que o cristão deve estar sempre sorrindo e que a tristeza é sinal de falta de fé. A vida dos santos prova o contrário. Muitos deles enfrentaram o que hoje chamaríamos de depressão clínica ou o que a tradição mística chama de "Noite Escura da Alma".
                            </p>

                            <QuizCTA
                                title="Você se sente sozinho em sua dor?"
                                description="Muitos santos enfrentaram a escuridão da alma e encontraram a luz. Faça nosso quiz e descubra qual santo pode ser seu intercessor especial nos momentos de aflição."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                São João da Cruz e a Noite Escura
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O grande místico carmelita descreveu a experiência de sentir-se abandonado por Deus, onde a oração não traz consolo e a alma parece estar em um deserto. Para ele, essa "noite" é uma purificação necessária para que amemos a Deus por quem Ele é, e não pelos sentimentos que Ele nos dá.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Santa Teresa de Calcutá: 50 Anos de Escuridão
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Após sua morte, descobriu-se que a Santa das sarjetas viveu décadas sem sentir a presença de Deus. Ela sentia um vazio imenso, mas continuava a servir aos pobres com um sorriso. Sua santidade residia na fidelidade heroica apesar da dor interior.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                São Dimpna: A Padroeira da Saúde Mental
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Martirizada por seu próprio pai que sofria de transtornos mentais, São Dimpna tornou-se a intercessora de todos os que sofrem de doenças nervosas, depressão e ansiedade. Seu santuário na Bélgica é, há séculos, um centro de acolhimento e cura.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O que aprendemos com eles?
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>O sofrimento não é pecado:</strong> Sentir-se triste ou deprimido não diminui sua dignidade diante de Deus.</li>
                                <li><strong>A oração é um ato da vontade:</strong> Rezar na escuridão tem um valor imenso aos olhos do Pai.</li>
                                <li><strong>A importância da comunidade:</strong> Nenhum santo se salvou sozinho; todos tiveram diretores espirituais ou amigos na fé.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Se eu algum dia for santa, serei certamente uma santa das trevas."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Santa Teresa de Calcutá
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="santos-depressao-noite-escura" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você se sente sozinho em sua dor?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Saiba que muitos santos caminharam por esse mesmo vale. Faça nosso quiz e descubra qual santo pode ser seu intercessor especial neste momento.
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

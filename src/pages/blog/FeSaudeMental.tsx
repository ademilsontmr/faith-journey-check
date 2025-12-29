import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function FeSaudeMental() {
    return (
        <>
            <Helmet>
                <title>Fé e Saúde Mental: Como a Espiritualidade Católica Ajuda a Vencer a Ansiedade? | Bom Católico</title>
                <meta name="description" content="Descubra como a fé católica e a vida de oração podem ser aliadas poderosas no combate à ansiedade e na busca pelo equilíbrio emocional." />
                <meta name="keywords" content="fé e saúde mental, ansiedade, espiritualidade católica, equilíbrio emocional, oração e paz" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/fe-e-saude-mental-ansiedade" />
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
                            <span className="text-text">Fé e Saúde Mental</span>
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
                                    Saúde Mental
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    20 de Janeiro, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    12 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Fé e Saúde Mental: Como a Espiritualidade Católica Ajuda a Vencer a Ansiedade?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Em um mundo hiperconectado e ansioso, a tradição católica oferece tesouros milenares para o equilíbrio da mente e da alma.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
                            <HeartPulse className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Ansiedade no Mundo Moderno: Um Desafio para o Cristão
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Vivemos na era da pressa. A cobrança por produtividade, a comparação constante nas redes sociais e as incertezas do futuro criaram uma epidemia de ansiedade. Para o católico, esse desafio não é apenas psicológico, mas também espiritual. Afinal, como confiar na Providência Divina quando o coração está inquieto?
                            </p>
                            <h3 className="font-display text-xl font-bold text-text mt-6 mb-3">
                                O que a Bíblia diz sobre a preocupação excessiva?
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus foi claro: "Não vos inquieteis pelo dia de amanhã" (Mt 6, 34). No entanto, Ele não ignora nossas dores. O convite bíblico não é para uma negação dos problemas, mas para uma mudança de foco: do problema para o Provedor.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Poder do Abandono na Providência Divina
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O antídoto mais poderoso contra a ansiedade na tradição católica é o "Santo Abandono". Santos como São Francisco de Sales e Santa Teresinha do Menino Jesus nos ensinaram que a paz real vem de entregar o controle das nossas vidas nas mãos de Deus.
                            </p>
                            <h3 className="font-display text-xl font-bold text-text mt-6 mb-3">
                                A oração de entrega: "Jesus, eu confio em Vós"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Repetir jaculatórias simples em momentos de crise ajuda a ancorar a mente na verdade eterna. A confiança não é um sentimento, mas uma decisão da vontade apoiada pela graça.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Práticas Católicas que Promovem a Paz Interior
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>O Santo Rosário:</strong> Sua estrutura repetitiva e meditativa atua como um regulador natural do estresse, focando a mente nos mistérios de Cristo.</li>
                                <li><strong>Adoração Eucarística:</strong> O silêncio diante do Santíssimo é o lugar onde Deus fala ao coração inquieto, reordenando nossas prioridades.</li>
                                <li><strong>Exame de Consciência:</strong> Ao final do dia, revisar as graças e falhas ajuda a descarregar o peso do dia e dormir sob o olhar do Pai.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Quando a Fé e a Psicologia se Encontram
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                É fundamental entender que buscar ajuda psicológica não é falta de fé. Deus age através da ciência e dos profissionais de saúde. Uma abordagem integrada — cuidando do corpo, da mente e do espírito — é o caminho mais eficaz para a cura e o equilíbrio em 2026.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Nada te turbe, nada te espante... Só Deus basta."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Santa Teresa de Ávila
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="fe-e-saude-mental-ansiedade" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua paz interior hoje?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como sua vida espiritual pode estar influenciando seu bem-estar emocional e receba dicas personalizadas.
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

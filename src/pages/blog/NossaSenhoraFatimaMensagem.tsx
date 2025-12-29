import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

export default function NossaSenhoraFatimaMensagem() {
    return (
        <>
            <Helmet>
                <title>Nossa Senhora de Fátima: A Mensagem de Oração e Penitência | Bom Católico</title>
                <meta name="description" content="Entenda a profundidade da mensagem de Fátima para o mundo atual. Saiba o que Nossa Senhora pediu aos pastorinhos e como viver esses pedidos em 2026." />
                <meta name="keywords" content="nossa senhora de fátima, pastorinhos, mensagem de fátima, oração, penitência, segredo de fátima" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/nossa-senhora-fatima-mensagem-oracao-penitencia" />
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
                            <span className="text-text">Nossa Senhora de Fátima</span>
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
                                    15 de Agosto, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Nossa Senhora de Fátima: A Mensagem de Oração e Penitência
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Mais do que profecias sobre o futuro, Fátima é um apelo urgente à conversão do coração. Descubra o que a Virgem tem a nos dizer hoje.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Em 1917, em plena Primeira Guerra Mundial, Nossa Senhora apareceu a três crianças em Portugal: Lúcia, Francisco e Jacinta. Sua mensagem não era apenas para aquele tempo, mas um roteiro espiritual para toda a humanidade que se afasta de Deus.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Três Pilares da Mensagem
                            </h2>
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Oração Diária do Terço
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Em todas as seis aparições, Nossa Senhora pediu: "Rezem o Terço todos os dias para alcançarem a paz para o mundo e o fim da guerra". A oração é o meio pelo qual Deus toca a história.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Penitência e Reparação
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Nossa Senhora pediu sacrifícios pela conversão dos pecadores. Não são necessariamente grandes sofrimentos, mas oferecer as dificuldades do dia a dia com amor e espírito de reparação pelas ofensas cometidas contra Deus.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. Devoção ao Imaculado Coração
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Por fim, o meu Imaculado Coração triunfará". Esta promessa nos dá esperança. Consagrar-se ao Coração de Maria é colocar-se sob sua proteção e aprender com ela a amar a Deus acima de todas as coisas.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Fátima em 2026
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                O mundo continua precisando de paz e conversão. Viver a mensagem de Fátima hoje significa ser um intercessor, alguém que reza e se oferece pelo bem dos outros, acreditando que a luz de Deus sempre vence as trevas.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Não desanimes. Eu nunca te deixarei. O meu Imaculado Coração será o teu refúgio e o caminho que te conduzirá até Deus."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Nossa Senhora a Lúcia
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="nossa-senhora-fatima-mensagem-oracao-penitencia" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você está atendendo aos pedidos da Mãe?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz sobre as aparições marianas e descubra como você pode incorporar a mensagem de Fátima em sua rotina de oração, tornando-se um verdadeiro apóstolo do Imaculado Coração.
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

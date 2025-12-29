import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function AdoracaoEucaristica() {
    return (
        <>
            <Helmet>
                <title>A Importância da Adoração Eucarística | Bom Católico</title>
                <meta name="description" content="Descubra os benefícios espirituais de passar um tempo diante do Santíssimo Sacramento. Um guia sobre como fazer uma boa hora santa." />
                <meta name="keywords" content="adoração eucarística, santíssimo sacramento, hora santa, presença real, espiritualidade católica" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/adoracao-eucaristica" />
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
                            <span className="text-text">Adoração Eucarística</span>
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
                                    Espiritualidade
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Importância da Adoração Eucarística
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Estar diante de Jesus Sacramentado é um dos maiores privilégios do católico. Descubra como essa prática pode transformar sua vida espiritual.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A Adoração Eucarística é o prolongamento do mistério celebrado na Santa Missa. Se na Missa recebemos a Jesus em comunhão, na Adoração permanecemos com Ele, em um diálogo íntimo e silencioso. É o momento em que a criatura se prostra diante do Criador, reconhecendo Sua soberania e Seu amor infinito.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Por que Adorar?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus está realmente presente na Hóstia Consagrada. Ele nos espera no sacrário ou no ostensório com o desejo de nos consolar, nos fortalecer e nos curar. Adorar é um ato de fé pura: cremos no que não vemos, confiando apenas na Palavra do Senhor que disse: "Istos é o meu corpo".
                            </p>

                            <QuizCTA
                                title="Como está sua vida de adoração?"
                                description="Estar diante do Santíssimo é transformador. Faça nosso quiz e descubra como você pode aprofundar sua intimidade com Jesus Sacramentado e fortalecer sua caminhada espiritual."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Benefícios da Hora Santa
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Paz Interior:</strong> O silêncio da adoração acalma a alma e afasta as ansiedades do mundo.</li>
                                <li><strong>Clareza de Pensamento:</strong> Diante de Deus, as prioridades da vida tornam-se mais claras.</li>
                                <li><strong>Fortaleza nas Tentações:</strong> A proximidade com a Eucaristia nos dá forças para vencer o pecado.</li>
                                <li><strong>Crescimento na Caridade:</strong> Quem se deixa amar por Jesus na Eucaristia aprende a amar melhor o próximo.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Fazer uma Boa Adoração?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Não existe uma regra rígida, mas alguns passos podem ajudar:
                            </p>
                            <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                                <li><strong>Silêncio Exterior e Interior:</strong> Desligue o celular e tente aquietar os pensamentos.</li>
                                <li><strong>Ato de Fé:</strong> Diga a Jesus que você crê em Sua presença real.</li>
                                <li><strong>Leitura Espiritual:</strong> Use a Bíblia ou um livro de santos para meditar.</li>
                                <li><strong>Diálogo Pessoal:</strong> Fale com Jesus como se fala com um amigo. Conte suas alegrias e dores.</li>
                                <li><strong>Escuta:</strong> Reserve momentos de silêncio total para ouvir o que Deus quer falar ao seu coração.</li>
                            </ol>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O tempo que passas com Jesus no Santíssimo Sacramento é o melhor tempo que passarás na terra."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Santa Teresa de Calcutá
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="adoracao-eucaristica" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua vida de oração?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como você pode aprofundar sua intimidade com Deus e fortalecer sua caminhada de fé.
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

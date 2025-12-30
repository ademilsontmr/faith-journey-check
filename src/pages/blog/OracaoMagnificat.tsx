import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function OracaoMagnificat() {
    return (
        <>
            <Helmet>
                <title>Magnificat: O Cântico de Maria | Bom Católico</title>
                <meta name="description" content="Aprenda o Magnificat completo, o cântico de louvor de Nossa Senhora na Visitação a Isabel. Descubra o significado desta oração bíblica que exalta a grandeza de Deus." />
                <meta name="keywords" content="magnificat, cântico de maria, minha alma engrandece o senhor, oração de maria, visitação isabel, magnificat completo, lucas 1, oração mariana, louvor a deus, cântico bíblico" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/oracao-magnificat" />
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
                        <Link to="/quiz"><Button variant="secondary" size="sm">Fazer o Quiz</Button></Link>
                    </div>
                </header>

                <div className="bg-background-muted/50 py-3">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
                            <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
                            <span className="text-text">Magnificat</span>
                        </nav>
                    </div>
                </div>

                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
                            <ArrowLeft className="w-4 h-4" />Voltar ao Blog
                        </Link>

                        <header className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Orações</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Magnificat: O Cântico de Maria</h1>
                            <p className="text-xl text-text-muted leading-relaxed">O Magnificat é o hino de louvor que Maria proclamou ao visitar sua prima Isabel. É uma das orações mais belas e profundas da Bíblia.</p>
                        </header>

                        <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10">
                            <Music className="w-24 h-24 text-indigo-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">O Magnificat (Lucas 1,46-55)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    A minha alma engrandece o Senhor,<br />e o meu espírito se alegra em Deus, meu Salvador,<br />
                                    porque olhou para a humildade de sua serva.<br />Desde agora todas as gerações me chamarão bem-aventurada,<br />
                                    porque o Todo-Poderoso fez grandes coisas em meu favor.<br />Santo é o seu nome!<br />
                                    A sua misericórdia se estende de geração em geração<br />sobre aqueles que o temem.<br />
                                    Manifestou o poder do seu braço<br />e dispersou os soberbos de coração.<br />
                                    Derrubou os poderosos de seus tronos<br />e exaltou os humildes.<br />
                                    Aos famintos encheu de bens<br />e aos ricos despediu de mãos vazias.<br />
                                    Acolheu Israel, seu servo,<br />lembrado da sua misericórdia,<br />
                                    conforme prometera a nossos pais,<br />a Abraão e à sua descendência para sempre.
                                </p>
                            </div>

                            <p className="text-text leading-relaxed mb-6">
                                O Magnificat é o cântico que Maria proclamou ao visitar sua prima Isabel, logo após a Anunciação. É uma explosão de louvor e gratidão que revela o coração de Maria e sua profunda fé em Deus.
                            </p>

                            <QuizCTA
                                title="Você conhece a devoção mariana?"
                                description="O Magnificat revela o coração de Maria. Faça nosso quiz e aprofunde sua relação com a Mãe de Deus."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Contexto do Magnificat</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Após o anúncio do Anjo Gabriel, Maria partiu às pressas para visitar Isabel, que também estava grávida de João Batista. Quando Isabel a saudou, cheia do Espírito Santo, Maria respondeu com este cântico inspirado. É a primeira oração de Maria registrada na Bíblia.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Temas do Magnificat</h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Louvor e Alegria</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "A minha alma engrandece o Senhor" — Maria não se exalta a si mesma, mas glorifica a Deus. Sua alegria não vem de bens materiais, mas de Deus, seu Salvador.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Humildade</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Olhou para a humildade de sua serva" — Maria reconhece que foi escolhida não por seus méritos, mas pela graça de Deus. Ela se apresenta como serva, não como senhora.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">A Revolução de Deus</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Derrubou os poderosos... exaltou os humildes" — O Magnificat anuncia a lógica do Reino de Deus, que inverte os valores do mundo. Os orgulhosos são dispersos, os humildes são exaltados.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Fidelidade de Deus</h3>
                            <p className="text-text leading-relaxed mb-6">
                                "Conforme prometera a nossos pais" — Maria reconhece que a encarnação de Jesus é o cumprimento das promessas feitas a Abraão. Deus é fiel à sua aliança.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Magnificat na Liturgia</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Magnificat é cantado ou rezado todos os dias nas Vésperas (oração da tarde) da Liturgia das Horas. É também usado em festas marianas e em momentos de ação de graças. Muitos compositores criaram versões musicais desta oração, como Bach e Vivaldi.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Rezar com Maria</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Ao rezar o Magnificat, unimos nossa voz à de Maria. Aprendemos com ela a louvar a Deus em todas as circunstâncias, a reconhecer nossa pequenez e a confiar na misericórdia divina. Conheça também a <Link to="/blog/oracao-ave-maria" className="text-accent hover:underline">Ave Maria</Link> e a <Link to="/blog/oracao-salve-rainha" className="text-accent hover:underline">Salve Rainha</Link>.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Todas as gerações me chamarão bem-aventurada."</p>
                                <p className="text-text-muted text-center mt-2">— Lucas 1,48</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="oracao-magnificat" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua devoção mariana?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como Nossa Senhora pode transformar sua vida espiritual.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

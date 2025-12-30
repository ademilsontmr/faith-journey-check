import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NovenaNossaSenhoraPerpetuoSocorro() {
    return (
        <>
            <Helmet>
                <title>Novena de Nossa Senhora do Perpétuo Socorro | Bom Católico</title>
                <meta name="description" content="Reze a Novena de Nossa Senhora do Perpétuo Socorro completa. Tradicionalmente rezada às quartas-feiras, muito presente nas igrejas redentoristas." />
                <meta name="keywords" content="novena nossa senhora perpétuo socorro, novena perpétuo socorro, oração perpétuo socorro, quarta-feira perpétuo socorro, mãe do perpétuo socorro, novena redentorista, ícone perpétuo socorro, nossa senhora do perpétuo socorro milagres, como rezar novena perpétuo socorro" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/novena-nossa-senhora-perpetuo-socorro" />
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
                            <span className="text-text">Novena de Nossa Senhora do Perpétuo Socorro</span>
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
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Novenas</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena de Nossa Senhora do Perpétuo Socorro</h1>
                            <p className="text-xl text-text-muted leading-relaxed">Nossa Senhora do Perpétuo Socorro é uma das devoções marianas mais populares do mundo, especialmente nas igrejas redentoristas. Sua novena é tradicionalmente rezada às quartas-feiras.</p>
                        </header>

                        <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-red-500" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">A História do Ícone</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O ícone de Nossa Senhora do Perpétuo Socorro é uma imagem bizantina do século XV. Mostra Maria segurando o Menino Jesus, que olha assustado para os anjos que lhe mostram os instrumentos da Paixão. Maria nos olha com ternura, convidando-nos a recorrer a ela em todas as necessidades. O Papa Pio IX confiou o ícone aos Redentoristas em 1866.
                            </p>

                            <QuizCTA
                                title="Você conhece a devoção mariana?"
                                description="Nossa Senhora do Perpétuo Socorro é Mãe de todos. Faça nosso quiz e aprofunde sua fé católica."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Rezar a Novena</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A novena pode ser rezada em qualquer época, mas tradicionalmente é feita às quartas-feiras, dia dedicado a Nossa Senhora do Perpétuo Socorro. Muitas paróquias redentoristas celebram a novena perpétua todas as quartas-feiras.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração Inicial (todos os dias)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Mãe do Perpétuo Socorro,<br />
                                    com a maior confiança venho hoje<br />
                                    prostrar-me diante de vossa santa imagem<br />
                                    para implorar vosso socorro.<br />
                                    Não confio em meus méritos,<br />
                                    mas somente na bondade de vosso Coração maternal.<br />
                                    Vós, ó Mãe de misericórdia,<br />
                                    tende piedade de mim.<br />
                                    Ouço chamar-vos por todos<br />
                                    o refúgio e a esperança dos pecadores;<br />
                                    sede, pois, também meu refúgio e minha esperança.<br />
                                    Socorrei-me, por amor de Jesus Cristo.<br />
                                    Estendei a mão a um miserável pecador<br />
                                    que se recomenda a vós<br />
                                    e se consagra para sempre a vosso serviço.<br />
                                    Amém.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Nove Dias da Novena</h2>
                            
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1º Dia - Pelo Socorro nas Tentações</h3>
                            <p className="text-text leading-relaxed mb-4">Maria é nosso perpétuo socorro contra as tentações. Pedimos força para resistir ao mal.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2º Dia - Pelo Socorro nas Dificuldades</h3>
                            <p className="text-text leading-relaxed mb-4">Nas dificuldades da vida, Maria está sempre pronta a nos socorrer. Confiamos nossas angústias a ela.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3º Dia - Pelo Socorro na Família</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos que Maria proteja nossas famílias e nos ajude a viver em paz e união.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4º Dia - Pelo Socorro na Doença</h3>
                            <p className="text-text leading-relaxed mb-4">Maria é a Saúde dos Enfermos. Pedimos pela cura dos doentes e conforto para os que sofrem.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">5º Dia - Pelo Socorro no Trabalho</h3>
                            <p className="text-text leading-relaxed mb-4">Confiamos a Maria nossas necessidades profissionais e pedimos trabalho digno para todos.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">6º Dia - Pelo Socorro na Conversão</h3>
                            <p className="text-text leading-relaxed mb-4">Maria é Refúgio dos Pecadores. Pedimos pela conversão dos que estão longe de Deus.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">7º Dia - Pelo Socorro na Igreja</h3>
                            <p className="text-text leading-relaxed mb-4">Pedimos que Maria proteja a <Link to="/blog/igreja-corpo-cristo" className="text-accent hover:underline">Igreja, Corpo de Cristo</Link>, e todos os seus membros.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">8º Dia - Pelo Socorro na Hora da Morte</h3>
                            <p className="text-text leading-relaxed mb-4">Maria é nossa Mãe na hora da morte. Pedimos uma morte santa e a graça da perseverança final.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">9º Dia - Pelas Nossas Intenções</h3>
                            <p className="text-text leading-relaxed mb-4">Apresentamos todas as nossas intenções particulares a Nossa Senhora do Perpétuo Socorro.</p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Oração Final</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Após a meditação de cada dia, reza-se: 3 <Link to="/blog/oracao-ave-maria" className="text-accent hover:underline">Ave Marias</Link>, 1 <Link to="/blog/oracao-pai-nosso" className="text-accent hover:underline">Pai Nosso</Link>, 1 <Link to="/blog/oracao-gloria-ao-pai" className="text-accent hover:underline">Glória ao Pai</Link> e a <Link to="/blog/oracao-salve-rainha" className="text-accent hover:underline">Salve Rainha</Link>.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Mãe do Perpétuo Socorro, rogai por nós que recorremos a vós!"</p>
                                <p className="text-text-muted text-center mt-2">— Jaculatória tradicional</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="novena-nossa-senhora-perpetuo-socorro" />

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

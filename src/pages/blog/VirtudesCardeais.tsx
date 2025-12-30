import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function VirtudesCardeais() {
    return (
        <>
            <Helmet>
                <title>As Virtudes Cardeais: Justiça, Prudência, Fortaleza e Temperança no Cotidiano | Bom Católico</title>
                <meta name="description" content="Aprenda como praticar as quatro virtudes cardeais para construir um caráter sólido e viver uma vida cristã equilibrada e santa em 2026." />
                <meta name="keywords" content="virtudes cardeais, justiça, prudência, fortaleza, temperança, ética cristã, santidade" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/virtudes-cardeais-guia-pratico-cotidiano" />
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
                            <span className="text-text">Virtudes Cardeais</span>
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
                                    Formação
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    10 de Abril, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                As Virtudes Cardeais: Justiça, Prudência, Fortaleza e Temperança no Cotidiano
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                As virtudes são os "músculos" da alma. Descubra como exercitá-las para viver com integridade e equilíbrio no mundo moderno.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Shield className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A palavra "virtude" vem do latim *virtus*, que significa força ou excelência. As virtudes cardeais são chamadas assim porque são os "eixos" (do latim *cardo*, gonzos de uma porta) sobre os quais gira toda a vida moral do homem. Sem elas, a vida cristã se torna frágil e inconsistente. Com elas, construímos um caráter sólido, capaz de resistir às tempestades da vida e de refletir a beleza de Cristo.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Os antigos filósofos já reconheciam a importância dessas quatro virtudes. Mas a Igreja Católica as elevou a um nível superior, unindo-as às virtudes teologais (fé, esperança e caridade) para formar um caminho completo de santidade. Quando praticamos as virtudes cardeais, não apenas nos tornamos pessoas melhores – nos tornamos mais semelhantes a Cristo.
                            </p>

                            <QuizCTA
                                title="Qual virtude você mais precisa desenvolver?"
                                description="As virtudes são os músculos da alma para uma vida santa. Faça nosso quiz de virtudes e receba dicas práticas para fortalecer seu caráter cristão no dia a dia."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Prudência: O Farol da Razão
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A prudência é a virtude que nos ajuda a discernir o nosso verdadeiro bem em cada circunstância e a escolher os meios adequados para atingi-lo. Ela não é medo ou indecisão, mas a "reta razão no agir". No cotidiano, ela se manifesta quando pensamos antes de falar ou agir, buscando sempre a vontade de Deus. A prudência nos protege de decisões precipitadas e nos guia para escolhas sábias.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. Justiça: Dar a cada um o que lhe é devido
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A justiça consiste na vontade constante e firme de dar a Deus e ao próximo o que lhes é devido. Justiça para com Deus chama-se "virtude da religião" – é render-Lhe o culto e a obediência que merece. Para com os homens, significa respeitar os direitos de cada um, ser honesto nos negócios, cumprir promessas e estabelecer a harmonia nas relações humanas. A justiça é o fundamento da paz social.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Fortaleza: A Coragem Cristã
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A fortaleza assegura a firmeza nas dificuldades e a constância na procura do bem. Ela nos dá coragem para resistir às tentações e superar os obstáculos na vida moral. É a virtude dos mártires que enfrentaram a morte por Cristo, mas também do pai de família que trabalha com honestidade apesar das pressões, da mãe que educa seus filhos com paciência, do jovem que resiste à pressão dos colegas para fazer o bem. A fortaleza não é agressividade, mas a capacidade de sofrer pelo que é certo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                4. Temperança: O Domínio de Si
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A temperança modera a atração dos prazeres e assegura o equilíbrio no uso dos bens criados. Ela garante o domínio da vontade sobre os instintos e mantém os desejos dentro dos limites da honestidade. No mundo do consumo desenfreado, das redes sociais viciantes e dos prazeres fáceis, a temperança é um sinal de liberdade real. Quem é temperante não é escravo de seus desejos, mas senhor de si mesmo.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Exercitar as Virtudes Cardeais
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                As virtudes não são inatas – precisam ser cultivadas como um atleta treina seus músculos. Comece pequeno: pratique um ato de prudência hoje (pense antes de falar), um ato de justiça amanhã (seja honesto em uma situação difícil), um ato de fortaleza (resista a uma tentação), um ato de temperança (recuse um prazer desordenado). Com o tempo, esses atos se tornam hábitos, e os hábitos se tornam virtudes.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "O objetivo da vida virtuosa é tornar-se semelhante a Deus."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Gregório de Nissa
                                </p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">
                                    "A virtude é a beleza da alma."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Santo Agostinho
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="virtudes-cardeais-guia-pratico-cotidiano" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Qual virtude você mais precisa desenvolver?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz de virtudes e descubra seu perfil moral, recebendo dicas práticas de exercícios espirituais para fortalecer seu caráter cristão.
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

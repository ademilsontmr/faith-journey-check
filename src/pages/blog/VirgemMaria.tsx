import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function VirgemMaria() {
    return (
        <>
            <Helmet>
                <title>A Virgem Maria na Doutrina Católica: Dogmas e Devoção | Bom Católico</title>
                <meta name="description" content="Conheça os quatro dogmas marianos e a importância de Nossa Senhora na história da salvação. Entenda por que os católicos honram a Mãe de Deus." />
                <meta name="keywords" content="Virgem Maria, dogmas marianos, Nossa Senhora, devoção mariana, Mãe de Deus" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/virgem-maria" />
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
                            <span className="text-text">A Virgem Maria</span>
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
                                    Devoções
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Virgem Maria na Doutrina Católica: Dogmas e Devoção
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "Todas as gerações me chamarão bem-aventurada". Entenda o papel fundamental de Maria no plano de Deus e os pilares da fé mariana.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                "Todas as gerações me chamarão bem-aventurada" (Lc 1,48). Estas palavras proféticas de Maria no Magnificat se cumprem há dois mil anos. Em todos os continentes, em todas as línguas, em todas as épocas, os filhos da Igreja elevam seus corações à Mãe de Deus, encontrando nela refúgio, consolação e o caminho mais seguro para Jesus.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                A devoção à Santíssima Virgem Maria não é um "acessório" opcional da fé católica – é uma consequência lógica e necessária da Encarnação. Quando Deus escolheu Maria para ser a Mãe de Seu Filho, Ele a colocou no coração da história da salvação. Ignorar Maria seria ignorar o plano de Deus. Honrá-la é, em última análise, glorificar ao Senhor pelas maravilhas que Ele realizou nela.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Os santos de todos os tempos foram unânimes em seu amor a Maria. São Bernardo dizia: "De Maria nunca se dirá o suficiente." São Luís de Montfort ensinava que "a devoção a Maria é o caminho mais fácil, mais curto, mais perfeito e mais seguro para chegar a Jesus." São Maximiliano Kolbe deu sua vida por amor a ela. E Jesus, do alto da Cruz, nos deu Maria como Mãe: "Eis aí tua mãe" (Jo 19,27).
                            </p>

                            <QuizCTA
                                title="Como está sua devoção mariana?"
                                description="Maria é a Mãe de Deus e nossa intercessora no Céu. Faça nosso quiz espiritual e descubra como a presença de Nossa Senhora pode transformar sua caminhada de fé e amor a Jesus."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Os Quatro Dogmas Marianos
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja Católica professa quatro verdades fundamentais sobre Maria, definidas solenemente ao longo dos séculos. Estas não são "invenções" humanas, mas explicitações da fé que a Igreja sempre professou desde os Apóstolos:
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Maternidade Divina (Theotokos)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Definido no Concílio de Éfeso (431), este é o dogma fundamental do qual derivam todos os outros. Maria é verdadeiramente a Mãe de Deus – não porque seja anterior a Deus ou tenha gerado a natureza divina, mas porque Aquele que ela concebeu pelo Espírito Santo é verdadeiramente Deus. Jesus não é duas pessoas (uma divina e outra humana), mas uma única Pessoa divina com duas naturezas. E Maria é Mãe dessa Pessoa.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Quando Isabel, cheia do Espírito Santo, exclamou: "Donde me vem que a Mãe do meu Senhor venha a mim?" (Lc 1,43), ela proclamou esta verdade. "Senhor" (Kyrios) é o título divino por excelência. Maria é Mãe do Senhor, Mãe de Deus – Theotokos.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Virgindade Perpétua
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja professa que Maria foi virgem antes do parto (concebendo Jesus pelo poder do Espírito Santo), durante o parto (dando à luz de modo miraculoso) e depois do parto (permanecendo virgem por toda a vida). Esta virgindade não é uma limitação, mas um sinal de sua entrega total a Deus e da iniciativa divina na Encarnação.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Os "irmãos de Jesus" mencionados nos Evangelhos são primos ou parentes próximos, conforme o uso semítico da palavra "irmão". A tradição constante da Igreja, desde os primeiros séculos, sempre professou a virgindade perpétua de Maria. São Jerônimo, Santo Agostinho, São João Crisóstomo – todos os Padres da Igreja defenderam esta verdade.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. Imaculada Conceição
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Proclamado pelo Papa Pio IX em 1854, este dogma afirma que Maria, desde o primeiro instante de sua concepção, foi preservada imune de toda mancha do pecado original, por uma graça e privilégio singular de Deus, em vista dos méritos de Jesus Cristo, Salvador do gênero humano.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Maria também foi redimida por Cristo – mas de modo preventivo, não curativo. Enquanto nós somos tirados do poço do pecado, ela foi preservada de cair nele. É como se Deus, vendo que ela cairia no poço, a segurasse antes da queda. A redenção de Maria é ainda mais gloriosa que a nossa, pois mostra o poder de Deus de preservar do mal, não apenas de curar.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Quatro anos depois da definição do dogma, Nossa Senhora apareceu em Lourdes a Santa Bernadette e confirmou: "Eu sou a Imaculada Conceição."
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                4. Assunção aos Céus
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Definido pelo Papa Pio XII em 1950, este dogma ensina que a Imaculada Mãe de Deus, a sempre Virgem Maria, terminado o curso de sua vida terrestre, foi assumida em corpo e alma à glória celestial. Maria não precisou esperar a ressurreição final – ela já goza, em corpo glorificado, da bem-aventurança eterna.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Este privilégio é consequência de sua Imaculada Conceição e de sua Maternidade Divina. O corpo que gerou o Filho de Deus não poderia conhecer a corrupção do sepulcro. Maria é o primeiro fruto da Redenção, a garantia do que nos espera: a ressurreição gloriosa da carne.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Veneração, não Adoração
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                É fundamental distinguir: adoramos somente a Deus (latria). A Maria e aos santos, prestamos veneração (dulia). No caso de Maria, por sua dignidade única como Mãe de Deus, prestamos uma veneração especial chamada hiperdulia – superior à dos outros santos, mas infinitamente inferior à adoração devida somente a Deus.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Maria não é uma "deusa" nem uma intermediária que nos afasta de Jesus. Pelo contrário, ela é o caminho mais curto para chegar a Ele. Nas Bodas de Caná, ela disse aos servos: "Fazei tudo o que Ele vos disser" (Jo 2,5). Esta é a missão de Maria: apontar para Jesus, levar-nos a Jesus, formar Jesus em nós.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Como disse São Luís de Montfort: "Nunca se honra mais a Jesus do que quando se honra a Maria, pois só se honra Maria para honrar mais perfeitamente a Jesus." Todo amor a Maria desemboca em Jesus; toda graça que ela obtém vem de Jesus. Ela é o canal, não a fonte. Mas que canal precioso Deus nos deu!
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Maria, Nossa Mãe
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Do alto da Cruz, Jesus nos deu Maria como Mãe. Ao discípulo amado – que representa cada um de nós – Ele disse: "Eis aí tua mãe" (Jo 19,27). E a Maria: "Mulher, eis aí teu filho." Desde aquela hora, o discípulo a acolheu em sua casa. E nós, acolhemos Maria em nossa vida?
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Ter Maria como Mãe é ter uma intercessora poderosa no Céu, uma educadora na fé, uma consoladora nas tribulações, uma guia segura no caminho da santidade. Ela nos conhece, nos ama, intercede por nós. Nenhuma oração dirigida a ela fica sem resposta – mesmo que a resposta seja diferente do que pedimos, será sempre o melhor para nossa salvação.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "De Maria nunca se dirá o suficiente."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Bernardo de Claraval
                                </p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">
                                    "Quem não tem Maria por Mãe, não tem Deus por Pai."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Cipriano de Cartago
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="virgem-maria" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Como está sua devoção mariana?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Descubra como a presença de Maria pode transformar sua caminhada de fé através do nosso quiz espiritual.
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

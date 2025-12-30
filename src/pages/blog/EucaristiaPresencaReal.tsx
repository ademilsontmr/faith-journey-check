import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function EucaristiaPresencaReal() {
    return (
        <>
            <Helmet>
                <title>A Eucaristia: Presença Real de Jesus no Pão e no Vinho | Bom Católico</title>
                <meta name="description" content="Entenda o dogma da Transubstanciação e a importância da Eucaristia como fonte e ápice da vida cristã. Descubra por que Jesus está realmente presente na Hóstia Santa." />
                <meta name="keywords" content="Eucaristia, presença real, transubstanciação, corpo de Cristo, santíssimo sacramento, comunhão" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/eucaristia-presenca-real" />
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
                            <span className="text-text">A Eucaristia</span>
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
                                    Sacramentos
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    29 de Dezembro, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min de leitura
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                A Eucaristia: Presença Real de Jesus no Pão e no Vinho
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "Isto é o meu corpo". A Eucaristia não é um símbolo, mas a presença viva e substancial de Jesus Cristo. Entenda o mistério que sustenta a Igreja há dois milênios.
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                A Eucaristia é o coração pulsante da Igreja Católica, o "sol" ao redor do qual gira toda a vida cristã. Enquanto nos outros sacramentos recebemos a graça de Deus, na Eucaristia recebemos o próprio Autor da graça – Jesus Cristo em Pessoa, com Seu Corpo, Sangue, Alma e Divindade. É o mistério da fé por excelência, tão sublime que os anjos se prostram em adoração diante do altar.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Pense na grandeza deste dom: o mesmo Jesus que caminhava pelas estradas da Galileia, que curava os doentes, que acalmava as tempestades, que morreu na Cruz e ressuscitou glorioso – este mesmo Jesus se faz presente em cada hóstia consagrada, em cada tabernáculo do mundo. Ele, o Rei dos reis, escolheu permanecer conosco sob as humildes aparências do pão, acessível a todos, esperando pacientemente nossa visita, nosso amor, nossa adoração.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                O Que é a Transubstanciação?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Este termo teológico, definido pelo Concílio de Trento, explica o milagre que ocorre em cada Missa: a mudança de toda a substância do pão na substância do Corpo de Cristo e de toda a substância do vinho na substância do Seu Sangue. As "aparências" ou "acidentes" (gosto, cor, cheiro, forma) permanecem as mesmas, mas a realidade profunda – a substância – mudou completamente.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Não é uma mudança simbólica ou metafórica. É real, verdadeira, substancial. Quando o sacerdote pronuncia as palavras da consagração – "Isto é o meu Corpo... Este é o meu Sangue" – acontece o maior milagre do universo. O pão deixa de ser pão; o vinho deixa de ser vinho. Permanecem apenas as aparências, mas sob elas está o Cristo vivo e glorioso, o mesmo que está à direita do Pai no Céu.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Este milagre exige os olhos da fé. Os sentidos nos dizem que é pão; a fé nos revela que é Deus. Por isso Jesus disse: "Bem-aventurados os que não viram e creram" (Jo 20,29). Crer na Presença Real é um ato de fé heroica que agrada imensamente ao Coração de Jesus.
                            </p>

                            <QuizCTA
                                title="Você crê na Presença Real?"
                                description="A Eucaristia é o coração da nossa fé. Faça nosso quiz e descubra como aprofundar sua adoração e amor por Jesus Sacramentado, vivendo o mistério da Transubstanciação com mais fé."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Instituição e Fundamento Bíblico
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus instituiu a Eucaristia na Última Ceia, na noite em que foi entregue. Ao dizer "Isto é o meu corpo" e "Isto é o meu sangue", Ele não usou uma metáfora ou figura de linguagem. Jesus, que é a Verdade, não poderia enganar Seus discípulos em algo tão importante.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                No capítulo 6 do Evangelho de São João, Jesus é absolutamente enfático: "Em verdade, em verdade vos digo: se não comerdes a carne do Filho do Homem e não beberdes o seu sangue, não tereis a vida em vós. Quem come a minha carne e bebe o meu sangue tem a vida eterna, e eu o ressuscitarei no último dia. Pois a minha carne é verdadeira comida e o meu sangue é verdadeira bebida" (Jo 6,53-55).
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Muitos discípulos O abandonaram por causa desse ensinamento, achando-o "duro demais". Mas Jesus não voltou atrás, não disse "vocês me entenderam mal, era só uma metáfora". Pelo contrário, perguntou aos Doze: "Quereis também vós ir embora?" (Jo 6,67). Pedro respondeu com fé: "Senhor, a quem iremos? Tu tens palavras de vida eterna" (Jo 6,68).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Efeitos da Sagrada Comunhão
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Quando recebemos a Eucaristia dignamente, acontecem maravilhas em nossa alma:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>União íntima com Cristo:</strong> A comunhão nos incorpora a Jesus de modo real. "Quem come a minha carne e bebe o meu sangue permanece em mim e eu nele" (Jo 6,56). Tornamo-nos um com Ele.</li>
                                <li><strong>Aumento da Graça Santificante:</strong> A Eucaristia fortalece e aumenta a vida divina em nós, recebida no Batismo.</li>
                                <li><strong>Remissão dos Pecados Veniais:</strong> O fogo do amor de Cristo purifica nossas faltas leves e imperfeições cotidianas.</li>
                                <li><strong>Preservação contra Pecados Mortais:</strong> A comunhão frequente nos dá força para resistir às tentações graves.</li>
                                <li><strong>União com a Igreja:</strong> A Eucaristia faz de nós um só corpo em Cristo, fortalecendo os laços com todos os fiéis.</li>
                                <li><strong>Penhor da Glória Futura:</strong> Cada comunhão é uma antecipação do banquete celestial, garantia da ressurreição.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Como Receber Dignamente?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                São Paulo adverte: "Quem come o pão ou bebe o cálice do Senhor indignamente será réu do corpo e do sangue do Senhor" (1Cor 11,27). Receber a Eucaristia em pecado mortal é cometer um sacrilégio – um pecado gravíssimo contra o próprio Cristo.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Para comungar dignamente, o católico deve: estar em estado de graça (sem pecados graves não confessados), observar o jejum eucarístico de uma hora antes da comunhão, e ter consciência de Quem está recebendo. Não se trata de "merecimento" – ninguém merece receber Deus – mas de disposição interior, de preparar a morada para o Rei.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Se você está em pecado grave, não comungue antes de se confessar. Isso não é vergonha; é reverência. É reconhecer a grandeza de Quem você vai receber. E depois da confissão, aproxime-se do altar com confiança e alegria, pois o Senhor o espera com amor infinito.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                A Adoração Eucarística
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Se Jesus está realmente presente na Eucaristia, faz todo sentido adorá-Lo também fora da Missa. A Adoração Eucarística é um tesouro da Igreja Católica: ficar em silêncio diante do Santíssimo Sacramento, contemplando Aquele que nos contempla com amor, deixando-se transformar por Sua presença.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Santa Teresa de Calcutá atribuía toda a força de sua missão à hora diária de adoração. São João Paulo II passava horas diante do Santíssimo. O Beato Carlo Acutis, jovem do nosso tempo, dizia que a Eucaristia era sua "autoestrada para o Céu". Experimente: visite Jesus no sacrário, mesmo que por alguns minutos. Ele espera por você.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "A Eucaristia é o caminho mais curto para o Céu."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Pio X
                                </p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">
                                    "Se os anjos pudessem ter inveja, nos invejariam pela Sagrada Comunhão."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — São Maximiliano Kolbe
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="eucaristia-presenca-real" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Você valoriza o Pão da Vida?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Faça nosso quiz e descubra como está sua vivência sacramental e seu amor pela Eucaristia, o centro da vida cristã.
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

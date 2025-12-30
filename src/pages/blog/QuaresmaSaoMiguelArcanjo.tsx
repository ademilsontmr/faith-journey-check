import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function QuaresmaSaoMiguelArcanjo() {
    return (
        <>
            <Helmet>
                <title>Quaresma de São Miguel Arcanjo: Guia Completo de 15 de Agosto a 29 de Setembro | Bom Católico</title>
                <meta name="description" content="Aprenda tudo sobre a Quaresma de São Miguel Arcanjo: o que é, como rezar, orações diárias, história e significado espiritual. Preparação de 40 dias para a festa do Arcanjo em 29 de setembro." />
                <meta name="keywords" content="quaresma de são miguel arcanjo, quaresma são miguel, 40 dias são miguel arcanjo, como rezar quaresma são miguel, oração são miguel arcanjo, 29 de setembro são miguel, terço são miguel arcanjo, chapelinha são miguel, proteção espiritual, combate espiritual, exorcismo são miguel, príncipe da milícia celeste, anjos e arcanjos" />
                <link rel="canonical" href="https://bomcatolico.com.br/blog/quaresma-sao-miguel-arcanjo" />
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
                            <span className="text-text">Quaresma de São Miguel Arcanjo</span>
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
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Devoções</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min de leitura</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Quaresma de São Miguel Arcanjo: Guia Completo para os 40 Dias de Preparação</h1>
                            <p className="text-xl text-text-muted leading-relaxed">A Quaresma de São Miguel Arcanjo é uma poderosa devoção de 40 dias que vai de 15 de agosto a 29 de setembro, preparando os fiéis para a festa do Príncipe da Milícia Celeste.</p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                            <Shield className="w-24 h-24 text-blue-600" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            
                            {/* SEÇÃO 1: O QUE É */}
                            <h2 className="font-display text-2xl font-bold text-text mt-6 mb-4">O Que É a Quaresma de São Miguel Arcanjo?</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Quaresma de São Miguel Arcanjo é um período de 40 dias de oração, jejum e penitência dedicado ao glorioso Arcanjo São Miguel. Assim como a Quaresma pascal nos prepara para a Páscoa, esta quaresma especial nos prepara para celebrar a festa de São Miguel Arcanjo, em 29 de setembro.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Esta devoção começa no dia 15 de agosto, Solenidade da Assunção de Nossa Senhora, e termina no dia 28 de setembro, véspera da festa. É um tempo privilegiado para fortalecer nossa vida espiritual e pedir a proteção do Príncipe da Milícia Celeste contra as forças do mal.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Por Que 40 Dias?</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O número 40 tem profundo significado bíblico: os 40 dias de Jesus no deserto, os 40 anos do povo de Israel no deserto, os 40 dias de Moisés no Sinai. É um tempo de purificação, preparação e encontro com Deus. Durante estes 40 dias, somos convidados a intensificar nossa vida de oração e a nos preparar para o <Link to="/blog/combate-espiritual-vencer-vicios-graca-deus" className="text-accent hover:underline">combate espiritual</Link>.
                            </p>

                            <QuizCTA
                                title="Você conhece os anjos e arcanjos?"
                                description="São Miguel é o Príncipe dos Anjos. Faça nosso quiz e aprofunde seu conhecimento sobre a fé católica."
                            />

                            {/* SEÇÃO 2: QUEM É SÃO MIGUEL */}
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quem É São Miguel Arcanjo?</h2>
                            <p className="text-text leading-relaxed mb-6">
                                São Miguel Arcanjo é um dos três arcanjos mencionados nas Sagradas Escrituras, junto com Gabriel e Rafael. Seu nome em hebraico, "Mikha'el", significa "Quem é como Deus?" — uma pergunta retórica que expressa a humildade do arcanjo diante da majestade divina e seu grito de guerra contra a soberba de Lúcifer.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">São Miguel na Bíblia</h3>
                            <p className="text-text leading-relaxed mb-6">
                                São Miguel aparece em passagens fundamentais da Escritura:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-text">
                                <li className="mb-2"><strong>Daniel 10,13.21; 12,1:</strong> É chamado de "um dos primeiros príncipes" e "o grande príncipe" que protege o povo de Deus.</li>
                                <li className="mb-2"><strong>Judas 1,9:</strong> Disputa com o diabo pelo corpo de Moisés, mostrando sua autoridade sobre as forças do mal.</li>
                                <li className="mb-2"><strong>Apocalipse 12,7-9:</strong> Lidera os anjos na batalha contra o dragão (Satanás) e o expulsa do céu.</li>
                            </ul>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Os Títulos de São Miguel</h3>
                            <p className="text-text leading-relaxed mb-6">
                                A Igreja atribui a São Miguel diversos títulos que revelam sua missão:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-text">
                                <li className="mb-2"><strong>Príncipe da Milícia Celeste:</strong> Comandante dos exércitos angelicais</li>
                                <li className="mb-2"><strong>Defensor da Igreja:</strong> Protetor especial do Corpo Místico de Cristo</li>
                                <li className="mb-2"><strong>Protetor das almas:</strong> Acompanha as almas no momento da morte</li>
                                <li className="mb-2"><strong>Vencedor de Satanás:</strong> Aquele que derrotou o demônio</li>
                                <li className="mb-2"><strong>Guardião do Santíssimo Sacramento:</strong> Protetor da Eucaristia</li>
                            </ul>

                            {/* SEÇÃO 3: HISTÓRIA DA DEVOÇÃO */}
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">História e Origem da Quaresma de São Miguel</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A devoção a São Miguel Arcanjo é antiquíssima na Igreja. Desde os primeiros séculos, os cristãos invocavam sua proteção. A festa de 29 de setembro remonta ao século V, quando foi dedicada uma basílica a São Miguel na Via Salária, em Roma.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">A Oração de Leão XIII</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Em 1884, o Papa Leão XIII teve uma visão mística sobre o combate entre as forças do bem e do mal. Após essa experiência, compôs a famosa oração a São Miguel Arcanjo, que era rezada ao final de todas as Missas até 1964. Esta oração continua sendo uma das mais poderosas armas espirituais dos católicos.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração a São Miguel Arcanjo (Leão XIII)</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    São Miguel Arcanjo, defendei-nos no combate,<br />
                                    sede nosso refúgio contra as maldades e ciladas do demônio.<br />
                                    Ordene-lhe Deus, instantemente o pedimos,<br />
                                    e vós, Príncipe da Milícia Celeste,<br />
                                    pelo divino poder, precipitai no inferno<br />
                                    a Satanás e aos outros espíritos malignos<br />
                                    que andam pelo mundo para perder as almas. Amém.
                                </p>
                            </div>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Aparições de São Miguel</h3>
                            <p className="text-text leading-relaxed mb-6">
                                São Miguel apareceu em diversos lugares ao longo da história:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-text">
                                <li className="mb-2"><strong>Monte Gargano, Itália (490-493):</strong> Aparições que deram origem ao Santuário de Monte Sant'Angelo</li>
                                <li className="mb-2"><strong>Mont Saint-Michel, França (708):</strong> Aparição ao bispo Aubert de Avranches</li>
                                <li className="mb-2"><strong>Fátima, Portugal (1916):</strong> O Anjo de Portugal, identificado como São Miguel, apareceu aos três pastorinhos antes das aparições de Nossa Senhora</li>
                            </ul>

                            {/* SEÇÃO 4: COMO FAZER A QUARESMA */}
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Fazer a Quaresma de São Miguel Arcanjo</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A Quaresma de São Miguel é um tempo de preparação espiritual intensa. Não há uma forma única de vivê-la, mas existem práticas tradicionais que enriquecem este período.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Práticas Diárias Recomendadas</h3>
                            <ul className="list-disc pl-6 mb-6 text-text">
                                <li className="mb-2"><strong>Oração a São Miguel:</strong> Rezar a oração de Leão XIII ao menos três vezes ao dia (manhã, tarde e noite)</li>
                                <li className="mb-2"><strong>Terço de São Miguel:</strong> Também chamado de Chapelinha de São Miguel, é uma poderosa devoção aos nove coros angélicos</li>
                                <li className="mb-2"><strong>Jejum:</strong> Fazer algum tipo de jejum ou abstinência, especialmente às segundas-feiras (dia tradicionalmente dedicado aos anjos)</li>
                                <li className="mb-2"><strong>Confissão:</strong> Fazer uma boa <Link to="/blog/como-se-confessar-guia-completo" className="text-accent hover:underline">confissão</Link> durante este período</li>
                                <li className="mb-2"><strong>Eucaristia:</strong> Participar da <Link to="/blog/sacramento-eucaristia" className="text-accent hover:underline">Santa Missa</Link> com mais frequência</li>
                                <li className="mb-2"><strong>Leitura Espiritual:</strong> Ler sobre os anjos e o combate espiritual</li>
                            </ul>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Calendário da Quaresma de São Miguel</h3>
                            <p className="text-text leading-relaxed mb-6">
                                A quaresma está dividida em semanas temáticas:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-text">
                                <li className="mb-2"><strong>Semana 1 (15-21 ago):</strong> Purificação e arrependimento</li>
                                <li className="mb-2"><strong>Semana 2 (22-28 ago):</strong> Conhecimento dos anjos e sua missão</li>
                                <li className="mb-2"><strong>Semana 3 (29 ago - 4 set):</strong> O combate espiritual</li>
                                <li className="mb-2"><strong>Semana 4 (5-11 set):</strong> As virtudes de São Miguel</li>
                                <li className="mb-2"><strong>Semana 5 (12-18 set):</strong> Proteção contra o mal</li>
                                <li className="mb-2"><strong>Semana 6 (19-28 set):</strong> Preparação final para a festa</li>
                            </ul>

                            {/* SEÇÃO 5: TERÇO DE SÃO MIGUEL */}
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Terço de São Miguel Arcanjo (Chapelinha)</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O Terço de São Miguel, também conhecido como Chapelinha de São Miguel, foi revelado pelo próprio Arcanjo à Serva de Deus Antônia d'Astónaco, em Portugal, no século XVIII. É uma devoção que honra os nove coros dos anjos.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Como Rezar o Terço de São Miguel</h3>
                            <p className="text-text leading-relaxed mb-6">
                                O terço é composto por nove saudações, uma para cada coro angélico. Em cada saudação, reza-se 1 <Link to="/blog/oracao-pai-nosso" className="text-accent hover:underline">Pai Nosso</Link> e 3 <Link to="/blog/oracao-ave-maria" className="text-accent hover:underline">Ave Marias</Link>.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h4 className="font-display text-lg font-bold text-text mb-4">Os Nove Coros Angélicos</h4>
                                <ol className="list-decimal pl-6 text-text">
                                    <li className="mb-2"><strong>Serafins:</strong> Os mais próximos de Deus, ardentes de amor</li>
                                    <li className="mb-2"><strong>Querubins:</strong> Guardiões da glória de Deus</li>
                                    <li className="mb-2"><strong>Tronos:</strong> Manifestam a justiça divina</li>
                                    <li className="mb-2"><strong>Dominações:</strong> Regulam os deveres dos anjos</li>
                                    <li className="mb-2"><strong>Virtudes:</strong> Realizam milagres e dão coragem</li>
                                    <li className="mb-2"><strong>Potestades:</strong> Combatem as forças do mal</li>
                                    <li className="mb-2"><strong>Principados:</strong> Protegem nações e comunidades</li>
                                    <li className="mb-2"><strong>Arcanjos:</strong> Mensageiros de grandes missões</li>
                                    <li className="mb-2"><strong>Anjos:</strong> Guardiões dos seres humanos</li>
                                </ol>
                            </div>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Promessas do Terço de São Miguel</h3>
                            <p className="text-text leading-relaxed mb-6">
                                São Miguel prometeu que quem rezasse este terço teria, ao se aproximar da Sagrada Comunhão, um anjo de cada um dos nove coros para acompanhá-lo. Além disso, prometeu sua assistência contínua durante a vida e, após a morte, a libertação do Purgatório para si e seus parentes.
                            </p>

                            {/* SEÇÃO 6: COMBATE ESPIRITUAL */}
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">São Miguel e o Combate Espiritual</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A devoção a São Miguel está intimamente ligada ao combate espiritual. Como ensina São Paulo: "Nossa luta não é contra a carne e o sangue, mas contra os principados, contra as potestades, contra os dominadores deste mundo tenebroso, contra os espíritos do mal que habitam nas regiões celestes" (Efésios 6,12).
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">As Armas do Cristão</h3>
                            <p className="text-text leading-relaxed mb-6">
                                São Miguel nos ensina a usar as armas espirituais:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-text">
                                <li className="mb-2"><strong>A Oração:</strong> Especialmente o <Link to="/blog/como-rezar-rosario" className="text-accent hover:underline">Santo Rosário</Link> e as orações a São Miguel</li>
                                <li className="mb-2"><strong>Os Sacramentos:</strong> A <Link to="/blog/sacramento-confissao" className="text-accent hover:underline">Confissão</Link> e a Eucaristia são nossas maiores fortalezas</li>
                                <li className="mb-2"><strong>O Jejum:</strong> Jesus disse que certos demônios só saem com oração e jejum (Mt 17,21)</li>
                                <li className="mb-2"><strong>A Palavra de Deus:</strong> A Escritura é "espada do Espírito" (Ef 6,17)</li>
                                <li className="mb-2"><strong>Os Sacramentais:</strong> Água benta, medalhas, escapulários abençoados</li>
                                <li className="mb-2"><strong>A Humildade:</strong> O grito de São Miguel "Quem é como Deus?" é um ato de humildade contra a <Link to="/blog/pecado-soberba" className="text-accent hover:underline">soberba</Link></li>
                            </ul>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Proteção Contra o Mal</h3>
                            <p className="text-text leading-relaxed mb-6">
                                São Miguel é invocado especialmente para proteção contra:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-text">
                                <li className="mb-2">Tentações e ataques espirituais</li>
                                <li className="mb-2">Influências malignas e obsessões</li>
                                <li className="mb-2">Perigos físicos e espirituais</li>
                                <li className="mb-2">Na hora da morte, contra os últimos ataques do inimigo</li>
                            </ul>

                            {/* SEÇÃO 7: ORAÇÕES DIÁRIAS */}
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Orações para a Quaresma de São Miguel</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Durante os 40 dias, além da oração de Leão XIII, podemos rezar outras orações tradicionais a São Miguel Arcanjo.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração da Manhã a São Miguel</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Gloriosíssimo São Miguel Arcanjo,<br />
                                    príncipe e chefe dos exércitos celestes,<br />
                                    guardião fiel das almas,<br />
                                    vencedor dos espíritos rebeldes,<br />
                                    amado da casa de Deus,<br />
                                    nosso admirável guia depois de Jesus Cristo,<br />
                                    vós cuja excelência e virtude são eminentíssimas,<br />
                                    dignai-vos livrar-nos de todo mal,<br />
                                    nós todos que recorremos a vós com confiança,<br />
                                    e fazei que pela vossa incomparável proteção<br />
                                    avancemos cada dia mais no serviço de Deus. Amém.
                                </p>
                            </div>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Oração da Noite a São Miguel</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    São Miguel Arcanjo,<br />
                                    que fostes constituído por Deus<br />
                                    guarda de sua Igreja e protetor das almas,<br />
                                    eu vos peço que me defendais<br />
                                    durante esta noite de todo perigo<br />
                                    e de toda cilada do inimigo.<br />
                                    Guardai meu corpo enquanto durmo,<br />
                                    protegei minha alma das tentações,<br />
                                    e fazei que eu desperte amanhã<br />
                                    para louvar e servir a Deus. Amém.
                                </p>
                            </div>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                                <h3 className="font-display text-xl font-bold text-text mb-4 text-center">Consagração a São Miguel Arcanjo</h3>
                                <p className="text-text italic text-center leading-relaxed">
                                    Ó grande príncipe do céu, guardião fidelíssimo da Igreja,<br />
                                    São Miguel Arcanjo, eu, embora indigno de aparecer diante de vós,<br />
                                    confiando em vossa especial bondade,<br />
                                    e movido pela excelência de vossas orações,<br />
                                    apresento-me diante de vós, acompanhado de meu Anjo da Guarda,<br />
                                    e na presença de todos os anjos do céu, que tomo por testemunhas.<br />
                                    Eu vos escolho hoje por meu protetor e advogado particular,<br />
                                    e proponho firmemente honrar-vos sempre,<br />
                                    e fazer que sejais honrado por todos.<br />
                                    Assisti-me durante toda a minha vida,<br />
                                    para que eu nunca ofenda os olhos puríssimos de Deus. Amém.
                                </p>
                            </div>

                            {/* SEÇÃO 8: FRUTOS ESPIRITUAIS */}
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Frutos Espirituais da Quaresma de São Miguel</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Quem vive devotamente esta quaresma pode esperar abundantes frutos espirituais:
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Graças Prometidas</h3>
                            <ul className="list-disc pl-6 mb-6 text-text">
                                <li className="mb-2"><strong>Proteção especial:</strong> Contra as tentações e ataques do maligno</li>
                                <li className="mb-2"><strong>Fortaleza espiritual:</strong> Para vencer os vícios e crescer nas virtudes</li>
                                <li className="mb-2"><strong>Discernimento:</strong> Para reconhecer as ciladas do inimigo</li>
                                <li className="mb-2"><strong>Paz interior:</strong> Fruto da confiança na proteção divina</li>
                                <li className="mb-2"><strong>Crescimento na fé:</strong> Maior consciência do mundo espiritual</li>
                                <li className="mb-2"><strong>Assistência na hora da morte:</strong> São Miguel acompanha as almas ao juízo</li>
                            </ul>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Testemunhos da Tradição</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Santos e místicos ao longo da história testemunharam a poderosa intercessão de São Miguel. Santa Faustina Kowalska relatou visões do Arcanjo. São Padre Pio tinha grande devoção a ele e o invocava constantemente. O próprio <Link to="/blog/oracao-anjo-da-guarda" className="text-accent hover:underline">Anjo da Guarda</Link> que apareceu em Fátima ensinou às crianças orações que invocam a proteção celestial.
                            </p>

                            {/* SEÇÃO 9: A FESTA DE 29 DE SETEMBRO */}
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Festa de São Miguel, Gabriel e Rafael (29 de Setembro)</h2>
                            <p className="text-text leading-relaxed mb-6">
                                O dia 29 de setembro é a festa dos três Arcanjos: Miguel, Gabriel e Rafael. É o ápice da Quaresma de São Miguel e um dia de grande alegria para a Igreja.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Como Celebrar a Festa</h3>
                            <ul className="list-disc pl-6 mb-6 text-text">
                                <li className="mb-2">Participar da Santa Missa</li>
                                <li className="mb-2">Fazer uma hora de adoração eucarística</li>
                                <li className="mb-2">Rezar o Terço de São Miguel completo</li>
                                <li className="mb-2">Renovar a consagração a São Miguel</li>
                                <li className="mb-2">Agradecer pelas graças recebidas durante a quaresma</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Houve uma batalha no céu: Miguel e seus anjos combateram contra o dragão. O dragão e seus anjos combateram, mas não prevaleceram."</p>
                                <p className="text-text-muted text-center mt-2">— Apocalipse 12,7-8</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="quaresma-sao-miguel-arcanjo" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Quer aprofundar sua vida espiritual?</h3>
                            <p className="text-text-muted mb-6">Faça nosso quiz e descubra como crescer na fé católica com a proteção dos santos anjos.</p>
                            <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

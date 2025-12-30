import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function ComoRezarRosario() {
  return (
    <>
      <Helmet>
        <title>Como Rezar o Santo Rosário: Guia Completo para Iniciantes | Bom Católico</title>
        <meta name="description" content="Aprenda passo a passo como rezar o Santo Rosário corretamente. Guia completo com os mistérios, orações e meditações para fortalecer sua devoção mariana." />
        <meta name="keywords" content="santo rosário, como rezar rosário, oração mariana, mistérios do rosário, terço católico" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/como-rezar-rosario" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
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

        {/* Breadcrumb */}
        <div className="bg-background-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Como Rezar o Santo Rosário</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back button */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Orações
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  05 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  8 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Como Rezar o Santo Rosário: Guia Completo para Iniciantes
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                O Santo Rosário é uma das orações mais poderosas e amadas da Igreja Católica.
                Aprenda passo a passo como rezar esta devoção mariana e fortaleça sua vida espiritual.
              </p>
            </header>

            {/* Featured Image */}
            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                O Santo Rosário é, sem dúvida, uma das maiores dádivas que o Céu concedeu à Igreja militante. Quando a Santíssima Virgem Maria apareceu a São Domingos de Gusmão no século XIII, entregou-lhe esta arma espiritual poderosa para combater as heresias e converter os pecadores. Desde então, o Rosário tem sido o refúgio dos aflitos, a esperança dos desesperados e o caminho seguro para aqueles que buscam a intimidade com Deus através do Coração Imaculado de Maria.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Não é por acaso que todos os santos dos últimos séculos foram devotos fervorosos do Rosário. São Padre Pio rezava até 30 terços por dia. Santa Teresa de Calcutá nunca se separava de seu terço. São João Paulo II chamou o Rosário de sua "oração predileta". Há algo de profundamente transformador nesta oração simples, acessível a todos, mas capaz de elevar a alma às mais altas contemplações.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que é o Santo Rosário?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O Rosário é muito mais do que uma repetição de orações – é uma escola de contemplação onde aprendemos a olhar para Jesus com os olhos de Maria. O nome "Rosário" vem do latim "rosarium", que significa "coroa de rosas". Cada Ave-Maria é como uma rosa mística que oferecemos à nossa Mãe celestial, e ela, por sua vez, as transforma em graças que derrama sobre nós e sobre o mundo inteiro.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A estrutura do Rosário é genial em sua simplicidade: enquanto os lábios pronunciam as orações, a mente contempla os mistérios da vida de Cristo. É como se caminhássemos de mãos dadas com Maria pelos momentos mais importantes da história da salvação – desde a Anunciação até a Coroação da Virgem no Céu. A oração completa consiste em 20 mistérios divididos em quatro grupos: Gozosos, Luminosos, Dolorosos e Gloriosos.
              </p>

              <QuizCTA
                title="O Rosário é sua arma espiritual?"
                description="Nossa Senhora nos deu o Rosário como caminho para Jesus. Faça nosso quiz e descubra como tornar sua oração mariana mais contemplativa e eficaz para sua vida espiritual."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Mistérios do Santo Rosário
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Mistérios Gozosos (Segunda-feira e Sábado)
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Os Mistérios Gozosos contemplam os eventos alegres da encarnação e infância de Jesus:
              </p>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>A Anunciação do Anjo Gabriel a Maria</li>
                <li>A Visitação de Maria a Santa Isabel</li>
                <li>O Nascimento de Jesus em Belém</li>
                <li>A Apresentação de Jesus no Templo</li>
                <li>O Encontro de Jesus no Templo aos 12 anos</li>
              </ol>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Mistérios Luminosos (Quinta-feira)
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Instituídos por São João Paulo II em 2002, os Mistérios Luminosos iluminam a vida pública de Jesus:
              </p>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>O Batismo de Jesus no Rio Jordão</li>
                <li>As Bodas de Caná</li>
                <li>O Anúncio do Reino de Deus</li>
                <li>A Transfiguração de Jesus</li>
                <li>A Instituição da Eucaristia</li>
              </ol>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Mistérios Dolorosos (Terça-feira e Sexta-feira)
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Os Mistérios Dolorosos nos fazem meditar sobre a Paixão e Morte de Nosso Senhor:
              </p>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>A Agonia de Jesus no Horto das Oliveiras</li>
                <li>A Flagelação de Jesus</li>
                <li>A Coroação de Espinhos</li>
                <li>Jesus Carrega a Cruz</li>
                <li>A Crucificação e Morte de Jesus</li>
              </ol>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Mistérios Gloriosos (Quarta-feira e Domingo)
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Os Mistérios Gloriosos celebram a vitória de Cristo sobre a morte:
              </p>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>A Ressurreição de Jesus</li>
                <li>A Ascensão de Jesus ao Céu</li>
                <li>A Descida do Espírito Santo sobre os Apóstolos</li>
                <li>A Assunção de Maria ao Céu</li>
                <li>A Coroação de Maria como Rainha do Céu e da Terra</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Passo a Passo: Como Rezar o Rosário
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Faça o Sinal da Cruz
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Comece segurando o crucifixo do terço e fazendo o Sinal da Cruz: "Em nome do Pai, do Filho e do Espírito Santo. Amém." Este gesto nos coloca na presença da Santíssima Trindade e marca o início da nossa oração.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Reze o Credo Apostólico
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Ainda no crucifixo, reze o Credo, professando sua fé nos artigos fundamentais da doutrina católica. Esta oração nos une a todos os cristãos que, ao longo dos séculos, professaram a mesma fé.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                3. Reze um Pai-Nosso, Três Ave-Marias e um Glória
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Nas contas iniciais, reze um Pai-Nosso pedindo o aumento das virtudes teologais (fé, esperança e caridade), seguido de três Ave-Marias e um Glória ao Pai. Estas orações preparam nossa alma para a meditação dos mistérios.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                4. Anuncie e Medite Cada Mistério
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Para cada dezena, anuncie o mistério correspondente e dedique alguns instantes para contemplá-lo. Depois, reze um Pai-Nosso, dez Ave-Marias enquanto medita no mistério, e conclua com o Glória ao Pai e a Jaculatória de Fátima: "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu, principalmente as que mais precisarem."
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                5. Conclua com a Salve Rainha
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Após as cinco dezenas, reze a Salve Rainha e as orações finais. Você pode acrescentar intenções pessoais e agradecer a Nossa Senhora pela graça de ter rezado o Rosário.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Benefícios Espirituais do Santo Rosário
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Nossa Senhora prometeu a São Domingos e ao Beato Alano de la Roche quinze promessas extraordinárias para aqueles que rezam o Rosário com devoção. Entre elas: proteção especial da Virgem Maria, graças abundantes, arma poderosa contra o inferno, florescimento das virtudes, misericórdia de Deus, e a certeza de não perecer sem os sacramentos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Luís Maria Grignion de Montfort, o grande apóstolo do Rosário, ensina que esta oração é "a arma mais poderosa contra o demônio". Quando rezamos o Rosário, não estamos sozinhos – toda a corte celestial se une a nós. Os anjos se alegram, os demônios tremem, e as almas do Purgatório recebem alívio. É uma oração que move o Céu e transforma a terra.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Os frutos do Rosário são incontáveis: paz interior mesmo nas tribulações, clareza nas decisões difíceis, força para resistir às tentações, conversão de pecadores, cura de enfermidades espirituais e, não raramente, físicas. Quantas famílias foram salvas pelo Rosário! Quantos casamentos restaurados! Quantos jovens arrancados das garras do vício! O Rosário é verdadeiramente o "Evangelho resumido", como disse o Papa Paulo VI.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Dicas para Rezar com Mais Devoção
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O segredo do Rosário não está na quantidade, mas na qualidade da oração. Um terço rezado com amor e atenção vale mais do que muitos rezados com pressa e distração. Aqui estão algumas orientações dos mestres espirituais:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Escolha um local tranquilo:</strong> Se possível, reze diante de uma imagem de Nossa Senhora ou do Santíssimo Sacramento</li>
                <li><strong>Estabeleça um horário fixo:</strong> A constância é mais importante que o fervor passageiro</li>
                <li><strong>Medite verdadeiramente:</strong> Não deixe a mente vagar; contemple cada cena como se estivesse presente</li>
                <li><strong>Reze com calma:</strong> Melhor um mistério bem rezado do que cinco às pressas</li>
                <li><strong>Use um terço abençoado:</strong> Os sacramentais nos ajudam a manter o foco</li>
                <li><strong>Ofereça intenções:</strong> Cada dezena pode ser oferecida por uma pessoa ou necessidade específica</li>
                <li><strong>Persevere nas securas:</strong> Quando a oração parece árida, é quando mais agrada a Deus</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Rosário em Família
              </h2>
              <p className="text-text leading-relaxed mb-6">
                "Família que reza unida, permanece unida" – esta frase do Padre Patrick Peyton expressa uma verdade comprovada por milhões de lares católicos. O Rosário em família é uma fortaleza contra as investidas do mundo moderno. Quando pais e filhos se ajoelham juntos diante de Maria, laços invisíveis de graça são tecidos, protegendo o lar das tempestades da vida.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Não se preocupe se as crianças se distraem ou se inquietam – Nossa Senhora entende. O importante é criar o hábito, plantar a semente. Muitos santos recordam com carinho os Rosários rezados em família na infância, mesmo quando não compreendiam plenamente o que faziam. A graça age silenciosamente, e os frutos aparecem ao longo dos anos.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Dai-me um exército que reze o Rosário, e eu conquistarei o mundo."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Beato Papa Pio IX
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Nunca poderemos agradecer suficientemente a Nossa Senhora por nos ter dado o Rosário."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — São Pio de Pietrelcina
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="como-rezar-rosario" />

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Descubra Como Está Sua Vida de Fé
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz gratuito e receba um diagnóstico personalizado da sua caminhada católica.
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

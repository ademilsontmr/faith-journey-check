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
                O Santo Rosário é uma das devoções mais ricas e profundas da tradição católica. Instituído pela Santíssima Virgem Maria através de São Domingos de Gusmão no século XIII, esta oração contemplativa nos conduz através dos principais mistérios da vida de Jesus Cristo e de Nossa Senhora. Milhões de católicos ao redor do mundo rezam o Rosário diariamente, encontrando nele paz, consolação e fortalecimento da fé.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que é o Santo Rosário?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O Rosário é uma oração meditativa que combina orações vocais com a contemplação dos mistérios da vida de Cristo e da Virgem Maria. O nome "Rosário" vem do latim "rosarium", que significa "coroa de rosas" – cada Ave-Maria é como uma rosa espiritual oferecida a Nossa Senhora. A oração completa consiste em 20 mistérios divididos em quatro grupos: Gozosos, Luminosos, Dolorosos e Gloriosos.
              </p>

              <QuizCTA />

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
                A Igreja sempre exaltou os frutos espirituais do Rosário. São Luís Maria Grignion de Montfort ensina que esta oração é "a arma mais poderosa contra o demônio". Entre os benefícios, destacam-se: crescimento na virtude, paz interior, proteção contra tentações, graças especiais obtidas pela intercessão de Maria, e uma compreensão mais profunda dos mistérios da fé.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Dicas para Rezar com Mais Devoção
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Escolha um local tranquilo e silencioso</li>
                <li>Estabeleça um horário fixo diário</li>
                <li>Medite verdadeiramente em cada mistério</li>
                <li>Reze com calma, sem pressa</li>
                <li>Use um terço abençoado</li>
                <li>Ofereça cada dezena por uma intenção específica</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
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

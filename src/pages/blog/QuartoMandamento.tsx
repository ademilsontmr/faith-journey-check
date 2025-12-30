import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function QuartoMandamento() {
  return (
    <>
      <Helmet>
        <title>4º Mandamento: Honrar Pai e Mãe | Bom Católico</title>
        <meta name="description" content="Entenda o Quarto Mandamento da Lei de Deus. O respeito aos pais, deveres dos filhos e dos pais, e a importância da família cristã." />
        <meta name="keywords" content="quarto mandamento, honrar pai e mãe, família, respeito aos pais, deveres filhos, autoridade" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/quarto-mandamento-honrar-pai-mae" />
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
              <span className="text-text">4º Mandamento</span>
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
                  Mandamentos
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                4º Mandamento: Honrar Pai e Mãe
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Este é o primeiro mandamento com uma promessa: "para que vivas longamente na terra". A família é a célula básica da sociedade e da Igreja.
              </p>
            </header>

            <div className="aspect-video bg-green-100 rounded-2xl flex items-center justify-center mb-10">
              <Users className="w-24 h-24 text-green-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Honra teu pai e tua mãe, para que se prolonguem os teus dias na terra que o Senhor teu Deus te dá" (Ex 20,12). Este mandamento ocupa um lugar especial: é a transição entre os mandamentos que tratam de Deus (1-3) e os que tratam do próximo (5-10). A família é o lugar onde aprendemos a amar a Deus e ao próximo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus, o Filho de Deus, quis nascer em uma família. Ele honrou Maria e José, obedecendo-lhes durante trinta anos em Nazaré. "E desceu com eles para Nazaré, e era-lhes submisso" (Lc 2,51). Se o próprio Deus honrou seus pais terrenos, quanto mais nós devemos honrar os nossos!
              </p>

              <QuizCTA
                title="Você honra seus pais?"
                description="O quarto mandamento é fundamental para a vida familiar. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Deveres dos Filhos
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Respeito:</strong> Os filhos devem respeitar seus pais em palavras e ações. Isso inclui falar com educação, não responder com grosseria, não envergonhá-los publicamente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Obediência:</strong> Enquanto vivem sob o teto dos pais, os filhos devem obedecer em tudo o que não seja pecado. A obediência aos pais é uma preparação para a obediência a Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Gratidão:</strong> Os pais deram a vida aos filhos, os alimentaram, educaram, sacrificaram-se por eles. Os filhos devem ser gratos por tudo isso.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Assistência na velhice:</strong> Quando os pais envelhecem, os filhos têm o dever de cuidar deles. Abandonar os pais idosos é um pecado grave contra este mandamento.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Deveres dos Pais
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O quarto mandamento também implica deveres dos pais para com os filhos:
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Prover as necessidades:</strong> Alimentação, moradia, educação, saúde. Os pais são responsáveis pelo bem-estar material dos filhos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Educar na fé:</strong> Os pais são os primeiros catequistas dos filhos. Devem ensinar-lhes a rezar, levá-los à Missa, dar exemplo de vida cristã.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Corrigir com amor:</strong> "Quem poupa a vara odeia seu filho, mas quem o ama cuida de corrigi-lo" (Pr 13,24). A correção deve ser feita com amor, não com raiva ou violência.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Respeitar a vocação:</strong> Os pais devem ajudar os filhos a descobrir sua vocação, não impor seus próprios sonhos sobre eles.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Extensão do Mandamento
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Este mandamento se estende a todas as autoridades legítimas: professores, patrões, governantes, autoridades da Igreja. Devemos respeitar aqueles que Deus colocou em posição de autoridade sobre nós.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Isso não significa obediência cega. Se uma autoridade manda fazer algo contrário à lei de Deus, devemos obedecer a Deus antes dos homens (At 5,29). Mas, em geral, o respeito à autoridade é necessário para a ordem social.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Quando os Pais São Difíceis
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Nem todos têm pais amorosos. Alguns sofreram abuso, abandono ou negligência. Mesmo assim, o mandamento permanece. Honrar não significa aprovar tudo o que os pais fizeram. Significa tratá-los com dignidade, perdoar suas falhas, rezar por eles.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Se seus pais o feriram, peça a Deus a graça do perdão. O perdão não é um sentimento – é uma decisão. Você pode decidir perdoar mesmo quando ainda dói. E Deus curará as feridas com o tempo.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Filhos, obedecei a vossos pais no Senhor, pois isto é justo. Honra teu pai e tua mãe – é o primeiro mandamento com promessa."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Efésios 6,1-2
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A família é a primeira escola de virtudes e o primeiro lugar onde se aprende a amar."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — São João Paulo II
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="quarto-mandamento-honrar-pai-mae" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Como está sua relação familiar?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra como está sua vivência da fé católica.
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

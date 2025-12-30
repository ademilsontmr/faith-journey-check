import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SetimoMandamento() {
  return (
    <>
      <Helmet>
        <title>7º Mandamento: Não Roubarás | Bom Católico</title>
        <meta name="description" content="Entenda o Sétimo Mandamento da Lei de Deus. A justiça nas relações, respeito à propriedade alheia, restituição e a doutrina social da Igreja." />
        <meta name="keywords" content="sétimo mandamento, não roubar, justiça, propriedade, restituição, doutrina social" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/setimo-mandamento-nao-roubaras" />
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
              <span className="text-text">7º Mandamento</span>
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
                7º Mandamento: Não Roubarás
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Este mandamento protege a propriedade e exige justiça em todas as relações. Vai muito além do roubo físico – abrange toda forma de injustiça.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Scale className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Não roubarás" (Ex 20,15). Este mandamento parece simples: não pegue o que não é seu. Mas suas implicações são muito mais amplas. Ele exige justiça em todas as relações humanas, respeito aos bens alheios, honestidade nos negócios e solidariedade com os necessitados.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A propriedade privada é um direito natural, mas não é absoluto. Os bens da terra foram criados por Deus para todos. Quem tem mais deve ajudar quem tem menos. A destinação universal dos bens é um princípio fundamental da doutrina social da Igreja.
              </p>

              <QuizCTA
                title="Você é justo em suas relações?"
                description="O sétimo mandamento exige justiça e honestidade. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Formas de Roubo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Roubo direto:</strong> Tomar o que pertence a outro sem seu consentimento. Inclui furto, assalto, fraude, estelionato.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Não pagar dívidas:</strong> Se você deve e pode pagar, mas não paga, está retendo injustamente o que pertence a outro.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Salários injustos:</strong> Pagar menos do que o trabalhador merece é uma forma de roubo. "O salário do trabalhador não deve ficar contigo até o dia seguinte" (Lv 19,13).
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Sonegação de impostos:</strong> Os impostos justos são devidos à sociedade. Sonegar é roubar da comunidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Trabalho mal feito:</strong> Se você é pago para fazer um trabalho e não o faz direito, está roubando seu empregador.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pirataria:</strong> Copiar software, músicas, filmes sem pagar viola os direitos dos criadores.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Obrigação de Restituir
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Quem roubou deve restituir. Não basta confessar o pecado – é preciso devolver o que foi roubado ou compensar o dano causado. Se não for possível devolver diretamente (por exemplo, se a pessoa morreu), deve-se dar aos pobres ou à Igreja.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A restituição é condição para o perdão. Uma confissão sem intenção de restituir não é válida. Deus perdoa o pecado, mas a justiça exige reparação.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Justiça Social
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O sétimo mandamento fundamenta a doutrina social da Igreja. Exige que a sociedade seja organizada de forma justa, que os trabalhadores recebam salários dignos, que os pobres sejam protegidos, que os recursos sejam distribuídos equitativamente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Igreja não defende nem o capitalismo selvagem nem o comunismo. Defende uma economia a serviço da pessoa humana, onde a propriedade privada é respeitada, mas subordinada ao bem comum.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Cuidado com a Criação
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O sétimo mandamento também inclui o cuidado com o meio ambiente. A terra foi confiada ao ser humano para administrar, não para destruir. Poluir, desperdiçar recursos, destruir espécies é uma forma de roubar das gerações futuras.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Viver o Sétimo Mandamento
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Seja honesto:</strong> Em todas as suas transações, seja justo. Não engane, não trapaceie, não tire vantagem.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pague suas dívidas:</strong> Se você deve, pague. Se não pode pagar tudo, pague o que puder e negocie o resto.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Seja generoso:</strong> Compartilhe o que você tem com os necessitados. O dízimo e a esmola são expressões de justiça, não apenas de caridade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Trabalhe bem:</strong> Faça seu trabalho com dedicação e honestidade. Você está servindo a Deus através do seu trabalho.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Quem furtava, não furte mais; antes trabalhe, fazendo com as próprias mãos o que é bom, para ter o que repartir com quem estiver em necessidade."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Efésios 4,28
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Os bens da criação são destinados a todo o gênero humano."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catecismo da Igreja Católica, 2402
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="setimo-mandamento-nao-roubaras" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você vive com justiça?
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

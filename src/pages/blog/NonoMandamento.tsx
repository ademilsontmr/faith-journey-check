import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function NonoMandamento() {
  return (
    <>
      <Helmet>
        <title>9º Mandamento: Não Cobiçar a Mulher do Próximo | Bom Católico</title>
        <meta name="description" content="Entenda o Nono Mandamento da Lei de Deus. A pureza do coração, pensamentos impuros, concupiscência e como guardar o coração na castidade." />
        <meta name="keywords" content="nono mandamento, não cobiçar a mulher do próximo, pureza de coração, pensamentos impuros é pecado, concupiscência, adultério no coração, mandamentos da lei de deus" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/nono-mandamento-nao-cobicar" />
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
              <span className="text-text">9º Mandamento</span>
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
                  9 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                9º Mandamento: Não Cobiçar a Mulher do Próximo
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Este mandamento vai além das ações – ele trata dos desejos do coração. Jesus disse que quem olha com cobiça já cometeu adultério no coração.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Eye className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Não cobiçarás a mulher do teu próximo" (Ex 20,17). Enquanto o sexto mandamento proíbe atos impuros, o nono mandamento proíbe desejos impuros. Deus não se contenta com a pureza exterior – Ele quer a pureza do coração.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus aprofundou este mandamento: "Ouvistes que foi dito: Não cometerás adultério. Eu, porém, vos digo: todo aquele que olhar para uma mulher com desejo libidinoso já cometeu adultério com ela em seu coração" (Mt 5,27-28). O pecado começa no coração, antes de se manifestar em ações.
              </p>

              <QuizCTA
                title="Seu coração é puro?"
                description="O nono mandamento trata da pureza interior. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Concupiscência
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A concupiscência é a inclinação desordenada para o prazer sensível. É uma consequência do pecado original que permanece em nós mesmo após o Batismo. Não é pecado em si mesma, mas nos inclina ao pecado.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Sentir atração por alguém não é pecado. O pecado está em alimentar essa atração com pensamentos e desejos deliberados, em fantasiar situações impuras, em "despir" mentalmente a pessoa.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A diferença entre tentação e pecado está no consentimento. Se um pensamento impuro surge na mente e você o rejeita imediatamente, não há pecado. O pecado acontece quando você acolhe o pensamento, o alimenta, se deleita nele.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Pureza do Coração
              </h2>
              <p className="text-text leading-relaxed mb-6">
                "Bem-aventurados os puros de coração, porque verão a Deus" (Mt 5,8). A pureza do coração é a capacidade de ver as pessoas como Deus as vê – como filhos e filhas de Deus, não como objetos de prazer.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A pureza não é apenas ausência de pensamentos impuros – é uma forma positiva de ver o mundo. É admirar a beleza sem cobiçar. É amar sem usar. É ver no outro uma pessoa, não um corpo.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Guardar o Coração
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Guarde os olhos:</strong> "Fiz um pacto com meus olhos; como poderia fixar-me numa virgem?" (Jó 31,1). Evite olhar o que não deve. Desvie o olhar de imagens provocantes.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Guarde a mente:</strong> Não alimente pensamentos impuros. Quando surgirem, rejeite-os imediatamente. Substitua-os por pensamentos bons.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evite ocasiões:</strong> Não frequente lugares, não veja conteúdos, não mantenha conversas que alimentem a cobiça.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reze:</strong> A pureza é uma graça que vem de Deus. Peça a Nossa Senhora, modelo de pureza, que interceda por você.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Confesse-se:</strong> A confissão frequente fortalece contra as tentações e dá graças para vencer a concupiscência.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Pudor
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O pudor é a virtude que protege a intimidade da pessoa. Inclui vestir-se com modéstia, não expor o corpo desnecessariamente, respeitar a privacidade própria e alheia.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O pudor não é vergonha do corpo – o corpo é bom, criado por Deus. É o reconhecimento de que a intimidade é sagrada e deve ser reservada para o contexto apropriado.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Bem-aventurados os puros de coração, porque verão a Deus."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Mateus 5,8
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A pureza exige o pudor. Este é parte integrante da temperança. O pudor preserva a intimidade da pessoa."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catecismo da Igreja Católica, 2521
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="nono-mandamento-nao-cobicar" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você guarda seu coração?
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

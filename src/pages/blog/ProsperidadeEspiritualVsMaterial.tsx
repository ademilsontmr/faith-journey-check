import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function ProsperidadeEspiritualVsMaterial() {
  return (
    <>
      <Helmet>
        <title>Prosperidade Espiritual vs Material: O Verdadeiro Tesouro | Bom Católico</title>
        <meta name="description" content="Entenda a visão católica sobre prosperidade. A diferença entre riqueza material e riqueza espiritual, e como buscar a verdadeira abundância em Cristo." />
        <meta name="keywords" content="prosperidade na bíblia, católico pode ser rico, teologia da prosperidade é errada, riqueza espiritual, tesouro no céu, desprendimento cristão" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/prosperidade-espiritual-vs-material" />
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
              <span className="text-text">Prosperidade Espiritual vs Material</span>
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
                  Espiritualidade
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Prosperidade Espiritual vs Material: O Verdadeiro Tesouro
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Vivemos em uma cultura que idolatra a riqueza material. Mas Jesus nos ensina que existe uma prosperidade muito maior: a abundância espiritual que nos torna verdadeiramente ricos.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <TrendingUp className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                A sociedade moderna nos bombardeia com uma mensagem clara: a felicidade está na riqueza. Quanto mais dinheiro você tiver, mais feliz será. Quanto mais posses acumular, mais seguro estará. Mas Jesus nos oferece uma perspectiva completamente diferente. Ele não condena a riqueza, mas nos adverte sobre o perigo de colocar nossa confiança nela.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A prosperidade verdadeira não é medida em dólares ou euros. É medida em paz, em alegria, em liberdade interior, em comunhão com Deus e com o próximo. Um homem pode ter bilhões e estar miserável. Uma mulher pode ter pouco e estar transbordando de alegria. A diferença está no que você valoriza, no que você busca, no que você ama.
              </p>

              <QuizCTA
                title="Qual é seu verdadeiro tesouro?"
                description="A prosperidade espiritual é a riqueza que nenhum ladrão pode roubar. Faça nosso quiz e descubra como viver em abundância verdadeira."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Perigo da Riqueza Material
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Jesus não disse que é pecado ser rico. Ele disse que é perigoso. "É mais fácil um camelo passar pelo buraco de uma agulha do que um rico entrar no Reino de Deus" (Mt 19,24). Essa não é uma condenação da riqueza em si, mas um aviso sobre o poder que ela tem de nos afastar de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A riqueza material cria uma ilusão de segurança. Quando você tem muito dinheiro, é fácil pensar que não precisa de Deus. Você pode comprar o que quiser, resolver seus problemas com dinheiro, construir uma vida confortável. Mas a morte não respeita riqueza. A doença não se importa com seu banco. O vazio existencial não é preenchido por posses.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Além disso, a ganância é uma das raízes de todo o mal. Quantas famílias foram destruídas por disputas sobre herança? Quantas amizades foram perdidas por dinheiro? Quantas pessoas sacrificaram sua saúde, sua família, sua integridade moral para ganhar mais? A riqueza material, quando se torna o objetivo principal da vida, nos torna escravos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Verdadeira Prosperidade Espiritual
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A prosperidade espiritual é a riqueza que vem de estar em paz com Deus e consigo mesmo. É ter um coração livre de culpa, uma consciência tranquila, uma vida cheia de propósito. É amar e ser amado. É ter esperança mesmo nas dificuldades. É saber que você é amado por Deus, não por aquilo que você possui ou realiza, mas simplesmente porque você existe.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A prosperidade espiritual inclui a alegria, a paz, a paciência, a bondade, a fidelidade – os frutos do Espírito Santo (Gl 5,22-23). Inclui também a liberdade: liberdade do medo, liberdade da ganância, liberdade da inveja, liberdade da vaidade. É uma riqueza que nenhum ladrão pode roubar, que nenhuma crise econômica pode tirar, que nenhuma morte pode destruir.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Equilíbrio: Nem Pobreza Nem Ganância
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Igreja Católica não ensina que a pobreza é uma virtude em si mesma. Não é pecado ter dinheiro. É pecado amar o dinheiro mais do que a Deus. É pecado usar a riqueza para explorar os pobres. É pecado acumular enquanto outros passam fome. É pecado colocar sua confiança na riqueza em vez de em Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O equilíbrio está em ter uma relação saudável com o dinheiro. Trabalhe com diligência. Ganhe o que você precisa. Mas não faça do dinheiro seu deus. Use-o para o bem: para sustentar sua família, para ajudar os pobres, para apoiar a Igreja, para fazer o bem. Seja generoso. Seja desprendido. Lembre-se sempre: você não é dono de nada – você é apenas um administrador dos bens que Deus lhe confiou.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Investindo no Tesouro Eterno
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Jesus nos ensina: "Não acumuleis tesouros na terra, onde a traça e a ferrugem os consomem, e onde os ladrões os roubam; mas acumulai tesouros no céu, onde nem a traça nem a ferrugem os consomem, e onde os ladrões não os roubam" (Mt 6,19-20).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Como você acumula tesouro no céu? Através da caridade, da oração, da santidade, do amor ao próximo. Cada ato de bondade é um investimento eterno. Cada sacrifício feito por amor é uma moeda no banco do céu. Cada vez que você escolhe a virtude em vez do vício, você está se tornando mais rico espiritualmente.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Ninguém pode servir a dois senhores; porque ou há de odiar um e amar o outro, ou se dedicará a um e desprezará o outro. Não podeis servir a Deus e à riqueza."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Mateus 6,24
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A verdadeira riqueza é ter um coração em paz e uma consciência tranquila."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Santo Agostinho
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="prosperidade-espiritual-vs-material" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Qual é seu verdadeiro tesouro?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra como viver em verdadeira prosperidade espiritual.
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

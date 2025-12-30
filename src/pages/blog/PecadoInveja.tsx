import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PecadoInveja() {
  return (
    <>
      <Helmet>
        <title>Inveja: A Tristeza pelo Bem Alheio | Bom Católico</title>
        <meta name="description" content="Entenda a Inveja, o pecado capital que se entristece com o bem do próximo. Como reconhecê-la e combatê-la com a caridade fraterna." />
        <meta name="keywords" content="inveja pecado capital, o que é inveja, inveja é pecado, como vencer a inveja, caridade fraterna, alegrar-se com o bem alheio, sete pecados capitais" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/pecado-inveja" />
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
              <span className="text-text">Inveja</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Pecados Capitais</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />30 de Dezembro, 2024</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min de leitura</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Inveja: A Tristeza pelo Bem Alheio
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Inveja é a tristeza pelo bem do próximo e a alegria pelo seu mal. É um pecado diretamente contrário à caridade.
              </p>
            </header>

            <div className="aspect-video bg-green-100 rounded-2xl flex items-center justify-center mb-10">
              <Eye className="w-24 h-24 text-green-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Onde há inveja e rivalidade, aí está a desordem e toda espécie de males" (Tg 3,16). A Inveja é a tristeza pelo bem do próximo, como se esse bem diminuísse o nosso.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Foi por inveja que Caim matou Abel. Foi por inveja que os irmãos de José o venderam. Foi por inveja que os fariseus entregaram Jesus. A inveja está na raiz de muitos crimes e pecados.
              </p>

              <QuizCTA
                title="Você se alegra com o bem alheio?"
                description="A caridade se alegra com a alegria do outro. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Que é a Inveja</h2>
              <p className="text-text leading-relaxed mb-6">
                A Inveja é a tristeza pelo bem do próximo e, consequentemente, a alegria pelo seu mal. O invejoso não suporta ver o outro prosperar, ser elogiado, ter sucesso.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Santo Tomás de Aquino a define como "tristeza pelo bem alheio enquanto diminui a própria excelência". O invejoso vê o bem do outro como ameaça ao seu próprio valor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A inveja é diretamente contrária à caridade, que "não é invejosa... alegra-se com a verdade" (1Cor 13,4.6). Quem ama se alegra com a alegria do amado.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">As Faces da Inveja</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Tristeza pelo sucesso alheio:</strong> Quando o colega é promovido, o vizinho compra um carro novo, o amigo é elogiado – o invejoso se entristece.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Alegria pelo fracasso alheio:</strong> Quando o outro falha, perde, sofre – o invejoso secretamente se alegra.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Detração:</strong> Falar mal do outro para diminuir seu mérito. "Ele só conseguiu porque..." "Na verdade, não é tão bom assim..."
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Comparação constante:</strong> Medir-se sempre pelos outros. Sentir-se diminuído quando o outro se destaca.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Efeitos da Inveja</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Amargura:</strong> O invejoso vive amargurado. Não consegue ser feliz porque sempre há alguém com mais.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Isolamento:</strong> A inveja destrói amizades. Ninguém quer estar perto de quem não se alegra com seu bem.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Calúnia e detração:</strong> Para diminuir o outro, o invejoso fala mal, espalha boatos, critica.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Ódio:</strong> A inveja pode crescer até se tornar ódio. Caim invejou Abel – e o matou.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Combater a Inveja</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Alegre-se com o bem alheio:</strong> Exercite-se em parabenizar sinceramente. Force-se a dizer palavras de alegria pelo sucesso do outro.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Agradeça seus próprios bens:</strong> A gratidão é antídoto contra a inveja. Quem reconhece o que tem não inveja o que o outro tem.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pare de se comparar:</strong> Cada um tem sua vocação, seus dons, seu caminho. Compare-se apenas com quem você era ontem.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reze pelo outro:</strong> É difícil invejar alguém por quem você reza. A oração transforma a inveja em caridade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reconheça a inveja:</strong> O primeiro passo é admitir. "Estou com inveja." Só então pode combatê-la.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Santos que Venceram a Inveja</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>São João Batista:</strong> Viu seus discípulos irem para Jesus e disse: "É preciso que Ele cresça e eu diminua" (Jo 3,30).
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Barnabé:</strong> Alegrou-se com o sucesso de Paulo, mesmo sendo ele mais famoso. Trabalhou para o bem da Igreja, não para sua glória.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Teresinha:</strong> Alegrava-se com as virtudes das outras irmãs, vendo nelas a glória de Deus.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">"A caridade não é invejosa... alegra-se com a verdade."</p>
                <p className="text-text-muted text-center mt-2">— 1 Coríntios 13,4.6</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">"Onde há inveja e rivalidade, aí está a desordem e toda espécie de males."</p>
                <p className="text-text-muted text-center mt-2">— Tiago 3,16</p>
              </div>
            </div>

            <RelatedArticles currentSlug="pecado-inveja" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você cultiva a caridade fraterna?</h3>
              <p className="text-text-muted mb-6">Faça nosso quiz e descubra como está sua vivência da fé católica.</p>
              <Link to="/quiz"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}

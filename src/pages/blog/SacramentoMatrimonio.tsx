import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SacramentoMatrimonio() {
  return (
    <>
      <Helmet>
        <title>O Sacramento do Matrimônio: O Amor que Santifica | Bom Católico</title>
        <meta name="description" content="Entenda o Sacramento do Matrimônio na Igreja Católica. A vocação ao casamento, preparação, indissolubilidade e como viver um casamento santo." />
        <meta name="keywords" content="sacramento do matrimônio, casamento católico, como casar na igreja, casamento religioso, indissolubilidade do casamento, família cristã, sete sacramentos" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/sacramento-matrimonio" />
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
              <span className="text-text">Sacramento do Matrimônio</span>
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
                  30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                O Sacramento do Matrimônio: O Amor que Santifica
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                O Matrimônio não é apenas um contrato – é um sacramento que une homem e mulher em uma aliança de amor indissolúvel, imagem do amor de Cristo pela Igreja.
              </p>
            </header>

            <div className="aspect-video bg-pink-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-pink-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Deus criou o homem e a mulher um para o outro. "Por isso, o homem deixará pai e mãe e se unirá à sua mulher, e os dois serão uma só carne" (Gn 2,24). Jesus elevou essa união natural à dignidade de sacramento. Quando dois batizados se casam na Igreja, eles não apenas fazem um contrato – eles recebem uma graça especial para viver o amor conjugal de forma santa.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Paulo compara o matrimônio ao amor de Cristo pela Igreja: "Maridos, amai vossas mulheres, como Cristo amou a Igreja e se entregou por ela" (Ef 5,25). O casamento cristão é um reflexo desse amor divino – total, fiel, fecundo e indissolúvel.
              </p>

              <QuizCTA
                title="Você vive a vocação matrimonial?"
                description="O Matrimônio é um caminho de santidade. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                As Propriedades do Matrimônio
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Unidade
              </h3>
              <p className="text-text leading-relaxed mb-6">
                O matrimônio é entre um homem e uma mulher. A poligamia é contrária à dignidade do casamento. Os esposos se entregam totalmente um ao outro, em exclusividade.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Indissolubilidade
              </h3>
              <p className="text-text leading-relaxed mb-6">
                "O que Deus uniu, o homem não separe" (Mt 19,6). O matrimônio válido e consumado entre batizados não pode ser dissolvido por nenhum poder humano. O divórcio civil não dissolve o vínculo sacramental – aos olhos de Deus, os esposos continuam casados.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Igreja pode declarar a nulidade de um casamento (anulação), mas isso significa que o casamento nunca existiu validamente – não é um "divórcio católico".
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                3. Fidelidade
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Os esposos prometem fidelidade mútua até a morte. O adultério é uma traição grave não apenas ao cônjuge, mas ao próprio sacramento. A fidelidade inclui não apenas o corpo, mas também o coração e a mente.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                4. Abertura à Vida
              </h3>
              <p className="text-text leading-relaxed mb-6">
                O matrimônio está ordenado à procriação e educação dos filhos. Os esposos devem estar abertos à vida, não usando métodos artificiais de contracepção. Os filhos são "o dom mais excelente do matrimônio" (Gaudium et Spes, 50).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Preparação para o Matrimônio
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Igreja exige uma preparação séria para o matrimônio. Os noivos devem participar de um curso de preparação (cursinho de noivos), onde aprendem sobre a doutrina católica do matrimônio, a vida conjugal, a paternidade responsável e a espiritualidade familiar.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Antes do casamento, os noivos devem viver em castidade. A coabitação (morar juntos) antes do casamento é contrária à doutrina da Igreja. O namoro deve ser um tempo de conhecimento mútuo e crescimento na fé, não uma "experiência" de vida conjugal.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Rito do Matrimônio
              </h2>
              <p className="text-text leading-relaxed mb-6">
                No rito do matrimônio, os próprios noivos são os ministros do sacramento – eles se conferem o sacramento mutuamente através do consentimento. O padre (ou diácono) é a testemunha qualificada da Igreja.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O consentimento é expresso nas palavras: "Eu, N., te recebo, N., como minha esposa (meu esposo) e prometo ser-te fiel, amar-te e respeitar-te, na alegria e na tristeza, na saúde e na doença, todos os dias da nossa vida."
              </p>
              <p className="text-text leading-relaxed mb-6">
                A troca de alianças simboliza a fidelidade e a eternidade do amor. A bênção nupcial invoca a graça de Deus sobre os esposos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Vivendo o Matrimônio Santo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O matrimônio é uma vocação à santidade. Os esposos se santificam mutuamente através do amor, do perdão, do sacrifício e da oração em comum. A família é a "igreja doméstica", onde os filhos aprendem a fé.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Rezem juntos todos os dias. Participem da Missa dominical em família. Confessem-se regularmente. Perdoem-se mutuamente. Coloquem Deus no centro do casamento – e Ele abençoará abundantemente sua família.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Maridos, amai vossas mulheres, como Cristo amou a Igreja e se entregou por ela."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Efésios 5,25
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A família cristã é uma comunhão de pessoas, reflexo e imagem da comunhão do Pai, do Filho e do Espírito Santo."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catecismo da Igreja Católica, 2205
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sacramento-matrimonio" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você vive a vocação ao amor?
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

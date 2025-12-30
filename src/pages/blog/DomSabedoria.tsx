import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DomSabedoria() {
  return (
    <>
      <Helmet>
        <title>Dom da Sabedoria: O Primeiro Dom do Espírito Santo | Bom Católico</title>
        <meta name="description" content="Descubra o Dom da Sabedoria, o mais excelente dos dons do Espírito Santo. Como ele nos faz ver tudo com os olhos de Deus e saborear as coisas divinas." />
        <meta name="keywords" content="dom da sabedoria, sete dons do espírito santo, o que é sabedoria divina, como ter sabedoria de deus, contemplação, vida espiritual católica" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/dom-sabedoria-espirito-santo" />
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
              <span className="text-text">Dom da Sabedoria</span>
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
                  Dons do Espírito Santo
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
                Dom da Sabedoria: Ver com os Olhos de Deus
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A Sabedoria é o mais excelente dos sete dons do Espírito Santo. Ela nos permite contemplar a Deus e todas as coisas à luz divina, saboreando as realidades celestiais.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <Sparkles className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Repousará sobre ele o Espírito do Senhor: espírito de sabedoria e de entendimento" (Is 11,2). O profeta Isaías anuncia os dons que repousariam sobre o Messias, e a Sabedoria aparece em primeiro lugar, como o dom mais elevado.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A palavra "sabedoria" vem do latim "sapere", que significa "saborear". O dom da Sabedoria não é apenas conhecimento intelectual – é uma experiência, um "gosto" pelas coisas de Deus. É conhecer a Deus não apenas com a mente, mas com o coração.
              </p>

              <QuizCTA
                title="Você cultiva a sabedoria divina?"
                description="O dom da Sabedoria nos faz ver tudo com os olhos de Deus. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que é o Dom da Sabedoria
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom da Sabedoria é uma luz sobrenatural que nos permite ver todas as coisas como Deus as vê. É uma participação no próprio conhecimento divino, que nos faz julgar retamente sobre Deus e sobre as criaturas.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Santo Tomás de Aquino ensina que a Sabedoria julga todas as coisas pela causa suprema, que é Deus. Enquanto a sabedoria humana julga pelas causas próximas, a Sabedoria divina julga pela Causa primeira.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Este dom nos faz experimentar Deus, não apenas conhecê-lo. É a diferença entre saber que o mel é doce (conhecimento) e provar o mel (experiência). A Sabedoria nos dá o "gosto" de Deus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Sabedoria Divina vs. Sabedoria Mundana
              </h2>
              <p className="text-text leading-relaxed mb-6">
                São Paulo distingue claramente: "A sabedoria deste mundo é loucura diante de Deus" (1Cor 3,19). A sabedoria mundana busca o sucesso, o prazer, o poder. A Sabedoria divina busca a Deus e seu Reino.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O mundo considera sábio quem acumula riquezas, quem conquista posições, quem satisfaz todos os desejos. Mas Deus considera sábio quem O busca, quem se despoja, quem serve aos outros.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Cruz de Cristo é o exemplo máximo: "Loucura para os que se perdem, mas para nós que somos salvos, é poder de Deus" (1Cor 1,18). O que o mundo vê como fracasso, a Sabedoria divina reconhece como vitória.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Frutos da Sabedoria
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Paz interior:</strong> Quem possui a Sabedoria tem paz, mesmo nas tribulações. Vê tudo na perspectiva da eternidade e não se perturba com as coisas passageiras.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Discernimento:</strong> A Sabedoria nos faz distinguir o essencial do secundário, o eterno do temporal, o verdadeiro bem do bem aparente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Desapego:</strong> Quem saboreia Deus se desapega das criaturas. Não porque as despreze, mas porque encontrou algo infinitamente melhor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Contemplação:</strong> A Sabedoria nos eleva à contemplação de Deus, ao silêncio amoroso diante do Mistério, à oração que vai além das palavras.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Cultivar a Sabedoria
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Peça em oração:</strong> "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente" (Tg 1,5). A Sabedoria é dom – deve ser pedida com humildade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Cultive o silêncio:</strong> A Sabedoria fala no silêncio. Quem vive no barulho constante não consegue ouvir a voz de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Medite a Palavra:</strong> A Sagrada Escritura é fonte de Sabedoria. A lectio divina nos abre para receber este dom.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Frequente os sacramentos:</strong> A Eucaristia e a Confissão nos purificam e nos dispõem a receber os dons do Espírito.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Busque a companhia dos sábios:</strong> Os santos são mestres de Sabedoria. Leia suas vidas, seus escritos, aprenda com eles.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Santos Modelos de Sabedoria
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Salomão:</strong> Pediu a Deus sabedoria para governar o povo e recebeu mais do que pediu. Seu exemplo nos ensina a priorizar a Sabedoria acima de riquezas e poder.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santo Tomás de Aquino:</strong> O Doutor Angélico uniu a sabedoria humana à divina. Sua teologia é fruto da contemplação e do estudo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Teresa de Ávila:</strong> Doutora da Igreja, recebeu altíssimas graças de contemplação. Seus escritos transbordam Sabedoria divina.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Sabedoria e a Bem-Aventurança
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom da Sabedoria corresponde à bem-aventurança dos pacíficos: "Bem-aventurados os pacíficos, porque serão chamados filhos de Deus" (Mt 5,9). A Sabedoria traz a paz porque ordena todas as coisas segundo Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Quem possui a Sabedoria é pacificador porque vê a unidade de todas as coisas em Deus. Não se deixa dividir por conflitos menores porque contempla a harmonia maior.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, sem recriminar, e ser-lhe-á dada."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Tiago 1,5
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O dom da sabedoria é uma graça especial que permite à alma humana apreciar Deus e as coisas divinas, julgando retamente sobre elas por uma certa conaturalidade."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Santo Tomás de Aquino
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="dom-sabedoria-espirito-santo" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você busca a verdadeira Sabedoria?
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

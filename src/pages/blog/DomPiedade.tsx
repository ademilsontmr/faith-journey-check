import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DomPiedade() {
  return (
    <>
      <Helmet>
        <title>Dom da Piedade: Amor Filial a Deus Pai | Bom Católico</title>
        <meta name="description" content="Descubra o Dom da Piedade, que nos faz amar a Deus como Pai e aos outros como irmãos. Como este dom transforma nossa relação com Deus e o próximo." />
        <meta name="keywords" content="dom da piedade, sete dons do espírito santo, deus é pai, amor filial a deus, oração filial, fraternidade cristã, devoção católica" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/dom-piedade-espirito-santo" />
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
              <Button variant="secondary" size="sm">Fazer o Quiz</Button>
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
              <span className="text-text">Dom da Piedade</span>
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
                  <Calendar className="w-4 h-4" />30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />10 min de leitura
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Dom da Piedade: Amor Filial a Deus Pai
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Piedade é o dom que nos faz experimentar Deus como Pai amoroso e nos move a amá-Lo com ternura filial e aos outros como irmãos.
              </p>
            </header>

            <div className="aspect-video bg-pink-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-pink-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Espírito de ciência e de piedade" (Is 11,2). O dom da Piedade nos faz experimentar a paternidade de Deus de modo profundo e pessoal, transformando nossa relação com Ele e com os outros.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Paulo descreve a ação deste dom: "Recebestes um espírito de filhos adotivos, pelo qual clamamos: Abba! Pai!" (Rm 8,15). A Piedade nos faz chamar Deus de "Papai" com a confiança de uma criança.
              </p>

              <QuizCTA
                title="Você experimenta Deus como Pai?"
                description="O dom da Piedade transforma nossa relação com Deus. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que é o Dom da Piedade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom da Piedade é uma inclinação sobrenatural que nos move a amar a Deus como Pai e a tratar os outros como irmãos, filhos do mesmo Pai. É o dom que nos faz sentir – não apenas saber – que somos filhos de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A piedade natural é o amor e respeito que devemos aos pais e à pátria. O dom da Piedade eleva esse sentimento ao nível sobrenatural, dirigindo-o a Deus como nosso Pai celestial.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Este dom nos livra de ver Deus como um juiz severo ou um patrão exigente. Ele é Pai – e Pai amoroso, que quer nosso bem, que nos perdoa, que cuida de nós.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Piedade para com Deus
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom da Piedade nos faz rezar com confiança filial. Não nos aproximamos de Deus com medo servil, mas com a liberdade dos filhos. Podemos pedir, agradecer, até "reclamar" – como filhos fazem com um pai amoroso.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Piedade nos faz amar o culto divino. A Missa, os sacramentos, as orações – tudo o que se refere a Deus nos atrai. Não por obrigação, mas por amor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Este dom nos faz também respeitar tudo o que pertence a Deus: os lugares sagrados, os objetos de culto, os ministros da Igreja, as Escrituras.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Piedade para com os Outros
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Se Deus é nosso Pai, todos os homens são nossos irmãos. O dom da Piedade nos faz ver em cada pessoa um filho de Deus, merecedor de respeito e amor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Piedade nos move a honrar especialmente os santos, que são nossos irmãos mais velhos na fé. Também nos faz venerar Maria, nossa Mãe espiritual.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Este dom nos torna compassivos com os que sofrem, pacientes com os que erram, generosos com os necessitados – porque são nossos irmãos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Frutos da Piedade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Confiança em Deus:</strong> Quem experimenta Deus como Pai confia n'Ele em todas as circunstâncias. Sabe que o Pai cuida de seus filhos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Oração filial:</strong> A oração se torna conversa de filho com Pai. Simples, confiante, amorosa.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Amor fraterno:</strong> Ver os outros como irmãos transforma os relacionamentos. Diminui a competição, aumenta a cooperação.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Devoção:</strong> Amor pelas coisas de Deus – a Igreja, os sacramentos, a oração, os santos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Cultivar a Piedade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Medite na paternidade de Deus:</strong> Contemple como Deus é Pai. Leia as parábolas do filho pródigo, da ovelha perdida. Veja o amor do Pai.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reze o Pai Nosso devagar:</strong> Cada palavra desta oração é escola de piedade filial. "Pai nosso" – somos filhos. "Que estais no céu" – Ele é grande. "Santificado seja o vosso nome" – Ele é santo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Trate os outros como irmãos:</strong> Exercite ver em cada pessoa um filho de Deus. Isso muda a forma de tratar até os mais difíceis.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Cultive a devoção aos santos:</strong> Eles são nossos irmãos mais velhos. Peça sua intercessão, imite suas virtudes.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Honre Maria:</strong> Ela é nossa Mãe. O amor a Maria é fruto e sinal do dom da Piedade.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Piedade e a Bem-Aventurança
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom da Piedade corresponde à bem-aventurança dos mansos: "Bem-aventurados os mansos, porque possuirão a terra" (Mt 5,5). A Piedade nos torna mansos porque nos faz confiar no Pai e amar os irmãos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Santos Modelos de Piedade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Teresinha:</strong> Sua "pequena via" é toda baseada na confiança filial em Deus. Chamava-se "bolinha" nas mãos do Menino Jesus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Francisco de Sales:</strong> Sua doçura e mansidão vinham da experiência de Deus como Pai amoroso.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São João Paulo II:</strong> Sua devoção a Maria ("Totus Tuus") e seu amor paterno pelos fiéis revelavam o dom da Piedade.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Recebestes um espírito de filhos adotivos, pelo qual clamamos: Abba! Pai!"
                </p>
                <p className="text-text-muted text-center mt-2">— Romanos 8,15</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O dom da piedade aperfeiçoa a virtude da religião, que é parte da justiça, e nos faz prestar a Deus o culto filial que lhe é devido."
                </p>
                <p className="text-text-muted text-center mt-2">— Santo Tomás de Aquino</p>
              </div>
            </div>

            <RelatedArticles currentSlug="dom-piedade-espirito-santo" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você vive como filho de Deus?</h3>
              <p className="text-text-muted mb-6">Faça nosso quiz e descubra como está sua vivência da fé católica.</p>
              <Link to="/quiz">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Fazer o Quiz Agora</Button>
              </Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}

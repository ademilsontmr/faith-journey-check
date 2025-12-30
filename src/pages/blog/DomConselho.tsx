import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DomConselho() {
  return (
    <>
      <Helmet>
        <title>Dom do Conselho: Discernir a Vontade de Deus | Bom Católico</title>
        <meta name="description" content="Descubra o Dom do Conselho, que nos guia nas decisões da vida. Como este dom nos ajuda a discernir a vontade de Deus em cada situação." />
        <meta name="keywords" content="dom do conselho, sete dons do espírito santo, discernimento da vontade de deus, como saber a vontade de deus, tomar decisões cristãs, orientação divina" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/dom-conselho-espirito-santo" />
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
              <span className="text-text">Dom do Conselho</span>
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
                Dom do Conselho: Discernir a Vontade de Deus
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                O Conselho é o dom que nos guia nas decisões da vida, iluminando o caminho a seguir segundo a vontade de Deus.
              </p>
            </header>

            <div className="aspect-video bg-teal-100 rounded-2xl flex items-center justify-center mb-10">
              <Compass className="w-24 h-24 text-teal-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Espírito de conselho e de fortaleza" (Is 11,2). O dom do Conselho é a luz que o Espírito Santo derrama sobre nossa inteligência prática, ajudando-nos a discernir o que devemos fazer em cada situação concreta.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A vida cristã é feita de escolhas. A cada momento, precisamos decidir: o que fazer, o que dizer, como agir. O dom do Conselho nos orienta nessas decisões, mostrando o caminho que agrada a Deus.
              </p>

              <QuizCTA
                title="Você busca a orientação de Deus?"
                description="O dom do Conselho nos guia nas decisões. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que é o Dom do Conselho
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom do Conselho é uma iluminação sobrenatural que nos faz julgar retamente, em casos particulares, o que devemos fazer ou evitar para alcançar a vida eterna. É a prudência elevada ao nível sobrenatural.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Enquanto a prudência natural nos ajuda a tomar boas decisões com base na razão e na experiência, o dom do Conselho vai além: ele nos faz perceber a vontade de Deus em situações onde a razão sozinha não alcança.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Santo Tomás de Aquino ensina que este dom aperfeiçoa a virtude da prudência, tornando-nos dóceis às inspirações do Espírito Santo nas decisões práticas da vida.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Conselho para Si e para os Outros
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom do Conselho atua em duas direções: nos ajuda a discernir o que nós mesmos devemos fazer, e nos capacita a aconselhar os outros com sabedoria divina.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Para si mesmo:</strong> Nas encruzilhadas da vida – escolha de estado de vida, decisões profissionais, dilemas morais – o Conselho ilumina o caminho certo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Para os outros:</strong> Pais, padres, diretores espirituais, amigos – todos que precisam orientar outros recebem luz especial deste dom para aconselhar segundo Deus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Frutos do Conselho
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Decisões acertadas:</strong> Quem se deixa guiar pelo Conselho toma decisões que, mesmo parecendo arriscadas aos olhos humanos, se revelam certas à luz da eternidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Paz nas escolhas:</strong> O Conselho traz paz interior nas decisões. Mesmo em situações difíceis, há uma certeza serena de estar no caminho certo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Capacidade de orientar:</strong> Quem possui este dom pode ajudar outros em suas decisões, transmitindo não apenas conselhos humanos, mas luz divina.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evitar armadilhas:</strong> O Conselho nos faz perceber ciladas do inimigo, situações aparentemente boas que escondem perigos espirituais.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Cultivar o Dom do Conselho
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Peça antes de decidir:</strong> Antes de decisões importantes, pare e peça a luz do Espírito Santo. "Vinde, Espírito Santo, iluminai minha inteligência."
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Cultive o silêncio interior:</strong> O Conselho fala em voz baixa. Quem vive no barulho não consegue ouvir suas inspirações.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Busque direção espiritual:</strong> Um bom diretor espiritual é instrumento do dom do Conselho. Deus frequentemente nos orienta através de outros.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Examine os frutos:</strong> As inspirações do Conselho trazem paz, humildade, caridade. Se uma "inspiração" traz inquietação, orgulho ou divisão, não vem de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Seja dócil:</strong> Não adianta pedir conselho a Deus se não estamos dispostos a segui-lo. A docilidade é condição para receber este dom.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Conselho e a Bem-Aventurança
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom do Conselho corresponde à bem-aventurança dos misericordiosos: "Bem-aventurados os misericordiosos, porque alcançarão misericórdia" (Mt 5,7). Quem possui o Conselho sabe como exercer a misericórdia de modo prudente e eficaz.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Santos Modelos de Conselho
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>São João Bosco:</strong> Orientou milhares de jovens com sabedoria sobrenatural. Seus conselhos transformaram vidas e continuam atuais.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Catarina de Sena:</strong> Conselheira de papas e reis, sua orientação vinha claramente do Espírito Santo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Padre Pio:</strong> No confessionário, orientava as almas com conhecimento sobrenatural de suas situações.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Eu te instruirei e te ensinarei o caminho que deves seguir; eu te aconselharei, tendo-te sob o meu olhar."
                </p>
                <p className="text-text-muted text-center mt-2">— Salmo 32,8</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O dom do conselho corresponde à prudência, que ele ajuda e aperfeiçoa. Pela prudência, o homem delibera consigo mesmo; pelo dom do conselho, é instruído por Deus."
                </p>
                <p className="text-text-muted text-center mt-2">— Santo Tomás de Aquino</p>
              </div>
            </div>

            <RelatedArticles currentSlug="dom-conselho-espirito-santo" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você busca a orientação divina?</h3>
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

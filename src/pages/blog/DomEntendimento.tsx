import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DomEntendimento() {
  return (
    <>
      <Helmet>
        <title>Dom do Entendimento: Penetrar os Mistérios de Deus | Bom Católico</title>
        <meta name="description" content="Descubra o Dom do Entendimento, que nos permite penetrar profundamente nas verdades da fé. Como este dom ilumina nossa inteligência para compreender os mistérios divinos." />
        <meta name="keywords" content="dom entendimento, espírito santo, dons espírito santo, compreensão fé, mistérios divinos, inteligência espiritual" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/dom-entendimento-espirito-santo" />
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
              <span className="text-text">Dom do Entendimento</span>
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
                Dom do Entendimento: Penetrar os Mistérios de Deus
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                O Entendimento é o dom que ilumina nossa inteligência para penetrar nas verdades da fé, compreendendo o sentido profundo das Escrituras e dos mistérios divinos.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Lightbulb className="w-24 h-24 text-yellow-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Espírito de sabedoria e de entendimento" (Is 11,2). O dom do Entendimento aparece logo após a Sabedoria na lista de Isaías. Enquanto a Sabedoria nos faz "saborear" Deus, o Entendimento nos faz "penetrar" nas verdades divinas.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A palavra latina "intellectus" vem de "intus legere" – ler por dentro. O dom do Entendimento nos permite ler o interior das verdades reveladas, indo além da superfície para alcançar a profundidade.
              </p>

              <QuizCTA
                title="Você busca compreender a fé?"
                description="O dom do Entendimento ilumina nossa inteligência. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que é o Dom do Entendimento
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom do Entendimento é uma luz sobrenatural que penetra nas verdades da fé, permitindo-nos compreender seu sentido profundo. Não é a fé em si (que é virtude teologal), mas uma iluminação que aprofunda a fé.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Santo Tomás de Aquino explica que este dom nos faz penetrar no íntimo das coisas divinas. Enquanto a fé nos faz aderir às verdades reveladas, o Entendimento nos faz compreendê-las mais profundamente.
              </p>
              <p className="text-text leading-relaxed mb-6">
                É importante notar: o Entendimento não elimina o mistério. Os mistérios de Deus permanecem mistérios. Mas este dom nos permite penetrar neles mais profundamente, vislumbrando algo de sua riqueza infinita.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Entendimento Natural vs. Sobrenatural
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O entendimento natural é a capacidade da razão humana de compreender as coisas. É um dom de Deus na criação, mas opera no nível natural. Pode conhecer verdades sobre Deus pela razão (existência, atributos), mas não pode penetrar nos mistérios revelados.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O dom do Entendimento é sobrenatural – vai além da capacidade natural da razão. Ele ilumina a inteligência para compreender verdades que a razão sozinha não alcançaria: a Trindade, a Encarnação, a Eucaristia.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Um teólogo pode estudar a Trindade por anos e ter grande conhecimento intelectual. Mas uma pessoa simples, com o dom do Entendimento, pode ter uma compreensão mais profunda do mistério, mesmo sem formação acadêmica.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Frutos do Entendimento
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Compreensão das Escrituras:</strong> O Entendimento abre o sentido das Escrituras. Como Jesus fez com os discípulos de Emaús: "Abriu-lhes a inteligência para compreenderem as Escrituras" (Lc 24,45).
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Penetração nos mistérios:</strong> A Trindade, a Encarnação, a Eucaristia – mistérios que a razão não alcança – tornam-se mais luminosos, ainda que permaneçam mistérios.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Discernimento do verdadeiro e do falso:</strong> O Entendimento nos ajuda a distinguir a verdadeira doutrina dos erros, a autêntica espiritualidade das falsificações.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Firmeza na fé:</strong> Quem compreende mais profundamente as verdades da fé está mais firmemente enraizado nelas. O Entendimento fortalece contra as dúvidas e tentações contra a fé.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Cultivar o Entendimento
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Estude a fé:</strong> O dom do Entendimento não dispensa o estudo. Deus ilumina uma inteligência que se esforça. Leia o Catecismo, os Padres da Igreja, os grandes teólogos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Medite as Escrituras:</strong> A lectio divina é escola de Entendimento. Leia a Palavra não apenas com os olhos, mas com o coração, pedindo ao Espírito que a ilumine.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Peça com humildade:</strong> "Abre meus olhos para que eu contemple as maravilhas de tua lei" (Sl 119,18). O Entendimento é dom – deve ser pedido.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Purifique o coração:</strong> O pecado obscurece a inteligência. Um coração puro vê mais claramente as coisas de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Ouça o Magistério:</strong> A Igreja é mestra da verdade. O Entendimento nos faz compreender e amar os ensinamentos da Igreja.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Entendimento e a Bem-Aventurança
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom do Entendimento corresponde à bem-aventurança dos puros de coração: "Bem-aventurados os puros de coração, porque verão a Deus" (Mt 5,8). A pureza do coração dispõe para a visão – e o Entendimento é uma antecipação dessa visão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                No céu, veremos Deus face a face. Aqui na terra, o dom do Entendimento nos dá vislumbres dessa visão, penetrando nos mistérios divinos como através de um véu.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Santos Modelos de Entendimento
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santo Agostinho:</strong> Sua busca incansável pela verdade foi coroada pelo dom do Entendimento. Suas obras revelam profunda penetração nos mistérios da fé.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São João Evangelista:</strong> O "discípulo amado" penetrou mais profundamente no mistério de Cristo. Seu Evangelho é o mais teológico, fruto do Entendimento.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Catarina de Sena:</strong> Sem formação acadêmica, ditou obras de profunda teologia. O Entendimento supriu o que faltava em estudos.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Então lhes abriu a inteligência para compreenderem as Escrituras."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Lucas 24,45
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O dom do entendimento é uma luz sobrenatural pela qual a inteligência humana, sob a ação do Espírito Santo, penetra nas verdades reveladas."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Santo Tomás de Aquino
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="dom-entendimento-espirito-santo" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você deseja compreender mais a fé?
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

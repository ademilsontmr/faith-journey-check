import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PorQueRezarParaSantos() {
  return (
    <>
      <Helmet>
        <title>Por Que os Católicos Rezam para os Santos? Entenda a Intercessão | Bom Católico</title>
        <meta name="description" content="Entenda por que os católicos pedem a intercessão dos santos. A diferença entre adoração e veneração, e como os santos intercedem por nós no Céu." />
        <meta name="keywords" content="por que católicos rezam para santos, intercessão dos santos, católicos adoram santos, diferença adoração veneração, comunhão dos santos, santos intercedem" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/por-que-catolicos-rezam-santos" />
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
              <span className="text-text">Por Que Rezar para os Santos</span>
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
                  Doutrina
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  11 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Por Que os Católicos Rezam para os Santos? Entenda a Intercessão
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Uma das perguntas mais comuns sobre o catolicismo: por que pedimos a intercessão dos santos? Não deveríamos rezar só para Deus? Entenda essa prática milenar.
              </p>
            </header>

            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10">
              <Users className="w-24 h-24 text-purple-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Por que vocês católicos rezam para os santos? A Bíblia não diz que só devemos rezar para Deus?" Esta é uma das perguntas mais frequentes que os católicos recebem. E a resposta é simples, mas profunda: nós não adoramos os santos – nós pedimos que eles rezem por nós, assim como você pediria a um amigo que rezasse por você.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Quando você pede a sua mãe que reze por você antes de uma prova ou entrevista de emprego, você está "adorando" sua mãe? Claro que não! Você está simplesmente pedindo a intercessão de alguém que você ama e confia. É exatamente isso que fazemos com os santos – pedimos que eles, que já estão na presença de Deus, intercedam por nós.
              </p>

              <QuizCTA
                title="Você entende a comunhão dos santos?"
                description="A intercessão dos santos é parte da comunhão dos santos. Faça nosso quiz e descubra como viver mais plenamente essa realidade da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Diferença Entre Adoração e Veneração
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Igreja Católica faz uma distinção clara entre adoração (latria) e veneração (dulia). A adoração é devida somente a Deus – Pai, Filho e Espírito Santo. Ninguém mais merece adoração. Adorar qualquer criatura seria idolatria, um pecado grave.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A veneração, por outro lado, é o respeito e honra que damos aos santos. Não os adoramos como deuses – reconhecemos que são criaturas como nós, mas que viveram vidas santas e agora estão no Céu. Honramos sua memória e pedimos sua intercessão. Maria, a Mãe de Jesus, recebe uma veneração especial chamada "hiperdulia", por ser a mais santa de todas as criaturas, mas ainda assim não é adoração.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Base Bíblica para a Intercessão dos Santos
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Bíblia está cheia de exemplos de intercessão. Abraão intercedeu por Sodoma (Gn 18,23-32). Moisés intercedeu pelo povo de Israel (Ex 32,11-14). São Paulo pedia constantemente que os cristãos rezassem uns pelos outros (Rm 15,30; Ef 6,18-19; Cl 4,3).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Se podemos pedir a intercessão de pessoas vivas na terra, por que não poderíamos pedir a intercessão daqueles que já estão no Céu? A morte não rompe a comunhão dos santos. Pelo contrário, aqueles que estão no Céu estão mais vivos do que nunca, na presença de Deus, e suas orações são ainda mais poderosas.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O livro do Apocalipse mostra os santos no Céu oferecendo as orações dos fiéis a Deus: "Veio outro anjo e pôs-se junto ao altar, com um turíbulo de ouro. Foram-lhe dados muitos perfumes, para que os oferecesse com as orações de todos os santos sobre o altar de ouro" (Ap 8,3). Os santos no Céu estão ativamente envolvidos em interceder por nós.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Santos Estão Vivos no Céu
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Jesus disse: "Deus não é Deus de mortos, mas de vivos" (Mt 22,32). Abraão, Isaac e Jacó não estão mortos – estão vivos em Deus. Da mesma forma, todos os santos que morreram em Cristo estão vivos no Céu. A morte física não é o fim – é a passagem para a vida eterna.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Na Transfiguração, Moisés e Elias apareceram conversando com Jesus (Mt 17,3). Eles não estavam "mortos" – estavam vivos e ativos. Se eles podiam aparecer e conversar com Jesus, certamente podem interceder por nós junto a Ele.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Por Que Pedir a Intercessão dos Santos?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Você pode rezar diretamente a Deus – e deve! Nenhum católico diz que você não pode ou não deve rezar diretamente ao Pai, ao Filho ou ao Espírito Santo. Mas pedir a intercessão dos santos é um complemento, não uma substituição.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Os santos são nossos irmãos mais velhos na fé. Eles já percorreram o caminho que estamos percorrendo. Eles enfrentaram tentações, sofrimentos, dúvidas – e venceram. Eles conhecem nossas lutas porque já as viveram. E agora, no Céu, eles querem nos ajudar a chegar onde eles estão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Além disso, cada santo tem uma "especialidade". Santa Rita é conhecida como a santa das causas impossíveis. Santo Antônio ajuda a encontrar objetos perdidos. São José é o padroeiro dos trabalhadores. Não porque eles tenham poderes mágicos, mas porque, durante suas vidas, eles se destacaram nessas áreas e agora continuam intercedendo por aqueles que enfrentam situações semelhantes.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Pedir a Intercessão dos Santos
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Pedir a intercessão de um santo é simples. Você pode dizer algo como: "São José, roga por mim" ou "Santa Teresinha, intercede por mim junto a Jesus". Você não está rezando "para" o santo como se ele fosse Deus – você está pedindo que ele reze "por" você.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Muitos católicos têm um santo padroeiro – o santo cujo nome receberam no Batismo ou na Crisma. Esse santo tem uma relação especial com você e intercede por você de forma particular. Conheça a vida do seu santo padroeiro e peça sua intercessão frequentemente.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "A oração de um justo tem grande eficácia."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Tiago 5,16
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Os santos não nos afastam de Cristo, mas nos conduzem a Ele."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — São João Paulo II
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="por-que-catolicos-rezam-santos" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Você conhece seus intercessores no Céu?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra como viver mais plenamente a comunhão dos santos.
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

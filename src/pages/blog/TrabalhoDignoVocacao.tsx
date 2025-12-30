import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function TrabalhoDignoVocacao() {
  return (
    <>
      <Helmet>
        <title>Trabalho Digno e Vocação: Santidade no Dia a Dia | Bom Católico</title>
        <meta name="description" content="Descubra como o trabalho é uma vocação sagrada. A visão católica sobre trabalho digno, realização profissional e santidade através da labuta diária." />
        <meta name="keywords" content="trabalho como vocação, santificar o trabalho, dignidade do trabalho humano, trabalho e fé católica, são josé trabalhador, doutrina social da igreja" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/trabalho-digno-vocacao" />
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
              <span className="text-text">Trabalho Digno e Vocação</span>
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
                  Vocação
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
                Trabalho Digno e Vocação: Santidade no Dia a Dia
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                O trabalho não é uma maldição – é uma vocação. Descubra como transformar sua profissão em um caminho de santidade e realização verdadeira.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Briefcase className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Muitos veem o trabalho como uma necessidade desagradável – algo que você faz apenas para ganhar dinheiro e pagar as contas. Mas a visão católica é muito diferente. O trabalho é uma vocação, um chamado de Deus. É através do trabalho que você coopera com a criação de Deus, que você contribui para o bem comum, que você sustenta sua família e se realiza como pessoa.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Desde o início, Deus chamou o homem a trabalhar. No Gênesis, Deus coloca Adão no jardim "para o cultivar e guardar" (Gn 2,15). O trabalho não é uma punição pelo pecado – é parte da natureza humana. Mesmo no Paraíso, havia trabalho. O que mudou após o pecado foi que o trabalho se tornou mais difícil, mais cansativo. Mas continua sendo sagrado.
              </p>

              <QuizCTA
                title="Você vê seu trabalho como uma vocação?"
                description="O trabalho digno é um caminho de santidade. Faça nosso quiz e descubra como viver sua profissão como um chamado de Deus."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Trabalho Como Cooperação com Deus
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Quando você trabalha, você não está apenas ganhando dinheiro – você está participando da obra criadora de Deus. Um carpinteiro que constrói uma casa está criando um lar onde uma família pode viver em segurança. Um médico que cura um doente está prolongando a vida que Deus deu. Um professor que educa uma criança está formando uma alma. Um agricultor que cultiva a terra está alimentando a humanidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Cada profissão, quando exercida com integridade e amor, é uma forma de servir a Deus e ao próximo. Não existem profissões "menos nobres". Um encanador que faz seu trabalho bem está servindo a Deus tanto quanto um padre. Uma faxineira que limpa com dedicação está honrando a Deus tanto quanto um médico. O que importa não é o tipo de trabalho, mas a atitude com que você o faz.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Trabalho Digno e Justiça Social
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Igreja Católica tem uma doutrina social muito clara sobre o trabalho. Todo trabalhador tem direito a um salário justo que lhe permita viver com dignidade. Tem direito a descanso, a segurança no trabalho, a não ser explorado. Tem direito a formar sindicatos e a defender seus direitos. Ninguém deve ser tratado como uma máquina ou como uma mercadoria.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Ao mesmo tempo, o trabalhador tem o dever de fazer seu trabalho com honestidade e dedicação. Não deve roubar seu patrão através da preguiça ou da negligência. Deve cumprir seus compromissos. Deve ser confiável. O trabalho é um contrato de confiança mútua entre patrão e empregado, ambos chamados a agir com justiça e caridade.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Encontrando Sua Vocação Profissional
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Como você sabe qual é sua vocação profissional? Comece observando seus dons e talentos. Deus não lhe deu habilidades por acaso. Se você é bom em matemática, talvez Deus o chame para ser engenheiro ou contador. Se você tem dom para ouvir e aconselhar, talvez seja chamado para ser psicólogo ou conselheiro. Se você ama crianças, talvez seja chamado para ser professor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Mas também considere as necessidades do mundo. Onde há falta? Onde você pode fazer diferença? Talvez você tenha talento para negócios, mas sinta o chamado para trabalhar com os pobres. Talvez você pudesse ganhar muito dinheiro em uma profissão, mas sinta que Deus o chama para algo mais simples, mas mais significativo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Reze sobre isso. Peça ao Espírito Santo que o guie. Converse com pessoas sábias. Experimente diferentes caminhos. Lembre-se: sua vocação profissional não é apenas sobre você – é sobre como você pode servir a Deus e ao próximo através de seu trabalho.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Santidade Através do Trabalho
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Você não precisa ser padre ou freira para ser santo. Você pode ser santo sendo um bom profissional. Você pode ser santo através da forma como você trata seus colegas, da honestidade com que você trabalha, da dedicação que você coloca em suas tarefas, da generosidade com que você compartilha seus ganhos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Ofereça seu trabalho a Deus. Cada dia, antes de começar, diga: "Senhor, ofereço-Te este dia de trabalho. Que eu o faça com amor, com honestidade, com dedicação. Que eu sirva a Ti e ao próximo através de meu trabalho." Assim, seu trabalho se torna oração. Sua profissão se torna um caminho de santidade.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Trabalhai como se trabalhásseis para o Senhor, e não para os homens, sabendo que do Senhor recebereis a recompensa da herança. Servi ao Senhor Cristo."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Colossenses 3,23-24
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O trabalho é a forma como o homem participa da obra criadora de Deus."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Papa João Paulo II
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="trabalho-digno-vocacao" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Qual é sua vocação profissional?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra como viver seu trabalho como um chamado de Deus.
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

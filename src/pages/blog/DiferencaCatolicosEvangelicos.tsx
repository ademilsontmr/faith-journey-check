import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DiferencaCatolicosEvangelicos() {
  return (
    <>
      <Helmet>
        <title>Diferença Entre Católicos e Evangélicos: Entenda as Principais Distinções | Bom Católico</title>
        <meta name="description" content="Conheça as principais diferenças entre católicos e evangélicos. Sacramentos, autoridade da Igreja, Maria, santos e outras distinções explicadas com respeito." />
        <meta name="keywords" content="diferença entre católicos e evangélicos, católico ou protestante, por que ser católico, igreja católica vs evangélica, sacramentos, tradição apostólica" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/diferenca-catolicos-evangelicos" />
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
              <span className="text-text">Diferença Entre Católicos e Evangélicos</span>
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
                  13 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Diferença Entre Católicos e Evangélicos: Entenda as Principais Distinções
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Católicos e evangélicos são todos cristãos, mas existem diferenças importantes. Entenda as principais distinções com respeito e clareza.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <Scale className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                No Brasil, é muito comum ter famílias onde alguns membros são católicos e outros são evangélicos. Isso às vezes gera discussões e mal-entendidos. Este artigo não pretende atacar ninguém, mas explicar com clareza e respeito as principais diferenças entre as duas tradições cristãs.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Antes de tudo, é importante lembrar: católicos e evangélicos são todos cristãos. Todos cremos em Jesus Cristo como Senhor e Salvador. Todos cremos na Santíssima Trindade. Todos lemos a Bíblia. As diferenças são reais, mas não devem nos fazer esquecer o que temos em comum.
              </p>

              <QuizCTA
                title="Você conhece bem sua fé católica?"
                description="Entender as diferenças ajuda a fortalecer sua própria fé. Faça nosso quiz e descubra como está sua vivência católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. Autoridade: Bíblia e Tradição
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evangélicos:</strong> Acreditam na "Sola Scriptura" – a Bíblia sozinha é a única autoridade em matéria de fé. Cada pessoa pode interpretar a Bíblia por si mesma, guiada pelo Espírito Santo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Católicos:</strong> Acreditam que a Palavra de Deus vem através da Bíblia E da Tradição Apostólica. A Igreja, guiada pelo Espírito Santo, tem autoridade para interpretar a Escritura. O Papa e os bispos, como sucessores dos Apóstolos, têm o papel de guardar e transmitir a fé.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Para os católicos, foi a Igreja que definiu quais livros fazem parte da Bíblia (o cânon bíblico). A Tradição não contradiz a Bíblia – ela a complementa e a interpreta corretamente.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Os Sacramentos
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evangélicos:</strong> A maioria reconhece apenas dois sacramentos (ou "ordenanças"): o Batismo e a Ceia do Senhor. Estes são vistos como símbolos, não como meios de graça.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Católicos:</strong> Reconhecem sete sacramentos instituídos por Cristo: Batismo, Confirmação (Crisma), Eucaristia, Confissão (Reconciliação), Unção dos Enfermos, Ordem e Matrimônio. Os sacramentos não são apenas símbolos – eles realmente conferem a graça que significam.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A maior diferença está na Eucaristia. Para os católicos, o pão e o vinho se tornam verdadeiramente o Corpo e o Sangue de Cristo (transubstanciação). Para a maioria dos evangélicos, a Ceia é apenas um memorial simbólico.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. Maria e os Santos
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evangélicos:</strong> Respeitam Maria como a mãe de Jesus, mas não a veneram nem pedem sua intercessão. Consideram que rezar para santos é uma forma de idolatria.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Católicos:</strong> Veneram Maria como a Mãe de Deus e pedem sua intercessão. Também pedem a intercessão dos santos. Isso não é adoração (que é devida só a Deus), mas veneração – pedir que aqueles que já estão no Céu rezem por nós.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Os católicos creem nos dogmas marianos: Maria é Mãe de Deus, sempre Virgem, foi concebida sem pecado original (Imaculada Conceição) e foi assunta ao Céu em corpo e alma (Assunção).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                4. Salvação: Fé e Obras
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evangélicos:</strong> Enfatizam a "Sola Fide" – somos salvos somente pela fé em Cristo, não por obras. As boas obras são fruto da salvação, não causa dela.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Católicos:</strong> Creem que somos salvos pela graça de Deus, recebida através da fé, mas que a fé sem obras é morta (Tg 2,26). As obras não "compram" a salvação, mas são necessárias como resposta à graça e como cooperação com ela.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Na prática, a diferença é menor do que parece. Ambos concordam que a salvação vem de Deus, não de nós mesmos. A questão é como entendemos a relação entre fé, graça e obras.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                5. A Confissão
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evangélicos:</strong> Confessam seus pecados diretamente a Deus em oração. Não há necessidade de um intermediário humano.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Católicos:</strong> Confessam seus pecados a um sacerdote no Sacramento da Reconciliação. O padre não perdoa por si mesmo – ele age "in persona Christi" (na pessoa de Cristo), exercendo o poder que Jesus deu aos Apóstolos: "A quem perdoardes os pecados, ser-lhes-ão perdoados" (Jo 20,23).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                6. O Purgatório
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evangélicos:</strong> Não creem no Purgatório. Após a morte, a pessoa vai diretamente para o Céu ou para o Inferno.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Católicos:</strong> Creem no Purgatório como um estado de purificação para aqueles que morrem em graça, mas ainda com imperfeições. Não é um "segundo Inferno", mas uma preparação final para o Céu.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                7. A Igreja e o Papa
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Evangélicos:</strong> Não reconhecem uma autoridade central. Cada denominação ou igreja local é autônoma. Não há Papa.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Católicos:</strong> Creem que Jesus fundou uma Igreja visível sobre Pedro (Mt 16,18-19). O Papa é o sucessor de Pedro e tem autoridade sobre toda a Igreja. Os bispos são sucessores dos Apóstolos. Essa estrutura hierárquica garante a unidade da fé.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Convivendo com Respeito
              </h2>
              <p className="text-text leading-relaxed mb-6">
                As diferenças são reais e importantes, mas não devem nos dividir como irmãos em Cristo. Podemos discordar com respeito, sem atacar ou menosprezar a fé do outro. O diálogo ecumênico busca a unidade que Cristo deseja: "Que todos sejam um" (Jo 17,21).
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Há um só Senhor, uma só fé, um só batismo, um só Deus e Pai de todos."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Efésios 4,5-6
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Nas coisas necessárias, unidade; nas duvidosas, liberdade; em tudo, caridade."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Santo Agostinho
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="diferenca-catolicos-evangelicos" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Quer conhecer melhor sua fé católica?
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

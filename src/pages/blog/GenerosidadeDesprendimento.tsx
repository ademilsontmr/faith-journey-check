import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function GenerosidadeDesprendimento() {
  return (
    <>
      <Helmet>
        <title>Generosidade e Desprendimento: A Verdadeira Riqueza do Coração | Bom Católico</title>
        <meta name="description" content="Aprenda sobre a virtude da generosidade e do desprendimento. Como dar sem esperar retorno e encontrar alegria em servir aos outros." />
        <meta name="keywords" content="generosidade, desprendimento, caridade, virtude, dar, servir, amor ao próximo" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/generosidade-desprendimento" />
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
              <span className="text-text">Generosidade e Desprendimento</span>
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
                  Virtudes
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
                Generosidade e Desprendimento: A Verdadeira Riqueza do Coração
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A generosidade não é apenas dar o que sobra – é dar do que você precisa. Descubra como o desprendimento liberta sua alma e transforma o mundo.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Gift className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Existe uma diferença fundamental entre dar o que sobra e dar do que você precisa. Qualquer um pode ser generoso quando tem abundância. Mas a verdadeira generosidade é quando você abre mão de algo que você valoriza, algo que você gostaria de manter, para ajudar alguém que precisa mais.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus observava as pessoas colocando dinheiro no tesouro do templo. Muitos ricos colocavam grandes quantias. Mas então veio uma viúva pobre e colocou duas pequenas moedas. Jesus chamou seus discípulos e disse: "Esta viúva pobre colocou mais do que todos os outros. Pois todos deram do que lhes sobrava, mas ela, da sua pobreza, deu tudo o que tinha para viver" (Mc 12,43-44). A generosidade não é medida pela quantidade, mas pelo sacrifício.
              </p>

              <QuizCTA
                title="Qual é seu nível de generosidade?"
                description="A generosidade e o desprendimento são virtudes que transformam o coração. Faça nosso quiz e descubra como viver com maior abertura ao próximo."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Apego às Coisas Materiais
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Um dos maiores obstáculos à generosidade é o apego às coisas materiais. Queremos manter tudo para nós mesmos. Queremos acumular, guardar, possuir. Mas esse apego nos torna prisioneiros. Nos torna ansiosos, porque temos medo de perder o que temos. Nos torna egoístas, porque pensamos apenas em nós mesmos. Nos torna vazios, porque nenhuma quantidade de posses pode preencher o vazio do coração.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O desprendimento é a libertação desse apego. Não significa que você não pode ter posses – significa que você não é possuído por elas. Você as vê como ferramentas para fazer o bem, não como fins em si mesmas. Você está disposto a abrir mão delas se isso significar ajudar alguém que precisa.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Alegria de Dar
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Existe uma alegria especial em dar. Quando você dá genuinamente, sem esperar nada em troca, você experimenta uma satisfação que o dinheiro não pode comprar. É a alegria de saber que você fez diferença na vida de alguém. É a alegria de viver o mandamento de Jesus: "Amai-vos uns aos outros como Eu vos amei" (Jo 13,34).
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Paulo escreve: "Mais bem-aventurado é dar do que receber" (At 20,35). Isso não é apenas uma questão de moralidade – é uma verdade psicológica e espiritual. Quando você dá, você se torna mais feliz. Quando você é generoso, você se torna mais livre. Quando você se despoja de apegos materiais, você se torna mais leve, mais alegre, mais vivo.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Formas de Praticar a Generosidade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A generosidade não é apenas dar dinheiro. Existem muitas formas de ser generoso:
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Generosidade Material
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Dê dinheiro aos pobres. Doe roupas, alimentos, livros. Ajude alguém que está em dificuldade financeira. Mas faça isso com discrição e respeito. Não dê para se sentir superior ou para receber elogios. Dê porque você vê Cristo no rosto do pobre.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Generosidade de Tempo
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Seu tempo é seu bem mais precioso. Dê-o generosamente. Ouça alguém que precisa falar. Visite um idoso solitário. Ajude um amigo em dificuldade. Dedique tempo à sua família. O tempo que você dá é um presente inestimável.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Generosidade de Talento
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Use seus dons para ajudar os outros. Se você é bom em música, toque para alegrar alguém. Se você é bom em consertar coisas, ajude alguém que não pode pagar por um reparo. Se você é bom em ensinar, compartilhe seu conhecimento. Seus talentos são dons de Deus destinados a servir.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Generosidade de Perdão
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Perdoe aqueles que o magoaram. Liberte-se do ressentimento. Dê a alguém a chance de começar de novo. O perdão é um presente que você dá a si mesmo e aos outros.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Desprendimento Como Caminho de Santidade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Muitos santos praticaram o desprendimento radical. São Francisco de Assis abriu mão de toda sua riqueza para servir aos pobres. Santa Teresinha do Menino Jesus praticava pequenos sacrifícios diários. Madre Teresa de Calcutá dedicou sua vida aos mais pobres dos pobres. Eles não fizeram isso porque fossem masoquistas – fizeram porque compreenderam que o desprendimento liberta a alma e a aproxima de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Você não precisa ser um santo para começar a praticar o desprendimento. Comece pequeno. Dê algo que você valoriza. Abra mão de um conforto. Sacrifique algo que você gostaria de ter para ajudar alguém que precisa. Cada ato de generosidade é um passo em direção à santidade.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Há mais alegria em dar do que em receber."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Atos 20,35
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A generosidade é a virtude que nos torna semelhantes a Deus, pois Deus é infinitamente generoso."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Santo Tomás de Aquino
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="generosidade-desprendimento" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Pronto para ser mais generoso?
              </h3>
              <p className="text-text-muted mb-6">
                Faça nosso quiz e descubra como viver com maior desprendimento e generosidade.
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

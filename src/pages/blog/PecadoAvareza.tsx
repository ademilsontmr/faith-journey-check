import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PecadoAvareza() {
  return (
    <>
      <Helmet>
        <title>Avareza: O Amor Desordenado aos Bens | Bom Católico</title>
        <meta name="description" content="Entenda a Avareza, o pecado capital do apego excessivo aos bens materiais. Como reconhecê-la e combatê-la com a generosidade cristã." />
        <meta name="keywords" content="avareza pecado capital, o que é avareza, ganância é pecado, apego ao dinheiro, como vencer a avareza, generosidade cristã, sete pecados capitais" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/pecado-avareza" />
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
              <span className="text-text">Avareza</span>
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
                Avareza: O Amor Desordenado aos Bens
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Avareza é o apego excessivo aos bens materiais. São Paulo a chama de "idolatria" porque coloca o dinheiro no lugar de Deus.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Coins className="w-24 h-24 text-yellow-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "O amor ao dinheiro é a raiz de todos os males" (1Tm 6,10). A Avareza é o desejo imoderado de possuir bens materiais, o apego excessivo ao dinheiro e às riquezas.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus advertiu: "Não podeis servir a Deus e ao dinheiro" (Mt 6,24). O avarento faz do dinheiro seu deus. Sua segurança, sua alegria, seu sentido de vida estão nos bens materiais.
              </p>

              <QuizCTA
                title="Seu coração está livre?"
                description="A avareza prende o coração aos bens. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Que é a Avareza</h2>
              <p className="text-text leading-relaxed mb-6">
                A Avareza é o desejo desordenado de adquirir e reter bens materiais além do necessário. Não é simplesmente ter dinheiro – é ser possuído pelo dinheiro.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O avarento nunca tem o suficiente. Mesmo rico, sente-se pobre. Acumula sem usar, guarda sem partilhar. Sua vida gira em torno de ganhar mais e gastar menos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                São Paulo chama a avareza de "idolatria" (Cl 3,5) porque o avarento coloca os bens materiais no lugar de Deus. O dinheiro se torna seu verdadeiro deus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">As Faces da Avareza</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Acumulação:</strong> Guardar além do necessário. Ter medo de ficar sem. Não confiar na Providência.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Mesquinhez:</strong> Não partilhar com os necessitados. Dar esmolas mínimas. Calcular cada centavo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Ganância:</strong> Querer sempre mais. Nunca estar satisfeito. Buscar lucro a qualquer custo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Fraude:</strong> Enganar para obter vantagem. Sonegar impostos. Explorar os trabalhadores.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Efeitos da Avareza</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Ansiedade:</strong> O avarento vive preocupado com seus bens. Tem medo de perder, de ser roubado, de falir.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Dureza de coração:</strong> Não se comove com a miséria alheia. Fecha os olhos para os pobres.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Injustiça:</strong> Para acumular, muitas vezes explora os outros. Paga mal, cobra caro, engana.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Perda da fé:</strong> Quem confia no dinheiro não confia em Deus. A avareza sufoca a vida espiritual.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Combater a Avareza</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pratique a generosidade:</strong> Doe regularmente. Dê esmolas. Ajude os necessitados. A generosidade liberta o coração.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Confie na Providência:</strong> "Olhai os lírios do campo... nem Salomão se vestiu como um deles" (Mt 6,28-29). Deus cuida de seus filhos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Viva com simplicidade:</strong> Não acumule além do necessário. Prefira o essencial ao supérfluo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Medite na morte:</strong> "Não levarás nada contigo" (Jó 1,21). Os bens ficam, só a alma vai.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Busque os bens eternos:</strong> "Ajuntai tesouros no céu" (Mt 6,20). Invista no que não passa.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Santos que Venceram a Avareza</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Francisco de Assis:</strong> Renunciou à herança do pai rico para abraçar a "Senhora Pobreza".
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Martinho de Tours:</strong> Dividiu sua capa com um mendigo. Viu nele o próprio Cristo.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Teresa de Calcutá:</strong> Viveu na pobreza radical para servir os mais pobres dos pobres.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">"Não podeis servir a Deus e ao dinheiro."</p>
                <p className="text-text-muted text-center mt-2">— Mateus 6,24</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">"O amor ao dinheiro é a raiz de todos os males. Por causa dessa cobiça, alguns se afastaram da fé."</p>
                <p className="text-text-muted text-center mt-2">— 1 Timóteo 6,10</p>
              </div>
            </div>

            <RelatedArticles currentSlug="pecado-avareza" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você é generoso?</h3>
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PecadoPreguica() {
  return (
    <>
      <Helmet>
        <title>Preguiça: A Acídia Espiritual | Bom Católico</title>
        <meta name="description" content="Entenda a Preguiça (Acídia), o pecado capital da negligência espiritual. Como reconhecê-la e combatê-la com a diligência e o fervor." />
        <meta name="keywords" content="preguiça, acídia, pecado capital, negligência espiritual, fervor, diligência" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/pecado-preguica" />
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
            <Link to="/quiz"><Button variant="secondary" size="sm">Fazer o Quiz</Button></Link>
          </div>
        </header>

        <div className="bg-background-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Preguiça</span>
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
                Preguiça: A Acídia Espiritual
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Preguiça espiritual (Acídia) é a negligência nas coisas de Deus. É a tibieza que abandona a oração e os sacramentos.
              </p>
            </header>

            <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center mb-10">
              <Moon className="w-24 h-24 text-gray-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Conheço as tuas obras: não és frio nem quente. Oxalá fosses frio ou quente! Assim, porque és morno, vou vomitar-te da minha boca" (Ap 3,15-16). A Preguiça espiritual, ou Acídia, é a tibieza na vida de fé.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Não se trata apenas de preguiça física (embora esta também seja problemática), mas principalmente da negligência nas coisas espirituais: abandonar a oração, evitar os sacramentos, não se esforçar na virtude.
              </p>

              <QuizCTA
                title="Você é fervoroso na fé?"
                description="A acídia é inimiga sutil da vida espiritual. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">O Que é a Preguiça Espiritual</h2>
              <p className="text-text leading-relaxed mb-6">
                A Acídia é a tristeza pelo bem espiritual. É o tédio pelas coisas de Deus, a falta de gosto pela oração, a negligência nos deveres religiosos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Santo Tomás de Aquino a define como "tristeza pelo bem divino". O acídico não encontra alegria em Deus, na oração, nos sacramentos. Tudo lhe parece pesado, difícil, sem sentido.
              </p>
              <p className="text-text leading-relaxed mb-6">
                É diferente da aridez espiritual (que pode ser provação de Deus). A acídia é negligência voluntária, falta de esforço, rendição à tibieza.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">As Faces da Preguiça</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Negligência na oração:</strong> Não rezar, rezar mal, rezar com pressa. Abandonar a oração quando fica difícil.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Abandono dos sacramentos:</strong> Não ir à Missa, não se confessar, adiar a comunhão. "Depois eu vou..."
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Falta de esforço na virtude:</strong> Não lutar contra os defeitos. Aceitar a mediocridade espiritual.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Procrastinação:</strong> Adiar a conversão. "Amanhã eu mudo." "Quando tiver tempo, vou rezar mais."
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Desânimo:</strong> Desistir diante das dificuldades. Achar que a santidade não é para si.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Os Efeitos da Preguiça</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Esfriamento da fé:</strong> A fé não exercitada enfraquece. Quem não reza, não frequenta os sacramentos, vai perdendo a fé.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Abertura para outros pecados:</strong> "Mente vazia, oficina do diabo." Quem não se ocupa com Deus se ocupa com o mal.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Perda da alegria:</strong> Paradoxalmente, quem foge do esforço espiritual perde a alegria. A verdadeira alegria vem de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Risco de perdição:</strong> A tibieza é perigosa porque não alarma. O pecador grave sabe que está mal; o tíbio se engana.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Como Combater a Preguiça</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Estabeleça uma regra de vida:</strong> Horários fixos para oração, Missa semanal, confissão mensal. A regularidade vence a preguiça.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Comece pequeno:</strong> Se não consegue rezar uma hora, reze dez minutos. Mas reze todos os dias. A constância é mais importante que a quantidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Não espere sentir vontade:</strong> A oração nem sempre é consoladora. Reze mesmo sem vontade. O mérito está no esforço.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Busque companhia:</strong> É mais fácil perseverar em grupo. Participe de um grupo de oração, de uma comunidade.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Medite nas últimas coisas:</strong> Morte, juízo, céu, inferno. A meditação na eternidade desperta do torpor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Peça fervor:</strong> O fervor é graça. Peça a Deus que acenda em você o fogo do amor.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Santos que Venceram a Preguiça</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Bento:</strong> Sua regra "Ora et Labora" (Reza e Trabalha) é antídoto contra a acídia. A vida monástica combate a preguiça com disciplina.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Teresa de Ávila:</strong> Passou anos na tibieza antes de sua conversão definitiva. Depois, tornou-se modelo de fervor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Josemaria Escrivá:</strong> Ensinava a santificar o trabalho ordinário. "Não deixes para amanhã o que podes fazer hoje."
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">"Conheço as tuas obras: não és frio nem quente. Oxalá fosses frio ou quente!"</p>
                <p className="text-text-muted text-center mt-2">— Apocalipse 3,15</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">"Sede fervorosos no espírito, servi ao Senhor."</p>
                <p className="text-text-muted text-center mt-2">— Romanos 12,11</p>
              </div>
            </div>

            <RelatedArticles currentSlug="pecado-preguica" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você é fervoroso na fé?</h3>
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

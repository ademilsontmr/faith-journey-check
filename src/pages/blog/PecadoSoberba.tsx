import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function PecadoSoberba() {
  return (
    <>
      <Helmet>
        <title>Soberba: A Raiz de Todos os Pecados | Bom Católico</title>
        <meta name="description" content="Entenda a Soberba, o primeiro e mais grave dos pecados capitais. Como reconhecê-la, seus efeitos na alma e como combatê-la com a humildade." />
        <meta name="keywords" content="soberba, pecado capital, orgulho, humildade, vaidade, arrogância, pecados capitais" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/pecado-soberba" />
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
              <span className="text-text">Soberba</span>
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
                  Pecados Capitais
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />10 min de leitura
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Soberba: A Raiz de Todos os Pecados
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Soberba é o primeiro e mais grave dos pecados capitais. Foi o pecado de Lúcifer e de Adão. É a raiz de onde brotam todos os outros vícios.
              </p>
            </header>

            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10">
              <Crown className="w-24 h-24 text-purple-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "O início de todo pecado é a soberba" (Eclo 10,15). A Soberba é o amor desordenado da própria excelência. É colocar-se acima de Deus e dos outros, atribuindo a si mesmo o que pertence a Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Foi o pecado de Lúcifer: "Subirei aos céus, acima das estrelas de Deus exaltarei o meu trono... serei semelhante ao Altíssimo" (Is 14,13-14). Foi o pecado de Adão e Eva: "Sereis como deuses" (Gn 3,5). É o pecado que está na raiz de todos os outros.
              </p>

              <QuizCTA
                title="Você conhece seu coração?"
                description="A soberba é sutil e se esconde. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que é a Soberba
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Soberba é o desejo desordenado de ser superior aos outros, de ser exaltado, de receber honras e louvores. É atribuir a si mesmo o que vem de Deus e desprezar os outros.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Santo Tomás de Aquino a define como "apetite desordenado da própria excelência". O soberbo quer ser grande – não para a glória de Deus, mas para sua própria glória.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Soberba é chamada "rainha dos vícios" porque está na origem de todos os outros pecados. Quem é soberbo facilmente cai na inveja (não suporta a superioridade alheia), na ira (quando contrariado), na avareza (quer ter mais que os outros).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                As Faces da Soberba
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Vanglória:</strong> Buscar a estima e o louvor dos outros. Fazer o bem para ser visto. Ostentar qualidades, posses, realizações.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Presunção:</strong> Confiar excessivamente em si mesmo. Achar que não precisa de Deus nem dos outros. Superestimar as próprias capacidades.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Ambição:</strong> Desejar honras e posições acima do que é justo. Buscar o poder pelo poder.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Desprezo:</strong> Olhar os outros de cima para baixo. Considerar-se melhor que os demais. Julgar e criticar.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Obstinação:</strong> Recusar-se a mudar de opinião mesmo quando errado. Não aceitar correção. Teimosia no erro.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Efeitos da Soberba
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Cegueira espiritual:</strong> O soberbo não vê seus próprios defeitos. Vê o cisco no olho do irmão, mas não a trave no seu.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Isolamento:</strong> A soberba afasta as pessoas. Ninguém gosta de estar perto de quem se acha superior.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Resistência à graça:</strong> "Deus resiste aos soberbos, mas dá sua graça aos humildes" (Tg 4,6). A soberba fecha a alma para Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Incapacidade de conversão:</strong> O soberbo não se arrepende porque não reconhece seus pecados. Não se confessa porque não vê do que se confessar.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Combater a Soberba
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Cultive a humildade:</strong> A humildade é a virtude oposta à soberba. É conhecer a verdade sobre si mesmo – nem mais, nem menos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reconheça que tudo vem de Deus:</strong> "Que tens tu que não tenhas recebido?" (1Cor 4,7). Talentos, saúde, oportunidades – tudo é dom de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Aceite correções:</strong> Agradeça quando alguém aponta seus erros. É uma graça ter quem nos corrija.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Sirva aos outros:</strong> Jesus lavou os pés dos discípulos. O serviço humilde é antídoto contra a soberba.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Contemple a Cruz:</strong> Deus se fez homem e morreu numa cruz. Diante disso, que motivo temos para nos orgulhar?
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Santos que Venceram a Soberba
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santo Agostinho:</strong> Foi orgulhoso em sua juventude. Sua conversão passou pelo reconhecimento de sua miséria diante de Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Francisco de Assis:</strong> Filho de rico comerciante, abraçou a pobreza e a humilhação. Chamava-se "o maior dos pecadores".
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Teresinha:</strong> Sua "pequena via" é toda baseada na humildade. Reconhecia-se pequena e fraca diante de Deus.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Deus resiste aos soberbos, mas dá sua graça aos humildes."
                </p>
                <p className="text-text-muted text-center mt-2">— Tiago 4,6</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "A soberba é o início de todo pecado. Quem nela persiste será coberto de maldição e ela o arruinará para sempre."
                </p>
                <p className="text-text-muted text-center mt-2">— Eclesiástico 10,15</p>
              </div>
            </div>

            <RelatedArticles currentSlug="pecado-soberba" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você cultiva a humildade?</h3>
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

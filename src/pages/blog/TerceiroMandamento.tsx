import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function TerceiroMandamento() {
  return (
    <>
      <Helmet>
        <title>3º Mandamento: Guardar Domingos e Festas de Guarda | Bom Católico</title>
        <meta name="description" content="Entenda o Terceiro Mandamento da Lei de Deus. A importância da Missa dominical, o descanso sagrado e como santificar o Dia do Senhor." />
        <meta name="keywords" content="terceiro mandamento, guardar domingos e festas, missa dominical obrigatória, santificar o domingo, descanso dominical, dia do senhor, mandamentos da lei de deus" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/terceiro-mandamento-guardar-domingos" />
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
              <span className="text-text">3º Mandamento</span>
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
                  Mandamentos
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  9 min de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                3º Mandamento: Guardar Domingos e Festas de Guarda
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                O domingo é o Dia do Senhor, o dia da Ressurreição. Este mandamento nos chama a santificar esse dia através da Missa e do descanso.
              </p>
            </header>

            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-purple-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Lembra-te do dia de sábado para o santificar. Seis dias trabalharás e farás toda a tua obra; mas o sétimo dia é o sábado do Senhor teu Deus" (Ex 20,8-10). Os cristãos transferiram a celebração do sábado para o domingo, o dia em que Cristo ressuscitou dos mortos. O domingo é o "primeiro dia da semana", o dia da nova criação.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Desde os tempos apostólicos, os cristãos se reúnem no domingo para celebrar a Eucaristia. "No primeiro dia da semana, estando nós reunidos para partir o pão..." (At 20,7). O domingo é o coração da semana cristã, o dia em que renovamos nossa aliança com Deus.
              </p>

              <QuizCTA
                title="Você santifica o Dia do Senhor?"
                description="O domingo é o dia da Ressurreição. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Obrigação da Missa Dominical
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A Igreja ensina que participar da Missa aos domingos e festas de guarda é uma obrigação grave. Faltar à Missa sem motivo sério é pecado mortal. Isso pode parecer rigoroso, mas reflete a importância central da Eucaristia na vida cristã.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Motivos que dispensam da Missa incluem: doença, cuidado de pessoas doentes, trabalho essencial que não pode ser adiado, distância muito grande da igreja sem transporte. Mas "preguiça", "cansaço" ou "tenho outras coisas para fazer" não são motivos válidos.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Missa não é apenas uma obrigação – é um privilégio. É o momento em que participamos do sacrifício de Cristo, recebemos Seu Corpo e Sangue, e nos unimos à comunidade dos fiéis. Quem ama a Deus deseja estar na Missa.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Descanso Dominical
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Além da Missa, o terceiro mandamento nos chama ao descanso. Deus descansou no sétimo dia da criação – não porque estivesse cansado, mas para nos dar o exemplo. O ser humano precisa de descanso, não apenas físico, mas espiritual.
              </p>
              <p className="text-text leading-relaxed mb-6">
                O domingo deve ser um dia diferente dos outros. Um dia para a família, para a oração, para obras de caridade, para o lazer sadio. Evite trabalhos desnecessários e atividades que impeçam o culto a Deus e o descanso.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Isso não significa que todo trabalho é proibido. Serviços essenciais (hospitais, segurança, transporte) continuam funcionando. Mas o trabalho por pura ganância ou por não saber parar é contrário ao espírito do domingo.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                As Festas de Guarda
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Além dos domingos, a Igreja estabelece algumas festas de guarda, dias em que também é obrigatório participar da Missa. No Brasil, as principais são: Natal (25 de dezembro), Nossa Senhora Aparecida (12 de outubro), e outras conforme o calendário diocesano.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Essas festas celebram os grandes mistérios da fé e nos ajudam a viver o ano litúrgico, acompanhando a vida de Cristo e da Igreja.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Santificar o Domingo
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Participe da Missa:</strong> Chegue cedo, participe ativamente, comungue se estiver em estado de graça.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Dedique tempo à família:</strong> O domingo é um dia para estar com quem você ama, sem a pressa do dia a dia.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pratique obras de caridade:</strong> Visite um doente, ajude alguém necessitado, faça uma boa ação.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Descanse:</strong> Permita-se descansar. Desligue do trabalho. Renove suas forças físicas e espirituais.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Este é o dia que o Senhor fez; exultemos e alegremo-nos nele."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Salmo 118,24
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Sem o domingo não podemos viver."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Mártires de Abitina (304 d.C.)
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="terceiro-mandamento-guardar-domingos" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                O domingo é especial para você?
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

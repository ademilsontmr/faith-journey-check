import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

export default function JejumAbstinencia() {
  return (
    <>
      <Helmet>
        <title>Jejum e Abstinência: Práticas Que Fortalecem a Alma | Bom Católico</title>
        <meta name="description" content="Aprenda sobre as práticas de jejum e abstinência na Igreja Católica. Descubra quando e como jejuar corretamente para crescer na vida espiritual." />
        <meta name="keywords" content="jejum católico, abstinência de carne, quaresma, sexta-feira, penitência, mortificação" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/jejum-abstinencia" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-accent-foreground" />
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

        <div className="bg-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Jejum e Abstinência</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Espiritualidade
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  20 de Novembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  5 min de leitura
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Jejum e Abstinência: Práticas Que Fortalecem a Alma
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                O jejum e a abstinência são práticas penitenciais milenares que nos ajudam a dominar 
                as paixões e nos aproximar de Deus.
              </p>
            </header>

            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                O jejum e a abstinência são práticas espirituais fundamentais na vida cristã, recomendadas pelo próprio Jesus Cristo e praticadas pelos fiéis desde os primórdios da Igreja. Longe de serem meras obrigações legais, estas penitências são meios poderosos de crescimento espiritual, fortalecimento da vontade e união com Cristo em sua Paixão. Compreender seu significado profundo transforma estas práticas em fontes de graça abundante.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Diferença Entre Jejum e Abstinência
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                O Que é Jejum?
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                O jejum consiste na redução da quantidade de alimento ingerido. Segundo as normas da Igreja, nos dias de jejum obrigatório, faz-se apenas uma refeição plena por dia, podendo-se tomar algo leve pela manhã e à noite. O jejum obriga os fiéis entre 18 e 59 anos de idade. É uma prática que mortifica o corpo para libertar o espírito e nos dispor melhor à oração e à caridade.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                O Que é Abstinência?
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                A abstinência refere-se à privação de carne ou outro alimento determinado pela autoridade eclesiástica. A abstinência de carne obriga todos os fiéis a partir dos 14 anos de idade. Esta prática nos lembra o sacrifício de Cristo e nos convida a participar de sua Paixão, renunciando a um alimento apreciado.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Quando Jejuar e Abster-se?
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                Dias de Jejum Obrigatório
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Na Igreja latina, os dias de jejum obrigatório são a Quarta-feira de Cinzas e a Sexta-feira Santa. Nestes dias, além do jejum, também se observa a abstinência de carne. São dias de penitência particularmente intensos, que marcam o início e o ápice do tempo quaresmal.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                Dias de Abstinência Obrigatória
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                A abstinência de carne deve ser observada em todas as sextas-feiras do ano, exceto quando coincidem com uma solenidade. As sextas-feiras são dias penitenciais porque recordam a morte de Nosso Senhor Jesus Cristo. No Brasil, pode-se substituir a abstinência de carne por outra forma de penitência, oração ou caridade, mas a tradição de não comer carne permanece como a prática mais comum e recomendada.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                A Quaresma
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                A Quaresma é o tempo penitencial por excelência. Durante os 40 dias que precedem a Páscoa, os fiéis são chamados a intensificar as práticas de jejum, oração e esmola. Mesmo fora dos dias de obrigação, é louvável jejuar e abster-se voluntariamente durante este tempo sagrado.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Benefícios Espirituais do Jejum
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                Domínio das Paixões
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                O jejum fortalece a vontade e nos ajuda a dominar os instintos corporais. Quando aprendemos a dizer "não" ao apetite da comida, tornamo-nos mais capazes de resistir a outras tentações. São João Crisóstomo ensinava que "o jejum é a mãe da castidade".
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                Intensificação da Oração
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                O jejum liberta o espírito e nos dispõe melhor para a oração. Quando o corpo está leve, a alma se eleva mais facilmente a Deus. Por isso, muitos santos jejuavam antes de momentos importantes de oração ou decisão.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                Solidariedade com os Pobres
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Ao experimentar voluntariamente a fome, desenvolvemos compaixão pelos que passam fome involuntariamente. O dinheiro economizado com o jejum pode ser dado em esmola, unindo penitência e caridade.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                União com Cristo
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Jesus jejuou 40 dias no deserto antes de iniciar sua missão pública. Ao jejuarmos, participamos de sua penitência e nos unimos mais intimamente à sua Paixão. Oferecemos nosso pequeno sacrifício em união com o grande Sacrifício da Cruz.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Como Praticar o Jejum de Forma Proveitosa
              </h2>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
                <li>Comece gradualmente, especialmente se não está habituado</li>
                <li>Una o jejum à oração – sem oração, é mera dieta</li>
                <li>Ofereça seu sacrifício por uma intenção específica</li>
                <li>Não faça publicidade de seu jejum (Mt 6,16-18)</li>
                <li>Substitua o tempo das refeições por oração</li>
                <li>Converta em esmola o dinheiro economizado</li>
                <li>Respeite suas limitações de saúde</li>
                <li>Mantenha a alegria – o jejum cristão não é tristeza</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Outras Formas de Penitência
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Além do jejum alimentar, existem muitas outras formas de mortificação e penitência que podemos praticar: abstinência de televisão, redes sociais ou entretenimentos; práticas de silêncio; obras de misericórdia; suportar com paciência as contrariedades do dia a dia; levantar mais cedo para rezar; fazer genuflexões ou prostações durante a oração.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                O importante é que a penitência seja oferecida com amor, em espírito de reparação pelos pecados próprios e alheios, e como participação na obra redentora de Cristo. Uma pequena mortificação feita com grande amor vale mais do que grandes sacrifícios feitos sem devoção.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-10">
                <p className="text-foreground italic text-center">
                  "O jejum corporal não é suficiente sem o jejum espiritual. O jejum verdadeiro é abster-se de todo mal."
                </p>
                <p className="text-muted-foreground text-center mt-2">
                  — São Basílio Magno
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Descubra Como Está Sua Vida de Fé
              </h3>
              <p className="text-muted-foreground mb-6">
                Faça nosso quiz gratuito e receba um diagnóstico personalizado da sua caminhada católica.
              </p>
              <Link to="/quiz">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
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

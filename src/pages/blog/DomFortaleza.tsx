import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function DomFortaleza() {
  return (
    <>
      <Helmet>
        <title>Dom da Fortaleza: Coragem para Viver a Fé | Bom Católico</title>
        <meta name="description" content="Descubra o Dom da Fortaleza, que nos dá coragem para enfrentar dificuldades e perseverar na fé. Como este dom nos fortalece nas provações." />
        <meta name="keywords" content="dom fortaleza, espírito santo, dons espírito santo, coragem cristã, perseverança, martírio" />
        <link rel="canonical" href="https://bomcatolico.com.br/blog/dom-fortaleza-espirito-santo" />
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
              <span className="text-text">Dom da Fortaleza</span>
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
                  <Calendar className="w-4 h-4" />30 de Dezembro, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />10 min de leitura
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Dom da Fortaleza: Coragem para Viver a Fé
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Fortaleza é o dom que nos dá coragem sobrenatural para enfrentar dificuldades, resistir às tentações e perseverar até o fim.
              </p>
            </header>

            <div className="aspect-video bg-red-100 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-red-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                "Espírito de conselho e de fortaleza" (Is 11,2). O dom da Fortaleza é a força sobrenatural que o Espírito Santo infunde na alma para enfrentar e superar os obstáculos à salvação.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A vida cristã é um combate. Há inimigos externos – perseguições, tentações do mundo – e internos – nossas fraquezas, medos, inclinações ao mal. O dom da Fortaleza nos arma para esta batalha.
              </p>

              <QuizCTA
                title="Você tem coragem na fé?"
                description="O dom da Fortaleza nos dá força para perseverar. Faça nosso quiz e descubra como está sua vivência da fé católica."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                O Que é o Dom da Fortaleza
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom da Fortaleza é uma força sobrenatural que nos capacita a empreender coisas árduas pelo Reino de Deus e a suportar com paciência as adversidades, até o martírio se necessário.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Enquanto a virtude cardeal da fortaleza nos dá força natural para enfrentar dificuldades, o dom da Fortaleza eleva essa capacidade ao nível sobrenatural, tornando possível o que seria humanamente impossível.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Os mártires são o exemplo supremo deste dom. Homens e mulheres frágeis, que naturalmente temeriam a dor e a morte, enfrentaram torturas horríveis com alegria, cantando hinos. Isso não é força humana – é o dom da Fortaleza.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Duas Faces da Fortaleza
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Atacar (agredi):</strong> A Fortaleza nos impele a empreender obras difíceis pelo Reino de Deus. Evangelizar em ambientes hostis, defender a verdade quando é impopular, assumir compromissos exigentes.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Resistir (sustinere):</strong> A Fortaleza nos capacita a suportar adversidades com paciência. Doenças, perseguições, incompreensões, tentações prolongadas. Santo Tomás diz que resistir é mais difícil que atacar.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Os Frutos da Fortaleza
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Coragem nas provações:</strong> Quem possui a Fortaleza não foge das dificuldades. Enfrenta-as com serenidade, confiando em Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Perseverança:</strong> A Fortaleza nos faz perseverar até o fim. Não desistir diante dos obstáculos, não abandonar a fé nas crises.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Paciência:</strong> Suportar com paz as contrariedades da vida, sem murmurar, sem revoltar-se contra Deus.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Magnanimidade:</strong> Empreender grandes coisas por Deus, não se contentar com a mediocridade espiritual.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Como Cultivar a Fortaleza
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Aceite as pequenas cruzes:</strong> A Fortaleza se exercita nas pequenas contrariedades diárias. Quem foge das pequenas cruzes não suportará as grandes.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pratique a mortificação:</strong> Pequenas renúncias voluntárias fortalecem a vontade e nos preparam para sacrifícios maiores.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Medite na Paixão de Cristo:</strong> Contemplar o que Jesus sofreu por nós nos dá força para sofrer por Ele.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Frequente os sacramentos:</strong> A Eucaristia é "pão dos fortes". A Confissão nos levanta das quedas e renova nossas forças.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Confie em Deus, não em si:</strong> A Fortaleza não é autoconfiança – é confiança em Deus. "Tudo posso naquele que me fortalece" (Fl 4,13).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Fortaleza e a Bem-Aventurança
              </h2>
              <p className="text-text leading-relaxed mb-6">
                O dom da Fortaleza corresponde à bem-aventurança dos que têm fome e sede de justiça: "Bem-aventurados os que têm fome e sede de justiça, porque serão saciados" (Mt 5,6). A Fortaleza nos faz buscar a justiça de Deus apesar de todos os obstáculos.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Santos Modelos de Fortaleza
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Maximiliano Kolbe:</strong> Ofereceu-se para morrer no lugar de um pai de família em Auschwitz. Fortaleza heroica no horror do campo de concentração.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Santa Joana d'Arc:</strong> Uma jovem camponesa que liderou exércitos e enfrentou a fogueira sem renegar sua missão.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>São Paulo:</strong> Açoites, prisões, naufrágios, perseguições – nada o separou do amor de Cristo. "Combati o bom combate" (2Tm 4,7).
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Tudo posso naquele que me fortalece."
                </p>
                <p className="text-text-muted text-center mt-2">— Filipenses 4,13</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "O dom da fortaleza confere à alma uma confiança que supera todo temor, mesmo o da morte, e a faz enfrentar as provas e perseguições."
                </p>
                <p className="text-text-muted text-center mt-2">— Catecismo da Igreja Católica, 1831</p>
              </div>
            </div>

            <RelatedArticles currentSlug="dom-fortaleza-espirito-santo" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Você tem força para perseverar?</h3>
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

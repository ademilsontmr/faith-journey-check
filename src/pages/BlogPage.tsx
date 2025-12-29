import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowRight, Heart, BookOpen, Church, Users, Flame, Sun, ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "como-rezar-rosario",
    title: "Como Rezar o Santo Rosário: Guia Completo para Iniciantes",
    excerpt: "Aprenda passo a passo como rezar o Santo Rosário e fortalecer sua devoção mariana com este guia prático e espiritual.",
    date: "2024-12-05",
    readTime: "8 min",
    category: "Orações",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 2,
    slug: "sete-sacramentos",
    title: "Os 7 Sacramentos da Igreja Católica Explicados",
    excerpt: "Entenda a importância e o significado de cada um dos sete sacramentos instituídos por Cristo para nossa salvação.",
    date: "2024-12-03",
    readTime: "12 min",
    category: "Formação",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 3,
    slug: "importancia-confissao",
    title: "A Importância da Confissão: Por Que Confessar Regularmente?",
    excerpt: "Descubra os benefícios espirituais da confissão frequente e como ela transforma nossa vida cristã.",
    date: "2024-11-28",
    readTime: "6 min",
    category: "Sacramentos",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 4,
    slug: "santos-padroeiros",
    title: "Santos Padroeiros: Como Escolher e Honrar o Seu",
    excerpt: "Conheça a tradição dos santos padroeiros e como eles podem interceder por você em sua jornada de fé.",
    date: "2024-11-25",
    readTime: "7 min",
    category: "Devoções",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 5,
    slug: "jejum-abstinencia",
    title: "Jejum e Abstinência: Práticas Que Fortalecem a Alma",
    excerpt: "Aprenda sobre as práticas de jejum e abstinência na Igreja Católica e como elas nos aproximam de Deus.",
    date: "2024-11-20",
    readTime: "5 min",
    category: "Espiritualidade",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 6,
    slug: "missa-dominical",
    title: "A Missa Dominical: Centro da Vida Cristã",
    excerpt: "Por que a participação na Missa aos domingos é essencial para todo católico e como aproveitá-la melhor.",
    date: "2024-11-15",
    readTime: "9 min",
    category: "Liturgia",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 7,
    slug: "vida-oracao",
    title: "A Vida de Oração: Como Cultivar uma Intimidade com Deus",
    excerpt: "Aprenda como transformar seu diálogo com Deus em uma fonte de vida e paz através da oração constante.",
    date: "2024-12-29",
    readTime: "7 min",
    category: "Espiritualidade",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 8,
    slug: "significado-missa",
    title: "O Significado da Santa Missa: Entenda Cada Parte da Liturgia",
    excerpt: "Descubra a riqueza teológica e espiritual contida em cada gesto e palavra da celebração eucarística.",
    date: "2024-12-29",
    readTime: "10 min",
    category: "Liturgia",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 9,
    slug: "exame-consciencia",
    title: "Como Fazer um Bom Exame de Consciência para a Confissão",
    excerpt: "Um guia prático e espiritual para preparar seu coração para o sacramento da Reconciliação.",
    date: "2024-12-29",
    readTime: "8 min",
    category: "Sacramentos",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 10,
    slug: "virgem-maria",
    title: "A Virgem Maria na Doutrina Católica: Dogmas e Devoção",
    excerpt: "Entenda o papel fundamental de Nossa Senhora no plano de salvação e os pilares da fé mariana.",
    date: "2024-12-29",
    readTime: "9 min",
    category: "Devoções",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 11,
    slug: "dons-espirito-santo",
    title: "Os Dons do Espírito Santo e Como Eles Atuam em Nossa Vida",
    excerpt: "Descubra como os sete dons do Espírito Santo fortalecem a alma e nos conduzem à santidade.",
    date: "2024-12-29",
    readTime: "10 min",
    category: "Formação",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 12,
    slug: "lectio-divina",
    title: "A Importância da Leitura Orante da Bíblia (Lectio Divina)",
    excerpt: "Aprenda o método milenar de leitura orante das Escrituras para um encontro pessoal com Deus.",
    date: "2024-12-29",
    readTime: "7 min",
    category: "Espiritualidade",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 13,
    slug: "castidade-mundo-moderno",
    title: "Viver a Castidade no Mundo Moderno: Desafios e Graças",
    excerpt: "A castidade como um caminho de liberdade e amor autêntico em meio aos desafios da cultura atual.",
    date: "2024-12-29",
    readTime: "9 min",
    category: "Formação",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 14,
    slug: "doutrina-social",
    title: "A Doutrina Social da Igreja: O Olhar Católico sobre a Sociedade",
    excerpt: "Conheça os princípios católicos para a construção de uma sociedade mais justa e solidária.",
    date: "2024-12-29",
    readTime: "10 min",
    category: "Formação",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 15,
    slug: "discernimento-vocacional",
    title: "Como Discernir a Vontade de Deus em Sua Vida",
    excerpt: "Dicas práticas e espirituais para descobrir o plano de amor que Deus tem para você.",
    date: "2024-12-29",
    readTime: "8 min",
    category: "Espiritualidade",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 16,
    slug: "eucaristia-presenca-real",
    title: "A Eucaristia: Presença Real de Jesus no Pão e no Vinho",
    excerpt: "Entenda o mistério da Transubstanciação e a importância da Eucaristia na vida do cristão.",
    date: "2024-12-29",
    readTime: "10 min",
    category: "Sacramentos",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 17,
    slug: "adoracao-eucaristica",
    title: "A Importância da Adoração Eucarística",
    excerpt: "Descubra os benefícios espirituais de passar um tempo diante do Santíssimo Sacramento. Um guia sobre como fazer uma boa hora santa.",
    date: "2024-12-29",
    readTime: "8 min",
    category: "Espiritualidade",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 18,
    slug: "o-que-e-purgatorio",
    title: "O Que é o Purgatório? Verdades de Fé",
    excerpt: "Entenda o dogma do Purgatório, por que ele existe e qual a importância de rezarmos pelas almas que lá estão.",
    date: "2024-12-29",
    readTime: "10 min",
    category: "Formação",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 19,
    slug: "como-viver-quaresma",
    title: "Como Viver a Quaresma com Frutos Espirituais",
    excerpt: "Prepare-se para a Páscoa com este guia prático sobre como viver bem a Quaresma através da oração, jejum e caridade.",
    date: "2024-12-29",
    readTime: "9 min",
    category: "Espiritualidade",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 20,
    slug: "anjos-da-guarda",
    title: "O Papel dos Anjos da Guarda em Nossa Vida",
    excerpt: "Conheça a doutrina católica sobre os Anjos da Guarda. Saiba como eles nos protegem, guiam e intercedem por nós.",
    date: "2024-12-29",
    readTime: "7 min",
    category: "Devoções",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 21,
    slug: "significado-crucifixo",
    title: "A História e o Significado do Crucifixo",
    excerpt: "Entenda por que o crucifixo é o símbolo central da fé católica. Conheça sua história, simbolismo e importância.",
    date: "2024-12-29",
    readTime: "6 min",
    category: "Devoções",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  }
];

// Sort posts by date (most recent first)
const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = sortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      <Helmet>
        <title>Blog | Bom Católico - Artigos sobre Fé Católica</title>
        <meta name="description" content="Artigos, reflexões e ensinamentos sobre a fé católica apostólica romana. Orações, sacramentos, devoções e formação espiritual." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
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

        {/* Hero */}
        <section className="bg-gradient-to-b from-accent/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
              Blog Bom Católico
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Artigos, reflexões e ensinamentos para fortalecer sua fé e
              aprofundar seu conhecimento da doutrina católica.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                  <article className="bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-full">
                    <div className={`aspect-video flex items-center justify-center ${post.bgColor}`}>
                      <post.icon className={`w-16 h-16 ${post.iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-text-muted mb-3">
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-display text-xl font-semibold text-text mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-text-muted text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-accent hover:text-accent/80">
                        Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex items-center gap-2 mx-4">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${currentPage === page
                        ? "bg-accent text-button-text"
                        : "text-text-muted hover:bg-accent/10 hover:text-accent"
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Como Rezar o Santo Rosário: Guia Completo para Iniciantes",
    excerpt: "Aprenda passo a passo como rezar o Santo Rosário e fortalecer sua devoção mariana com este guia prático e espiritual.",
    date: "2024-12-05",
    readTime: "8 min",
    category: "Orações",
    image: "https://images.unsplash.com/photo-1445633883498-7f9922d37a3f?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Os 7 Sacramentos da Igreja Católica Explicados",
    excerpt: "Entenda a importância e o significado de cada um dos sete sacramentos instituídos por Cristo para nossa salvação.",
    date: "2024-12-03",
    readTime: "12 min",
    category: "Formação",
    image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "A Importância da Confissão: Por Que Confessar Regularmente?",
    excerpt: "Descubra os benefícios espirituais da confissão frequente e como ela transforma nossa vida cristã.",
    date: "2024-11-28",
    readTime: "6 min",
    category: "Sacramentos",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Santos Padroeiros: Como Escolher e Honrar o Seu",
    excerpt: "Conheça a tradição dos santos padroeiros e como eles podem interceder por você em sua jornada de fé.",
    date: "2024-11-25",
    readTime: "7 min",
    category: "Devoções",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Jejum e Abstinência: Práticas Que Fortalecem a Alma",
    excerpt: "Aprenda sobre as práticas de jejum e abstinência na Igreja Católica e como elas nos aproximam de Deus.",
    date: "2024-11-20",
    readTime: "5 min",
    category: "Espiritualidade",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "A Missa Dominical: Centro da Vida Cristã",
    excerpt: "Por que a participação na Missa aos domingos é essencial para todo católico e como aproveitá-la melhor.",
    date: "2024-11-15",
    readTime: "9 min",
    category: "Liturgia",
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=400&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | Bom Católico - Artigos sobre Fé Católica</title>
        <meta name="description" content="Artigos, reflexões e ensinamentos sobre a fé católica apostólica romana. Orações, sacramentos, devoções e formação espiritual." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
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

        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog Bom Católico
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Artigos, reflexões e ensinamentos para fortalecer sua fé e 
              aprofundar seu conhecimento da doutrina católica.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
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
                    <h2 className="font-display text-xl font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

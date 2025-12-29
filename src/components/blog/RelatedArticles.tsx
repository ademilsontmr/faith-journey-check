import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Heart, BookOpen, Church, Users, Flame, Sun, type LucideIcon } from "lucide-react";

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

const allPosts: BlogPost[] = [
    {
        id: 1,
        slug: "como-rezar-rosario",
        title: "Como Rezar o Santo Rosário: Guia Completo para Iniciantes",
        excerpt: "Aprenda passo a passo como rezar o Santo Rosário e fortalecer sua devoção mariana.",
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
        excerpt: "Entenda a importância e o significado de cada um dos sete sacramentos instituídos por Cristo.",
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
        excerpt: "Por que a participação na Missa aos domingos é essencial para todo católico.",
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
    }
];

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
    // Filter out the current article and pick 3 random ones
    const filteredPosts = allPosts.filter(post => post.slug !== currentSlug);
    const shuffled = [...filteredPosts].sort(() => 0.5 - Math.random());
    const selectedPosts = shuffled.slice(0, 3);

    return (
        <section className="mt-16 pt-16 border-t border-border">
            <h3 className="font-display text-2xl font-bold text-text mb-8">
                Continue sua leitura
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedPosts.map((post) => (
                    <Link to={`/blog/${post.slug}`} key={post.id} className="group">
                        <article className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full border border-border/50">
                            <div className={`aspect-video flex items-center justify-center ${post.bgColor}`}>
                                <post.icon className={`w-10 h-10 ${post.iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                                        {post.category}
                                    </span>
                                </div>
                                <h4 className="font-display text-base font-semibold text-text mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                                    {post.title}
                                </h4>
                                <span className="inline-flex items-center text-xs text-accent font-medium">
                                    Ler artigo <ArrowRight className="w-3 h-3 ml-1" />
                                </span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}

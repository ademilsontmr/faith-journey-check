import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowRight, Heart, BookOpen, Church, Users, Flame, Sun, MapPin, HeartPulse, Wind, Cloud, Brain, Anchor, Smartphone, GraduationCap, Home, ShieldCheck, Shield, Coins, Star, ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
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

export const blogPosts: BlogPost[] = [
  {
    id: 47,
    slug: "santos-pais-maes-santidade-matrimonio",
    title: "Santos que Foram Pais e Mães: A Santidade no Matrimônio",
    excerpt: "A santidade não é exclusividade de padres e freiras. Descubra como homens e mulheres alcançaram o céu através do amor conjugal e da educação dos filhos.",
    date: "2026-05-05",
    readTime: "12 min",
    category: "Santos",
    icon: Users,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400"
  },
  {
    id: 48,
    slug: "carlo-acutis-padroeiro-internet-eucaristia",
    title: "Carlo Acutis: O Padroeiro da Internet e a Eucaristia",
    excerpt: "Carlo Acutis nos mostrou que é possível ser um jovem moderno, gostar de videogames e computadores, e ser profundamente apaixonado por Deus.",
    date: "2026-05-10",
    readTime: "10 min",
    category: "Santos",
    icon: Smartphone,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400"
  },
  {
    id: 49,
    slug: "santa-dulce-dos-pobres-legado-caridade",
    title: "Santa Dulce dos Pobres: O Legado de Caridade no Brasil",
    excerpt: "Irmã Dulce não esperava as condições ideais para ajudar; ela transformava galinheiros em hospitais e a indiferença em amor.",
    date: "2026-05-15",
    readTime: "9 min",
    category: "Santos",
    icon: Heart,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-400"
  },
  {
    id: 50,
    slug: "como-escolher-santo-padroeiro-guia",
    title: "Como Escolher um Santo Padroeiro para 2026: Um Guia Espiritual",
    excerpt: "Ter um santo padroeiro não é apenas uma tradição, mas uma amizade espiritual que nos ajuda a caminhar seguros em direção ao Céu.",
    date: "2026-05-20",
    readTime: "8 min",
    category: "Espiritualidade",
    icon: Star,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-400"
  },
  {
    id: 51,
    slug: "vida-sao-bento-protecao-contra-mal",
    title: "A Vida de São Bento e a Proteção contra o Mal",
    excerpt: "São Bento não é apenas o santo da medalha, mas o mestre da vida espiritual que nos ensina a vencer as ciladas do inimigo com a oração e o trabalho.",
    date: "2026-05-25",
    readTime: "11 min",
    category: "Santos",
    icon: ShieldCheck,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400"
  },
  {
    id: 42,
    slug: "o-que-e-graca-santificante-amizade-deus",
    title: "O Que é a Graça Santificante? Como Viver em Estado de Amizade com Deus",
    excerpt: "A graça não é apenas uma ajuda externa, mas a própria vida de Deus habitando em nossa alma. Descubra como preservar esse tesouro infinito.",
    date: "2026-04-05",
    readTime: "11 min",
    category: "Doutrina",
    icon: Flame,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-400"
  },
  {
    id: 43,
    slug: "virtudes-cardeais-guia-pratico-cotidiano",
    title: "As Virtudes Cardeais: Justiça, Prudência, Fortaleza e Temperança no Cotidiano",
    excerpt: "As virtudes são os \"músculos\" da alma. Descubra como exercitá-las para viver com integridade e equilíbrio no mundo moderno.",
    date: "2026-04-10",
    readTime: "10 min",
    category: "Formação",
    icon: Shield,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400"
  },
  {
    id: 44,
    slug: "sete-dons-espirito-santo-como-usar",
    title: "Os Dons do Espírito Santo: Como Identificá-los e Usá-los",
    excerpt: "O Espírito Santo é o \"Doce Hóspede da Alma\". Conheça as sete ferramentas divinas que Ele nos dá para vivermos como verdadeiros cristãos.",
    date: "2026-04-15",
    readTime: "9 min",
    category: "Doutrina",
    icon: Flame,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-400"
  },
  {
    id: 45,
    slug: "doutrina-purgatorio-purificacao-final",
    title: "O Purgatório: O que a Igreja Realmente Ensina sobre a Purificação Final",
    excerpt: "O Purgatório não é um \"segundo inferno\", mas a ante-sala do Céu. Descubra por que este dogma é uma das maiores provas do amor de Deus.",
    date: "2026-04-20",
    readTime: "10 min",
    category: "Doutrina",
    icon: BookOpen,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400"
  },
  {
    id: 46,
    slug: "importancia-dizimo-caridade-crista",
    title: "A Importância do Dízimo e da Caridade: O Cristão e o Uso do Dinheiro",
    excerpt: "O dízimo não é uma taxa, mas um ato de gratidão. Entenda como a generosidade liberta o coração do apego material e nos aproxima de Deus.",
    date: "2026-04-25",
    readTime: "9 min",
    category: "Vida Cristã",
    icon: Coins,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-400"
  },
  {
    id: 37,
    slug: "poder-da-confissao-guia-preparacao",
    title: "O Poder da Confissão: Como se Preparar para uma Confissão que Muda a Vida",
    excerpt: "A Confissão não é um tribunal de condenação, mas um hospital de cura. Aprenda a abrir o coração para a misericórdia que renova todas as coisas.",
    date: "2026-03-10",
    readTime: "12 min",
    category: "Sacramentos",
    icon: Flame,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-400"
  },
  {
    id: 38,
    slug: "eucaristia-missa-diaria-segredo-santos",
    title: "A Eucaristia no Dia a Dia: Por que a Missa Diária é o Segredo dos Santos?",
    excerpt: "Receber o Pão do Céu todos os dias não é um privilégio de poucos, mas um convite de amor para todos os que buscam a santidade.",
    date: "2026-03-15",
    readTime: "10 min",
    category: "Sacramentos",
    icon: Sun,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-400"
  },
  {
    id: 39,
    slug: "como-rezar-terco-sem-distracoes",
    title: "Como Rezar o Terço sem Distrações: Dicas de Concentração",
    excerpt: "Rezar o Terço não é apenas repetir palavras, mas contemplar o rosto de Cristo com Maria. Saiba como vencer as batalhas da mente.",
    date: "2026-03-20",
    readTime: "9 min",
    category: "Oração",
    icon: Heart,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-400"
  },
  {
    id: 40,
    slug: "significado-sacramentais-catolicos",
    title: "O Significado dos Sacramentais: Água Benta, Escapulário e Medalhas",
    excerpt: "Sacramentais não são \"amuletos da sorte\", mas sinais sagrados que nos ajudam a viver em estado de graça. Entenda como usá-los.",
    date: "2026-03-25",
    readTime: "8 min",
    category: "Doutrina",
    icon: ShieldCheck,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400"
  },
  {
    id: 41,
    slug: "lectio-divina-guia-passo-a-passo",
    title: "Lectio Divina: Guia Passo a Passo para Ler a Bíblia com o Coração",
    excerpt: "A Bíblia não é um livro de história, mas uma carta de amor de Deus para você. Aprenda a ouvi-Lo através da Leitura Orante.",
    date: "2026-03-30",
    readTime: "11 min",
    category: "Oração",
    icon: BookOpen,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-400"
  },
  {
    id: 32,
    slug: "como-transmitir-fe-filhos-era-digital",
    title: "Como Transmitir a Fé Católica aos Filhos na Era das Telas?",
    excerpt: "Educar para o céu nunca foi tão desafiador. Descubra como competir com o algoritmo e plantar sementes de eternidade no coração dos seus filhos.",
    date: "2026-02-15",
    readTime: "11 min",
    category: "Família",
    icon: Smartphone,
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-400"
  },
  {
    id: 33,
    slug: "igreja-domestica-oracao-familia",
    title: "Igreja Doméstica: Passos Práticos para Rezar em Família",
    excerpt: "\"Família que reza unida, permanece unida\". Descubra como criar um ambiente de fé e oração dentro da sua própria casa.",
    date: "2026-02-20",
    readTime: "9 min",
    category: "Família",
    icon: Home,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-400"
  },
  {
    id: 34,
    slug: "homeschooling-catolico-educacao-classica",
    title: "Educação Clássica e Católica: Por que o Homeschooling Cresce no Brasil?",
    excerpt: "Mais do que uma alternativa escolar, o homeschooling católico é um resgate da missão dos pais como primeiros educadores.",
    date: "2026-02-25",
    readTime: "12 min",
    category: "Educação",
    icon: GraduationCap,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400"
  },
  {
    id: 35,
    slug: "namoro-santo-castidade-2026",
    title: "Namoro Santo em 2026: Desafios da Castidade no Mundo Digital",
    excerpt: "É possível viver a castidade em um mundo que a ridiculariza? Descubra como construir um relacionamento baseado no amor real e não apenas na atração passageira.",
    date: "2026-03-01",
    readTime: "10 min",
    category: "Juventude",
    icon: Heart,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-400"
  },
  {
    id: 36,
    slug: "papel-dos-avos-transmissao-fe",
    title: "O Papel dos Avós na Transmissão da Tradição Cristã",
    excerpt: "Os avós são os guardiões da memória e as raízes que sustentam a árvore da família. Saiba como sua influência é insubstituível na vida dos netos.",
    date: "2026-03-05",
    readTime: "8 min",
    category: "Família",
    icon: Users,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-400"
  },
  {
    id: 27,
    slug: "fe-e-saude-mental-ansiedade",
    title: "Fé e Saúde Mental: Como a Espiritualidade Católica Ajuda a Vencer a Ansiedade?",
    excerpt: "Em um mundo hiperconectado e ansioso, a tradição católica oferece tesouros milenares para o equilíbrio da mente e da alma.",
    date: "2026-01-20",
    readTime: "12 min",
    category: "Saúde Mental",
    icon: HeartPulse,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-400"
  },
  {
    id: 28,
    slug: "poder-do-silencio-burnout",
    title: "O Poder do Silêncio: Retiros Espirituais para Curar o Burnout",
    excerpt: "No ruído ensurdecedor do século XXI, o silêncio não é um luxo, mas uma necessidade vital para a sobrevivência da alma.",
    date: "2026-01-25",
    readTime: "8 min",
    category: "Espiritualidade",
    icon: Wind,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-400"
  },
  {
    id: 29,
    slug: "santos-depressao-noite-escura",
    title: "Santos que Enfrentaram a Depressão e a Noite Escura da Alma",
    excerpt: "A santidade não é ausência de sofrimento psíquico, mas a capacidade de amar a Deus mesmo em meio à escuridão da mente.",
    date: "2026-01-30",
    readTime: "10 min",
    category: "Hagiografia",
    icon: Cloud,
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-400"
  },
  {
    id: 30,
    slug: "oracao-vs-mindfulness-cristao",
    title: "Oração e Mindfulness: A Diferença entre Meditação Cristã e Práticas Seculares",
    excerpt: "Atenção plena ou presença de Deus? Entenda por que a meditação católica vai muito além do relaxamento mental.",
    date: "2026-02-05",
    readTime: "9 min",
    category: "Formação",
    icon: Brain,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-400"
  },
  {
    id: 31,
    slug: "como-lidar-com-luto-fe-crista",
    title: "Como Lidar com o Luto: O Consolo da Fé na Vida Eterna",
    excerpt: "A morte não é o fim, mas uma passagem. Aprenda como a esperança cristã transforma a dor da saudade em oração e confiança.",
    date: "2026-02-10",
    readTime: "11 min",
    category: "Espiritualidade",
    icon: Anchor,
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-400"
  },
  {
    id: 22,
    slug: "legado-jubileu-2025",
    title: "O Legado do Jubileu 2025: Como Continuar Sendo um Peregrino da Esperança?",
    excerpt: "As Portas Santas se fecharam, mas o coração do cristão deve permanecer aberto. Descubra como levar os frutos do Ano Santo para o seu dia a dia em 2026.",
    date: "2026-01-01",
    readTime: "8 min",
    category: "Jubileu 2025",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 23,
    slug: "guia-indulgencia-plenaria",
    title: "Indulgência Plenária: Guia Completo para os Últimos Dias do Jubileu",
    excerpt: "A Igreja abre seus tesouros de graça de forma especial no Jubileu. Entenda como receber a remissão total das penas devidas aos seus pecados.",
    date: "2025-12-28",
    readTime: "10 min",
    category: "Formação",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 24,
    slug: "mudancas-igreja-pos-2025",
    title: "O Que Muda na Igreja Após o Ano Santo de 2025?",
    excerpt: "O encerramento do Jubileu não é um ponto final, mas um novo fôlego para a missão. Entenda as tendências e desafios da Igreja para 2026.",
    date: "2026-01-05",
    readTime: "9 min",
    category: "Atualidades",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 25,
    slug: "oracoes-esperanca-2026",
    title: "Orações de Esperança para Momentos de Crise em 2026",
    excerpt: "Quando as forças parecem esgotar, a oração é o nosso refúgio. Conheça preces poderosas para renovar sua confiança em Deus.",
    date: "2026-01-10",
    readTime: "6 min",
    category: "Orações",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 26,
    slug: "peregrinacao-local",
    title: "Como Organizar uma Peregrinação Local em Sua Diocese",
    excerpt: "Você não precisa ir a Roma para ser um peregrino. Descubra como organizar uma jornada de fé para os santuários da sua região.",
    date: "2026-01-15",
    readTime: "8 min",
    category: "Devoções",
    icon: MapPin,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
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

export interface AnswerOption {
  label: string;
  points: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: AnswerOption[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Com que frequência você participa da Santa Missa?",
    options: [
      { label: "Todo domingo e dias santos", points: 3 },
      { label: "Quase todo domingo", points: 2.5 },
      { label: "Algumas vezes por mês", points: 2 },
      { label: "Raramente, só em ocasiões especiais", points: 1 },
      { label: "Nunca ou quase nunca", points: 0 },
    ],
  },
  {
    id: 2,
    question: "Você procura chegar mais cedo para se preparar espiritualmente antes da Missa?",
    options: [
      { label: "Sempre, gosto de me preparar em oração", points: 3 },
      { label: "Frequentemente chego antes", points: 2.5 },
      { label: "Às vezes, quando consigo", points: 2 },
      { label: "Raramente, costumo chegar em cima da hora", points: 1 },
      { label: "Nunca, sempre chego atrasado", points: 0 },
    ],
  },
  {
    id: 3,
    question: "Você participa ativamente da liturgia (respostas, cantos, postura)?",
    options: [
      { label: "Sim, participo com atenção e devoção", points: 3 },
      { label: "Na maioria das vezes participo bem", points: 2.5 },
      { label: "Às vezes me distraio durante a Missa", points: 2 },
      { label: "Raramente presto atenção total", points: 1 },
      { label: "Não participo ativamente", points: 0 },
    ],
  },
  {
    id: 4,
    question: "Você comunga com frequência quando está em graça com Deus?",
    options: [
      { label: "Sempre que estou em graça", points: 3 },
      { label: "Frequentemente comungo", points: 2.5 },
      { label: "Às vezes comungo", points: 2 },
      { label: "Raramente comungo", points: 1 },
      { label: "Nunca ou quase nunca comungo", points: 0 },
    ],
  },
  {
    id: 5,
    question: "Participa de Missas em dias santos de guarda além dos domingos?",
    options: [
      { label: "Sempre participo nos dias santos", points: 3 },
      { label: "Na maioria dos dias santos", points: 2.5 },
      { label: "Em alguns dias santos", points: 2 },
      { label: "Raramente vou em dias santos", points: 1 },
      { label: "Não participo em dias santos", points: 0 },
    ],
  },
  {
    id: 6,
    question: "Serve ou já serviu em algum ministério ou pastoral da Igreja?",
    options: [
      { label: "Sim, sirvo ativamente em ministério", points: 3 },
      { label: "Já servi e pretendo voltar", points: 2.5 },
      { label: "Participo ocasionalmente", points: 2 },
      { label: "Nunca servi, mas tenho interesse", points: 1 },
      { label: "Nunca servi e não tenho interesse", points: 0 },
    ],
  },
  {
    id: 7,
    question: "Faz adoração ao Santíssimo com qual frequência?",
    options: [
      { label: "Semanalmente ou mais", points: 3 },
      { label: "Algumas vezes por mês", points: 2.5 },
      { label: "Uma vez por mês", points: 2 },
      { label: "Raramente, poucas vezes ao ano", points: 1 },
      { label: "Nunca fiz adoração", points: 0 },
    ],
  },
  {
    id: 8,
    question: "Faz orações todos os dias?",
    options: [
      { label: "Sim, rezo várias vezes ao dia", points: 3 },
      { label: "Sim, rezo ao menos uma vez ao dia", points: 2.5 },
      { label: "Rezo na maioria dos dias", points: 2 },
      { label: "Rezo apenas alguns dias", points: 1 },
      { label: "Raramente ou nunca rezo", points: 0 },
    ],
  },
  {
    id: 9,
    question: "Reserva um momento específico do dia para oração pessoal?",
    options: [
      { label: "Sim, tenho horário fixo de oração", points: 3 },
      { label: "Na maioria dos dias tenho esse momento", points: 2.5 },
      { label: "Às vezes consigo reservar um tempo", points: 2 },
      { label: "Raramente tenho tempo específico", points: 1 },
      { label: "Não tenho momento reservado", points: 0 },
    ],
  },
  {
    id: 10,
    question: "Reza o Santo Terço? Com que frequência?",
    options: [
      { label: "Diariamente", points: 3 },
      { label: "Várias vezes por semana", points: 2.5 },
      { label: "Uma vez por semana", points: 2 },
      { label: "Raramente, poucas vezes ao mês", points: 1 },
      { label: "Nunca ou quase nunca", points: 0 },
    ],
  },
  {
    id: 11,
    question: "Reza o Ângelus ou outras orações tradicionais da Igreja?",
    options: [
      { label: "Sim, rezo diariamente", points: 3 },
      { label: "Frequentemente rezo", points: 2.5 },
      { label: "Às vezes rezo", points: 2 },
      { label: "Raramente rezo", points: 1 },
      { label: "Não conheço ou nunca rezo", points: 0 },
    ],
  },
  {
    id: 12,
    question: "Reza antes das refeições ou agradece diariamente a Deus?",
    options: [
      { label: "Sempre, em todas as refeições", points: 3 },
      { label: "Frequentemente agradeço", points: 2.5 },
      { label: "Às vezes me lembro de agradecer", points: 2 },
      { label: "Raramente faço isso", points: 1 },
      { label: "Nunca rezo antes das refeições", points: 0 },
    ],
  },
  {
    id: 13,
    question: "Costuma rezar pelas necessidades das outras pessoas?",
    options: [
      { label: "Sim, diariamente rezo pelos outros", points: 3 },
      { label: "Frequentemente rezo pelos outros", points: 2.5 },
      { label: "Às vezes, quando me pedem", points: 2 },
      { label: "Raramente me lembro", points: 1 },
      { label: "Nunca rezo pelos outros", points: 0 },
    ],
  },
  {
    id: 14,
    question: "A oração te ajuda a tomar decisões importantes?",
    options: [
      { label: "Sempre busco Deus nas decisões", points: 3 },
      { label: "Frequentemente peço orientação", points: 2.5 },
      { label: "Às vezes recorro à oração", points: 2 },
      { label: "Raramente penso em rezar", points: 1 },
      { label: "Nunca relaciono oração e decisões", points: 0 },
    ],
  },
  {
    id: 15,
    question: "Conhece os 7 sacramentos da Igreja Católica?",
    options: [
      { label: "Sim, conheço todos e sua importância", points: 3 },
      { label: "Conheço a maioria deles", points: 2.5 },
      { label: "Conheço alguns", points: 2 },
      { label: "Conheço muito pouco", points: 1 },
      { label: "Não conheço os sacramentos", points: 0 },
    ],
  },
  {
    id: 16,
    question: "Confessa-se com qual frequência?",
    options: [
      { label: "Mensalmente ou mais", points: 3 },
      { label: "A cada 2-3 meses", points: 2.5 },
      { label: "Algumas vezes ao ano", points: 2 },
      { label: "Uma vez ao ano ou menos", points: 1 },
      { label: "Há anos não me confesso", points: 0 },
    ],
  },
  {
    id: 17,
    question: "Lê o Catecismo ou usa-o para tirar dúvidas de fé?",
    options: [
      { label: "Sim, consulto regularmente", points: 3 },
      { label: "Às vezes consulto", points: 2.5 },
      { label: "Raramente, mas já li trechos", points: 2 },
      { label: "Nunca li, mas tenho interesse", points: 1 },
      { label: "Nunca li e não conheço", points: 0 },
    ],
  },
  {
    id: 18,
    question: "Participa ou já participou de grupos de estudo bíblico/catequese?",
    options: [
      { label: "Sim, participo atualmente", points: 3 },
      { label: "Já participei e foi muito bom", points: 2.5 },
      { label: "Participei apenas na infância", points: 2 },
      { label: "Nunca participei, mas quero", points: 1 },
      { label: "Nunca participei", points: 0 },
    ],
  },
  {
    id: 19,
    question: "Tem consciência da importância da Eucaristia e da Confissão para a vida cristã?",
    options: [
      { label: "Sim, são centrais na minha fé", points: 3 },
      { label: "Entendo bem sua importância", points: 2.5 },
      { label: "Tenho noção da importância", points: 2 },
      { label: "Entendo pouco sobre isso", points: 1 },
      { label: "Não entendo a importância", points: 0 },
    ],
  },
  {
    id: 20,
    question: "Busca evitar pecados graves e viver em estado de graça?",
    options: [
      { label: "Sim, é minha prioridade", points: 3 },
      { label: "Frequentemente me esforço", points: 2.5 },
      { label: "Tento, mas tenho dificuldade", points: 2 },
      { label: "Raramente penso nisso", points: 1 },
      { label: "Não me preocupo com isso", points: 0 },
    ],
  },
  {
    id: 21,
    question: "Faz novenas? Com que frequência?",
    options: [
      { label: "Sim, frequentemente faço novenas", points: 3 },
      { label: "Faço algumas novenas por ano", points: 2.5 },
      { label: "Às vezes faço", points: 2 },
      { label: "Raramente faço novenas", points: 1 },
      { label: "Nunca fiz uma novena", points: 0 },
    ],
  },
  {
    id: 22,
    question: "Tem devoção mariana (a Nossa Senhora)?",
    options: [
      { label: "Sim, tenho grande devoção", points: 3 },
      { label: "Tenho devoção moderada", points: 2.5 },
      { label: "Tenho alguma devoção", points: 2 },
      { label: "Pouca devoção", points: 1 },
      { label: "Não tenho devoção mariana", points: 0 },
    ],
  },
  {
    id: 23,
    question: "Acompanha o calendário litúrgico e suas celebrações?",
    options: [
      { label: "Sim, acompanho de perto", points: 3 },
      { label: "Acompanho as principais festas", points: 2.5 },
      { label: "Conheço algumas datas", points: 2 },
      { label: "Sei muito pouco", points: 1 },
      { label: "Não acompanho", points: 0 },
    ],
  },
  {
    id: 24,
    question: "Tem devoção a algum santo e pede sua intercessão?",
    options: [
      { label: "Sim, tenho santos de devoção", points: 3 },
      { label: "Tenho um santo padroeiro", points: 2.5 },
      { label: "Às vezes peço intercessão", points: 2 },
      { label: "Raramente peço aos santos", points: 1 },
      { label: "Não tenho devoção a santos", points: 0 },
    ],
  },
  {
    id: 25,
    question: "Mantém sacramentais em casa (água benta, cruz, imagens) e os usa com fé?",
    options: [
      { label: "Sim, tenho e uso com devoção", points: 3 },
      { label: "Tenho alguns e uso às vezes", points: 2.5 },
      { label: "Tenho, mas uso pouco", points: 2 },
      { label: "Tenho poucos itens", points: 1 },
      { label: "Não tenho sacramentais em casa", points: 0 },
    ],
  },
  {
    id: 26,
    question: "Consome conteúdo católico (homilias, reflexões, vídeos)?",
    options: [
      { label: "Sim, diariamente", points: 3 },
      { label: "Várias vezes por semana", points: 2.5 },
      { label: "Semanalmente", points: 2 },
      { label: "Raramente", points: 1 },
      { label: "Nunca consumo", points: 0 },
    ],
  },
  {
    id: 27,
    question: "Contribui com a comunidade (dízimo, doações, voluntariado)?",
    options: [
      { label: "Sim, contribuo regularmente", points: 3 },
      { label: "Contribuo frequentemente", points: 2.5 },
      { label: "Contribuo às vezes", points: 2 },
      { label: "Raramente contribuo", points: 1 },
      { label: "Não contribuo", points: 0 },
    ],
  },
  {
    id: 28,
    question: "Busca viver valores cristãos no trabalho, família e relacionamentos?",
    options: [
      { label: "Sim, é meu modo de vida", points: 3 },
      { label: "Frequentemente me esforço", points: 2.5 },
      { label: "Às vezes consigo", points: 2 },
      { label: "Tenho dificuldade nisso", points: 1 },
      { label: "Não penso nisso no dia a dia", points: 0 },
    ],
  },
  {
    id: 29,
    question: "Compartilha sua fé com outras pessoas?",
    options: [
      { label: "Sim, evangelizo ativamente", points: 3 },
      { label: "Frequentemente falo da fé", points: 2.5 },
      { label: "Às vezes compartilho", points: 2 },
      { label: "Raramente falo sobre fé", points: 1 },
      { label: "Nunca compartilho minha fé", points: 0 },
    ],
  },
  {
    id: 30,
    question: "Busca crescer espiritualmente com estudo, oração e confissão frequente?",
    options: [
      { label: "Sim, busco crescer constantemente", points: 3 },
      { label: "Frequentemente busco crescer", points: 2.5 },
      { label: "Às vezes me dedico a isso", points: 2 },
      { label: "Raramente penso nisso", points: 1 },
      { label: "Não busco crescimento espiritual", points: 0 },
    ],
  },
];

export interface ResultLevel {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
  emoji: string;
}

export const resultLevels: ResultLevel[] = [
  {
    minScore: 90,
    maxScore: 100,
    title: "Católico Praticante Exemplar",
    description: "Você vive intensamente sua fé católica! Continue firme nessa caminhada e seja luz para os outros.",
    emoji: "🏆",
  },
  {
    minScore: 75,
    maxScore: 89,
    title: "Católico Comprometido",
    description: "Você tem uma vida de fé sólida. Continue crescendo e aprofundando sua espiritualidade.",
    emoji: "⭐",
  },
  {
    minScore: 60,
    maxScore: 74,
    title: "Católico em Crescimento",
    description: "Você está no caminho certo! Busque participar mais dos sacramentos e da vida da Igreja.",
    emoji: "🌱",
  },
  {
    minScore: 40,
    maxScore: 59,
    title: "Católico em Busca",
    description: "Sua fé precisa ser alimentada. Aproxime-se mais da Igreja e dos sacramentos.",
    emoji: "🔍",
  },
  {
    minScore: 20,
    maxScore: 39,
    title: "Católico Distante",
    description: "É hora de retornar à casa do Pai. A Igreja te espera de braços abertos!",
    emoji: "🏠",
  },
  {
    minScore: 0,
    maxScore: 19,
    title: "Início da Jornada",
    description: "Nunca é tarde para começar. Deus te ama e te chama para uma vida de fé plena.",
    emoji: "✨",
  },
];

export function getResultLevel(normalizedScore: number): ResultLevel {
  return resultLevels.find(
    (level) => normalizedScore >= level.minScore && normalizedScore <= level.maxScore
  ) || resultLevels[resultLevels.length - 1];
}

export function calculateNormalizedScore(totalPoints: number): number {
  return Math.round((totalPoints / 90) * 100);
}

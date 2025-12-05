export interface QuizQuestion {
  id: number;
  question: string;
}

export interface AnswerOption {
  label: string;
  points: number;
}

export const questions: QuizQuestion[] = [
  { id: 1, question: "Com que frequência você participa da Santa Missa?" },
  { id: 2, question: "Você procura chegar mais cedo para se preparar espiritualmente antes da Missa?" },
  { id: 3, question: "Você participa ativamente da liturgia (respostas, cantos, postura)?" },
  { id: 4, question: "Você comunga com frequência quando está em graça com Deus?" },
  { id: 5, question: "Participa de Missas em dias santos de guarda além dos domingos?" },
  { id: 6, question: "Serve ou já serviu em algum ministério ou pastoral da Igreja?" },
  { id: 7, question: "Faz adoração ao Santíssimo com qual frequência?" },
  { id: 8, question: "Faz orações todos os dias?" },
  { id: 9, question: "Reserva um momento específico do dia para oração pessoal?" },
  { id: 10, question: "Reza o Santo Terço? Com que frequência?" },
  { id: 11, question: "Reza o Ângelus ou outras orações tradicionais da Igreja?" },
  { id: 12, question: "Reza antes das refeições ou agradece diariamente a Deus?" },
  { id: 13, question: "Costuma rezar pelas necessidades das outras pessoas?" },
  { id: 14, question: "A oração te ajuda a tomar decisões importantes?" },
  { id: 15, question: "Conhece os 7 sacramentos da Igreja Católica?" },
  { id: 16, question: "Confessa-se com qual frequência?" },
  { id: 17, question: "Lê o Catecismo ou usa-o para tirar dúvidas de fé?" },
  { id: 18, question: "Participa ou já participou de grupos de estudo bíblico/catequese?" },
  { id: 19, question: "Tem consciência da importância da Eucaristia e da Confissão para a vida cristã?" },
  { id: 20, question: "Busca evitar pecados graves e viver em estado de graça?" },
  { id: 21, question: "Faz novenas? Com que frequência?" },
  { id: 22, question: "Tem devoção mariana (a Nossa Senhora)?" },
  { id: 23, question: "Acompanha o calendário litúrgico e suas celebrações?" },
  { id: 24, question: "Tem devoção a algum santo e pede sua intercessão?" },
  { id: 25, question: "Mantém sacramentais em casa (água benta, cruz, imagens) e os usa com fé?" },
  { id: 26, question: "Consome conteúdo católico (homilias, reflexões, vídeos)?" },
  { id: 27, question: "Contribui com a comunidade (dízimo, doações, voluntariado)?" },
  { id: 28, question: "Busca viver valores cristãos no trabalho, família e relacionamentos?" },
  { id: 29, question: "Compartilha sua fé com outras pessoas?" },
  { id: 30, question: "Busca crescer espiritualmente com estudo, oração e confissão frequente?" },
];

export const answerOptions: AnswerOption[] = [
  { label: "Sempre / Diariamente / Todo domingo", points: 3 },
  { label: "Frequentemente / Algumas vezes na semana", points: 2.5 },
  { label: "Às vezes / 1x por semana ou menos", points: 2 },
  { label: "Raramente / Poucas vezes no mês", points: 1 },
  { label: "Nunca", points: 0 },
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

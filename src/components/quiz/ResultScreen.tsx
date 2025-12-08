import { ResultLevel } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { Download, Share2, RotateCcw, Trophy, Target, BookOpen, Cross, Heart, Star, Church, HandHeart, Sparkles, Calendar, Quote, Users, Flame, Crown, Shield, Scroll } from "lucide-react";
import { toast } from "sonner";
import { generateCatholicGuidePDF } from "@/utils/generateCatholicGuidePDF";

interface ResultScreenProps {
  score: number;
  level: ResultLevel;
  userName: string;
  answers: number[];
  onRestart: () => void;
}

// Áreas de avaliação baseadas nas perguntas
const getAreaScores = (answers: number[]) => {
  const eucaristica = answers.slice(0, 7).reduce((sum, p) => sum + (p || 0), 0);
  const eucaristicaMax = 7 * 3;
  const eucaristicaPercent = Math.round((eucaristica / eucaristicaMax) * 100);

  const oracao = answers.slice(7, 14).reduce((sum, p) => sum + (p || 0), 0);
  const oracaoMax = 7 * 3;
  const oracaoPercent = Math.round((oracao / oracaoMax) * 100);

  const formacao = answers.slice(14, 20).reduce((sum, p) => sum + (p || 0), 0);
  const formacaoMax = 6 * 3;
  const formacaoPercent = Math.round((formacao / formacaoMax) * 100);

  const devocoes = answers.slice(20, 26).reduce((sum, p) => sum + (p || 0), 0);
  const devocoesMax = 6 * 3;
  const devocoesPercent = Math.round((devocoes / devocoesMax) * 100);

  const testemunho = answers.slice(26, 30).reduce((sum, p) => sum + (p || 0), 0);
  const testemunhoMax = 4 * 3;
  const testemunhoPercent = Math.round((testemunho / testemunhoMax) * 100);

  return {
    eucaristica: eucaristicaPercent,
    oracao: oracaoPercent,
    formacao: formacaoPercent,
    devocoes: devocoesPercent,
    testemunho: testemunhoPercent,
  };
};

// Diagnóstico personalizado baseado na pontuação da área
const getDiagnostico = (area: string, percent: number, userName: string) => {
  const firstName = userName.split(" ")[0];
  
  const diagnosticos: Record<string, { high: string; medium: string; low: string }> = {
    eucaristica: {
      high: `${firstName}, você vive a Eucaristia como centro da sua fé! A Santa Missa é verdadeiramente a "fonte e cume" da sua vida cristã, como ensina o Concílio Vaticano II. Continue participando com essa devoção.`,
      medium: `${firstName}, você tem uma boa participação na vida eucarística, mas há espaço para crescer. Procure chegar mais cedo para a Missa, fazer uma preparação em oração e agradecer após a comunhão.`,
      low: `${firstName}, a Eucaristia é o maior tesouro que Jesus nos deixou. "Sem a Missa, a terra não poderia subsistir" (São Pio de Pietrelcina). Busque participar mais ativamente da Santa Missa dominical.`,
    },
    oracao: {
      high: `${firstName}, você cultiva uma bela vida de oração! Como Santa Teresa de Ávila dizia: "A oração é um trato de amizade com Deus". Continue nesse diálogo constante com o Senhor.`,
      medium: `${firstName}, sua vida de oração está em desenvolvimento. Estabeleça horários fixos para rezar e inclua o Santo Terço em sua rotina - Nossa Senhora intercederá por você.`,
      low: `${firstName}, a oração é o respirar da alma. Comece com pequenos momentos: uma Ave-Maria ao acordar, um Pai-Nosso antes de dormir. "Rezai sem cessar" (1Ts 5,17).`,
    },
    formacao: {
      high: `${firstName}, você busca conhecer profundamente a fé! O Catecismo e os Sacramentos são pilares da sua vida espiritual. Continue estudando e vivendo os ensinamentos da Igreja.`,
      medium: `${firstName}, você tem bom conhecimento da doutrina. Para crescer, leia o Catecismo da Igreja Católica e busque grupos de formação na sua paróquia.`,
      low: `${firstName}, conhecer a fé é fundamental. "A fé que não é pensada não é uma fé plena" (São João Paulo II). Comece pelo Catecismo Jovem (YouCat) ou participe da catequese para adultos.`,
    },
    devocoes: {
      high: `${firstName}, suas devoções demonstram um amor profundo pela Tradição da Igreja! A devoção a Nossa Senhora e aos Santos fortalece sua caminhada de fé.`,
      medium: `${firstName}, você tem boas práticas devocionais. Considere fazer a Consagração a Nossa Senhora e cultivar a devoção ao seu Santo padroeiro.`,
      low: `${firstName}, as devoções são auxílios preciosos na vida espiritual. Comece rezando o Terço diariamente - "o Rosário é a arma destes tempos" (São Pio de Pietrelcina).`,
    },
    testemunho: {
      high: `${firstName}, você é um verdadeiro apóstolo! "Ide e fazei discípulos" (Mt 28,19). Seu testemunho e generosidade edificam a Igreja. Continue sendo luz do mundo!`,
      medium: `${firstName}, você vive valores cristãos. Busque oportunidades de servir na comunidade e partilhar sua fé com alegria e naturalidade.`,
      low: `${firstName}, somos chamados a ser "sal da terra e luz do mundo". Comece vivendo o Evangelho em casa e no trabalho - o melhor testemunho é o exemplo de vida.`,
    },
  };

  if (percent >= 70) return diagnosticos[area].high;
  if (percent >= 40) return diagnosticos[area].medium;
  return diagnosticos[area].low;
};

// Recomendações personalizadas
const getRecomendacoes = (areaScores: ReturnType<typeof getAreaScores>) => {
  const recomendacoes: string[] = [];
  
  if (areaScores.eucaristica < 60) {
    recomendacoes.push("Participe da Santa Missa ao menos todo domingo e, se possível, durante a semana.");
    recomendacoes.push("Faça adoração ao Santíssimo Sacramento semanalmente.");
  }
  
  if (areaScores.oracao < 60) {
    recomendacoes.push("Estabeleça um horário fixo diário para oração pessoal (manhã ou noite).");
    recomendacoes.push("Reze o Santo Terço diariamente, meditando os mistérios.");
  }
  
  if (areaScores.formacao < 60) {
    recomendacoes.push("Confesse-se ao menos mensalmente para viver em estado de graça.");
    recomendacoes.push("Leia o Catecismo da Igreja Católica ou participe de grupos de estudo.");
  }
  
  if (areaScores.devocoes < 60) {
    recomendacoes.push("Faça a Consagração a Nossa Senhora (método de São Luís de Montfort).");
    recomendacoes.push("Cultive a devoção ao seu Santo padroeiro e peça sua intercessão.");
  }
  
  if (areaScores.testemunho < 60) {
    recomendacoes.push("Contribua com o dízimo e participe de algum grupo ou pastoral.");
    recomendacoes.push("Compartilhe sua fé com familiares e amigos através do seu testemunho.");
  }

  if (recomendacoes.length === 0) {
    recomendacoes.push("Continue aprofundando sua vida de oração com a Liturgia das Horas.");
    recomendacoes.push("Considere fazer um retiro espiritual anual para renovar sua fé.");
    recomendacoes.push("Seja um multiplicador: ajude outros a crescerem na fé católica.");
  }

  return recomendacoes.slice(0, 5);
};

// Orações sugeridas por nível
const getOracoesSugeridas = (score: number) => {
  if (score >= 75) {
    return [
      "Liturgia das Horas (Laudes e Vésperas)",
      "Lectio Divina diária",
      "Meditação dos Santos Padres",
      "Novena ao Espírito Santo",
      "Consagração diária a Nossa Senhora",
    ];
  }
  if (score >= 50) {
    return [
      "Santo Terço diário",
      "Oração do Ângelus (6h, 12h, 18h)",
      "Exame de Consciência noturno",
      "Novenas aos Santos",
      "Oração em família",
    ];
  }
  return [
    "Pai-Nosso, Ave-Maria e Glória (manhã e noite)",
    "Oração antes das refeições",
    "Santo Terço (ao menos aos sábados)",
    "Visita ao Santíssimo quando passar por uma Igreja",
    "Oração do Anjo da Guarda",
  ];
};

// Citações de Santos baseadas no nível
const getSantoCitacao = (score: number) => {
  if (score >= 75) {
    return {
      citacao: "Não basta ser bom, é preciso ser santo. A santidade não é luxo de poucos, é um dever de todos.",
      santo: "São João Paulo II",
      reflexao: "Você está no caminho da santidade! Continue perseverando."
    };
  }
  if (score >= 60) {
    return {
      citacao: "Tenha paciência com tudo, mas principalmente consigo mesmo. Não desanime ao considerar suas imperfeições.",
      santo: "São Francisco de Sales",
      reflexao: "Crescer na fé é um processo. Deus está trabalhando em você."
    };
  }
  if (score >= 40) {
    return {
      citacao: "Você não pode fazer coisas grandes, mas pode fazer coisas pequenas com grande amor.",
      santo: "Santa Teresa de Calcutá",
      reflexao: "Cada pequeno passo na direção de Deus é uma grande vitória."
    };
  }
  return {
    citacao: "Nunca é tarde demais para retornar a Deus. O amor de Deus por você é infinito.",
    santo: "Santo Agostinho",
    reflexao: "O próprio Santo Agostinho teve uma conversão tardia e se tornou um dos maiores santos da Igreja."
  };
};

// Versículo bíblico personalizado
const getVersiculoPersonalizado = (score: number, areaScores: ReturnType<typeof getAreaScores>) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];
  
  const versiculos: Record<string, { texto: string; referencia: string }> = {
    eucaristica: {
      texto: "Eu sou o pão vivo que desceu do céu. Quem come deste pão viverá eternamente.",
      referencia: "João 6,51"
    },
    oracao: {
      texto: "Pedi e vos será dado; buscai e encontrareis; batei e abrir-se-vos-á.",
      referencia: "Mateus 7,7"
    },
    formacao: {
      texto: "Conhecereis a verdade, e a verdade vos libertará.",
      referencia: "João 8,32"
    },
    devocoes: {
      texto: "Eis aqui a tua mãe. E dessa hora em diante, o discípulo a recebeu em sua casa.",
      referencia: "João 19,27"
    },
    testemunho: {
      texto: "Vós sois a luz do mundo. Não se pode esconder uma cidade situada sobre um monte.",
      referencia: "Mateus 5,14"
    }
  };
  
  return versiculos[weakestArea] || versiculos.oracao;
};

// Plano de 7 dias personalizado
const getPlano7Dias = (areaScores: ReturnType<typeof getAreaScores>) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];
  
  const planos: Record<string, Array<{ dia: string; acao: string; tempo: string }>> = {
    eucaristica: [
      { dia: "Domingo", acao: "Participe da Santa Missa com atenção especial", tempo: "1h" },
      { dia: "Segunda", acao: "Leia sobre a Eucaristia no Catecismo (parágrafos 1322-1419)", tempo: "15min" },
      { dia: "Terça", acao: "Faça uma Comunhão Espiritual durante o dia", tempo: "5min" },
      { dia: "Quarta", acao: "Visite o Santíssimo Sacramento na Igreja mais próxima", tempo: "15min" },
      { dia: "Quinta", acao: "Participe de uma Missa durante a semana (se possível)", tempo: "45min" },
      { dia: "Sexta", acao: "Reze diante do Sacrário, agradecendo pela Eucaristia", tempo: "10min" },
      { dia: "Sábado", acao: "Prepare-se para a Missa de domingo com exame de consciência", tempo: "10min" },
    ],
    oracao: [
      { dia: "Domingo", acao: "Reserve 15 minutos de oração em silêncio pela manhã", tempo: "15min" },
      { dia: "Segunda", acao: "Reze o Terço meditando os Mistérios Gozosos", tempo: "20min" },
      { dia: "Terça", acao: "Faça o Ângelus às 12h (onde quer que esteja)", tempo: "3min" },
      { dia: "Quarta", acao: "Leia e medite um Salmo (sugestão: Salmo 23)", tempo: "10min" },
      { dia: "Quinta", acao: "Reze pela sua família e amigos", tempo: "10min" },
      { dia: "Sexta", acao: "Faça exame de consciência antes de dormir", tempo: "10min" },
      { dia: "Sábado", acao: "Reze o Terço meditando os Mistérios Gloriosos", tempo: "20min" },
    ],
    formacao: [
      { dia: "Domingo", acao: "Leia o Evangelho do dia e reflita", tempo: "15min" },
      { dia: "Segunda", acao: "Estude sobre o Sacramento da Eucaristia", tempo: "20min" },
      { dia: "Terça", acao: "Leia sobre a vida de um Santo (sugestão: São José)", tempo: "15min" },
      { dia: "Quarta", acao: "Estude sobre o Sacramento da Confissão", tempo: "20min" },
      { dia: "Quinta", acao: "Pesquise sobre a história da sua paróquia", tempo: "15min" },
      { dia: "Sexta", acao: "Leia uma encíclica ou documento da Igreja", tempo: "20min" },
      { dia: "Sábado", acao: "Marque uma confissão para a próxima semana", tempo: "5min" },
    ],
    devocoes: [
      { dia: "Domingo", acao: "Reze o Terço em família ou sozinho", tempo: "20min" },
      { dia: "Segunda", acao: "Acenda uma vela e reze a Nossa Senhora", tempo: "10min" },
      { dia: "Terça", acao: "Pesquise sobre seu Santo padroeiro", tempo: "15min" },
      { dia: "Quarta", acao: "Comece uma Novena a um Santo de sua devoção", tempo: "10min" },
      { dia: "Quinta", acao: "Use água benta ao sair de casa, benzendo-se", tempo: "1min" },
      { dia: "Sexta", acao: "Reze a Via-Sacra (mesmo que sozinho)", tempo: "30min" },
      { dia: "Sábado", acao: "Reze o Terço meditando os Mistérios Luminosos", tempo: "20min" },
    ],
    testemunho: [
      { dia: "Domingo", acao: "Convide alguém para ir à Missa com você", tempo: "varies" },
      { dia: "Segunda", acao: "Faça um ato de caridade (ajude alguém em necessidade)", tempo: "30min" },
      { dia: "Terça", acao: "Compartilhe uma reflexão católica nas redes sociais", tempo: "5min" },
      { dia: "Quarta", acao: "Perdoe alguém que te magoou (em oração)", tempo: "10min" },
      { dia: "Quinta", acao: "Doe algo para a Igreja ou para os pobres", tempo: "varies" },
      { dia: "Sexta", acao: "Pratique o jejum ou abstinência em reparação", tempo: "todo o dia" },
      { dia: "Sábado", acao: "Reze por um familiar afastado da fé", tempo: "10min" },
    ],
  };
  
  return planos[weakestArea] || planos.oracao;
};

// Santos Protetores por área
const getSantoProtetor = (areaScores: ReturnType<typeof getAreaScores>) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];
  
  const santos: Record<string, { nome: string; titulo: string; oracao: string }> = {
    eucaristica: {
      nome: "São Pio de Pietrelcina",
      titulo: "Apóstolo da Eucaristia",
      oracao: "São Pio de Pietrelcina, vós que vivestes cada Missa como se fosse a primeira e a última, ajudai-me a amar a Eucaristia como vós a amastes. Amém."
    },
    oracao: {
      nome: "Santa Teresa de Ávila",
      titulo: "Doutora da Oração",
      oracao: "Santa Teresa de Ávila, mestra da vida interior, ensinai-me a cultivar a amizade com Deus através da oração. Ajudai-me a nunca abandonar esse trato de amor. Amém."
    },
    formacao: {
      nome: "Santo Tomás de Aquino",
      titulo: "Doutor Angélico",
      oracao: "Santo Tomás de Aquino, que unistes fé e razão de modo admirável, iluminai minha mente para conhecer mais profundamente a doutrina da Igreja. Amém."
    },
    devocoes: {
      nome: "São Luís Maria Grignion de Montfort",
      titulo: "Apóstolo de Maria",
      oracao: "São Luís de Montfort, que nos ensinastes o caminho a Jesus por Maria, ajudai-me a crescer na devoção à Santíssima Virgem. Amém."
    },
    testemunho: {
      nome: "São Francisco de Assis",
      titulo: "Patrono da Paz",
      oracao: "São Francisco de Assis, que pregastes o Evangelho com vossa vida antes das palavras, ajudai-me a ser testemunha viva de Cristo no mundo. Amém."
    },
  };
  
  return santos[weakestArea] || santos.oracao;
};

// Virtudes a desenvolver
const getVirtudes = (score: number, areaScores: ReturnType<typeof getAreaScores>) => {
  const virtudes = [];
  
  if (areaScores.eucaristica < 60) {
    virtudes.push({ nome: "Piedade", descricao: "Reverência e amor às coisas sagradas" });
  }
  if (areaScores.oracao < 60) {
    virtudes.push({ nome: "Perseverança", descricao: "Constância na vida de oração" });
  }
  if (areaScores.formacao < 60) {
    virtudes.push({ nome: "Prudência", descricao: "Discernimento para conhecer a vontade de Deus" });
  }
  if (areaScores.devocoes < 60) {
    virtudes.push({ nome: "Devoção", descricao: "Prontidão para servir a Deus" });
  }
  if (areaScores.testemunho < 60) {
    virtudes.push({ nome: "Caridade", descricao: "Amor a Deus e ao próximo" });
  }
  
  if (virtudes.length === 0) {
    virtudes.push(
      { nome: "Humildade", descricao: "Reconhecer que todo bem vem de Deus" },
      { nome: "Fortaleza", descricao: "Perseverar nas tribulações" },
      { nome: "Esperança", descricao: "Confiança nas promessas de Deus" }
    );
  }
  
  return virtudes.slice(0, 3);
};

export function ResultScreen({ score, level, userName, answers, onRestart }: ResultScreenProps) {
  const firstName = userName.split(" ")[0];
  const areaScores = getAreaScores(answers);
  const recomendacoes = getRecomendacoes(areaScores);
  const oracoes = getOracoesSugeridas(score);
  const santoCitacao = getSantoCitacao(score);
  const versiculoPersonalizado = getVersiculoPersonalizado(score, areaScores);
  const plano7Dias = getPlano7Dias(areaScores);
  const santoProtetor = getSantoProtetor(areaScores);
  const virtudes = getVirtudes(score, areaScores);

  const handleDownloadGuide = () => {
    try {
      generateCatholicGuidePDF({
        userName,
        score,
        levelTitle: level.title,
      });
      toast.success("PDF gerado com sucesso! Verifique seus downloads.");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Erro ao gerar o PDF. Tente novamente.");
    }
  };

  const handleShare = async () => {
    const text = `Fiz o quiz "Como é a sua vivência católica?" e obtive ${score}% - ${level.title}! Faça você também!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Quiz da Vivência Católica",
          text,
          url: window.location.href,
        });
      } catch {
        // User cancelled sharing
      }
    } else {
      await navigator.clipboard.writeText(text);
      toast.success("Texto copiado para compartilhar!");
    }
  };

  const getScoreColor = () => {
    if (score >= 75) return "text-green-600";
    if (score >= 50) return "text-accent";
    return "text-primary";
  };

  const getAreaColor = (percent: number) => {
    if (percent >= 70) return "bg-green-500";
    if (percent >= 40) return "bg-accent";
    return "bg-primary";
  };

  const areas = [
    { key: "eucaristica", label: "Vida Eucarística", icon: Church, score: areaScores.eucaristica },
    { key: "oracao", label: "Vida de Oração", icon: HandHeart, score: areaScores.oracao },
    { key: "formacao", label: "Formação e Sacramentos", icon: BookOpen, score: areaScores.formacao },
    { key: "devocoes", label: "Devoções", icon: Heart, score: areaScores.devocoes },
    { key: "testemunho", label: "Testemunho Cristão", icon: Star, score: areaScores.testemunho },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 animate-slide-up">
      {/* Header com resultado principal */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{level.emoji}</div>
          <h2 className="font-display text-xl text-muted-foreground mb-2">
            Parabéns, {firstName}!
          </h2>
          <h3 className="font-display text-2xl md:text-3xl text-primary mb-4">
            {level.title}
          </h3>
          
          {/* Score Circle */}
          <div className="relative w-36 h-36 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="72"
                cy="72"
                r="64"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                className="text-secondary"
              />
              <circle
                cx="72"
                cy="72"
                r="64"
                stroke="url(#goldGradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${(score / 100) * 402} 402`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(43 82% 46%)" />
                  <stop offset="100%" stopColor="hsl(38 90% 55%)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-bold ${getScoreColor()}`}>
                {score}%
              </span>
              <span className="text-sm text-muted-foreground">pontuação</span>
            </div>
          </div>

          <p className="text-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            {level.description}
          </p>
        </div>

        {/* Stats rápidos */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-secondary/50 rounded-xl p-4 text-center">
            <Trophy className="w-6 h-6 text-accent mx-auto mb-2" />
            <span className="text-sm text-muted-foreground">Nível</span>
            <p className="font-semibold text-foreground text-sm">{level.title.split(" ").slice(-1)}</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4 text-center">
            <Target className="w-6 h-6 text-primary mx-auto mb-2" />
            <span className="text-sm text-muted-foreground">Perguntas</span>
            <p className="font-semibold text-foreground">30/30</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4 text-center">
            <BookOpen className="w-6 h-6 text-accent mx-auto mb-2" />
            <span className="text-sm text-muted-foreground">Pontos</span>
            <p className="font-semibold text-foreground">{Math.round(score * 0.9)}/90</p>
          </div>
        </div>
      </div>

      {/* CITAÇÃO DO SANTO - NOVO */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20 mb-6 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-6xl text-primary/10">
          <Quote className="w-16 h-16" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg text-primary">Palavra de um Santo para Você</h3>
              <p className="text-sm text-muted-foreground">{santoCitacao.santo}</p>
            </div>
          </div>
          <blockquote className="text-xl italic text-foreground mb-4 leading-relaxed">
            "{santoCitacao.citacao}"
          </blockquote>
          <p className="text-muted-foreground text-sm bg-background/50 rounded-lg p-3">
            💡 {santoCitacao.reflexao}
          </p>
        </div>
      </div>

      {/* DIAGNÓSTICO COMPLETO */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
            <Target className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Diagnóstico Completo</h3>
            <p className="text-sm text-muted-foreground">Avaliação detalhada da sua vivência católica</p>
          </div>
        </div>

        {/* Barras de progresso por área */}
        <div className="space-y-4 mb-8">
          {areas.map((area) => (
            <div key={area.key}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <area.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{area.label}</span>
                </div>
                <span className="text-sm font-bold text-foreground">{area.score}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${getAreaColor(area.score)}`}
                  style={{ width: `${area.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Diagnósticos detalhados */}
        <div className="space-y-4">
          {areas.map((area) => (
            <div key={area.key} className="bg-secondary/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <area.icon className="w-5 h-5 text-accent" />
                <h4 className="font-semibold text-foreground">{area.label}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {getDiagnostico(area.key, area.score, userName)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SANTO PROTETOR - NOVO */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Seu Santo Protetor</h3>
            <p className="text-sm text-muted-foreground">Intercessor especial para sua caminhada</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center mb-4">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
            <Users className="w-10 h-10 text-accent" />
          </div>
          <h4 className="font-display text-2xl text-primary mb-1">{santoProtetor.nome}</h4>
          <p className="text-accent font-medium">{santoProtetor.titulo}</p>
        </div>

        <div className="bg-secondary/30 rounded-xl p-4">
          <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Cross className="w-4 h-4 text-primary" />
            Oração ao seu Santo Protetor
          </h5>
          <p className="text-muted-foreground italic leading-relaxed">
            {santoProtetor.oracao}
          </p>
        </div>
      </div>

      {/* VIRTUDES A DESENVOLVER - NOVO */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
            <Flame className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Virtudes para Desenvolver</h3>
            <p className="text-sm text-muted-foreground">Foco para seu crescimento espiritual</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {virtudes.map((virtude, index) => (
            <div key={index} className="bg-secondary/30 rounded-xl p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{virtude.nome}</h4>
              <p className="text-sm text-muted-foreground">{virtude.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PLANO DE 7 DIAS - NOVO */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Plano de 7 Dias para {firstName}</h3>
            <p className="text-sm text-muted-foreground">Desafio personalizado para fortalecer sua fé</p>
          </div>
        </div>

        <div className="space-y-3">
          {plano7Dias.map((dia, index) => (
            <div key={index} className="flex items-center gap-4 bg-secondary/30 rounded-xl p-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex flex-col items-center justify-center shrink-0">
                <span className="text-xs text-muted-foreground uppercase">Dia</span>
                <span className="text-2xl font-bold text-primary">{index + 1}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground">{dia.dia}</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">{dia.tempo}</span>
                </div>
                <p className="text-sm text-muted-foreground">{dia.acao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VERSÍCULO PERSONALIZADO - NOVO */}
      <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-6 md:p-8 border border-accent/30 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
            <Scroll className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Palavra de Deus para Você</h3>
            <p className="text-sm text-muted-foreground">Versículo para meditar esta semana</p>
          </div>
        </div>

        <div className="bg-background/50 rounded-xl p-6 text-center">
          <Cross className="w-10 h-10 text-primary mx-auto mb-4" />
          <blockquote className="text-xl italic text-foreground mb-3 leading-relaxed">
            "{versiculoPersonalizado.texto}"
          </blockquote>
          <cite className="text-accent font-semibold">— {versiculoPersonalizado.referencia}</cite>
        </div>
      </div>

      {/* CLASSIFICAÇÃO PERSONALIZADA */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-gradient flex items-center justify-center">
            <Star className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Classificação Personalizada</h3>
            <p className="text-sm text-muted-foreground">Seu nível na caminhada de fé</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-6">
          <div className="text-center">
            <span className="text-5xl mb-3 block">{level.emoji}</span>
            <h4 className="font-display text-2xl text-primary mb-2">{level.title}</h4>
            <p className="text-muted-foreground">{firstName}, você está no nível:</p>
          </div>
        </div>

        {/* Escala visual de níveis */}
        <div className="space-y-2 mb-6">
          {[
            { title: "Católico Praticante Exemplar", min: 90, emoji: "🏆" },
            { title: "Católico Comprometido", min: 75, emoji: "⭐" },
            { title: "Católico em Crescimento", min: 60, emoji: "🌱" },
            { title: "Católico em Busca", min: 40, emoji: "🔍" },
            { title: "Católico Distante", min: 20, emoji: "🏠" },
            { title: "Início da Jornada", min: 0, emoji: "✨" },
          ].map((lvl) => (
            <div
              key={lvl.title}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                level.title === lvl.title
                  ? "bg-gold-gradient text-accent-foreground"
                  : "bg-secondary/30 text-muted-foreground"
              }`}
            >
              <span className="text-xl">{lvl.emoji}</span>
              <span className={`flex-1 ${level.title === lvl.title ? "font-semibold" : ""}`}>
                {lvl.title}
              </span>
              <span className="text-sm">{lvl.min}%+</span>
            </div>
          ))}
        </div>
      </div>

      {/* GUIA EXCLUSIVO */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Guia Exclusivo para {firstName}</h3>
            <p className="text-sm text-muted-foreground">Orações e recomendações personalizadas</p>
          </div>
        </div>

        {/* Recomendações práticas */}
        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Recomendações para seu crescimento espiritual
          </h4>
          <ul className="space-y-3">
            {recomendacoes.map((rec, index) => (
              <li key={index} className="flex items-start gap-3 bg-secondary/30 rounded-lg p-3">
                <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {index + 1}
                </span>
                <span className="text-foreground">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Orações sugeridas */}
        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Cross className="w-5 h-5 text-primary" />
            Orações sugeridas para o seu nível
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {oracoes.map((oracao, index) => (
              <div key={index} className="flex items-center gap-3 bg-primary/5 rounded-lg p-3">
                <Heart className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground text-sm">{oracao}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA - Download do Guia PDF */}
      <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-2xl p-6 md:p-8 mb-6 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
            <Download className="w-8 h-8" />
          </div>
          <h4 className="font-display text-2xl mb-2">
            Baixe o Guia Completo da Vida Católica
          </h4>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            PDF exclusivo de 10 páginas com orações diárias, devoções, ensinamentos da Igreja e muito mais para aprofundar sua fé.
          </p>
          
          <Button
            onClick={handleDownloadGuide}
            className="h-14 px-10 bg-white text-primary hover:bg-white/90 font-semibold text-lg shadow-lg transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Baixar Guia da Vida Católica (PDF)
          </Button>
        </div>
      </div>

      {/* Ações secundárias */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Button
          onClick={handleShare}
          variant="outline"
          className="flex-1 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Compartilhar Resultado
        </Button>
        <Button
          onClick={onRestart}
          variant="outline"
          className="flex-1 h-12 border-border text-foreground hover:bg-secondary"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Refazer Quiz
        </Button>
      </div>

      {/* Card final */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-center">
        <h4 className="font-display text-xl mb-2">Continue sua Jornada de Fé, {firstName}!</h4>
        <p className="text-primary-foreground/80 text-sm mb-4">
          Acompanhe nosso conteúdo e receba reflexões diárias para crescer espiritualmente.
        </p>
        <Button
          variant="secondary"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Seguir no Instagram
        </Button>
      </div>
    </div>
  );
}

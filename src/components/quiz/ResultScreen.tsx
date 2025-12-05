import { ResultLevel } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { Download, Share2, RotateCcw, Trophy, Target, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface ResultScreenProps {
  score: number;
  level: ResultLevel;
  userName: string;
  onRestart: () => void;
}

export function ResultScreen({ score, level, userName, onRestart }: ResultScreenProps) {
  const handleDownloadGuide = () => {
    toast.success("Download iniciado! Verifique seu WhatsApp para receber o guia.");
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

  return (
    <div className="w-full max-w-lg mx-auto px-4 animate-slide-up">
      {/* Result Card */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{level.emoji}</div>
          <h2 className="font-display text-xl text-muted-foreground mb-2">
            Parabéns, {userName}!
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

          <p className="text-foreground text-lg leading-relaxed">
            {level.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
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

        {/* CTA Button */}
        <Button
          onClick={handleDownloadGuide}
          className="w-full h-14 bg-gold-gradient hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-gold-glow transition-all duration-300 mb-4"
        >
          <Download className="w-5 h-5 mr-2" />
          Baixar Guia da Vida Católica (PDF)
        </Button>

        <p className="text-center text-sm text-muted-foreground mb-6">
          Receba um guia exclusivo com orações, ensinamentos e dicas para crescer na fé!
        </p>

        {/* Secondary Actions */}
        <div className="flex gap-3">
          <Button
            onClick={handleShare}
            variant="outline"
            className="flex-1 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Compartilhar
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
      </div>

      {/* Additional Info Card */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-center">
        <h4 className="font-display text-xl mb-2">Continue sua Jornada de Fé</h4>
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

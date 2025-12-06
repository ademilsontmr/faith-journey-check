import { QuizQuestion } from "@/data/quizQuestions";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: QuizQuestion;
  selectedAnswer: number | null;
  onSelectAnswer: (points: number) => void;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-lg mx-auto px-4 animate-slide-up">
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-gradient text-accent-foreground font-bold text-lg">
            {question.id}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
        </div>

        <h2 className="font-display text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelectAnswer(option.points)}
              className={cn(
                "w-full p-4 rounded-xl text-left transition-all duration-300",
                "border-2 hover:shadow-md",
                selectedAnswer === option.points
                  ? "border-accent bg-accent/10 shadow-gold-glow"
                  : "border-border/50 bg-background hover:border-primary/30 hover:bg-secondary/50"
              )}
            >
              <span className="font-medium text-foreground">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

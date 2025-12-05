import { Cross, BookOpen } from "lucide-react";

export function QuizHeader() {
  return (
    <header className="text-center py-8 px-4 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Cross className="w-8 h-8 text-accent" />
        <BookOpen className="w-8 h-8 text-primary" />
      </div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
        Como é a sua vivência católica?
      </h1>
      <p className="text-muted-foreground text-lg max-w-md mx-auto">
        Descubra como está sua caminhada de fé através deste quiz simples e sincero.
      </p>
    </header>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function QuizCTA() {
    return (
        <div className="my-12 p-8 bg-gradient-to-br from-accent/15 via-accent/5 to-primary/10 rounded-2xl border border-accent/20 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="w-24 h-24 text-accent" />
            </div>

            <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-text mb-3">
                    Como está sua caminhada de fé?
                </h3>
                <p className="text-text-muted mb-6 max-w-2xl">
                    Muitos católicos sentem que poderiam viver sua fé com mais profundidade, mas não sabem por onde começar. Faça nosso quiz gratuito e receba um direcionamento personalizado para sua vida espiritual.
                </p>
                <Link to="/quiz">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-button-text font-bold px-8 shadow-lg shadow-accent/20 transition-all hover:scale-105">
                        Fazer o Quiz Agora
                    </Button>
                </Link>
            </div>
        </div>
    );
}

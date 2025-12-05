import { Link } from "react-router-dom";
import { Cross, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-display text-2xl font-bold">Bom Cristão</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Ajudando católicos a viverem sua fé de forma mais profunda e consciente. 
              Conteúdos, orações e ferramentas para sua caminhada espiritual.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quiz</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <Link to="/quiz" className="hover:text-primary-foreground transition-colors">
                  Fazer o Quiz
                </Link>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-primary-foreground transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-primary-foreground transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2024 Bom Cristão. Todos os direitos reservados.</p>
          <p className="mt-2">
            Feito com ❤️ para a glória de Deus
          </p>
        </div>
      </div>
    </footer>
  );
}

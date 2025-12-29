import { useState } from "react";
import { Link } from "react-router-dom";
import { Cross, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center">
              <Cross className="w-4 h-4 text-button-text" />
            </div>
            <span className="font-display text-xl font-bold text-accent">Bom Católico</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-text-muted hover:text-text transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-text-muted hover:text-text transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-text-muted hover:text-text transition-colors"
            >
              Depoimentos
            </button>
            <Link
              to="/blog"
              className="text-text-muted hover:text-text transition-colors"
            >
              Blog
            </Link>
            <Link to="/quiz">
              <Button className="bg-gradient-accent hover:opacity-90 text-button-text font-semibold">
                Fazer o Quiz
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-text" />
            ) : (
              <Menu className="w-6 h-6 text-text" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-left py-2 text-text-muted hover:text-text transition-colors"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-left py-2 text-text-muted hover:text-text transition-colors"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-left py-2 text-text-muted hover:text-text transition-colors"
              >
                Depoimentos
              </button>
              <Link
                to="/blog"
                className="text-left py-2 text-text-muted hover:text-text transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link to="/quiz" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-accent hover:opacity-90 text-button-text font-semibold">
                  Fazer o Quiz
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

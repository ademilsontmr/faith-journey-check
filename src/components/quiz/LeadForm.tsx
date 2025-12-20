import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Phone, Lock, Gift, Loader2 } from "lucide-react";

interface LeadFormProps {
  onSubmit: (name: string, whatsapp: string) => void;
  isSubmitting?: boolean;
}

export function LeadForm({ onSubmit, isSubmitting = false }: LeadFormProps) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errors, setErrors] = useState<{ name?: string; whatsapp?: string }>({});

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
  };

  const validate = () => {
    const newErrors: { name?: string; whatsapp?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = "Por favor, informe seu nome";
    }
    
    const whatsappNumbers = whatsapp.replace(/\D/g, "");
    if (whatsappNumbers.length < 10) {
      newErrors.whatsapp = "Por favor, informe um WhatsApp válido";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(name.trim(), whatsapp.replace(/\D/g, ""));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 animate-slide-up">
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-gradient mb-4">
            <Gift className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
            Seu resultado está pronto!
          </h2>
          <p className="text-muted-foreground">
            Informe seus dados para ver seu resultado e receber conteúdos exclusivos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Seu Nome
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 h-12 bg-background border-border focus:border-accent focus:ring-accent"
              />
            </div>
            {errors.name && (
              <p className="text-destructive text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-foreground font-medium">
              WhatsApp
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                value={whatsapp}
                onChange={handleWhatsAppChange}
                maxLength={16}
                className="pl-10 h-12 bg-background border-border focus:border-accent focus:ring-accent"
              />
            </div>
            {errors.whatsapp && (
              <p className="text-destructive text-sm">{errors.whatsapp}</p>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg">
            <Lock className="w-4 h-4 flex-shrink-0" />
            <span>Seus dados estão seguros e não serão compartilhados.</span>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gold-gradient hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-gold-glow transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Salvando...
              </>
            ) : (
              "Continuar para o Resultado"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

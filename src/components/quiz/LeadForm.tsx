import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Phone, Mail, CreditCard, Lock, Gift, Loader2 } from "lucide-react";

export interface CustomerData {
  name: string;
  email: string;
  phone: string;
  taxId: string; // CPF
}

interface LeadFormProps {
  onSubmit: (data: CustomerData) => void;
  isSubmitting?: boolean;
}

export function LeadForm({ onSubmit, isSubmitting = false }: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [taxId, setTaxId] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerData, string>>>({});

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
  };

  const validateCPF = (cpf: string): boolean => {
    const numbers = cpf.replace(/\D/g, "");
    if (numbers.length !== 11) return false;
    
    // Check for known invalid patterns
    if (/^(\d)\1+$/.test(numbers)) return false;
    
    // Validate first digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(numbers.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(numbers.charAt(9))) return false;
    
    // Validate second digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(numbers.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(numbers.charAt(10))) return false;
    
    return true;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleTaxIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setTaxId(formatted);
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof CustomerData, string>> = {};
    
    if (!name.trim()) {
      newErrors.name = "Por favor, informe seu nome";
    } else if (name.trim().length < 3) {
      newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    }

    if (!email.trim()) {
      newErrors.email = "Por favor, informe seu email";
    } else if (!validateEmail(email)) {
      newErrors.email = "Por favor, informe um email válido";
    }
    
    const phoneNumbers = phone.replace(/\D/g, "");
    if (phoneNumbers.length < 10) {
      newErrors.phone = "Por favor, informe um telefone válido";
    }

    const taxIdNumbers = taxId.replace(/\D/g, "");
    if (taxIdNumbers.length !== 11) {
      newErrors.taxId = "Por favor, informe um CPF válido";
    } else if (!validateCPF(taxId)) {
      newErrors.taxId = "CPF inválido";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.replace(/\D/g, ""),
        taxId: taxId.replace(/\D/g, ""),
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 animate-slide-up">
      <div className="bg-surface rounded-2xl shadow-soft p-6 md:p-8 border border-border/50">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent mb-4">
            <Gift className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
            Finalize sua compra
          </h2>
          <p className="text-text-muted">
            Informe seus dados para gerar o pagamento e liberar seu resultado.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-text font-medium">
              Nome Completo *
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="pl-10 h-12 bg-background border-border focus:border-accent focus:ring-accent"
              />
            </div>
            {errors.name && (
              <p className="text-error text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-text font-medium">
              Email *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="pl-10 h-12 bg-background border-border focus:border-accent focus:ring-accent"
              />
            </div>
            {errors.email && (
              <p className="text-error text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-text font-medium">
              Telefone / WhatsApp *
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <Input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={16}
                className="pl-10 h-12 bg-background border-border focus:border-accent focus:ring-accent"
              />
            </div>
            {errors.phone && (
              <p className="text-error text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="taxId" className="text-text font-medium">
              CPF *
            </Label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <Input
                id="taxId"
                type="text"
                placeholder="000.000.000-00"
                value={taxId}
                onChange={handleTaxIdChange}
                maxLength={14}
                className="pl-10 h-12 bg-background border-border focus:border-accent focus:ring-accent"
              />
            </div>
            {errors.taxId && (
              <p className="text-error text-sm">{errors.taxId}</p>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-text-muted bg-secondary/50 p-3 rounded-lg">
            <Lock className="w-4 h-4 flex-shrink-0" />
            <span>Seus dados estão seguros e protegidos.</span>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-glow transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processando...
              </>
            ) : (
              "Continuar para Pagamento"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

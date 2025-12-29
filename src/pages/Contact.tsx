import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, ArrowLeft, Mail, Instagram, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contato | Bom Católico</title>
                <meta name="description" content="Entre em contato com a equipe do Bom Católico. Estamos aqui para ouvir suas sugestões, dúvidas e partilhas sobre a fé." />
                <link rel="canonical" href="https://bomcatolico.com.br/contato" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <header className="bg-primary text-button-text py-4">
                    <div className="container mx-auto px-4 flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                                <Cross className="w-5 h-5 text-button-text" />
                            </div>
                            <span className="font-display text-xl font-bold">Bom Católico</span>
                        </Link>
                        <Link to="/quiz">
                            <Button variant="secondary" size="sm">
                                Fazer o Quiz
                            </Button>
                        </Link>
                    </div>
                </header>

                <div className="bg-background-muted/50 py-3">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link to="/" className="hover:text-accent">Home</Link>
                            <span>/</span>
                            <span className="text-text">Contato</span>
                        </nav>
                    </div>
                </div>

                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Voltar para Home
                        </Link>

                        <header className="mb-12">
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Entre em Contato
                            </h1>
                            <p className="text-xl text-text-muted leading-relaxed">
                                Tem alguma dúvida, sugestão ou gostaria de partilhar algo conosco?
                                Estamos à disposição para ouvir você.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <div>
                                <h2 className="font-display text-2xl font-bold text-text mb-6">Informações de Contato</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                            <Mail className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-text">E-mail</h3>
                                            <p className="text-text-muted">contato@bomcatolico.com.br</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                            <Instagram className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-text">Instagram</h3>
                                            <p className="text-text-muted">@bomcatolico</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                            <Youtube className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-text">YouTube</h3>
                                            <p className="text-text-muted">Bom Católico</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 bg-surface rounded-2xl border border-border/50">
                                    <h3 className="font-display text-lg font-bold text-text mb-2">Horário de Atendimento</h3>
                                    <p className="text-text-muted text-sm">
                                        Nossa equipe responde às mensagens de segunda a sexta-feira, das 09h às 18h.
                                        Tentamos responder a todos em até 48 horas úteis.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-surface p-8 rounded-2xl border border-border/50 shadow-sm">
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Nome Completo</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text mb-1">E-mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">Assunto</label>
                                        <select
                                            id="subject"
                                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                                        >
                                            <option value="duvida">Dúvida</option>
                                            <option value="sugestao">Sugestão</option>
                                            <option value="parceria">Parceria</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Mensagem</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                                            placeholder="Como podemos ajudar?"
                                        ></textarea>
                                    </div>
                                    <Button className="w-full bg-accent hover:bg-accent/90 text-button-text font-semibold gap-2 py-6">
                                        <Send className="w-4 h-4" />
                                        Enviar Mensagem
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </article>

                <Footer />
            </div>
        </>
    );
}

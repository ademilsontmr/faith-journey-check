import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <title>Política de Privacidade | Bom Católico</title>
                <meta name="description" content="Leia a política de privacidade do site Bom Católico. Saiba como coletamos, usamos e protegemos suas informações pessoais." />
                <link rel="canonical" href="https://bomcatolico.com.br/privacidade" />
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
                            <span className="text-text">Política de Privacidade</span>
                        </nav>
                    </div>
                </div>

                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Voltar para Home
                        </Link>

                        <header className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                                    Legal
                                </span>
                                <span className="flex items-center gap-1">
                                    <ShieldCheck className="w-4 h-4" />
                                    Atualizado em 29 de Dezembro, 2024
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Política de Privacidade
                            </h1>
                        </header>

                        <div className="prose prose-lg max-w-none text-text">
                            <p className="leading-relaxed mb-6">
                                No Bom Católico, a sua privacidade é de extrema importância para nós. Esta Política de Privacidade descreve os tipos de informações pessoais que coletamos, como as utilizamos e as medidas que tomamos para protegê-las.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Coleta de Informações
                            </h2>
                            <p className="leading-relaxed mb-6">
                                Coletamos informações que você nos fornece voluntariamente ao participar de nosso quiz, inscrever-se em nossa newsletter ou entrar em contato conosco. Isso pode incluir seu nome, endereço de e-mail e respostas fornecidas no quiz.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. Uso das Informações
                            </h2>
                            <p className="leading-relaxed mb-6">
                                As informações coletadas são utilizadas para:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Fornecer resultados personalizados do quiz e orientações espirituais.</li>
                                <li>Enviar conteúdos relevantes, atualizações e newsletters (caso você tenha optado por recebê-los).</li>
                                <li>Responder a suas dúvidas e solicitações de contato.</li>
                                <li>Melhorar a experiência do usuário e o conteúdo de nosso site.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Proteção de Dados
                            </h2>
                            <p className="leading-relaxed mb-6">
                                Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais. Seus dados são armazenados em ambientes seguros e o acesso é limitado a colaboradores autorizados que precisam dessas informações para realizar suas tarefas.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                4. Compartilhamento com Terceiros
                            </h2>
                            <p className="leading-relaxed mb-6">
                                Não vendemos, trocamos ou transferimos suas informações de identificação pessoal para terceiros sem o seu consentimento, exceto quando necessário para cumprir a lei ou proteger nossos direitos. Podemos utilizar serviços de terceiros confiáveis para nos ajudar a operar nosso site ou conduzir nossos negócios, desde que essas partes concordem em manter essas informações confidenciais.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                5. Cookies
                            </h2>
                            <p className="leading-relaxed mb-6">
                                Podemos usar cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos que um site ou seu provedor de serviços transfere para o disco rígido do seu computador através do seu navegador (se você permitir) que permite que os sistemas do site ou do provedor de serviços reconheçam seu navegador e capturem e lembrem certas informações.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                6. Seus Direitos
                            </h2>
                            <p className="leading-relaxed mb-6">
                                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que temos em nosso poder. Se desejar exercer esses direitos, entre em contato conosco.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                7. Alterações nesta Política
                            </h2>
                            <p className="leading-relaxed mb-6">
                                Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página com a data de atualização revisada.
                            </p>

                            <p className="mt-12 text-sm text-text-muted italic">
                                Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco através da nossa página de Contato.
                            </p>
                        </div>
                    </div>
                </article>

                <Footer />
            </div>
        </>
    );
}

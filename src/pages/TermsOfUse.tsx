import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

export default function TermsOfUse() {
    return (
        <>
            <Helmet>
                <title>Termos de Uso | Bom Católico</title>
                <meta name="description" content="Leia os termos de uso do site Bom Católico. Entenda as regras e diretrizes para utilização de nossos conteúdos e serviços." />
                <link rel="canonical" href="https://bomcatolico.com.br/termos" />
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
                            <span className="text-text">Termos de Uso</span>
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
                                    <FileText className="w-4 h-4" />
                                    Atualizado em 29 de Dezembro, 2024
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Termos de Uso
                            </h1>
                        </header>

                        <div className="prose prose-lg max-w-none text-text">
                            <p className="leading-relaxed mb-6">
                                Bem-vindo ao Bom Católico. Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, por favor, não utilize nosso site.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Aceitação dos Termos
                            </h2>
                            <p className="leading-relaxed mb-6">
                                O uso deste site constitui a aceitação plena e sem reservas de todos os termos e condições aqui estabelecidos. Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio. Recomendamos a revisão periódica desta página.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. Propriedade Intelectual
                            </h2>
                            <p className="leading-relaxed mb-6">
                                Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, ícones, imagens e software, é de propriedade do Bom Católico ou de seus fornecedores de conteúdo e está protegido pelas leis brasileiras e internacionais de direitos autorais. A reprodução, distribuição ou modificação de qualquer conteúdo sem autorização prévia por escrito é estritamente proibida.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Uso do Conteúdo
                            </h2>
                            <p className="leading-relaxed mb-6">
                                O conteúdo deste site é fornecido apenas para fins informativos e de formação espiritual. Você pode visualizar, baixar e imprimir partes do conteúdo para seu uso pessoal e não comercial, desde que mantenha intactos todos os avisos de direitos autorais e outros avisos de propriedade.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                4. Isenção de Responsabilidade
                            </h2>
                            <p className="leading-relaxed mb-6">
                                Embora nos esforcemos para fornecer informações precisas e atualizadas, o Bom Católico não garante a exatidão, integridade ou adequação das informações contidas neste site. O uso das informações é por sua conta e risco. Não nos responsabilizamos por quaisquer danos diretos ou indiretos decorrentes do uso ou da incapacidade de usar este site.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                5. Links para Terceiros
                            </h2>
                            <p className="leading-relaxed mb-6">
                                Nosso site pode conter links para sites de terceiros. Esses links são fornecidos apenas para sua conveniência. Não temos controle sobre o conteúdo desses sites e não assumimos qualquer responsabilidade por eles ou por qualquer perda ou dano que possa surgir do seu uso.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                6. Privacidade
                            </h2>
                            <p className="leading-relaxed mb-6">
                                O uso deste site também é regido pela nossa Política de Privacidade, que descreve como coletamos, usamos e protegemos suas informações pessoais.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                7. Lei Aplicável
                            </h2>
                            <p className="leading-relaxed mb-6">
                                Estes termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais competentes no Brasil.
                            </p>

                            <p className="mt-12 text-sm text-text-muted italic">
                                Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através da nossa página de Contato.
                            </p>
                        </div>
                    </div>
                </article>

                <Footer />
            </div>
        </>
    );
}

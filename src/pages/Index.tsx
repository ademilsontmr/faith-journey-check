import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Quiz: Como é a sua vivência católica? | Bom Católico</title>
        <meta name="description" content="Descubra como está sua caminhada de fé através deste quiz simples e sincero. Avalie sua participação na vida sacramental da Igreja Católica." />
        <meta name="keywords" content="quiz católico, fé católica, vida cristã, sacramentos, missa, oração, terço, confissão, teste de fé, avaliação espiritual" />
        <link rel="canonical" href="https://bomcatolico.com.br/" />
        <meta property="og:title" content="Quiz: Como é a sua vivência católica?" />
        <meta property="og:description" content="Descubra como está sua caminhada de fé através deste quiz simples e sincero." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bomcatolico.com.br/" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
      </div>
    </>
  );
};

export default Index;

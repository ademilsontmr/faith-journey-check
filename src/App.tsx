import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import QuizPage from "./pages/QuizPage";
import CheckoutPage from "./pages/CheckoutPage";
import ResultadoPage from "./pages/ResultadoPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import BlogPage from "./pages/BlogPage";
import ComoRezarRosario from "./pages/blog/ComoRezarRosario";
import SeteSacramentos from "./pages/blog/SeteSacramentos";
import ImportanciaConfissao from "./pages/blog/ImportanciaConfissao";
import SantosPadroeiros from "./pages/blog/SantosPadroeiros";
import JejumAbstinencia from "./pages/blog/JejumAbstinencia";
import MissaDominical from "./pages/blog/MissaDominical";
import VidaOracao from "./pages/blog/VidaOracao";
import SignificadoMissa from "./pages/blog/SignificadoMissa";
import ExameConsciencia from "./pages/blog/ExameConsciencia";
import VirgemMaria from "./pages/blog/VirgemMaria";
import DonsEspiritoSanto from "./pages/blog/DonsEspiritoSanto";
import LectioDivina from "./pages/blog/LectioDivina";
import CastidadeMundoModerno from "./pages/blog/CastidadeMundoModerno";
import DoutrinaSocial from "./pages/blog/DoutrinaSocial";
import DiscernimentoVocacional from "./pages/blog/DiscernimentoVocacional";
import EucaristiaPresencaReal from "./pages/blog/EucaristiaPresencaReal";
import AdoracaoEucaristica from "./pages/blog/AdoracaoEucaristica";
import OQueEPurgatorio from "./pages/blog/OQueEPurgatorio";
import ComoViverQuaresma from "./pages/blog/ComoViverQuaresma";
import AnjosDaGuarda from "./pages/blog/AnjosDaGuarda";
import SignificadoCrucifixo from "./pages/blog/SignificadoCrucifixo";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/resultado" element={<ResultadoPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/termos" element={<TermsOfUse />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog/como-rezar-rosario" element={<ComoRezarRosario />} />
            <Route path="/blog/sete-sacramentos" element={<SeteSacramentos />} />
            <Route path="/blog/importancia-confissao" element={<ImportanciaConfissao />} />
            <Route path="/blog/santos-padroeiros" element={<SantosPadroeiros />} />
            <Route path="/blog/jejum-abstinencia" element={<JejumAbstinencia />} />
            <Route path="/blog/missa-dominical" element={<MissaDominical />} />
            <Route path="/blog/vida-oracao" element={<VidaOracao />} />
            <Route path="/blog/significado-missa" element={<SignificadoMissa />} />
            <Route path="/blog/exame-consciencia" element={<ExameConsciencia />} />
            <Route path="/blog/virgem-maria" element={<VirgemMaria />} />
            <Route path="/blog/dons-espirito-santo" element={<DonsEspiritoSanto />} />
            <Route path="/blog/lectio-divina" element={<LectioDivina />} />
            <Route path="/blog/castidade-mundo-moderno" element={<CastidadeMundoModerno />} />
            <Route path="/blog/doutrina-social" element={<DoutrinaSocial />} />
            <Route path="/blog/discernimento-vocacional" element={<DiscernimentoVocacional />} />
            <Route path="/blog/eucaristia-presenca-real" element={<EucaristiaPresencaReal />} />
            <Route path="/blog/adoracao-eucaristica" element={<AdoracaoEucaristica />} />
            <Route path="/blog/o-que-e-purgatorio" element={<OQueEPurgatorio />} />
            <Route path="/blog/como-viver-quaresma" element={<ComoViverQuaresma />} />
            <Route path="/blog/anjos-da-guarda" element={<AnjosDaGuarda />} />
            <Route path="/blog/significado-crucifixo" element={<SignificadoCrucifixo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

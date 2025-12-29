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
import LegadoJubileu2025 from "./pages/blog/LegadoJubileu2025";
import GuiaIndulgenciaPlenaria from "./pages/blog/GuiaIndulgenciaPlenaria";
import MudancasIgrejaPos2025 from "./pages/blog/MudancasIgrejaPos2025";
import OracoesEsperanca2026 from "./pages/blog/OracoesEsperanca2026";
import PeregrinacaoLocal from "./pages/blog/PeregrinacaoLocal";
import FeSaudeMental from "./pages/blog/FeSaudeMental";
import PoderDoSilencio from "./pages/blog/PoderDoSilencio";
import SantosEDepressao from "./pages/blog/SantosEDepressao";
import OracaoEMindfulness from "./pages/blog/OracaoEMindfulness";
import LidandoComLuto from "./pages/blog/LidandoComLuto";
import FeFilhosEraDigital from "./pages/blog/FeFilhosEraDigital";
import IgrejaDomestica from "./pages/blog/IgrejaDomestica";
import HomeschoolingCatolico from "./pages/blog/HomeschoolingCatolico";
import NamoroSanto2026 from "./pages/blog/NamoroSanto2026";
import PapelDosAvos from "./pages/blog/PapelDosAvos";
import PoderDaConfissao from "./pages/blog/PoderDaConfissao";
import EucaristiaDiaADia from "./pages/blog/EucaristiaDiaADia";
import TercoSemDistracao from "./pages/blog/TercoSemDistracao";
import SignificadoSacramentais from "./pages/blog/SignificadoSacramentais";
import LectioDivinaGuia from "./pages/blog/LectioDivinaGuia";
import GracaSantificante from "./pages/blog/GracaSantificante";
import VirtudesCardeais from "./pages/blog/VirtudesCardeais";
import DoutrinaPurgatorio from "./pages/blog/DoutrinaPurgatorio";
import DizimoECaridade from "./pages/blog/DizimoECaridade";
import SantosPaisEMaes from "./pages/blog/SantosPaisEMaes";
import CarloAcutisInternet from "./pages/blog/CarloAcutisInternet";
import SantaDulcePobres from "./pages/blog/SantaDulcePobres";
import EscolherSantoPadroeiro from "./pages/blog/EscolherSantoPadroeiro";
import SaoBentoProtecao from "./pages/blog/SaoBentoProtecao";
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
            <Route path="/blog/legado-jubileu-2025" element={<LegadoJubileu2025 />} />
            <Route path="/blog/guia-indulgencia-plenaria" element={<GuiaIndulgenciaPlenaria />} />
            <Route path="/blog/mudancas-igreja-pos-2025" element={<MudancasIgrejaPos2025 />} />
            <Route path="/blog/oracoes-esperanca-2026" element={<OracoesEsperanca2026 />} />
            <Route path="/blog/peregrinacao-local" element={<PeregrinacaoLocal />} />
            <Route path="/blog/fe-e-saude-mental-ansiedade" element={<FeSaudeMental />} />
            <Route path="/blog/poder-do-silencio-burnout" element={<PoderDoSilencio />} />
            <Route path="/blog/santos-depressao-noite-escura" element={<SantosEDepressao />} />
            <Route path="/blog/oracao-vs-mindfulness-cristao" element={<OracaoEMindfulness />} />
            <Route path="/blog/como-lidar-com-luto-fe-crista" element={<LidandoComLuto />} />
            <Route path="/blog/como-transmitir-fe-filhos-era-digital" element={<FeFilhosEraDigital />} />
            <Route path="/blog/igreja-domestica-oracao-familia" element={<IgrejaDomestica />} />
            <Route path="/blog/homeschooling-catolico-educacao-classica" element={<HomeschoolingCatolico />} />
            <Route path="/blog/namoro-santo-castidade-2026" element={<NamoroSanto2026 />} />
            <Route path="/blog/papel-dos-avos-transmissao-fe" element={<PapelDosAvos />} />
            <Route path="/blog/poder-da-confissao-guia-preparacao" element={<PoderDaConfissao />} />
            <Route path="/blog/eucaristia-missa-diaria-segredo-santos" element={<EucaristiaDiaADia />} />
            <Route path="/blog/como-rezar-terco-sem-distracoes" element={<TercoSemDistracao />} />
            <Route path="/blog/significado-sacramentais-catolicos" element={<SignificadoSacramentais />} />
            <Route path="/blog/lectio-divina-guia-passo-a-passo" element={<LectioDivinaGuia />} />
            <Route path="/blog/o-que-e-graca-santificante-amizade-deus" element={<GracaSantificante />} />
            <Route path="/blog/virtudes-cardeais-guia-pratico-cotidiano" element={<VirtudesCardeais />} />
            <Route path="/blog/sete-dons-espirito-santo-como-usar" element={<DonsEspiritoSanto />} />
            <Route path="/blog/doutrina-purgatorio-purificacao-final" element={<DoutrinaPurgatorio />} />
            <Route path="/blog/importancia-dizimo-caridade-crista" element={<DizimoECaridade />} />
            <Route path="/blog/santos-pais-maes-santidade-matrimonio" element={<SantosPaisEMaes />} />
            <Route path="/blog/carlo-acutis-padroeiro-internet-eucaristia" element={<CarloAcutisInternet />} />
            <Route path="/blog/santa-dulce-dos-pobres-legado-caridade" element={<SantaDulcePobres />} />
            <Route path="/blog/como-escolher-santo-padroeiro-guia" element={<EscolherSantoPadroeiro />} />
            <Route path="/blog/vida-sao-bento-protecao-contra-mal" element={<SaoBentoProtecao />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

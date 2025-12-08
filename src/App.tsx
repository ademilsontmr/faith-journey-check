import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import QuizPage from "./pages/QuizPage";
import DadosPage from "./pages/DadosPage";
import PagamentoPage from "./pages/PagamentoPage";
import ResultadoPage from "./pages/ResultadoPage";
import BlogPage from "./pages/BlogPage";
import ComoRezarRosario from "./pages/blog/ComoRezarRosario";
import SeteSacramentos from "./pages/blog/SeteSacramentos";
import ImportanciaConfissao from "./pages/blog/ImportanciaConfissao";
import SantosPadroeiros from "./pages/blog/SantosPadroeiros";
import JejumAbstinencia from "./pages/blog/JejumAbstinencia";
import MissaDominical from "./pages/blog/MissaDominical";
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
            <Route path="/dados" element={<DadosPage />} />
            <Route path="/pagamento" element={<PagamentoPage />} />
            <Route path="/resultado" element={<ResultadoPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/como-rezar-rosario" element={<ComoRezarRosario />} />
            <Route path="/blog/sete-sacramentos" element={<SeteSacramentos />} />
            <Route path="/blog/importancia-confissao" element={<ImportanciaConfissao />} />
            <Route path="/blog/santos-padroeiros" element={<SantosPadroeiros />} />
            <Route path="/blog/jejum-abstinencia" element={<JejumAbstinencia />} />
            <Route path="/blog/missa-dominical" element={<MissaDominical />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

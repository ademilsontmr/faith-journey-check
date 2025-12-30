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
import OPecadoOriginalRedencao from "./pages/blog/OPecadoOriginalRedencao";
import OInfernoCeuPurgatorio from "./pages/blog/OInfernoCeuPurgatorio";
import AIgrejaCorpoDeCristo from "./pages/blog/AIgrejaCorpoDeCristo";
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
import PlanoLeituraBiblia2026 from "./pages/blog/PlanoLeituraBiblia2026";
import OsQuatroEvangelhos from "./pages/blog/OsQuatroEvangelhos";
import ParabolasDeJesus from "./pages/blog/ParabolasDeJesus";
import EvangelizarAmigos from "./pages/blog/EvangelizarAmigos";
import ComunidadeParoquial from "./pages/blog/ComunidadeParoquial";
import AnoLiturgicoGuia from "./pages/blog/AnoLiturgicoGuia";
import AdventoQuaresmaPreparacao from "./pages/blog/AdventoQuaresmaPreparacao";
import VigiliaPascalSignificado from "./pages/blog/VigiliaPascalSignificado";
import CorpusChristiPresencaReal from "./pages/blog/CorpusChristiPresencaReal";
import DomingoDiaDoSenhor from "./pages/blog/DomingoDiaDoSenhor";
import PorQueHonrarMaria from "./pages/blog/PorQueHonrarMaria";
import RosarioArmaEspiritual from "./pages/blog/RosarioArmaEspiritual";
import NossaSenhoraFatimaMensagem from "./pages/blog/NossaSenhoraFatimaMensagem";
import EscapularioCarmoSignificado from "./pages/blog/EscapularioCarmoSignificado";
import ConsagracaoMarianaGuia from "./pages/blog/ConsagracaoMarianaGuia";
import ProsperidadeEspiritualVsMaterial from "./pages/blog/ProsperidadeEspiritualVsMaterial";
import TrabalhoDignoVocacao from "./pages/blog/TrabalhoDignoVocacao";
import GenerosidadeDesprendimento from "./pages/blog/GenerosidadeDesprendimento";
import PorQueRezarParaSantos from "./pages/blog/PorQueRezarParaSantos";
import DiferencaCatolicosEvangelicos from "./pages/blog/DiferencaCatolicosEvangelicos";
import ComoSeConfessarGuia from "./pages/blog/ComoSeConfessarGuia";
import SacramentoBatismo from "./pages/blog/SacramentoBatismo";
import SacramentoCrisma from "./pages/blog/SacramentoCrisma";
import SacramentoEucaristia from "./pages/blog/SacramentoEucaristia";
import SacramentoConfissao from "./pages/blog/SacramentoConfissao";
import SacramentoUncaoEnfermos from "./pages/blog/SacramentoUncaoEnfermos";
import SacramentoOrdem from "./pages/blog/SacramentoOrdem";
import SacramentoMatrimonio from "./pages/blog/SacramentoMatrimonio";
import PrimeiroMandamento from "./pages/blog/PrimeiroMandamento";
import SegundoMandamento from "./pages/blog/SegundoMandamento";
import TerceiroMandamento from "./pages/blog/TerceiroMandamento";
import QuartoMandamento from "./pages/blog/QuartoMandamento";
import QuintoMandamento from "./pages/blog/QuintoMandamento";
import SextoMandamento from "./pages/blog/SextoMandamento";
import SetimoMandamento from "./pages/blog/SetimoMandamento";
import OitavoMandamento from "./pages/blog/OitavoMandamento";
import NonoMandamento from "./pages/blog/NonoMandamento";
import DecimoMandamento from "./pages/blog/DecimoMandamento";
import DomSabedoria from "./pages/blog/DomSabedoria";
import DomEntendimento from "./pages/blog/DomEntendimento";
import DomConselho from "./pages/blog/DomConselho";
import DomFortaleza from "./pages/blog/DomFortaleza";
import DomCiencia from "./pages/blog/DomCiencia";
import DomPiedade from "./pages/blog/DomPiedade";
import DomTemorDeus from "./pages/blog/DomTemorDeus";
import PecadoSoberba from "./pages/blog/PecadoSoberba";
import PecadoAvareza from "./pages/blog/PecadoAvareza";
import PecadoLuxuria from "./pages/blog/PecadoLuxuria";
import PecadoInveja from "./pages/blog/PecadoInveja";
import PecadoGula from "./pages/blog/PecadoGula";
import PecadoIra from "./pages/blog/PecadoIra";
import PecadoPreguica from "./pages/blog/PecadoPreguica";
import OQueAconteceDepoisMorte from "./pages/blog/OQueAconteceDepoisMorte";
import SegundaVindaCristoFimTempos from "./pages/blog/SegundaVindaCristoFimTempos";
import JuizoParticularEFinal from "./pages/blog/JuizoParticularEFinal";
import RessurreicaoDaCarneEsperanca from "./pages/blog/RessurreicaoDaCarneEsperanca";
import PrepararParaEternidade2026 from "./pages/blog/PrepararParaEternidade2026";
import SaoFranciscoEcologia from "./pages/blog/SaoFranciscoEcologia";
import RetiroEspiritualEmCasa from "./pages/blog/RetiroEspiritualEmCasa";
import DirecaoEspiritualImportancia from "./pages/blog/DirecaoEspiritualImportancia";
import SantaTeresinhaPequenaVia from "./pages/blog/SantaTeresinhaPequenaVia";
import PapelDosLeigosNaIgreja from "./pages/blog/PapelDosLeigosNaIgreja";
import BelezaDaLiturgia from "./pages/blog/BelezaDaLiturgia";
import BibliaECiencia from "./pages/blog/BibliaECiencia";
import CombateEspiritualVicios from "./pages/blog/CombateEspiritualVicios";
import SantaFaustinaMisericordia from "./pages/blog/SantaFaustinaMisericordia";
import SaoJoseModeloPai from "./pages/blog/SaoJoseModeloPai";
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
            <Route path="/blog/como-ler-biblia-em-um-ano-plano-2026" element={<PlanoLeituraBiblia2026 />} />
            <Route path="/blog/os-quatro-evangelhos-diferencas-riquezas" element={<OsQuatroEvangelhos />} />
            <Route path="/blog/parabolas-jesus-licoes-sabedoria-moderna" element={<ParabolasDeJesus />} />
            <Route path="/blog/como-falar-de-deus-amigos-nao-crentes" element={<EvangelizarAmigos />} />
            <Route path="/blog/importancia-pertencer-comunidade-paroquial" element={<ComunidadeParoquial />} />
            <Route path="/blog/ano-liturgico-guia-cores-tempos" element={<AnoLiturgicoGuia />} />
            <Route path="/blog/advento-quaresma-como-se-preparar" element={<AdventoQuaresmaPreparacao />} />
            <Route path="/blog/significado-vigilia-pascal-noite-santa" element={<VigiliaPascalSignificado />} />
            <Route path="/blog/corpus-christi-presenca-real-jesus-eucaristia" element={<CorpusChristiPresencaReal />} />
            <Route path="/blog/como-viver-domingo-dia-do-senhor" element={<DomingoDiaDoSenhor />} />
            <Route path="/blog/por-que-catolicos-honram-maria-dogma-devocao" element={<PorQueHonrarMaria />} />
            <Route path="/blog/rosario-arma-espiritual-desafios-2026" element={<RosarioArmaEspiritual />} />
            <Route path="/blog/nossa-senhora-fatima-mensagem-oracao-penitencia" element={<NossaSenhoraFatimaMensagem />} />
            <Route path="/blog/escapulario-carmo-significado-promessas" element={<EscapularioCarmoSignificado />} />
            <Route path="/blog/consagracao-nossa-senhora-guia-pratico" element={<ConsagracaoMarianaGuia />} />
            <Route path="/blog/o-que-acontece-depois-da-morte-ceu-inferno-purgatorio" element={<OQueAconteceDepoisMorte />} />
            <Route path="/blog/segunda-vinda-cristo-fim-dos-tempos-parusia" element={<SegundaVindaCristoFimTempos />} />
            <Route path="/blog/juizo-particular-e-juizo-final-diferencas" element={<JuizoParticularEFinal />} />
            <Route path="/blog/ressurreicao-da-carne-nossa-esperanca-vida-eterna" element={<RessurreicaoDaCarneEsperanca />} />
            <Route path="/blog/como-se-preparar-para-eternidade-dia-a-dia" element={<PrepararParaEternidade2026 />} />
            <Route path="/blog/sao-francisco-ecologia-integral" element={<SaoFranciscoEcologia />} />
            <Route path="/blog/como-fazer-retiro-espiritual-em-casa" element={<RetiroEspiritualEmCasa />} />
            <Route path="/blog/importancia-direcao-espiritual-caminhada-fe" element={<DirecaoEspiritualImportancia />} />
            <Route path="/blog/santa-teresinha-pequena-via-santidade" element={<SantaTeresinhaPequenaVia />} />
            <Route path="/blog/protagonismo-leigos-missao-igreja-hoje" element={<PapelDosLeigosNaIgreja />} />
            <Route path="/blog/beleza-liturgia-simbolos-ritos-importancia" element={<BelezaDaLiturgia />} />
            <Route path="/blog/biblia-ciencia-dialogo-fe-razao-igreja" element={<BibliaECiencia />} />
            <Route path="/blog/combate-espiritual-vencer-vicios-graca-deus" element={<CombateEspiritualVicios />} />
            <Route path="/blog/santa-faustina-divina-misericordia-apelo-jesus" element={<SantaFaustinaMisericordia />} />
            <Route path="/blog/sao-jose-modelo-pai-protetor" element={<SaoJoseModeloPai />} />
            <Route path="/blog/pecado-original-redencao" element={<OPecadoOriginalRedencao />} />
            <Route path="/blog/ceu-inferno-purgatorio" element={<OInfernoCeuPurgatorio />} />
            <Route path="/blog/igreja-corpo-cristo" element={<AIgrejaCorpoDeCristo />} />
            <Route path="/blog/prosperidade-espiritual-vs-material" element={<ProsperidadeEspiritualVsMaterial />} />
            <Route path="/blog/trabalho-digno-vocacao" element={<TrabalhoDignoVocacao />} />
            <Route path="/blog/generosidade-desprendimento" element={<GenerosidadeDesprendimento />} />
            <Route path="/blog/por-que-catolicos-rezam-santos" element={<PorQueRezarParaSantos />} />
            <Route path="/blog/diferenca-catolicos-evangelicos" element={<DiferencaCatolicosEvangelicos />} />
            <Route path="/blog/como-se-confessar-guia-completo" element={<ComoSeConfessarGuia />} />
            <Route path="/blog/sacramento-batismo" element={<SacramentoBatismo />} />
            <Route path="/blog/sacramento-crisma" element={<SacramentoCrisma />} />
            <Route path="/blog/sacramento-eucaristia" element={<SacramentoEucaristia />} />
            <Route path="/blog/sacramento-confissao" element={<SacramentoConfissao />} />
            <Route path="/blog/sacramento-uncao-enfermos" element={<SacramentoUncaoEnfermos />} />
            <Route path="/blog/sacramento-ordem" element={<SacramentoOrdem />} />
            <Route path="/blog/sacramento-matrimonio" element={<SacramentoMatrimonio />} />
            <Route path="/blog/primeiro-mandamento-amar-deus" element={<PrimeiroMandamento />} />
            <Route path="/blog/segundo-mandamento-nome-deus" element={<SegundoMandamento />} />
            <Route path="/blog/terceiro-mandamento-dia-senhor" element={<TerceiroMandamento />} />
            <Route path="/blog/quarto-mandamento-honrar-pais" element={<QuartoMandamento />} />
            <Route path="/blog/quinto-mandamento-nao-matar" element={<QuintoMandamento />} />
            <Route path="/blog/sexto-mandamento-castidade" element={<SextoMandamento />} />
            <Route path="/blog/setimo-mandamento-nao-roubar" element={<SetimoMandamento />} />
            <Route path="/blog/oitavo-mandamento-verdade" element={<OitavoMandamento />} />
            <Route path="/blog/nono-mandamento-nao-cobicar" element={<NonoMandamento />} />
            <Route path="/blog/decimo-mandamento-nao-cobicar-bens" element={<DecimoMandamento />} />
            <Route path="/blog/dom-sabedoria-espirito-santo" element={<DomSabedoria />} />
            <Route path="/blog/dom-entendimento-espirito-santo" element={<DomEntendimento />} />
            <Route path="/blog/dom-conselho-espirito-santo" element={<DomConselho />} />
            <Route path="/blog/dom-fortaleza-espirito-santo" element={<DomFortaleza />} />
            <Route path="/blog/dom-ciencia-espirito-santo" element={<DomCiencia />} />
            <Route path="/blog/dom-piedade-espirito-santo" element={<DomPiedade />} />
            <Route path="/blog/dom-temor-deus-espirito-santo" element={<DomTemorDeus />} />
            <Route path="/blog/pecado-soberba" element={<PecadoSoberba />} />
            <Route path="/blog/pecado-avareza" element={<PecadoAvareza />} />
            <Route path="/blog/pecado-luxuria" element={<PecadoLuxuria />} />
            <Route path="/blog/pecado-inveja" element={<PecadoInveja />} />
            <Route path="/blog/pecado-gula" element={<PecadoGula />} />
            <Route path="/blog/pecado-ira" element={<PecadoIra />} />
            <Route path="/blog/pecado-preguica" element={<PecadoPreguica />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

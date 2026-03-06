import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import Index from "./pages/Index";
import HormoneTherapy from "./pages/HormoneTherapy";
import Services from "./pages/Services";
import ColdPlunge from "./pages/ColdPlunge";
import InfraredSauna from "./pages/InfraredSauna";
import Compression from "./pages/Compression";
import HyperbaricOxygen from "./pages/HyperbaricOxygen";
import FloatSpa from "./pages/FloatSpa";
import PeptideTherapy from "./pages/PeptideTherapy";
import WeightLoss from "./pages/WeightLoss";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Intake from "./pages/Intake";
import NotFound from "./pages/NotFound";
import Logo from "./pages/Logo";
import Logo2 from "./pages/Logo2";
// Location Pages
import CarlsbadPage from "./pages/locations/Carlsbad";
import VistaPage from "./pages/locations/Vista";
import SanMarcosPage from "./pages/locations/SanMarcos";
import EncinitasPage from "./pages/locations/Encinitas";
import EscondidoPage from "./pages/locations/Escondido";
import FallbrookPage from "./pages/locations/Fallbrook";
import RanchoSantaFePage from "./pages/locations/RanchoSantaFe";
import DelMarPage from "./pages/locations/DelMar";
import CampPendletonPage from "./pages/locations/CampPendleton";
import TemeculaPage from "./pages/locations/Temecula";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hormone-therapy" element={<HormoneTherapy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cold-plunge" element={<ColdPlunge />} />
          <Route path="/services/infrared-sauna" element={<InfraredSauna />} />
          <Route path="/services/compression" element={<Compression />} />
          <Route path="/services/hyperbaric-oxygen" element={<HyperbaricOxygen />} />
          <Route path="/services/float-spa" element={<FloatSpa />} />
          <Route path="/services/peptide-therapy" element={<PeptideTherapy />} />
          <Route path="/services/weight-loss" element={<WeightLoss />} />
          {/* Redirect old URLs */}
          <Route path="/services/iv-therapy" element={<PeptideTherapy />} />
          <Route path="/aesthetics" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/logo.png" element={<Logo />} />
          <Route path="/logo2" element={<Logo2 />} />
          {/* Location Pages */}
          <Route path="/locations/carlsbad" element={<CarlsbadPage />} />
          <Route path="/locations/vista" element={<VistaPage />} />
          <Route path="/locations/san-marcos" element={<SanMarcosPage />} />
          <Route path="/locations/encinitas" element={<EncinitasPage />} />
          <Route path="/locations/escondido" element={<EscondidoPage />} />
          <Route path="/locations/fallbrook" element={<FallbrookPage />} />
          <Route path="/locations/rancho-santa-fe" element={<RanchoSantaFePage />} />
          <Route path="/locations/del-mar" element={<DelMarPage />} />
          <Route path="/locations/camp-pendleton" element={<CampPendletonPage />} />
          <Route path="/locations/temecula" element={<TemeculaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

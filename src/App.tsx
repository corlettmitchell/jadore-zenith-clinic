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
import PeptideTherapy from "./pages/PeptideTherapy";
import WeightLoss from "./pages/WeightLoss";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Intake from "./pages/Intake";
import NotFound from "./pages/NotFound";

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
          <Route path="/services/peptide-therapy" element={<PeptideTherapy />} />
          <Route path="/services/weight-loss" element={<WeightLoss />} />
          {/* Redirect old URLs */}
          <Route path="/services/iv-therapy" element={<PeptideTherapy />} />
          <Route path="/services/compression" element={<Services />} />
          <Route path="/aesthetics" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

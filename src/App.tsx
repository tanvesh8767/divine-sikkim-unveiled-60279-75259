import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import CulturalCalendar from "./pages/CulturalCalendar";
import SmartNavigation from "./pages/SmartNavigation";
import Donation from "./pages/Donation";
import DigitalArchives from "./pages/DigitalArchives";
import LocalGuides from "./pages/LocalGuides";
import EmergencyInfo from "./pages/EmergencyInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cultural-calendar" element={<CulturalCalendar />} />
            <Route path="/smart-navigation" element={<SmartNavigation />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/digital-archives" element={<DigitalArchives />} />
            <Route path="/local-guides" element={<LocalGuides />} />
            <Route path="/emergency" element={<EmergencyInfo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

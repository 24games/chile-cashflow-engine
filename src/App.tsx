import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section6 from "./pages/Section6";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/section-2" element={<Section2 />} />
          <Route path="/section-3" element={<Section3 />} />
          <Route path="/section-4" element={<Section4 />} />
          <Route path="/section-5" element={<Section5 />} />
          <Route path="/section-6" element={<Section6 />} />
          
          {/* Rotas com creative */}
          <Route path="/:creative" element={<Section1 />} />
          <Route path="/:creative/section-2" element={<Section2 />} />
          <Route path="/:creative/section-3" element={<Section3 />} />
          <Route path="/:creative/section-4" element={<Section4 />} />
          <Route path="/:creative/section-5" element={<Section5 />} />
          <Route path="/:creative/section-6" element={<Section6 />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

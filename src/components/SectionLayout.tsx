import { ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import NavigationDots from "./NavigationDots";

interface SectionLayoutProps {
  children: ReactNode;
  nextPath?: string;
  prevPath?: string;
  showPrevButton?: boolean;
}

const SectionLayout = ({ children, nextPath, prevPath, showPrevButton = true }: SectionLayoutProps) => {
  const navigate = useNavigate();
  const { creative } = useParams();

  const handleNext = () => {
    if (nextPath) {
      const fullPath = creative ? `/${creative}${nextPath}` : nextPath;
      navigate(fullPath);
    }
  };

  const handlePrev = () => {
    if (prevPath) {
      const fullPath = creative ? `/${creative}${prevPath}` : prevPath;
      navigate(fullPath);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavigationDots creative={creative} />
      <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20 relative">
        {children}
        
        {(nextPath || prevPath) && (
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-12 w-full">
            {showPrevButton && prevPath && (
              <Button 
                onClick={handlePrev} 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/20 text-base md:text-lg px-6 py-5 md:px-8 md:py-6"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
            )}
            {nextPath && (
              <Button 
                onClick={handleNext} 
                size="lg" 
                className="bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg px-6 py-5 md:px-8 md:py-6"
              >
                Próximo Passo 💸
              </Button>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default SectionLayout;

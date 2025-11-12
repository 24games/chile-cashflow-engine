import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NavigationDots from "@/components/NavigationDots";

const Section1 = () => {
  const navigate = useNavigate();
  const { creative } = useParams();

  const handleNext = () => {
    const path = creative ? `/${creative}/section-2` : '/section-2';
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavigationDots creative={creative} />
      <section className="h-screen flex items-center justify-center px-4 py-8 md:py-20 relative">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-slideInLeft">
              Opere no Chile com a <span className="neon-text">maior estrutura de afiliação iGaming</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground animate-slideInLeft animation-delay-200">
              CPA negativo de até 30$ USD + 80% revshare. Funis validados, suporte dedicado e pagamentos em cripto.
            </p>
            <div className="animate-slideInLeft animation-delay-400">
              <Button
                onClick={handleNext}
                size="lg"
                className="bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg px-6 py-5 md:px-8 md:py-6 group"
              >
                Quero entender como funciona
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center mt-8 md:mt-0 animate-slideInRight animation-delay-300">
            <img
              src="/chile.png"
              alt="Chile iGaming"
              className="w-full h-auto max-w-xs md:max-w-lg max-h-[300px] md:max-h-[560px] object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;

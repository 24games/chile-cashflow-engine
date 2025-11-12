import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import NavigationDots from "@/components/NavigationDots";

const Section5 = () => {
  const navigate = useNavigate();
  const { creative } = useParams();

  const handleNext = () => {
    const path = creative ? `/${creative}/section-6` : '/section-6';
    navigate(path);
  };

  const handlePrev = () => {
    const path = creative ? `/${creative}/section-4` : '/section-4';
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavigationDots creative={creative} />
      <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20 relative">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-text">Quem vai te guiar</span>
            </h2>
          </div>

          <Card className="neon-border bg-card-bg hover:neon-glow transition-all duration-300 overflow-hidden animate-scaleIn animation-delay-200">
            <div className="flex flex-col md:flex-row items-center md:items-stretch">
              <div className="w-full md:w-48 lg:w-64 h-48 md:h-auto flex-shrink-0">
                <img 
                  src="/walterrr.webp" 
                  alt="Walter - CEO 24Games"
                  className="w-full h-full object-cover md:object-[center_20%]"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 neon-text">Walter - CMO E Fundador da Agencia Blead</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Responsável por estratégias nas maiores casas do Brasil:{" "}
                  <span className="text-foreground font-semibold">
                    EstrelaBet, Novibet, Bet7k e EsportivaBet
                  </span>
                  . Agora lidera a expansão internacional da 24Games pro Chile. <br></br><br></br>Com mais de 1 bilhão de reais gerados em depósito e 4 anos de atuação no mercado de igamming. A Blead é uma das agências líderes mundiais no Brasil, América Latina e Europa
                </p>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8 md:mt-12">
            <Button onClick={handlePrev} size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/20 text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Voltar
            </Button>
            <Button onClick={handleNext} size="lg" className="bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
              Quero falar com o gerente 💬
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section5;

import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import NavigationDots from "@/components/NavigationDots";

const Section3 = () => {
  const navigate = useNavigate();
  const { creative } = useParams();

  const handleNext = () => {
    const path = creative ? `/${creative}/section-4` : '/section-4';
    navigate(path);
  };

  const handlePrev = () => {
    const path = creative ? `/${creative}/section-2` : '/section-2';
    navigate(path);
  };

  const steps = [
    {
      step: "1",
      title: "Receba seus links com CPA negativo e 80% revshare. Dois modelos de comissão simultâneos para maximizar seus ganhos",
    },
    {
      step: "2",
      title: "Aplique os funis que nós validamos no mercado chileno, estruturas prontas e testadas que já geraram resultados comprovados",
    },
    {
      step: "3",
      title: "Pagamento D15 em dólares. Pagamentos quinzenais direto na sua wallet, zero burocracia e zero imposto.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavigationDots creative={creative} />
      <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20 relative">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-6 md:mb-10 animate-fadeInUp">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              <span className="neon-text">Como funciona</span>
            </h2>
          </div>

          <div className="space-y-3 md:space-y-5">
            {steps.map((item) => (
              <Card
                key={item.step}
                className="neon-border bg-card-bg p-4 md:p-6 hover:neon-glow transition-all duration-300 animate-scaleIn"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl font-bold neon-text">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-1">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="neon-border bg-card-bg p-4 md:p-6 mt-6 md:mt-8 animate-fadeInUp animation-delay-300">
            <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 neon-text">Para grandes players: Financiamos seu tráfego e conectamos você a experts de alta performance.</h3>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8 md:mt-12">
            <Button onClick={handlePrev} size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/20 text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Voltar
            </Button>
            <Button onClick={handleNext} size="lg" className="bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
              Próximo Passo 💸
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;

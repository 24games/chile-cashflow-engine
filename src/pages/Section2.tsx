import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, DollarSign, Headphones, Wallet, TrendingUp, Link2, ChevronLeft } from "lucide-react";
import NavigationDots from "@/components/NavigationDots";

const Section2 = () => {
  const navigate = useNavigate();
  const { creative } = useParams();

  const handleNext = () => {
    const path = creative ? `/${creative}/section-3` : '/section-3';
    navigate(path);
  };

  const handlePrev = () => {
    const path = creative ? `/${creative}` : '/';
    navigate(path);
  };

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Funis validados e prontos pra rodar",
      description: "Estrutura completa testada e otimizada para o mercado chileno",
    },
    {
      icon: DollarSign,
      title: "Dois deals simultâneos",
      description: "CPA negativo de até 30$ USD e 80% revshare ao mesmo tempo",
    },
    {
      icon: Headphones,
      title: "Suporte direto",
      description: "Gerente de contas dedicado para suas dúvidas e otimizações",
    },
    {
      icon: Wallet,
      title: "Pagamentos quinzenais em cripto",
      description: "Receba em dólar via cripto com 0% de imposto",
    },
    {
      icon: TrendingUp,
      title: "Financiamento de tráfego",
      description: "Para afiliados de alta performance: investimos no seu crescimento",
    },
    {
      icon: Link2,
      title: "Conectamos Experts a você",
      description: "Seu único trabalho é copiar os funis",
    },
  ];

  const delays = ['animation-delay-100', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400', 'animation-delay-500', 'animation-delay-600'];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavigationDots creative={creative} />
      <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20 relative">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              O que você recebe na <span className="neon-text">parceria 24Games</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tudo que você precisa para começar a faturar em dólar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`neon-border bg-card-bg p-6 md:p-8 hover:neon-glow transition-all duration-300 animate-scaleIn ${delays[index]}`}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 neon-text">{item.title}</h3>
                      <p className="text-lg md:text-xl text">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 md:mt-12 w-full px-2">
                        <Button onClick={handleNext} size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:neon-glow text-sm md:text-base lg:text-lg px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
              Próximo Passo 💸
            </Button>
            <Button onClick={handlePrev} size="lg" variant="outline" className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/20 text-sm md:text-base lg:text-lg px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Voltar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;

import { Home, PieChart, DollarSign, Users, MessageSquare, Zap, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    niche: "",
    revenue: "",
  });

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Em breve nosso gerente entrará em contato.");
    setFormData({ name: "", phone: "", email: "", niche: "", revenue: "" });
  };

  const scrollToNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Carousel setApi={setApi} className="w-full h-screen" opts={{ align: "start", loop: false, watchDrag: false }}>
        <CarouselContent className="h-screen">
          {/* Section 1: Hero - New Design */}
          <CarouselItem className="h-screen">
            <section className="h-screen flex items-center justify-center px-4 py-8 md:py-20 relative overflow-y-auto">
              <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center my-auto">
                {/* Left Content */}
                <div className="space-y-4 md:space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-primary bg-primary/10">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-sm md:text-base text-primary font-semibold">Mentoria Individual</span>
                  </div>

                  <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
                    O Chile é o <span className="neon-text">próximo grande palco</span> do iGaming
                  </h1>

                  <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                    A 24 Games tem tudo que você precisa para dominar o mercado de esports
                  </p>

                  <Button
                    onClick={scrollToNext}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg px-6 py-5 md:px-8 md:py-6 group"
                  >
                    Quero entender como funciona
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Right Image */}
                <div className="relative hidden md:flex items-center justify-center">
                  <img
                    src="/chile.png"
                    alt="Chile iGaming"
                    className="w-full h-auto max-w-lg object-contain"
                  />
                </div>
              </div>
            </section>
          </CarouselItem>

          {/* Section 2: What You Get */}
          <CarouselItem className="h-screen">
            <section className="h-screen flex items-center justify-center px-4 py-8 md:py-20 overflow-y-auto">
        <div className="max-w-6xl w-full my-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              O que você recebe na <span className="neon-text">parceria 24Games</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tudo que você precisa para começar a faturar em dólar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                title: "Funis validados e prontos pra rodar",
                description: "Estrutura completa testada e otimizada para o mercado chileno",
              },
              {
                title: "Dois deals simultâneos",
                description: "CPA negativo 10/30 e 80% revshare ao mesmo tempo",
              },
              {
                title: "Suporte direto",
                description: "Gerente de contas dedicado para suas dúvidas e otimizações",
              },
              {
                title: "Pagamentos quinzenais em cripto",
                description: "Receba em dólar via cripto com 0% de imposto",
              },
              {
                title: "Financiamento de tráfego",
                description: "Para afiliados de alta performance: investimos no seu crescimento",
              },
              {
                title: "Conectamos Experts a você",
                description: "Seu único trabalho é copiar os funis",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="neon-border bg-card-bg p-6 md:p-8 hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 neon-text">{item.title}</h3>
                    <p className="text-lg md:text-xl text">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button onClick={scrollToNext} size="lg" className="bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
              Quero acesso aos funis 🔗
            </Button>
          </div>
        </div>
            </section>
          </CarouselItem>

          {/* Section 3: How It Works */}
          <CarouselItem className="h-screen">
            <section className="h-screen flex items-center justify-center px-4 py-8 md:py-20 overflow-y-auto">
        <div className="max-w-4xl w-full my-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-text">Como funciona</span>
            </h2>
          </div>

          <div className="space-y-4 md:space-y-8">
            {[
              {
                step: "1",
                title: "Receba seus links com CPA negativo e 80% revshare. Dois modelos de comissão simultâneos para maximizar seus ganhos",
                description: "Dois modelos de comissão simultâneos para maximizar seus ganhos",
              },
              {
                step: "2",
                title: "Aplique os funis validados no mercado chileno, Estruturas prontas e testadas que já geraram resultados comprovados",
                description: "Estruturas prontas e testadas que já geraram resultados comprovados",
              },
              {
                step: "3",
                title: "Pagamento D15 em dólares. Pagamentos quinzenais direto na sua wallet, zero burocracia",
                description: "",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="neon-border bg-card-bg p-6 md:p-8 hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl md:text-3xl font-bold neon-text">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="neon-border bg-card-bg p-6 md:p-8 mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 neon-text">Para grandes players: Financiamos seu tráfego e conectamos você a experts de alta performance.</h3>
          </Card>

          <div className="text-center mt-8 md:mt-12">
            <Button onClick={scrollToNext} size="lg" className="bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
              Quero operar no Chile 💸
            </Button>
          </div>
        </div>
            </section>
          </CarouselItem>

          {/* Section 4: Results */}
          <CarouselItem className="h-screen">
            <section className="h-screen flex items-center justify-center px-4 py-8 md:py-20 overflow-y-auto">
        <div className="max-w-6xl w-full my-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-text">Resultados reais</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Depoimentos de quem aplicou a estrutura 24Games e escalaram no Chile.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Video 1 */}
            <Card className="neon-border bg-card-bg p-4 md:p-6 hover:neon-glow transition-all duration-300">
              <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-muted-foreground">Vídeo 1</p>
                </div>
              </div>
            </Card>

            {/* Video 2 */}
            <Card className="neon-border bg-card-bg p-4 md:p-6 hover:neon-glow transition-all duration-300">
              <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-muted-foreground">Vídeo 2</p>
                </div>
              </div>
            </Card>

            {/* Video 3 */}
            <Card className="neon-border bg-card-bg p-4 md:p-6 hover:neon-glow transition-all duration-300">
              <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-muted-foreground">Vídeo 3</p>
                </div>
              </div>
            </Card>

            {/* Video 4 */}
            <Card className="neon-border bg-card-bg p-4 md:p-6 hover:neon-glow transition-all duration-300">
              <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-muted-foreground">Vídeo 4</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button onClick={scrollToNext} size="lg" className="bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
              Quero ver quem vai me guiar 👤
            </Button>
          </div>
        </div>
            </section>
          </CarouselItem>

          {/* Section 5: Who Will Guide You */}
          <CarouselItem className="h-screen">
            <section className="h-screen flex items-center justify-center px-4 py-8 md:py-20 overflow-y-auto">
        <div className="max-w-4xl w-full my-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-text">Quem vai te guiar</span>
            </h2>
          </div>

          <Card className="neon-border bg-card-bg p-8 md:p-12 hover:neon-glow transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary flex items-center justify-center flex-shrink-0">
                <Users className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 neon-text">Walter Viterbo</h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-3 md:mb-4">CMO e Fundador da 24Games</p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Responsável por estratégias nas maiores casas do Brasil:{" "}
                  <span className="text-foreground font-semibold">
                    EstrelaBet, Novibet, Bet7k e EsportivaBet
                  </span>
                  . Agora lidera a expansão internacional da 24Games pro Chile. <br></br><br></br>Com mais de 25 milhões de reais faturados e 4 anos de atuação no mercado de igamming, a Blead esta no pódium de operação de afiliado na américa latina e europa. Você vai ter a oportunidade brutal de aprender exatamente os mesmos funis e detalhes que fazem a Blead ser destaque no mercado.
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8 md:mt-12">
            <Button onClick={scrollToNext} size="lg" className="bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
              Quero falar com o gerente 💬
            </Button>
          </div>
        </div>
            </section>
          </CarouselItem>

          {/* Section 6: Contact Form */}
          <CarouselItem className="h-screen">
            <section className="h-screen flex items-center justify-center px-4 py-8 md:py-20 overflow-y-auto">
        <div className="max-w-2xl w-full my-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-text">Fale com o gerente de contas</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Receba seus links, funis e suporte pra iniciar sua operação hoje mesmo.
            </p>
          </div>

          <Card className="neon-border bg-card-bg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <Label htmlFor="name" className="text-base md:text-lg">
                  Nome
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2 bg-input border-card-border focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base md:text-lg">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-2 bg-input border-card-border focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base md:text-lg">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2 bg-input border-card-border focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="niche" className="text-base md:text-lg">
                  Nicho
                </Label>
                <Select value={formData.niche} onValueChange={(value) => setFormData({ ...formData, niche: value })}>
                  <SelectTrigger className="mt-2 bg-input border-card-border focus:border-primary">
                    <SelectValue placeholder="Selecione seu nicho" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coprodutor">Coprodutor</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                    <SelectItem value="tipster">Tipster</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="revenue" className="text-base md:text-lg">
                  Faturamento mensal
                </Label>
                <Input
                  id="revenue"
                  value={formData.revenue}
                  onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                  required
                  placeholder="Ex: R$ 50.000"
                  className="mt-2 bg-input border-card-border focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg py-5 md:py-6"
              >
                Quero falar com o gerente de contas 🚀
              </Button>
            </form>
          </Card>

          <div className="text-center mt-8 md:mt-12">
            <p className="text-sm md:text-base text-muted-foreground">
              © 2024 24Games - Dominando o mercado chileno de iGaming
            </p>
          </div>
        </div>
            </section>
          </CarouselItem>
        </CarouselContent>

        {/* Navigation Dots */}
        <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-50 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                index === current ? "w-6 md:w-8 bg-primary" : "w-1.5 md:w-2 bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Ir para seção ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default Index;

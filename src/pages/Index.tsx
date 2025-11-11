import { Home, PieChart, DollarSign, Users, MessageSquare, Zap, ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);

const Index = () => {
  const { creative } = useParams();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    niche: "",
    revenue: "",
    creative: creative || "direct",
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
      
      // Scroll para o topo da seção quando mudar
      const sections = document.querySelectorAll('section');
      const currentSection = sections[api.selectedScrollSnap()];
      if (currentSection) {
        currentSection.scrollTop = 0;
      }
    });
  }, [api]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://blead-n8n-docker.y1jnlb.easypanel.host/webhook/24br", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Mensagem enviada! Redirecionando para o WhatsApp...");
        setFormData({ name: "", phone: "", email: "", niche: "", revenue: "", creative: creative || "direct" });
        
        // Redirecionar para WhatsApp após 1 segundo
        setTimeout(() => {
          window.open("https://wa.me/5571991127099", "_blank");
        }, 1000);
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  const scrollToNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Carousel setApi={setApi} className="w-full h-screen" opts={{ align: "start", loop: false, watchDrag: false, duration: 0 }}>
        <CarouselContent className="h-screen">
          {/* Section 1: Hero - New Design */}
          <CarouselItem className="h-screen">
            <section className="h-screen flex items-center justify-center px-4 py-8 md:py-20 relative">
              <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-4 md:space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-primary bg-primary/10">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-sm md:text-base text-primary font-semibold">Ganhe em dolar c/ funis validados</span>
                  </div>

                  <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
                    O Chile é o <span className="neon-text">próximo grande palco</span> do iGaming
                  </h1>
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
                <div className="relative flex items-center justify-center mt-8 md:mt-0">
                  <img
                    src="/chile.png"
                    alt="Chile iGaming"
                    className="w-full h-auto max-w-xs md:max-w-lg max-h-[300px] md:max-h-[560px] object-contain"
                  />
                </div>
              </div>
            </section>
          </CarouselItem>

          {/* Section 2: What You Get */}
          <CarouselItem className="h-screen">
            <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20">
        <div className="max-w-6xl w-full">
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
            <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20">
        <div className="max-w-4xl w-full">
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
                title: "Aplique os funis que nós validamos no mercado chileno, estruturas prontas e testadas que já geraram resultados comprovados",
                description: "Estruturas prontas e testadas que já geraram resultados comprovados",
              },
              {
                step: "3",
                title: "Pagamento D15 em dólares. Pagamentos quinzenais direto na sua wallet, zero burocracia e zero imposto.",
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
            <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-text">Resultados reais</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Depoimentos de quem já tá escalando no chile como afiliado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Video 1 */}
            <Card className="neon-border bg-card-bg p-4 md:p-6 hover:neon-glow transition-all duration-300">
              <div 
                dangerouslySetInnerHTML={{
                  __html: `
                    <div id="ifr_69127bc92e63132427946e77_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;">
                      <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_69127bc92e63132427946e77_aspect">
                        <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_69127bc92e63132427946e77" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload="this.onload=null, this.src='https://scripts.converteai.net/af053167-2542-4323-9c93-d010e7938eb5/players/69127bc92e63132427946e77/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe>
                      </div>
                    </div>
                  `
                }}
              />
            </Card>

            {/* Video 2 */}
            <Card className="neon-border bg-card-bg p-4 md:p-6 hover:neon-glow transition-all duration-300">
              <div 
                dangerouslySetInnerHTML={{
                  __html: `
                    <div id="ifr_69127c42ef0e44b18af5f8b4_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;">
                      <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_69127c42ef0e44b18af5f8b4_aspect">
                        <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_69127c42ef0e44b18af5f8b4" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload="this.onload=null, this.src='https://scripts.converteai.net/af053167-2542-4323-9c93-d010e7938eb5/players/69127c42ef0e44b18af5f8b4/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe>
                      </div>
                    </div>
                  `
                }}
              />
            </Card>

            {/* Video 3 */}
            <Card className="neon-border bg-card-bg p-4 md:p-6 hover:neon-glow transition-all duration-300">
              <div 
                dangerouslySetInnerHTML={{
                  __html: `
                    <div id="ifr_69127c81fbc86c01038e8b39_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;">
                      <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_69127c81fbc86c01038e8b39_aspect">
                        <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_69127c81fbc86c01038e8b39" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload="this.onload=null, this.src='https://scripts.converteai.net/af053167-2542-4323-9c93-d010e7938eb5/players/69127c81fbc86c01038e8b39/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe>
                      </div>
                    </div>
                  `
                }}
              />
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
            <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-text">Quem vai te guiar</span>
            </h2>
          </div>

          <Card className="neon-border bg-card-bg hover:neon-glow transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-stretch">
              <div className="w-full md:w-48 lg:w-64 h-48 md:h-auto flex-shrink-0">
                <img 
                  src="/walterrr.webp" 
                  alt="Walter Viterbo" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 neon-text">Walter Viterbo</h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-3 md:mb-4">CMO e Fundador da Agência Blead</p>
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
            <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-text">Só falta liberar seu Deal e começar!</span>
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
                <Select value={formData.revenue} onValueChange={(value) => setFormData({ ...formData, revenue: value })} required>
                  <SelectTrigger className="mt-2 bg-input border-card-border focus:border-primary">
                    <SelectValue placeholder="Selecione seu faturamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Até 50k">Até 50k</SelectItem>
                    <SelectItem value="Até 100k">Até 100k</SelectItem>
                    <SelectItem value="Até 250k">Até 250k</SelectItem>
                    <SelectItem value="Até 500k">Até 500k</SelectItem>
                    <SelectItem value="+ de 500k">+ de 500k</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:neon-glow text-base md:text-lg py-5 md:py-6 flex items-center justify-center gap-2"
              >
                Quero ativar meu link de afiliado
                <WhatsAppIcon />
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

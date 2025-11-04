import { Home, PieChart, DollarSign, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    niche: "",
    revenue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Em breve nosso gerente entrará em contato.");
    setFormData({ name: "", phone: "", email: "", niche: "", revenue: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              O Chile é o <span className="neon-text">próximo grande palco</span> do iGaming
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A 24 Games tem tudo que você precisa para dominar o mercado de esports
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="neon-border bg-card-bg p-8 hover:neon-glow transition-all duration-300">
              <Home className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">CASA NOVA</h3>
              <p className="text-muted-foreground leading-relaxed">
                Faça parte do lançamento de uma nova casa de apostas no Chile – um projeto com grande investimento e
                gestão do grupo por trás de algumas das maiores operações iGaming do Brasil.
              </p>
            </Card>

            <Card className="neon-border bg-card-bg p-8 hover:neon-glow transition-all duration-300">
              <PieChart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">DEAL AGRESSIVO</h3>
              <p className="text-muted-foreground leading-relaxed">
                Diferente do Brasil, no Chile temos menos impostos e taxas de serviço, por isso conseguimos oferecer{" "}
                <span className="neon-text font-bold">80% do REV para nossos afiliados</span>.
              </p>
            </Card>

            <Card className="neon-border bg-card-bg p-8 hover:neon-glow transition-all duration-300">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">CPA NEGATIVO</h3>
              <p className="text-muted-foreground leading-relaxed">
                Além do deal de <span className="neon-text font-bold">FULL REV</span>, você pode começar direto com{" "}
                <span className="neon-text font-bold">CPA negativo</span> 10/30 e escalar rápido.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: What You Get */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              O que você recebe na <span className="neon-text">parceria 24Games</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa para começar a faturar em dólar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
            ].map((item, index) => (
              <Card
                key={index}
                className="neon-border bg-card-bg p-8 hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 neon-text">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:neon-glow text-lg px-8 py-6">
              Quero acesso aos funis 🔗
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-text">Como funciona</span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Receba seus links com CPA negativo e 80% revshare",
                description: "Dois modelos de comissão simultâneos para maximizar seus ganhos",
              },
              {
                step: "2",
                title: "Aplique os funis validados no mercado chileno",
                description: "Estruturas prontas e testadas que já geraram resultados comprovados",
              },
              {
                step: "3",
                title: "Receba em dólar via cripto, sem travas",
                description: "Pagamentos quinzenais direto na sua wallet, zero burocracia",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="neon-border bg-card-bg p-8 hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold neon-text">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="neon-border bg-card-bg p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4 neon-text">Para grandes players:</h3>
            <p className="text-lg text-muted-foreground">
              Financiamos seu tráfego e conectamos você a experts de alta performance.
            </p>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:neon-glow text-lg px-8 py-6">
              Quero operar no Chile 💸
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Results */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-text">Resultados reais</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Depoimentos de quem aplicou a estrutura 24Games e escalaram no Chile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="neon-border bg-card-bg p-8 hover:neon-glow transition-all duration-300">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Igor Business</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                "Com a estrutura da 24Games consegui escalar minha operação no Chile em menos de 2 meses. Os funis
                validados e o suporte fizeram toda a diferença."
              </p>
            </Card>

            <Card className="neon-border bg-card-bg p-8 hover:neon-glow transition-all duration-300">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Samuel Lau</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                "Deal agressivo e pagamentos em dia. Consegui replicar a estratégia que funcionava no Brasil e
                multiplicar os resultados no mercado chileno."
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="neon-border bg-card-bg p-8 hover:neon-glow transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 neon-text">📊 Jornada do lead</h4>
              <p className="text-muted-foreground">Veja como os funis convertem do primeiro clique até o depósito</p>
            </Card>

            <Card className="neon-border bg-card-bg p-8 hover:neon-glow transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 neon-text">💰 Análise real de faturamento</h4>
              <p className="text-muted-foreground">Dados reais de performance e comissões pagas aos parceiros</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Who Will Guide You */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-text">Quem vai te guiar</span>
            </h2>
          </div>

          <Card className="neon-border bg-card-bg p-12 hover:neon-glow transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center flex-shrink-0">
                <Users className="w-16 h-16 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2 neon-text">Walter Viterbo</h3>
                <p className="text-xl text-muted-foreground mb-4">CMO e Fundador da 24Games</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Responsável por estratégias nas maiores casas do Brasil:{" "}
                  <span className="text-foreground font-semibold">
                    EstrelaBet, Novibet, Bet7k e EsportivaBet
                  </span>
                  . Agora lidera a expansão internacional da 24Games pro Chile.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 6: Contact Form */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-text">Fale com o gerente de contas</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Receba seus links, funis e suporte pra iniciar sua operação hoje mesmo.
            </p>
          </div>

          <Card className="neon-border bg-card-bg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg">
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
                <Label htmlFor="phone" className="text-lg">
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
                <Label htmlFor="email" className="text-lg">
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
                <Label htmlFor="niche" className="text-lg">
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
                <Label htmlFor="revenue" className="text-lg">
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
                className="w-full bg-primary text-primary-foreground hover:neon-glow text-lg py-6"
              >
                Quero falar com o gerente de contas 🚀
              </Button>
            </form>
          </Card>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              © 2024 24Games - Dominando o mercado chileno de iGaming
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

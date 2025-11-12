import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import NavigationDots from "@/components/NavigationDots";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);

const Section6 = () => {
  const navigate = useNavigate();
  const { creative } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    niche: "",
    revenue: "",
    creative: creative || "direct",
  });

  const handlePrev = () => {
    const path = creative ? `/${creative}/section-5` : '/section-5';
    navigate(path);
  };

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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavigationDots creative={creative} />
      <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20 relative">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-text">Só falta liberar seu Deal e começar!</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Receba seus links, funis e suporte pra iniciar sua operação hoje mesmo.
            </p>
          </div>

          <Card className="neon-border bg-card-bg p-6 md:p-8 animate-scaleIn animation-delay-200">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <Label htmlFor="name" className="text-base md:text-lg">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2 bg-input border-card-border focus:border-primary text-base md:text-lg"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base md:text-lg">WhatsApp</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-2 bg-input border-card-border focus:border-primary text-base md:text-lg"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base md:text-lg">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2 bg-input border-card-border focus:border-primary text-base md:text-lg"
                />
              </div>

              <div>
                <Label htmlFor="niche" className="text-base md:text-lg">Qual seu nicho?</Label>
                <Input
                  id="niche"
                  type="text"
                  value={formData.niche}
                  onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                  required
                  className="mt-2 bg-input border-card-border focus:border-primary text-base md:text-lg"
                />
              </div>

              <div>
                <Label htmlFor="revenue" className="text-base md:text-lg">Faturamento mensal</Label>
                <Select value={formData.revenue} onValueChange={(value) => setFormData({ ...formData, revenue: value })} required>
                  <SelectTrigger className="mt-2 bg-input border-card-border focus:border-primary text-base md:text-lg">
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

          <div className="flex items-center justify-center gap-4 mt-8 md:mt-12">
            <Button onClick={handlePrev} size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/20 text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Voltar
            </Button>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <p className="text-sm md:text-base text-muted-foreground">
              © 2024 24Games - Dominando o mercado chileno de iGaming
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section6;

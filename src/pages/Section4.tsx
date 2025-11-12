import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import NavigationDots from "@/components/NavigationDots";

const Section4 = () => {
  const navigate = useNavigate();
  const { creative } = useParams();

  const handleNext = () => {
    const path = creative ? `/${creative}/section-5` : '/section-5';
    navigate(path);
  };

  const handlePrev = () => {
    const path = creative ? `/${creative}/section-3` : '/section-3';
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavigationDots creative={creative} />
      <section className="h-screen overflow-y-auto flex items-start justify-center px-4 py-8 md:py-20 relative">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="neon-text">Resultados reais</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Depoimentos de quem já tá escalando no chile como afiliado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* Video 1 */}
            <Card className="neon-border bg-card-bg p-4 md:p-6 hover:neon-glow transition-all duration-300 animate-scaleIn animation-delay-100">
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
            <Card className="neon-border bg-card-bg p-4 md:p-6 hover:neon-glow transition-all duration-300 animate-scaleIn animation-delay-200">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 md:mt-12 w-full px-2">
            <Button onClick={handlePrev} size="lg" variant="outline" className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/20 text-sm md:text-base lg:text-lg px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Voltar
            </Button>
            <Button onClick={handleNext} size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:neon-glow text-sm md:text-base lg:text-lg px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
              Liberar meu link! 👤
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section4;

import { Button } from "@/components/ui/button";
import logoAffeto from "@/assets/logo-affeto.png";
import { Phone } from "lucide-react";

// Importando as novas imagens
import heroMain from "@/assets/hero-main.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const url = "https://wa.me/+5585981968490?text=Oi%20Thais,%20quero%20surpresa%20rom%C3%A2ntica%20%C3%A0s%207:05.";
    
    // Type assertion to inform TypeScript about the global gtag function
    const gtag = (window as any).gtag;

    if (gtag) {
      gtag('event', 'conversion', {
        'send_to': 'AW-17517583541/KiqwCIbgnKEbELW5hKFB',
        'event_callback': () => {
          window.open(url, '_blank');
        }
      });
    } else {
      // Fallback if gtag is not available
      window.open(url, '_blank');
    }
  };

  return (
    <>
      {/* Header com Faixa de Fundo */}
      <header className="bg-affeto-peach">
        <div className="container mx-auto px-8 py-6">
          <div className="flex justify-center">
            <img 
              src={logoAffeto} 
              alt="Affeto Cestas" 
              className="h-16 lg:h-20 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Seção Hero Principal */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-12">
          {/* Hero principal */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            {/* Coluna de Texto */}
            <div className="flex flex-col justify-center h-full">
              <h1 className="flex flex-col font-serif font-black text-affeto-ink leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-12 lg:mb-0 animate-fade-in space-y-2 lg:space-y-4">
                <span className="block">Amanhã, 7:05 — ela abre a porta, lê:</span>
                <span className="font-cursive text-affeto-primary italic block">"Te escolho todo dia"</span>
                <span className="block">...e chora sorrindo</span>
              </h1>
            </div>

            {/* Coluna da Imagem Principal e CTA */}
            <div className="animate-fade-in">
              {/* Grupo Imagem + Legenda */}
              <div className="mb-6">
                <div className="max-w-md mx-auto">
                  <img 
                    src={heroMain} 
                    alt="Cesta de café da manhã Affeto com flores e um bilhete"
                    className="w-full rounded-2xl aspect-square object-cover"
                  />
                </div>
                <p className="text-affeto-sage-100 font-sans text-sm text-center mt-3">
                  Cartão escrito à mão.
                </p>
              </div>

              {/* Botão CTA */}
              <div className="text-center">
                <Button
                  variant="whatsapp"
                  size="whatsapp"
                  className="w-full sm:w-auto"
                  onClick={handleWhatsAppClick}                  data-cta="hero-7h05"
                  aria-label="Abrir WhatsApp para fazer pedido de surpresa romântica às 7:05"
                >
                  <Phone className="w-6 h-6" />
                  FAZER ELA CHORAR DE ALEGRIA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Galeria */}
      <section className="bg-background pb-12 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <img src={gallery1} alt="Mulher recebendo uma surpresa e sorrindo" className="w-full rounded-2xl aspect-square object-cover" />
            <img src={gallery2} alt="Vela aromática acesa criando um clima romântico" className="w-full rounded-2xl aspect-square object-cover" />
            <img src={gallery3} alt="Conversa de WhatsApp com elogio do cliente" className="w-full rounded-2xl aspect-square object-cover" />
            <img src={gallery4} alt="Casal se abraçando em um aniversário" className="w-full rounded-2xl aspect-square object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
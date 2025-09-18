import { Button } from "@/components/ui/button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import logoAffeto from "@/assets/logo-affeto.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Container principal */}
      <div className="container mx-auto px-6 py-16 lg:py-20">
        {/* Header com logo */}
        <header className="mb-12 lg:mb-16">
          <div className="flex justify-center">
            <img 
              src={logoAffeto} 
              alt="Affeto Cestas" 
              className="h-12 lg:h-16 w-auto animate-fade-in"
            />
          </div>
        </header>

        {/* Hero principal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda - Título e CTA */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-serif font-bold text-affeto-ink leading-tight text-4xl sm:text-5xl lg:text-6xl">
              Amanhã, 7:12 — ela abre a porta, lê{" "}
              <span className="text-affeto-primary italic">'te escolho todo dia'</span>{" "}
              e chora sorrindo
            </h1>
            
            <div className="space-y-6">
              {/* Placeholder da imagem principal */}
              <ImagePlaceholder 
                label="FOTO CESTA + BILHETE À MÃO"
                ratio="4/5"
                className="max-w-md mx-auto lg:mx-0"
              />
              
              {/* Legenda */}
              <p className="text-affeto-sage-100 font-sans text-sm text-center lg:text-left">
                Cartão escrito à mão incluso. Foto da cesta enviada antes de sair.
              </p>
            </div>

            {/* CTA Principal */}
            <div className="text-center lg:text-left">
              <Button
                variant="hero"
                size="xxl"
                className="w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/5585987968490?text=Oi%20Thais,%20quero%20surpresa%20rom%C3%A2ntica%20%C3%A0s%207:12.", "_blank")}
                data-cta="hero-7h12"
                aria-label="Abrir WhatsApp para fazer pedido de surpresa romântica às 7:12"
              >
                Fazer ela chorar de alegria
              </Button>
            </div>
          </div>

          {/* Coluna direita - Grid 2x2 de reações */}
          <div className="order-first lg:order-last">
            <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-lg mx-auto animate-fade-in">
              <ImagePlaceholder 
                label="Mulher chorando de alegria"
                ratio="1/1"
              />
              <ImagePlaceholder 
                label="Close do bilhete à mão"
                ratio="1/1"
              />
              <ImagePlaceholder 
                label="Print 'não acredito!' no WhatsApp"
                ratio="1/1"
              />
              <ImagePlaceholder 
                label="Abraço na porta"
                ratio="1/1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Seta indicando próxima seção */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 border-r-2 border-b-2 border-affeto-primary transform rotate-45"></div>
      </div>
    </section>
  );
};

export default HeroSection;
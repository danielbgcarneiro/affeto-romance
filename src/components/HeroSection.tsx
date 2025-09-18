import { Button } from "@/components/ui/button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import logoAffeto from "@/assets/logo-affeto.png";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Container principal */}
      <div className="container mx-auto px-8 py-20 lg:py-24">
        {/* Header com logo */}
        <header className="mb-16 lg:mb-20">
          <div className="flex justify-center">
            <img 
              src={logoAffeto} 
              alt="Affeto Cestas" 
              className="h-16 lg:h-20 w-auto animate-fade-in"
            />
          </div>
        </header>

        {/* Hero principal */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Coluna esquerda - Título e CTA */}
          <div className="space-y-12 animate-fade-in">
            <h1 className="font-serif font-black text-affeto-ink leading-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Amanhã, 7:05 — ela abre a porta, lê{" "}
              <span className="text-affeto-primary italic">'te escolho todo dia'</span>{" "}
              e chora sorrindo
            </h1>
            
            <div className="space-y-8">
              {/* Placeholder da imagem principal */}
              <ImagePlaceholder 
                label="FOTO CESTA + BILHETE À MÃO"
                ratio="4/5"
                className="max-w-md mx-auto lg:mx-0 rounded-2xl"
              />
              
              {/* Legenda */}
              <p className="text-affeto-sage-100 font-sans text-base text-center lg:text-left">
                Cartão escrito à mão incluso. Foto da cesta enviada antes de sair.
              </p>
            </div>

            {/* CTA Principal */}
            <div className="text-center lg:text-left mt-12">
              <Button
                variant="whatsapp"
                size="whatsapp"
                className="w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/5585987968490?text=Oi%20Thais,%20quero%20surpresa%20rom%C3%A2ntica%20%C3%A0s%207:05.", "_blank")}
                data-cta="hero-7h05"
                aria-label="Abrir WhatsApp para fazer pedido de surpresa romântica às 7:05"
              >
                <Phone className="w-6 h-6" />
                SALVAR MEU PARABÉNS
              </Button>
            </div>
          </div>

          {/* Coluna direita - Grid 2x2 de reações */}
          <div className="order-first lg:order-last">
            <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-lg mx-auto animate-fade-in">
              <ImagePlaceholder 
                label="Pessoa surpresa"
                ratio="1/1"
                className="rounded-2xl"
              />
              <ImagePlaceholder 
                label="Velinha acesa"
                ratio="1/1"
                className="rounded-2xl"
              />
              <ImagePlaceholder 
                label="Print WhatsApp"
                ratio="1/1"
                className="rounded-2xl"
              />
              <ImagePlaceholder 
                label="Abraço aniversário"
                ratio="1/1"
                className="rounded-2xl"
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
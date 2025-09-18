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
        <div className="container mx-auto px-8 pt-12 pb-12 lg:pt-16 lg:pb-12">
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
                <img 
                  src={heroMain} 
                  alt="Cesta de café da manhã Affeto com flores e um bilhete"
                  className="max-w-md mx-auto lg:mx-0 rounded-2xl aspect-square object-cover"
                />
                <p className="text-affeto-sage-100 font-sans text-sm text-center lg:text-left mt-3">
                  Cartão escrito à mão.
                </p>
              </div>

              {/* Botão CTA */}
              <div className="text-center lg:text-left">
                <Button
                  variant="whatsapp"
                  size="whatsapp"
                  className="w-full sm:w-auto"
                  onClick={() => window.open("https://wa.me/+5585981968490?text=Oi%20Thais,%20quero%20surpresa%20rom%C3%A2ntica%20%C3%A0s%207:05.", "_blank")}
                  data-cta="hero-7h05"
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
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <img src={gallery1} alt="Mulher recebendo uma surpresa e sorrindo" className="rounded-2xl aspect-square object-cover" />
            <img src={gallery2} alt="Vela aromática acesa criando um clima romântico" className="rounded-2xl aspect-square object-cover" />
            <img src={gallery3} alt="Conversa de WhatsApp com elogio do cliente" className="rounded-2xl aspect-square object-cover" />
            <img src={gallery4} alt="Casal se abraçando em um aniversário" className="rounded-2xl aspect-square object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
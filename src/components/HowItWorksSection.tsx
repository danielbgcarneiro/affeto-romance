import { Button } from "@/components/ui/button";
import { MessageCircle, Camera, Clock } from "lucide-react";
import { handleWhatsAppClick } from "@/lib/utils";

const HowItWorksSection = () => {
  return (
    <section className="pt-8 pb-12 lg:pt-16 lg:pb-20 bg-gradient-soft">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-affeto-ink mb-4">
            Como funciona
          </h2>
        </div>

        {/* Passos */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Passo 1 */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-affeto-primary rounded-full flex items-center justify-center mx-auto shadow-romantic">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-sans font-semibold text-lg text-affeto-ink">
              Você manda o recado no WhatsApp
            </h3>
            <p className="font-sans text-affeto-sage-100 leading-relaxed">
              Conte o que quer escrever no bilhete e qualquer detalhe especial
            </p>
          </div>

          {/* Passo 2 */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-affeto-primary rounded-full flex items-center justify-center mx-auto shadow-romantic">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-sans font-semibold text-lg text-affeto-ink">
              Montamos do seu jeito + enviamos foto antes de sair
            </h3>
            <p className="font-sans text-affeto-sage-100 leading-relaxed">
              Você aprova a cesta e o bilhete antes da gente sair para entregar
            </p>
          </div>

          {/* Passo 3 */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-affeto-primary rounded-full flex items-center justify-center mx-auto shadow-romantic">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-sans font-semibold text-lg text-affeto-ink">
              7:12 na porta dela
            </h3>
            <p className="font-sans text-affeto-sage-100 leading-relaxed">
              Entregamos no horário combinado, ela nem vai acreditar
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center animate-fade-in">
          <Button
            variant="hero"
            size="xxl"
            className="w-full sm:w-auto min-w-[320px]"
            onClick={() => handleWhatsAppClick("Oi Thais, quero surpresa romântica às 7:12.")}
            data-cta="final-7h12"
            aria-label="Abrir WhatsApp para reservar surpresa romântica às 7:12"
          >
            Reservar minha surpresa às 7:12
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
import { Button } from "@/components/ui/button";
import { MessageCircle, Camera, Clock } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-affeto-ink mb-4">
            Como funciona (sem complicação)
          </h2>
        </div>

        {/* Passos */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
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
              7:12 na porta dela (janela combinada)
            </h3>
            <p className="font-sans text-affeto-sage-100 leading-relaxed">
              Entregamos no horário combinado, ela nem vai acreditar
            </p>
          </div>
        </div>

        {/* Card de valor */}
        <div className="bg-white rounded-2xl p-8 shadow-romantic max-w-md mx-auto mb-12 text-center animate-fade-in">
          <div className="w-12 h-12 bg-affeto-peach rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-affeto-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="font-serif font-bold text-xl text-affeto-ink mb-2">
            Bilhete à mão + foto antes de sair
          </h3>
          <div className="text-3xl font-sans font-bold text-affeto-accent">
            R$ 249
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center animate-fade-in">
          <Button
            variant="hero"
            size="xxl"
            className="w-full sm:w-auto min-w-[320px]"
            onClick={() => window.open("https://wa.me/5585987968490?text=Oi%20Thais,%20quero%20surpresa%20rom%C3%A2ntica%20%C3%A0s%207:12.", "_blank")}
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
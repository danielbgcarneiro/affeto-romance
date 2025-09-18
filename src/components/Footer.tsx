import { Heart } from "lucide-react";
import logoAffeto from "@/assets/logo-affeto.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-affeto-primary text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo e copyright */}
          <div className="flex items-center space-x-4">
            <img 
              src={logoAffeto} 
              alt="Affeto Cestas" 
              className="h-8 w-auto opacity-90"
            />
            <div className="text-sm opacity-80">
              © 2024 Affeto Cestas. Mensageiros do amanhecer.
            </div>
          </div>

          {/* Links de contato */}
          <div className="flex items-center space-x-6">
            <a
              href="https://wa.me/5585987968490"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              aria-label="Contato via WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
              </svg>
              <span className="text-sm">WhatsApp</span>
            </a>
            
            <a
              href="https://instagram.com/affetocestasoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              aria-label="Seguir no Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.295C3.8 14.24 3.8 12.017 3.8 12.017s0-2.223 1.326-3.676C5.999 7.536 7.152 7.046 8.449 7.046s2.448.49 3.323 1.295c1.326 1.453 1.326 3.676 1.326 3.676s0 2.223-1.326 3.676c-.875.805-2.026 1.295-3.323 1.295zm7.068 0c-1.297 0-2.448-.49-3.323-1.295-1.326-1.453-1.326-3.676-1.326-3.676s0-2.223 1.326-3.676c.875-.805 2.026-1.295 3.323-1.295s2.448.49 3.323 1.295c1.326 1.453 1.326 3.676 1.326 3.676s0 2.223-1.326 3.676c-.875.805-2.026 1.295-3.323 1.295z"/>
              </svg>
              <span className="text-sm">@affetocestasoficial</span>
            </a>
          </div>
        </div>

        {/* Mensagem de amor */}
        <div className="text-center mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center justify-center space-x-2 text-sm opacity-80">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>em Fortaleza-CE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <div className="min-h-screen">
        <HeroSection />
        <HowItWorksSection />
        <Footer />
      </div>
      
      {/* Dados estruturados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Romance 7:12 - Affeto Cestas",
            "description": "Surpresa romântica às 7:12 da manhã em Fortaleza. Cesta com bilhete escrito à mão, foto antes de sair e entrega combinada.",
            "url": "https://affeto-romance.vercel.app",
            "potentialAction": {
              "@type": "SearchAction", 
              "target": "https://affeto-romance.vercel.app/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
};

export default Index;

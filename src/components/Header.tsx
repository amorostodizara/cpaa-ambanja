import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logoImage from "@/assets/cp2a-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-soft">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="CP2A Logo" className="h-12 w-auto" />
            <div className="hidden md:block">
              <p className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                Rejoins la réussite avec
              </p>
              <p className="text-xl font-extrabold bg-gradient-hero bg-clip-text text-transparent">
                COURS CP2A
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("formations")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Cours
            </button>
            <button
              onClick={() => scrollToSection("temoignages")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-green"
            >
              Inscrivez-vous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t space-y-4 animate-in slide-in-from-top">
            <button
              onClick={() => scrollToSection("accueil")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("formations")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Cours
            </button>
            <button
              onClick={() => scrollToSection("temoignages")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Inscrivez-vous
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

import { Facebook, Phone, MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-lg px-6 py-2 bg-cp2a-dark text-white">
            Contactez-nous
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-cp2a-dark mb-4">
            Prêt à Commencer ?
          </h2>
          <p className="text-xl text-cp2a-dark/80 max-w-2xl mx-auto">
            Inscrivez-vous dès maintenant pour la rentrée 2026 et donnez-vous
            les moyens de réussir
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <Card className="shadow-soft border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Phone className="text-primary" size={28} />
                Téléphone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://wa.me/261324964914"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                032 49 649 14
              </a>
              <p className="text-muted-foreground mt-2">
                Contactez-nous sur WhatsApp pour toute information
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Facebook className="text-[#1877F2]" size={28} />
                Facebook
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://facebook.com/courscpaa.ambanja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-semibold text-[#1877F2] hover:text-[#1877F2]/80 transition-colors"
              >
                Cours CPAA Ambanja
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <p className="text-muted-foreground mt-2">
                Suivez-nous sur Facebook
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <MapPin className="text-secondary" size={28} />
                Adresse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-foreground">
                Lycée Privé AVOTRA
              </p>
              <p className="text-muted-foreground">ANKATAFAHELY - Ambanja</p>
              <p className="text-muted-foreground">Madagascar</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Calendar className="text-cp2a-green" size={28} />
                Inscriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-lg font-bold text-secondary">
                  Rentrée 2026 Ouverte !
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} />
                  <span>Inscriptions en cours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Places limitées, inscrivez-vous rapidement
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-yellow border-2 border-primary bg-background">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Besoin de plus d'informations ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Notre équipe est à votre disposition pour répondre à toutes vos
                questions concernant nos formations, les modalités d'inscription
                et les tarifs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-yellow"
                  asChild
                >
                  <a href="tel:261324964914">
                    <Phone className="mr-2" size={20} />
                    Appeler maintenant
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                  asChild
                >
                  <a
                    href="https://www.facebook.com/messages/t/courscpaa.ambanja"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="mr-2" size={20} />
                    Message Facebook
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

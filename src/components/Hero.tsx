import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 ">
        <img
          src={heroImage}
          alt="Étudiants réussis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-6 py-3 bg-secondary/10 border-2 border-secondary rounded-full">
            <p className="text-secondary font-bold text-sm md:text-base">
              🎓 Rentrée 2026 déjà ouverte !
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-foreground">Rejoins la</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Réussite
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            avec COURS CP2A
          </p>

          <p className="text-xl text-muted-foreground mb-8 italic border-l-4 border-primary pl-4">
            "L'expérience et la compétence font les différences"
          </p>

          <p className="text-lg text-foreground mb-8 max-w-2xl">
            Clubs des Professeurs Actifs d'Ambanja - Votre partenaire de
            confiance pour la préparation aux examens <strong>BEPC</strong> et{" "}
            <strong>BACCALAURÉAT</strong> (séries A, L, OSE, D, S)
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-yellow text-lg px-8 py-6"
            >
              <BookOpen className="mr-2" size={24} />
              Inscrivez-vous maintenant
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("formations")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6"
            >
              <GraduationCap className="mr-2" size={24} />
              Découvrir nos Cours
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <div className="bg-card/80 backdrop-blur p-4 rounded-lg border shadow-soft text-center">
              <Award className="mx-auto mb-2 text-primary" size={32} />
              <p className="text-2xl font-bold text-foreground">1000+</p>
              <p className="text-sm text-muted-foreground">Élèves formés</p>
            </div>
            <div className="bg-card/80 backdrop-blur p-4 rounded-lg border shadow-soft text-center">
              <GraduationCap
                className="mx-auto mb-2 text-secondary"
                size={32}
              />
              <p className="text-2xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Taux de réussite</p>
            </div>
            <div className="bg-card/80 backdrop-blur p-4 rounded-lg border shadow-soft text-center">
              <BookOpen className="mx-auto mb-2 text-cp2a-green" size={32} />
              <p className="text-2xl font-bold text-foreground">5+</p>
              <p className="text-sm text-muted-foreground">
                Années d'expérience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

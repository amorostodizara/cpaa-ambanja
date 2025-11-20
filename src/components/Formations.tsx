import { BookOpen, Calculator, Globe, Beaker, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const formations = [
  {
    title: "BEPC",
    description:
      "Préparation intensive pour le Brevet d'Études du Premier Cycle",
    icon: BookOpen,
    color: "text-primary",
    badge: "Collège",
    features: [
      "Toutes les matières du programme",
      "Exercices pratiques",
      "Examens de test réguliers",
      "Suivi personnalisé",
    ],
  },
  {
    title: "BACC Série A",
    description: "Littérature et Sciences Humaines",
    icon: BookOpen,
    color: "text-secondary",
    badge: "Lycée",
    features: [
      "Français et Malagasy",
      "Histoire et Géographie",
      "Anglais",
      "Expression écrite et orale",
    ],
  },
  {
    title: "BACC Série L",
    description: "Littérature et Langues",
    icon: Globe,
    color: "text-cp2a-green",
    badge: "Lycée",
    features: [
      "Français et Malagasy",
      "Histoire et Géographie",
      "Anglais",
      "Expression écrite et orale",
    ],
  },
  {
    title: "BACC Série OSE",
    description: "Organisation et Sciences Économiques",
    icon: Calculator,
    color: "text-primary",
    badge: "Lycée",
    features: [
      "Économie et gestion",
      "Mathématiques appliquées",
      "Comptabilité",
      "Études de cas pratiques",
    ],
  },
  {
    title: "BACC Série D",
    description: "Mathématiques et Sciences",
    icon: Calculator,
    color: "text-secondary",
    badge: "Lycée",
    features: [
      "Mathématiques avancées",
      "Physique-Chimie",
      "Sciences de la Vie et de la Terre",
      "Résolution de problèmes",
    ],
  },
  {
    title: "BACC Série S",
    description: "Scientifiques",
    icon: Beaker,
    color: "text-cp2a-green",
    badge: "Lycée",
    features: [
      "Sciences de la Vie et de la Terre",
      "Mathématiques",
      "Physique et Chimie",
      "Travaux Surveillés",
    ],
  },
];

const Formations = () => {
  return (
    <section id="formations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-lg px-6 py-2 bg-primary text-primary-foreground">
            Nos Cours
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Préparez votre <span className="text-primary">Avenir</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des cours de qualité pour tous les séries et toutes les niveaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formations.map((formation, index) => {
            const Icon = formation.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-yellow transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary bg-gradient-card"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-background ${formation.color}`}
                    >
                      <Icon size={32} />
                    </div>
                    <Badge variant="secondary">{formation.badge}</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {formation.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {formation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {formation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Sparkles
                          size={16}
                          className="text-secondary mt-1 flex-shrink-0"
                        />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-hero p-8 rounded-2xl shadow-yellow text-center">
          <h3 className="text-3xl font-bold text-cp2a-dark mb-4">
            📍 Lycée Privé AVOTRA ANKATAFAHELY Ambanja
          </h3>
          <p className="text-xl text-cp2a-dark/80 mb-6">
            Nos cours se déroulent dans un cadre moderne et propice à
            l'apprentissage
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-background/90 p-6 rounded-lg">
              <p className="text-4xl font-bold text-secondary mb-2">2026</p>
              <p className="text-sm text-muted-foreground">Rentrée ouverte</p>
            </div>
            <div className="bg-background/90 p-6 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">5</p>
              <p className="text-sm text-muted-foreground">
                Séries disponibles
              </p>
            </div>
            <div className="bg-background/90 p-6 rounded-lg">
              <p className="text-4xl font-bold text-cp2a-green mb-2">∞</p>
              <p className="text-sm text-muted-foreground">
                Opportunités offertes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formations;

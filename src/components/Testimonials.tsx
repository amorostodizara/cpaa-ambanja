import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    name: "Rosette AVITSARA",
    exam: "BACC Série D - 2021",
    mention: "Très Bien",
    text: "Grâce aux professeurs de CP2A, j'ai pu comprendre les mathématiques et la physique d'une manière totalement nouvelle. Leur méthode d'enseignement est exceptionnelle !",
    rating: 5,
  },
  {
    name: "Nirina Andriana",
    exam: "BEPC - 2024",
    mention: "Bien",
    text: "Les cours de CP2A m'ont donné confiance en moi. Les professeurs sont patients, compétents et savent comment motiver leurs élèves. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Hery Randria",
    exam: "BACC Série OSE - 2023",
    mention: "Assez Bien",
    text: "L'expérience et la compétence des professeurs font vraiment la différence. J'ai réussi mon BACC grâce à leur accompagnement personnalisé et leurs conseils précieux.",
    rating: 5,
  },
  {
    name: "Miora Razafindra",
    exam: "BACC Série A - 2024",
    mention: "Très Bien",
    text: "CP2A m'a aidée à exceller en français et en philosophie. Les cours sont bien structurés et les professeurs sont passionnés. C'est la clé de ma réussite !",
    rating: 5,
  },
  {
    name: "Amoros TODIZARA",
    exam: "BACC Série S - 2021",
    mention: "Bien",
    text: "Les travaux pratiques et les exercices proposés par CP2A m'ont parfaitement préparé aux épreuves du BAC. Une équipe pédagogique au top !",
    rating: 5,
  },
  {
    name: "Volatiana Raharison",
    exam: "BEPC - 2023",
    mention: "Très Bien",
    text: "Mon enfant a fait d'énormes progrès grâce aux cours CP2A. Les résultats parlent d'eux-mêmes. Merci à toute l'équipe !",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-lg px-6 py-2 bg-secondary text-secondary-foreground">
            Témoignages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Ils ont <span className="text-secondary">Réussi</span> avec nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos anciens élèves qui ont brillamment
            réussi leurs examens
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-green transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary"
            >
              <CardContent className="pt-6">
                <Quote
                  className="text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity"
                  size={40}
                />
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                <div className="border-t pt-4">
                  <p className="font-bold text-foreground text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.exam}
                  </p>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-secondary text-secondary-foreground"
                  >
                    Mention {testimonial.mention}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-accent/50 p-8 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Vous aussi, rejoignez nos élèves brillants !
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Préparez votre avenir avec des professeurs expérimentés et
            compétents
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-secondary">98%</p>
              <p className="text-sm text-muted-foreground">Taux de réussite</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary">15+</p>
              <p className="text-sm text-muted-foreground">Mentions TB/année</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cp2a-green">100+</p>
              <p className="text-sm text-muted-foreground">Élèves satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

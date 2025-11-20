import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cp2a-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-primary" size={32} />
              <h3 className="text-2xl font-bold">COURS CP2A</h3>
            </div>
            <p className="text-white/80 mb-4">
              Clubs des Professeurs Actifs d'Ambanja
            </p>
            <p className="text-white/70 italic text-sm">
              "L'expérience et la compétence font les différences"
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Formations</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Préparation BEPC</li>
              <li>• BAC Série A - Littérature</li>
              <li>• BAC Série L - Langues</li>
              <li>• BAC Série OSE - Économie</li>
              <li>• BAC Série D - Maths & Sciences</li>
              <li>• BAC Série S - Sciences Expérimentales</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>📞 032 49 649 14</li>
              <li>📱 Facebook: Cours CP2A Ambanja</li>
              <li>📍 Lycée Privé AVOTRA</li>
              <li>ANKATAFAHELY - Ambanja</li>
              <li className="text-secondary font-semibold">
                Rentrée 2026 ouverte !
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm flex items-center justify-center gap-2 flex-wrap">
            © {new Date().getFullYear()} COURS CP2A - Tous droits réservés
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Créé par Amoros TODIZARA nos anciens élèves
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

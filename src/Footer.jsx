import { motion } from "framer-motion";
import logo from "./assets/logo.png";

export default function Footer({ darkMode }) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`pt-16 pb-8 px-4 mt-12 shadow-inner rounded-t-3xl transition-colors duration-300 ${
        darkMode ? "bg-primary text-white" : "bg-dark text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About/Logo */}
        <div>
          <img
            src={logo}
            alt="First Ambulance Logo"
            className="h-20 mb-6 drop-shadow-xl transition-transform duration-300 hover:scale-105"
          />
          <p className="text-lg leading-relaxed text-white/90 font-light">
            SOS MÉDECIN CASABLANCA, votre service médical à domicile 24h/24 et 7j/7.  
Consultations urgentes, pédiatrie, suivi post-opératoire et transport en ambulance assurés par une équipe expérimentée et équipée.

          </p>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 tracking-wide">CONTACT</h3>
          <ul className="space-y-2 text-white/90 text-lg font-medium">
            <li className="transition-colors duration-200 hover:text-secondary">
              Casablanca, Maroc
            </li>
            <li className="transition-colors duration-200 hover:text-secondary">
              ambulance.first.maroc@gmail.com
            </li>
            <li className="transition-colors duration-200 hover:text-secondary">
              0666858569
            </li>
          </ul>
        </div>
        {/* Useful Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 tracking-wide">
            LIENS UTILES
          </h3>
          <ul className="space-y-2 text-white/90 text-lg font-medium">
            <li>
              <a
                href="#accueil"
                className="hover:text-secondary transition-colors duration-200"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-secondary transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#a-propos"
                className="hover:text-secondary transition-colors duration-200"
              >
                A propos de nous
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-white/60 text-sm tracking-wide">
        © {new Date().getFullYear()} First Ambulance & SOS Médecin Casablanca. Tous droits réservés.

      </div>
    </motion.footer>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo.png";
import ambulance from "./assets/ambulance.jpg";
import docteur from "./assets/docteur-visite.jpg";
import equipement from "./assets/equipement.jpg";

const images = [
  { src: logo, alt: "Logo SOS Médecin Casablanca" },
  { src: ambulance, alt: "Ambulance" },
  { src: docteur, alt: "Docteur en visite" },
  { src: equipement, alt: "Équipement médical" },
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  // Automated slider every 2s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 2000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="a-propos" className="py-16 bg-light dark:bg-dark transition-colors duration-300">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6 text-dark dark:text-light"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        À propos de SOS Médecin Casablanca
      </motion.h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-4">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg md:text-xl text-dark dark:text-light mb-4 leading-relaxed">
            SOS Médecin Casablanca est un service médical d'urgence à domicile opéré par First Ambulance.<br />
            Disponible 24h/24 et 7j/7, notre équipe intervient à Casablanca et dans tout le Maroc pour vous soigner chez vous.<br />
            Nos médecins qualifiés assurent des soins rapides, humains et professionnels.
          </p>
        </motion.div>
        {/* Slider */}
        <motion.div
          className="flex-1 flex flex-col items-center relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={images[current].src}
                className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-dark border border-primary/10 dark:border-light/10 w-full h-[300px] flex items-center justify-center"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <img src={images[current].src} alt={images[current].alt} className="w-full h-full object-cover object-center" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full border-2 ${current === i ? 'bg-primary border-primary' : 'bg-light dark:bg-dark border-primary/30 dark:border-light/30'} transition-all`}
                aria-label={`Aller à l'image ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

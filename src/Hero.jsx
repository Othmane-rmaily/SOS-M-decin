import { motion } from "framer-motion";
import hero1 from "./assets/hero1.jpg";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center text-light dark:text-light overflow-hidden"
      id="accueil"
    >
      {/* Background image with overlay */}
      <img
        src={hero1}
        alt="Médecin à domicile Casablanca"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60 dark:opacity-40 pointer-events-none select-none"
        draggable="false"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent dark:from-dark/80 dark:via-black/60 dark:to-transparent" />
      <motion.div
        className="container relative z-10 flex flex-col items-center text-center gap-8 max-w-2xl mx-auto py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={heroVariants}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
          SOS Médecin Casablanca
        </h1>
        <p className="text-lg md:text-2xl font-medium text-light/90 dark:text-light/80 mb-4">
          Intervention médicale à domicile 24h/24 et 7j/7 – Casablanca et partout au Maroc
        </p>
      </motion.div>
      {/* Floating Buttons - fixed to bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        <a
          href="tel:0666858569"
          className="flex items-center gap-2 px-6 py-3 rounded-full shadow-lg bg-secondary text-white text-lg font-semibold hover:bg-red-700 transition-all duration-200"
        >
          <span className="text-xl">📞</span> Appeler maintenant
        </a>
        <a
          href="https://wa.me/212666858569"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full shadow-lg bg-green-500 text-white text-lg font-semibold hover:bg-green-600 transition-all duration-200"
        >
          <span className="text-xl">💬</span> WhatsApp
        </a>
      </div>
    </section>
  );
}

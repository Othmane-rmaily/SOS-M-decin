import { useState } from "react";
import { motion } from "framer-motion";
import domicile from "./assets/domicile.jpg";
import pediatrique from "./assets/pédiatrique.jpg";
import postOp from "./assets/post-opératoire.jpg";
import ambulance from "./assets/ambulance.jpg";
import wellEquipped from "./assets/well-equipped.jpg";

const services = [
  {
    
    title: "Consultation médicale à domicile",
    desc: "Nos médecins généralistes interviennent pour adultes et enfants. Consultation rapide à domicile.",
    bg: domicile,
  },
  {
   
    title: "Urgence pédiatrique",
    desc: "Intervention rapide pour les enfants : fièvre, douleurs, vomissements, etc.",
    bg: pediatrique,
  },
  {
   
    title: "Suivi post-opératoire",
    desc: "Surveillance médicale à domicile après une hospitalisation.",
    bg: postOp,
  },
  {
  
    title: "Transport en ambulance",
    desc: "Transfert vers hôpital avec ambulance médicalisée si nécessaire.",
    bg: ambulance,
  },
  {
    
    title: "Équipement embarqué",
    desc: "ECG, oxymètre, oxygène, tensiomètre, etc. à bord pour une intervention complète.",
    bg: wellEquipped,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Services() {
  const [open, setOpen] = useState(null);
  return (
    <section id="services" className="py-16 bg-light dark:bg-dark transition-colors duration-300">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-dark dark:text-light font-montserrat">Nos Services Médicaux</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className={`relative group flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 rounded-2xl overflow-hidden min-h-[260px] md:min-h-[300px]`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            custom={i}
            onClick={() => setOpen(open === i ? null : i)}
            tabIndex={0}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              backgroundImage: `url(${service.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-8">
              <div className="text-4xl mb-3 select-none">{service.emoji}</div>
              <div className="text-lg font-semibold text-white mb-2 text-center font-montserrat">{service.title}</div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={open === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden w-full"
              >
                <p className="text-base text-white mt-2 text-center font-opensans">{service.desc}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
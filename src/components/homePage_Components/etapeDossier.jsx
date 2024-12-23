// IMPORTER LES PACKAGES REACT
import React from "react";

// IMPORTER D'AUTRES PACKAGES
import { motion } from "framer-motion";

// IMPORTER DES IMAGES
import image_paris from "../../../src/assets/images/background/paris_2.jpg";

// Données des étapes
const steps = [
  { id: 1, title: "1. Concours", description: "Épreuves écrites et orales." },
  {
    id: 2,
    title: "2. Admission",
    description: "Lettre d’acception dans une école.",
  },
  {
    id: 3,
    title: "3. Campus France",
    description: "Préparation au projet professionnel et à l’entretien.",
  },
  {
    id: 4,
    title: "4. Réservation de logement",
    description: "Trouver et réserver un logement.",
  },
  {
    id: 5,
    title: "5. Demande de visa",
    description: "Validation des documents et soumission de la demande.",
  },
  {
    id: 6,
    title: "6. Intégration en France",
    description: "Accueil et intégration dans votre école.",
  },
];

// Variantes d'animation pour chaque étape
const dossierVariants = {
  animate: {
    scale: [1, 1.1, 1], // Animation de zoom avant/arrière
    opacity: [1, 0.8, 1], // Variation d'opacité
    transition: {
      duration: 2, // Durée de l'animation
      repeat: Infinity, // Répétition infinie
      repeatDelay: 1, // Délai entre deux cycles
    },
  },
};

const EtapeDossier = () => {
  return (
    <div
      style={{ backgroundImage: `url(${image_paris})` }}
      className="relative bg-cover bg-center py-16 px-4 m-auto"
    >
      {/* Superposition noire avec opacité pour l'effet d'ombrage */}
      <div className="absolute inset-0 bg-[#040480] bg-opacity-75 z-10"></div>

      {/* Titre et description principale */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-20 text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-[#f6aa00]">
          Cheminement Chronologique
        </h1>
        <p className="text-gray-200 font-semibold mt-2">
          Les étapes clés de votre projet d'études.
        </p>
      </motion.div>

      {/* Conteneur des étapes */}
      <div className="relative max-w-4xl mx-auto z-20">
        {/* Ligne principale (cachée sur mobile) */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f6aa00] z-0"></div>

        {/* Liste des étapes avec animations */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={dossierVariants}
              animate="animate"
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Contenu de l'étape avec gradient et style */}
              <div
                className={`bg-gradient-to-t from-[#f6aa00] to-[#d98d05] border-white border-4 shadow-md rounded-lg p-6 w-72 z-20 ${
                  index % 2 === 0 ? "mr-auto text-right" : "ml-auto text-left"
                }`}
              >
                <h3 className="text-lg font-bold text-[#00008f]">
                  {step.title}
                </h3>
                <p className="text-md font-semibold text-white mt-2">
                  {step.description}
                </p>
              </div>

              {/* Point sur la ligne (caché sur mobile) */}
              <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#f6aa00] items-center justify-center z-[50]">
                <span className="text-white font-bold">{step.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EtapeDossier;

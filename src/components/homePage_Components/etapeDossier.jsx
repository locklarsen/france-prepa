import React from "react";
import { motion } from "framer-motion";

// Données des étapes
const steps = [
  { id: 1, title: "Admission", description: "Procédure d'admission en école." },
  {
    id: 2,
    title: "Campus France",
    description: "Entretien avec Campus France.",
  },
  {
    id: 3,
    title: "Réservation de logement",
    description: "Trouver et réserver un logement adapté.",
  },
  {
    id: 4,
    title: "Demande de visa",
    description: "Soumettre la demande et préparer les documents.",
  },
  {
    id: 5,
    title: "Accueil & intégration",
    description: "Arrivée en France et intégration dans l'école.",
  },
];

// Variantes d'animation
const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.3, // Décalage pour chaque étape
      duration: 0.5,
      type: "spring",
    },
  }),
};

const EtapeDossier = () => {
  return (
    <div
      className="relative bg-gray-200 bg-cover bg-center py-16 px-4 mx-auto my-16"
      id="etapeDossier"
    >
      {/* Superposition noire avec opacité */}
      <div className="absolute inset-0 bg-[#040480] bg-opacity-75 z-10"></div>

      <div className="relative z-20 text-center mb-12">
        <h1 className="text-3xl font-bold text-[#f6aa00]">
          Cheminement Chronologique
        </h1>
        <p className="text-gray-400 mt-2">
          Voici les étapes clés de votre projet d'études.
        </p>
      </div>

      {/* Conteneur des étapes */}
      <div className="relative max-w-4xl mx-auto z-20">
        {/* Ligne principale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f6aa00] z-20"></div>

        {/* Étapes */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={stepVariants}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Contenu de l'étape */}
              <div
                className={`bg-white shadow-md rounded-lg p-6 w-72 ${
                  index % 2 === 0 ? "text-right ml-auto" : "text-left mr-auto"
                }`}
              >
                <h3 className="text-lg font-semibold text-[#00008f]">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{step.description}</p>
              </div>

              {/* Point sur la ligne */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#f6aa00] flex items-center justify-center">
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

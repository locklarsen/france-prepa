// Importation des bibliothèques nécessaires
import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

// Importation des images
import image_paris from "../../../src/assets/images/background/paris.jpg";

// Liste des villes
const cities = [
  "Angers",
  "Bordeaux",
  "Caen",
  "Chambéry",
  "Lille",
  "Lyon",
  "Marseille",
  "Montpellier",
  "Nantes",
  "Nice",
  "Nîmes",
  "Rennes",
  "Strasbourg",
  "Toulouse",
  "Paris",
];

// Variantes d'animation pour chaque ville
const cityVariants = {
  animate: {
    scale: [1, 1.1, 1], // Effet de zoom avant/arrière
    opacity: [1, 0.8, 1], // Variation de l'opacité
    transition: {
      duration: 2, // Durée totale de l'animation
      repeat: Infinity, // Répétition infinie
      repeatDelay: 1, // Délai entre deux cycles
    },
  },
};

// Composant principal "CityNetwork"
const CityNetwork = () => {
  return (
    <div
      className={"bg-cover bg-center"}
      style={{ backgroundImage: `url(${image_paris})` }}
    >
    
      <div className={`w-full h-24 bg-[#ffff] opacity-75`}></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={"text-center mb-8  py-10 px-4"}
      >
        <h1 className={"text-4xl font-bold text-[#f7a901]"}>
          Partenaire de choix d’Eduservices
        </h1>
        <p className={"text-white mt-4 text-lg font-semibold"}>
          Une présence dans 60% des grandes villes françaises
        </p>
      </motion.div>

      {/* Grille des villes */}
      <div
        className={
          "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center"
        }
      >
        {cities.map((city, index) => (
          <motion.div
            key={index}
            variants={cityVariants}
            animate={"animate"}
            className={
              "bg-white shadow-md rounded-lg p-6 w-40 h-20 flex items-center justify-center text-center"
            }
          >
            <span className={"text-amber-600 mx-1"}>
              <FaLocationDot size={20} />
            </span>
            <h2 className={"text-lg font-semibold text-gray-800"}>{city}</h2>
          </motion.div>
        ))}
      </div>
      <div className={`w-full h-24 bg-[#ffff] opacity-75 mt-8`}></div>
    </div>
  );
};

export default CityNetwork;

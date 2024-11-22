import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCity, FaLocationDot, FaLocationPinLock } from "react-icons/fa6";
import { MapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { MdLocationCity } from "react-icons/md";

// Liste des villes
const cities = [
  "Lyon",
  "Toulouse",
  "Paris",
  "Angers",
  "Marseille",
  "Nice",
  "Lille",
  "Montpellier",
  "Bordeaux",
  "Strasbourg",
];

// Variantes d'animation
const cityVariants = {
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

const CityNetwork = () => {
  return (
    <div className="bg-gray-100 bg-cover bg-center py-16 px-4" id="cityNetwork">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#00008f]">
          Notre Réseau de Villes
        </h1>
        <p className="text-gray-600 mt-2">
          Explorez notre présence à travers la France
        </p>
      </div>

      {/* Grille des villes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
        {cities.map((city, index) => (
          <motion.div
            key={index}
            variants={cityVariants}
            animate="animate"
            className="bg-white shadow-md rounded-lg p-6 w-40 h-20 flex  items-center justify-center text-center"
          >
            <span className="text-amber-600 mx-1 ">
              <FaLocationDot size={20} />
            </span>
            <h2 className="text-lg font-semibold text-gray-800 ">{city}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CityNetwork;

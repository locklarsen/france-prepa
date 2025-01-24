// Importation des bibliothèques nécessaires
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Importation des composants réutilisables
import NavigationBar from "../../components/homePage_Components/NavigationBar";
import Footer from "../../components/homePage_Components/Footer";
import DownloadBrochureForm from "../../components/homePage_Components/DownloadBrochureForm";
import ScrollToTopButton from "../../components/general_usage_components/ScrollToTopButton";
import CityNetwork from "../../components/homePage_Components/CityNetwork";
import EtapeDossier from "../../components/homePage_Components/etapeDossier";

// Importation des images
import etudiant from "../../../src/assets/images/gallerie/etudiants.jpg";
import ecoles from "../../../src/assets/images/logos/ecoles.jpg";

import image_paris from "../../../src/assets/images/background/paris.jpg";
import { useLocation } from "react-router-dom";

// Définition des animations pour Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
    },
  },
};

// Composant pour gérer les animations d'apparition
const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Active l'animation une seule fois
    threshold: 0.1, // Seuil pour déclencher l'animation
  });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// Composant principal de la page "Études Internationales"
const EtudesInternationales = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div>
      {/* Bouton pour remonter en haut de la page */}
      <ScrollToTopButton />

      {/* Barre de navigation */}
      <NavigationBar />

      {/* Section d'en-tête avec image et texte */}
      <div className="relative w-full h-full">
        {/* Image de l'en-tête */}

        <div
          className="w-full h-[35rem]  bg-green-600] bg-cover"
          style={{ backgroundImage: `url(${ecoles})` }}
        ></div>
        {/* Texte de la section */}
        <div className="absolute inset-0 grid h-full w-full place-items-center items-end pb-8 bg-black/30">
          <div className="w-full text-center px-2">
            <AnimatedComponent>
              <div className="flex flex-col items-center py-14 px-2 text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  className={
                    "text-[#f7a901] font-[montserrat] uppercase font-extrabold text-4xl sm:text-7xl"
                  }
                >
                  FRANCE PREPA ACADEMY
                </motion.h1>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                  }}
                  className={"block mt-4 text-3xl font-bold text-[#00008f]"}
                >
                  Un réseau d’écoles en France métropolitaine
                </motion.span>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </div>

      {/* Contenu de la page */}
      <AnimatedComponent>
        <section id="schoolNetwork">
          <CityNetwork />
        </section>
      </AnimatedComponent>

      <AnimatedComponent>
        <EtapeDossier />
      </AnimatedComponent>
      <AnimatedComponent>
        <DownloadBrochureForm />
      </AnimatedComponent>

      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default EtudesInternationales;

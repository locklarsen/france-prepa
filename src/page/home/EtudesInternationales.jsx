// Importation des bibliothèques nécessaires
import React from "react";
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
  // Fonction pour défiler vers une section spécifique
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Ajoute un défilement fluide
    }
  };

  return (
    <div>
      {/* Bouton pour remonter en haut de la page */}
      <ScrollToTopButton />

      {/* Barre de navigation */}
      <NavigationBar />

      {/* Section d'en-tête avec image et texte */}
      <div className="relative h-[75vh] sm:h-[50vh] lg:h-[85vh]">
        {/* Image de l'en-tête */}
        <img
          src={etudiant}
          alt="voyage"
          className="h-full w-full object-cover"
        />

        {/* Texte de la section */}
        <div className="absolute inset-0 grid h-full w-full place-items-center items-end pb-8 bg-black/75">
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
                    "text-[#00008f] font-[montserrat] uppercase font-bold text-4xl sm:text-6xl dark:text-white"
                  }
                >
                  Etudes internationales
                </motion.h1>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                  }}
                  className={"block mt-2 text-2xl font-semibold text-white"}
                >
                  France Prepa Academy, Un réseau d’écoles en France
                  métropolitaine.
                </motion.span>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </div>

      {/* Contenu de la page */}
      <AnimatedComponent>
        <CityNetwork />
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

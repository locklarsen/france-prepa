import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavigationBar from "../../components/homePage_Components/NavigationBar";
import { Typography } from "@material-tailwind/react";
import Footer from "../../components/homePage_Components/Footer";

import etudiant from "../../../src/assets/images/gallerie/etudiants.jpg";
// IMPORT VIDÉO
import CityNetwork from "../../components/homePage_Components/CityNetwork";
import EtapeDossier from "../../components/homePage_Components/etapeDossier";

import DownloadBrochureForm from "../../components/homePage_Components/DownloadBrochureForm";
import ScrollToTopButton from "../../components/general_usage_components/ScrollToTopButton";

// Variantes d'animation pour Framer Motion
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

// Composant pour les animations
const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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

// Composant principal France Prépa
const EtudesInternationales = () => {
  // DEFILEMENT FLUIDE : Cette méthode permet de scroller entre les différentes sections avec un effet de fluidité
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Attribut au défilement un comportement fluide
    }
  };
  return (
    <div>
      <ScrollToTopButton />
      {/* Barre de navigation */}
      <NavigationBar />

      <div className="relative h-[75vh] sm:h-[50vh] lg:h-[85vh]">
        {/* Image de la diapositive */}
        <img
          src={etudiant}
          alt="voyage"
          className="h-full w-full object-cover"
        />

        {/* Texte de la diapositive */}
        <div className="absolute inset-0 grid h-full w-full place-items-center items-end pb-8 bg-black/75">
          <div className="w-5/6 md:w-3/4 lg:w-3/4 text-center px-4">
            <AnimatedComponent>
              <div className="flex flex-col items-center py-14 px-4 text-center">
                <Typography
                  variant="h1"
                  className="text-[#f6aa00] font-[montserrat] uppercase font-bold text-3xl sm:text-[40px]/[48px] dark:text-white"
                >
                  Etudes internationales
                </Typography>
                <span
                  className="block mt-2 text-2xl font-semibold"
                  style={{ color: "#f70b1b" }}
                >
                  France Prépa, un réseau d’école en France
                </span>
                {/* <p className="mt-4 text-base text-white">
                  France Prépa, un réseau d’école en France
                </p> */}
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </div>

      {/* Section Titre */}
      <AnimatedComponent>
        <div className="flex flex-col items-center py-14 px-4 text-center">
          <Typography
            variant="h1"
            className="text-[#000097] font-[montserrat] uppercase font-bold text-3xl sm:text-[40px]/[48px] dark:text-white"
          ></Typography>
          <span
            className="block mt-2 text-lg font-semibold capitalize"
            style={{ color: "#f70b1b" }}
          ></span>
        </div>
      </AnimatedComponent>
      <AnimatedComponent>
        <CityNetwork />
      </AnimatedComponent>
      <AnimatedComponent>
        <EtapeDossier />
      </AnimatedComponent>

      <AnimatedComponent>
        <DownloadBrochureForm />
      </AnimatedComponent>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EtudesInternationales;

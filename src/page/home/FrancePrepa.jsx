import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavigationBar from "../../components/homePage_Components/NavigationBar";
import LargeVideo from "../../components/general_usage_components/LargeVideo";
import image_preview from "../../../src/assets/images/gallerie/orientation.JPG";
import { Typography } from "@material-tailwind/react";
import Footer from "../../components/homePage_Components/Footer";
import { Link } from "react-router-dom";
import Diplomes from "../../components/homePage_Components/Diplomes";
import FrancePrepaTeam from "../../components/homePage_Components/FrancePrepaTeam";

// IMPORT VIDÉO
import video from "../../../src/assets/videos/video_01.MP4";
import voyage from "../../../src/assets/images/gallerie/voyage.jpg";
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
      ScrollToTopButton
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
const FrancePrepa = () => {
  // DEFILEMENT FLUIDE : Cette méthode permet de scroller entre les différentes sections avec un effet de fluidité
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Attribut au défilement un comportement fluide
    }
  };
  return (
    <div className="bg-white">
      <ScrollToTopButton />
      {/* Barre de navigation */}
      <NavigationBar />
      <div className="relative h-[75vh] sm:h-[50vh] lg:h-[85vh]">
        {/* Image de la diapositive */}
        <img src={voyage} alt="voyage" className="h-full w-full object-cover" />

        {/* Texte de la diapositive */}
        <div className="absolute inset-0 grid h-full w-full place-items-center items-end pb-8 bg-black/75">
          <div className="w-5/6 md:w-3/4 lg:w-3/4 text-center px-4">
            <AnimatedComponent>
              <div className="flex flex-col items-center py-14 px-4 text-center">
                <Typography
                  variant="h1"
                  className="text-[#f6aa00] font-[montserrat] uppercase font-bold text-3xl sm:text-[40px]/[48px] dark:text-white"
                >
                  France Prépa Academy
                </Typography>
                <span
                  className="block mt-2 text-2xl font-semibold"
                  style={{ color: "#f70b1b" }}
                >
                  L’ouverture aux grandes écoles en France
                </span>
                <p className="mt-4 text-base text-white">
                  Notre mission consiste à faciliter aux étudiants africains
                  l’accès aux grandes écoles de commerce, de management et du
                  digital en France, et à les encadrer dans la validation de
                  leurs diplômes visés par l’Etat français.
                </p>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </div>
      {/* Section Présentation */}
      <AnimatedComponent>
        <div className="bg-white flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-16">
          {/* Vidéo */}
          <LargeVideo videoSource={video} imagePreview={image_preview} />
          {/* <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <div className="overflow-hidden rounded-[4rem] w-11/12 sm:w-3/4 md:w-2/3 lg:w-full"></div>
          </div> */}
        </div>
      </AnimatedComponent>
      {/* Section Diplômes */}
      <AnimatedComponent>
        <Diplomes />
      </AnimatedComponent>
      {/* Section Écoles partenaires */}
      <AnimatedComponent>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0a090f] text-white py-16 px-6 gap-8 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
          {/* Équipe dévouée */}
          <div className="flex flex-col justify-center">
            <Typography
              variant="h2"
              className="text-[#f6aa00] font-[montserrat] uppercase font-bold text-3xl sm:text-[40px]/[48px]"
            >
              France Prépa Academy
            </Typography>
            <span className="mt-3 text-lg font-semibold text-center text-white">
              Une{" "}
              <Link
                onClick={() => scrollToSection("team")}
                className="font-black underline hover:text-[#f6aa00]"
              >
                équipe dévouée
              </Link>{" "}
              pour l’obtention de votre visa
            </span>
          </div>

          {/* Écoles partenaires */}
          <div className="flex flex-col justify-center">
            <span className="mt-1 text-lg font-semibold text-center text-white">
              Une dizaine d’
              <Link
                to="/etudes_internationales"
                className="font-black underline hover:text-[#f6aa00]"
                onClick={() => scrollToSection("ecoles")}
              >
                écoles partenaires
              </Link>{" "}
              dans la France hexagonale
            </span>
          </div>
        </div>
      </AnimatedComponent>
      {/* Section Équipe */}
      <AnimatedComponent>
        <FrancePrepaTeam />
      </AnimatedComponent>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FrancePrepa;

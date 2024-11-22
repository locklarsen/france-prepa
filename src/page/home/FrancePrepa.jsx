import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavigationBar from "../../components/homePage_Components/NavigationBar";
import Video from "../../components/general_usage_components/Video";
import { Button, Typography } from "@material-tailwind/react";
import Footer from "../../components/homePage_Components/Footer";
import { Link } from "react-router-dom";
import Diplomes from "../../components/homePage_Components/Diplomes";
import FrancePrepaTeam from "../../components/homePage_Components/FrancePrepaTeam";

// IMPORT VIDÉO
import video from "../../../src/assets/videos/video_01.MP4";

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
      {/* Barre de navigation */}
      <NavigationBar />

      {/* Section Titre */}
      <AnimatedComponent>
        <div className="flex flex-col items-center py-14 px-4 text-center">
          <Typography
            variant="h1"
            className="text-[#000097] font-[montserrat] uppercase font-bold text-3xl sm:text-[40px]/[48px] dark:text-white"
          >
            France Prépa
          </Typography>
          <span
            className="block mt-2 text-lg font-semibold capitalize"
            style={{ color: "#f70b1b" }}
          >
            L’ouverture aux grandes écoles en France
          </span>
        </div>
      </AnimatedComponent>

      {/* Section Présentation */}
      <AnimatedComponent>
        <div className="bg-white flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-16">
          {/* Texte de présentation */}
          <div className="lg:max-w-xl text-center lg:text-left">
            <Typography
              variant="h2"
              className="text-gray-800 font-light text-3xl leading-snug sm:text-5xl sm:leading-snug"
            >
              France{" "}
              <span className="text-[#000097] border-b-8 border-g4 px-2 font-bold">
                Prépa
              </span>
            </Typography>
            <p className="mt-4 text-base text-gray-700">
              Notre mission consiste à faciliter aux étudiants africains l’accès
              aux grandes écoles de commerce, de management et du digital en
              France, et à les encadrer dans la validation de leurs diplômes
              visés par l’Etat français.
            </p>
            <Button
              size="lg"
              className="mt-6 font-[montserrat] bg-[#f6aa00] hover:bg-[#e59d01] hover:border-1 hover:border-yellow-100"
            >
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>

          {/* Vidéo */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <div className="overflow-hidden rounded-[4rem] w-11/12 sm:w-3/4 md:w-2/3 lg:w-full">
              <Video url={video} />
            </div>
          </div>
        </div>
      </AnimatedComponent>

      {/* Section Diplômes */}
      <AnimatedComponent>
        <Diplomes />
      </AnimatedComponent>

      {/* Section Écoles partenaires */}
      <AnimatedComponent>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-black text-white py-16 px-6 gap-8">
          {/* Écoles partenaires */}
          <div className="flex flex-col justify-center">
            <Typography
              variant="h2"
              className="text-white font-[montserrat] uppercase font-bold text-3xl sm:text-[40px]/[48px]"
            >
              France Prépa
            </Typography>
            <span
              className="mt-2 text-lg font-semibold capitalize"
              style={{ color: "#efb000" }}
            >
              Une dizaine d’{" "}
              <Link
                to="/etudes_internationales"
                className="font-black underline"
                onClick={() => scrollToSection("ecoles")}
              >
                écoles partenaires
              </Link>{" "}
              dans la France hexagonale
            </span>
          </div>

          {/* Équipe dévouée */}
          <div className="flex flex-col justify-center">
            <Typography
              variant="h2"
              className="text-white font-[montserrat] uppercase font-bold text-3xl sm:text-[40px]/[48px]"
            >
              France Prépa
            </Typography>
            <span
              className="mt-2 text-lg font-semibold capitalize"
              style={{ color: "#efb000" }}
            >
              Une{" "}
              <Link
                onClick={() => scrollToSection("team")}
                className="font-black underline"
              >
                équipe dévouée
              </Link>
              pour l’obtention de votre visa
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

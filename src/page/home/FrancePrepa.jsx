// IMPORTER LES PACKAGES REACT
import React from "react";
import { Link } from "react-router-dom";

// IMPORTER D'AUTRES PACKAGES
import { motion } from "framer-motion";

// IMPORTER DES COMPOSANT
import { useInView } from "react-intersection-observer";
import NavigationBar from "../../components/homePage_Components/NavigationBar";
import Video from "../../components/general_usage_components/Video";
import image_preview from "../../../src/assets/images/gallerie/orientation.JPG";
import { Typography } from "@material-tailwind/react";
import Footer from "../../components/homePage_Components/Footer";
import Diplomes from "../../components/homePage_Components/Diplomes";
import FrancePrepaTeam from "../../components/homePage_Components/FrancePrepaTeam";
import ScrollToTopButton from "../../components/general_usage_components/ScrollToTopButton";

// IMPORTER DES VIDÉOS
import url_video from "../../../src/assets/videos/video_01.MP4";

// IMPORTER DES IMAGE
import voyage from "../../../src/assets/images/gallerie/mbw.JPG";

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
        <img src={voyage} alt="voyage" className="h-full w-full object-fut" />
      </div>
      <section
        className={`flex flex-wrap lg:flex-nowrap px-14 pb-2 pt-0 items-center m-auto shadow-md shadow-gray-100`}
        id="about"
      >
        {/* Section Texte */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
          className={`w-full lg:w-8/12 px-1 lg:mt-0 mt-4`}
        >
          <div className={"flex flex-wrap"}>
            <div className={"w-full"}>
              <div className={"mb-5 max-w-full text-center lg:mb-20"}>
                <motion.Typography
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  variant="h1"
                  className="text-[#f6aa00] font-[montserrat] uppercase font-bold text-3xl sm:text-[40px]/[48px] dark:text-white"
                >
                  France Prépa Academy
                </motion.Typography>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                  }}
                  className="block mt-2 text-2xl font-semibold"
                  style={{ color: "#f70b1b" }}
                >
                  L’ouverture aux grandes écoles en France
                </motion.span>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8,
                  }}
                  className="mt-4 text-base text-black"
                >
                  Notre mission consiste à faciliter aux étudiants africains
                  l’accès aux grandes écoles de commerce, de management et du
                  digital en France, et à les encadrer dans la validation de
                  leurs diplômes visés par l’Etat français.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        <div
          className={`bg-[#f7a901] hover:bg-[#00008f] hover:text-white rounded-lg w-full lg:w-4/12 px-2 py-3  mt-4 lg:mt-0 shadow-md shadow-gray-300 lg:order-last`}
        >
          <div className={`flex items-center justify-center`}>
            <AnimatedComponent>
              <div className={`relative w-full h-full italic z-50`}>
                <Video
                  videoSource={url_video}
                  imagePreview={image_preview}
                  subtitle={"Mot du Promoteur de France Prépa Academy"}
                />
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </section>

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

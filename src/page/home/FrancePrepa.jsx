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

// IMPORTER DES IMAGE
import voyage from "../../../src/assets/images/gallerie/mbw.JPG";
import voyage_2 from "../../../src/assets/images/carousel/2.JPG";
import personne from "../../../src/assets/images/gallerie/promoteur.jpg"; // Image secondaire

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
      <div
        className="relative w-full h-[32rem] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${voyage}')` }}
      ></div>

      <section
        className={`flex flex-wrap lg:flex-nowrap px-4 lg:px-8 py-2 items-center m-auto shadow-md shadow-gray-100`}
        id="about"
      >
        <div
          className={`bg-[#f7a901] hover:bg-[#00008f] hover:text-white rounded-lg w-full lg:w-4/12 px-2 py-3  mt-0 lg:mt-0 shadow-md shadow-gray-300 lg:order-first`}
        >
          <div className={`flex items-center justify-center`}>
            <AnimatedComponent>
              <div className={`relative w-full h-full italic z-50`}>
                <figure>
                  <img
                    src={personne}
                    className={`rounded-lg rounded-b-none w-full h-full`}
                  ></img>
                </figure>
                <figcaption className="bg-[#00008f] py-3 rounded-t-none rounded-lg">
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8,
                    }}
                    className="text-lg font-bold text-white"
                  >
                    Pr. Benjamin B. Obama
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8,
                    }}
                    className="text-lg font-normal text-white italic"
                  >
                    Maître de conférences au groupe universitaire Eduservices
                  </motion.p>
                </figcaption>
              </div>
            </AnimatedComponent>
          </div>
        </div>
        {/* Section Texte */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
          className={`w-full lg:w-8/12 lg:mt-0 mt-4`}
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
                  className="text-[#d8354a] font-[montserrat] uppercase font-bold text-3xl sm:text-[40px]/[48px] dark:text-white"
                >
                  Mot du promoteur
                </motion.Typography>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8,
                  }}
                  className="mt-4 lg:px-4 text-base text-black"
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
      </section>

      {/* Section Diplômes */}
      <AnimatedComponent>
        <Diplomes />
      </AnimatedComponent>
      {/* Section Écoles partenaires */}
      <AnimatedComponent></AnimatedComponent>
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

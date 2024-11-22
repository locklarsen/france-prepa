import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import "../styles.css";

//  IMPORTER DES IMAGES
import image_orientation from "../../assets/images/gallerie/orientation.JPG";
import photo_famille from "../../../src/assets/images/gallerie/photo_famille.JPG";
import image_jeune_fille from "../../../src/assets/images/temoignanes/personnage1.jpeg";
const About = () => {
  const plusValues = [
    {
      description:
        "Une équipe experte à l’écoute de votre projet professionnel",
    },
    { description: "Un record de 50 visas en deux années" },
    { description: "L’accès aux grandes écoles en France" },
    { description: "Une maîtrise parfaite de la procédure de visa" },
    { description: "L’octroi des bourses d’excellence aux étudiants" },
    { description: "Et bien d'autres..." },
  ];

  // Variantes pour l'animation des éléments
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Point de départ
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.3, // Décalage progressif pour chaque élément
      },
    }),
  };
  return (
    <section
      className="bg-white flex flex-wrap p-14 items-center justify-between m-auto"
      id="about"
    >
      {/* Texte Section */}
      <motion.div
        // Animation
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 2 }}
        className="order-1 w-full px-4 lg:w-1/2 xl:w-5/12 mt-10 lg:mt-0"
      >
        <div>
          <span
            className="block mb-4 text-lg font-semibold py-2 capitalize"
            style={{ color: "#f70b1b" }}
          >
            Les plus-values de France Prépas
          </span>
          <Typography
            variant="h1"
            className="text-[#00008f] font-[montserrat] uppercase font-bold mb-5 text-3xl dark:text-white sm:text-[40px]/[48px]"
          >
            France Prépa c'est :
          </Typography>
          {/* Liste des plus-values avec animation séquentielle */}
          <motion.dl
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
          >
            {plusValues.map((plusvalue, i) => (
              <motion.div
                key={plusvalue.description}
                variants={itemVariants}
                custom={i} // Permet de passer l'index à la variante
                className="border-t border-gray-200 pt-4"
              >
                {plusvalue.description}
              </motion.div>
            ))}
          </motion.dl>
          <Button
            size="lg"
            className="font-[montserrat] bg-[#f6aa00] hover:bg-[#e59d01] hover:border-1 hover:border-yellow-100 mx-auto my-4"
          >
            <Link to={"/signup"}> S'inscrire</Link>
          </Button>
        </div>
      </motion.div>
      {/* Images Section */}
      <div className="order-2 bg-[#f7a901] hover:bg-[#C48703FF]rounded-lg w-full p-7 mt-7 lg:w-6/12 shadow-md shadow-gray-300">
        <div className="flex items-center -mx-3 sm:-mx-4">
          <div className="w-full px-3 sm:px-4 xl:w-1/2">
            <div className="py-3 sm:py-4">
              <img
                src={image_orientation}
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            <div className="py-3 sm:py-4">
              <img src={photo_famille} alt="" className="w-full rounded-2xl" />
            </div>
          </div>
          <div className="w-full px-3 sm:px-4 xl:w-1/2">
            <div className="relative z-10 my-4">
              <img
                src={image_jeune_fille}
                alt=""
                className="w-full rounded-2xl"
              />
              <span className="absolute -right-7 -bottom-7 z-[-1]">
                <svg
                  width={134}
                  height={106}
                  viewBox="0 0 134 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.66667"
                    cy={104}
                    r="1.66667"
                    transform="rotate(-90 1.66667 104)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3333"
                    cy={104}
                    r="1.66667"
                    transform="rotate(-90 16.3333 104)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={31}
                    cy={104}
                    r="1.66667"
                    transform="rotate(-90 31 104)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy={104}
                    r="1.66667"
                    transform="rotate(-90 45.6667 104)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3334"
                    cy={104}
                    r="1.66667"
                    transform="rotate(-90 60.3334 104)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="88.6667"
                    cy={104}
                    r="1.66667"
                    transform="rotate(-90 88.6667 104)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="117.667"
                    cy={104}
                    r="1.66667"
                    transform="rotate(-90 117.667 104)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="74.6667"
                    cy={104}
                    r="1.66667"
                    transform="rotate(-90 74.6667 104)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={103}
                    cy={104}
                    r="1.66667"
                    transform="rotate(-90 103 104)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={132}
                    cy={104}
                    r="1.66667"
                    transform="rotate(-90 132 104)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 1.66667 89.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3333"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 16.3333 89.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={31}
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 31 89.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 45.6667 89.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3333"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 89.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="88.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 89.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="117.667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 89.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="74.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 89.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={103}
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 103 89.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={132}
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 132 89.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="74.6673"
                    r="1.66667"
                    transform="rotate(-90 1.66667 74.6673)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 31.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 16.3333 74.6668)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3333"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 31.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={31}
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 31 74.6668)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={31}
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 31 31.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 45.6667 74.6668)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 31.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 60.3333 74.6668)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3333"
                    cy="30.9998"
                    r="1.66667"
                    transform="rotate(-90 60.3333 30.9998)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="88.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 88.6667 74.6668)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="88.6667"
                    cy="30.9998"
                    r="1.66667"
                    transform="rotate(-90 88.6667 30.9998)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="117.667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 117.667 74.6668)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="117.667"
                    cy="30.9998"
                    r="1.66667"
                    transform="rotate(-90 117.667 30.9998)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="74.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 74.6667 74.6668)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="74.6667"
                    cy="30.9998"
                    r="1.66667"
                    transform="rotate(-90 74.6667 30.9998)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={103}
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 103 74.6668)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={103}
                    cy="30.9998"
                    r="1.66667"
                    transform="rotate(-90 103 30.9998)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={132}
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 132 74.6668)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={132}
                    cy="30.9998"
                    r="1.66667"
                    transform="rotate(-90 132 30.9998)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 60.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="16.3333"
                    r="1.66667"
                    transform="rotate(-90 1.66667 16.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 60.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3333"
                    cy="16.3333"
                    r="1.66667"
                    transform="rotate(-90 16.3333 16.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={31}
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 31 60.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={31}
                    cy="16.3333"
                    r="1.66667"
                    transform="rotate(-90 31 16.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 60.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="16.3333"
                    r="1.66667"
                    transform="rotate(-90 45.6667 16.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 60.3333 60.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3333"
                    cy="16.3333"
                    r="1.66667"
                    transform="rotate(-90 60.3333 16.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="88.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 88.6667 60.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="88.6667"
                    cy="16.3333"
                    r="1.66667"
                    transform="rotate(-90 88.6667 16.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="117.667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 117.667 60.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="117.667"
                    cy="16.3333"
                    r="1.66667"
                    transform="rotate(-90 117.667 16.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="74.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 74.6667 60.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="74.6667"
                    cy="16.3333"
                    r="1.66667"
                    transform="rotate(-90 74.6667 16.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={103}
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 103 60.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={103}
                    cy="16.3333"
                    r="1.66667"
                    transform="rotate(-90 103 16.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={132}
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 132 60.0003)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={132}
                    cy="16.3333"
                    r="1.66667"
                    transform="rotate(-90 132 16.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="45.3333"
                    r="1.66667"
                    transform="rotate(-90 1.66667 45.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 1.66667 1.66683)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3333"
                    cy="45.3333"
                    r="1.66667"
                    transform="rotate(-90 16.3333 45.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3333"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 16.3333 1.66683)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={31}
                    cy="45.3333"
                    r="1.66667"
                    transform="rotate(-90 31 45.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={31}
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 31 1.66683)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="45.3333"
                    r="1.66667"
                    transform="rotate(-90 45.6667 45.3333)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 45.6667 1.66683)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3333"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 45.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3333"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 60.3333 1.66683)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="88.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 45.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="88.6667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 88.6667 1.66683)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="117.667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 45.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="117.667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 117.667 1.66683)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="74.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 45.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="74.6667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 74.6667 1.66683)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={103}
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 103 45.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={103}
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 103 1.66683)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={132}
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 132 45.3338)"
                    fill="#3056D3"
                  />
                  <circle
                    cx={132}
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 132 1.66683)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

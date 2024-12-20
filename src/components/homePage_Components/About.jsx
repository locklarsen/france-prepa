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

  const cardvariants = {
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
  return (
    <section
      className="flex flex-wrap px-8 py-8 items-center justify-between m-auto"
      id="about"
    >
      {/* Texte Section */}
      <motion.div
        // Animation
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 2 }}
        className="w-full px-4 lg:w-1/2 xl:w-6/12 mt-2 lg:mt-0"
      >
        <div>
          <span
            className="block mb-4 text-lg font-bold py-2 uppercase"
            style={{ color: "#f70b1b" }}
          >
            Les plus-values de France Prépa Academy
          </span>
          <Typography
            variant="h1"
            className="text-[#00008f] font-[montserrat] uppercase font-bold mb-1 text-3xl dark:text-white sm:text-[40px]/[48px]"
          >
            France Prépa Academy c'est :
          </Typography>
          {/* Liste des plus-values avec animation séquentielle */}
          <motion.dl
            initial="hidden"
            animate="visible"
            className=" w-full mt-8 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-4"
          >
            {plusValues.map((plusvalue, i) => (
              <motion.div
                key={plusvalue.description}
                variants={cardvariants}
                animate="animate"
                custom={i} // Permet de passer l'index à la variante
                className="pb-6 sm:pb-0 pt-2 w-full sm:w-auto px-2 sm:px-4"
              >
                <div className="mb-2 rounded-lg bg-gradient-to-t from-[#07076b] to-[#030341] text-white py-6 px-4 shadow-md md:px-7 xl:px-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex flex-col items-center">
                    <div className="mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-[#f6aa00]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-normal text-white">
                    {plusvalue.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.dl>

          {/* <Button
            size="lg"
            className="font-[montserrat] bg-[#f6aa00] hover:bg-[#e59d01] hover:border-1 hover:border-yellow-100 mx-auto my-4"
          >
            <Link to={"/signup"}> S'inscrire</Link>
          </Button> */}
        </div>
      </motion.div>
      {/* Images Section */}
      <div className="border-2 bg-[#f7a901] hover:bg-[#C48703FF]rounded-lg w-fit p-3 mt-7 lg:w-6/12 shadow-md shadow-gray-300">
        <div className="flex items-center -mx-2 sm:-mx-2">
          <div className="w-full px-2 sm:px-0 xl:w-1/2">
            <div className="py-2 sm:py-4">
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
          <div className="w-full px-2 sm:px-2 xl:w-1/2">
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

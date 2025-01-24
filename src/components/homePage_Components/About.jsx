// Importer les packages React
import React from "react";

// Importer d'autres packages nécessaires
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

// Importer des images
import image_jeune_fille from "../../../src/assets/images/gallerie/g1.jpg";
import { TabGroup } from "@headlessui/react";
import { FaFacebook } from "react-icons/fa6";

const About = () => {
  // Liste des valeurs ajoutées présentées
  const plusValues = [
    {
      description:
        "Une équipe experte à l’écoute de votre projet professionnel",
      icone: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
            clip-rule="evenodd"
          />
          <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
        </svg>
      ),
    },
    {
      description: "L’octroi des bourses d’excellence aux étudiants",
      icone: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
        </svg>
      ),
    },

    {
      description: "Un record de 50 visas en deux années",
      icone: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
        </svg>
      ),
    },
    {
      description: "L’accès aux grandes écoles en France",
      icone: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
          <path
            fill-rule="evenodd"
            d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
            clip-rule="evenodd"
          />
          <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
        </svg>
      ),
    },
  ];

  // Variantes d'animation pour les items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.3,
      },
    }),
  };

  // Variantes d'animation pour les cartes
  const cardvariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <section
      className={`flex flex-wrap lg:flex-nowrap px-3 lg:px-14 pb-2 pt-0 items-center m-auto shadow-md shadow-gray-100`}
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
        <div>
          <Typography
            variant="h1"
            className={`text-[#00008f] font-[montserrat] uppercase font-bold mb-1 text-3xl dark:text-white sm:text-[40px]/[48px]`}
          >
            France Prépa Academy c'est :
          </Typography>
          <motion.dl
            initial="hidden"
            animate="visible"
            className={`w-full px-3 mt-8 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-4`}
          >
            {plusValues.map((plusvalue, i) => (
              <motion.div
                key={plusvalue.description}
                variants={cardvariants}
                animate="animate"
                custom={i}
                className={`pb-1 sm:pb-0 pt-2 w-full sm:w-auto px-2 sm:px-4`}
              >
                <div
                  className={`mb-2 rounded-lg bg-gradient-to-t from-[#07076b] to-[#030341] text-white py-3 px-6 shadow-md md:px-7 xl:px-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  <div className={`flex flex-col items-center`}>
                    <div
                      className={`mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-[#f6aa00]`}
                    >
                      <span className={`text-white`}>{plusvalue.icone}</span>
                    </div>
                  </div>
                  <p className={`font-medium text-white`}>
                    {plusvalue.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      {/* Section Images */}
      <div
        className={`border-2 bg-[#f7a901] hover:bg-[#00008f] rounded-lg w-full lg:w-4/12 p-3 mt-4 lg:mt-0 shadow-md shadow-gray-300 lg:order-last`}
      >
        <div className={`flex items-center justify-center`}>
          <div className={`relative w-full h-full`}>
            <img
              src={image_jeune_fille}
              alt="Étudiante France Prépa"
              className={`w-full h-full object-cover rounded-2xl`}
            />
            <span className="absolute -right-7 -bottom-7 z-[1]">
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
                  fill="#00008f"
                />
                <circle
                  cx="16.3333"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 16.3333 104)"
                  fill="#00008f"
                />
                <circle
                  cx={31}
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 31 104)"
                  fill="#00008f"
                />
                <circle
                  cx="45.6667"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 45.6667 104)"
                  fill="#00008f"
                />
                <circle
                  cx="60.3334"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 60.3334 104)"
                  fill="#00008f"
                />
                <circle
                  cx="88.6667"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 88.6667 104)"
                  fill="#00008f"
                />
                <circle
                  cx="117.667"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 117.667 104)"
                  fill="#00008f"
                />
                <circle
                  cx="74.6667"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 74.6667 104)"
                  fill="#00008f"
                />
                <circle
                  cx={103}
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 103 104)"
                  fill="#00008f"
                />
                <circle
                  cx={132}
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 132 104)"
                  fill="#00008f"
                />
                <circle
                  cx="1.66667"
                  cy="89.3333"
                  r="1.66667"
                  transform="rotate(-90 1.66667 89.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="16.3333"
                  cy="89.3333"
                  r="1.66667"
                  transform="rotate(-90 16.3333 89.3333)"
                  fill="#00008f"
                />
                <circle
                  cx={31}
                  cy="89.3333"
                  r="1.66667"
                  transform="rotate(-90 31 89.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="45.6667"
                  cy="89.3333"
                  r="1.66667"
                  transform="rotate(-90 45.6667 89.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="60.3333"
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 60.3333 89.3338)"
                  fill="#00008f"
                />
                <circle
                  cx="88.6667"
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 88.6667 89.3338)"
                  fill="#00008f"
                />
                <circle
                  cx="117.667"
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 117.667 89.3338)"
                  fill="#00008f"
                />
                <circle
                  cx="74.6667"
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 74.6667 89.3338)"
                  fill="#00008f"
                />
                <circle
                  cx={103}
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 103 89.3338)"
                  fill="#00008f"
                />
                <circle
                  cx={132}
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 132 89.3338)"
                  fill="#00008f"
                />
                <circle
                  cx="1.66667"
                  cy="74.6673"
                  r="1.66667"
                  transform="rotate(-90 1.66667 74.6673)"
                  fill="#00008f"
                />
                <circle
                  cx="1.66667"
                  cy="31.0003"
                  r="1.66667"
                  transform="rotate(-90 1.66667 31.0003)"
                  fill="#00008f"
                />
                <circle
                  cx="16.3333"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 16.3333 74.6668)"
                  fill="#00008f"
                />
                <circle
                  cx="16.3333"
                  cy="31.0003"
                  r="1.66667"
                  transform="rotate(-90 16.3333 31.0003)"
                  fill="#00008f"
                />
                <circle
                  cx={31}
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 31 74.6668)"
                  fill="#00008f"
                />
                <circle
                  cx={31}
                  cy="31.0003"
                  r="1.66667"
                  transform="rotate(-90 31 31.0003)"
                  fill="#00008f"
                />
                <circle
                  cx="45.6667"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 45.6667 74.6668)"
                  fill="#00008f"
                />
                <circle
                  cx="45.6667"
                  cy="31.0003"
                  r="1.66667"
                  transform="rotate(-90 45.6667 31.0003)"
                  fill="#00008f"
                />
                <circle
                  cx="60.3333"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 60.3333 74.6668)"
                  fill="#00008f"
                />
                <circle
                  cx="60.3333"
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 60.3333 30.9998)"
                  fill="#00008f"
                />
                <circle
                  cx="88.6667"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 88.6667 74.6668)"
                  fill="#00008f"
                />
                <circle
                  cx="88.6667"
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 88.6667 30.9998)"
                  fill="#00008f"
                />
                <circle
                  cx="117.667"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 117.667 74.6668)"
                  fill="#00008f"
                />
                <circle
                  cx="117.667"
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 117.667 30.9998)"
                  fill="#00008f"
                />
                <circle
                  cx="74.6667"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 74.6667 74.6668)"
                  fill="#00008f"
                />
                <circle
                  cx="74.6667"
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 74.6667 30.9998)"
                  fill="#00008f"
                />
                <circle
                  cx={103}
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 103 74.6668)"
                  fill="#00008f"
                />
                <circle
                  cx={103}
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 103 30.9998)"
                  fill="#00008f"
                />
                <circle
                  cx={132}
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 132 74.6668)"
                  fill="#00008f"
                />
                <circle
                  cx={132}
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 132 30.9998)"
                  fill="#00008f"
                />
                <circle
                  cx="1.66667"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 1.66667 60.0003)"
                  fill="#00008f"
                />
                <circle
                  cx="1.66667"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 1.66667 16.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="16.3333"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 16.3333 60.0003)"
                  fill="#00008f"
                />
                <circle
                  cx="16.3333"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 16.3333 16.3333)"
                  fill="#00008f"
                />
                <circle
                  cx={31}
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 31 60.0003)"
                  fill="#00008f"
                />
                <circle
                  cx={31}
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 31 16.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="45.6667"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 45.6667 60.0003)"
                  fill="#00008f"
                />
                <circle
                  cx="45.6667"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 45.6667 16.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="60.3333"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 60.3333 60.0003)"
                  fill="#00008f"
                />
                <circle
                  cx="60.3333"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 60.3333 16.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="88.6667"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 88.6667 60.0003)"
                  fill="#00008f"
                />
                <circle
                  cx="88.6667"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 88.6667 16.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="117.667"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 117.667 60.0003)"
                  fill="#00008f"
                />
                <circle
                  cx="117.667"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 117.667 16.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="74.6667"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 74.6667 60.0003)"
                  fill="#00008f"
                />
                <circle
                  cx="74.6667"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 74.6667 16.3333)"
                  fill="#00008f"
                />
                <circle
                  cx={103}
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 103 60.0003)"
                  fill="#00008f"
                />
                <circle
                  cx={103}
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 103 16.3333)"
                  fill="#00008f"
                />
                <circle
                  cx={132}
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 132 60.0003)"
                  fill="#00008f"
                />
                <circle
                  cx={132}
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 132 16.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="1.66667"
                  cy="45.3333"
                  r="1.66667"
                  transform="rotate(-90 1.66667 45.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="1.66667"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 1.66667 1.66683)"
                  fill="#00008f"
                />
                <circle
                  cx="16.3333"
                  cy="45.3333"
                  r="1.66667"
                  transform="rotate(-90 16.3333 45.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="16.3333"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 16.3333 1.66683)"
                  fill="#00008f"
                />
                <circle
                  cx={31}
                  cy="45.3333"
                  r="1.66667"
                  transform="rotate(-90 31 45.3333)"
                  fill="#00008f"
                />
                <circle
                  cx={31}
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 31 1.66683)"
                  fill="#00008f"
                />
                <circle
                  cx="45.6667"
                  cy="45.3333"
                  r="1.66667"
                  transform="rotate(-90 45.6667 45.3333)"
                  fill="#00008f"
                />
                <circle
                  cx="45.6667"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 45.6667 1.66683)"
                  fill="#00008f"
                />
                <circle
                  cx="60.3333"
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 60.3333 45.3338)"
                  fill="#00008f"
                />
                <circle
                  cx="60.3333"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 60.3333 1.66683)"
                  fill="#00008f"
                />
                <circle
                  cx="88.6667"
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 88.6667 45.3338)"
                  fill="#00008f"
                />
                <circle
                  cx="88.6667"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 88.6667 1.66683)"
                  fill="#00008f"
                />
                <circle
                  cx="117.667"
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 117.667 45.3338)"
                  fill="#00008f"
                />
                <circle
                  cx="117.667"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 117.667 1.66683)"
                  fill="#00008f"
                />
                <circle
                  cx="74.6667"
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 74.6667 45.3338)"
                  fill="#00008f"
                />
                <circle
                  cx="74.6667"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 74.6667 1.66683)"
                  fill="#00008f"
                />
                <circle
                  cx={103}
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 103 45.3338)"
                  fill="#00008f"
                />
                <circle
                  cx={103}
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 103 1.66683)"
                  fill="#00008f"
                />
                <circle
                  cx={132}
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 132 45.3338)"
                  fill="#00008f"
                />
                <circle
                  cx={132}
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 132 1.66683)"
                  fill="#00008f"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

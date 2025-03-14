import React from "react";
import { motion } from "framer-motion";
import promoteur from "../../../src/assets/images/gallerie/promoteur.jpg"; // Image principale
import christiane from "../../../src/assets/images/teams/Christiane.jpg"; // Image secondaire
import Fabrice from "../../../src/assets/images/teams/Fabrice.jpg"; // Image secondaire

import { Typography } from "@material-tailwind/react";

const FrancePrepaTeam = () => {
  // Liste des membres de l'équipe
  const teamMembers = [
    {
      name: "Pr Benjamin B. Obama",
      role: "Maître de Conférences au groupe universitaire Eduservices.",
      description: "Maître de Conférences au groupe universitaire Eduservices.",
      image: promoteur,
    },

    {
      name: "Dr Christiane Azab",
      role: "Enseignante à l'Université de Yaoundé I, Présidente du Jury France Prépa Cameroun.",
      description:
        "Enseignante à l'Université de Yaoundé I, Présidente du Jury France Prépa Cameroun.",
      image: christiane,
    },
    {
      name: "Fabrice Epoh",
      role: "Représentant France Prépa Londres.",
      description: "Représentant France Prépa Londres.",
      image: Fabrice,
    },
    // {
    //   name: "Durelle Mbia",
    //   role: "Conseillère adjointe",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sit officiis tempora maiores molestiae non a repellendus est dolores.",
    //   image: "",
    // },
  ];

  return (
    <div>
      {/* Section principale */}
      <div id="team">
        <div
          className={`w-full h-fit items-center justify-items-center bg-gar-50 px-4 lg:px-8 pt-10`}
        >
          <div
            role={`list`}
            aria-label={`Behind the scenes People`}
            className={`lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around`}
          >
            {/* Titre de la section */}
            <div className={`flex flex-col justify-center`}>
              <Typography
                variant={`h2`}
                className={`text-[#00008f] font-[montserrat] uppercase font-bold text-3xl sm:text-[40px]/[48px]`}
              >
                Une équipe dévouée pour l’obtention de votre visa
              </Typography>
            </div>

            {/* Affichage des membres de l'équipe */}
            {teamMembers.map((member, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
                key={index}
                role={`listitem`}
                className={`bg-gradient-to-t from-[#07076b] to-[#030341] xl:w-1/3 sm:w-3/4 md:w-2/5 h-64 rounded-md shadow-md relative mt-20 mb-24 sm:mb-24 xl:max-w-sm lg:w-2/5 hover:shadow-xl transform hover:scale-105 transition-transform duration-300`}
              >
                <div
                  className={`mx-2 my-auto rounded overflow-hidden shadow-md py-4`}
                >
                  <div className={`absolute -mt-20 w-full flex justify-center`}>
                    <div className={`h-32 w-32`}>
                      <img
                        src={member.image}
                        alt={`Photo de ${member.name}`}
                        role={`img`}
                        className={`rounded-full object-cover h-full w-full shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300`}
                      />
                    </div>
                  </div>
                  <div className={`px-6 mt-16`}>
                    <h1
                      className={`text-[#f6aa00] font-bold text-3xl text-center mb-1`}
                    >
                      {member.name}
                    </h1>
                    <p
                      className={`text-gray-200 text-sm font-bold text-center`}
                    >
                      {member.role}
                    </p>
                    {/* <p
                      className={`text-center text-gray-200 text-base pt-3 font-normal`}
                    >
                      {member.description}
                    </p> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrancePrepaTeam;

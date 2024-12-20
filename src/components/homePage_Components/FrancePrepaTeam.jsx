import React from "react";

import { motion } from "framer-motion";

// IMPORTER LES IMAGES

import promoteur from "../../../src/assets/images/gallerie/promoteur.jpg";
import personne from "../../../src/assets/images/temoignanes/personnage4.jpg";
const FrancePrepaTeam = () => {
  // Liste statique des membres de l'équipe
  const teamMembers = [
    {
      name: "Dr. Benjamin B. Obama",
      role: "Promoteur de France Prépa",
      description:
        " Dr. Obama est maître de conférences à l’Université Catholique de  Lyon et spécialiste des questions d’entreprenariat et de RSE.",
      image: promoteur,
    },
    {
      name: "Daouda",
      role: "Conseiller",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sit officiis tempora maiores molestiae non a repellendus est dolores.",
      image: personne,
    },
    {
      name: "Juvenal",
      role: "Responsable des recrutements",
      description:
        "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sit officiis tempora maiores molestiae non a repellendus est dolores.",
      image: personne,
    },
  ];

  return (
    <div>
      <div id="team">
        <div className="w-full h-fit items-centers justify-items-center bg-gar-50 px-10 pt-10">
          <div className="">
            <div
              role="list"
              aria-label="Behind the scenes People"
              className=" lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around "
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                  }}
                  key={index}
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="mx-2 my-auto rounded overflow-hidden shadow-md bg-white py-4">
                    <div className="absolute -mt-20  w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src={member.image}
                          alt={`Display Picture of ${member.name}`}
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        {member.name}
                      </h1>
                      <p className="text-gray-900 text-sm font-bold text-center">
                        {member.role}
                      </p>
                      <p className="text-center text-gray-900 text-base pt-3 font-normal">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrancePrepaTeam;

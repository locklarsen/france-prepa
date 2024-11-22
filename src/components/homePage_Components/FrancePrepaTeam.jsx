import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// IMPORTER LES IMAGES

import promoteur from "../../../src/assets/images/temoignanes/promoteur.jpg";
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
      role: "Promoteur de France Prépa",
      description:
        " Dr. Obama est maître de conférences à l’Université Catholique de  Lyon et spécialiste des questions d’entreprenariat et de RSE.",
      image: promoteur,
    },
    {
      name: "Juvenal",
      role: "Promoteur de France Prépa",
      description:
        " Dr. Obama est maître de conférences à l’Université Catholique de  Lyon et spécialiste des questions d’entreprenariat et de RSE.",
      image: promoteur,
    },
  ];

  return (
    <div>
      <div className="mb-16" id="team">
        <div className="w-full bg-blue-50 px-10 pt-0">
          <div className="container mx-auto">
            <div
              role="list"
              aria-label="Behind the scenes People"
              className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="mx-2 my-auto rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
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
                      <p className="text-gray-800 text-sm text-center">
                        {member.role}
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        {member.description}
                      </p>
                      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full items-center justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div aria-label="LinkedIn" role="img">
                            <FaLinkedin size={20} />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div aria-label="Facebook" role="img">
                            <FaFacebook size={20} />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <BsTwitterX size={16} />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div aria-label="Email" role="img">
                            <MdEmail size={16} />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrancePrepaTeam;

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import education from "../../../src/assets/images/gallerie/education.JPG"; // Importation de l'image principale

// Liste des programmes proposés
const programList = [
  {
    program_id: 1,
    program_name: "Parcours Bac+2",
    description:
      "Un diplôme conçu pour vous préparer aux carrières internationales en deux ans.",
  },
  {
    program_id: 2,
    program_name: "Bachelor",
    description:
      "Le Bachelor offre une formation complète et reconnue sur le plan mondial.",
  },
  {
    program_id: 3,
    program_name: "Grade Bac+5",
    description:
      "Un diplôme de niveau Master pour exceller dans votre domaine d'expertise.",
  },
];

// Composant principal Diplomes
const Diplomes = () => {
  return (
    <div
      className={`bg-gradient-to-t from-[#07076b] to-[#080831] relative flex items-center justify-center overflow-hidden z-50`}
      id={`servicesSection`}
    >
      <div
        className={`relative mx-auto px-6 pb-10 md:px-12 lg:max-w-screen-xl lg:px-8`}
      >
        {/* Section d'introduction */}
        <div
          className={`flex flex-col items-center justify-between lg:flex-row pt-16 pb-8`}
        >
          {/* Gestionnaire d'image */}
          <div className={`relative hidden lg:block lg:w-1/3`}>
            <div
              className={`mx-auto overflow-hidden rounded-[6rem] border-white border-2 rounded-br-none rounded-tl-none shadow-sm`}
            >
              <img src={education} alt={`Education`} className={`w-full`} />
            </div>
          </div>

          {/* Texte de présentation */}
          <div className={`lg:w-2/3`}>
            <Typography
              variant={`h2`}
              className={`text-3xl leading-snug text-g1 sm:text-5xl sm:leading-snug`}
            >
              <span className={`font-normal text-white`}>Optez pour nos </span>
              <span
                className={`text-[#f6aa00] border-b-8 border-g4 px-2 font-bold`}
              >
                diplômes d’envergure internationale
              </span>
            </Typography>
            <p className={`mt-4 text-gray-200`}>
              Nous vous proposons des formations diplômantes reconnues qui vous
              permettront de réussir vos projets professionnels et personnels
              dans un environnement mondial.
            </p>
          </div>
        </div>

        {/* Liste des programmes sous forme de cartes */}
        <div
          className={`grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {programList.map((prog) => (
            <Card
              key={prog.program_id}
              className={`shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300`}
            >
              <span className="m-auto pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`size-10 text-[#00008f]`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </span>
              <CardBody>
                <Typography
                  variant={`h5`}
                  color={`blue-gray`}
                  className={`mb-2 font-bold text-[#00008f]`}
                >
                  {prog.program_name}
                </Typography>
                <Typography className={`text-gray-900 font-normal`}>
                  {prog.description}
                </Typography>
              </CardBody>
              <CardFooter className={`pt-0`}>
                <Link
                  to={`/contact/#`}
                  className={`px-3.5 py-3 rounded-lg text-[#ffff] bg-[#f6aa00] hover:bg-[#e59d01] hover:text-[#00008f] hover:border-1 hover:border-yellow-100 text-md font-semibold `}
                >
                  Contactez-nous
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diplomes;

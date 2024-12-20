import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import promoteur from "../../../src/assets/images/gallerie/promoteur.jpg";

// LISTE DES PROGRAMMES
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

// COMPOSANT PRINCIPAL
const Diplomes = () => {
  return (
    <div
      className="bg-gradient-to-t from-[#07076b] to-[#080831]  relative flex items-center justify-center overflow-hidden z-50"
      id="servicesSection"
    >
      <div className="relative mx-auto px-6 pb-10 md:px-12 lg:max-w-screen-xl lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between lg:flex-row pt-16 pb-8">
          {/* Image Manager */}
          <div className="relative hidden lg:block lg:w-1/3">
            <div className="mx-auto overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
              <img src={promoteur} alt="Manager" width={300} />
            </div>
          </div>

          {/* Texte de Présentation */}
          <div className="lg:w-2/3">
            <Typography
              variant="h2"
              className="text-3xl  leading-snug text-g1 sm:text-5xl sm:leading-snug"
            >
              <span className="font-normal text-white">Optez pour nos </span>
              <span className="text-[#f6aa00] border-b-8 border-g4 px-2 font-bold">
                diplômes d’envergure internationale
              </span>
            </Typography>
            <p className="mt-4 text-gray-200">
              Nous vous proposons des formations diplômantes reconnues qui vous
              permettront de réussir vos projets professionnels et personnels
              dans un environnement mondial.
            </p>
            {/* <p className="mt-3 font-black">
              Henriette B. - <span>Manager</span>
            </p> */}
          </div>
        </div>

        {/* Grille des Programmes */}
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {programList.map((prog) => (
            <Card
              key={prog.program_id}
              className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 font-bold text-[#00008f]"
                >
                  {prog.program_name}
                </Typography>
                <Typography className="text-gray-900 font-normal">
                  {prog.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  size="lg"
                  className="font-[montserrat] bg-[#f6aa00] hover:bg-[#e59d01] hover:border-1 hover:border-yellow-100"
                >
                  <Link to={"/contact/#"}>Contactez-nous</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diplomes;

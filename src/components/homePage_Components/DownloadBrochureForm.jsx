import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import image_procedure from "../../../src/assets/images/gallerie/etudiante.jpg";

import Notification from "../general_usage_components/Notification";

const COUNTRIES = [
  "Algérie (+213)",
  "Bénin (+229)",
  "Burkina Faso (+226)",
  "Burundi (+257)",
  "Cameroun (+237)",
  "Cap-Vert (+238)",
  "Comores (+269)",
  "Congo Brazzaville (+242)",
  "Congo Kinshasa (+243)",
  "Côte d'Ivoire (+225)",
  "Djibouti (+253)",
  "Gabon (+241)",
  "Guinée (+224)",
  "Guinée-Bissau (+245)",
  "Madagascar (+261)",
  "Mali (+223)",
  "Mauritanie (+222)",
  "Niger (+227)",
  "Rwanda (+250)",
  "Sénégal (+221)",
  "Seychelles (+248)",
  "Tchad (+235)",
  "Togo (+228)",
];

const CODES = [
  "+213",
  "+229",
  "+226",
  "+257",
  "+237",
  "+238",
  "+269",
  "+242",
  "+243",
  "+225",
  "+253",
  "+241",
  "+224",
  "+245",
  "+261",
  "+223",
  "+222",
  "+227",
  "+250",
  "+221",
  "+248",
  "+235",
  "+228",
];

// Données de l'animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: `spring`,
      stiffness: 120,
      duration: 1,
    },
  },
};

const DownloadBrochureForm = () => {
  const [name, setName] = useState(``);
  const [firstName, setFirstName] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);
  const [country, setCountry] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoi des données du formulaire
      const response = await fetch(
        "http://localhost:3000/api/prospects/enregistrer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nom: name,
            prenom: firstName,
            email: email,
            tel: country + phone,
            idDoc: 1,
          }),
        }
      );

      if (response.ok) {
        setMessage(
          "Données enregistrées avec succès ! Votre téléchargement va débuter..."
        );
        setType("success");

        // Réinitialiser la notification après 10 secondes
        setTimeout(() => {
          setMessage("");
          setType("");

          // Lancer le téléchargement après disparition du message
          const downloadUrl = "/backend/upload/brochure.pdf"; // Remplacer par l'URL de ton fichier
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.download = "brochure.pdf"; // Nom du fichier téléchargé
          link.click(); // Simule un clic pour démarrer le téléchargement
        }, 5000); // 10 secondes avant de lancer le téléchargement
      } else {
        setMessage("Erreur lors de l’enregistrement du prospect.");
        setType("error");
      }
    } catch (error) {
      setMessage("Une erreur est survenue.");
      setType("error");
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`bg-gray-50 shadow-lg py-4 lg:px-10`}
    >
      <div
        className={` relative flex flex-col items-center justify-center min-h-screen sm:items-center sm:pt-0`}
      >
        <div
          className={`bg-[#10113d] w-full mx-auto px-4 py-2 rounded-xl shadow-lg`}
        >
          <div className={`mt-8 overflow-hidden`}>
            <div className={`grid grid-cols-1 md:grid-cols-2`}>
              <div className={`p-2 bg-[#f6aa00] sm:rounded-lg`}>
                <h1
                  className={`text-4xl sm:text-5xl text-[#00008f] font-extrabold tracking-tight`}
                >
                  Frais de procédure
                </h1>
                <p
                  className={`text-normal text-lg sm:text-2xl font-medium text-white mt-2`}
                >
                  Veuillez entrer votre e-mail pour recevoir notre brochure
                  détaillée.
                </p>

                <div
                  className={`flex items-center mt-8 text-gray-600 dark:text-gray-400`}
                >
                  <img src={image_procedure} alt="Procédure" />
                </div>
              </div>

              {/* Formulaire de téléchargement de la brochure */}

              <form
                onSubmit={handleSubmit}
                className={`py-3 px-1 flex flex-col w-full items-center justify-center`}
              >
                {/* Champ de saisie du nom */}
                <div className={`flex flex-col mt-2 w-full px-4`}>
                  <label htmlFor={`name`} className={`hidden`}>
                    Nom
                  </label>
                  <input
                    type={`text`}
                    name={`name`}
                    id={`name`}
                    placeholder={`Nom`}
                    required={true}
                    className={`
                      w-full mt-2 py-3 px-3 rounded-lg bg-white 
                      border border-gray-400 dark:border-gray-700 text-gray-800 font-normal 
                      focus:border-amber-500 focus:outline-none
                    `}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Champ de saisie du prénom */}
                <div className={`flex flex-col mt-2 w-full px-4`}>
                  <label htmlFor={`givenname`} className={`hidden`}>
                    Prénom
                  </label>
                  <input
                    type={`text`}
                    name={`givenname`}
                    id={`givenname`}
                    placeholder={`Prénom`}
                    required={true}
                    className={`
                      w-full mt-2 py-3 px-3 rounded-lg bg-white 
                      border border-gray-400 dark:border-gray-700 text-gray-800 font-normal 
                      focus:border-amber-500 focus:outline-none
                    `}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                {/* Champ de saisie de l'email */}
                <div className={`flex flex-col mt-2 w-full px-4`}>
                  <label htmlFor={`email`} className={`hidden`}>
                    Email
                  </label>
                  <input
                    type={`email`}
                    name={`email`}
                    id={`email`}
                    placeholder={`Email`}
                    required={true}
                    className={`
                      w-full mt-2 py-3 px-3 rounded-lg bg-white 
                      border border-gray-400 dark:border-gray-700 text-gray-800 font-normal 
                      focus:border-amber-500 focus:outline-none
                    `}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Champ de saisie du numéro de téléphone */}
                <div className="w-full  mt-4  px-4">
                  <label htmlFor={`phone`} className={`hidden`}>
                    Numéro de téléphone
                  </label>
                  <div className="flex">
                    <Menu placement="bottom-start">
                      <MenuHandler>
                        <Button
                          ripple={false}
                          variant="text"
                          className="bg-white shrink-0 rounded-r-none border border-gray-300 px-3"
                        >
                          {CODES[country]}
                        </Button>
                      </MenuHandler>
                      <MenuList className="max-h-60 overflow-auto">
                        {COUNTRIES.map((country, index) => (
                          <MenuItem
                            key={country}
                            onClick={() => setCountry(index)}
                          >
                            {country}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                    <input
                      type="tel"
                      placeholder="Numéro de téléphone"
                      maxLength={9}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white flex-1 border border-gray-300 rounded-r-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="h-auto mt-4">
                  {message && <Notification type={type} message={message} />}
                </div>
                {/* Bouton d'envoi du formulaire */}
                <button
                  type={`submit`}
                  className={`
                    md:w-fit bg-[#f6aa00] hover:bg-gradient-to-t from-[#07076b] to-[#030341] hover:border-white hover:border-2
                    text-white font-bold py-3 mx-auto px-6 rounded-lg mt-4 transition ease-in-out duration-300
                  `}
                >
                  Télécharger la brochure
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default DownloadBrochureForm;

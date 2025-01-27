import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Input,
} from "@material-tailwind/react";
import image_procedure from "../../../src/assets/images/gallerie/etudiante.jpg";

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

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simule l'envoi du formulaire, dans un cas réel, envoie à un serveur ou un service de gestion d'emails
      setIsFormSubmitted(true);
      setTimeout(() => {
        // Simule le téléchargement de la brochure après l'envoi
        alert(`La brochure a été envoyée à votre email !`);
      }, 2000);
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
        className={` relative  flex flex-col items-center justify-center min-h-screen sm:items-center sm:pt-0`}
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
                <div className={`flex flex-col mt-2 w-full px-4`}>
                  <label htmlFor={`phone`} className={`hidden`}>
                    Numéro de téléphone
                  </label>
                  <div className="flex w-full">
                    <Menu placement="bottom-start">
                      <MenuHandler>
                        <Button
                          ripple={false}
                          variant="text"
                          color="blue-gray"
                          className="shrink-0 rounded-r-none border-gray-500 border-1 border-r-0 bg-transparent px-3 flex items-center"
                          style={{ width: "4rem" }} // Ajuster la largeur du bouton
                        >
                          {CODES[country]}
                        </Button>
                      </MenuHandler>
                      <MenuList className="bg-[#f6aa00] max-h-[40rem] max-w-[50rem] text-gray-800 space-y-3 font-medium">
                        {COUNTRIES.map((country, index) => (
                          <MenuItem
                            key={country}
                            value={country}
                            onClick={() => setCountry(index)}
                            className="flex flex-col border-b-[1px] border-t-0 border-x-0 rounded-none px-2 border-red-900"
                          >
                            {country}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                    <Input
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      maxLength={9}
                      placeholder="Numéro de téléphone"
                      required={true}
                      className="w-full h-14 px-2 py-3 text-sm font-normal rounded-l-none rounded-lg placeholder:text-gray-700 text-gray-900"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{
                        className: "bg-white w-full h-14 rounded-r-lg",
                      }}
                    />
                  </div>
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

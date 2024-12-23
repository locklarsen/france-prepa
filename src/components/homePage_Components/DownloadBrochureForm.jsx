// IMPORTER LES PACKAGES REACT
import React, { useState } from "react";

//  IMPORTER D'AUTRES PACKAGES
import { motion } from "framer-motion";

// IMPORTER DES COMPOSANTS
import image_procedure from "../../../src/assets/images/gallerie/etudiante.jpg";

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
      className={`bg-gray-50 
        py-4 px-4
      `}
    >
      <div
        className={` relative my-3 flex items-top justify-center min-h-screen sm:items-center sm:pt-0`}
      >
        <div
          className={`bg-[#10113d] max-w-6xl mx-auto sm:px-6 lg:px-8 py-2 rounded-xl shadow-lg`}
        >
          <div className={`mt-8 overflow-hidden`}>
            <div className={`grid grid-cols-1 md:grid-cols-2`}>
              <div className={`p-6 mr-2 bg-[#f6aa00] sm:rounded-lg`}>
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
                className={`p-6 flex flex-col justify-center`}
              >
                {/* Champ de saisie du nom */}
                <div className={`flex flex-col mt-2`}>
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
                      w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 
                      border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold 
                      focus:border-indigo-500 focus:outline-none
                    `}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Champ de saisie du prénom */}
                <div className={`flex flex-col mt-2`}>
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
                                        w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 
                      border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold 
                      focus:border-indigo-500 focus:outline-none
                    `}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                {/* Champ de saisie de l'email */}
                <div className={`flex flex-col mt-2`}>
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
                                       w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 
                      border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold 
                      focus:border-indigo-500 focus:outline-none
                    `}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Bouton d'envoi du formulaire */}
                <button
                  type={`submit`}
                  className={`
                    md:w-fit bg-[#f6aa00] hover:bg-gradient-to-t from-[#07076b] to-[#030341] hover:border-white hover:border-2
                    text-white font-bold  py-3 mx-auto px-6 rounded-lg mt-4 transition ease-in-out duration-300
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

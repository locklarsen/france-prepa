import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useInView } from "react-intersection-observer";

// Données de l'animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
    },
  },
};

const DownloadBrochureForm = () => {
  const [name, setName] = useState("");
  const [fisrt_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Envoie du formulaire (dans un cas réel, envoyer à un serveur ou à un service de gestion d'emails)
      setIsFormSubmitted(true);
      // Simuler un téléchargement de la brochure après l'envoi du formulaire
      setTimeout(() => {
        // Ici vous pouvez ajouter le code pour télécharger le fichier
        alert("La brochure a été envoyée à votre email !");
      }, 2000);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white py-16 px-4"
    >
      <div className="max-w-xl mx-auto text-center">
        <Typography
          variant="h2"
          className="text-3xl font-semibold text-[#00008f]"
        >
          Quels sont les frais de la procédure ?
        </Typography>
        <p className="text-gray-600 mt-2">
          Veuillez entrer votre email pour recevoir notre brochure détaillée.
        </p>

        {/* Formulaire de téléchargement */}
        {!isFormSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-4 flex flex-col gap-6">
              <td className="w-100 ">
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Votre Nom"
                  required
                  className="w-full px-4 py-2 text-lg rounded-"
                />
              </td>
              <td className="w-100">
                <Input
                  type="text"
                  value={fisrt_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  label="Votre Prénom :"
                  required
                  className="w-full px-4 py-2 text-lg rounded-"
                />
              </td>
              <td>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Votre adresse email"
                  required
                  className="w-full px-4 py-2 text-lg rounded-md"
                />
              </td>
            </div>

            <Button
              type="submit"
              size="lg"
              className="bg-[#f6aa00] hover:bg-[#e59d01] w-full font-semibold py-2"
            >
              Télécharger la Brochure
            </Button>
          </form>
        ) : (
          <div className="mt-8">
            <Typography
              variant="h4"
              className="text-xl font-semibold text-green-500"
            >
              Merci ! Votre demande a bien été reçue.
            </Typography>
            <Typography className="text-gray-600 mt-2">
              Nous vous enverrons la brochure à l'adresse email fournie.
            </Typography>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DownloadBrochureForm;

// IMPORTER LES PACKAGES REACT
import React from "react";
import { Link } from "react-router-dom";

// IMPORTER D'AUTRES PACKAGES
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

// IMPORTER DES COMPOSANTS
import NavigationBar from "../../components/homePage_Components/NavigationBar";
import Footer from "../../components/homePage_Components/Footer";

// IMPORTER DES IMAGES
import logo from "../../../src/assets/images/logos/logo.png";
import background from "../../assets/images/background/001.JPG";

const LoginPage = () => {
  return (
    <div>
      {/* Barre de navigation */}
      <NavigationBar />

      <div className={`flex flex-col lg:flex-row flex-grow`}>
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className={`lg:w-1/2 lg:block h-64 lg:h-auto opacity-90`}
        >
          <img
            src={background}
            className={`object-cover w-full h-full`}
            alt="Background image"
          />
        </motion.div>

        {/* Bloc de droite: Formulaire de connexion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
          className={`flex flex-col bg-gray-50 opacity-95 rounded-2xl p-8 sm:p-10 md:p-12 lg:w-1/2 items-center justify-center`}
        >

          <Typography className={`text-2xl font-semibold mb-4 text-[#00008f]`}>
            Connexion
          </Typography>
          <form action="#" method="POST" className={`w-full max-w-md`}>
            {/* Username */}
            <div className={`mb-4`}>
              <label
                htmlFor="username"
                className={`block font-medium text-gray-900 text-justify`}
              >
                Nom d'utilisateur ou email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className={`w-full border bg-transparent border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                autoComplete="off"
              />
            </div>

            {/* Mot de passe */}
            <div className={`mb-4`}>
              <label
                htmlFor="password"
                className={`block font-medium text-gray-900 text-justify`}
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className={`w-full border bg-transparent border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                autoComplete="off"
              />
            </div>

            {/* Se souvenir de moi */}
            <div className={`mb-4 flex items-center`}>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className={`text-blue-500 bg-transparent`}
              />
              <label htmlFor="remember" className={`text-gray-600 ml-2`}>
                Se souvenir de moi
              </label>
            </div>

            {/* Mot de passe oublié */}
            <div className={`mb-6 text-[#f70b1b]`}>
              <a href="#" className={`hover:underline`}>
                Mot de passe oublié ?
              </a>
            </div>

            {/* Boutton de connexion*/}
            <Button
              size="lg"
              className={`bg-[#f6aa00] hover:bg-[#00008f] hover:border-1 hover:border-yellow-100 mx-auto my-4`}
            >
              Se connecter
            </Button>
          </form>

          {/* Sign up Link */}
          <div className={`mt-6 text-center font-medium`}>
            <p>
              Pas encore inscrit ?{" "}
              <Link
                to="/signup"
                className={` text-[#00007a] hover:underline hover:text-[#f6aa00]`}
              >
                Créer un compte
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;

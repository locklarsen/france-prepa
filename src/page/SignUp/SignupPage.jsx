import React from "react";
import Footer from "../../components/homePage_Components/Footer";
import InputPhoneCountryCode from "../../components/general_usage_components/InputPhoneCountryCode";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/homePage_Components/NavigationBar";
import { Button, Typography } from "@material-tailwind/react";

import image_hapyy from "../../../src/assets/images/background/001.jpg";
import logo from "../../../src/assets/images/logos/logo.png";

const SignupPage = () => {
  return (
    <div className="bg-white">
      <NavigationBar />

      {/* Section avec l'image d'arrière-plan et l'overlay blanc */}
      <div
        style={{ backgroundImage: `url(${image_hapyy})` }}
        className="relative w-full inset-50 p-5 sm:p-6 md:p-10 lg:p-14 flex flex-col justify-center items-center bg-cover bg-center"
      >
        {/* Overlay blanc semi-transparent */}
        {/* Superposition noire avec opacité */}
        <div className="absolute inset-0 bg-[#000000] bg-opacity-75 z-10"></div>

        {/* Contenu au-dessus de l'image */}
        <div className="relative z-10 flex justify-center w-full h-full my-auto xl:gap-14 lg:gap-10 md:gap-5">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-1 w-full">
              <form className="bg-white opacity-90 flex flex-col items-center w-full h-full pb-6 text-center rounded-3xl p-4 md:p-8">
                {/* Logo */}
                <img
                  src={logo}
                  alt="Placeholder Image"
                  className="object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                />

                {/* Titre */}
                <Typography className="font-[montserrat] text-[#00008f] mb-3 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase">
                  Créer un compte
                </Typography>

                {/* Ligne de séparation */}
                <div className="flex items-center mb-3 w-full">
                  <hr className="h-0.5 border-b border-solid border-grey-500 grow"></hr>
                  <hr className="h-0.5 border-b border-solid border-grey-500 grow"></hr>
                </div>

                {/* Formulaire */}
                <div className="flex flex-col w-full md:flex-row md:gap-3">
                  <div className="flex flex-col w-full mb-3">
                    <label
                      htmlFor="prenom"
                      className="mb-2 text-sm text-grey-900 text-justify"
                    >
                      Prénom<span className="text-red-700">*</span>
                    </label>
                    <input
                      id="prenom"
                      type="text"
                      placeholder="Lock Larsen"
                      required
                      className="bg-transparent border border-grey-300 flex items-center w-full px-5 py-3 text-sm font-medium outline-none focus:bg-grey-400 mb-3 md:mb-0 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col w-full mb-3">
                    <label
                      htmlFor="nom"
                      className="mb-2 text-sm text-grey-900 text-justify"
                    >
                      Nom<span className="text-red-700">*</span>
                    </label>
                    <input
                      id="nom"
                      type="text"
                      placeholder="Ansalla"
                      required
                      className="bg-transparent border border-grey-300 flex items-center w-full px-5 py-3 text-sm font-medium outline-none focus:bg-grey-400 mb-3 md:mb-0 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full md:flex-row md:gap-3">
                  <div className="flex flex-col w-full mb-3">
                    <label
                      htmlFor="email"
                      className="mb-2 text-sm text-grey-900 text-justify"
                    >
                      Email<span className="text-red-700">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="contact.locklarsen@gmail.com"
                      required
                      className="bg-transparent border border-grey-300 flex items-center w-full px-5 py-3 text-sm font-medium outline-none focus:bg-grey-400 mb-3 md:mb-0 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col w-full mb-3">
                    <label
                      htmlFor="InputPhoneCountryCode"
                      className="mb-2 text-sm text-grey-900 text-justify"
                    >
                      Téléphone<span className="text-red-700">*</span>
                    </label>
                    <InputPhoneCountryCode />
                  </div>
                </div>

                <div className="flex flex-col w-full md:flex-row md:gap-3">
                  <div className="flex flex-col w-full mb-3">
                    <label
                      htmlFor="password"
                      className="mb-2 text-sm text-grey-900 text-justify"
                    >
                      Mot de passe<span className="text-red-700">*</span>
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Créer un mot de passe"
                      required
                      className="bg-transparent border border-grey-300 flex items-center w-full px-5 py-3 text-sm font-medium outline-none focus:bg-grey-400 mb-3 md:mb-0 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col w-full mb-3">
                    <label
                      htmlFor="confirmed_password"
                      className="mb-2 text-sm text-grey-900 text-justify"
                    >
                      Confirmez le mot de passe
                      <span className="text-red-700">*</span>
                    </label>
                    <input
                      id="confirmed_password"
                      type="password"
                      placeholder="Confirmez le mot de passe"
                      required
                      className="bg-transparent border border-grey-300 flex items-center w-full px-5 py-3 text-sm font-medium outline-none focus:bg-grey-400 mb-3 md:mb-0 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
                    />
                  </div>
                </div>

                {/* Bouton Créer un compte */}
                <Button
                  size="lg"
                  className="font-[montserrat] bg-[#f6aa00] hover:bg-[#e59d01] hover:border-1 hover:border-yellow-100 mx-auto my-4"
                >
                  Créer un compte
                </Button>
                <p className="text-sm leading-relaxed text-grey-900">
                  Déjà inscrit ?{" "}
                  <Link to="/login" className="font-bold text-grey-700">
                    Connectez-vous
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;

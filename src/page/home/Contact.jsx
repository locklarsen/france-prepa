import React from "react";
import { Link } from "react-router-dom";

import NavigationBar from "../../components/homePage_Components/NavigationBar";
import InputPhoneCountryCode from "../../components/general_usage_components/InputPhoneCountryCode";
import Footer from "../../components/homePage_Components/Footer";

import { Button, Typography } from "@material-tailwind/react";

// IMAGE
import logo from "../../../src/assets/images/logos/logo.png";
import background_image from "../../../src/assets/images/background/004.JPG";

export default function Contact() {
  return (
    <div
      className="relative bg-white flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      {/* Superposition noire avec opacité */}
      <div className="absolute inset-0 bg-[#000000] bg-opacity-75 z-10 pointer-events-none"></div>

      {/* Navigation bar */}
      <div className="relative z-20">
        <NavigationBar />
      </div>

      {/* Contenu principal */}
      <div className="relative flex flex-col items-center py-10 px-6 lg:px-8 z-20">
        {/* Formulaire de contact */}
        <form className="relative bg-white rounded-3xl shadow-lg p-8 w-full max-w-2xl z-20 opacity-95">
          <div className="text-center mb-6">
            <span
              className="block mb-4 text-lg font-semibold py-2 capitalize"
              style={{ color: "#f70b1b" }}
            >
              Parler avec nous
            </span>
            <Typography className="text-[#00008f] mb-3 text-3xl font-bold sm:text-[40px]/[48px]">
              Contactez-nous
            </Typography>
            <p className="text-lg leading-8 text-gray-600">
              Aute magna irure deserunt veniam aliqua magna enim voluptate.
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="Placeholder Image"
              className="object-cover w-24 h-24"
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            {/* Champs prénom et nom */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="prenom" className="mb-2 text-sm text-grey-900">
                  Prénom<span className="text-red-700">*</span>
                </label>
                <input
                  id="prenom"
                  type="text"
                  placeholder="Lock Larsen"
                  required
                  className="bg-transparent border border-grey-300 px-4 py-3 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="nom" className="mb-2 text-sm text-grey-900">
                  Nom<span className="text-red-700">*</span>
                </label>
                <input
                  id="nom"
                  type="text"
                  placeholder="Ansalla"
                  required
                  className="bg-transparent border border-grey-300 px-4 py-3 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
                />
              </div>
            </div>

            {/* Champs email et téléphone */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="mb-2 text-sm text-grey-900">
                  Email<span className="text-red-700">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="contact.locklarsen@gmail.com"
                  required
                  className="bg-transparent border border-grey-300 px-4 py-3 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="InputPhoneCountryCode"
                  className="mb-2 text-sm text-grey-900"
                >
                  Téléphone<span className="text-red-700">*</span>
                </label>
                <div className="w-full">
                  <InputPhoneCountryCode className="w-full bg-transparent border border-grey-300 px-4 py-3 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl" />
                </div>
              </div>
            </div>

            {/* Dernier diplôme et objet du message */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="user_diploma"
                  className="mb-2 text-sm text-grey-900"
                >
                  Dernier diplôme<span className="text-red-700">*</span>
                </label>
                <input
                  id="user_diploma"
                  type="text"
                  placeholder="ex: Licence professionnelle"
                  required
                  className="bg-transparent border border-grey-300 px-4 py-3 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="user_message"
                  className="mb-2 text-sm text-grey-900"
                >
                  Objet du message<span className="text-red-700">*</span>
                </label>
                <input
                  id="user_message"
                  type="text"
                  placeholder="ex: Demande d'informations"
                  required
                  className="bg-transparent border border-grey-300 px-4 py-3 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col w-full">
              <label htmlFor="message" className="mb-2 text-sm text-grey-900">
                Message<span className="text-red-700">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Saisissez votre message"
                rows="6"
                required
                className="bg-transparent border border-grey-300 px-4 py-3 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-xl"
              ></textarea>
            </div>
          </div>

          {/* Bouton d'envoi */}
          <Button
            size="lg"
            className="font-[montserrat] bg-[#f6aa00] hover:bg-[#e59d01] hover:border-1 hover:border-yellow-100 mx-auto my-4"
          >
            Envoyer le message
          </Button>
          <p className="text-sm leading-relaxed text-grey-900">
            Déjà inscrit ?{" "}
            <Link to="/login" className="font-bold text-grey-700">
              Connectez-vous
            </Link>
          </p>
        </form>
      </div>

      {/* Footer */}
      <Footer className="relative z-20" />
    </div>
  );
}

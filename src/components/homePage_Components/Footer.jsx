import React from "react";

// IMPORTATION DU LOGO
import logo from "../../../src/assets/images/logos/logo.png";
import { LiaLinkedin } from "react-icons/lia";
import {
  FaFacebook,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-50 w-auto justify-center mx-auto max-w-full p-4 sm:pt-12 lg:px-8 lg:pt-24">
      <div className="xl:grid xl:grid-cols-3 gap-2 xl:gap-2 justify-center">
        <div className="w-fit flex flex-col items-center space-y-5 pt-4 px-7">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">
            France Prépa
          </h3>

          <p className="text-sm leading-6 text-gray-600">
            Un organisme international qui aide les étudiants africains à entrer
            dans les grandes écoles en France et à réussir parfaitement leur
            procédure de visa.{" "}
          </p>
          <img className="w-20 h-20" src={logo} alt="Logo Fraance Prépa"></img>

          {/* ICONES DE RESEAUX SOCIAUX */}
          <div className="flex space-x-6">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <FaFacebook size={20} />
            </a>

            {/* LinkedIn */}
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Linkedin</span>
              <FaLinkedinIn size={20} />
            </a>

            {/* YouTube */}
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">YouTube</span>
              <FaYoutube size={20} />
            </a>

            {/* WhatsApp */}
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* LIENS */}
        {/* Liens utiles */}
        <div className="flex flex-col items-center space-y-5 pt-4 ">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">
            Liens utiles
          </h3>
          <ul role="list" className="mt-6 space-y-4">
            {/* Accueil */}
            <li>
              <a
                href="#"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                Accueil
              </a>
            </li>

            {/* France Prepa */}
            <li>
              <a
                href="#"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                France Prépa
              </a>
            </li>

            {/* Etudes internationales */}
            <li>
              <a
                href="#"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                Etudes internationales
              </a>
            </li>

            {/* Contact */}
            <li>
              <a
                href="#"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* S'INSCRIRE */}
        <div className="flex flex-col items-center space-y-5 pt-4">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">
            S’inscrire
          </h3>
          <ul role="list" className="mt-6 space-y-4">
            {/* Se connecter */}
            <li>
              <a
                href="#"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                Se connecter
              </a>
            </li>

            {/* Créer un compte */}
            <li>
              <a
                href="#"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                Créer un compte
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHTS */}
      <div className="mt-4 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p className="text-xs leading-5 text-gray-500">
          &copy; 2024 Prépa France, tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

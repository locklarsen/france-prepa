import React from "react";
// IMPORTATION DU LOGO
import logo from "../../../src/assets/images/logos/logo.png";
import {
  FaFacebook,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className={
        "bg-gradient-to-t from-[#10113d] to-[#03042a] w-auto justify-center mx-auto max-w-full p-4 sm:pt-12 lg:px-8 lg:pt-24"
      }
    >
      {/* Conteneur principal avec grille pour organiser le contenu */}
      <div className={"xl:grid xl:grid-cols-3 gap-2 justify-center"}>
        {/* Logo */}
        <div className={"flex items-center justify-center pt-4 px-7"}>
          <NavLink to={"/"}>
            <img className={"w-30 h-40"} src={logo} alt={"Logo France Prépa"} />
          </NavLink>
        </div>

        {/* Liens utiles */}
        <div className={"flex flex-col items-center space-y-5 pt-4"}>
          <h3
            className={
              "text-sm font-semibold leading-6 text-[#f6aa00] uppercase"
            }
          >
            LIENS UTILES
          </h3>
          <ul role={"list"} className={"mt-6 space-y-4"}>
            <li>
              <NavLink
                to={"/francePrepa"}
                className={
                  "text-sm leading-6 text-gray-300 hover:text-gray-900 capitalize"
                }
              >
                France Prépa Academy
              </NavLink>
            </li>

            <li>
              <a
                href={"#"}
                className={
                  "text-sm leading-6 text-gray-300 hover:text-gray-900"
                }
              >
                Études internationales
              </a>
            </li>

            <li>
              <Link
                to={"/contact"}
                className={
                  "text-sm leading-6 text-gray-300 hover:text-gray-900"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Section S’inscrire */}
        <div className={"flex flex-col items-center space-y-5 pt-4"}>
          <h3
            className={
              "text-sm font-semibold leading-6 text-[#f6aa00] uppercase"
            }
          >
            S’INSCRIRE
          </h3>
          <ul role={"list"} className={"mt-6 space-y-4"}>
            <li>
              <Link
                to={"/login"}
                className={
                  "text-sm leading-6 text-[#f6aa00] hover:text-gray-900 uppercase"
                }
              >
                Se connecter
              </Link>
            </li>

            <li>
              <Link
                to={"/signup"}
                className={
                  "text-sm leading-6 text-[#f6aa00] hover:text-gray-900 uppercase"
                }
              >
                Créer un compte
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page : droits d'auteur */}
      <div
        className={"mt-4 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24"}
      >
        <p className={"text-xs leading-5 text-gray-500"}>
          &copy; 2024 Prépa France, tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

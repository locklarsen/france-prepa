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
        "bg-gradient-to-t from-[#10113d] to-[#03042a] w-full justify-center min-w-screen max-w-full"
      }
    >
      {/* Conteneur principal avec grille pour organiser le contenu */}
      <div
        className={
          "xl:grid xl:grid-cols-3 gap-2 justify-center  p-4 sm:pt-12 lg:px-8 lg:pt-24"
        }
      >
        {/* Logo */}
        <div
          className={
            "flex flex-col items-center w-fit justify-center pt-4 px-7"
          }
        >
          {/* <NavLink to={"/"}>
            <img className={"w-30 h-40"} src={logo} alt={"Logo France Prépa"} />
          </NavLink> */}

          <NavLink
            to={"/"}
            className={`text-[#f6aa00] hover:text-white text-md font-semibold my-2 uppercase`}
          >
            <span>FRANCE PREPA ACADEMY</span>
          </NavLink>
          <p className={`text-gray-200 my-2 text-center text-sm`}>
            Un organisme international qui soutient les étudiants africains dans
            leur démarche d'intégration aux grandes écoles, en les accompagnant
            vers la réussite de leur projet d'études en France.
          </p>
        </div>

        {/* Liens utiles */}
        <div className={"flex flex-col items-center space-y-5 pt-4"}>
          <h3
            className={
              "text-sm font-bold leading-6 text-[#f6aa00] uppercase"
            }
          >
            LIENS UTILES
          </h3>
          <ul role={"list"} className={`mt-6 space-y-4`}>
            <li>
              <NavLink
                to={"/francePrepa"}
                className={
                  "text-sm leading-6 text-gray-300 hover:text-gray-500 capitalize"
                }
              >
                France Prépa Academy
              </NavLink>
            </li>

            <li>
              <a
                href={"#"}
                className={
                  "text-sm leading-6 text-gray-300 hover:text-gray-500"
                }
              >
                Études internationales
              </a>
            </li>

            <li>
              <Link
                to={"/contact"}
                className={
                  "text-sm leading-6 text-gray-300 hover:text-gray-500"
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
              "text-sm font-bold leading-6 text-[#f6aa00] uppercase"
            }
          >
            S’INSCRIRE
          </h3>
          <ul role={"list"} className={"mt-6 space-y-4"}>
            <li>
              <Link
                to={"/login"}
                className={
                  "text-sm leading-6 text-[#ffff] hover:text-gray-500 captalize"
                }
              >
                Se connecter
              </Link>
            </li>

            <li>
              <Link
                to={"/signup"}
                className={
                  "text-sm leading-6 text-[#ffff] hover:text-gray-500 captalize"
                }
              >
                Créer un compte
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page : droits d'auteur */}
      <div className={"flex bg-[#f6aa00] w-full py-3 justify-center m-auto"}>
        <p className={"text-sm leading-5 text-white font-medium"}>
          &copy; 2024 Prépa France Academy, tous droits réservés | Designed by{" "}
          <a
            href="https://iredi-ti.com"
            target="_blank"
            className={`font-bold hover:text-black`}
          >
            IREDI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

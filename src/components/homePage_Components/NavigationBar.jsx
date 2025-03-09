/// IMPORTER LES PACKAGES REACT
import React from "react";
import { NavLink } from "react-router-dom";

/// IMPORTER L'IMAGE DU LOGO
import logo from "../../../src/assets/images/logos/logo.png";

/// IMPORTER DES ICONES
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// LISTE DES MENUS DE LA BARRE DE NAVIGATION
function NavList() {
  return (
    <List
      className={`justify-center items-center m-auto p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1`}
    >
      {/* Menu France Prépa */}
      <Typography as="a" variant="small" className={``}>
        <ListItem className={`bg-transparent hover:bg-transparent text-black`}>
          <NavLink
            to={`/a-propos`}
            className={`w-fit flex items-center gap-2 py-2 pr-4 hover:bg-[#00008f]  hover:text-[#f7a901] font-bold p-3.5 rounded-xl`}
          >
            France Prépa Academy
          </NavLink>
        </ListItem>
      </Typography>

      {/* Menu Études internationales */}
      <Typography as="a" variant="small" className={``}>
        <ListItem className={`bg-transparent hover:bg-transparent text-black`}>
          <NavLink
            to={`/etudes-internationales`}
            className={`w-fit flex items-center gap-2 py-2 pr-4 hover:bg-[#00008f] hover:text-[#f7a901] font-bold p-3.5 rounded-xl`}
          >
            Études internationales
          </NavLink>
        </ListItem>
      </Typography>

      {/* Menu Contact */}
      <Typography as="a" variant="small" className={``}>
        <ListItem className={`bg-transparent hover:bg-transparent text-black`}>
          <NavLink
            to={`/contact`}
            className={`flex items-center gap-2 py-2 pr-4 hover:bg-[#00008f] hover:text-[#f7a901] font-bold p-3.5 rounded-xl`}
          >
            {" "}
            Contact
          </NavLink>
        </ListItem>
      </Typography>
    </List>
  );
}

// COMPOSANT PRINCIPAL DE LA BARRE DE NAVIGATION
const NavigationBar = () => {
  // État pour gérer l'ouverture de la navigation sur mobile
  const [openNav, setOpenNav] = React.useState(false);

  // Gestion des événements de redimensionnement de la fenêtre
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      className={`bg-white flex flex-wrap m-auto w-auto max-w-screen-1xl px-10 py-2 rounded-none justify-between`}
    >
      <div
        className={`w-full h-auto flex items-center justify-between text-black`}
      >
        {/* LOGO */}
        <NavLink to={`/`}>
          <img src={logo} width={80} alt="Logo" />
        </NavLink>

        {/* MENU PROINCIPAL */}
        <div className={`hidden items-start my-auto lg:block`}>
          <NavList />
        </div>

        {/* BOUTONS D'ACTION */}
        <div className={`hidden gap-3 lg:flex my-auto mx-2`}>
          {/* Bouton "Se connecter" */}

          <NavLink
            to={`/login`}
            className={`bg-[#00007a] text-[#f6aa00] hover:bg-[#f6aa00] hover:text-[#00007a] px-3.5 py-2 rounded-xl`}
          >
            Se connecter
          </NavLink>

          {/* Bouton "S'inscrire" */}

          <NavLink
            to={`/signup`}
            className={`bg-[#f6aa00] text-[#00007a] hover:bg-[#00007a] hover:text-[#f6aa00]  px-3.5 py-2 rounded-xl`}
          >
            S'inscrire
          </NavLink>
        </div>

        {/* Bouton menu mobile */}
        <IconButton
          variant="text"
          color="orange"
          className={`lg:hidden my-auto`}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className={`h-6 w-6`} strokeWidth={2} />
          ) : (
            <Bars3Icon className={`h-6 w-6`} strokeWidth={2} />
          )}
        </IconButton>
      </div>

      {/* MENU DEROULANT MOBILE */}
      <Collapse open={openNav}>
        <NavList />
        <div
          className={`flex w-full py-3 gap-x-96 flex-nowrap items-center justify-center gap-2 lg:hidden shadow-md`}
        >
          <NavLink
            to={`/login`}
            className={`bg-[#00007a] text-[#f6aa00] hover:bg-[#f6aa00] hover:text-[#00007a] shadow-sm shadow-deep-yellow-200 flex px-3.5 py-2 rounded-xl`}
          >
            Se connecter
          </NavLink>

          <NavLink
            to={`/signup`}
            className={`bg-[#f6aa00] hover:bg-[#00007a] text-[#00007a] hover:text-[#f6aa00] shadow-sm shadow-deep-orange-200  flex px-3.5 py-2 rounded-xl`}
          >
            S'inscrire
          </NavLink>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;

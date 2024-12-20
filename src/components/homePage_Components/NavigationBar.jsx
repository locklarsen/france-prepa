/// IMPORTER LES PACKAGES REACT
import React from "react";
import { NavLink } from "react-router-dom";

/// IMPORTER LES FEUILLES DE STYLE
// import "../styles.css";

// IMPORTER L'IMAGE DU LOGO
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
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

// LISTE DE MENUS : Tableau statique d'éléments pour un sous menu.
const navListMenuItems = [
  // Sous-menu 1
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },

  // Sous-menu 2
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },

  // Sous-menu 3
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },

  // Sous-menu 4
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },

  // Sous-menu 5
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },

  // Sous-menu 6
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },

  // Sous-menu 7
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },

  // Sous-menu 8
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

// FONCTION QUI AFFICHE LES SOUS MENUS DU MENU "RESSOURCES"
// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description }, key) => (
//       <a key={key}>
//         <MenuItem className="flex items-center gap-3 rounded-lg">
//           <div className="flex items-center justify-center rounded-lg !bg-orange-300 p-2 ">
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 text-gray-900 w-6",
//             })}
//           </div>
//           <div>
//             {/* Titres des sous-menus du Menu "Ressources" */}
//             <Typography
//               variant="h6"
//               color="black"
//               className="flex items-center text-sm font-bold"
//             >
//               {title}
//             </Typography>

//             {/* Description des sous-menus du Menu "Ressources" */}
//             <Typography
//               variant="paragraph"
//               className="text-xs !font-medium text-blue-gray-500"
//             >
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     )
//   );
//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen} //Vérifie si le menu "Reesources" est ouvert pour afficher ou non ses éléments
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-medium">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-black bg-gray-100 hover:text-[#f7a901]"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Ressources
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : "bg-gray-100 hover:text-[#f7a901]"
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="bg-gray-100 hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }

// LISTE DE MENUS DE LA BARRE DE NAVIGATION
function NavList() {
  return (
    <List className="justify-center items-center m-auto p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      {/* Menu Accueil 
      <Typography
        as="a"
        variant="small"
        className="font-medium no-underline text-black"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-gray-100 hover:text-[#f7a901]">
          <NavLink to={"/"} className="hover:text-[#f7a901]  font-semibold">
            Accueil
          </NavLink>
        </ListItem>
      </Typography>*/}

      {/* Menu France Prépa */}
      <Typography
        as="a"
        variant="small"
        className="font-medium no-underline text-black"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4  hover:bg-gray-100 hover:text-[#f7a901]">
          <NavLink
            to={"/francePrepa"}
            className="hover:text-[#f7a901]  font-semibold"
          >
            France Prépa
          </NavLink>
        </ListItem>
      </Typography>

      {/* Menu Etudes internationales */}
      <Typography
        as="a"
        variant="small"
        className="font-medium no-underline text-black"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4  hover:bg-gray-100 hover:text-[#f7a901]">
          <NavLink
            to={"/etudes_internationales"}
            className="hover:text-[#f7a901]  font-semibold"
          >
            Etudes internationales
          </NavLink>
        </ListItem>
      </Typography>

      {/* Menu Contact */}
      <Typography
        as="a"
        variant="small"
        className="font-medium no-underline text-black"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4  hover:bg-gray-100 hover:text-[#f7a901]">
          <NavLink
            to={"/contact"}
            className="hover:text-[#f7a901]  font-semibold"
          >
            Contacts
          </NavLink>
        </ListItem>
      </Typography>
      {/* <NavListMenu /> */}
    </List>
  );
}

// RETOUR DE LA FONCTION "NAVIGATIONBAR" MEME. Une barre de nvaigation ayant des onglets dont un (Ressources) affiche un sous menu supllementaire.
const NavigationBar = () => {
  const [openNav, setOpenNav] = React.useState(false); // Gère létat d'ouverture/fermeture de la barre sur appreils mobiles

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="bg-white flex flex-wrap m-auto w-auto j max-w-screen-1xl px-10 py-2 rounded-none justify-between">
      <div className="w-full flex items-end justify-between text-black">
        {/* LOGO */}
        <NavLink to={"/"}>
          <img src={logo} width={90}></img>
        </NavLink>

        {/* TITRE */}
        <Typography
          as="a"
          variant="h6"
          className="mr-4 cursor-pointer py-1 lg:ml-1 uppercase font-black no-underline text-[#000095]"
        >
          {/* <NavLink to={"/"}> France Prépa</NavLink> */}
        </Typography>
        <div className="hidden items-start my-auto lg:block ">
          <NavList />
        </div>

        {/* BOUTTONS CTA */}
        <div className="hidden gap-3 lg:flex my-auto mx-2">
          {/* Bouton "Se connecter" */}
          <Button
            variant="outlined"
            size="sm"
            className="bg-[#00007a] text-[#f6aa00] hover:bg-[#f6aa00] hover:text-[#00007a]"
          >
            <NavLink to={"/login"}>Se connecter</NavLink>
          </Button>

          {/* Bouton "S'inscrire" */}
          <Button
            variant="outlined"
            size="sm"
            className="bg-[#f6aa00] text-[#00007a] hover:bg-[#00007a] hover:text-[#f6aa00]"
          >
            <NavLink to={"/signup"}>S'incrire</NavLink>
          </Button>
        </div>

        {/* Bouton Burger pour Appareils mobiles */}
        <IconButton
          variant="text"
          color="orange"
          className="lg:hidden my-auto"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      {/* BOUTTONS CTA SUR MOBILE*/}
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full py-3 flex-nowrap items-center gap-2 lg:hidden shadow-md">
          <Button
            variant="outlined"
            size="sm"
            fullWidth
            className="bg-[#00007a] text-[#f6aa00] hover:bg-[#f6aa00]  hover:text-[#00007a] shadow-sm shadow-deep-yellow-200 "
          >
            {/* Bouton "Se connecter" */}
            <NavLink
              to={"/login"}
              className="font-semibold hover:text-[#00007a]"
            >
              Se connecter
            </NavLink>
          </Button>

          {/* Bouton "S'inscrire" */}
          <Button
            variant="outlined"
            size="sm"
            fullWidth
            className="bg-[#f6aa00] hover:bg-[#00007a] text-[#00007a] hover:text-[#f6aa00] shadow-sm shadow-deep-orange-200 "
          >
            <NavLink
              to={"/signup"}
              className="font-semibold hover:text-[#00007a]"
            >
              S'incrire
            </NavLink>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};
export default NavigationBar;

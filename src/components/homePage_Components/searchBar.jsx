// IMPORTER LES PACKAGES REACT
import React from "react";

// IMPORTER D'AUTRES PACKAGES
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  return (
    <div
      className={`w-full px-4 py-3 bg-[#00008f] shadow-md border-b-1 shadow-deep-gray-100`}
    >
      <div className={`flex flex-wrap justify-center items-center gap-3`}>
        {/* Zone de texte pour la formation */}
        <input
          type="text"
          placeholder="Recherchez votre formation"
          className={`w-full sm:w-2/3 lg:w-1/2 bg-white border border-gray-300 rounded-md p-2 h-12 focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
        />

        {/* Bouton de recherche de la formation */}
        <NavLink
          to={"/etudes_internationales#schoolNetwork"}
          className={`bg-[#f6aa00] text-white hover:bg-[#f0bb48] hover:text-[#f6aa00] hover:border-1 hover:border-yellow-100 py-2 px-3.5 rounded-lg font-semibold`}
        >
          Rechercher
        </NavLink>
      </div>
    </div>
  );
};

export default SearchBar;

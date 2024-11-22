import React from "react";
import { Button } from "@material-tailwind/react";

const SearchBar = () => {
  return (
    <div className="w-full px-4 py-3 bg-gray-100 shadow-md border-b-1 shadow-deep-gray-100">
      <div className="flex flex-wrap justify-center items-center gap-3">
        <input
          type="text"
          placeholder="Recherchez votre formation"
          className="w-full sm:w-2/3 lg:w-1/2 bg-white border border-gray-300 rounded-md p-2 h-12 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <Button
          size="md"
          className="font-[montserrat] bg-[#f6aa00] hover:bg-[#e59d01] hover:border-1 hover:border-yellow-100"
        >
          Rechercher
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

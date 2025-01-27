import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Footer from "../../components/homePage_Components/Footer";
import NavigationBar from "../../components/homePage_Components/NavigationBar";
import background from "../../assets/images/background/001.JPG";
import logo from "../../../src/assets/images/logos/logo.png";

const COUNTRIES = [
  "Algérie (+213)",
  "Bénin (+229)",
  "Burkina Faso (+226)",
  "Burundi (+257)",
  "Cameroun (+237)",
  "Cap-Vert (+238)",
  "Comores (+269)",
  "Congo Brazzaville (+242)",
  "Congo Kinshasa (+243)",
  "Côte d'Ivoire (+225)",
  "Djibouti (+253)",
  "Gabon (+241)",
  "Guinée (+224)",
  "Guinée-Bissau (+245)",
  "Madagascar (+261)",
  "Mali (+223)",
  "Mauritanie (+222)",
  "Niger (+227)",
  "Rwanda (+250)",
  "Sénégal (+221)",
  "Seychelles (+248)",
  "Tchad (+235)",
  "Togo (+228)",
];
const CODES = [
  "+213",
  "+229",
  "+226",
  "+257",
  "+237",
  "+238",
  "+269",
  "+242",
  "+243",
  "+225",
  "+253",
  "+241",
  "+224",
  "+245",
  "+261",
  "+223",
  "+222",
  "+227",
  "+250",
  "+221",
  "+248",
  "+235",
  "+228",
];

const SignupPage = () => {
  const [country, setCountry] = useState(0);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire soumis avec succès !");
  };

  return (
    <div className="bg-white">
      <NavigationBar />
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="relative w-full py-8 px-4 flex flex-col items-center bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-[#000000] bg-opacity-75 z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative z-10 w-full max-w-4xl bg-white opacity-95 rounded-3xl p-6 md:p-10"
        >
          <div className="text-center">
            <img src={logo} alt="Logo" className="w-20 h-20 mx-auto mb-4" />
            <Typography
              variant="h4"
              className="text-[#00008f] font-extrabold uppercase mb-4"
            >
              Créer un compte
            </Typography>
            <p className="text-lg font-medium text-gray-600">
              Remplissez le formulaire ci-dessous pour créer un compte.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Colonne gauche */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Entrez votre nom"
                    className="bg-white w-full border border-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Entrez votre email"
                    className="bg-white w-full border border-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Numéro de téléphone
                  </label>
                  <div className="flex">
                    <Menu placement="bottom-start">
                      <MenuHandler>
                        <Button
                          ripple={false}
                          variant="text"
                          className="shrink-0 rounded-r-none border border-gray-300 px-3"
                        >
                          {CODES[country]}
                        </Button>
                      </MenuHandler>
                      <MenuList className="max-h-60 overflow-auto">
                        {COUNTRIES.map((country, index) => (
                          <MenuItem
                            key={country}
                            onClick={() => setCountry(index)}
                          >
                            {country}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                    <input
                      type="tel"
                      placeholder="Numéro"
                      maxLength={9}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white flex-1 border border-gray-300 rounded-r-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              {/* Colonne droite */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    placeholder="Entrez votre prénom"
                    className="bg-white w-full border border-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    className="bg-white w-full border border-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    placeholder="Confirmez votre mot de passe"
                    className="bg-white w-full border border-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-[#f6aa00] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#00008f]"
              >
                Soumettre
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;

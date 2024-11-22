import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/homePage_Components/NavigationBar";
import Footer from "../../components/homePage_Components/Footer";
import { Button, Typography } from "@material-tailwind/react";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-auto">
      <NavigationBar />

      <div className="flex flex-col lg:flex-row flex-grow">
        {/* Left: Image */}
        <div className="lg:w-1/2 lg:block h-64 lg:h-auto opacity-90">
          <img
            src="../../../src/assets/images/background/001.jpg"
            className="object-cover w-full h-full"
            alt="Background"
          />
        </div>

        {/* Right: Login Form */}
        <div className="flex flex-col bg-white opacity-95 rounded-2xl p-8 sm:p-10 md:p-12 lg:w-1/2 items-center justify-center">
          <img
            src="../../../src/assets/images/logos/logo.png"
            alt="Placeholder Image"
            className="object-cover w-1/3 h-1/3 mb-4 "
          />
          <Typography className="text-2xl font-semibold mb-4 text-[#00008f] ">
            Connexion
          </Typography>
          <form action="#" method="POST" className="w-full max-w-md">
            {/* Username Input */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 text-justify"
              >
                Nom d'utilisateur ou email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="w-full border bg-transparent border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-justify"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full border bg-transparent border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500 bg-transparent"
              />
              <label htmlFor="remember" className="text-gray-600 ml-2">
                Se souvenir de moi
              </label>
            </div>
            {/* Forgot Password Link */}
            <div className="mb-6 text-[#f70b1b]">
              <a href="#" className="hover:underline">
                Mot de passe oublié ?
              </a>
            </div>
            {/* Login Button */}
            <Button
              size="lg"
              className="font-[montserrat] bg-[#f6aa00] hover:bg-[#e59d01] hover:border-1 hover:border-yellow-100 mx-auto my-4"
            >
              Se connecter
            </Button>
          </form>

          {/* Sign up Link */}
          <div className="mt-6 text-[#00007a] text-center">
            <Link to="/signup" className="hover:underline">
              Créer un compte
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;

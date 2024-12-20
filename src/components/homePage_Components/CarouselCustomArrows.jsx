// IMPORTER LES PACKAGES REACT
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

// IMPORTER LES IMAGES POUR LE CAROUSEL
import carousel_img1 from "../../../src/assets/images/carousel/1.JPG";
import carousel_img2 from "../../../src/assets/images/carousel/2.JPG";
import carousel_img3 from "../../../src/assets/images/carousel/3.JPG";

const CarouselCustomArrows = () => {
  // Fonction de défilement fluide vers une section spécifique
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
    }
  };

  return (
    // Composant Carousel avec changement d'image automatique (autoplay=false, délai=5000ms)
    <Carousel
      autoplay={true}
      autoplayDelay={5000}
      className={`h-[75vh] sm:h-[50vh] lg:h-[85vh]`} // Adapte la hauteur selon l'écran
    >
      {/* PREMIÈRE DIAPOSITIVE */}
      <div className={`relative h-full w-full`}>
        {/* Image de la diapositive */}
        <img
          src={carousel_img1}
          alt="image 1"
          className={`h-full w-full object-cover`}
        />

        {/* Texte superposé à la diapositive */}
        <div
          className={`absolute inset-0 grid h-full w-full place-items-center items-end pb-8 bg-black/30`}
        >
          <div className={`w-5/6 md:w-3/4 lg:w-3/4 text-center px-4`}>
            <Typography
              variant="h1"
              color="white"
              className={`mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl uppercase`}
            >
              Préparation aux grandes écoles en France
            </Typography>

            {/* Bouton de découverte */}
            <div
              className={`flex flex-col justify-center items-center gap-2 mb-3`}
            >
              <NavLink
                className={`bg-[#f6aa00] hover:bg-[#00007a] text-[#ffff] hover:text-[#f6aa00] font-semibold rounded-lg p-3.5 justify-center shadow w-fit uppercase`}
                onClick={() => scrollToSection("about")}
              >
                Découvrir
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* DEUXIÈME DIAPOSITIVE */}
      <div className={`relative h-full w-full`}>
        <img
          src={carousel_img2}
          alt="image 2"
          className={`h-full w-full object-cover`}
        />
        <div
          className={`absolute inset-0 grid h-full w-full place-items-center items-end pb-8 bg-black/30`}
        >
          <div className={`w-5/6 md:w-3/4 lg:w-3/4 text-center px-4`}>
            <Typography
              variant="h1"
              color="white"
              className={`mb-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl uppercase`}
            >
              Une préparation pour réussir votre avenir
            </Typography>

            {/* Bouton d'inscription */}
            <div
              className={`flex flex-col justify-center items-center gap-2 mb-3`}
            >
              <NavLink
                className={`bg-[#f6aa00] hover:bg-[#00007a] text-[#ffff] hover:text-[#f6aa00] font-semibold rounded-lg p-3.5 justify-center shadow w-fit uppercase`}
                to={`/signup`}
              >
                S'inscrire
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* TROISIÈME DIAPOSITIVE */}
      <div className={`relative h-full w-full`}>
        <img
          src={carousel_img3}
          alt="image 3"
          className={`h-full w-full object-cover`}
        />
        <div
          className={`absolute inset-0 grid h-full w-full place-items-center items-end pb-8 bg-black/30`}
        >
          <div className={`w-5/6 md:w-3/4 lg:w-3/4 text-center px-4`}>
            <Typography
              variant="h1"
              color="white"
              className={`mb-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl uppercase`}
            >
              Les clefs de l’obtention du visa
            </Typography>

            {/* Bouton de contact */}
            <div
              className={`flex flex-col justify-center items-center gap-2 mb-3`}
            >
              <NavLink
                className={`bg-[#f6aa00] hover:bg-[#00007a] text-[#ffff] hover:text-[#f6aa00] font-semibold rounded-lg p-3.5 justify-center shadow w-fit uppercase`}
                to={`/contact`}
              >
                Contactez-nous
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselCustomArrows;

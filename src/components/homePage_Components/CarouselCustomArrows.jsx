// IMPORTER LES PACKAGES REACT
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

// IMPORTER LES IMAGES POUR LE CAROUSEL
import carousel_img1 from "../../../src/assets/images/carousel/1.JPG";
import carousel_img2 from "../../../src/assets/images/carousel/2.JPG";
import carousel_img3 from "../../../src/assets/images/carousel/3.JPG";

const CarouselCustomArrows = () => {
  // DEFILEMENT FLUIDE : Cette méthode permet de scroller entre les différentes sections avec un effet de fluidité
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Attribut au défilement un comportement fluide
    }
  };

  return (
    // Le changement d'image dans le Carousel se fait automatiquement (autoplay=true) au bout de 5 secondes (5000 millisecondes)
    <Carousel
      autoplay={true}
      autoplayDelay={5000}
      className="h-[75vh] sm:h-[50vh] lg:h-[85vh]" // Adapte la hauteur du carousel selon la taille de l'écran
    >
      {/* PREMIERE DIAPOSITIVE DU CAROUSEEL */}
      <div className="relative h-full w-full">
        {/* Image de la diapositive */}
        <img
          src={carousel_img1}
          alt="image 1"
          className="h-full w-full object-cover"
        />

        {/* Texte de la diapositive */}
        <div className="absolute inset-0 grid h-full w-full place-items-center items-end pb-8 bg-black/75">
          <div className="w-5/6 md:w-3/4 lg:w-3/4 text-center px-4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl uppercase"
            >
              Préparation aux grandes écoles en France
            </Typography>

            {/* Deux boutons dans la diapositive */}
            <div className="flex flex-col justify-center items-center gap-2 ">
              <NavLink
                className="bg-[#f6aa00] hover:bg-[#00007a] text-[#ffff] hover:text-[#f6aa00]  font-semibold rounded-lg p-3.5 justify-center shadow- w-fit uppercase"
                onClick={() => scrollToSection("about")}
              >
                Découvrir
              </NavLink>

              <Button
                size="lg"
                variant="text"
                className="font-[montserrat] bg-transparent text-white hover:text-[#e59d01] hover:bg-[#e59d01] hover:border-1 hover:border-[#e59d01]"
              >
                {/* <Link
                  to={"/signup"}
                  className="hover:text-[#e59d01] hover:border-[#e59d01]"
                >
                  S'INSCRIRE
                </Link> */}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* DEUXIEME DIAPOSITIVE DU CAROUSEEL */}
      <div className="relative h-full w-full">
        <img
          src={carousel_img2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center items-end pb-8 bg-black/75">
          <div className="w-5/6 md:w-3/4 lg:w-3/4 text-center px-4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl uppercase"
            >
              Une préparation pour réussir votre avenir
            </Typography>

            <div className="flex flex-col justify-center items-center gap-2 ">
              <NavLink
                className="bg-[#f6aa00] hover:bg-[#00007a] text-[#ffff] hover:text-[#f6aa00]  font-semibold rounded-lg p-3.5 justify-center shadow- w-fit uppercase"
                to={"/signup"}
              >
                S'incrire
              </NavLink>

              <Button
                size="lg"
                variant="text"
                className="font-[montserrat] bg-transparent text-white hover:text-[#e59d01] hover:bg-[#e59d01] hover:border-1 hover:border-[#e59d01]"
              >
                {/* <Link
                  to={"/signup"}
                  className="hover:text-[#e59d01] hover:border-[#e59d01]"
                >
                  S'INSCRIRE
                </Link> */}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* TROISIEME DIAPOSITIVE DU CAROUSEEL */}
      <div className="relative h-full w-full">
        <img
          src={carousel_img3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center items-end pb-8 bg-black/75">
          <div className="w-5/6 md:w-3/4 lg:w-3/4 text-center px-4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl uppercase"
            >
              Les clefs de l’obtention du visa
            </Typography>

            <div className="flex flex-col justify-center items-center gap-2 ">
              <NavLink
                className="bg-[#f6aa00] hover:bg-[#00007a] text-[#ffff] hover:text-[#f6aa00]  font-semibold rounded-lg p-3.5 justify-center shadow- w-fit uppercase"
                to={"/contact"}
              >
                Contactez-nous
              </NavLink>

              <Button
                size="lg"
                variant="text"
                className="font-[montserrat] bg-transparent text-white hover:text-[#e59d01] hover:bg-[#e59d01] hover:border-1 hover:border-[#e59d01]"
              >
                {/* <Link
                  to={"/signup"}
                  className="hover:text-[#e59d01] hover:border-[#e59d01]"
                >
                  S'INSCRIRE
                </Link> */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default CarouselCustomArrows;

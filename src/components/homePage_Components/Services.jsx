import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

// Services Section
const Services = () => {
  return (
    <section className="bg-gray-50 py-3 sm:py-8 px-4 sm:px-14 lg:pb-[90px] lg:pt-[120px]">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="mb-5 max-w-full text-center lg:mb-20">
            <span className="block mb-4 text-lg font-semibold py-2 capitalize text-[#f70b1b]">
              Nos services
            </span>
            <Typography
              variant="h1"
              className="text-[#00008f] font-[montserrat] uppercase font-bold mb-5 text-3xl dark:text-white sm:text-[40px]/[48px]"
            >
              Ce que nous vous offrons
            </Typography>
          </div>
        </div>
      </div>
      {/* Grid des cartes avec animation séquentielle */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
        {serviceData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.3, // Délai progressif entre les cartes
            }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

// ServiceCard Component
const ServiceCard = ({ icon, title, details }) => {
  return (
    <div className="pb-6 sm:pb-8 pt-2 w-full sm:w-auto px-2 sm:px-4">
      <div className="mb-2 rounded-lg bg-gradient-to-t from-[#07076b] to-[#030341] text-white py-6 px-4 shadow-md md:px-7 xl:px-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-[#f6aa00]">
            {icon}
          </div>
          <h4 className="mb-[14px] text-1xl font-semibold text-white">
            {title}
          </h4>
        </div>
        <p className="font-normal text-white">{details}</p>
      </div>
    </div>
  );
};

// Data for services
const serviceData = [
  {
    title: "Admission dans une grande école",
    details:
      "Nous vous aidons à préparer et soumettre vos dossiers d'admission pour intégrer les meilleures grandes écoles.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Entretien Campus France",
    details:
      "Nous vous préparons pour réussir votre entretien avec Campus France grâce à des simulations et des conseils personnalisés.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-7 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v9m0 3v9m3-15h-6m0 3h6m0 3h-6m3-18l9 9h-9m0-9H3l9 9m0 9l9 9m-9-9L3 12"
        />
      </svg>
    ),
  },
  {
    title: "Recherche de logement",
    details:
      "Nous vous accompagnons dans la recherche de votre logement, que ce soit en résidence universitaire ou en location privée.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
        />
      </svg>
    ),
  },
  {
    title: "Stage/alternance en entreprise",
    details:
      "Nous vous aidons à trouver des stages ou des alternances en entreprise pour renforcer votre expérience professionnelle.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
];

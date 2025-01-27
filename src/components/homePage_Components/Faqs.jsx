import React, { useState } from "react"; // Import nécessaire pour React et useState

// Composant principal de la section FAQ
const Faqs = () => {
  return (
    <section className={`relative z-20 overflow-hidden bg-transparent p-4`}>
      <div className={` mx-auto`}>
        <div className={`flex flex-wrap`}>
          <div className={`w-full text-center lg:mb-10`}>
            {/* Titre de la section */}
            <span className={`mb-2 block text-lg font-bold text-[#f70b1b]`}>
              FAQ
            </span>
            <h2
              className={`mb-2 text-3xl font-bold text-[#00008f] sm:text-[40px]/[48px]`}
            >
              Avez-vous des questions sur France Prépa Academy ?
            </h2>
          </div>
        </div>

        {/* Conteneur des éléments FAQ */}
        <div
          className={`text-justify text-white font-medium mb-8 w-full sm:max-w-full rounded-lg bg-[#f6a901] py-4 px-2 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)]`}
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              qestion={faq.qestion}
              response={faq.response}
            />
          ))}
        </div>
      </div>

      {/* Arrière-plan SVG */}
      <div className={`absolute bottom-0 right-0 z-[-1]`}>
        <BackgroundSvg />
      </div>
    </section>
  );
};

// Composant pour un élément d'accordéon individuel
const AccordionItem = ({ qestion, response }) => {
  const [active, setActive] = useState(false); // Gère l'état ouvert/fermé de l'accordéon

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div
      className={`mb-8 w-full rounded-lg bg-[#00008f] py-2 px-0 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)]`}
    >
      <button
        className={`faq-btn flex w-full text-left `}
        onClick={handleToggle}
      >
        {/* Bouton avec icône */}
        <div
          className={`mr-1 flex items-center text-whiteflex h-10 w-full max-w-[40px] justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5`}
        >
          <svg
            className={`fill-primary  stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <path d="M7.28687 8.43257L9.53454 8.41721L15.7631 2.70784C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.0545 2.69659L7.28687 8.43257Z" />
          </svg>
        </div>

        {/* En-tête de l'élément */}
        <div className={`w-full`}>
          <h4 className={`mt-1 text-lg font-semibold text-[#ffff]`}>
            {qestion}
          </h4>
        </div>
      </button>

      {/* Texte visible uniquement lorsque l'accordéon est ouvert */}
      <div
        className={`px-2 duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className={`bg-gray-100 py-3 rounded-md rounded-t-none px-3 text-base leading-relaxed text-black`}>
          {response}
        </p>
      </div>
    </div>
  );
};

// Composant SVG pour l'arrière-plan
const BackgroundSvg = () => (
  <svg
    width="1440"
    height="886"
    viewBox="0 0 1440 886"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="1308.65"
        y1="1142.58"
        x2="602.827"
        y2="-418.681"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3056D3" stopOpacity="0.36" />
        <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
        <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
      </linearGradient>
    </defs>
  </svg>
);

// Données des FAQs
const faqData = [
  {
    qestion: "Qui est France Prepa Academy ?",
    response:
      "Nous sommes un organisme qui aide les étudiants africains à intégrer dans les grandes écoles en France et à réussir parfaitement leur procédure de visa.",
  },
  {
    qestion: "Quels sont vos services ?",
    response:
      "Entretien & admission – Procédure Campus France – Réservation de logement – Dépôt de visa & Validation en ligne.",
  },
  {
    qestion: "Comment soumettre un dossier ?",
    response:
      "Inscrivez-vous sur notre site Internet, et puis déposez une lettre de motivation, votre CV actualisé, la copie du dernier diplôme ainsi que ses relevés de notes.",
  },
];

export default Faqs;

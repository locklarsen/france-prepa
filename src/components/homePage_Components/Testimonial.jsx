import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBBtn, // Utilisation de MDBBtn pour conserver le design
} from "mdb-react-ui-kit";
import { FaArrowLeftLong, FaRightLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

// Importer les images
import person1 from "../../../src/assets/images/temoignanes/personnage1.jpeg";
import person2 from "../../../src/assets/images/temoignanes/personnage2.jpg";
import person3 from "../../../src/assets/images/temoignanes/personnage3.jpeg";
import LargeVideo from "../general_usage_components/LargeVideo";
import { Typography } from "@material-tailwind/react";

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: "Celia - Etudiante",
      image: person1,
      text: "« France Prepa a été pour moi une opportunité énorme, un tremplin pour mener à bien mon projet professionnel »",
    },
    {
      name: "Loica - Etudiant",
      image: person2,
      text: "« France Prepa m'a permis de découvrir de nouvelles opportunités et de renforcer mes compétences professionnelles »",
    },
    {
      name: "Alexandre - Entrepreneur",
      image: person3,
      text: "« Grâce à France Prepa, j'ai pu me préparer aux grandes écoles et lancer mon propre projet d'entreprise »",
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setActiveTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveTestimonial(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <MDBContainer fluid className="py-2">
      <div className="bg-white relative flex min-h-fit flex-col justify-center overflow-hidden bg-slate-100 py-1 sm:py-8">
        <div className="max-w-full px-4 sm:px-24 py-4">
          <span
            className="block mb-4 text-lg font-bold py-2 uppercase"
            style={{ color: "#f70b1b" }}
          >
         Témoignages
          </span>
          <Typography
            variant="h1"
            className="text-[#00008f] font-[montserrat] uppercase font-bold mb-1 text-3xl dark:text-white sm:text-[40px]/[48px]"
          >
            Nos étudiants témoignents
          </Typography>
          <p className="text-center my-4 font-medium text-slate-500">
            - Témoignage d'un étudiant -
          </p>
          <div
            className={`px-1 sm:px-10 md:px-14 lg:px-14 shadow-lg rounded-md`}
          >
            <div
              className={`h-full w-full rounded-xl border-8 border-gray-50 shadow-sm`}
            >
              <LargeVideo videoSource="https://docs.material-tailwind.com/demo.mp4" />
            </div>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
};

export default Testimonial;

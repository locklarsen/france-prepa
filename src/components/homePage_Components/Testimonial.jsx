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

//Importer les images
import person1 from "../../../src/assets/images/temoignanes/personnage1.jpeg";
import person2 from "../../../src/assets/images/temoignanes/personnage2.jpg";
import person3 from "../../../src/assets/images/temoignanes/personnage3.jpeg";

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
    <MDBContainer fluid className="py-5 gradient-custom">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <div className="text-center mb-4 pb-2">
            <MDBIcon fas icon="quote-left" size="3x" className="text-white" />
          </div>
          <MDBCard>
            <MDBCardBody className="px-4 py-5">
              {/* Animation pour le témoignage actif */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activeTestimonial}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="10" xl="8">
                      <MDBRow>
                        <MDBCol
                          lg="4"
                          className="d-flex justify-content-center"
                        >
                          <img
                            src={testimonials[activeTestimonial].image}
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="personnage"
                            width="150"
                            height="150"
                          />
                        </MDBCol>
                        <MDBCol
                          md="9"
                          lg="7"
                          xl="8"
                          className="text-center text-lg-start mx-auto mx-lg-0"
                        >
                          <h4 className="mb-4">
                            {testimonials[activeTestimonial].name}
                          </h4>
                          <p className="mb-0 pb-3">
                            {testimonials[activeTestimonial].text}
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </motion.div>
              </AnimatePresence>
              {/* Flèches comme boutons de navigation */}
              <div className="d-flex justify-content-between">
                {/* Flèche précédente */}
                <button onClick={prevTestimonial}>
                  <FaArrowLeftLong
                    fas
                    icon="chevron-right"
                    width={"4"}
                    className="text-blue-700"
                  />
                </button>
                {/* Flèche suivante */}
                <button onClick={nextTestimonial}>
                  <FaRightLong
                    fas
                    icon="chevron-right"
                    width={"4"}
                    className="text-blue-700"
                  />
                </button>
              </div>
            </MDBCardBody>
          </MDBCard>
          <div className="text-center mt-4 pt-2">
            <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Testimonial;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import postImage1 from "../../../src/assets/images/carousel/3.JPG";
import postImage2 from "../../../src/assets/images/carousel/2.JPG";
import postImage3 from "../../../src/assets/images/carousel/1.JPG";
import { Typography } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Liste des actualités
const posts = [
  {
    id: 1,
    title: "LE CONCOURS DE BOURSE DE MARS 2025",
    href: "#",
    couverture: "../../../src/assets/images/news/3.jpg",
    description:
      "France Prépa Academy a été le théâtre d'une journée mémorable lors du concours de bourse qui s’est tenu le 1er mars dernier. La salle était remplie d'enthousiasme et de détermination, avec des candidats impatients de prouver leur potentiel et de faire un pas décisif vers leur avenir académique.\n\n<strong>DES ENTRETIENS QUI FONT LA DIFFERENCE</strong>\nChaque candidat a eu l'occasion de présenter son parcours, ses aspirations et sa vision d'avenir dans un cadre bienveillant devant un jury, attentif et engagé.\n\nLoin d'être de simples formalités, ce concours mets en oeuvre une véritable scène pour briller. Ces moments d'échange sont cruciaux pour montrer non seulement les compétences académiques, mais aussi la personnalité et la motivation qui font la différence.",
    date: "01-03-2025",
    datetime: "2025-03-01",
    images: [
      "../../../src/assets/images/news/1.jpg",
      "../../../src/assets/images/news/2.jpg",
      "../../../src/assets/images/news/3.jpg",
    ],
  },
  {
    id: 2,
    title: "Les premiers visas de 2025 sont là.",
    href: "#",
    couverture: postImage2,
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "22/01/2025",
    datetime: "2025-01-22",
    images: [postImage2, postImage1],
  },
  {
    id: 3,
    title: "Les trois promotions de France Prepa Academy se rencontrent.",
    href: "#",
    couverture: postImage3,
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "17/02/2050",
    datetime: "2025-02-17",
    images: [postImage1, postImage2],
  },
];

export default function News() {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden"; // Empêche le défilement
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = "unset"; // Rétablit le défilement
  };

  useEffect(() => {
    // Nettoie le style de défilement lorsque le composant est démonté
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const formatDescription = (description) => {
    return { __html: description.replace(/\n/g, "<br />") };
  };

  return (
    <div className={`bg-gray-50 w-full`}>
      {/* Conteneur principal */}
      <div className={`max-w-7xl px-6 lg:px-8`}>
        {/* Titre de la section avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`w-full lg:mx-0`}
        >
          <Typography
            variant="h1"
            className={`text-[#00008f] font-[montserrat] uppercase font-bold mb-5 text-3xl dark:text-white sm:text-[40px]/[48px]`}
          >
            Actualités de France Prépa Academy
          </Typography>
        </motion.div>

        {/* Grille des actualités avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={`mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 border-t border-gray-200 pt-4 px-3 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-1`}
        >
          {posts.slice(0, 3).map((post) => (
            <div key={post.id} onClick={() => openModal(post)}>
              <motion.article
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className={`bg-white shadow-lg border p-3 rounded-lg flex flex-col lg:flex-row items-start justify-between gap-4 cursor-pointer`}
              >
                {/* Image de l'article */}
                <img
                  src={post.couverture}
                  alt={post.title}
                  className={`w-full lg:w-1/3 h-48 object-cover uppercase rounded-lg mb-4 lg:mb-0`}
                />
                <div className={`flex flex-col w-full lg:w-2/3`}>
                  {/* Date de publication */}
                  <div className={`flex items-center gap-x-4 text-xs`}>
                    <time dateTime={post.datetime} className={`text-gray-500`}>
                      {post.date}
                    </time>
                  </div>
                  {/* Contenu de l'article */}
                  <div className={`group relative`}>
                    <h3
                      className={`mt-3 text-lg/6 font-bold text-justify uppercase text-[#00008f] group-hover:text-[#f6aa00]`}
                    >
                      {post.title}
                    </h3>
                    <p
                      className={`mt-2 line-clamp-3 text-sm/6 text-gray-600 text-justify`}
                      dangerouslySetInnerHTML={formatDescription(
                        post.description
                      )}
                    ></p>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000] py-12">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full max-h-[95vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="bg-red-600 rounded-lg absolute top-2 right-2 py-1 px-3 font-bold text-white hover:text-gray-200 z-50"
            >
              Fermer
            </button>
            <h3 className="text-xl font-extrabold text-[#00008f] mb-2">
              {selectedPost.title}
            </h3>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {selectedPost.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${selectedPost.title} - ${index}`}
                    className="w-auto h-auto object-fit rounded-lg mb-4"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p
              className="text-gray-600 mb-4 text-justify"
              dangerouslySetInnerHTML={formatDescription(
                selectedPost.description
              )}
            ></p>
            <time
              dateTime={selectedPost.datetime}
              className="text-gray-900 text-sm"
            >
              {selectedPost.date}
            </time>
          </div>
        </div>
      )}
    </div>
  );
}

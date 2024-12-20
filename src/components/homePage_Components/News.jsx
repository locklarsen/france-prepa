import React from "react";
import { motion } from "framer-motion";
import postImage1 from "../../../src/assets/images/carousel/3.JPG";
import postImage2 from "../../../src/assets/images/carousel/2.JPG";
import postImage3 from "../../../src/assets/images/carousel/1.JPG";
import { Typography } from "@material-tailwind/react";

// Liste des actualités
const posts = [
  {
    id: 1,
    title: "Les concours France Prépa arrivent…",
    href: "#",
    image: postImage1,
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "30/11/2024",
    datetime: "2024-11-30",
  },
  {
    id: 2,
    title: "Nos lauréats aux premiers rangs",
    href: "#",
    image: postImage2,
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "16/03/2020",
    datetime: "2020-03-16",
  },
  {
    id: 3,
    title: "Nos lauréats entrent en stage",
    href: "#",
    image: postImage3,
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "16/03/2020",
    datetime: "2020-03-16",
  },
];

export default function News() {
  return (
    <div className={`bg-white py-2 px-4 sm:py-10 w-full`}>
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
          className={`mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 px-3 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3`}
        >
          {posts.slice(0, 3).map((post) => (
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              key={post.id}
              className={`flex max-w-xl flex-col items-start justify-between`}
            >
              {/* Image de l'article */}
              <img
                src={post.image}
                alt={post.title}
                className={`w-full h-48 object-cover rounded-lg mb-4`}
              />
              {/* Date de publication */}
              <div className={`flex items-center gap-x-4 text-xs`}>
                <time dateTime={post.datetime} className={`text-gray-500`}>
                  {post.date}
                </time>
              </div>
              {/* Contenu de l'article */}
              <div className={`group relative`}>
                <h3
                  className={`mt-3 text-lg/6 font-bold text-[#00008f] group-hover:text-[#f6aa00]`}
                >
                  {post.title}
                </h3>
                <p className={`mt-2 line-clamp-3 text-sm/6 text-gray-600`}>
                  {post.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

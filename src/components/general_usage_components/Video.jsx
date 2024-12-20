// IMPORTER LES PACKAGES REACT
import React from "react";

// IMPORTER D4AUTRES PACKAGES
import { motion } from "framer-motion";

const Video = ({ videoSource, imagePreview, subtitle }) => {
  return (
    <figure>
      <motion.video
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        controls
        poster={imagePreview} // Image de prévisualisation de la vidéo
        className={`w-full h-auto max-w-full lg:max-w-[90%] mx-auto border-1 border-[#efb000] rounded-lg`}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <figcaption className={`font-normal italic text-center my-1`}>
        {subtitle}
      </figcaption>
    </figure>
  );
};

export default Video;

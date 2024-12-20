import React from "react";
import { motion } from "framer-motion";

const LargeVideo = ({ videoSource, imagePreview }) => {
  return (
    <motion.video
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.6,
      }}
      controls
      poster={imagePreview}
      className="w-full h-auto max-w-full lg:max-w-[90%] mx-auto border-8 border-[#efb000] rounded-lg"
    >
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </motion.video>
  );
};

export default LargeVideo;

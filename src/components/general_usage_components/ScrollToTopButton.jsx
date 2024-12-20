import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-t from-[#07076b] to-[#030341] text-white p-3 rounded-full shadow-lg hover:bg-[#f6aa00] focus:outline-none"
      aria-label="Scroll to top"
    >
      <FaArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollToTopButton;

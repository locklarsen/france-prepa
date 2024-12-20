import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Importer les composants de pages
import NavigationBar from "../../components/homePage_Components/NavigationBar";
import CarouselCustomArrows from "../../components/homePage_Components/CarouselCustomArrows";
import Footer from "../../components/homePage_Components/Footer";
import SearchBar from "../../components/homePage_Components/searchBar";
import Services from "../../components/homePage_Components/Services";
import Testimonial from "../../components/homePage_Components/Testimonial";
import About from "../../components/homePage_Components/About";
import News from "../../components/homePage_Components/News";
import Faqs from "../../components/homePage_Components/Faqs";
import ScrollToTopButton from "../../components/general_usage_components/ScrollToTopButton";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 0.5,
    },
  },
};

const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="">
      <ScrollToTopButton/>
      <AnimatedComponent>
        <NavigationBar />
        <CarouselCustomArrows />
      </AnimatedComponent>
      <SearchBar />
      <AnimatedComponent>
        <About />
      </AnimatedComponent>
      <AnimatedComponent>
        <Services />
      </AnimatedComponent>
      <AnimatedComponent>
        <Testimonial />
      </AnimatedComponent>
      <AnimatedComponent>
        <News />
      </AnimatedComponent>
      <AnimatedComponent>
        <Faqs />
      </AnimatedComponent>

      <Footer />
    </div>
  );
};

export default HomePage;

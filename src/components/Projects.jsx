import React, { useEffect, useState } from "react";
import { data, projectsData } from "../assets/assets.js";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

 
  const hasNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const hasPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); 
      } else {
        setCardsToShow(1); 
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center text-center mt-8 sm:mt-12" id="projects">
        <p className="text-4xl sm:text-5xl font-light">
          <span className="font-bold">Projects</span>
          <span className="underline underline-offset-4 decoration-1 text-gray-800">
            Completed
          </span>
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mt-2">
          Crafting Spaces Building Legacies - Explore
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mt-1">Our Portfolio</p>
      </div>

      <div className="flex justify-center gap-4 items-center mt-6 mb-4 sm:mb-10">
        <button
          onClick={hasPrevious}
          className="w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center border border-gray-400 rounded-md"
        >
          <img src={data.left_arrow} alt="Left Arrow" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={hasNext}
          className="w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center border border-gray-400 rounded-md"
        >
          <img src={data.right_arrow} alt="Right Arrow" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="overflow-hidden m-4 sm:m-8 p-4 sm:p-6">
      <div
      className="flex gap-6 sm:gap-8 transition-transform duration-500 ease-in-out"
      style={{
      transform: `translateX(-${currentIndex * (cardsToShow === 1 ? 106 : 100) / cardsToShow}%)`,
     }}
    >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-6 sm:mb-12 rounded-lg"
              />
              <div className="absolute left-0 right-0 bottom-2 sm:bottom-5 flex items-center justify-center">
                <div className="inline-block bg-white text-black px-6 py-2 sm:px-14 sm:py-2 rounded-md shadow-lg">
                  <p className="text-lg sm:text-2xl font-semibold text-center">
                    {project.title}
                  </p>
                  <p className="text-sm sm:text-md text-gray-500 text-center">
                    {project.price} | {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

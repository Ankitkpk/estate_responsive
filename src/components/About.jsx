import React from "react";
import { data } from "../assets/assets.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="p-4 sm:p-8"
    >
      <div className="flex flex-col items-center justify-between text-center mb-8 sm:mb-12">
        <p className="text-4xl sm:text-5xl font-light leading-tight">
          <span className="font-bold">About </span>
          <span className="underline underline-offset-4 decoration-1 text-gray-800">
            our brand
          </span>
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mt-2">
          Passionate About Properties Dedicated to
        </p>
        <p className="text-lg sm:text-2xl text-gray-400 mt-1">Our Vision</p>
      </div>

    
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10">
      
        <img
          src={data.brand_img}
          alt="Brand"
          className="w-full sm:w-2/3 md:w-1/3 object-cover rounded-lg"
        />

        <div className="flex flex-col gap-6 items-center md:items-start">
         
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-blue-700">10+</p>
              <p className="text-gray-600 text-sm sm:text-base">
                Years of Excellence
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-blue-700">12+</p>
              <p className="text-gray-600 text-sm sm:text-base">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-blue-700">20+</p>
              <p className="text-gray-600 text-sm sm:text-base">
                Min. Sq. Ft. Delivered
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-blue-700">25+</p>
              <p className="text-gray-600 text-sm sm:text-base">
                Ongoing Projects
              </p>
            </div>
          </div>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md text-center md:text-left mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit
            doloremque hic reiciendis, iste necessitatibus ut dolore. Nulla
            aperiam pariatur molestiae magni sapiente fuga debitis? Eius impedit
            adipisci nisi voluptatibus.
          </p>

          <button className="bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-sm text-sm sm:text-base font-medium hover:bg-blue-800 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

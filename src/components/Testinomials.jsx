import React from "react";
import { testimonialsData } from "../assets/assets.js";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center mt-12 px-4"
      id="testimonials"
    >
      <div>
        <p className="text-4xl font-light">
          <span className="font-bold">Customer </span>
          <span className="underline underline-offset-4 decoration-1 text-gray-800">
            Testimonials
          </span>
        </p>
        <p className="text-xl text-gray-400 mt-4">
          Real Stories From Those Who Found Home
        </p>
        <p className="text-xl text-gray-400 mt-2">With Us</p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={testimonial.image}
              alt={testimonial.alt || "Customer testimonial"}
              className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
            />

            {/* Name & Title */}
            <h3 className="text-xl font-bold text-gray-700">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.title}</p>

            {/* Rating */}
            <div className="flex mt-3 mb-4">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={starIndex < testimonial.rating ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`w-5 h-5 ${
                    starIndex < testimonial.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.27l6.18 3.73-1.64-7.03L21 8.97l-7.19-.61L12 2 10.19 8.36 3 8.97l5.46 4.9-1.64 7.03z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-base leading-relaxed p-4">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;

import React from 'react';
import { data } from '../assets/assets.js';

const About = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center justify-between text-center mb-12">
        <p className="text-6xl font-light">
          <span className="font-bold">About</span><span className='underline underline-offset-4 decoration-1 under font-light text-gray-800'>our brand</span>
        </p>
        <p className="text-xl text-gray-400 mt-4">Passionate About Properties Dedicated to</p>
        <p className="text-2xl text-gray-400 mt-2">Our Vision</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10"> 
        <img
          src={data.brand_img}
          alt="Brand"
          className="w-full md:w-1/3 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">10+</p>
              <p className="text-gray-600 text-base">Years of Excellence</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">12+</p>
              <p className="text-gray-600 text-base">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">20+</p>
              <p className="text-gray-600 text-base">Min. Sq. Ft. Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">25+</p>
              <p className="text-gray-600 text-base">Ongoing Projects</p>
            </div>
          </div>

          <p className="text-gray-500 text-base leading-relaxed max-w-md text-center md:text-left mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit doloremque hic
            reiciendis, iste necessitatibus ut dolore. Nulla aperiam pariatur molestiae magni sapiente
            fuga debitis? Eius impedit adipisci nisi voluptatibus.iste necessitatibus ut dolore. Nulla aperiam 
            pariatur molestiae magni sapiente
          </p>
          <button className="bg-blue-700 text-white px-6 py-2 w-max rounded-sm text-base font-medium hover:bg-blue-800 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;


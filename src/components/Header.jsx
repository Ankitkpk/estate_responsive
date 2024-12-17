import './header.css';
import Navbar from './Navbar';
import { motion } from "framer-motion"

const Header = () => { 
  return (
    <div className="header relative min-h-screen">
      <Navbar />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-0">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold p-2 mb-6 sm:mb-10 animate-slideUp">
          Explore homes that <br /> fit your dreams
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4 sm:pt-6 animate-slideUp">
          <button className="bg-transparent text-white/80 border border-white/80 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-lg font-medium shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
            Projects
          </button>
          <button className="bg-transparent text-white/80 border border-white/80 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-lg font-medium shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { data } from "../assets/assets.js";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="absolute top-0 left-0 w-full px-6 md:px-10 py-4 md:py-5 flex justify-between items-center z-10">
        <img src={data.logo} alt="logo" className="max-h-12 md:max-h-16" />
        
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={isMenuOpen ? data.cross_icon : data.menu_icon}
            alt={isMenuOpen ? "close_menu" : "menu_icon"}
            className="w-8 h-8 md:hidden text-black"
          />
        </button>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 md:gap-8 list-none m-0 p-0">
          <li className="cursor-pointer text-white text-base md:text-xl">
            <a href="#Home">Home</a>
          </li>
          <li className="cursor-pointer text-white text-base md:text-xl">
            <a href="#About">About</a>
          </li>
          <li className="cursor-pointer text-white text-base md:text-xl">
            <a href="#Projects">Projects</a>
          </li>
          <li className="cursor-pointer text-white text-base md:text-xl">
            <a href="#Testimonials">Testimonials</a>
          </li>
        </ul>
        <button className="hidden md:flex bg-gray-100 text-black px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition duration-300 hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-20">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-black focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={data.cross_icon}
              alt="close_menu"
              className="w-8 h-8"
            />
          </button>
          
          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-6 list-none m-0 p-0">
            <li
              className="cursor-pointer text-black text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#Home">Home</a>
            </li>
            <li
              className="cursor-pointer text-black text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#About">About</a>
            </li>
            <li
              className="cursor-pointer text-black text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#Projects">Projects</a>
            </li>
            <li
              className="cursor-pointer text-black text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#Testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

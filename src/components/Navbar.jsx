import { useState } from "react";
import { data } from "../assets/assets.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar w-full bg-gray-900 text-white">
      {/* Navbar Container */}
      <div className="w-full px-6 md:px-10 py-4 md:py-5 flex justify-between items-center">
        {/* Logo */}
        <img
          src={data.logo}
          alt="logo"
          className="max-h-12 md:max-h-16 cursor-pointer"
        />

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <img
            src={isMenuOpen ? data.cross_icon : data.menu_icon}
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="w-8 h-8"
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 md:gap-8 list-none m-0 p-0">
          <li className="cursor-pointer text-base md:text-lg hover:text-gray-400 transition">
            <a href="#Home">Home</a>
          </li>
          <li className="cursor-pointer text-base md:text-lg hover:text-gray-400 transition">
            <a href="#About">About</a>
          </li>
          <li className="cursor-pointer text-base md:text-lg hover:text-gray-400 transition">
            <a href="#Projects">Projects</a>
          </li>
          <li className="cursor-pointer text-base md:text-lg hover:text-gray-400 transition">
            <a href="#Testimonials">Testimonials</a>
          </li>
        </ul>

        {/* Sign Up Button (Desktop Only) */}
        <button className="hidden md:inline-flex bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white text-black z-20 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          <img
            src={data.cross_icon}
            alt="close_menu"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </button>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center justify-center h-full gap-8 list-none text-center">
          <li
            className="text-black text-lg sm:text-xl hover:text-gray-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#Home">Home</a>
          </li>
          <li
            className="text-black text-lg sm:text-xl hover:text-gray-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#About">About</a>
          </li>
          <li
            className="text-black text-lg sm:text-xl hover:text-gray-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#Projects">Projects</a>
          </li>
          <li
            className="text-black text-lg sm:text-xl hover:text-gray-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

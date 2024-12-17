import { useState } from "react";
import { data } from "../assets/assets.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-2 md:px-10 lg:px-15 bg-transparent">
        {/* Logo */}
        <img src={data.logo} alt="logo" className="h-10 md:h-12" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          <li>
            <a href="#Header" className="cursor-pointer hover:text-gray-400 transition text-xl">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="cursor-pointer hover:text-gray-400 transition text-xl">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400 transition text-xl">
              Projects
            </a>
          </li>
          <li>
            <a href="#Testimonials" className="cursor-pointer hover:text-gray-400 transition text-xl">
              Testimonials
            </a>
          </li>
        </ul>

        {/* Sign Up Button (Desktop) */}
        <button className="hidden md:block bg-white text-gray-900 px-8 py-2 rounded-full hover:bg-gray-300 transition">
          Sign Up
        </button>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <img src={data.cross_icon} alt="Close Menu" className="h-8 w-8" />
          ) : (
            <img src={data.menu_icon} alt="Open Menu" className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-white text-black flex flex-col items-center justify-center gap-8 text-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button Inside Menu */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 text-black focus:outline-none"
          aria-label="Close Menu"
        >
          <img src={data.cross_icon} alt="Close Menu" className="h-8 w-8" />
        </button>

        {/* Menu Links */}
        <a
          href="#Header"
          className="hover:text-gray-400 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#About"
          className="hover:text-gray-400 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#Projects"
          className="hover:text-gray-400 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#Testimonials"
          className="hover:text-gray-400 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Testimonials
        </a>
      </div>
    </div>
  );
};

export default Navbar;

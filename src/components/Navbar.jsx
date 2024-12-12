import { useState } from 'react';
import { data } from '../assets/assets.js';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="absolute top-0 left-0 w-full px-6 md:px-10 py-4 md:py-5 flex justify-between items-center z-10">
        <img src={data.logo} alt="logo" className="max-h-12 md:max-h-16" />
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={data.menu_icon} alt="menu" className="w-8 h-8 md:hidden" />
        </button>
        <ul className="hidden md:flex gap-6 md:gap-8 list-none m-0 p-0">
          <li className="cursor-pointer text-white text-base md:text-xl">Home</li>
          <li className="cursor-pointer text-white text-base md:text-xl">About</li>
          <li className="cursor-pointer text-white text-base md:text-xl">Projects</li>
          <li className="cursor-pointer text-white text-base md:text-xl">Testimonials</li>
        </ul>
        <button className="hidden md:flex bg-gray-100 text-black px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition duration-300 hover:bg-blue-700">
          Sign Up
          <img src={data.menu_icon} alt="arrow" className="ml-2 max-h-4 md:max-h-6 md:hidden" />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 z-20">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            <li className="cursor-pointer text-white text-lg" onClick={() => setIsMenuOpen(false)}>Home</li>
            <li className="cursor-pointer text-white text-lg" onClick={() => setIsMenuOpen(false)}>About</li>
            <li className="cursor-pointer text-white text-lg" onClick={() => setIsMenuOpen(false)}>Projects</li>
            <li className="cursor-pointer text-white text-lg" onClick={() => setIsMenuOpen(false)}>Testimonials</li>
          </ul>
          <button className="bg-gray-100 text-white px-6 py-2 rounded-full text-sm font-medium mt-4 transition duration-300">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

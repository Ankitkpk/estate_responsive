import React from 'react';
import { data } from '../assets/assets.js';

const Footer = () => {
  return (
    <div className="bg-gray-900 mt-12 text-white py-10 px-4 sm:px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 p-4 sm:p-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <img src={data.logo_dark} alt="logo" className="w-32 mb-2" />
          <p className="text-gray-400 text-sm leading-6 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor placeat eaque beatae excepturi quod sunt facere aliquam! Voluptatum unde deserunt obcaecati similique recusandae quas autem necessitatibus, nostrum repellendus eligendi!
          </p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold mb-4">Company</p>
          <ul className="flex flex-col gap-2 list-none m-0 p-0">
            <li>
              <a href="#Home" className="text-gray-400 hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="text-gray-400 hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#Contact" className="text-gray-400 hover:text-white transition duration-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#Privacy" className="text-gray-400 hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <p className="text-lg font-semibold">Subscribe to our newsletter</p>
          <p className="text-gray-400 text-sm">
            The latest news, articles, and resources, sent <br /> to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-700 pt-4 mt-6">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

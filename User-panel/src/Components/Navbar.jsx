// src/Navbar.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyLogo</h1>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`lg:flex lg:items-center lg:space-x-6 space-y-4 lg:space-y-0 absolute lg:relative bg-gray-800 lg:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : '-top-80'} lg:top-0 left-0 w-full lg:w-auto`}>
          <li>
            <a href="#home" className="text-white hover:bg-gray-600 block px-4 py-2 rounded">Home</a>
          </li>
          <li>
            <a href="#services" className="text-white hover:bg-gray-600 block px-4 py-2 rounded">Services</a>
          </li>
          <li>
            <a href="#about" className="text-white hover:bg-gray-600 block px-4 py-2 rounded">About</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:bg-gray-600 block px-4 py-2 rounded">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

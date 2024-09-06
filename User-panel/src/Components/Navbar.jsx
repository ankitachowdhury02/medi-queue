import React, { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import Signup from './Signup';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl lg:hidden md:hidden">Medi-Queue</a>
        <div className='sm:navbar-center'>
          Emergency Booking
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
      <div className="form-control w-80">
      <input type="text" placeholder="Search" className="input input-bordered w-56 md:w-auto rounded-full" />
    </div>
      </div>
      <div className="navbar-end">
        <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn bg-[#9083D5] text-white"><FaCircleUser />Sign Up</button>
        <Signup/>
      </div>
    </div>
  );
};

export default Navbar;

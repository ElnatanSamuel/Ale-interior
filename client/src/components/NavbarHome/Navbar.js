import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute w-full top-0 left-0  flex justify-between mt-2 items-center z-10">
      <div className="w-full flex justify-between items-center mx-8">
        <div className="">
          <img src="/img/aleLogo.png" className="w-1/2" alt="" />
        </div>

        {/* Mobile menu button on the right */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              // Render 'X' when the menu is open
              <svg class="w-8 h-8"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            ) : (
              // Render the hamburger icon when the menu is closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {/* Desktop menu centered */}
        <div className="navLinks hidden md:flex  justify-between">
          <Link to="/">
            <li className="text-white block mb-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-white block mb-2">About</li>
          </Link>
          <Link to="/services">
            <li className="text-white block mb-2">Portfolio</li>
          </Link>
          <Link to="/blogs">
            <li className="text-white block mb-2">Blog</li>
          </Link>
          <Link to="/contacts">
            <li className="text-white block mb-2">Contact</li>
          </Link>
        </div>
        {/* Mobile menu items centered within the navbar */}
       

{/* Mobile menu items centered within the navbar */}
{isMobileMenuOpen && (
  <div className="moblileNav md:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-full  rounded-md transition-opacity duration-300 flex flex-col justify-evenly items-center">
    <Link to="/">
      <span >Home</span>
    </Link>
    <Link to="/about">
      <span >About</span>
    </Link>
    <Link to="/services">
      <span >Portfolio</span>
    </Link>
    <Link to="/blogs">
      <span >Blog</span>
    </Link>
    <Link to="/contacts">
      <span >Contact</span>
    </Link>
  </div>
)}

      </div>
    </nav>
  );
};

export default NavBar;

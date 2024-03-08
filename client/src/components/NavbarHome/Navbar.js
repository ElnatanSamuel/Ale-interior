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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
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
        <div className="navLinks hidden md:flex space-x-4 justify-between w-1/3">
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
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 bg-white w-full h-screen py-3 my-1 rounded-md  transition-opacity duration-300 opacity-100 shadow-md shadow-bottom flex flex-col items-center">
            <a href="#" className="text-white block mb-2">
              Home
            </a>
            <a href="#" className="text-white block mb-2">
              About
            </a>
            <a href="#" className="text-white block mb-2">
              Blog
            </a>
            <a href="#" className="text-white block mb-2">
              Portfolio
            </a>
            <a href="#" className="text-white block mb-2">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

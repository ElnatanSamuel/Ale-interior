import React from "react";
import "./DIDI.scss";
import { Parallax, Background } from "react-parallax";
import { Link } from "react-router-dom";

const DIDI = () => {
  return (
    <Parallax strength={500} bgImage="/img/aleparallax2.webp">
      <div className="DIDI relative">
        <div className="didibgcover z-1"></div>
        <div className="flex flex-col justify-center items-center z-10 pt-20">
          <h2 className="text-sm md:text-base z-10 text-white font-semibold mb-4">
            {" "}
            YOU DREAM IT, WE DESIGN IT
          </h2>
          <p className="text-xl md:text-3xl lg:text-5xl text-white z-10 font-bold text-center md:w-1/2 mb-12">
            We can build you the house of your dreams
          </p>
          <Link to="/contacts" className="z-10">
            <button className="z-10 font-bold bg-limegreen text-sm md:text-lg py-3 px-5 md:py-4 md:px-8 text-black ">
              Contact us{" "}
              <span className="md:font-bold md:text-2xl">&rarr;</span>
            </button>
          </Link>
        </div>
      </div>
    </Parallax>
  );
};

export default DIDI;

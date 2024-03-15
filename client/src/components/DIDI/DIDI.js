import React from "react";
import "./DIDI.scss";
import { Parallax, Background } from "react-parallax";

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
          <button className="z-10 bg-limegreen text-sm py-3 px-5 md:py-4 md:px-8 text-black font-semibold">
            Contact us <span className="font-bold">&rarr;</span>
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default DIDI;

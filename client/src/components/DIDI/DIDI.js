import React from "react";
import "./DIDI.scss";
import { Parallax, Background } from "react-parallax";

const DIDI = () => {
  return (
    <Parallax strength={500} bgImage="/img/aleparallax2.webp">
      <div className="DIDI relative">
        <div className="didibgcover z-1"></div>
        <div className="flex flex-col justify-center items-center z-10">
          <h2 className=" z-10 text-white font-semibold mb-4">
            {" "}
            YOU DREAM IT, WE DESIGN IT
          </h2>
          <p className="text-xl md:text-5xl text-white z-10 font-bold text-center w-1/2 mb-12">
            We can build you the house of your dreams
          </p>
          <button className="z-10 bg-limegreen text-black font-semibold">
            Contact us <span className="font-bold">&rarr;</span>
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default DIDI;

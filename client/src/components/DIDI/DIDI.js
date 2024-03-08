import React from "react";
import "./DIDI.scss";
import { Parallax, Background } from "react-parallax";

const DIDI = () => {
  return (
    <Parallax strength={500} bgImage="/img/aleparallax2.webp">
      <div className="DIDI relative">
        <div className="didibgcover z-1"></div>
        <div className="flex flex-col justify-center items-center z-10 pt-20">
          <p className=" z-10 text-white font-semibold mb-4">
            {" "}
            YOU DREAM IT, WE DESIGN IT
          </p>
          <p className="text-white z-10 font-bold text-center text-5xl w-1/2 mb-12">
            We can build you the house of your dreams
          </p>
          <button className="py-4 z-10 w-2/12 px-6 bg-limegreen text-black font-semibold">
            Contact us &rarr;
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default DIDI;

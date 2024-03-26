import React from "react";
import "./ParallaxHome.scss";
import { Parallax, Background } from "react-parallax";

const ParallaxHome = () => {
  return (
    <div className="w-full mt-20">
      <Parallax strength={600} bgImage="/img/ale1.jpg">
        <div className="content w-full relative flex flex-col space-y-10 justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-black z-1"></div>
          <p className="text-white text-xl w-3/4 md:text-3xl lg:text-7xl font-semibold z-10 md:w-1/2 m-auto text-center">
            Let's design your dream house
          </p>
          <button className="bg-brownmain text-xs md:text-base px-8 font-semibold py-4 z-10 text-white">
            Contact us
          </button>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxHome;

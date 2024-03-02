import React from "react";
import "./PromoVideo.scss";

const PromoVideo = () => {
  return (
    <div className="promocontainer relative mt-20 flex justify-center">
      <div className="bg-lightgreen absolute h-full w-full top-0 opacity-80 z-1"></div>
      {/* <div className="flex justify-center  z-10">
        <div className="z-10">
          <p className="text-white">PROMO VIDEO</p>
        </div>
        <video className="z-10" width="320" height="240" controls>
          <source src="vid/alevid1.mov" type="video/mp4" />
        </video>
      </div> */}
      <div className="flex flex-col items-center space-x-10 max-w-7xl m-auto md:flex-row">
        <div className="aboutusdesc mt-20 w-1/2 flex flex-col space-y-4">
          <h1 className="text-sm text-white z-10">PROMO VIDEO</h1>
          <p className="aboutmaintitle text-white opacity-80 font-bold z-10">
            Ensuring a safe experience from design to installation
          </p>
          <p className="leading-8 text-sm z-10 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            libero eos velit, in dicta dolor voluptates ullam. Cumque commodi
            molestiae quas officia eligendi voluptatum ab. Quos a, excepturi
            libero quidem odit asperiores dolore aut ea nostrum incidunt. Beatae
          </p>
          {/* <button className="py-4 w-1/2 px-6 bg-darkgreen text-white z-10">
            Continue Reading &rarr;
          </button> */}
        </div>
        <div className="relative h-1/2">
          <video className="z-10" width="100" height="100" controls>
            <source src="vid/alevid1.mov" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default PromoVideo;

import React from "react";
import "./AboutUS.scss";

const About = () => {
  return (
    <div className="lg:py-14 lg:max-w-7xl lg:m-auto">
      <div className="HomeAboutUs pt-10 flex flex-col item-center md:flex-row">
        <div className="w-full relative">
          <img
            src="https://media.istockphoto.com/id/1458854866/photo/modern-living-room-interior-with-television-set-sofa-armchair-floor-lamp-and-coffee-table.webp?b=1&s=170667a&w=0&k=20&c=Wq67ioSfGmFoNYHWDwolSW8ZDcSpc9GptfPFfh1pz1s="
            alt=""
            className="abouthomeimg1 w-full lg:w-5/6"
          />
          <img
            src="/img/ale1.jpg"
            alt=""
            className="abouthomeimg2 w-full lg:w-5/6 lg:absolute lg:top-20 lg:left-20 lg:z-1"
          />
        </div>
        <div className="aboutusdesc mt-16 md:mt-24 lg:mt-20 flex flex-col md:space-y-4 lg:w-1/2">
          <h1 className="text-base text-brownmain md:text-base">ABOUT US</h1>
          <p className="aboutmaintitle opacity-80 font-bold">
            Creative solutions by professional designers
          </p>
          <p className="leading-8 text-justify pt-2 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            libero eos velit, in dicta dolor voluptates ullam. Cumque commodi
            molestiae quas officia eligendi voluptatum ab. Quos a, excepturi
            libero quidem odit asperiores dolore aut ea nostrum incidunt. Beatae
          </p>
          <button className="bg-brownmain text-white text-xs px-6 py-4 mt-6 md:w-1/3 md:text-base">
            Continue Reading &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

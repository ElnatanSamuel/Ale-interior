import React from "react";
import AboutMVV from "../AboutUsMVV/AboutMVV";
import "./AboutPageUI.scss";
import NavBar from "../NavbarHome/Navbar";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
import PremiumQuality from "../PremiumQuality/PremiumQuality";
import DIDI from "../DIDI/DIDI";

const AboutPageUI = () => {
  return (
    <div className="AboutMain2">
      <div className="aboutcontainerhero relative">
        <NavBar />
        <div className="textOnPicture">
          <div className="textOnPicture w-full h-full bg-black z-1 absolute top-0 opacity-50"></div>
          <h1 className="aboutherotext">
            Transforming spaces into dreams, where every corner tells a story of
            elegance and comfort. Welcome to a world where design meets emotion
          </h1>
        </div>
      </div>
      <div className="aboutPageUI2 max-w-7xl m-auto">
        <div className="AboutText2 flex">
          <div className="abouttext2left w-full">
            <h1 className="text-base text-center lg:text-left lg:text-lg text-green-800">
              ABOUT US
            </h1>
            <p className="aboutmaintitle2 opacity-80 font-medium">
              Creative solutions by professional designers
            </p>
          </div>
          <div className="abouttext2right w-full">
            <p className="text-gray-600  text-sm md:text-md">
              This is a sample React component with an image and some paragraph
              text. You can customize it further based on your requirements.
              This is a sample React component with an image and some paragraph
              text.
            </p>
            <p className="text-gray-600 pt-6 text-sm md:text-md">
              This is a sample React component with an image and some paragraph
              text. You can customize it further based on your requirements.
              This is a sample React component with an image and some paragraph
              text. You can customize it further based on your requirements.
              This is a sample React component with an image and some paragraph
              text. You can customize it further based on your requirements.
              This is a sample React component with an image and some paragraph
              text. You can customize it further based on your requirements.
            </p>
          </div>
        </div>
        {/* <div className="AboutImg2">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
            alt="Sample"
            className="h-screen object-cover"
          />
        </div> */}
      </div>
      <WhatWeOffer />
      <AboutMVV />
      <PremiumQuality />
      <DIDI />
    </div>
  );
};

export default AboutPageUI;

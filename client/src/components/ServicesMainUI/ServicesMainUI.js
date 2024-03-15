import React from "react";
import "./ServicesMainUI.scss";
import NavBar from "../NavbarHome/Navbar";
import DIDI from "../DIDI/DIDI";

const ServicesMainUI = () => {
  return (
    <div className="serviesmain">
      <div className="servicescontainerhero relative">
        <NavBar />
        <div className="w-full h-full bg-black z-1 absolute top-0 opacity-50"></div>
        <h1 className="servicesherotext">
          Elevate your surroundings with a touch of brilliance. Where style
          meets soul, discover the artistry of interiors that resonate with your
          essence
        </h1>
      </div>

      <div className="servicesmainlist lg:px-10 pt-20 pb-32">
        <div className="flex flex-col">
          <p className="text-sm text-center lg:text-left md:text-lg text-brownmain ">
            OUR PORTFOLIO
          </p>
          <p className="text-lg  md:text-2xl lg:text-4xl text-center lg:text-left font-semibold pt-6 opacity-90 text-black lg:w-1/2">
            Our projects are examples of attitudes rather than designs.
          </p>
        </div>
        {/*stop sign*/}
        <div className="flex flex-col lg:flex-row md:items-center pt-16 lg:pt-32 px-4 lg:px-0 lg:space-x-16">
          <img
            src="https://w0.peakpx.com/wallpaper/270/10/HD-wallpaper-modern-interior-of-a-country-house-stylish-interior-design-light-interior-wooden-ceiling.jpg"
            alt=""
            className="servicesmainimg w-full"
          />
          <div className="servicesmaindesc flex flex-col">
            <p className="text-black font-semibold pt-4 lg:pt-0 text-xl lg:text-3xl">
              Project 1
            </p>
            <p className="pt-2 text-xs lg:text-base opacity-60">July 2018</p>
            <p className="pt-4 lg:pt-10 text-sm lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </p>
            <p className="pt-4 lg:pt-10 text-brownmain cursor-pointer">
              Read More &rarr;
            </p>
          </div>
        </div>
        {/*stop sign*/}
        <div className="flex flex-col-reverse lg:flex-row md:items-center pt-16 lg:pt-32 px-4 lg:px-0 lg:space-x-16">
          <div className="servicesmaindesc flex flex-col lg:items-end">
            <p className="text-black font-semibold pt-4 lg:pt-0 text-xl lg:text-3xl">
              Project 2
            </p>
            <p className="pt-2 text-xs lg:text-base opacity-60">July 2018</p>
            <p className="pt-4 lg:pt-10 text-sm lg:w-2/3 lg:text-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </p>
            <p className="pt-4 lg:pt-10 text-brownmain cursor-pointer">
              Read More &rarr;
            </p>
          </div>
          <img
            src="https://free4kwallpapers.com/uploads/originals/2015/09/11/office-interior-design-ideas.jpg"
            alt=""
            className="servicesmainimg w-full"
          />
        </div>
        {/*stop sign*/}
        <div className="flex flex-col lg:flex-row md:items-center pt-16 lg:pt-32 px-4 lg:px-0 lg:space-x-16">
          <img
            src="https://w0.peakpx.com/wallpaper/270/10/HD-wallpaper-modern-interior-of-a-country-house-stylish-interior-design-light-interior-wooden-ceiling.jpg"
            alt=""
            className="servicesmainimg w-full"
          />
          <div className="servicesmaindesc flex flex-col">
            <p className="text-black font-semibold pt-4 lg:pt-0 text-xl lg:text-3xl">
              Project 1
            </p>
            <p className="pt-2 text-xs lg:text-base opacity-60">July 2018</p>
            <p className="pt-4 lg:pt-10 text-sm lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </p>
            <p className="pt-4 lg:pt-10 text-brownmain cursor-pointer">
              Read More &rarr;
            </p>
          </div>
        </div>
        {/*stop sign*/}
        <div className="flex flex-col-reverse lg:flex-row md:items-center pt-16 lg:pt-32 px-4 lg:px-0 lg:space-x-16">
          <div className="servicesmaindesc flex flex-col lg:items-end">
            <p className="text-black font-semibold pt-4 lg:pt-0 text-xl lg:text-3xl">
              Project 2
            </p>
            <p className="pt-2 text-xs lg:text-base opacity-60">July 2018</p>
            <p className="pt-4 lg:pt-10 text-sm lg:w-2/3 lg:text-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </p>
            <p className="pt-4 lg:pt-10 text-brownmain cursor-pointer">
              Read More &rarr;
            </p>
          </div>
          <img
            src="https://free4kwallpapers.com/uploads/originals/2015/09/11/office-interior-design-ideas.jpg"
            alt=""
            className="servicesmainimg w-full"
          />
        </div>
      </div>
      <DIDI />
    </div>
  );
};

export default ServicesMainUI;

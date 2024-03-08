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

      <div className="servicesmainlist px-10 pt-20 pb-32">
        <div className="flex flex-col">
          <p className=" text-lg text-brownmain ">OUR PORTFOLIO</p>
          <p className="text-4xl  font-semibold pt-6 opacity-90 text-black w-1/2">
            Our projects are examples of attitudes rather than designs.
          </p>
        </div>
        {/*stop sign*/}
        <div className="flex items-center pt-32 space-x-16">
          <img
            src="https://w0.peakpx.com/wallpaper/270/10/HD-wallpaper-modern-interior-of-a-country-house-stylish-interior-design-light-interior-wooden-ceiling.jpg"
            alt=""
            className="servicesmainimg w-full"
          />
          <div className="servicesmaindesc flex flex-col">
            <p className="text-black font-semibold text-3xl ">Project 1</p>
            <p className="pt-2 opacity-60">July 2018</p>
            <p className="pt-10 text-sm w-2/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </p>
            <p className="pt-10 text-brownmain cursor-pointer">
              Read More &rarr;
            </p>
          </div>
        </div>
        {/*stop sign*/}
        <div className="flex items-center pt-32 space-x-16">
          <div className="servicesmaindesc flex flex-col items-end">
            <p className="text-black font-semibold text-3xl ">Project 2</p>
            <p className="pt-2 opacity-60">July 2018</p>
            <p className="pt-10 text-sm w-2/3 text-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </p>
            <p className="pt-10 text-brownmain cursor-pointer">
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
        <div className="flex items-center pt-32 space-x-16">
          <img
            src="https://besthqwallpapers.com/Uploads/26-6-2022/201364/thumb2-4k-stylish-apartment-interior-design-modern-style-living-room-kitchen.jpg"
            alt=""
            className="servicesmainimg w-full"
          />
          <div className="servicesmaindesc flex flex-col">
            <p className="text-black font-semibold text-3xl ">Project 3</p>
            <p className="pt-2 opacity-60">July 2018</p>
            <p className="pt-10 text-sm w-2/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </p>
            <p className="pt-10 text-brownmain cursor-pointer">
              Read More &rarr;
            </p>
          </div>
        </div>
        {/*stop sign*/}
        <div className="flex items-center pt-32 space-x-16">
          <div className="servicesmaindesc flex flex-col items-end">
            <p className="text-black font-semibold text-3xl ">Project 4</p>
            <p className="pt-2 opacity-60">July 2018</p>
            <p className="pt-10 text-sm w-2/3 text-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </p>
            <p className="pt-10 text-brownmain cursor-pointer">
              Read More &rarr;
            </p>
          </div>
          <img
            src="https://free4kwallpapers.com/uploads/originals/2015/07/25/living-room-interior-design.jpg"
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

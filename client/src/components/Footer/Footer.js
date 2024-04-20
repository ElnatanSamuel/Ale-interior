import React from "react";
import "./Footer.scss";
import useState from "react";

// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footercontainer w-full ">
      <div className="mainfootercontainer px-4 max-w-7xl m-auto h-full flex flex-col md:flex-row  justify-center md:justify-between items-center">
        <div className="col flex justify-center items-center md:block">
          <img src="/img/aleLogo.png" alt="" className="w-2/3 md:w-3/5" />
        </div>

        <div className=" flex flex-col space-y-8 text-offwhite">
          <h1 className="middetail uppercase font-bold text-xs md:text-base lg:text-lg">
            Contact Details
          </h1>
          <div className="h-1 w-8  bg-white"></div>
          <div className="contactlist">
            <ul>
              <li className="text-xs md:text-base text-white cursor-pointer">
                Email:{" "}
                <span className="text-xs md:text-base text-limegreen">
                  aleinteriordesign940@gmail.com
                </span>
              </li>
              <li className="text-xs md:text-base text-white">
                Phone:{" "}
                <span className="text-sm md:text-base text-limegreen">
                  +251 937888866
                </span>
              </li>
              <li className="text-xs md:text-base text-white">
                Address:{" "}
                <span className="text-xs md:text-base text-limegreen">
                  Addis Ababa, Ethio China St
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black p-4  mb-4">
        <p className="text-center text-xs md:text-base text-white">
          {" "}
          &#9400; {year} Ale Interiors. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

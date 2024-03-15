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
    <div className="footercontainer w-full">
      <div className="mainfootercontainer max-w-7xl m-auto h-full flex justify-between items-center">
        <div className="col">
          <img src="/img/aleLogo.png" alt="" className="md:w-3/5" />
        </div>

        <div className=" flex flex-col space-y-8 text-offwhite">
          <h1 className="middetail uppercase font-bold text-sm md:text-base lg:text-lg">
            Contact Details
          </h1>
          <div className="h-1 w-8  bg-white"></div>
          <div className="contactlist">
            <ul>
              <li className="text-sm lg:text-base text-white cursor-pointer">
                Email:{" "}
                <span className="text-sm lg:text-base text-limegreen">
                  blahblah@gmail.com
                </span>
              </li>
              <li className="text-sm lg:text-base text-white">
                Phone:{" "}
                <span className="text-sm lg:text-base text-limegreen">
                  1234536778
                </span>
              </li>
              <li className="text-sm lg:text-base text-white">
                Address:{" "}
                <span className="text-sm lg:text-base text-limegreen">
                  someplace
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 mb-4">
        <p className="text-center text-xs md:text-base text-white">
          {" "}
          &#9400; {year} Ale Interiors. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

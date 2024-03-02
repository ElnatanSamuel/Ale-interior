import React from "react";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="footercontainer w-full">
      <div className="mainfootercontainer max-w-7xl m-auto h-full flex justify-between items-center">
        <div className="col">
          <img src="/img/aleLogo.png" alt="" className="w-4/5" />
        </div>
        <div className="col flex flex-col space-y-8 text-offwhite">
          <h1 className="middetail uppercase font-bold text-lg">
            Contact Details
          </h1>
          <div className="h-1 w-8 bg-white"></div>
          <div className="contactlist">
            <ul>
              <li className="text-base text-white cursor-pointer">
                Email:{" "}
                <span className="text-base text-limegreen">
                  blahblah@gmail.com
                </span>
              </li>
              <li className="text-base text-white">
                Phone:{" "}
                <span className="text-base text-limegreen">1234536778</span>
              </li>
              <li className="text-base text-white">
                Address:{" "}
                <span className="text-base text-limegreen">someplace</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col flex flex-col space-y-6">
          <h1 className="rightfollow uppercase text-offwhite font-bold text-lg">
            Follow Us
          </h1>
          <div className="h-1 w-8 bg-white"></div>
          <div className="icons flex items-center space-x-8">
            <InstagramIcon
              className="text-offwhite"
              style={{ fontSize: "2rem" }}
            />
            <FacebookIcon
              className="text-offwhite"
              style={{ fontSize: "2rem" }}
            />
            <YouTubeIcon
              className="text-offwhite"
              style={{ fontSize: "2rem" }}
            />
            <PinterestIcon
              className="text-offwhite"
              style={{ fontSize: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

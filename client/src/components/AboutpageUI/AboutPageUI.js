import React from "react";
import AboutMVV from "../AboutUsMVV/AboutMVV";
import "./AboutPageUI.scss";

const AboutPageUI = () => {
  return (
    <div className="AboutMain max-w-7xl m-auto">
      <div className="flex justify-center items-center">
        {/* Left Div */}
        <div className=" Line w-1/4 h-1">{/* Content for the left div */}</div>

        {/* Middle Div with h1 */}
        <div className="w-1/2 titleBox p-1">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
        </div>

        {/* Right Div */}
        <div className="w-1/4 Line h-1">{/* Content for the right div */}</div>
      </div>

      <div className="aboutPageUI pt-8">
        <div className="AboutImg w-full">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
            alt="Sample"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="AboutText">
          <p className="text-gray-600 text-md md:text-lg">
            This is a sample React component with an image and some paragraph
            text. You can customize it further based on your requirements. This
            is a sample React component with an image and some paragraph text.
            You can customize it further based on your requirements. This is a
            sample React component with an image and some paragraph text. You
            can customize it further based on your requirements. This is a
            sample React component with an image and some paragraph text. You
            can customize it further based on your requirements.
          </p>
        </div>
        <div></div>
      </div>
      <AboutMVV />
    </div>
  );
};

export default AboutPageUI;

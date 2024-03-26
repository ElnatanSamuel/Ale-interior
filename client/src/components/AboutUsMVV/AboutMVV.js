import React from "react";
import "./AboutMVV.scss";

const AboutMVV = () => {
  return (
    <>
      <div className="pt-20">
        <div className="MVVsocket flex flex-col items-center space-y-8 relative">
          <p className="text-3xl md:text-5xl text-center font-bold text-white">
            What we stand for
          </p>
          <p className="text-white md:text-xl text-center w-full px-4 md:w-1/2">
          We stand for transforming spaces with expertise, creativity, and sustainability, enriching lives through inspired design.
          </p>
          <div className="MVV m-auto max-w-7xl flex items-center justify-center">
            <div className="mission">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4f2kSDaKZJvlc_TsEr0X1oB2i-EMdaLLqg&usqp=CAU"
                alt="mission"
              />
              <h2 className="font-bold">Mission</h2>
              <p className="text-sm text-center">
                {" "}
                To passionately redefine interior spaces with expertise, creativity, & sustainability for inspired living environments.   </p>
            </div>{" "}
            <div className="vision">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKLZ1unLmSPTL3DOwG3YITKFYgCy37553fA&usqp=CAU"
                alt="vision"
              />
              <h2 className="font-bold">Vision</h2>
              <p className="text-sm text-center">
                {" "}
                To become  leader in innovative design, seamlessly integrating functionality & aesthetics for remarkable spaces.    </p>
            </div>{" "}
            <div className="value">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmewhH5wIk-HMYcra3zgvMhHvCE2jfvGqCA&usqp=CAU"
                alt="valuen"
              />
              <h2 className="font-bold">Value</h2>
              <p className="text-sm text-center">
                {" "}
                Excellence, creativity, sustainability, integrity, collaboration, client-centricity: Our guiding principles.   </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMVV;

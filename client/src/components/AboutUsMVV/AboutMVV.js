import React from "react";
import "./AboutMVV.scss";

const AboutMVV = () => {
  return (
    <>
      <div className="pt-8">
        <div className="MVV flex items-center justify-center space-x-4">
          <div className="mission">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4f2kSDaKZJvlc_TsEr0X1oB2i-EMdaLLqg&usqp=CAU"
              alt="mission"
            />
            <h2>Mission</h2>
            <p>
              {" "}
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
          </div>{" "}
          <div className="vision">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKLZ1unLmSPTL3DOwG3YITKFYgCy37553fA&usqp=CAU"
              alt="vision"
            />
            <h2>Vision</h2>
            <p>
              {" "}
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
          </div>{" "}
          <div className="value">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmewhH5wIk-HMYcra3zgvMhHvCE2jfvGqCA&usqp=CAU"
              alt="valuen"
            />
            <h2>Value</h2>
            <p>
              {" "}
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMVV;

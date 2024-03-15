import React from "react";
import "./WhatWeOffer.scss";

const WhatWeOffer = () => {
  return (
    <>
      <div className=" offer max-w-7xl m-auto">
        <div className="">
          <h2 className="text-base lg:text-lg text-green-800  text-center">
            WHY CHOOSE US
          </h2>
          <h3 className="text-xl md:text-3xl lg:text-5xl mt-4 font-bold text-center opacity-80 text-black">
            We work to an extremely high <br /> standard of customer
            satisfaction
          </h3>
        </div>
        <div className="OfferCardsMain flex items-center  ">
          <div className="OfferCards p-6 flex flex-col items-center space-y-4">
            <img
              src=" https://media.istockphoto.com/id/1226966972/vector/insurance-hand-icon-risk-coverage-sign-vector.jpg?s=612x612&w=0&k=20&c=kZbtM0rOo5y0pxVzkBJF35IOZZz1UJIwQjBP9JuiIxs="
              alt=""
            />
            <h3 className="text-center text-xl font-bold"> Full Service </h3>
            <p className=" text-center text-sm">
              {" "}
              Our full-service offering covers everything from initial
              consultation to final installation, ensuring your space reflects
              your unique style and vision.
            </p>
          </div>
          <div className="OfferCards p-6 flex flex-col items-center space-y-4">
            <img
              src=" https://media.istockphoto.com/id/1226966972/vector/insurance-hand-icon-risk-coverage-sign-vector.jpg?s=612x612&w=0&k=20&c=kZbtM0rOo5y0pxVzkBJF35IOZZz1UJIwQjBP9JuiIxs="
              alt=""
            />
            <h3 className="text-center text-xl font-bold"> Deliver Value </h3>
            <p className="text-center text-sm">
              At Ale, we believe in delivering unparalleled value to our
              clients. With a dedication to quality craftsmanship and attention
              to detail.
            </p>
          </div>{" "}
          <div className="OfferCards p-6 flex flex-col items-center space-y-4">
            <img
              src=" https://media.istockphoto.com/id/1226966972/vector/insurance-hand-icon-risk-coverage-sign-vector.jpg?s=612x612&w=0&k=20&c=kZbtM0rOo5y0pxVzkBJF35IOZZz1UJIwQjBP9JuiIxs="
              alt=""
            />
            <h3 className="text-center text-xl font-bold"> Partners </h3>
            <p className="  text-center text-sm">
              Throughout all aspects of our business, we deeply value our
              stakeholders as essential partners on our ultimate mission to
              craft stunning designs.
            </p>
          </div>{" "}
          <div className="OfferCards p-6 flex flex-col items-center space-y-4">
            <img
              src=" https://media.istockphoto.com/id/1226966972/vector/insurance-hand-icon-risk-coverage-sign-vector.jpg?s=612x612&w=0&k=20&c=kZbtM0rOo5y0pxVzkBJF35IOZZz1UJIwQjBP9JuiIxs="
              alt=""
            />
            <h3 className="text-center text-xl font-bold"> Integrity </h3>
            <p className=" text-center text-sm">
              With Ale, you can rest assured that your project will be handled
              with the utmost integrity and respect.We value your trust and
              strive to earn it
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhatWeOffer;

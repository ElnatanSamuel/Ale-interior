import React from "react";
import "./ProjectSection.scss";

const ProjectSection = () => {
  return (
    <div className=" md:pt-6 mt-12 md:mt-20 h-full max-w-7xl m-auto px-6">
      <div className="flex flex-col item-center justify-center">
        <h1 className="text-base text-center text-brownmain md:text-lg">
          OUR PROJECT
        </h1>
        <p className="text-3xl mt-4 font-bold text-center opacity-80 text-black md:text-5xl">
          Explore our interior designs
        </p>
        <p className="text-sm mt-6 text-center  m-auto opacity-80 text-black md:w-1/2">
          Explore finished kitchens from some of our customers and see how they
          created their dream kitchen while getting ideas for your own.
        </p>
      </div>
      <div className="projectscontainer pt-16 grid grid-cols-1 space-y-6 lg:space-y-0 lg:grid-cols-2 lg:space-x-6 w-full">
        <div className="col ">
          <div className="projrow2 w-full h-full relative flex justify-center items-end">
            <img
              src="https://www.thespruce.com/thmb/P4hBQtEPZVrrWPdbtXy7-wv9fiE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1161177015-f1de4ba58a6c4f50969d9119d80405a6.jpg"
              alt=""
              className="projectimg w-full absolute top-0 z-0 object-cover"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-40"></div>
            <div className="z-20 py-10 px-4 lg:px-10 lg:py-10 space-y-4">
              <h1 className="font-bold text-xl md:text-2xl lg:text-5xl text-white">
                Some Title
              </h1>
              <p className="text-xs md:text-sm lg:text-base  lg:w-3/4 text-white opacity-80">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate dolorem velit aut labore et laboriosam!
              </p>
              <button className="bg-brownmain text-xs md:text-xs lg:text-base text-white flex items-center justify-center py-3 px-5 md:py-4 md:px-8">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="col flex flex-col md:flex-row lg:flex-col space-y-6 md:space-x-6 md:space-y-0 lg:space-y-6">
          <div className="projrow row relative h-full flex justify-center items-end">
            <img
              src="https://t3.ftcdn.net/jpg/03/73/51/06/360_F_373510690_cQQLplLNbi0l84A7sftZq8dSvdKOGCcj.jpg"
              alt=""
              className="projrowimg w-full absolute top-0 z-0 object-cover"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-40"></div>
            <div className="z-20 py-10 px-4 lg:px-10 lg:py-10 space-y-4">
              <h1 className="font-bold text-xl md:text-2xl lg:text-5xl text-white">
                Some Title
              </h1>
              <p className="text-xs md:text-sm lg:text-base lg:w-3/4 text-white opacity-80">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate dolorem velit aut labore et laboriosam!
              </p>
              <button className="bg-brownmain text-xs md:text-xs lg:text-base text-white flex items-center justify-center py-3 px-5 md:py-4 md:px-8">
                View Details
              </button>
            </div>
          </div>
          <div className="projrow row h-full flex justify-center items-end relative">
            <img
              src="https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg"
              alt=""
              className="projrowimg w-full absolute top-0 z-0 object-cover"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-40"></div>
            <div className="z-20 py-10 px-4 lg:px-10 lg:py-10 space-y-4">
              <h1 className="font-bold text-xl md:text-2xl lg:text-5xl text-white">
                Some Title
              </h1>
              <p className="text-xs md:text-sm lg:text-base lg:w-3/4 text-white opacity-80">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate dolorem velit aut labore et laboriosam!
              </p>
              <button className="bg-brownmain text-xs md:text-xs lg:text-base text-white flex items-center justify-center py-3 px-5 md:py-4 md:px-8">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-green-900 text-center text-sm md:text-lg pt-20 font-bold underline cursor-pointer">
        View All Projects &rarr;
      </p>
    </div>
  );
};

export default ProjectSection;

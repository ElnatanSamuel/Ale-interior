import React from "react";
import "./ProjectSection.scss";

const ProjectSection = () => {
  return (
    <div className=" md:pt-6 mt-12 md:mt-20 h-full max-w-7xl m-auto px-6">
      <div className="flex flex-col item-center justify-center">
        <h1 className="text-lg  text-center text-brownmain">OUR PROJECT</h1>
        <p className="text-5xl mt-4 font-bold text-center opacity-80 text-black">
          Explore our interior designs
        </p>
        <p className="text-sm mt-6 text-center w-1/2 m-auto opacity-80 text-black">
          Explore finished kitchens from some of our customers and see how they
          created their dream kitchen while getting ideas for your own.
        </p>
      </div>
      <div className="projectscontainer pt-16 grid grid-cols-2 space-x-6 w-full">
        <div className="col ">
          <div className="projrow2 w-full h-full relative flex justify-center items-end">
            <img
              src="https://www.thespruce.com/thmb/P4hBQtEPZVrrWPdbtXy7-wv9fiE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1161177015-f1de4ba58a6c4f50969d9119d80405a6.jpg"
              alt=""
              className="projectimg w-full absolute top-0 z-0 object-cover"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-30"></div>
            <div className="z-20 p-10 space-y-4">
              <h1 className="font-bold text-5xl text-white">Some Title</h1>
              <p className="w-3/4 text-white opacity-80">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate dolorem velit aut labore et laboriosam!
              </p>
              <button className="bg-brownmain text-sm text-white flex items-center justify-center py-4 px-8">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="col flex flex-col space-y-6">
          <div className="projrow row relative h-full flex justify-center items-end">
            <img
              src="https://t3.ftcdn.net/jpg/03/73/51/06/360_F_373510690_cQQLplLNbi0l84A7sftZq8dSvdKOGCcj.jpg"
              alt=""
              className="projrowimg w-full absolute top-0 z-0 object-cover"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-30"></div>
            <div className="z-20 p-10 space-y-4">
              <h1 className="font-bold text-4xl text-white">Some Title</h1>
              <p className="w-3/4 text-white opacity-80">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate dolorem velit aut labore et laboriosam!
              </p>
              <button className="bg-brownmain text-sm text-white flex items-center justify-center py-4 px-8">
                View Details
              </button>
            </div>
          </div>
          <div className="projrow row h-full flex justify-center items-end relative">
            <img
              src="https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg"
              alt=""
              className="projrowimg w-full  absolute  top-0 z-0 object-cover"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-30"></div>
            <div className="z-20 p-10 space-y-4">
              <h1 className="font-bold text-4xl text-white">Some Title</h1>
              <p className="w-3/4 text-white opacity-80">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate dolorem velit aut labore et laboriosam!
              </p>
              <button className="bg-brownmain text-sm text-white flex items-center justify-center py-4 px-8">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-green-900 text-center text-lg pt-20 font-bold underline cursor-pointer">
        View All Projects &rarr;
      </p>
    </div>
  );
};

export default ProjectSection;

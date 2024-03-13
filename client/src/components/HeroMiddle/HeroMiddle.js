import "./HeroMid.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavBar from "../NavbarHome/Navbar";
import { motion } from "framer-motion";

const HeroMid = () => {
  return (
    <div className="relative">
      <NavBar />
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoFocus={true}
        emulateTouch={true}
        className="corsel"
      >
        <div className="carouselcontainer flex justify-center items-center w-full h-full">
          <img
            src="https://isdi.in/blog/wp-content/uploads/2021/07/Interior-Material-Combinations.jpg"
            alt=""
            className="carouselimg w-full absolute top-0 left-0 z-0"
          />
          <div className="w-full h-full bg-black z-10 absolute top-0 opacity-50"></div>
          <div className="herodesc z-20 flex flex-col space-y-6 justify-center items-center w-3/4 h-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="text-white text-5xl font-bold text-center leading-10 md:text-7xl"
            >
              Something Big
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-white md:w-1/2 text-xs text-center leading-6 md:text-base md:leading-8"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              doloribus sit numquam reiciendis facilis dolores nam eligendi
              eaque suscipit quisquam?
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.2 }}
              className="bg-green-900 text-xs text-white flex items-center justify-center py-4 px-8 md:text-lg"
            >
              Blah Blah
            </motion.button>
          </div>
        </div>
        <div className="carouselcontainer flex justify-center items-center w-full ">
          <img
            src="https://www.thespruce.com/thmb/P4hBQtEPZVrrWPdbtXy7-wv9fiE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1161177015-f1de4ba58a6c4f50969d9119d80405a6.jpg"
            alt=""
            className="carouselimg w-full h-full absolute top-0 z-0"
          />
          <div className="w-full h-full bg-black z-10 absolute top-0 opacity-40"></div>
          <div className="herodesc z-20 flex flex-col space-y-8 justify-center items-center w-3/4 h-full">
            <h1 className="text-white text-5xl md:text-7xl font-bold text-center leading-10">
              Another Big Thing
            </h1>
            <p className="text-white md:w-1/2 text-base text-center leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              doloribus sit numquam reiciendis facilis dolores nam eligendi
              eaque suscipit quisquam?
            </p>
            <button className="bg-green-900 text-xs text-white flex items-center justify-center py-4 px-8 md:text-lg">
              Blah Blah
            </button>
          </div>
        </div>
        <div className="carouselcontainer flex justify-center items-center w-full ">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
            alt=""
            className="carouselimg w-full h-full absolute top-0 z-0"
          />
          <div className="w-full h-full bg-black z-10 absolute top-0 opacity-40"></div>
          <div className="herodesc z-20 flex flex-col space-y-8 justify-center items-center w-3/4 h-full">
            <h1 className="text-white text-5xl md:text-7xl font-bold text-center leading-10">
              Bigger Than The Last
            </h1>
            <p className="text-white md:w-1/2 text-base text-center leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              doloribus sit numquam reiciendis facilis dolores nam eligendi
              eaque suscipit quisquam?
            </p>
            <button className="bg-green-900 text-xs text-white flex items-center justify-center py-4 px-8 md:text-lg">
              Blah Blah
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroMid;

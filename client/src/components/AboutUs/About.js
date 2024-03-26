import React, { useRef } from "react";
import "./AboutUS.scss";
import { motion } from "framer-motion";

const About = () => {
  const scrollRef = useRef(null);
  return (
    <div className="md:py-14 md:max-w-7xl m-auto">
      <div className="HomeAboutUs pt-10 flex flex-col items-center md:space-x-10 md:flex-row">
        <div className="w-full relative">
          <motion.img
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            src="https://media.istockphoto.com/id/1458854866/photo/modern-living-room-interior-with-television-set-sofa-armchair-floor-lamp-and-coffee-table.webp?b=1&s=170667a&w=0&k=20&c=Wq67ioSfGmFoNYHWDwolSW8ZDcSpc9GptfPFfh1pz1s="
            alt=""
            className="abouthomeimg1 w-5/6"
          />
          <motion.img
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            src="/img/ale1.jpg"
            alt=""
            className="abouthomeimg2 md:absolute md:top-20 md:left-20 md:z-1"
          />
        </div>
        <motion.div
          ref={scrollRef}
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          className="aboutusdesc mt-20 md:w-1/2 flex flex-col md:space-y-4"
        >
          <h1 className="titleHomeAboutUs text-base text-brownmain">ABOUT US</h1>
          <p className="aboutmaintitle opacity-80 font-bold">
            Creative solutions by professional designers
          </p>
          <p className="leading-8 text-justify p-4 text-sm ">
          Founded six years ago in Addis Ababa our firm has been transforming spaces across the city. 
          Our goal has been to guide our clients from concept to creation, ensuring that every ... </p>
          <button className="md:py-4 w-1/2 md:px-6 bg-brownmain text-white">
            Continue Reading &rarr;
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

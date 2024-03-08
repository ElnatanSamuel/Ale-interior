import React, { useRef } from "react";
import "./AboutUS.scss";
import { motion } from "framer-motion";

const About = () => {
  const scrollRef = useRef(null);
  return (
    <div className="py-14 max-w-7xl m-auto">
      <div className="pt-10 flex flex-col items-center space-x-10 md:flex-row">
        <div className="w-full relative">
          <motion.img
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            src="https://media.istockphoto.com/id/1458854866/photo/modern-living-room-interior-with-television-set-sofa-armchair-floor-lamp-and-coffee-table.webp?b=1&s=170667a&w=0&k=20&c=Wq67ioSfGmFoNYHWDwolSW8ZDcSpc9GptfPFfh1pz1s="
            alt=""
            className="abouthomeimg w-5/6"
          />
          <motion.img
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            src="/img/ale1.jpg"
            alt=""
            className="abouthomeimg absolute top-20 left-20 z-1"
          />
        </div>
        <motion.div
          ref={scrollRef}
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          className="aboutusdesc mt-20 w-1/2 flex flex-col space-y-4"
        >
          <h1 className="text-base text-brownmain">ABOUT US</h1>
          <p className="aboutmaintitle opacity-80 font-bold">
            Creative solutions by professional designers
          </p>
          <p className="leading-8 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            libero eos velit, in dicta dolor voluptates ullam. Cumque commodi
            molestiae quas officia eligendi voluptatum ab. Quos a, excepturi
            libero quidem odit asperiores dolore aut ea nostrum incidunt. Beatae
          </p>
          <button className="py-4 w-1/2 px-6 bg-brownmain text-white">
            Continue Reading &rarr;
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

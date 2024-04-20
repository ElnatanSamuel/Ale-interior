import React from "react";
import "./AboutUS.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="lg:py-14 lg:max-w-7xl lg:m-auto">
      <div className="HomeAboutUs pt-10 flex flex-col item-center md:flex-row">
        <div className="w-full relative">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: 0.1 }}
            src="https://media.istockphoto.com/id/1458854866/photo/modern-living-room-interior-with-television-set-sofa-armchair-floor-lamp-and-coffee-table.webp?b=1&s=170667a&w=0&k=20&c=Wq67ioSfGmFoNYHWDwolSW8ZDcSpc9GptfPFfh1pz1s="
            alt=""
            className="abouthomeimg1 w-full lg:w-5/6"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: 0.1 }}
            src="/img/ale1.jpg"
            alt=""
            className="abouthomeimg2 w-full lg:w-5/6 lg:absolute lg:top-20 lg:left-20 lg:z-1"
          />
        </div>
        <motion.div className="aboutusdesc mt-16 md:mt-24 lg:mt-20 flex flex-col md:space-y-4 lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base text-brownmain md:text-base"
          >
            ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="aboutmaintitle opacity-80 font-bold"
          >
            Shaping Dreams into Spaces
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="leading-8 text-justify pt-2 text-sm "
          >
            At Ale interior, we don't just design interiors; we curate
            experiences. With a blend of creativity, precision, and a keen eye
            for detail, we transform ordinary spaces into extraordinary
            sanctuaries. From concept to completion, our team is dedicated to
            bringing your vision to life, crafting environments that reflect
            your personality, style, and aspirations. Let us redefine the way
            you experience your home or workspace. Welcome to a world where
            every room tells a story.
          </motion.p>
          <Link to="/about">
            {" "}
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="bg-brownmain text-white text-xs px-6 py-4 mt-6 md:w-1/3 md:text-base lg:w-1/2"
            >
              Continue Reading &rarr;
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

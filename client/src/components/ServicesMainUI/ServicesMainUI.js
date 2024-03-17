import React from "react";
import "./ServicesMainUI.scss";
import NavBar from "../NavbarHome/Navbar";
import DIDI from "../DIDI/DIDI";
import { motion } from "framer-motion";

const ServicesMainUI = () => {
  return (
    <div className="serviesmain">
      <div className="servicescontainerhero relative">
        <NavBar />
        <div className="w-full h-full bg-black z-1 absolute top-0 opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="servicesherotext"
        >
          Elevate your surroundings with a touch of brilliance. Where style
          meets soul, discover the artistry of interiors that resonate with your
          essence
        </motion.h1>
      </div>

      <div className="servicesmainlist lg:px-10 pt-20 pb-32">
        <div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-center lg:text-left md:text-lg text-brownmain "
          >
            OUR PORTFOLIO
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg  md:text-2xl lg:text-4xl text-center lg:text-left font-semibold pt-6 opacity-90 text-black lg:w-1/2"
          >
            Our projects are examples of attitudes rather than designs.
          </motion.p>
        </div>
        {/*stop sign*/}
        <div className="flex flex-col lg:flex-row md:items-center pt-16 lg:pt-32 px-4 lg:px-0 lg:space-x-16">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            src="/img/ale1.jpg"
            alt=""
            className="servicesmainimg w-full"
          />
          <div className="servicesmaindesc flex flex-col">
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-black font-semibold pt-4 lg:pt-0 text-xl lg:text-3xl"
            >
              Project 1
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-2 text-xs lg:text-base opacity-60"
            >
              July 2018
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-4 lg:pt-10 text-sm lg:w-2/3"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 1.1 }}
              className="pt-4 lg:pt-10 text-brownmain cursor-pointer"
            >
              Read More &rarr;
            </motion.p>
          </div>
        </div>
        {/*stop sign*/}
        <div className="flex flex-col-reverse lg:flex-row md:items-center pt-16 lg:pt-32 px-4 lg:px-0 lg:space-x-16">
          <div className="servicesmaindesc flex flex-col lg:items-end">
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-black font-semibold pt-4 lg:pt-0 text-xl lg:text-3xl"
            >
              Project 2
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-2 text-xs lg:text-base opacity-60"
            >
              July 2018
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-4 lg:pt-10 text-sm lg:w-2/3 lg:text-right"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 1.1 }}
              className="pt-4 lg:pt-10 text-brownmain cursor-pointer"
            >
              Read More &rarr;
            </motion.p>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            src="/img/ale2.jpg"
            alt=""
            className="servicesmainimg w-full"
          />
        </div>

        {/*stop sign*/}
        <div className="flex flex-col lg:flex-row md:items-center pt-16 lg:pt-32 px-4 lg:px-0 lg:space-x-16">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            src="/img/ale3.jpg"
            alt=""
            className="servicesmainimg w-full"
          />
          <div className="servicesmaindesc flex flex-col">
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-black font-semibold pt-4 lg:pt-0 text-xl lg:text-3xl"
            >
              Project 3
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-2 text-xs lg:text-base opacity-60"
            >
              July 2018
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-4 lg:pt-10 text-sm lg:w-2/3"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 1.1 }}
              className="pt-4 lg:pt-10 text-brownmain cursor-pointer"
            >
              Read More &rarr;
            </motion.p>
          </div>
        </div>
        {/*stop sign*/}
        <div className="flex flex-col-reverse lg:flex-row md:items-center pt-16 lg:pt-32 px-4 lg:px-0 lg:space-x-16">
          <div className="servicesmaindesc flex flex-col lg:items-end">
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-black font-semibold pt-4 lg:pt-0 text-xl lg:text-3xl"
            >
              Project 4
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-2 text-xs lg:text-base opacity-60"
            >
              July 2018
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-4 lg:pt-10 text-sm lg:w-2/3 lg:text-right"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam fugit quod ex, animi, quo porro minima debitis ipsa
              nesciunt suscipit eum cumque perferendis in? Maxime, animi modi.
              Aliquam, est sit?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 1.1 }}
              className="pt-4 lg:pt-10 text-brownmain cursor-pointer"
            >
              Read More &rarr;
            </motion.p>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            src="/img/ale4.jpg"
            alt=""
            className="servicesmainimg w-full"
          />
        </div>
      </div>
      <DIDI />
    </div>
  );
};

export default ServicesMainUI;

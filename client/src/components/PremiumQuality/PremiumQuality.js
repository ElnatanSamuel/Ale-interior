import React from "react";
import "./PremiumQuality.scss";
import { motion } from "framer-motion";

const PremiumQuality = () => {
  return (
    <div className="premiumquality max-w-7xl m-auto flex items-center md:space-x-32 pt-12">
      <div className="w-full md:flex-1 relative">
        <img
          src="https://coolwallpapers.me/picsup/3074830-apartment_architecture_chairs_comfort_contemporary_curtain_design_floor_furniture_home_house_indoors_inside_interior_interior-design_lamp_light_living-room_luxury_modern_room_seat_sofa_table_wind.jpg"
          alt=""
          className="premiumimg1"
        />
        <img
          src="https://img.freepik.com/free-photo/minimal-amazing-interior-design_23-2150534604.jpg"
          alt=""
          className="premiumimg2"
        />
      </div>
      <div className="PremiumQualityText w-full md:flex-1 flex flex-col space-y-6">
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="font-bold text-sm md:text-base text-brownmain"
        >
          PREMIUM QUALITY
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-4xl lg:text-6xl font-bold opacity-90"
        >
          Your comfort is our only priority
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm md:w-5/6"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tempore
          dicta voluptas quos doloribus aliquam maxime, debitis voluptatibus
          voluptates dolor.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col space-y-2"
        >
          <p className="opacity-80 text-sm">MON-FRI: 10PM-12PM</p>
          <p className="opacity-80 text-sm">MON-FRI: 10PM-12PM</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className=" bg-brownmain text-white md:w-1/3 py-4 px-8"
        >
          Our services &rarr;
        </motion.button>
      </div>
    </div>
  );
};

export default PremiumQuality;

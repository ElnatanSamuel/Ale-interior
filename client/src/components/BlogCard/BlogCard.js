import React from "react";
import "./BlogCard.scss";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";

const BlogCard = ({ item }) => {
  return (
    <div className="flex flex-col space-y-8">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        src={item.mainImage.asset.url}
        alt=""
        className="blogcardimg w-full  object-cover"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-lg w-full md:text-2xl lg:text-3xl font-bold"
      >
        {item.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="font-bold text-sm lg:text-base opacity-50"
      >
        {item.body?.map((item, index) => (
          <p key={index}>{item.children[0].text}</p>
        ))}
      </motion.p>
      <div className="blogcardlinks flex justify-between items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lightgreen text-sm lg:text-base font-bold"
        >
          Read More &rarr;
        </motion.p>
        <div className="blogcardicons flex space-x-4">
          {/* <InstagramIcon />
          <FacebookIcon /> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

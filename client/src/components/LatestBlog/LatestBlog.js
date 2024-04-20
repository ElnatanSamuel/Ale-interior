import React, { useEffect, useState } from "react";
import "./Latestblog.scss";
import BlogCard from "../BlogCard/BlogCard";
import LatestBlogCard from "./LatestBlogCard";
import { motion } from "framer-motion";
import client from "../../client";

const LatestBlog = () => {
  const [allPostData, setAllPostData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          date,
          publishedAt,
          body,
          mainImage{
            asset->{
              _id,
              url
            },
     
          }
        }`
      )
      .then((data) => setAllPostData(data))
      .catch(console.error);
  }, [allPostData]);
  return (
    <div className="max-w-7xl m-auto flex flex-col items-center mt-12 md:mt-20 space-y-4 mb-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-brownmain text-sm md:text-lg"
      >
        OUR BLOG
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-black opacity-80 text-3xl md:text-5xl font-bold"
      >
        Latest articles
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="laterstBlogs grid grid-cols-1 md:grid-cols-3  gap-4 justify-center pt-4"
      >
        {allPostData?.map((item) => (
          <LatestBlogCard item={item} key={item.slug.current} />
        ))}
      </motion.div>
    </div>
  );
};

export default LatestBlog;

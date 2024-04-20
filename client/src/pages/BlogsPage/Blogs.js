import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import BlogCard from "../../components/BlogCard/BlogCard";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import { motion } from "framer-motion";
import client from "../../client";
import NavBar from "../../components/NavbarHome/Navbar";

const Blogs = () => {
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

    console.log(allPostData);
  }, [allPostData]);
  return (
    <>
      <div className="blogcontainerhero relative">
        <NavBar />
        <div className="textOnPicture">
          <div className="textOnPicture w-full h-full bg-black z-1 absolute top-0 opacity-50"></div>
          <motion.h1
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="aboutherotext"
          >
            Crafting spaces that inspire, captivate, and embrace your unique
            essence. Where every detail tells a tale of beauty and
            sophistication.
          </motion.h1>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-4xl mt-28 font-extrabold text-center"
      >
        Our Blog
      </motion.p>
      <div className="blogpagecontainer max-w-7xl m-auto mt-16">
        <div className="blogcard flex flex-col space-y-16 mb-10">
          {allPostData?.map((item) => (
            <BlogCard item={item} key={item.slug.current} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="recentblog"
        >
          <RecentBlogs postData={allPostData} />
        </motion.div>
      </div>
    </>
  );
};

export default Blogs;

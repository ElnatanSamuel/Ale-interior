import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import BlogCard from "../../components/BlogCard/BlogCard";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import NavBarMain from "../../components/NavbarMain/NavbarMain";
import { motion } from "framer-motion";
import client from "../../client";

const Blogs = () => {
  const [allPostData, setAllPostData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
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
      <NavBarMain />
      <div className="blogpagecontainer max-w-7xl m-auto mt-28">
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
          <RecentBlogs />
        </motion.div>
      </div>
    </>
  );
};

export default Blogs;

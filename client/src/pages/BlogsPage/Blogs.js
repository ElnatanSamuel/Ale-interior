import React from "react";
import "./Blogs.scss";
import BlogCard from "../../components/BlogCard/BlogCard";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import NavBarMain from "../../components/NavbarMain/NavbarMain";

const Blogs = () => {
  const blogs = [1, 2, 3];
  return (
    <>
      <NavBarMain />
      <div className="blogpagecontainer max-w-7xl m-auto mt-10">
        <div className="blogcard flex flex-col space-y-16 mb-10">
          {blogs.map((item) => (
            <BlogCard />
          ))}
        </div>
        <div className="recentblog">
          <RecentBlogs />
        </div>
      </div>
    </>
  );
};

export default Blogs;

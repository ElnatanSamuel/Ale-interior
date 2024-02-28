import React from "react";
import "./Blogs.scss";
import BlogCard from "../../components/BlogCard/BlogCard";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";

const Blogs = () => {
  const blogs = [1, 2, 3];
  return (
    <div className="blogpagecontainer max-w-7xl m-auto">
      <div className="blogcard flex flex-col space-y-16 mb-10">
        {blogs.map((item) => (
          <BlogCard />
        ))}
      </div>
      <div className="recentblog">
        <RecentBlogs />
      </div>
    </div>
  );
};

export default Blogs;

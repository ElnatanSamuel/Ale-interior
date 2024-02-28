import React from "react";
import RecentBlogCards from "../RecentBlogCards/RecentBlogCards";

const RecentBlogs = () => {
  const recent = [1, 2, 3];
  return (
    <div className="p-6 border shadow-lg">
      <h1 className="text-xl font-bold mb-6">Recent Posts</h1>
      <div className="recentpostcard flex flex-col space-y-6">
        {recent.map((item) => (
          <RecentBlogCards />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;

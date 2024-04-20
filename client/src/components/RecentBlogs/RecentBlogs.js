import React from "react";
import RecentBlogCards from "../RecentBlogCards/RecentBlogCards";

const RecentBlogs = ({ postData }) => {
  return (
    <div className="p-6 border shadow-lg">
      <h1 className="text-xl font-bold mb-6">Recent Posts</h1>
      <div className="recentpostcard flex flex-col space-y-6">
        {postData?.slice(0, 3).map((item) => (
          <RecentBlogCards item={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;

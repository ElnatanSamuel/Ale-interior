import React from "react";

const RecentBlogCards = () => {
  return (
    <div className="flex space-x-4">
      <img
        src="https://isdi.in/blog/wp-content/uploads/2021/07/Interior-Material-Combinations.jpg"
        alt=""
        className="w-32 h-20 object-cover"
      />
      <div className="recentdetail  flex flex-col space-y-2">
        <p className="font-bold">She is known for playing</p>
        <p className="font-bold opacity-40">30 Mar, 2020</p>
      </div>
    </div>
  );
};

export default RecentBlogCards;

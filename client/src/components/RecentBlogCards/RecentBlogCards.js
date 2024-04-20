import React from "react";

const RecentBlogCards = ({ item }) => {
  return (
    <div className="flex space-x-4">
      <img
        src={item.mainImage.asset.url}
        alt=""
        className="w-32 h-20 object-cover"
      />
      <div className="recentdetail  flex flex-col space-y-2">
        <p className="font-bold"> {item.title}</p>
        <p className="font-bold opacity-40">{item.publishedAt.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default RecentBlogCards;

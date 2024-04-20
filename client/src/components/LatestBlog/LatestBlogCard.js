import React from "react";
import "./Latestblog.scss";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";

const LatestBlogCard = ({ item }) => {
  return (
    <div className="flex flex-col space-y-4">
      <img
        src={item.mainImage.asset.url}
        className="blogcardimg w-full object-cover"
        alt=""
      />
      <h1 className="text-base  lg:text-3xl font-bold opacity-80">
        {item.title}
      </h1>
      <p className="font-bold opacity-50 text-xs lg:text-sm">
        {item.body?.map((item, index) => (
          <p key={index}>{item.children[0].text}</p>
        ))}
      </p>
      <div className="blogcardlinks flex justify-between items-center">
        <p className="text-lightgreen pb-4 text-sm lg:text-base font-bold">
          Read More &rarr;
        </p>
        {/* <div className="blogcardicons flex space-x-4">
          <InstagramIcon />
          <FacebookIcon />
        </div> */}
      </div>
    </div>
  );
};

export default LatestBlogCard;

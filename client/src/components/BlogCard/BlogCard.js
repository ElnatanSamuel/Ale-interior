import React from "react";
import "./BlogCard.scss";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";

const BlogCard = () => {
  return (
    <div className="flex flex-col space-y-8">
      <img
        src="https://isdi.in/blog/wp-content/uploads/2021/07/Interior-Material-Combinations.jpg"
        alt=""
        className="blogcardimg w-full object-cover"
      />
      <h1 className="text-lg w-full md:text-2xl lg:text-3xl font-bold">
        How to start a successful photography business
      </h1>
      <p className="font-bold text-sm lg:text-base opacity-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        hic vitae? Quibusdam et eius, ea omnis hic iusto exercitationem
        mollitia.
      </p>
      <div className="blogcardlinks flex justify-between items-center">
        <p className="text-lightgreen text-sm lg:text-base font-bold">
          Read More &rarr;
        </p>
        <div className="blogcardicons flex space-x-4">
          {/* <InstagramIcon />
          <FacebookIcon /> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

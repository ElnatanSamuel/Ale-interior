import React from "react";
import "./Latestblog.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const LatestBlogCard = () => {
  return (
    <div className="flex flex-col space-y-4">
      <img
        src="https://www.thespruce.com/thmb/P4hBQtEPZVrrWPdbtXy7-wv9fiE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1161177015-f1de4ba58a6c4f50969d9119d80405a6.jpg"
        alt=""
        className="blogcardimg w-full object-cover"
      />
      <h1 className="text-3xl font-bold opacity-80">
        How to start a successful photography business
      </h1>
      <p className="font-bold opacity-50 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        hic vitae? Quibusdam et eius, ea omnis hic iusto exercitationem
        mollitia.
      </p>
      <div className="blogcardlinks flex justify-between items-center">
        <p className="text-lightgreen font-bold">Read More &rarr;</p>
        {/* <div className="blogcardicons flex space-x-4">
          <InstagramIcon />
          <FacebookIcon />
        </div> */}
      </div>
    </div>
  );
};

export default LatestBlogCard;

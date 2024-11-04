import React from "react";

import BannerImage from "/images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-gadget-100 h-fit pb-40 relative rounded-b-xl -mt-2">
      <div className="hero-content text-center text-white">
        <div className="max-w-[1120px] flex flex-col items-center space-y-4">
          <h1 className="text-3xl md:text-[40px] lg:text-[56px] font-bold leading-[40px] md:leading-[50px] lg:leading-[72px]">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="max-w-[796px] leading-[26px]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to={"/dashboard"} className="btn bg-white text-gadget-100">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="absolute mx-auto -bottom-[150px] max-w-[800px] h-[300px] rounded-xl p-1 outline outline-2 outline-offset-2 outline-base-200">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={BannerImage}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;

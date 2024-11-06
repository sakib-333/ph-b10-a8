import React from "react";

import BannerImage from "/images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <div className="bg-gadget-100 h-fit pb-4 md:pb-40 rounded-b-xl -mt-2">
        <div className="text-center text-white">
          <div className="max-w-[1120px] mx-auto flex flex-col items-center space-y-4">
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
      </div>
      <div className="md:absolute w-full  my-4 md:mt-0 md:w-1/2 md:h-2/3 p-1 rounded-xl md:inset-0 md:translate-y-[350px] mx-auto outline outline-2 outline-offset-2 outline-base-200">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={BannerImage}
          alt="banner-image"
        />
        {/* <h1>Hello</h1> */}
      </div>
    </div>
  );
};

export default Banner;

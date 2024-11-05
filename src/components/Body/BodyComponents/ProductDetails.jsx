import React, { useEffect } from "react";

import GoldenStarIcon from "/icons/golden-star-icon.svg";
import StarIcon from "/icons/star-icon.svg";
import CartWhiteIcon from "/icons/cart-white-icon.svg";
import HeartIcon from "/icons/heart-icon.svg";

const ProductDetails = () => {
  useEffect(() => {
    document.title = "Product Details";
  }, []);
  return (
    <div className="bg-gadget-100 w-full relative">
      <div className="text-white mx-auto text-center max-w-[790px] pt-4 pb-40">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Product Details
        </h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="flex flex-col p-4 lg:p-0 md:flex-row items-center lg:absolute lg:mx-auto lg:-bottom-[290px] right-0 left-0 max-w-screen-lg w-full bg-white lg:rounded-xl overflow-hidden">
        <div className="w-[300px]">
          <img
            className="w-full object-cover"
            src="https://i.postimg.cc/zvZy4CvW/canon-1.jpg"
            alt=""
          />
        </div>
        <div className="py-4 space-y-3">
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            Samsung Galaxy S23 Ultra
          </h1>
          <p>Price: $ 999.99</p>
          <p className={`rounded-2xl w-fit px-3 bg-green-200`}>In Stock</p>
          <p>
            Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
            display.
          </p>
          <div className="text-gray-500">
            <strong className="text-black">Specification:</strong>
            <p className="text-sm">Intel i7 11th Gen</p>
            <p className="text-sm">16GB RAM</p>
            <p className="text-sm">512GB SSD</p>
            <p className="text-sm">Touchscreen</p>
          </div>
          <div>
            <strong>Rating</strong>
            <div className="flex items-center space-x-1">
              <img className="w-3" src={GoldenStarIcon} alt="" />
              <img className="w-3" src={GoldenStarIcon} alt="" />
              <img className="w-3" src={GoldenStarIcon} alt="" />
              <img className="w-3" src={StarIcon} alt="" />
              <p className="text-xs p-2 rounded-full bg-slate-200">4.8</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-gadget-100 hover:opacity-50 text-white rounded-2xl">
              <span>Add To Card</span>
              <img src={CartWhiteIcon} alt="cart-icon" />
            </button>
            <button className="relative w-10 h-10 bg-white flex items-center justify-center rounded-full border hover:bg-slate-200">
              <img src={HeartIcon} alt="heart-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

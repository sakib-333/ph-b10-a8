import React, { useContext, useEffect } from "react";

import GoldenStarIcon from "/icons/golden-star-icon.svg";
import StarIcon from "/icons/star-icon.svg";
import CartWhiteIcon from "/icons/cart-white-icon.svg";
import HeartIcon from "/icons/heart-icon.svg";
import { useLoaderData } from "react-router-dom";
import { GadgetHavenContext } from "../../context/GadgetHavenContext";
import { AddToCart } from "../../Utilities/AddToCart";
import { AddToWishList } from "../../Utilities/AddToWishList";

const ProductDetails = () => {
  const { cart, setCart, wishlist, setWishlist, setTotalPrice } =
    useContext(GadgetHavenContext);
  const selectedGadget = useLoaderData();

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
      <div className="flex flex-col p-4 lg:space-x-3 lg:p-0 md:flex-row items-center lg:absolute lg:mx-auto lg:-bottom-[290px] right-0 left-0 max-w-screen-lg w-full bg-white lg:rounded-xl overflow-hidden">
        <div className="w-[300px]">
          <img
            className="w-full object-cover"
            src={selectedGadget.product_image}
            alt={selectedGadget.product_title}
          />
        </div>
        <div className="py-4 space-y-3">
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            {selectedGadget.product_title}
          </h1>
          <p>Price: $ {selectedGadget.price}</p>
          <p
            className={`rounded-2xl w-fit px-3 ${
              selectedGadget.availability ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {selectedGadget.availability ? "In Stock" : "Out of Stock"}
          </p>
          <p>{selectedGadget.description}</p>
          <div className="text-gray-500">
            <strong className="text-black">Specification:</strong>
            {selectedGadget.Specification.map((feature, indx) => (
              <p key={`feature_${indx}`} className="text-sm">
                {indx + 1}. {feature}
              </p>
            ))}
          </div>
          <div>
            <strong className="flex items-center">
              Rating
              <img className="w-3" src={GoldenStarIcon} alt="golden-star" />
            </strong>
            <div className="flex items-center space-x-1">
              <img className="w-3" src={GoldenStarIcon} alt="golden-star" />
              <img className="w-3" src={GoldenStarIcon} alt="golden-star" />
              <img className="w-3" src={GoldenStarIcon} alt="golden-star" />
              <img className="w-3" src={GoldenStarIcon} alt="golden-star" />
              <img className="w-3" src={StarIcon} alt="" />
              <p className="text-xs p-2 rounded-full bg-slate-200">
                {selectedGadget.rating}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                AddToCart(
                  setCart,
                  selectedGadget.product_id,
                  setTotalPrice,
                  Number(selectedGadget.price)
                )
              }
              className="flex items-center px-4 py-2 bg-gadget-100 hover:opacity-50 text-white rounded-2xl"
            >
              <span>Add To Card</span>
              <img src={CartWhiteIcon} alt="cart-icon" />
            </button>
            <button
              className={`relative w-10 h-10 bg-white flex items-center justify-center rounded-full border ${
                wishlist.includes(selectedGadget.product_id)
                  ? ""
                  : "hover:bg-slate-200"
              }`}
              onClick={() =>
                AddToWishList(wishlist, setWishlist, selectedGadget.product_id)
              }
              disabled={wishlist.includes(selectedGadget.product_id)}
            >
              <img src={HeartIcon} alt="heart-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

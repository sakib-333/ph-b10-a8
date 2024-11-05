import React from "react";
import CancelIcon from "/icons/cancel-icon.svg";

const Wishlist = () => {
  return (
    <div className="my-5 p-3">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">WishList</h1>
      </div>
      <div className="my-4">
        <div className="bg-white px-4 flex items-center justify-between rounded-xl overflow-hidden">
          <div className="w-full flex items-center">
            <img
              className="w-40 h-40"
              src="https://i.postimg.cc/3xVYLKd0/earphone-1.jpg"
              alt=""
            />
            <div className=" flex flex-col">
              <h1 className="text-xl font-bold">Samsung Galaxy S23 Ultra</h1>
              <p className="text-gray-500">
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <strong>Price: $ 999.99</strong>
              <button className="bg-gadget-100 w-fit px-4 py-1 rounded-full text-white hover:opacity-50">
                Add to Card
              </button>
            </div>
          </div>
          <button className="hover:opacity-50">
            <img src={CancelIcon} alt="cancel icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

import React from "react";
import SortIcon from "/icons/sort-icon.svg";
import CancelIcon from "/icons/cancel-icon.svg";

const Cart = () => {
  return (
    <div className="my-5 p-3">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="font-bold">Cart</h1>
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
          <h1 className="font-bold">Total cost: 999.99</h1>
          <button className="flex items-center border border-gadget-100 px-4 py-1 rounded-full font-bold text-gadget-100 hover:opacity-50">
            <span>Sort by Price</span> <img src={SortIcon} alt="sort" />
          </button>
          <button className="flex items-center bg-gadget-100 px-4 py-1 rounded-full font-bold text-white hover:opacity-50">
            Purchase
          </button>
        </div>
      </div>
      <div className="my-4">
        <div className="bg-white px-4 flex flex-col md:flex-row items-center justify-between rounded-xl overflow-hidden">
          <div className="w-full flex flex-col md:flex-row items-center">
            <img
              className="w-40 h-40"
              src="https://i.postimg.cc/wjGTSXbv/asus-1.jpg"
              alt=""
            />
            <div>
              <h1 className="text-xl font-bold">Samsung Galaxy S23 Ultra</h1>
              <p className="text-gray-500">
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <strong>Price: $ 999.99</strong>
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

export default Cart;

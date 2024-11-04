import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const Dashboard = () => {
  const [tabCart, setTabCart] = useState(true);
  const [tabWishlist, setTabWishlist] = useState(false);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const handleTabCart = () => {
    setTabCart(true);
    setTabWishlist(false);
  };
  const handleTabWishlist = () => {
    setTabCart(false);
    setTabWishlist(true);
  };

  return (
    <>
      <div className="bg-gadget-100 w-full">
        <div className="max-w-[790px] mx-auto text-white text-center py-4 space-y-3">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Dashboard
          </h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="space-x-3">
            <button
              onClick={handleTabCart}
              className={`px-5 py-1 rounded-full border ${
                tabCart && "bg-white text-gadget-100 font-bold"
              }`}
            >
              Cart
            </button>
            <button
              onClick={handleTabWishlist}
              className={`px-5 py-1 rounded-full border ${
                tabWishlist && "bg-white text-gadget-100 font-bold"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      {tabCart && <Cart />}
    </>
  );
};

export default Dashboard;

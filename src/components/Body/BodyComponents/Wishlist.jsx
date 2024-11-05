import React, { useContext } from "react";
import CancelIcon from "/icons/cancel-icon.svg";
import { GadgetHavenContext } from "../../context/GadgetHavenContext";
import { RemoveFromWishlist } from "../../Utilities/RemoveFromWishlist";

const Wishlist = () => {
  const { gadgets, wishlist, setWishlist } = useContext(GadgetHavenContext);
  const finalWishlist = gadgets.filter((gadget) =>
    wishlist.includes(gadget.product_id)
  );
  return (
    <div className="my-5 p-3">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="font-bold">WishList</h1>
      </div>
      <div className="my-4 space-y-3">
        {finalWishlist.map((gadget) => (
          <div
            key={gadget.product_id}
            className="bg-white px-4 flex flex-col md:flex-row items-center justify-between rounded-xl overflow-hidden border"
          >
            <div className="w-full flex flex-col md:flex-row items-center">
              <img
                className="w-40 h-40"
                src={gadget.product_image}
                alt={gadget.product_title}
              />
              <div>
                <h1 className="text-xl font-bold">{gadget.product_title}</h1>
                <p className="text-gray-500">{gadget.description}</p>
                <strong>Price: $ {gadget.price}</strong>
              </div>
            </div>
            <button
              className="hover:opacity-50"
              onClick={() => RemoveFromWishlist(setWishlist, gadget.product_id)}
            >
              <img src={CancelIcon} alt="cancel icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

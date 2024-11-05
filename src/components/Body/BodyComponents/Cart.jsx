import React, { useContext } from "react";
import SortIcon from "/icons/sort-icon.svg";
import CancelIcon from "/icons/cancel-icon.svg";
import { GadgetHavenContext } from "../../context/GadgetHavenContext";
import { RemoveFromCart } from "../../Utilities/RemoveFromCart";

const Cart = () => {
  const { gadgets, cart, setCart, totalPrice, setTotalPrice } =
    useContext(GadgetHavenContext);

  const cartProducts = gadgets.filter((gadget) => {
    if (cart.includes(gadget.product_id)) {
      return gadget;
    }
  });

  return (
    <div className="my-5 p-3">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="font-bold">Cart</h1>
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
          <h1 className="font-bold">Total cost: {totalPrice}</h1>
          <button className="flex items-center border border-gadget-100 px-4 py-1 rounded-full font-bold text-gadget-100 hover:opacity-50">
            <span>Sort by Price</span> <img src={SortIcon} alt="sort" />
          </button>
          <button className="flex items-center bg-gadget-100 px-4 py-1 rounded-full font-bold text-white hover:opacity-50">
            Purchase
          </button>
        </div>
      </div>
      <div className="my-4 space-y-3">
        {cartProducts.map((p) => (
          <div
            key={p.product_id}
            className="border bg-white px-4 flex flex-col md:flex-row items-center justify-between rounded-xl overflow-hidden"
          >
            <div className="w-full flex flex-col md:flex-row items-center">
              <img
                className="w-40 h-40"
                src={p.product_image}
                alt={p.product_title}
              />
              <div>
                <h1 className="text-xl font-bold">{p.product_title}</h1>
                <p className="text-gray-500">{p.description}</p>
                <strong>Price: $ {p.price}</strong>
              </div>
            </div>
            <button
              className="hover:opacity-50"
              onClick={() =>
                RemoveFromCart(
                  setCart,
                  p.product_id,
                  setTotalPrice,
                  Number(p.price)
                )
              }
            >
              <img src={CancelIcon} alt="cancel icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

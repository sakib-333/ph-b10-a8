import React, { useContext, useState } from "react";
import SortIcon from "/icons/sort-icon.svg";
import CancelIcon from "/icons/cancel-icon.svg";
import { GadgetHavenContext } from "../../context/GadgetHavenContext";
import { RemoveFromCart } from "../../Utilities/RemoveFromCart";
import { SortCartGadgets } from "../../Utilities/SortCartGadgets";
import DoneIcon from "/images/group.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { gadgets, cart, setCart, totalPrice, setTotalPrice } =
    useContext(GadgetHavenContext);
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const cartProducts = cart.map((id) => {
    for (let gadget of gadgets) {
      if (gadget.product_id === id) {
        return gadget;
      }
    }
  });

  const handlePurchaseGadgets = () => {
    purchase_modal.showModal();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTotalPrice(0);
    setCart([]);
    navigate("/");
  };

  return (
    <div className="my-5 p-3">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="font-bold">Cart</h1>
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
          <h1 className="font-bold">Total cost: {totalPrice}</h1>
          <button
            className="flex items-center border border-gadget-100 px-4 py-1 rounded-full font-bold text-gadget-100 hover:opacity-50"
            onClick={() => SortCartGadgets(cartProducts, setCart)}
          >
            <span>Sort by Price</span> <img src={SortIcon} alt="sort" />
          </button>
          <button
            type="button"
            className={`flex items-center bg-gadget-100 px-4 py-1 rounded-full font-bold text-white ${
              totalPrice === 0 ? "opacity-40" : "hover:opacity-50"
            }`}
            disabled={totalPrice === 0 ? true : false}
            onClick={handlePurchaseGadgets}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="my-4 space-y-3">
        {cartProducts.map((p, indx) => (
          <div
            key={indx}
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
                RemoveFromCart(setCart, setTotalPrice, Number(p.price), indx)
              }
            >
              <img src={CancelIcon} alt="cancel icon" />
            </button>
          </div>
        ))}
      </div>
      {showModal && (
        <dialog id="purchase_modal" className="modal modal-middle">
          <div className="modal-box flex flex-col items-center space-y-3">
            <img src={DoneIcon} alt="Done icon" />
            <h3 className="font-bold text-xl">Payment Successfully</h3>
            <div className="divider"></div>
            <p className="text-gray-500">Thanks for purchasing.</p>
            <p className="text-gray-500">Total: {totalPrice}</p>
            <div className="modal-action w-full">
              <button
                className="btn w-full rounded-full"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <form method="dialog w-full border"></form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Cart;

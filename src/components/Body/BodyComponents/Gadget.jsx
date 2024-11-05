import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  return (
    <div className="p-3 border rounded-xl flex flex-col bg-white">
      <img className="w-full h-full overflow-hidden" src={gadget.product_image} alt={gadget.product_title} />
      <h1 className="font-bold">{gadget.product_title}</h1>
      <small className="text-gray-500">Price: {gadget.price}</small>
      <Link
        to={`/gadget/${gadget.product_id}`}
        className="w-fit px-3 py-1 border border-gadget-100 rounded-full font-bold hover:bg-gadget-100 hover:text-white"
      >
        View Details
      </Link>
    </div>
  );
};

export default Gadget;

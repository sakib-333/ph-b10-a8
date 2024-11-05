import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ product }) => {
  return (
    <div className="p-3 border rounded-xl flex flex-col bg-white">
      <img
        className="w-full h-full overflow-hidden"
        src={product.product_image}
        alt={product.product_title}
      />
      <h1 className="font-bold">{product.product_title}</h1>
      <small className="text-gray-500">Price: {product.price}</small>
      <Link
        to={`/gadget/${product.product_id}`}
        className="w-fit px-3 py-1 border border-gadget-100 rounded-full font-bold hover:bg-gadget-100 hover:text-white"
      >
        View Details
      </Link>
    </div>
  );
};

export default Gadget;

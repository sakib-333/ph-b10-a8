import React from "react";
import { Link } from "react-router-dom";

const Gadget = () => {
  return (
    <div className="max-w-[250px] p-3 border rounded-xl flex flex-col bg-white">
      <img src="https://i.postimg.cc/pTgjRNGm/One-Plus-1.jpg" alt="phone" />
      <h1 className="font-bold">OnePlus Nord N200</h1>
      <small className="text-gray-500">Price: 99.99k</small>
      <Link
        to={"/gadget/key"}
        className="w-fit px-3 py-1 border border-gadget-100 rounded-full font-bold hover:bg-gadget-100 hover:text-white"
      >
        View Details
      </Link>
    </div>
  );
};

export default Gadget;

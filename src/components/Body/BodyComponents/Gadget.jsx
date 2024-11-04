import React from "react";

const Gadget = () => {
  return (
    <>
      <div className="max-w-[250px] p-3 border rounded-xl flex flex-col">
        <img src="https://i.postimg.cc/pTgjRNGm/One-Plus-1.jpg" alt="phone" />
        <h1 className="font-bold">OnePlus Nord N200</h1>
        <small className="text-gray-500">Price: 99.99k</small>
        <button className="w-fit px-3 py-1 border border-gadget-100 rounded-full font-bold hover:bg-gadget-100 hover:text-white">
          View Details
        </button>
      </div>
    </>
  );
};

export default Gadget;

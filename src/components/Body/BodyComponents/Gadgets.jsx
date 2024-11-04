import React, { useState } from "react";

const Gadgets = () => {
  const buttons = ["All Product", "Laptops", "Phones", "Cameras", "Air Pods"];
  const [activeButton, setActiveButton] = useState(0);

  const handleActiveButton = (indx) => setActiveButton(indx);

  return (
    <div className="mt-[200px]">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="my-4 flex">
        <div className="flex flex-col bg-white p-3 w-fit h-fit space-y-3 border rounded-xl">
          {buttons.map((btn, indx) => (
            <button
              onClick={() => handleActiveButton(indx)}
              key={indx}
              className={`px-2 py-1 rounded-xl ${
                indx === activeButton
                  ? "bg-gadget-100 text-white"
                  : "bg-base-200"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Gadgets;

import React, { useContext, useState } from "react";
import Gadget from "./Gadget";
import { GadgetHavenContext } from "../../context/GadgetHavenContext";

const Gadgets = () => {
  const { gadgets } = useContext(GadgetHavenContext);

  const buttons = ["All Product", "Laptops", "Phones", "Cameras", "Air Pods"];
  const [activeButton, setActiveButton] = useState(0);

  const handleActiveButton = (indx) => setActiveButton(indx);

  return (
    <div className="mt-[200px] p-3">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="my-4 mx-auto space-y-3 md:space-y-0 md:flex md:space-x-4">
        <div className="flex flex-col bg-white p-3 md:max-w-max h-fit space-y-3 border rounded-xl">
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
        <div className=" px-4 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {gadgets.map((gadget) => (
            <Gadget gadget={gadget} key={gadget.product_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;

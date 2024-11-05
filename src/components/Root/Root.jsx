import React, { useState } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import Banner from "../Body/BodyComponents/Banner";
import { GadgetHavenContext } from "../context/GadgetHavenContext";

const Root = () => {
  let location = useLocation();
  const [gadgets, setGadgets] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <>
      <GadgetHavenContext.Provider
        value={{ gadgets, setGadgets, cart, setCart, wishlist, setWishlist }}
        className="max-w-screen-2xl p-2 mx-auto bg-base-200"
      >
        {location.pathname === "/" ? (
          <div className="w-full border-2 outline rounded-xl outline-gray-400">
            <Header />
            <Banner />
          </div>
        ) : (
          <Header />
        )}
        <Body />
      </GadgetHavenContext.Provider>
      <Footer />
    </>
  );
};

export default Root;

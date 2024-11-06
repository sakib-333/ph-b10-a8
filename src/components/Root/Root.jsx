import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { useLoaderData, useLocation } from "react-router-dom";
import Banner from "../Body/BodyComponents/Banner";
import { GadgetHavenContext } from "../context/GadgetHavenContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  let location = useLocation();
  const [gadgets, setGadgets] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const data = useLoaderData();

  useEffect(() => {
    setGadgets(data);
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl p-3 mx-auto bg-base-200">
        <GadgetHavenContext.Provider
          value={{
            gadgets,
            setGadgets,
            cart,
            setCart,
            wishlist,
            setWishlist,
            totalPrice,
            setTotalPrice,
          }}
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
      </div>
      <Footer />
      <ToastContainer autoClose={3000} position="top-center" />
    </>
  );
};

export default Root;

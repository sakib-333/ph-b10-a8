import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import Banner from "../Body/BodyComponents/Banner";

const Root = () => {
  let location = useLocation();

  return (
    <>
      <div className="p-3 max-w-screen-2xl mx-auto bg-base-200">
        {location.pathname === "/" ? (
          <div className="w-full border-2 outline rounded-xl outline-gray-400">
            <Header />
            <Banner />
          </div>
        ) : (
          <Header />
        )}
        <Body />
      </div>
      <Footer />
    </>
  );
};

export default Root;

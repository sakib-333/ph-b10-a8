import React, { useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

const Root = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="p-3 max-w-screen-2xl mx-auto bg-base-200">
        <Header />
        <Body />
      </div>
      <Footer />
    </>
  );
};

export default Root;

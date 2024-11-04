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
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default Root;

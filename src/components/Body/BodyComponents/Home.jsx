import React, { useEffect } from "react";
import Gadgets from "./Gadgets";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return <Gadgets />;
};

export default Home;

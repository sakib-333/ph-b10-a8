import React, { useEffect } from "react";
import Banner from "./Banner";
import Gadgets from "./Gadgets";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <Banner />
      <Gadgets />
    </div>
  );
};

export default Home;

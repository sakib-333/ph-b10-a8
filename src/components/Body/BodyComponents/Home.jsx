import React, { useContext, useEffect } from "react";
import Gadgets from "./Gadgets";
import { useLoaderData } from "react-router-dom";
import { GadgetHavenContext } from "../../context/GadgetHavenContext";

const Home = () => {
  const { setGadgets } = useContext(GadgetHavenContext);
  const data = useLoaderData();

  useEffect(() => {
    setGadgets(data);
    document.title = "Home";
  }, []);
  return <Gadgets />;
};

export default Home;

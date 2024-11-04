import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

export default Body;

import React, { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return <div>PageNotFound</div>;
};

export default PageNotFound;

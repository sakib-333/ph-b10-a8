import React, { useEffect } from "react";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics";
  }, []);

  return <div>Statistics</div>;
};

export default Statistics;

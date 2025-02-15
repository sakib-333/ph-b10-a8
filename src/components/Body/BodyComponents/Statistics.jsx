import React, { useContext, useEffect } from "react";
import { GadgetHavenContext } from "../../context/GadgetHavenContext";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
} from "recharts";

const Statistics = () => {
  const { gadgets } = useContext(GadgetHavenContext);
  const data = gadgets.map((gadget) => {
    return {
      name: gadget.product_title,
      price: gadget.price,
    };
  });

  useEffect(() => {
    document.title = "Statistics";
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Statistics</h1>
      <div className="mt-4 mx-auto bg-white">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;

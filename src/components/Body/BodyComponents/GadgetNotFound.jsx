import React from "react";
import { Link, useParams } from "react-router-dom";

const GadgetNotFound = () => {
  const { gadgetID } = useParams();

  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-xl text-gray-700">
        Gadget id {gadgetID} not found.
      </p>
      <p className="mt-2 text-gray-500">
        The gadget you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link
        to={"/"}
        className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default GadgetNotFound;

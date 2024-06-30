// src/components/Homepage.js

import React from "react";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-gray-400  h-[90vh] m-2 mr-1 mb-0 rounded-md"></div>
        <div className="bg-gray-600  h-[90vh] m-2 ml-1 mb-0 rounded-md"></div>
      </div>
      <div className="grid grid-cols-1">
        <div className="bg-gray-900  h-[80vh] m-2 mr-1  rounded-md"></div>
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-gray-400  h-[60vh] mr-1 ml-2 rounded-md"></div>
        <div className="bg-gray-600  h-[60vh] mr-1 ml-1 rounded-md"></div>
        <div className="bg-gray-700  h-[60vh] mr-2 ml-1  rounded-md"></div>
      </div>
      <div className="grid grid-cols-1">
        <div className="bg-gray-700  h-[40vh] m-2   rounded-md"></div>
      </div>
    </>
  );
};

export default Home;

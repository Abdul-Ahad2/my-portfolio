// src/components/Homepage.js

import React from "react";

const Home = () => {
  return (
    <>
      <div className="p-1">
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-slate-900  h-[90vh] rounded-md"></div>
          <div className="bg-gray-800  h-[90vh]  rounded-md"></div>
        </div>
        <div className="grid grid-cols-1 my-1">
          <div className="bg-gray-900  h-[80vh] rounded-md"></div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div className="bg-gray-800  h-[60vh] rounded-md"></div>
          <div className="bg-gray-900  h-[60vh]  rounded-md"></div>
          <div className="bg-gray-800  h-[60vh]  rounded-md"></div>
        </div>
        <div className="grid grid-cols-1 gap-1 mt-1">
          <div className="bg-gray-900  h-[40vh]    rounded-md"></div>
        </div>
      </div>
    </>
  );
};

export default Home;

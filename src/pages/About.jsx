import React from "react";

export default function About() {
  return (
    <div className="bg-gray-200 h-[83vh] w-full flex items-center justify-center p-1">
      <div className="grid grid-cols-2 gap-1 w-full h-full">
        <div className="bg-slate-900 text-white rounded-lg w-full h-full flex items-center justify-center ">
          my_image
        </div>
        <div className=" text-gray-800 rounded-lg w-full h-full flex items-center justify-center p-16 text-2xl font-thin">
          <div>
            <div>
              Learning new skills can be challenging but also rewarding.
              Consistent practice, <i>dedication</i>, and a positive mindset are
              essential for success. Embrace the journey and celebrate every
              milestone along the way. Remember, setbacks are part of the
              process, and perseverance will ultimately lead to growth and
              achievement. Stay motivated and curious.{" "}
              <i>Remember, setbacks are part of the process</i>, and
              perseverance will ultimately lead to growth and achievement. Stay
              motivated and curious.
            </div>
            <button className="bg-slate-800 text-white px-4 py-5 my-3 text-xl rounded-lg">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

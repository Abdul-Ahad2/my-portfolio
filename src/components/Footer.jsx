import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full h-[7vh] bg-black flex items-center justify-center text-white font-sans">
        <h1>© Usman. | All Rights Reserved | {new Date().getFullYear()}</h1>
      </div>
    </>
  );
}

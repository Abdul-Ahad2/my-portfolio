import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-black w-full h-[12vh] flex text-white items-center justify-between px-4 font-sans">
        <div className="text-4xl font-bold font-dmsans">Usman.</div>
        <div>
          <Link className="m-2 font-extralight" to="/">
            Home
          </Link>
          <Link className="m-2 font-extralight" to="/about">
            About
          </Link>
          <Link className="m-2 font-extralight" to="/services">
            Services
          </Link>
          <Link className="m-2 font-extralight" to="/feedback">
            Feedback
          </Link>
          <Link className="m-2 font-extralight" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

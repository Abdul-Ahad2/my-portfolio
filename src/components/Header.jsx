import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-black w-full h-[12vh] flex text-white items-center justify-between px-4 font-sans">
        <div className="text-4xl font-thin  font-dmsans ">Usman.</div>
        <div className="font-thin">
          <Link className="m-2" to="/">
            Home
          </Link>
          <Link className="m-2" to="/about">
            About
          </Link>
          <Link className="m-2" to="/services">
            Services
          </Link>
          <Link className="m-2" to="/feedback">
            Feedbacks
          </Link>
          <Link className="m-2" to="/contact">
            Contact
          </Link>
          <Link className="bg-white rounded-full w-1/2 h-3">pic</Link>
        </div>
      </div>
    </>
  );
}

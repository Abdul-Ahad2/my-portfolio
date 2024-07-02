import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-black w-full h-[12vh] flex text-white items-center justify-between px-4 font-sans">
        <div className="text-4xl font-thin font-dmsans">Usman.</div>
        <div className="font-thin flex items-center">
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
          <Link className="w-10 h-10 bg-white rounded-full overflow-hidden mx-3">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

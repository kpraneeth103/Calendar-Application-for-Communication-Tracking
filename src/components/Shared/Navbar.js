import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center bg-sidebar text-textPrimary py-4 px-6 shadow-lg relative">
      {/* Logo or Brand */}
      <div className="absolute left-4">
        <h1 className="text-2xl font-semibold">ENTNT</h1>
      </div>

      {/* Centered Text */}
      <div className="flex-grow text-center">
        <h1 className="text-2xl font-medium">Communication Calendar</h1>
      </div>

      {/* Navigation Links */}
      <div className="absolute right-4">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-indigo-200">Home</Link>
          <Link to="/about" className="hover:text-indigo-200">About</Link>
          <Link to="/contact" className="hover:text-indigo-200">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

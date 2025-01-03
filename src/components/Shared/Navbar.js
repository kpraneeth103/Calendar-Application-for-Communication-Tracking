import React from "react";

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

      
    </div>
  );
};

export default Navbar;

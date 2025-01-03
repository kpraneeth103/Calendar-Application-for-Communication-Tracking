import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative h-screen flex">
      {/* Mobile Menu Toggle Button */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle Sidebar"
      >
        MAIN PANEL
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-sidebar text-textPrimary p-6 z-40 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:h-screen`}
      >
        <h2 className="text-2xl font-semibold mb-6">Control Panel</h2>
        <ul>
          <li>
            <NavLink
              to="/admin"
              className="block py-2 px-4 rounded-md mb-4 transition-all duration-200 hover:bg-hoverBackground"
              activeClassName="bg-primary text-white"
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              className="block py-2 px-4 rounded-md mb-4 transition-all duration-200 hover:bg-hoverBackground"
              activeClassName="bg-primary text-white"
            >
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className="block py-2 px-4 rounded-md mb-4 transition-all duration-200 hover:bg-hoverBackground"
              activeClassName="bg-primary text-white"
            >
              Reports
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay for closing sidebar on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;

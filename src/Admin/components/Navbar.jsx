import React, { useState } from "react";

const Navbar = ({ setActivePage }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
      <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>

      {/* Profile Section */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 focus:outline-none"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Admin"
            className="w-10 h-10 rounded-full border"
          />
          <span className="font-medium text-gray-700">Admin Name</span>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
            <button
              onClick={() => setActivePage("profile")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={() => alert("Settings Clicked")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              Settings
            </button>
            <button
              onClick={() => setActivePage("logout")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

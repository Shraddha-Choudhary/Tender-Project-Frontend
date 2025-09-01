import React from "react";
import { FaFileUpload, FaUsers, FaPhone, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ setActivePage }) => {
  return (
    <div className="w-64 bg-[#222] text-white flex flex-col p-5 space-y-6">
      <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <button onClick={() => setActivePage("upload")} className="flex items-center gap-3 hover:text-red-500">
          <FaFileUpload /> Upload File
        </button>
        <button onClick={() => setActivePage("subscription")} className="flex items-center gap-3 hover:text-red-500">
          <FaUsers /> Subscription
        </button>
        <button onClick={() => setActivePage("contact")} className="flex items-center gap-3 hover:text-red-500">
          <FaPhone /> Contact
        </button>
        <button onClick={() => setActivePage("logout")} className="flex items-center gap-3 hover:text-red-500">
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;

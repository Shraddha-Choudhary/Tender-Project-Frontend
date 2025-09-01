// import React from "react";
// import { FaFileUpload, FaUsers, FaPhone, FaSignOutAlt } from "react-icons/fa";
// import Dashboard from "../pages/Dashboard";

// const Sidebar = ({ setActivePage }) => {
//   return (
//     <div className="w-64 bg-[#222] text-white flex flex-col p-5 space-y-6">
//       <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
//       <nav className="flex flex-col space-y-4">
//           <button onClick={() => setActivePage("upload")} className="flex items-center gap-3 hover:text-red-500">
//           <Dashboard /> Dashboard
//         </button>
//         <button onClick={() => setActivePage("upload")} className="flex items-center gap-3 hover:text-red-500">
//           <FaFileUpload /> Tender List
//         </button>
//         <button onClick={() => setActivePage("subscription")} className="flex items-center gap-3 hover:text-red-500">
//           <FaUsers /> Subscription
//         </button>
//         <button onClick={() => setActivePage("contact")} className="flex items-center gap-3 hover:text-red-500">
//           <FaPhone /> Contact
//         </button>
//         <button onClick={() => setActivePage("logout")} className="flex items-center gap-3 hover:text-red-500">
//           <FaSignOutAlt /> Logout
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import { FaFileUpload, FaUsers, FaPhone, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

const Sidebar = ({ setActivePage }) => {
  return (
    <div className="w-64 bg-[#222] text-white flex flex-col p-5 space-y-6">
      <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        {/* Dashboard */}
        <button
          // onClick={() => setActivePage("dashboard")}
          onClick={() => setActivePage("dashboard")}
          className="flex items-center gap-3 hover:text-red-500"
        >
          <FaTachometerAlt /> Dashboard
        </button>

        {/* Tender List */}
        <button
       onClick={() => setActivePage("tenderlist")}
          className="flex items-center gap-3 hover:text-red-500"
        >
          <FaFileUpload /> Tender List
        </button>

        {/* Subscription */}
        <button
          onClick={() => setActivePage("subscription")}
          className="flex items-center gap-3 hover:text-red-500"
        >
          <FaUsers /> Subscription
        </button>

        {/* Contact */}
        <button
        onClick={() => setActivePage("contact")}
          className="flex items-center gap-3 hover:text-red-500"
        >
          <FaPhone /> Contact
        </button>

        {/* Logout */}
        <button
          onClick={() => setActivePage("logout")}
          className="flex items-center gap-3 hover:text-red-500"
        >
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;

// import React from 'react'

// function Admin() {
//   return (
//     <div>Admin</div>
//   )
// }

// export default Admin

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
// import UploadFile from "./pages/TenderList";
import Subscription from "./pages/Subscription";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import TenderList from "./pages/TenderList";

// function Admin() {
//   const [activePage, setActivePage] = useState("upload");

//   const renderPage = () => {
//     switch (activePage) {
//        case "upload":
//         return <Dashboard/>;
//       case "upload":
//         return <TenderList />;
//       case "subscription":
//         return <Subscription />;
//       case "contact":
//         return <Contact />;
//       case "profile":
//         return <Profile />;
//       default:
//         return <Dashboard />;
//     }
    
//   };

//   return (
//     <div className="flex h-screen bg-[#f5f5f5]">
//       {/* Sidebar */}
//       <Sidebar setActivePage={setActivePage} />

//       {/* Main Content */}
//       <div className="flex flex-col flex-1">
//         {/* Navbar */}
//         <Navbar setActivePage={setActivePage} />

//         {/* Page Content */}
//         <main className="flex-1 p-6 overflow-y-auto">{renderPage()}</main>
//       </div>
//     </div>
//   );
// }
function Admin() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "tenderlist":
        return <TenderList />;
      case "subscription":
        return <Subscription />;
      case "contact":
        return <Contact />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      {/* Sidebar */}
      <Sidebar setActivePage={setActivePage} />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar setActivePage={setActivePage} />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{renderPage()}</main>
      </div>
    </div>
  );
}

export default Admin;

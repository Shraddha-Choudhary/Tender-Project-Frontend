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
import UploadFile from "./pages/UploadFile";
// import Subscription from "./pages/Subscription";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function Admin() {
  const [activePage, setActivePage] = useState("upload");

  const renderPage = () => {
    switch (activePage) {
      case "upload":
        return <UploadFile />;
    //   case "subscription":
    //     return <Subscription />;
      case "contact":
        return <Contact />;
      case "profile":
        return <Profile />;
      default:
        return <UploadFile />;
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

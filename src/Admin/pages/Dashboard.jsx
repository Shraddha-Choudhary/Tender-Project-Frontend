// import React from 'react'

// function Dashboard() {
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard


import React from "react";

function Dashboard() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard Overview</h2>
      <hr className="mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Total Tender List */}
        <div className="bg-green-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-green-700 font-semibold mb-2">Total Tender List</h3>
          <p className="text-2xl font-bold text-green-800">12</p>
        </div>

        {/* Total Enquiry */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-yellow-700 font-semibold mb-2">Total Enquiry</h3>
          <p className="text-2xl font-bold text-yellow-800">8</p>
        </div>

        {/* Total Contact */}
        <div className="bg-blue-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-blue-700 font-semibold mb-2">Total Contact</h3>
          <p className="text-2xl font-bold text-blue-800">5</p>
        </div>

        {/* Total Subscription */}
        <div className="bg-pink-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-pink-700 font-semibold mb-2">Total Subscription</h3>
          <p className="text-2xl font-bold text-pink-800">3</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

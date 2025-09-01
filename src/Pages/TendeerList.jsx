
// import React, { useState } from "react";

// const TendeerList = () => {
//   // Dummy Data (Dynamic ke liye API connect kar dena)
//   const [tenders, setTenders] = useState([
//     {
//       id: "2025_STDC_445238_1",
//       location: "Rewa, Madhya Pradesh",
//       authority: "MP State Tourism Development Corporation Limited",
//       description:
//         "Construction of public amenities, Guard Room and other infrastructure development work at Keoti water fall Rewa.",
//       closingDate: "18/08/2025",
//       bidValue: "99.98 Thousand",
//     },
//     {
//       id: "2025_WCL_445241_1",
//       location: "Chhindwara, Madhya Pradesh",
//       authority: "Western Coalfields Limited",
//       description:
//         "Contractually drilling, grouting and jamming of roof bolts with resin capsule by hydraulic means.",
//       closingDate: "25/08/2025",
//       bidValue: "2.15 Crore",
//     },
//   ]);

//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("");

//   // Filter logic
//   const filteredTenders = tenders.filter(
//     (tender) =>
//       tender.location.toLowerCase().includes(search.toLowerCase()) &&
//       (department === "" || tender.authority.includes(department))
//   );

//   return (
//     <div className="min-h-screen bg-white text-gray-900 p-6">
//       {/* Title */}
//       <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">
//         Live Tenders
//       </h1>

//       {/* Search and Filters */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
//         <input
//           type="text"
//           placeholder="Enter Location..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />

//         <select
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//           className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//         >
//           <option value="">Select Department</option>
//           <option value="Tourism">MP State Tourism Development Corporation Limited</option>
//           <option value="Coal">Western Coalfields Limited</option>
//         </select>

//         <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition">
//           Search
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-gray-800 text-white text-left">
//               <th className="p-3">S.NO</th>
//               <th className="p-3">Tender ID</th>
//               <th className="p-3">Location</th>
//               <th className="p-3">Tender Inviting Authority</th>
//               <th className="p-3">Description</th>
//               <th className="p-3">Bid Closing Date</th>
//               <th className="p-3">Bid Value</th>
//               <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTenders.length > 0 ? (
//               filteredTenders.map((tender, index) => (
//                 <tr
//                   key={tender.id}
//                   className={`${
//                     index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
//                   } hover:bg-gray-300 transition`}
//                 >
//                   <td className="p-3">{index + 1}</td>
//                   <td className="p-3 font-semibold">{tender.id}</td>
//                   <td className="p-3">{tender.location}</td>
//                   <td className="p-3">{tender.authority}</td>
//                   <td className="p-3">{tender.description}</td>
//                   <td className="p-3">{tender.closingDate}</td>
//                   <td className="p-3 font-bold text-green-600">
//                     {tender.bidValue}
//                   </td>
//                   <td className="p-3 text-center">
//                     <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
//                       View More
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan="8"
//                   className="text-center p-6 text-gray-500 font-semibold"
//                 >
//                   No Tenders Found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TendeerList;
import React, { useState } from "react";

const TendeerList = () => {
  // Dummy 10 Data Entries
  const [tenders] = useState([
    {
      id: "2025_STDC_445238_1",
      location: "Rewa, Madhya Pradesh",
      authority: "MP State Tourism Development Corporation Limited",
      description:
        "Construction of public amenities, Guard Room and other infrastructure development work at Keoti waterfall.",
      closingDate: "18/08/2025",
      bidValue: "99.98 Thousand",
    },
    {
      id: "2025_WCL_445241_1",
      location: "Chhindwara, Madhya Pradesh",
      authority: "Western Coalfields Limited",
      description: "Contractually drilling, grouting and jamming of roof bolts with resin capsule.",
      closingDate: "25/08/2025",
      bidValue: "2.15 Crore",
    },
    {
      id: "2025_PWD_445242_1",
      location: "Bhopal, Madhya Pradesh",
      authority: "Public Works Department",
      description: "Construction of new bypass road and bridge.",
      closingDate: "28/08/2025",
      bidValue: "3.5 Crore",
    },
    {
      id: "2025_IR_445243_1",
      location: "Jabalpur, Madhya Pradesh",
      authority: "Indian Railways",
      description: "Track maintenance and signaling system upgrade.",
      closingDate: "02/09/2025",
      bidValue: "1.8 Crore",
    },
    {
      id: "2025_MPED_445244_1",
      location: "Indore, Madhya Pradesh",
      authority: "MP Energy Department",
      description: "Solar power plant installation and maintenance.",
      closingDate: "05/09/2025",
      bidValue: "12.6 Crore",
    },
    {
      id: "2025_MPRTC_445245_1",
      location: "Gwalior, Madhya Pradesh",
      authority: "MP Road Transport Corporation",
      description: "Construction of new bus terminal and depot.",
      closingDate: "07/09/2025",
      bidValue: "8.9 Crore",
    },
    {
      id: "2025_MPHC_445246_1",
      location: "Ujjain, Madhya Pradesh",
      authority: "MP Housing Corporation",
      description: "Affordable housing project at Ujjain.",
      closingDate: "10/09/2025",
      bidValue: "15.2 Crore",
    },
    {
      id: "2025_MPWD_445247_1",
      location: "Satna, Madhya Pradesh",
      authority: "MP Water Department",
      description: "Water supply scheme for rural areas.",
      closingDate: "12/09/2025",
      bidValue: "5.7 Crore",
    },
    {
      id: "2025_MPAI_445248_1",
      location: "Khajuraho, Madhya Pradesh",
      authority: "MP Archaeology Department",
      description: "Restoration of temples and cultural heritage.",
      closingDate: "15/09/2025",
      bidValue: "20.4 Crore",
    },
    {
      id: "2025_MPEDU_445249_1",
      location: "Sagar, Madhya Pradesh",
      authority: "MP Education Department",
      description: "Construction of new government schools.",
      closingDate: "18/09/2025",
      bidValue: "7.8 Crore",
    },
  ]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");

  // Filter logic
  const filteredTenders = tenders.filter(
    (tender) =>
      tender.location.toLowerCase().includes(search.toLowerCase()) &&
      (department === "" || tender.authority.includes(department))
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">
        Live Tenders
      </h1>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter Location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select Department</option>
          <option value="Tourism">Tourism</option>
          <option value="Coal">Coal</option>
          <option value="PWD">PWD</option>
          <option value="Railways">Railways</option>
          <option value="Energy">Energy</option>
          <option value="Housing">Housing</option>
          <option value="Transport">Transport</option>
          <option value="Water">Water</option>
          <option value="Archaeology">Archaeology</option>
          <option value="Education">Education</option>
        </select>

        <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition">
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="p-3 border border-gray-400">S.NO</th>
              <th className="p-3 border border-gray-400">Tender ID</th>
              <th className="p-3 border border-gray-400">Location</th>
              <th className="p-3 border border-gray-400">Tender Inviting Authority</th>
              <th className="p-3 border border-gray-400">Description</th>
              <th className="p-3 border border-gray-400">Bid Closing Date</th>
              <th className="p-3 border border-gray-400">Bid Value</th>
              <th className="p-3 border border-gray-400 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTenders.length > 0 ? (
              filteredTenders.map((tender, index) => (
                <tr
                  key={tender.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  } hover:bg-gray-300 transition`}
                >
                  <td className="p-3 border border-gray-400">{index + 1}</td>
                  <td className="p-3 border border-gray-400 font-semibold">{tender.id}</td>
                  <td className="p-3 border border-gray-400">{tender.location}</td>
                  <td className="p-3 border border-gray-400">{tender.authority}</td>
                  <td className="p-3 border border-gray-400">{tender.description}</td>
                  <td className="p-3 border border-gray-400">{tender.closingDate}</td>
                  <td className="p-3 border border-gray-400 font-bold text-green-600">
                    {tender.bidValue}
                  </td>
                  <td className="p-3 border border-gray-400 text-center">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
                      View More
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center p-6 text-gray-500 font-semibold"
                >
                  No Tenders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TendeerList;

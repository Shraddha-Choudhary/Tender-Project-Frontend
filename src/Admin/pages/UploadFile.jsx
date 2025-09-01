// import React, { useState } from "react";
// import * as XLSX from "xlsx";

// const UploadFile = () => {
//   const [data, setData] = useState([]);

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (event) => {
//         const binaryStr = event.target.result;
//         const workbook = XLSX.read(binaryStr, { type: "binary" });

//         // First sheet ka data read karenge
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];

//         // Sheet ko JSON me convert
//         const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

//         setData(parsedData);
//       };

//       reader.readAsBinaryString(file);
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow rounded-md">
//       <h2 className="text-xl font-bold mb-4">Upload Excel File</h2>

//       {/* File Upload */}
//       <input
//         type="file"
//         accept=".xlsx, .xls"
//         onChange={handleFileUpload}
//         className="mb-4"
//       />

//       {/* Table Data */}
//       {data.length > 0 && (
//         <div className="overflow-x-auto mt-6">
//           <table className="w-full border border-gray-300">
//             <thead className="bg-[#1e293b] text-white">
//               <tr>
//                 {data[0].map((col, i) => (
//                   <th key={i} className="px-4 py-2 border border-gray-400">
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {data.slice(1).map((row, i) => (
//                 <tr
//                   key={i}
//                   className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
//                 >
//                   {row.map((cell, j) => (
//                     <td key={j} className="px-4 py-2 border border-gray-300">
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadFile;

import React, { useState } from "react";
import * as XLSX from "xlsx";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const UploadFile = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const binaryStr = event.target.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        setData(parsedData);
      };

      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Upload Excel File</h2>

      {/* File Upload */}
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="mb-4"
      />

      {/* Table Data */}
      {data.length > 0 && (
        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-[#1e293b] text-white">
              <tr>
                {data[0].map((col, i) => (
                  <th key={i} className="px-4 py-2 border border-gray-400">
                    {col}
                  </th>
                ))}
                <th className="px-4 py-2 border border-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2 border border-gray-300">
                      {cell}
                    </td>
                  ))}
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    <div className="flex gap-3 justify-center">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEye />
                      </button>
                      <button className="text-green-500 hover:text-green-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UploadFile;

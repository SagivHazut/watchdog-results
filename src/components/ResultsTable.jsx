import React from "react";

const ResultsTable = () => {
  const data = [
    { name: "Test 1", result: "Passed", details: "Execution time: 1.2s" },
    { name: "Test 2", result: "Failed", details: "Error: Timeout" },
    { name: "Test 3", result: "Passed", details: "Execution time: 0.8s" },
    { name: "Test 4", result: "Passed", details: "Execution time: 1.0s" },
    { name: "Test 5", result: "Failed", details: "Error: Network issue" },
  ];

  return (
    <div className='container mx-auto p-6 bg-gray-900 text-gray-100 rounded-md'>
      <h2 className='text-2xl font-bold mb-4'>Test Results</h2>
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-700'>
          <thead>
            <tr className='bg-gray-800 text-left'>
              <th className='border border-gray-700 px-4 py-2'>Test Name</th>
              <th className='border border-gray-700 px-4 py-2'>Result</th>
              <th className='border border-gray-700 px-4 py-2'>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                } hover:bg-gray-600`}
              >
                <td className='border border-gray-700 px-4 py-2'>{row.name}</td>
                <td
                  className={`border border-gray-700 px-4 py-2 font-medium ${
                    row.result === "Passed" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {row.result}
                </td>
                <td className='border border-gray-700 px-4 py-2'>
                  {row.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;

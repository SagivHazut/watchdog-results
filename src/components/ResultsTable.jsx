import React from "react";

const ResultsTable = ({ data }) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Test Results</h2>
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-700'>
          <thead>
            <tr className='dark:bg-gray-900 text-left'>
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
                  index % 2 === 0
                    ? "dark:bg-gray-900 dark:text-white"
                    : "bg-gray-900 dark:bg-white dark:text-gray-900 text-white"
                } hover:bg-gray-300 hover:dark:bg-gray-300`}
              >
                <td className='border border-gray-700 px-4 py-2'>{row.code}</td>
                <td
                  className={`border border-gray-700 px-4 py-2 font-medium ${
                    row.status === "Passed" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {row.status}
                </td>
                <td className='border border-gray-700 px-4 py-2'>
                  {row.message}
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

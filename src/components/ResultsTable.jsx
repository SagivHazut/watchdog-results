import React from "react";
import "../style/ResultsTable.scss";

const ResultsTable = () => {
  const data = [
    { name: "Test 1", result: "Passed", details: "Execution time: 1.2s" },
    { name: "Test 2", result: "Failed", details: "Error: Timeout" },
    { name: "Test 3", result: "Passed", details: "Execution time: 0.8s" },
    { name: "Test 4", result: "Passed", details: "Execution time: 1.0s" },
    { name: "Test 5", result: "Failed", details: "Error: Network issue" },
  ];

  return (
    <div className='results-table-container'>
      <h2>Test Results</h2>
      <table className='results-table'>
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Result</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.result}</td>
              <td>{row.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;

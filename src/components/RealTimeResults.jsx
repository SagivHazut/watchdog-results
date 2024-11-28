import React from "react";
import { Pie } from "react-chartjs-2";
import ResultsTable from "./ResultsTable";
import "../style/Charts.scss";

export const RealTimeResults = () => {
  const chartOptions = {
    maintainAspectRatio: false,
  };

  const testsData = {
    labels: ["Payments", "Redeem", "Auth", "Buttons", "Games"],
    datasets: [
      {
        label: "Last Run Results",
        data: [20, 8, 4, 10, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='real-time-results'>
      <div className='chart-wrapper'>
        <h2>Last Run Results</h2>
        <Pie data={testsData} options={chartOptions} />
      </div>
      <ResultsTable />
    </div>
  );
};

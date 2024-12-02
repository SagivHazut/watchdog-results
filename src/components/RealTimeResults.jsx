import React from "react";
import { Pie } from "react-chartjs-2";
import ResultsTable from "./ResultsTable";
import "../style/Charts.scss";

export const RealTimeResults = ({ data }) => {
  const chartOptions = {
    maintainAspectRatio: false,
  };

  // Transform data to generate chart inputs
  const categories = ["Payments", "Redeem", "Auth", "Buttons", "Games"];
  const categoryCounts = categories.map(
    (category) =>
      data.filter((item) =>
        item.code.toLowerCase().includes(category.toLowerCase())
      ).length
  );

  const pieData = {
    labels: categories,
    datasets: [
      {
        label: "Last Run Results",
        data: categoryCounts,
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
        <Pie data={pieData} options={chartOptions} />
      </div>
      <ResultsTable data={data} />
    </div>
  );
};

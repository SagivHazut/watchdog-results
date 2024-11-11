import React from "react";
import { Line, Pie } from "react-chartjs-2";
import "react-datepicker/dist/react-datepicker.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "../style/Charts.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Mock data for charts
const data = {
  labels: ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"],
  datasets: [
    {
      label: "Latest Results",
      data: [12, 19, 3, 5, 2],
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

const overallData = {
  labels: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
  datasets: [
    {
      label: "Overall Results",
      data: [20, 25, 30, 35, 40],
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

export const RealTimeResults = () => {
  const chartOptions = {
    maintainAspectRatio: false,
  };

  return (
    <div className='real-time-results'>
      <div className='chart-wrapper'>
        <h2>Chart 1: Latest Results</h2>
        <Line data={data} options={chartOptions} />
      </div>

      <div className='chart-wrapper'>
        <h2>Chart 2: Overall Results</h2>
        <Pie data={overallData} options={chartOptions} />
      </div>
    </div>
  );
};

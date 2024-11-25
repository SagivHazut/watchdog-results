import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "../style/OverAllTests.scss";

const initialData = {
  labels: [
    "2024-08-01",
    "2024-08-10",
    "2024-08-20",
    "2024-09-01",
    "2024-09-10",
    "2024-09-20",
    "2024-10-01",
    "2024-10-10",
    "2024-10-20",
    "2024-11-01",
    "2024-11-10",
    "2024-11-20",
    "2024-11-30", // Up to today
  ],
  datasets: [
    {
      label: "Test Results",
      data: [15, 20, 10, 30, 25, 18, 40, 35, 45, 60, 55, 65, 70],
      fill: false,
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const calculateDate = (option) => {
  const today = new Date();
  let startDate;

  switch (option) {
    case "Yesterday":
      startDate = new Date(today.setDate(today.getDate() - 1));
      break;
    case "Last Week":
      startDate = new Date(today.setDate(today.getDate() - 7));
      break;
    case "30 Days Ago":
      startDate = new Date(today.setDate(today.getDate() - 30));
      break;
    case "90 Days Ago":
      startDate = new Date(today.setDate(today.getDate() - 90));
      break;
    case "Overall":
      return { startDate: null, endDate: null };
    default:
      startDate = today;
  }

  return { startDate, endDate: today };
};

const filterDataByDateRange = (data, startDate, endDate) => {
  if (startDate && endDate) {
    const filteredLabels = data.labels.filter(
      (label) => new Date(label) >= startDate && new Date(label) <= endDate
    );
    const startIndex = data.labels.indexOf(filteredLabels[0]);
    const endIndex = data.labels.indexOf(
      filteredLabels[filteredLabels.length - 1]
    );

    const filteredDataset = data.datasets[0].data.slice(
      startIndex,
      endIndex + 1
    );

    return {
      labels: filteredLabels,
      datasets: [
        {
          ...data.datasets[0],
          data: filteredDataset,
        },
      ],
    };
  }

  return data;
};

const OverAllTests = () => {
  const [dateOption, setDateOption] = useState("Today");

  const { startDate, endDate } = calculateDate(dateOption);
  const filteredData = filterDataByDateRange(initialData, startDate, endDate);

  return (
    <div className='overall-tests-container'>
      <div className='date-picker-container'>
        <h3>Select Date Range</h3>
        <div className='date-picker'>
          <label htmlFor='date-range'>Choose Date Range:</label>
          <select
            id='date-range'
            value={dateOption}
            onChange={(e) => setDateOption(e.target.value)}
            className='date-range-select'
          >
            <option value='Today'>Today</option>
            <option value='Yesterday'>Yesterday</option>
            <option value='Last Week'>Last Week</option>
            <option value='30 Days Ago'>30 Days Ago</option>
            <option value='90 Days Ago'>90 Days Ago</option>
            <option value='Overall'>Overall</option>
          </select>
        </div>
      </div>

      <div className='charts-container'>
        <div className='chart'>
          <h2>Filtered Test Results</h2>
          <Line data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default OverAllTests;

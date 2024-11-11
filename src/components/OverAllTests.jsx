import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Initial data for the charts
const initialData = {
  labels: [
    "2024-01-01",
    "2024-01-02",
    "2024-01-03",
    "2024-01-04",
    "2024-01-05",
  ],
  datasets: [
    {
      label: "Test Results",
      data: [12, 19, 3, 5, 2],
      fill: false,
      borderColor: "rgba(75,192,192,1)",
    },
  ],
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

export const OverAllTests = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = () => {
    if (startDate && endDate) {
      console.log("Fetching results from", startDate, "to", endDate);
    }
  };

  const filteredData = filterDataByDateRange(initialData, startDate, endDate);

  return (
    <div>
      <div>
        <h3>Select Date Range to Display Results</h3>
        <label>From: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText='Select start date'
        />
        <label>To: </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText='Select end date'
        />
        <button onClick={handleDateChange}>Filter Results</button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {/* Chart 1 */}
        <div style={{ width: "45%" }}>
          <h2>Chart 1: Filtered Test Results</h2>
          <Line data={filteredData} />
        </div>

        {/* Chart 2 */}
        <div style={{ width: "45%" }}>
          <h2>Chart 2: Filtered Overall Results</h2>
          <Line data={filteredData} />
        </div>
      </div>
    </div>
  );
};

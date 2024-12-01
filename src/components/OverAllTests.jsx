import React, { useState } from "react";
import { Line } from "react-chartjs-2";

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
    "2024-11-30",
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
    <div className='flex flex-col items-center w-full p-4 md:p-8 lg:p-12 max-w-screen-lg lg:max-w-5xl mx-auto bg-white dark:bg-gray-900 dark:text-white text-gary-900'>
      <div className='flex flex-col items-center w-full mb-6'>
        <h3 className='text-xl md:text-2xl lg:text-3xl mb-4 text-center  '>
          Select Date Range
        </h3>
        <div className='flex flex-col items-center w-full max-w-sm lg:max-w-md '>
          <label
            htmlFor='date-range'
            className='text-sm md:text-base font-medium mb-2 text-center'
          >
            Choose Date Range:
          </label>
          <select
            id='date-range'
            value={dateOption}
            onChange={(e) => setDateOption(e.target.value)}
            className='text-black text-sm md:text-base border border-gray-300 rounded-md w-full max-w-xs p-2 text-center shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200'
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

      <div className='flex flex-col items-center w-full	'>
        <div className='flex flex-col items-center w-full mb-6 p-6 lg:p-8 dark:bg-gray-900  border border-gray-300 rounded-lg shadow-md'>
          <h2 className='text-xl md:text-2xl lg:text-3xl mb-4 text-center '>
            Filtered Test Results
          </h2>
          <div className='w-full max-w-3xl lg:max-w-4xl h-auto'>
            <Line data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverAllTests;

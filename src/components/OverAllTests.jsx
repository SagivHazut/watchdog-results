import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const aggregateTestData = (data) => {
  const aggregatedData = {};

  (data || []).forEach((test) => {
    const date = test.date.split(" ")[0];
    if (!aggregatedData[date]) {
      aggregatedData[date] = { Passed: 0, Failed: 0 };
    }
    aggregatedData[date][test.status] += 1;
  });

  return aggregatedData;
};

const prepareChartData = (aggregatedData, labels) => {
  const passedData = labels.map((label) => aggregatedData[label]?.Passed || 0);
  const failedData = labels.map((label) => aggregatedData[label]?.Failed || 0);

  return {
    labels,
    datasets: [
      {
        label: "Passed Tests",
        data: passedData,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
      {
        label: "Failed Tests",
        data: failedData,
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      },
    ],
  };
};

const calculateDate = (option) => {
  const today = new Date();
  let startDate;

  switch (option) {
    case "Yesterday":
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 1);
      break;
    case "Last Week":
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 7);
      break;
    case "30 Days Ago":
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 30);
      break;
    case "90 Days Ago":
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 90);
      break;
    case "Overall":
      return { startDate: null, endDate: null };
    default:
      startDate = new Date(today);
  }

  return { startDate, endDate: today };
};

const OverAllTests = ({ data = [] }) => {
  const [dateOption, setDateOption] = useState("Overall");

  const { startDate, endDate } = calculateDate(dateOption);

  const dynamicLabels = Array.from(
    new Set(data.map((test) => test.date.split(" ")[0]))
  ).sort((a, b) => new Date(a) - new Date(b));

  const filteredLabels = dynamicLabels.filter((label) => {
    const date = new Date(label);
    if (startDate && endDate) {
      return date >= startDate && date <= endDate;
    }
    return true;
  });

  const aggregatedData = aggregateTestData(data);
  const chartData = prepareChartData(aggregatedData, filteredLabels);

  return (
    <div className='flex flex-col items-center w-full p-4 md:p-8 lg:p-12 max-w-screen-lg lg:max-w-5xl mx-auto bg-white dark:bg-gray-900 dark:text-white text-gray-900'>
      <div className='flex flex-col items-center w-full mb-6'>
        <h3 className='text-xl md:text-2xl lg:text-3xl mb-4 text-center'>
          Select Date Range
        </h3>
        <div className='flex flex-col items-center w-full max-w-sm lg:max-w-md'>
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

      <div className='flex flex-col items-center w-full'>
        <div className='flex flex-col items-center w-full mb-6 p-6 lg:p-8 dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md'>
          <h2 className='text-xl md:text-2xl lg:text-3xl mb-4 text-center'>
            Filtered Test Results
          </h2>
          <div className='w-full max-w-3xl lg:max-w-4xl h-auto'>
            <Line data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverAllTests;

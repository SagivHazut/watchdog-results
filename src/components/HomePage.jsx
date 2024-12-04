import React from "react";
import { RealTimeResults } from "./RealTimeResults";

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

const HomePage = ({ environment, data }) => {
  if (!data) {
    return <p>Loading data for {environment}...</p>;
  }
  return (
    <div className='flex flex-col  mt-8 items-center w-full bg-white dark:bg-gray-900 dark:text-white text-gary-900'>
      <RealTimeResults data={data} />
    </div>
  );
};

export default HomePage;

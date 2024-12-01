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
import "../style/Homepage.scss";

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

const HomePage = () => {
  return (
    <div className='homePageContainer bg-white dark:bg-gray-900 dark:text-white text-gary-900 min-h-screen transition-all'>
      <RealTimeResults />
    </div>
  );
};

export default HomePage;

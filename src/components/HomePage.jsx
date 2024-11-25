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
    <div className='homePageContainer'>
      <div className='component-wrapper'>
        <RealTimeResults />
      </div>
    </div>
  );
};

export default HomePage;

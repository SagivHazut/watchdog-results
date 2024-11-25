import React from "react";
import OverAllTests from "./OverAllTests";
import "../style/PerformanceTrends.scss";
export const PerformanceTrends = () => {
  return (
    <div className='analytics-page-container'>
      <div className='analytics-component-wrapper'>
        <OverAllTests />
      </div>
    </div>
  );
};
export default PerformanceTrends;

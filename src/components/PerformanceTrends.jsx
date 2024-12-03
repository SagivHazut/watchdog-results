import React from "react";
import OverAllTests from "./OverAllTests";

export const PerformanceTrends = ({ environment, data }) => {
  if (!data) {
    return <p>Loading data for {environment}...</p>;
  }
  return (
    <div className='flex flex-col items-center w-full bg-white dark:bg-gray-900 dark:text-white text-gary-900'>
      <OverAllTests data={data} />
    </div>
  );
};
export default PerformanceTrends;

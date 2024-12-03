import React, { useState, useEffect } from "react";
import ErrorPopup from "./ErrorPopup";
import ImageZoom from "./ImageZoom";

const TestResultsTable = ({ environment, data }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleRowClick = (result) => {
    setSelectedResult(result);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedResult(null);
  };

  const handleZoomClose = () => {
    setZoomedImage(null);
  };
  const handleImageClick = (image) => {
    setZoomedImage(image);
  };
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        if (zoomedImage) {
          handleZoomClose();
        } else if (drawerOpen) {
          handleDrawerClose();
        }
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [zoomedImage, drawerOpen]);
  if (!data) {
    return <p>Loading data for {environment}...</p>;
  }
  return (
    <div
      key={environment}
      className='p-4 bg-white dark:bg-gray-900 transition-all dark:text-white text-gray-900 min-h-screen w-full'
    >
      <div className='overflow-x-auto'>
        <table className='table-auto w-full border-collapse border border-gray-700'>
          <thead>
            <tr className='bg-white dark:bg-gray-900'>
              <th className='p-4 border border-gray-700 text-left'>
                Test Name
              </th>
              <th className='p-4 border border-gray-700 text-left'>Status</th>
              <th className='p-4 border border-gray-700 text-left'>Date</th>
              <th className='p-4 border border-gray-700 text-left'>Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.map((result, index) => (
              <tr
                key={`${result.code}-${index}`}
                className={`cursor-pointer ${
                  index % 2 === 0
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                } hover:bg-gray-300 dark:hover:bg-gray-700`}
                onClick={() => handleRowClick(result)}
              >
                <td className='p-4 border border-gray-700'>{result.message}</td>
                <td className='p-4 border border-gray-700'>{result.status}</td>
                <td className='p-4 border border-gray-700'>{result.date}</td>
                <td className='p-4 border border-gray-700'>
                  {result.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ErrorPopup
        isOpen={drawerOpen}
        onClose={handleDrawerClose}
        selectedResult={selectedResult}
        onImageClick={handleImageClick}
      />
      <ImageZoom imageUrl={zoomedImage} onClose={handleZoomClose} />
    </div>
  );
};

export default TestResultsTable;

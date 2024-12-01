import React, { useState, useEffect } from "react";
import ErrorPopup from "./ErrorPopup";
import ImageZoom from "./ImageZoom";
import image from "../artifacts/test-failed-1.png";
import video from "../artifacts/video.webm";

const TestResultsTable = () => {
  const testResults = [
    {
      code: "RedeemDialog-redeemWithIbtButton-unclickable",
      message: "Redeem with IBT Button Unclickable",
      status: "Failed",
      date: "2024-11-20 14:32:00",
      duration: "15s",
      context:
        "Unable to click on the 'Redeem with IBT' button; it may not be visible or clickable.",
      impact:
        "Users cannot initiate the redeem process using IBT, affecting their ability to redeem rewards.",
      suggestion:
        "Ensure the button is present, visible, and fully interactable in the specified context.",
      screenshotUrl: image,
      videoUrl: video,
    },
    {
      code: "LoginPage-loginButton-disabled",
      message: "Login Button Disabled",
      status: "Passed",
      date: "2024-11-19 10:15:00",
      duration: "5s",
      context:
        "The login button remained disabled after entering valid credentials.",
      impact:
        "Users are unable to log in, causing frustration and preventing application use.",
      suggestion:
        "Ensure the login button is enabled once credentials are valid.",
      screenshotUrl: "/screenshots/login-button-disabled.png",
      videoUrl: "/videos/login-button-disabled.mp4",
    },
  ];

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
        // Close zoom modal if open
        if (zoomedImage) {
          handleZoomClose();
        }
        // Close details modal if open and zoom modal is not open
        else if (drawerOpen) {
          handleDrawerClose();
        }
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [zoomedImage, drawerOpen]);
  return (
    <div className='p-4 bg-white dark:bg-gray-900 transition-all dark:text-white text-gray-900 min-h-screen w-full'>
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
            {testResults.map((result) => (
              <tr
                key={result.code}
                className={`cursor-pointer ${
                  result.status === "Failed"
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

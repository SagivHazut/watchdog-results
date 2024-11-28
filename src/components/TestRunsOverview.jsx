import React, { useState } from "react";

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
      screenshotUrl: "/screenshots/redeem-ibt-fail.png",
      videoUrl: "/videos/redeem-ibt-fail.mp4",
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

  const handleRowClick = (result) => {
    setSelectedResult(result);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedResult(null);
  };

  return (
    <div className='p-4 bg-gray-900 min-h-screen text-white w-full'>
      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='table-auto w-full border-collapse border border-gray-700'>
          <thead>
            <tr className='bg-gray-800'>
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
                    ? "bg-red-100 text-red-800"
                    : "bg-green-100 text-green-800"
                } hover:bg-gray-300`}
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

      {/* Drawer */}
      {drawerOpen && selectedResult && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='bg-white text-black w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg relative'>
            <button
              className='absolute top-4 right-4 text-gray-500 hover:text-black'
              onClick={handleDrawerClose}
            >
              &times;
            </button>
            <h2 className='text-xl font-bold mb-4'>Error Details</h2>
            <p>
              <strong>Code:</strong> {selectedResult.code}
            </p>
            <p>
              <strong>Message:</strong> {selectedResult.message}
            </p>
            <p>
              <strong>Context:</strong> {selectedResult.context}
            </p>
            <p>
              <strong>Impact:</strong> {selectedResult.impact}
            </p>
            <p>
              <strong>Suggestion:</strong> {selectedResult.suggestion}
            </p>
            <div className='mt-4'>
              <p>
                <strong>Screenshot:</strong>
              </p>
              <img
                src={selectedResult.screenshotUrl}
                alt='Screenshot'
                className='w-full h-auto mt-2 rounded-md border border-gray-300'
              />
              <p className='mt-4'>
                <strong>Video:</strong>
              </p>
              <video
                src={selectedResult.videoUrl}
                controls
                className='w-full h-auto mt-2 rounded-md border border-gray-300'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestResultsTable;

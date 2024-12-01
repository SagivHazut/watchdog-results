import React from "react";

const ErrorPopup = ({ isOpen, onClose, selectedResult, onImageClick }) => {
  if (!isOpen || !selectedResult) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-auto'
      onClick={onClose}
    >
      <div
        className='bg-white dark:bg-gray-900 w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh]'
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          className='absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white'
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className='text-xl font-bold mb-4'>Error Details</h2>
        <div>
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
              className='w-40 h-50 mt-2 rounded-md border border-gray-300 cursor-pointer'
              onClick={() => onImageClick(selectedResult.screenshotUrl)}
            />
            <p className='mt-4'>
              <strong>Video:</strong>
            </p>
            <video
              src={selectedResult.videoUrl}
              controls
              className='w-full h-48 mt-2 rounded-md border border-gray-300'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;

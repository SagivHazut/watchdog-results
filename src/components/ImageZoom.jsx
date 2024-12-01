import React from "react";

const ImageZoom = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt='Zoomed Screenshot'
        className='max-w-full max-h-full rounded-md border border-gray-300'
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      />
    </div>
  );
};

export default ImageZoom;

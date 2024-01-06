import React from 'react';
import { useState } from 'react';

const HoverVideo = ({ imageSrc, videoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-72 h-48 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Your image goes here */}
      <img src={imageSrc} alt="Your Image" className={`w-full h-full object-cover  ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ease-in-out`} />

      {/* Your video goes here */}
      {isHovered && (
        <video src={videoSrc} muted loop autoPlay className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-opacity duration-300 ease-in-out"></video>
      )}
    </div>
  );
};

export default HoverVideo;

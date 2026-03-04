import React, { useState, useEffect } from 'react';

const Image2x = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 2000); // tempo entre slides

    return () => clearInterval(interval);
  }, [photos]);

  return (
    <div className="relative w-full aspect-[21/9] overflow-hidden rounded-none grid max-w-screen-2xl my-8 mx-auto">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className={`w-full absolute top-0 left-0 rounded-none transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default Image2x;
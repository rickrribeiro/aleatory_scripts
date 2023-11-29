import React, { useState, useEffect } from 'react';

const PixelatedPhoto = ({ imageUrl, pixelSize, duration }: any) => {
  const [pixels, setPixels] = useState(pixelSize);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pixels > 1) {
        setPixels(pixels - 1);
      } else {
        clearInterval(interval);
      }
    }, duration / pixelSize);

    return () => clearInterval(interval);
  }, [pixels, duration, pixelSize]);

  return (
    <div className="pixelated-photo-container">
      <h1 className="pixelated-title">seu amigo secreto é: </h1>

      <div
        className="pixelated-photo"
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: `blur(${pixels}px)`,
        }}
      />
    </div>
  );
};

export { PixelatedPhoto };

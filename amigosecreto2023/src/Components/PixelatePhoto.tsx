import React, { useState, useEffect } from 'react';

const PixelatedPhoto = ({ imageUrl, pixelSize, duration, amigoSecreto }: any) => {
  const [pixels, setPixels] = useState(pixelSize);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pixels > 1) {
        setPixels(pixels - 1);
      } else {
        clearInterval(interval);
      }
    }, duration / pixelSize);

    setInterval(() => {
      document.getElementById('pixelated-title')!.textContent = `seu amigo secreto é: ${amigoSecreto}`
    }, duration + 1000);

    return () => clearInterval(interval);
  }, [pixels, duration, pixelSize]);

  return (
    <div className="pixelated-photo-container">
      <h1 id="pixelated-title" className="pixelated-title">seu amigo secreto é: </h1>

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

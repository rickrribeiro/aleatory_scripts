import React, { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import texture from '../assets/textures/topSecret.jpg';
import AudioHandler from "../Handlers/AudioHandler";

function Box() {
  const colorMap = useLoader(TextureLoader, texture);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let interval: any;

    if (clicked) {
      let duration = 6000; // 5 seconds
      let startTime = Date.now();

      interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;

        if (elapsedTime >= duration) {
          clearInterval(interval);
          setClicked(false);
        } else {
          const randomPosition = [Math.random(), Math.random(), Math.random()];
          // setClicked((prevClicked) => !prevClicked);
          setPosition(randomPosition);
        }
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [clicked]);

  const [position, setPosition] = useState([0, 0, 0]);

  const handleClick = () => {
    AudioHandler.playBatuque()
    setClicked(true);
    
  };

  return (
    <mesh
      rotation={[90, 0, 20]}
      onClick={handleClick}
      position={position as any}
    >
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

export { Box };

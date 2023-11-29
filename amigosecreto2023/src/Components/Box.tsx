import React, { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import texture from '../assets/textures/topSecret.jpg';
import AudioHandler from "../Handlers/AudioHandler";

function Box({setShow}: any) {
  const colorMap = useLoader(TextureLoader, texture);
  const [clicked, setClicked] = useState(false);
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    let interval: any;
    if(explode){
      setShow(true)
    }

    if (clicked) {
      let duration = 6000;
      let startTime = Date.now();

      interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;

        if (elapsedTime >= duration) {
          clearInterval(interval);
          setClicked(false);
          setExplode(true);
        } else {
          const randomPosition = [Math.random(), Math.random(), Math.random()];
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
      scale={explode ? [0, 0, 0] : [0.5, 0.5, 0.5]}
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

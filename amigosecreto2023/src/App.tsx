
import './App.css';

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Input, PixelatedPhoto } from './Components';
import { OrbitControls } from '@react-three/drei';
import sorteios from './data/sorteios.json'
import sorteios2 from './data/sorteios2.json'

import AudioHandler from './Handlers/AudioHandler';


function App() {
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const [audioStarted, setAudioStarted] = useState(false);
  const [show, setShow] = useState(false);
  function startAudio() {
    if (!amigoSecreto) {
      AudioHandler.playChristmasSong()
    }
  }

  document.body.addEventListener('click', function () {
    if (audioStarted) return;
    setAudioStarted(true);
    document.getElementById('startAudio')?.click();
  });
  console.log(amigoSecreto)
  return (
    <div className="App h-screen w-screen bg-no-repeat bg-cover">
      <button id="startAudio" onClick={startAudio} style={{ display: 'none' }}></button>

      {amigoSecreto ? '' : <Input setAmigoSecreto={setAmigoSecreto} />}

      {show ? (
        <PixelatedPhoto
          imageUrl={""}
          amigoSecreto={(sorteios as any)[amigoSecreto]?.amigoSecreto || (sorteios2 as any)[amigoSecreto]?.amigoSecreto}
          pixelSize={70}
          duration={6000}
        />
      ) : (
        <Canvas className='h-screen w-screen'>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          {amigoSecreto ? <Box setShow={setShow} /> : ''}
        </Canvas>
      )}
    </div>
  );
}

export default App;

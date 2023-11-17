
import './App.css';

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Input } from './Components';
import { OrbitControls } from '@react-three/drei';
import sorteios from './data/sorteios.json'
import AudioHandler from './Handlers/AudioHandler';

function startAudio() {
  // AudioHandler.playChristmasSong()
}

function App() {
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const [audioStarted, setAudioStarted] = useState(false);

  document.body.addEventListener('click', function () {
    // Remover o ouvinte de evento de clique do corpo
    if (audioStarted) return;
    setAudioStarted(true);
    // Simular o clique no botão invisível
    document.getElementById('startAudio')?.click();
  });

  return (
    <div className="App h-screen w-screen">
      <button id="startAudio" onClick={startAudio} style={{ display: 'none' }}></button>
      {amigoSecreto ? '' : < Input setAmigoSecreto={setAmigoSecreto} />}
      <Canvas className='h-screen w-screen'>
        {/* <Suspense fallback={null} /> descomentar caso quebre ao dar reload. botar o box dentro do suspense */}
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        {amigoSecreto ? <Box /> : ''}
      </Canvas>
    </div >
  );
}

export default App;

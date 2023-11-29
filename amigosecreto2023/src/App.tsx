
import './App.css';

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Input, PixelatedPhoto} from './Components';
import { OrbitControls } from '@react-three/drei';
import sorteios from './data/sorteios.json'
import AudioHandler from './Handlers/AudioHandler';


function App() {
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const [audioStarted, setAudioStarted] = useState(false);
  const [show, setShow] = useState(false);
  function startAudio() {
    if(!amigoSecreto){
      AudioHandler.playChristmasSong()
    }
  }

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

      {amigoSecreto ? '' : <Input setAmigoSecreto={setAmigoSecreto} />}

      {show ? (
        <PixelatedPhoto
          imageUrl="https://i.blogs.es/50a1c5/t4yxpvu/1366_2000.jpeg"
          pixelSize={70}
          duration={6000}
        />
      ) : (
        <Canvas className='h-screen w-screen'>
          {/* Your existing Canvas content */}
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          {amigoSecreto ? <Box setShow={setShow}/> : ''}
        </Canvas>
      )}
    </div>
  );
}

export default App;

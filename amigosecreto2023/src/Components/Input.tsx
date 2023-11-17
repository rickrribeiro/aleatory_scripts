import React, { useRef, useEffect, useState } from 'react';
import bgInput from '../assets/images/bginput.jpg'
import sorteios from '../data/sorteios.json'

const Input = (props: any) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.length >= 6) {
      const amigoSecreto = Object.keys(sorteios).find((el) => newValue === el);
      if (amigoSecreto) {
        console.log((sorteios as any)[amigoSecreto]);
        props.setAmigoSecreto(amigoSecreto)
      } else {
        const passSub = document.getElementById('passSub');

        if (passSub) {

          passSub.innerText = 'Senha não encontrada!';
        }
      }
    } else {
      const passSub = document.getElementById('passSub');
      if (passSub) {

        passSub.innerText = 'Coloque a senha de 6 digitos que você recebeu!';
      }
    }
  };

  return (
    <div className='h-screen w-screen bg-red-100 flex items-center bg-bginput bg-no-repeat bg-cover'>
      <div className="max-w-md mx-auto bg rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-4">
            <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg text-center">
              <h1 className="text-4xl font-bold text-indigo-700 leading-tight">Qual a senha?</h1>
              <p className="mt-4 text-lg text-red-600 " id="passSub">Coloque a senha de 6 digitos que você recebeu!</p>
            </div>

            <input
              type="text"
              id="input"
              name="input"
              maxLength={6}
              value={inputValue}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Sua senha..."
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export { Input };

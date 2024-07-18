// src/Components/IntroGame.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import instructionsData from './instruction.json';

const IntroGame = () => {
  const { game, description, instructions, modules } = instructionsData;
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/game/start');
  };

  return (
    <div className="p-4 relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/012/742/301/original/abstract-finance-currency-money-exchange-moving-or-playing-lucky-draw-games-digital-finance-gold-coin-concept-currency-on-a-modern-background-golden-glow-vector.jpg')`,
          opacity: '0.5',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)', // Optional: Adds a blur effect to the background image
        }}
      ></div>
      <div className="relative bg-gray-100 p-6 rounded-lg shadow-md mb-4 z-10">
        <h2 className="text-2xl font-bold text-center mb-4">{game}</h2>
        <p className="text-lg text-center mb-4">{description}</p>

        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="mb-4">{instructions.overview}</p>

          <h3 className="text-lg font-semibold mb-2">Steps</h3>
          <ul className="list-disc ml-6 mb-4">
            {instructions.steps.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ul>

        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroGame;

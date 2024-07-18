import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import GameState from '../../State/GameState.jsx';
import axios from 'axios';

const Investments = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [currentValue, setCurrentValue] = useState(null);

  const [Game, setGame] = useRecoilState(GameState);
  

  const handleInvestment = async() => {
    const asset = Game.assets.find(asset => asset.name === selectedCategory); 
    if (asset) {
      setCurrentValue(asset.price); // Replace with actual logic
    }
    const response = await axios.post('http://localhost:3000/game/invest', {assetName : selectedCategory.name, amount:investmentAmount});
      setGame(response.data);
      console.log(response.data);
  };

  return (
    <div className="flex">
      {/* Left Side - Investment Categories */}
      <div className="w-1/4 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Investment Categories</h2>
          <div className="space-y-2">
            {Game.assets.map((asset) => (
              <div
                key={asset.name}
                className={`flex items-center border p-4 cursor-pointer ${
                  selectedCategory === asset.name ? 'bg-blue-100' : 'bg-white'
                }`}
                onClick={() => setSelectedCategory(asset)}
              >
                <img
                  src={`/images/${asset.name.toLowerCase().replace(/\s+/g, '-')}-icon.png`} // Example: stock-market-icon.png
                  alt={`${asset.name} Icon`}
                  className="w-6 h-6 mr-2"
                />
                {asset.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Investment Form and Display */}
      <div className="w-3/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Investment Details</h2>
        {selectedCategory && (
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">{selectedCategory.name}</h3>
            <form className="mb-4">
              <label className="block mb-2">Enter Investment Amount:</label>
              <input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              />
            </form>
            <div className="mb-4">
              <p className="mb-2">Current Price:</p>
              <p className="font-semibold">{selectedCategory.price ? `Rs. ${selectedCategory.price}` : 'Select an investment category'}</p>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              onClick={handleInvestment}
            >
              Invest
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Investments;

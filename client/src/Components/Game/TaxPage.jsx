import React from 'react';
import { useRecoilValue } from 'recoil';
import GameState from '../../State/GameState.jsx';
import axios from 'axios';

const TaxPage = () => {
  const Game = useRecoilValue(GameState);
  const totalBalance = Game.balance || 0;
  const taxAmount = totalBalance * 0.3;
  const remainingAmount = totalBalance - taxAmount;

  const handlePayTax = async() =>{
    const response = await axios.get('http://localhost:3000/game/pay-income-tax');
    setGame(response.data);
  }

  return (
    <div className="tax-page flex flex-col items-center justify-start h-screen bg-purple-100 p-4">
      <div className="w-2/4 bg-white rounded-lg shadow-md p-8">
        <div className="border-b pb-4 mb-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Payable Tax</h2>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Total Balance:</span>
            <span className="text-green-700 font-semibold">Rs. {totalBalance.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Tax Amount (30%):</span>
            <span className="text-red-700 font-semibold">- Rs. {taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Remaining Amount:</span>
            <span className="text-blue-700 font-semibold">Rs. {remainingAmount.toFixed(2)}</span>
          </div>
        </div>
        
          <button onClick={handlePayTax} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
            Pay Income Tax
          </button>
      </div>
    </div>
  );
};

export default TaxPage;

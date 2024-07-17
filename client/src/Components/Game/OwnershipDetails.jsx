import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import GameState from '../../State/GameState.jsx';
import axios from 'axios';

const OwnershipDetails = () => {
  const [Game, setGame] = useRecoilState(GameState);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [amountToPay, setAmountToPay] = useState(0);
  const [selectedLiability, setSelectedLiability] = useState('');

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePayLiabilities = () => {
    if (selectedLiability && amountToPay > 0) {
      axios.post('http://localhost:3000/game/pay-off-liability', { liabilityName: selectedLiability, amount: amountToPay })
        .then(response => {
          console.log('Balance updated successfully');
          setGame(response.data);
        })
        .catch(error => {
          console.error('Error updating balance:', error);
        });

      setIsPopupOpen(false); // Close the popup
    } else {
      alert('Please select a liability and enter an amount to pay.');
    }
  };

  return (
    <div className="p-4 bg-white border rounded-lg shadow-md h-[92vh]">
      <h3 className="text-lg font-semibold mb-4">Ownership Details</h3>
      <div className='grid grid-cols-2 gap-6 px-10'>
        {/* Section 1: Liabilities */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Liabilities</h4>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly EMI</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Game.liabilities.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.totalvalue}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.monthyEmi}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleOpenPopup} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Pay Liabilities</button>
        </div>

        {/* Section 2: Assets */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Assets</h4>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly EMI</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Value</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Game.assets.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.monthlyEmi}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.totalValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold mb-4">Pay Liabilities</h4>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Liability</label>
              <select
                value={selectedLiability}
                onChange={(e) => setSelectedLiability(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>Select a liability</option>
                {Game.liabilities.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount to Pay</label>
              <input
                type="number"
                value={amountToPay}
                onChange={(e) => setAmountToPay(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handlePayLiabilities}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2"
              >
                Pay
              </button>
              <button
                onClick={handleClosePopup}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnershipDetails;

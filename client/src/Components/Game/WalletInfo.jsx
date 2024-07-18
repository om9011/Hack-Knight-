import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import GameState from '../../State/GameState.jsx';
import axios from 'axios';

const WalletInfo = () => {
  const [Game, setGame] = useRecoilState(GameState);
  const [incomeData] = useState(Game.monthlyIncome);
  const [expensesData] = useState(Game.monthlyExpenses);
  const [notification, setNotification] = useState(null);

  const handleCollectIncome = async() => {
    try {
      const response = await axios.get('http://localhost:3000/game/collect-monthly-income');
      setGame(response.data);
      console.log(Game);
      showNotification('Amount Credited Successfully', 'bg-green-500');
      
    } catch (error) {
      console.error('Error updating balance:', error);
    }
    showNotification('Amount Credited Successfully', 'bg-green-500');
  };

  const handlePayExpenses = async() => {
    try {
      const response = await axios.get('http://localhost:3000/game/pay-monthly-expenses');
      setGame(response.data);
      console.log(Game);
      showNotification('Amount Deducted Successfully', 'bg-red-500');
      
    } catch (error) {
      console.error('Error updating balance:', error);
    }
  };

  const showNotification = (message, backgroundColor) => {
    setNotification({ message, backgroundColor });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="p-4 bg-white border rounded-lg shadow-md h-[92vh]">
      <h3 className="text-3xl text-center font-semibold mb-4">Wallet Information</h3>
      <div className='grid grid-cols-2 gap-6 px-10'>
        {/* Section 1: Collecting Income */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Collecting Income</h4>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income Collect status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {incomeData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {Game.incomeCollected ? 'Collected' : 'Not Collected'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleCollectIncome} className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">Collect Income</button>
        </div>

        {/* Section 2: Pay Monthly Expenses */}
        <div>
        <h4 className="text-xl font-semibold mb-2">Pay Monthly Expenses</h4>
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {expensesData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {Game.expensePaid ? 'Paid' : 'Not Paid'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handlePayExpenses} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg" disabled={Game.expensePaid}>
            {Game.expensePaid ? 'Expenses Paid' : 'Pay Expenses'}
          </button>
          </div>
      </div>

      {/* Notification Popup */}
      {notification && (
        <div className={`fixed top-24 right-4 text-white py-2 px-4 rounded-md shadow-md ${notification.backgroundColor}`}>
          <div className="flex justify-between items-center gap-6">
            <p>{notification.message}</p>
            <button onClick={closeNotification} className="text-white">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletInfo;

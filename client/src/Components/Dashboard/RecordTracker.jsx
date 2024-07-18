import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [formData, setFormData] = useState({
    accountBalance: 0,
    date: '',
    time: '',
    category: '',
    amount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      "_id": {
        "$oid": new Date().getTime().toString(16) + Math.floor(1000*Math.random()).toString(16)
      },
      "Account Balance": parseFloat(formData.accountBalance),
      "Date": {
        "$date": formData.date + "T00:00:00.000Z"
      },
      "Time": formData.time,
      "Category": formData.category,
      "Amount": parseFloat(formData.amount)
    };
    console.log(formattedData);
    // You can send formattedData to your backend or handle it as needed
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="accountBalance" className="block text-sm font-medium text-gray-700">Account Balance</label>
          <input
            type="number"
            id="accountBalance"
            name="accountBalance"
            value={formData.accountBalance}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Track Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseTracker;

import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import transaction from './Transactions.Trans.json';
import Navbar from './Navbar';


const MainPage = () => {
  const transactions = transaction.map(trans => ({
    ...trans,
    Date: new Date(trans.Date.$date).toISOString().split('T')[0], // Convert MongoDB date format to ISO string and extract the date part
    Amount: parseFloat(trans.Amount), // Ensure Amount is a number
  }));

  console.log('Transactions:', transactions);

  // Process data for daily expenses
  const dailyExpenses = transactions.reduce((acc, transaction) => {
    const date = transaction.Date;
    const amount = transaction.Amount;
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date] += amount;
    return acc;
  }, {});

  const dailyData = Object.keys(dailyExpenses).map(date => ({
    date,
    amount: dailyExpenses[date],
  }));


  // Process data for category expenses
  const categoryExpenses = transactions.reduce((acc, transaction) => {
    const category = transaction.Category;
    const amount = transaction.Amount;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += amount;
    return acc;
  }, {});

  const categoryData = Object.keys(categoryExpenses).map(category => ({
    category,
    amount: categoryExpenses[category],
  }));


  return (
    <>
    <Navbar/>
    <div className="flex flex-col bg-gray-100 items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Transaction Visualization</h1>
      <div className='w-full flex items-center justify-center'>
      <div className="w-full bg-white rounded-md border p-4 m-2">
        <h2 className="text-xl text-center font-semibold mb-2">Daily Expenses</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={dailyData}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="w-full bg-white rounded-md border p-4 m-2">
        <h2 className="text-xl text-center font-semibold mb-2">Category Expenses</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
    </>
  );
};

export default MainPage;

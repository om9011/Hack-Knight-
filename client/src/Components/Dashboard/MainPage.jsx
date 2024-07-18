import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import transaction from './Transactions.Trans.json';
import Navbar from './Navbar';

const MainPage = () => {
  const initialBalance = transaction[transaction.length -1]['Account Balance']; // Set an initial balance

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
  

  // Calculate total expenditure
  const totalExpenditure = transactions.reduce((acc, transaction) => acc + transaction.Amount, 0);


  // Colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <Navbar />
      <div className='flex '>
        {/* Total Expenditure Card */}
        <div className="w-full bg-white rounded-md border p-4 py-20 m-2">
          <h2 className="text-3xl text-center font-semibold mb-2">Total Expenditure</h2>
          <div className="text-center text-3xl font-bold text-red-500">
            Rs. {totalExpenditure.toFixed(2)}
          </div>
        </div>

        {/* Remaining Balance Card */}
        <div className="w-full bg-white rounded-md border p-4 py-20 m-2">
          <h2 className="text-3xl text-center font-semibold mb-2">Remaining Balance</h2>
          <div className="text-center text-3xl font-bold text-green-500">
            Rs. {initialBalance.toFixed(2)}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white items-center p-4">
        <h1 className="text-3xl font-bold mb-4">Transaction Visualization</h1>
        <div className='w-full flex flex-wrap items-center justify-center'>
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
              <PieChart>
                <Pie 
                  data={categoryData} 
                  dataKey="amount" 
                  nameKey="category" 
                  cx="50%" 
                  cy="50%" 
                  outerRadius={150} 
                  fill="#8884d8"
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          

        </div>
      </div>
    </>
  );
};

export default MainPage;

import React from 'react';
import { useRecoilState } from 'recoil';
import GameState from '../../State/GameState.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TaxPage from './TaxPage.jsx';


const Main = () => {
    const [Game, setGame] = useRecoilState(GameState);

    const handleNextMonth = async() =>{
      const response = await axios.get('http://localhost:3000/game/nextmonth');
      setGame(response.data); 
    }

    

  return (
    <div className='flex bg-purple-100 h-[92vh] w-full justify-center items-center'>
      <div className="main p-4 w-4/5">
        <h2 className="text-2xl text-center font-bold mb-4">Welcome to Your Game</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Wallet Info Section */}
          <div className="section">
            <div className="bg-white border p-4 rounded-lg shadow-md grid grid-cols-1 gap-4 h-[300px]">
              <div>
                <img src="https://www.antiersolutions.com/wp-content/uploads/2023/11/Wallet_Cash_550px.gif" alt="Wallet Info" className="mb-4 rounded-lg w-16" />
                <h3 className="text-xl font-semibold mb-2">Wallet Info</h3>
                <p className="text-gray-700 mb-4">Manage your wallet information here.</p>
              </div>
              <div className="flex items-center justify-center">
              <Link to="/game/wallet-info" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                  Go to Wallet Info
                </Link>
              </div>
            </div>
          </div>

          {/* Investments Section */}
          <div className="section">
            <div className="bg-white border p-4 rounded-lg shadow-md grid grid-cols-1 gap-4 h-[300px]">
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/7656/7656472.png" alt="Investments" className="w-16 mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold mb-2">Investments</h3>
                <p className="text-gray-700 mb-4">View and manage your investments.</p>
              </div>
              <Link to="/game/investments" className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Go to Investments</button>
              </Link>
            </div>
          </div>

          {/* Ownership Details Section */}
          <div className="section">
            <div className="bg-white border p-4 rounded-lg shadow-md grid grid-cols-1 gap-4 h-[300px]">
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/3967/3967122.png" alt="Ownership Details" className="w-16 mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold mb-2">Ownership Details</h3>
                <p className="text-gray-700 mb-4">Explore your assets and liabilities.</p>
              </div>
              <Link to="/game/ownership-details" className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Go to Ownership Details</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Go to Next Month Button */}
        <div className="mt-8 flex justify-center">
          <button onClick={handleNextMonth} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
            Go to Next Month
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

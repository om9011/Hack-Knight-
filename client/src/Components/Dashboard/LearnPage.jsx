import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import References from './References'; // Update the path if necessary
import NewsSection from './NewsSection'; // Import NewsSection component

const LearnPage = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/game');
  };

  return (
    <div className="p-4">
      {/* Game Section */}
      <div className="mb-8 p-4">
        <h2 className="text-xl text-center font-bold mb-4">Game Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-lg flex flex-col items-center">
            <img src="https://dypdvfcjkqkg2.cloudfront.net/large/1129522-2727.jpg" alt="Finanzo" className="w-full h-40 object-cover rounded-lg mb-4" />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              onClick={handlePlayClick}
            >
              Play
            </button>
          </div>
        </div>
      </div>
      <hr className="my-8 border-2 border-gray-400"  />

      {/* Recommended Videos Section */}
      <div className="mb-8 p-4">
        <h2 className="text-xl text-center font-bold mb-4">Recommended Videos Section</h2>
        <div className="mt-4 text-right">
          <Link to="/main/learn/video" className="text-blue-500 hover:underline">
            View All
          </Link>
        </div>
        <References maxDisplay={3} />
      </div>
      <hr className="my-8 border-2 border-gray-400"  />

      {/* News Section */}
      <div className="mb-8 p-4">
        <h2 className="text-xl text-center font-bold mb-4">NEWS Section</h2>
        <div className="mt-4 text-right">
          <Link to="/main/learn/news" className="text-blue-500 hover:underline">
            View All News
          </Link>
        </div>
        <NewsSection maxDisplay={3} />
      </div>
      <hr className="my-8 border-2 border-gray-400"  />
    </div>
  );
};

export default LearnPage;

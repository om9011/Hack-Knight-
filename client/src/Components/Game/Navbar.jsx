import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import GameState from '../../State/GameState.jsx';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ children }) => {
  const [Game, setGame] = useRecoilState(GameState);
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [newsIndex, setNewsIndex] = useState(0);
  const [newsContent, setNewsContent] = useState('');
  const [showHint, setShowHint] = useState(false); // State to control hint display

  // Simulate fetching news content (replace with actual data fetching logic)
  const fetchNewsContent = () => {
    if (Game.news && Game.news.length > 0) {
      const newsItem = Game.news[Game.monthNumber][newsIndex]; // Assuming Game.news is structured correctly
      return newsItem || '';
    }
    return '';
  };

  // Simulate fetching hint content (replace with actual hint logic)
  const fetchHintContent = () => {
    return Game.hints[Game.monthNumber]; // Replace with your hint content logic
  };

  useEffect(() => {
    // Automatically show popup every 3 seconds
    const popupTimer = setTimeout(() => {
      const content = fetchNewsContent();
      setNewsContent(content);
    }, 3000);

    return () => clearTimeout(popupTimer);
  }, []); // Only runs once on component mount

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page
  };

  const handleLeftClick = () => {
    setNewsIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? Game.news[Game.monthNumber].length - 1 : prevIndex - 1;
      const content = fetchNewsContent(newIndex);
      setNewsContent(content);
      return newIndex;
    });
  };

  const handleRightClick = () => {
    setNewsIndex((prevIndex) => {
      const newIndex = prevIndex === Game.news[Game.monthNumber].length - 1 ? 0 : prevIndex + 1;
      const content = fetchNewsContent(newIndex);
      setNewsContent(content);
      return newIndex;
    });
  };

  const handleHintClick = () => {
    const hintContent = fetchHintContent();
    alert(hintContent); // Replace with your preferred way of displaying the hint
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <nav className="p-4 border-b border-black">
        <div className="flex items-center justify-between">
          <button
            onClick={handleBackClick}
            className="font-semibold px-4 py-2 border-black border rounded-md"
          >
            Back
          </button>
          <div className="font-semibold">
            Month: {Game.monthNumber} / {Game.totalMonths} Completed
          </div>
          <div className="flex items-center gap-6">
            <div className="font-semibold px-4 py-2 border-black border rounded-md">
              Balance: {Game.balance.toFixed(2)}
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-9 cursor-pointer"
            />
            <div className='absolute top-20'>
            <img
              src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-40-321_512.gif"
              className="w-24 cursor-pointer "
              onClick={() => setShowPopup(true)}
            />
            <h1 className='-mt-4 text-center font-semibold'>News Paper</h1>
            </div>
          </div>
        </div>
      </nav>

      {children}

      {/* Popup for News */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-9/12 max-w-lg relative">
            <button
              className="absolute bg-red-600 p-1 px-2 rounded-full top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closePopup}
            >
              X
            </button>
            <h2 className="text-lg font-semibold mb-4">Finance News</h2>
            <div className="flex items-center justify-between gap-5">
              <img
                src="https://static-00.iconduck.com/assets.00/arrow-circle-left-icon-512x512-h10w1fxf.png"
                className="w-9 cursor-pointer"
                onClick={handleLeftClick}
              />
              <p>{newsContent}</p>
              <img
                src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-1024x1024-vd5nvvdh.png"
                className="w-9 cursor-pointer"
                onClick={handleRightClick}
              />
            </div>
            {/* Hint button */}
            <div className='flex justify-center mt-4'>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={handleHintClick}
              >
                Show Hint
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

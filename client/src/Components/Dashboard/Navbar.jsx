import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="w-full border bg-white shadow-md p-4 flex justify-between items-center mb-4">
      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md">
      <FontAwesomeIcon icon={faSearch} className="mr-3" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Profile Picture */}
      <div className="ml-auto">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;

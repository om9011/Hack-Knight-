import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faHome, faGraduationCap, faWallet } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ children }) => {
    const menuItems = [
      {
        path: "/",
        name: "Home",
        icon: faHome,
      },
      {
        path: "/",
        name: "Learn",
        icon: faGraduationCap,
      },
      {
        path: "/dashboard/grades",
        name: "Expenses Tracker",
        icon: faWallet,
      },
      {
        path: "/game",
        name: "Financial Education Game",
        icon: faWallet,
      },
    ];

    return (
        <div className='flex h-screen p-1'>
            <div className="w-1/4 h-full border rounded-md flex flex-col p-4 m-3">
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index} className="flex items-center border p-2 my-2 hover:bg-gray-700 rounded-lg">
                        <FontAwesomeIcon icon={item.icon} className="mr-3" />
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className='w-full border rounded-md p-4 m-3'>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;

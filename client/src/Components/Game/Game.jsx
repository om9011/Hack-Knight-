import React from 'react';
import { RecoilRoot } from 'recoil';
import { Routes, Route } from 'react-router-dom';
import WalletInfo from './WalletInfo';
import Navbar from './Navbar';
import OwnershipDetails from './OwnershipDetails';
import Investments from './Investments.jsx';
import Main from './Main';


const Game = () => {
  return (
    <>
    <Navbar >
        <Routes>
          <Route path="/" element={<Main  />} />
          <Route path="/wallet-info" element={<WalletInfo />} />
          {/* <Route path="/monthly-expenses" element={<MonthlyExpenses />} /> */}
          <Route path="/investments" element={<Investments />} />
          <Route path="/ownership-details" element={<OwnershipDetails />} />
        </Routes>
        </Navbar>
    </>
  );
};

export default Game;

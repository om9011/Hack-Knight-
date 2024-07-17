import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Components/Game/Game'
import WalletInfo from './Components/Game/WalletInfo';
import { RecoilRoot } from 'recoil';
import Navbar from './Components/Game/Navbar';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/game/wallet-info" element={<WalletInfo />} />
          {/* <Route path="/monthly-expenses" element={<MonthlyExpenses />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/ownership-details" element={<OwnershipDetails />} /> */}
        </Routes>
      </Router></RecoilRoot>
  )
}

export default App

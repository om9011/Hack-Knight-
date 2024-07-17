import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WalletInfo from './Components/Game/WalletInfo';
import { RecoilRoot } from 'recoil';
import Navbar from './Components/Game/Navbar';
import OwnershipDetails from './Components/Game/OwnershipDetails';
import Main from './Components/Game/Main';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/game" element={<Main  />} />
          <Route path="/game/wallet-info" element={<WalletInfo />} />
          {/* <Route path="/monthly-expenses" element={<MonthlyExpenses />} />
          <Route path="/investments" element={<Investments />} /> */}
          <Route path="/game/ownership-details" element={<OwnershipDetails />} />
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App

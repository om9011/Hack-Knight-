import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';


import Game from './Components/Game/Game';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
        <Route path='/' element={<Dashboard />} /> 
          <Route path='/game/*' element={<Game />} />
          {/* <Route path='/expense-tracker' element={} />  */}
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App

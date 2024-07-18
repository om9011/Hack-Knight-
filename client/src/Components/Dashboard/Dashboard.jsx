import React from 'react'
import Sidebar from './Sidebar'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <Sidebar >
        <Routes>
          <Route path="/" element={<MainPage  />} />
        </Routes>
    </Sidebar>
    </>
  )
}

export default Dashboard
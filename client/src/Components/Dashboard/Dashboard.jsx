import React from 'react'
import Sidebar from './Sidebar'
import MainPage from './MainPage'
import LearnPage from './LearnPage.jsx'
import LearnVideoPage from './LearnVideoPage.jsx'
import NewsSection from './NewsSection.jsx';
import Scholarship from './Scholarship.jsx';
import RecordTracker from './RecordTracker.jsx';
import { Route, Routes } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <Sidebar >
        <Routes>
          <Route path="/" element={<MainPage  />} />
          <Route path="/learn" element={<LearnPage  />} />
          <Route path="/learn/video" element={<LearnVideoPage  />} />
          <Route path="/tracker" element={<RecordTracker  />} />
          <Route path="/learn/news" element={<NewsSection />} />
          <Route path="/scholarship" element={<Scholarship />} />
        </Routes>
    </Sidebar>
    </>
  )
}

export default Dashboard
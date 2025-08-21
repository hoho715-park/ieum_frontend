import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import QsccLanding from './pages/QSCC/QsccLanding'
import WhatIsQscc from './pages/QSCC/about/WhatIsQscc'
import Test from './pages/QSCC/test/Test'
import HomePage from './pages/home/HomePage'
import AboutUsPage from './pages/about-us/AboutUs'
import Layout from './components/layouts/Layout'


export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* About Us */}
        <Route path="/about" element={<AboutUsPage />} />

        {/* QSCC Routes */}
        <Route path="/qscc" element={<QsccLanding />} />
        <Route path="/qscc/whatisqscc" element={<WhatIsQscc />} />
        <Route path="/qscc/test" element={<Test />} />
        
        <Route path="/test" element={<Navigate to="/qscc" replace />} />
      </Routes>
    </Layout>
  )
}

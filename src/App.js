import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import QsccLanding from './pages/QSCC/QsccLanding'
import WhatIsQscc from './pages/QSCC/about/WhatIsQscc'
import Test from './pages/QSCC/test/Test'
import HomePage from './pages/home/HomePage'


export default function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/qscc" element={<QsccLanding />} />
      <Route path="/qscc/whatisqscc" element={<WhatIsQscc />} />
      <Route path="/qscc/test" element={<Test />} />
      
      <Route path="/test" element={<Navigate to="/qscc" replace />} />
    </Routes>
  )
}

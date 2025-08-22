import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import QsccLanding from "./pages/QSCC/QsccLanding";
import WhatIsQscc from "./pages/QSCC/about/WhatIsQscc";
import Test from "./pages/QSCC/test/Test";
import HomePage from "./pages/home/HomePage";
import AboutUsPage from "./pages/about-us/AboutUs";
import Layout from "./components/layouts/Layout";
import Start from "./pages/start/Start"; // 2~3초 후 /main으로 이동

export default function App() {
  return (
    <Routes>
      {/* 스플래시: 레이아웃 없이 */}
      <Route path="/" element={<Start />} />

      {/* 메인/서브: 각 라우트에서 Layout로 감싸기 */}
      <Route path="/main" element={<Layout><HomePage /></Layout>} />
      <Route path="/about" element={<Layout><AboutUsPage /></Layout>} />

      {/* QSCC */}
      <Route path="/qscc" element={<Layout><QsccLanding /></Layout>} />
      <Route path="/qscc/whatisqscc" element={<Layout><WhatIsQscc /></Layout>} />
      <Route path="/qscc/test" element={<Layout><Test /></Layout>} />

      {/* 구 주소 리다이렉트 */}
      <Route path="/test" element={<Navigate to="/qscc" replace />} />

      {/* 나머지는 메인으로 */}
      <Route path="*" element={<Navigate to="/main" replace />} />
    </Routes>
  );
}

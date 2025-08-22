// src/components/layouts/Header.js
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  const active = (to) => pathname.startsWith(to) ? { textDecoration: 'underline' } : {}

  return (
    <header className="qscc-header">
      <div className="header-inner">
        <Link to="/main" className="logo" aria-label="ieum 로고">
          <img src="/images/logo.png" alt="logo" />
        </Link>

        <div className="gap-166" aria-hidden="true" />

        <nav className="gnb" aria-label="주 메뉴">
          <ul>
            <li><Link to="/about" style={active('/about')}>About Us</Link></li>
            <li><Link to="/test"  style={active('/test')}>Test</Link></li>
            <li><Link to="/input" style={active('/input')}>Input</Link></li>
            <li><Link to="/chat"  style={active('/chat')}>AI Chat</Link></li>
            <li><Link to="/more"  style={active('/more')}>More</Link></li>
          </ul>
        </nav>

        <div className="gap-238" aria-hidden="true" />

        <button className="profile" type="button" aria-label="프로필">
          <img src="/images/profile.svg" alt="" />
        </button>
      </div>
    </header>
  )
}

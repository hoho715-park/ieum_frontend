import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useDropdownMenu from '../../hooks/menu/useDropdownMenu';
import navItems from '../../constants/menu/navItems';

export default function Header() {
  const { pathname } = useLocation();
  const active = (to) => (pathname.startsWith(to) ? { textDecoration: 'underline' } : {});
  const { open, close, isOpen, rootRef, onKeyDown, onBlurGroup } = useDropdownMenu();

  return (
    <header className="qscc-header" onKeyDown={onKeyDown}>
      <div className="header-inner" ref={rootRef}>
        <Link to="/main" className="logo" aria-label="ieum 로고">
          <img src="/images/logo.png" alt="logo" />
        </Link>

        <div className="gap-166" aria-hidden="true" />

        <nav className="gnb" aria-label="주 메뉴">
          <ul className="gnb__list">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${isOpen(item.id) ? 'is-open' : ''}`}
                tabIndex={0}
                onMouseEnter={() => open(item.id)}
                onMouseLeave={close}
                onFocus={() => open(item.id)}
                onBlur={onBlurGroup}
              >
                <Link
                  to={item.to}
                  className="nav-link"
                  style={active(item.to)}
                  aria-haspopup="menu"
                  aria-expanded={isOpen(item.id)}
                >
                  {item.label}
                </Link>

                {/* 하위 메뉴 */}
                <div
                  className="dropdown"
                  role="menu"
                  aria-label={`${item.label} submenu`}
                  onClickCapture={close}   // 항목 클릭 즉시 닫기
                >
                  {item.children.map((sub) => (
                    <Link key={sub.to} to={sub.to} role="menuitem" className={sub.strong ? 'is-strong' : ''}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="gap-238" aria-hidden="true" />

        <button className="profile" type="button" aria-label="프로필">
          <img src="/images/profile.svg" alt="" />
        </button>
      </div>
    </header>
  );
}

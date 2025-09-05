// components/layouts/footer.js
import React from "react";
import "./Footer.css"; // CSS 파일

const LOGO_SRC = "/images/footer/ieum_logo.png";           
const INSTAGRAM_ICON_SRC = "/images/footer/sns_icon.png";  
const MAIL_ICON_SRC = "/images/footer/email_icon.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* 좌측: 로고(69x91) + ieum */}
        <div className="footer__left">
          <img
            src={LOGO_SRC}
            alt="ieum 로고"
            width="69"
            height="91"
            className="footer__logo"
          />
        </div>

        {/* 우측: 상단 아이콘 / 하단 링크·카피 */}
        <div className="footer__right">
          <div className="footer__icons">
            <a
              href="https://instagram.com/ieum" // 실제 계정으로 교체
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={INSTAGRAM_ICON_SRC} alt="" className="footer__icon" />
            </a>
            <a
              href="mailto:contact@ieum.example" // 실제 메일로 교체
              aria-label="Email"
            >
              <img src={MAIL_ICON_SRC} alt="" className="footer__icon" />
            </a>
          </div>

          <div className="footer__bottom">
            <div className="footer__links">
              <a href="/support">고객센터</a>
              <a href="/privacy">개인정보처리방침</a>
            </div>
            <div className="footer__copy">©{year} IEUM. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

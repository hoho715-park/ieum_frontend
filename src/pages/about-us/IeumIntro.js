// src/pages/about-us/IeumIntro.js
import React from "react";
import "./IeumIntro.css";

/** public 하위 자산 경로 헬퍼 (서브경로 배포 대응) */
const withBase = (p) =>
  `${(process.env.PUBLIC_URL || "").replace(/\/$/, "")}${p}`;

/** 로고 이미지 경로 (필요하면 파일명/경로만 바꿔) */
const LOGO_URL = withBase("/images/footer/ieum_logo.png");

export default function IeumIntro() {
  return (
    <main className="ieum-intro">
      <section className="ieum-hero" aria-label="이음 소개">
        <img src={LOGO_URL} alt="IEUM 로고" className="ieum-hero__logo" />

        <h1 className="ieum-hero__title">“이음; 나의 체질과 하루를 잇다”</h1>
        <p className="ieum-hero__subtitle">
          건강한 삶을 위한 맞춤형 체질 분석, 누구나 쉽게 경험할 수 있는 건강 관리 플랫폼
        </p>
      </section>
    </main>
  );
}

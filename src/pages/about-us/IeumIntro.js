import React from "react";
import "./IeumIntro.css";

/** public 하위 자산 경로 헬퍼 */
const withBase = (p) =>
  `${(process.env.PUBLIC_URL || "").replace(/\/$/, "")}${p}`;

/** 로고/스타트 이미지 경로 (경로만 네 파일에 맞게 수정) */
const LOGO_URL = withBase("/images/aboutus/ieum_logo.png");
const START_IMG_URL = withBase("/images/aboutus/start.png"); // ← 준비한 이미지 경로로 교체

export default function IeumIntro() {
  return (
    <main className="ieum-intro">
      {/* 상단 인트로 */}
      <section className="ieum-hero" aria-label="이음 소개">
        <img src={LOGO_URL} alt="IEUM 로고" className="ieum-hero__logo" />

        <h1 className="ieum-hero__title">“이음; 나의 체질과 하루를 잇다”</h1>
        <p className="ieum-hero__subtitle">
          건강한 삶을 위한 맞춤형 체질 분석, 누구나 쉽게 경험할 수 있는 건강 관리 플랫폼
        </p>
      </section>

      {/* Why IEUM? 섹션 */}
      <section className="ieum-band" aria-label="Why IEUM">
        <div className="ieum-band__inner">
          <img src={LOGO_URL} alt="IEUM 로고" className="ieum-band__logo" />
          <div className="ieum-band__content">
            <h2 className="ieum-band__title">
              Why<br />IEUM?
            </h2>
            <p className="ieum-band__desc">
              사상체질, 손바닥 수치, 생활 습관, 식습관, 운동법까지<br />
              모든 요소들을 당신의 체질과{" "}
              <span className="accent">이어주는</span> 추천 기반 서비스입니다.
            </p>
          </div>
        </div>
      </section>

      {/*Why Start? 섹션 */}
      <section className="ieum-start" aria-label="Why Start">
        <div className="ieum-start__inner">
          <div className="ieum-start__text">
            <h2 className="ieum-start__title">
              Why<br />
              <span>Start?</span>
            </h2>
            <p className="ieum-start__desc">
              건강 정보를 찾아도 나에게 맞는지 모르겠죠?<br />
              <span className="text-brand">이음은</span> 손바닥 5포인트 측정과 설문을 결합해<br />
              내 체질을 수치로 보여주고,<br />
              그에 맞춘 식사법과 예방 팁을 제시합니다.<br />
              오늘부터 나만의 생활 루틴을 시작해 보세요.
            </p>
          </div>

          <img
            src={START_IMG_URL}
            alt="시작을 상징하는 이미지"
            className="ieum-start__image"
          />
        </div>
      </section>

    {/* ▼ About LOGO 섹션 */}
    <section className="ieum-logo" aria-label="About LOGO">
    <div className="ieum-logo__inner">
        <h2 className="ieum-logo__heading">About<br />LOGO</h2>

        <div className="ieum-logo__diagram">
        {/* 중앙 로고 */}
        <img src={LOGO_URL} alt="IEUM 로고" className="ieum-logo__center" />

        {/* 좌상단 */}
        <div className="anno anno--tl">
            <div className="anno__icon anno__infinity" aria-hidden>∞</div>
            <h3 className="anno__title">곡선과 연결 구조</h3>
            <p className="anno__desc">
            사람의 체질, 손바닥 수치, 음식, 주류, 운동까지<br />
            서로 유기적으로 연결되어 있는 구조를 상징
            </p>
        </div>

        {/* 우상단 */}
        <div className="anno anno--tr">
            <span className="anno__dot anno__dot--black" aria-hidden />
            <h3 className="anno__title">점</h3>
            <p className="anno__desc">
            흩어진 신호가 하나의 의미 있는<br />
            패턴이 되는 순간을 상징
            </p>
        </div>

        {/* 좌하단 */}
        <div className="anno anno--bl">
            <span className="anno__dot anno__dot--purple" aria-hidden />
            <h3 className="anno__title">보라색</h3>
            <p className="anno__desc">
            조화로운 치유: <strong>보라색</strong>은 붉은색의 에너지와 푸른색의 차분함이 만나
            완벽한 균형을 이루는 색입니다. 이는 이음이 지향하는 조영학부의 밸런스를 의미합니다.
            </p>
        </div>

        {/* 우하단 */}
        <div className="anno anno--br">
            <span className="anno__dot anno__dot--green" aria-hidden />
            <h3 className="anno__title">초록색</h3>
            <p className="anno__desc">
            • 의학계열 상징: <strong>초록색</strong>은 의료, 건강, 회복을 상징합니다. 병원/약국/의료 로고에서 자주 쓰이며
            안정감과 치유를 직관적으로 떠올리게 합니다.<br />
            • 자연과 생명력: <strong>초록색</strong>은 풀과 나무의 색이자 몸이 회복되는 생명력의 색입니다.
            </p>
        </div>
        </div>
    </div>
    </section>

    </main>
  );
}

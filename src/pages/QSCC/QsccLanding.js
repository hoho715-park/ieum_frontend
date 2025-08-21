import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/layouts/Header'

export default function QsccLanding() {
  return (
    <>
      <Header />
      <main className="has-fixed-header">
        <section className="qscc-landing">
          <div className="main-image-wrap">
            <img
              className="main-image"
              src="/images/qscc/main-image.png"
              alt="나의 사상체질은? 사상체질 분석테스트"
            />
          </div>

          <Link className="start-btn" role="button" to="/qscc/test">
            테스트 시작하기
          </Link>

          <Link className="subcopy" to="/qscc/whatisqscc">
            QSCCII 설문이란?
          </Link>
        </section>
      </main>
    </>
  )
}

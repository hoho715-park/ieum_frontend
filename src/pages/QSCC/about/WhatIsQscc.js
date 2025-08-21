import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/layouts/Header'

export default function WhatIsQscc() {
  return (
    <>
      <Header />
      <main className="has-fixed-header">
        <section className="qscc-info">
          <img
            className="qscc-title"
            src="/images/qscc/whatisqscc/qscc설문이란_ 제목.png"
            alt="QSCCII 설문이란?"
          />

          <div className="qscc-questions">
            <img className="q1" src="/images/qscc/whatisqscc/question1.png" alt="Question1" />
            <img className="q2" src="/images/qscc/whatisqscc/question2.png" alt="Question2" />
            <img className="q3" src="/images/qscc/whatisqscc/question3.png" alt="Question3" />

            <Link to="/qscc/test" className="start-btn" role="button">
              테스트 시작하기
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

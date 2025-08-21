import React, { useMemo, useRef, useState } from 'react'
import Header from '../../../components/layouts/Header'
import { TYPE_COLOR } from '../../../constants/QSCC/constants'
import useQsccData from '../../../hooks/QSCC/useQsccData'
import useQsccStorage from '../../../hooks/QSCC/useQsccStorage'
import useHashStepper from '../../../hooks/QSCC/useHashStepper'
import { computeResult, getUnansweredList } from '../../../utils/QSCC/utils'
import Pager from '../../../components/QSCC/Pager'
import Donut from '../../../components/QSCC/Donut'
import Bingo from '../../../components/QSCC/Bingo'
import Overlay, { Close, modalBox, doneBtn, uaNums, uaBtn, line } from '../../../components/QSCC/Overlay'
import { Link } from 'react-router-dom'

export default function Test() {
  const { data, loading } = useQsccData()
  const { answers, setAnswers, clear } = useQsccStorage()

  const total = data?.questions?.length || 1
  const [idx, setIdx] = useHashStepper(total)

  const [uaOpen, setUaOpen] = useState(false)
  const [doneOpen, setDoneOpen] = useState(false)
  const uaRef = useRef([])

  const q = data?.questions?.[idx]
  const types = useMemo(() => data?.types || [], [data])

  function onChoose(q, opt) {
    const next = { ...answers, [q.id]: opt.id }
    setAnswers(next)

    setTimeout(() => {
      const missing = getUnansweredList(data, next)
      if (idx < total - 1) setIdx(idx + 1)
      else if (missing.length) { uaRef.current = missing; setUaOpen(true) }
      else setDoneOpen(true)
    }, 120)
  }

  const allDone = data && getUnansweredList(data, answers).length === 0 && Object.keys(answers).length > 0
  const { winner, percentages } = computeResult(data, answers)
  const winnerColor = TYPE_COLOR[winner] || '#111'

  if (loading) {
    return (
      <>
        <Header />
        <main className="has-fixed-header">
          <section className="page qscc-test">
            <div className="q-card"><p className="q-text">로딩 중…</p></div>
          </section>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="has-fixed-header">
        <section className="page qscc-test">
          <div className="wrap">
            {/* 문제 카드 */}
            {!allDone && q && (
              <div className="q-card">
                <h2 className="q-title">{q.title || `Q${q.id}.`}</h2>
                <p className="q-text">{q.text || ''}</p>

                <div className="opts-grid" style={{ '--cols': String((q.options || []).length) }}>
                  {(q.options || []).map((opt, i) => {
                    const selected = answers[q.id] === opt.id
                    return (
                      <div key={opt.id} className={`opt-card${selected ? ' selected' : ''}`} onClick={() => onChoose(q, opt)}>
                        <div className="opt-img"><img src={opt.image?.src || ''} alt={opt.image?.alt || opt.label} /></div>
                        <div className="opt-meta">
                          <div className="opt-mark">{String.fromCharCode(97 + i)}.</div>
                          <div className="opt-title">{opt.label || ''}</div>
                        </div>
                        <ul className="opt-desc">
                          {Array.isArray(opt.desc)
                            ? opt.desc.map((t, k) => t && <li key={k}>{t}</li>)
                            : (typeof opt.desc === 'string' ? opt.desc.split(/\n+/).map((t, k) => t && <li key={k}>{t}</li>) : null)}
                        </ul>
                      </div>
                    )
                  })}
                </div>

                <Pager total={total} cur={idx + 1} answered={answers} onJump={(n) => setIdx(n - 1)} />
              </div>
            )}

            {/* 결과 카드: 팝업이 열려 있을 땐 숨김 */}
            {allDone && !doneOpen && (
              <div className="q-card" id="result">
                <div className="result-title">
                  당신은 <span style={{ color: winnerColor, fontWeight: 900 }}>“{winner}”</span> 입니다.
                </div>
                <Donut percentages={percentages} />
                <Bingo type={winner} />
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 18 }}>
                  <button className="btn btn-prev" onClick={() => { clear(); setIdx(0) }}>
                    처음부터 다시
                  </button>
                  <Link className="btn btn-next" to="/qscc/whatisqscc"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    솔루션 보기
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 미응답 팝업 */}
          {uaOpen && (
            <Overlay onClose={() => setUaOpen(false)}>
              <div style={modalBox}>
                <Close onClick={() => setUaOpen(false)} />
                <div style={{ fontSize: 48, marginBottom: 8 }}>⚠️</div>
                <div style={uaNums}>
                  {uaRef.current.map(n => (
                    <button key={n} style={uaBtn} onClick={() => { setUaOpen(false); setIdx(Number(n) - 1) }}>{n}번</button>
                  ))}
                </div>
                <div style={line}>문제를 답변하지 않았습니다.</div>
                <div style={line}>답변해주셔야 결과가 제공됩니다.</div>
              </div>
            </Overlay>
          )}

          {/* 완료 팝업 */}
          {doneOpen && (
            <Overlay onClose={() => setDoneOpen(false)}>
              <div style={modalBox}>
                <Close onClick={() => setDoneOpen(false)} />
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <div style={{ fontWeight: 900, fontSize: 28, lineHeight: 1.4, textAlign: 'center' }}>
                  모든 문제에 답변하셨습니다.<br />결과를 확인하시겠습니까?
                </div>
                <button style={doneBtn} onClick={() => setDoneOpen(false)}>결과보기</button>
              </div>
            </Overlay>
          )}
        </section>
      </main>
    </>
  )
}

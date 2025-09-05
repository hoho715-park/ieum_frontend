import React from 'react'
import { BINGO } from '../../constants/QSCC/constants'

export default function Bingo({ type }) {
  const raw = (BINGO[type] || []).slice(0, 25)
  while (raw.length < 25) raw.push('')
  return (
    <div className="qscc-bingo">
      <div className="bingo-head"><div className="bingo-title">{'<체질별 특징 빙고>'}</div></div>
      <div className="bingo-grid">
        {raw.map((t, i) => {
          const isCenter = i === 12
          return <div key={i} className={`bingo-cell${isCenter ? ' bingo-free' : ''}`}>{isCenter ? type : t}</div>
        })}
      </div>
    </div>
  )
}

import React from 'react'

export default function Pager({ total, cur, answered, onJump }) {
  const group = Math.floor((cur - 1) / 10)
  const start = group * 10 + 1
  const end = Math.min(start + 9, total)

  return (
    <div className="nav">
      <div className="pager">
        <button className="page-arrow" disabled={start <= 1} onClick={() => onJump(start - 10)}>‹</button>
        {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(n => {
          const isCurrent = n === cur
          const isDone = !!answered[n]
          const cls = isCurrent ? 'dot-current' : isDone ? 'dot-done' : 'dot-todo'
          return <button key={n} className={`page-dot ${cls}`} onClick={() => onJump(n)}>{n}</button>
        })}
        <button className="page-arrow" disabled={end >= total} onClick={() => onJump(start + 10)}>›</button>
      </div>
    </div>
  )
}

import React from 'react'

export default function Donut({ percentages }) {
  const ORDER = ['소음인', '태음인', '소양인', '태양인']
  const COLOR = { '소음인': '#67D2C6', '태음인': '#66B4F1', '소양인': '#F6D372', '태양인': '#FF7C9C' }
  const SIZE = 220, R = 80, SW = 28, CX = SIZE / 2, CY = SIZE / 2, CIRC = 2 * Math.PI * R

  let offset = 0
  const arcs = ORDER.map(t => {
    const pct = Math.max(0, percentages[t] || 0)
    const len = (pct / 100) * CIRC
    const el = (
      <circle key={t} r={R} cx={CX} cy={CY} fill="transparent"
        stroke={COLOR[t]} strokeWidth={SW}
        strokeDasharray={`${len} ${CIRC}`}
        strokeDashoffset={-offset}
        strokeLinecap="butt"
        transform={`rotate(-90 ${CX} ${CY})`} />
    )
    offset += len
    return el
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, margin: '24px 0 64px' }}>
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        {arcs}
        <circle r={R - SW / 2 - 2} cx={CX} cy={CY} fill="#fff" />
      </svg>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {ORDER.map(t => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '6px 14px' }}>
            <span style={{ width: 32, height: 12, borderRadius: 6, background: COLOR[t] }} />
            <span style={{ fontWeight: 700 }}>{t}</span>
            <span style={{ opacity: .8 }}>&nbsp;{percentages[t] || 0}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

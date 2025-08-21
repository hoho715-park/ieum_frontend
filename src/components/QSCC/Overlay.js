import React from 'react'

export default function Overlay({ children, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.30)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}
    >
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  )
}

export function Close({ onClick }) {
  return (
    <button onClick={onClick} aria-label="닫기"
      style={{ position: 'absolute', top: 18, right: 22, border: 'none', background: 'transparent', fontSize: 24, cursor: 'pointer', lineHeight: 1 }}>
      ✕
    </button>
  )
}

export const modalBox = {
  width: 836, height: 463, borderRadius: 52, background: '#B2B0E8',
  boxShadow: '0 10px 40px rgba(0,0,0,.25)', padding: 32, position: 'relative',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
}

export const doneBtn = {
  width: 436, height: 99, borderRadius: 49.5, background: '#FEFFC4', border: 'none',
  cursor: 'pointer', marginTop: 28, fontSize: 32, fontWeight: 900, color: '#000',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  boxShadow: '0 8px 16px rgba(0,0,0,.12)',
}

export const uaNums = {
  display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', alignItems: 'center',
  fontWeight: 800, fontSize: 22, color: '#D7263D', margin: '6px 0 10px',
}
export const uaBtn = { background: 'transparent', border: 'none', cursor: 'pointer', color: '#D7263D', textDecoration: 'underline', fontWeight: 800, fontSize: 22 }
export const line = { fontWeight: 800, fontSize: 35, color: '#000', marginTop: 6 }

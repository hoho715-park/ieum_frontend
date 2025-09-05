import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/** 해시(#q=번호) ↔ 현재 문항 인덱스 동기화 */
export default function useHashStepper(total = 1) {
  const { hash } = useLocation()
  const navigate = useNavigate()
  const [idx, _setIdx] = useState(0)

  // hash → idx
  useEffect(() => {
    const m = hash.match(/q=(\d+)/)
    if (!m) return
    const n = Math.min(Math.max(parseInt(m[1], 10), 1), total || 1) - 1
    _setIdx(n)
  }, [hash, total])

  // idx → hash
  const setIdx = (n) => {
    _setIdx(n)
    navigate({ hash: `#q=${n + 1}` }, { replace: true })
  }

  return [idx, setIdx]
}

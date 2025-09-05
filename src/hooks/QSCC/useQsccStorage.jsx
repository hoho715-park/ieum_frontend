import { useEffect, useState } from 'react'
import { STORAGE_KEY } from '../../constants/QSCC/constants'

export default function useQsccStorage() {
  const [answers, setAnswers] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY))?.answers || {} }
    catch { return {} }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers }))
  }, [answers])

  const clear = () => {
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
    setAnswers({})
  }

  return { answers, setAnswers, clear }
}

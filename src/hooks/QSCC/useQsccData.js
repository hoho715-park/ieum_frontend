import { useEffect, useState } from 'react'
import { FALLBACK } from '../../constants/QSCC/constants'

export default function useQsccData() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const r = await fetch('/data/qsccII.json', { cache: 'no-cache' })
        if (!r.ok) throw new Error()
        const json = await r.json()
        if (mounted) setData(json)
      } catch {
        if (mounted) setData(FALLBACK)
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => { mounted = false }
  }, [])

  return { data, loading }
}

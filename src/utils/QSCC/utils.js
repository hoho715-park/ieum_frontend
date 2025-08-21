// 채점/미응답 유틸

export function getUnansweredList(data, answers) {
  const arr = []
  ;(data?.questions || []).forEach((q, i) => {
    const id = (typeof q.id === 'number' || typeof q.id === 'string') ? q.id : (i + 1)
    if (!answers[q.id]) arr.push(Number(id))
  })
  return arr.sort((a, b) => a - b)
}

export function computeResult(data, answers) {
  const types = data?.types || []
  const totals = Object.fromEntries(types.map(t => [t, 0]))

  ;(data?.questions || []).forEach(q => {
    const chosen = answers[q.id]
    if (!chosen) return
    const opt = (q.options || []).find(o => o.id === chosen)
    if (!opt?.scores) return
    types.forEach(t => { totals[t] += Number(opt.scores[t] || 0) })
  })

  const max = types.length ? Math.max(...types.map(t => totals[t])) : 0
  const ties = types.filter(t => totals[t] === max)
  const pref = data?.scoring?.tieBreaker || types
  const winner = ties.length ? (ties.length > 1 ? (pref.find(t => ties.includes(t)) || ties[0]) : ties[0]) : null

  const sum = Object.values(totals).reduce((a, b) => a + b, 0)
  const percentages = Object.fromEntries(types.map(t => [t, sum ? Math.round((totals[t] / sum) * 100) : 0]))

  return { winner, totals, percentages }
}

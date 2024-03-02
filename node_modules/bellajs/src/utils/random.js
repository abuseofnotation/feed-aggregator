// utils / random

export const randint = (min = 0, max = 1e6) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const genid = (len = 32, prefix = '') => {
  let s = prefix
  for (let i = 0; i < len; i++) {
    const r = Math.random()
    const k = Math.floor(r * 36)
    const c = k.toString(36)
    s += (k > 9 && r > 0.3 && r < 0.7) ? c.toUpperCase() : c
  }
  return s.substring(0, len)
}

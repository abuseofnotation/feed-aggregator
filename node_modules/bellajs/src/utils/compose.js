// utils / compose

export const compose = (...fns) => {
  return fns.reduce((f, g) => (x) => f(g(x)))
}

// utils / pipe

export const pipe = (...fns) => {
  return fns.reduce((f, g) => (x) => g(f(x)))
}

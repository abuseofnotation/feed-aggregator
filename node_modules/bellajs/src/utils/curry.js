// utils / curry

export const curry = (fn) => {
  const totalArguments = fn.length
  const next = (argumentLength, rest) => {
    if (argumentLength > 0) {
      return (...args) => {
        return next(argumentLength - args.length, [...rest, ...args])
      }
    }
    return fn(...rest)
  }
  return next(totalArguments, [])
}

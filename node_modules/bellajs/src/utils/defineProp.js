// utils / defineProp

export const defineProp = (ob, key, val, config = {}) => {
  const {
    writable = false,
    configurable = false,
    enumerable = false,
  } = config
  Object.defineProperty(ob, key, {
    value: val,
    writable,
    configurable,
    enumerable,
  })
}

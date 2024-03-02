// utils / detection

const ob2Str = (val) => {
  return {}.toString.call(val)
}

export const isInteger = (val) => {
  return Number.isInteger(val)
}

export const isArray = (val) => {
  return Array.isArray(val)
}

export const isString = (val) => {
  return String(val) === val
}

export const isNumber = (val) => {
  return Number(val) === val
}

export const isBoolean = (val) => {
  return Boolean(val) === val
}

export const isNull = (val) => {
  return ob2Str(val) === '[object Null]'
}

export const isUndefined = (val) => {
  return ob2Str(val) === '[object Undefined]'
}

export const isNil = (val) => {
  return isUndefined(val) || isNull(val)
}

export const isFunction = (val) => {
  return ob2Str(val) === '[object Function]'
}

export const isObject = (val) => {
  return ob2Str(val) === '[object Object]' && !isArray(val)
}

export const isDate = (val) => {
  return val instanceof Date && !isNaN(val.valueOf())
}

export const isElement = (v) => {
  return ob2Str(v).match(/^\[object HTML\w*Element]$/) !== null
}

export const isLetter = (val) => {
  const re = /^[a-z]+$/i
  return isString(val) && re.test(val)
}

export const isEmail = (val) => {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  return isString(val) && re.test(val)
}

export const isEmpty = (val) => {
  return !val || isNil(val) ||
    (isString(val) && val === '') ||
    (isArray(val) && val.length === 0) ||
    (isObject(val) && Object.keys(val).length === 0)
}

export const hasProperty = (ob, k) => {
  if (!ob || !k) {
    return false
  }
  return Object.prototype.hasOwnProperty.call(ob, k)
}

/**
 * bellajs
 * @ndaidong
**/

import {
  isObject,
  isArray,
  isDate,
  isString,
  hasProperty
} from './utils/detection.js'

export const clone = (val, history = null) => {
  const stack = history || new Set()

  if (stack.has(val)) {
    return val
  }

  stack.add(val)

  if (isDate(val)) {
    return new Date(val.valueOf())
  }

  const copyObject = (o) => {
    const oo = Object.create({})
    for (const k in o) {
      if (hasProperty(o, k)) {
        oo[k] = clone(o[k], stack)
      }
    }
    return oo
  }

  const copyArray = (a) => {
    return [...a].map((e) => {
      if (isArray(e)) {
        return copyArray(e)
      } else if (isObject(e)) {
        return copyObject(e)
      }
      return clone(e, stack)
    })
  }

  if (isArray(val)) {
    return copyArray(val)
  }

  if (isObject(val)) {
    return copyObject(val)
  }

  return val
}

export const copies = (source, dest, matched = false, excepts = []) => {
  for (const k in source) {
    if (excepts.length > 0 && excepts.includes(k)) {
      continue // eslint-disable-line no-continue
    }
    if (!matched || (matched && hasProperty(dest, k))) {
      const oa = source[k]
      const ob = dest[k]
      if ((isObject(ob) && isObject(oa)) || (isArray(ob) && isArray(oa))) {
        dest[k] = copies(oa, dest[k], matched, excepts)
      } else {
        dest[k] = clone(oa)
      }
    }
  }
  return dest
}

export const unique = (arr = []) => {
  return [...new Set(arr)]
}

const fnSort = (a, b) => {
  return a > b ? 1 : (a < b ? -1 : 0)
}

export const sort = (arr = [], sorting = null) => {
  const tmp = [...arr]
  const fn = sorting || fnSort
  tmp.sort(fn)
  return tmp
}

export const sortBy = (arr = [], order = 1, key = '') => {
  if (!isString(key) || !hasProperty(arr[0], key)) {
    return arr
  }
  return sort(arr, (m, n) => {
    return m[key] > n[key] ? order : (m[key] < n[key] ? (-1 * order) : 0)
  })
}

export const shuffle = (arr = []) => {
  const input = [...arr]
  const output = []
  let inputLen = input.length
  while (inputLen > 0) {
    const index = Math.floor(Math.random() * inputLen)
    output.push(input.splice(index, 1)[0])
    inputLen--
  }
  return output
}

export const pick = (arr = [], count = 1) => {
  const a = shuffle(arr)
  const mc = Math.max(1, count)
  const c = Math.min(mc, a.length - 1)
  return a.splice(0, c)
}

export * from './utils/detection.js'
export * from './utils/string.js'
export * from './utils/random.js'
export * from './utils/date.js'

export * from './utils/curry.js'
export * from './utils/compose.js'
export * from './utils/pipe.js'
export * from './utils/maybe.js'

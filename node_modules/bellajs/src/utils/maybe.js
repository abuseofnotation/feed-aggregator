// utils / maybe

import {
  defineProp
} from './defineProp.js'

export const maybe = (val) => {
  const __val = val
  const isNil = () => {
    return __val === null || __val === undefined
  }
  const value = () => {
    return __val
  }
  const getElse = (fn) => {
    return maybe(__val || fn())
  }
  const filter = (fn) => {
    return maybe(fn(__val) === true ? __val : null)
  }
  const map = (fn) => {
    return maybe(isNil() ? null : fn(__val))
  }
  const output = Object.create({})
  defineProp(output, '__value__', __val, { enumerable: true })
  defineProp(output, '__type__', 'Maybe', { enumerable: true })
  defineProp(output, 'isNil', isNil)
  defineProp(output, 'value', value)
  defineProp(output, 'map', map)
  defineProp(output, 'if', filter)
  defineProp(output, 'else', getElse)
  return output
}

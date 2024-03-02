// curry.test

/* eslint-env jest */

import {
  curry
} from './curry.js'

describe('test .curry() method:', () => {
  const sum = curry((a, b, c) => {
    return a + b + c
  })
  test('  check if .curry() works correctly', () => {
    expect(sum(3)(2)(1)).toEqual(6)
    expect(sum(1)(2)(3)).toEqual(6)
    expect(sum(1, 2)(3)).toEqual(6)
    expect(sum(1)(2, 3)).toEqual(6)
    expect(sum(1, 2, 3)).toEqual(6)
  })
})

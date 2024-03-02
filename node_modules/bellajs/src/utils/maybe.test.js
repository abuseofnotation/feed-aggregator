// maybe.test

/* eslint-env jest */

import {
  maybe
} from './maybe.js'

describe('test .maybe() method:', () => {
  const plus5 = (x) => x + 5
  const minus2 = (x) => x - 2
  const isNumber = (x) => Number(x) === x
  const toString = (x) => 'The value is ' + String(x)
  const getDefault = () => 'This is default value'

  test('  check if .maybe() works correctly', () => {
    const x1 = maybe(5)
      .if(isNumber)
      .map(plus5)
      .map(minus2)
      .map(toString)
      .else(getDefault)
      .value()
    expect(x1).toEqual('The value is 8')

    const x2 = maybe('nothing')
      .if(isNumber)
      .map(plus5)
      .map(minus2)
      .map(toString)
      .else(getDefault)
      .value()
    expect(x2).toEqual('This is default value')
  })
})

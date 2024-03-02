// compose.test

/* eslint-env jest */

import {
  compose
} from './compose.js'

describe('test .compose() method:', () => {
  const f1 = (name) => {
    return `f1 ${name}`
  }
  const f2 = (name) => {
    return `f2 ${name}`
  }
  const f3 = (name) => {
    return `f3 ${name}`
  }

  const addDashes = compose(f1, f2, f3)

  const add3 = (num) => {
    return num + 3
  }

  const mul6 = (num) => {
    return num * 6
  }

  const div2 = (num) => {
    return num / 2
  }

  const sub5 = (num) => {
    return num - 5
  }

  const calculate = compose(sub5, div2, mul6, add3)

  test('  check if .compose() works correctly', () => {
    expect(addDashes('Alice')).toEqual('f1 f2 f3 Alice')
    expect(calculate(5)).toEqual(19)
  })
})

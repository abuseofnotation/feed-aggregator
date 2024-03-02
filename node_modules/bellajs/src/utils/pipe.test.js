// pipe.test

/* eslint-env jest */

import {
  pipe
} from './pipe.js'

describe('test .pipe() method:', () => {
  const f1 = (name) => {
    return `f1 ${name}`
  }
  const f2 = (name) => {
    return `f2 ${name}`
  }
  const f3 = (name) => {
    return `f3 ${name}`
  }

  const addDashes = pipe(f1, f2, f3)

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

  const calculate = pipe(add3, mul6, div2, sub5)

  test('  check if .compose() works correctly', () => {
    expect(addDashes('Alice')).toEqual('f3 f2 f1 Alice')
    expect(calculate(5)).toEqual(19)
  })
})

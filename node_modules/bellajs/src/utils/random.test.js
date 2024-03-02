// random.test

/* eslint-env jest */

import { randint, genid } from './random.js'

describe('test .randint() method:', () => {
  const randArr = []
  while (randArr.length < 20) {
    randArr.push(randint())
  }
  test(`test .randint() after ${randArr.length} times`, () => {
    expect(randArr).toHaveLength(20)
    const uniqVal = Array.from(new Set(randArr))
    expect(uniqVal.length).toBeGreaterThan(10)
  })

  test('test .randint() with same min/max', () => {
    const q = randint(10, 10)
    expect(q).toEqual(10)
  })

  const min = 50
  const max = 80
  test(`test .randint() between ${min} - ${max}`, () => {
    for (let i = 0; i < 100; i++) {
      const q = randint(min, max)
      expect(q).toBeGreaterThanOrEqual(min)
      expect(q).toBeLessThanOrEqual(max)
    }
  })
})

describe('test .genid() method:', () => {
  test('check .genid() default param', () => {
    const actual = genid()
    expect(actual).toHaveLength(32)
  })

  test('check .genid(512)', () => {
    const actual = genid(512)
    expect(actual).toHaveLength(512)
  })

  const len = 100
  const ids = []
  while (ids.length < len) {
    ids.push(genid())
  }
  const uniques = Array.from(new Set(ids))
  test('check .genid() always return unique string', () => {
    expect(ids).toHaveLength(len)
    expect(uniques).toHaveLength(ids.length)
  })
})

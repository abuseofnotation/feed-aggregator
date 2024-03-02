// main.test

/* eslint-env jest */

import {
  hasProperty,
  clone,
  copies,
  unique,
  sort,
  sortBy,
  pick
} from './main.js'

describe('test .clone() method:', () => {
  test('  check if .clone(object) works correctly', () => {
    const x = {
      level: 4,
      IQ: 140,
      epouse: {
        name: 'Alice',
        age: 27,
      },
      birthday: new Date(),
      a: 0,
      clone: false,
      reg: /^\w+@\s([a-z])$/gi,
    }
    const y = clone(x)
    Object.keys(x).forEach((k) => {
      expect(hasProperty(y, k)).toBeTruthy()
    })
    Object.keys(x.epouse).forEach((k) => {
      expect(hasProperty(y.epouse, k)).toBeTruthy()
      expect(y.epouse[k]).toEqual(x.epouse[k])
    })

    // check immutability
    y.epouse.age = 25
    expect(y.epouse.age).toEqual(25)
    expect(x.epouse.age).toEqual(27)
  })

  test('  check if .clone(array) works correctly', () => {
    const x = [
      1,
      5,
      0,
      'a',
      -10,
      '-10',
      '',
      {
        a: 1,
        b: 'Awesome',
      },
      [
        5,
        6,
        8,
        {
          name: 'Lys',
          age: 11,
        },
      ],
    ]
    const y = clone(x)
    expect(y).toHaveLength(x.length)
    for (let i = 0; i < x.length; i++) {
      expect(x[i]).toEqual(y[i])
    }

    // check immutability
    y[8][3].age = 10
    expect(y[8][3].age).toEqual(10)
    expect(x[8][3].age).toEqual(11)
  })
})

describe('test .copies() method:', () => {
  test('  check if .copies(source, dest) works correctly', () => {
    const source = {
      name: 'Toto',
      age: 30,
      level: 8,
      nationality: {
        name: 'America',
      },
      groups: [
        'admin',
        'accountant',
      ],
    }
    const dest = {
      level: 4,
      IQ: 140,
      epouse: {
        name: 'Alice',
        age: 27,
      },
      nationality: {
        name: 'Congo',
        long: '18123.123123.12312',
        lat: '98984771.134231.1234',
      },
      groups: [
        'finance',
        'manager',
      ],
    }
    copies(source, dest)
    Object.keys(source).forEach((k) => {
      expect(hasProperty(dest, k)).toBeTruthy()
    })
    expect(dest.nationality.name).toEqual(source.nationality.name)
  })

  test('  check if .copies(source, dest, matched, excepts) works correctly', () => {
    const source = {
      name: 'Kiwi',
      age: 16,
      gender: 'male',
    }
    const dest = {
      name: 'Aline',
      age: 20,
    }
    copies(source, dest, true, ['age'])
    expect(hasProperty(dest, 'gender')).toBeFalsy()
    expect(dest.name).toEqual(source.name)
    expect(dest.age === source.age).toBeFalsy()
  })
})

describe('test .unique() method:', () => {
  test('  check if .unique(array) works correctly', () => {
    const arr = [1, 1, 2, 2, 3, 4, 5, 5, 6, 3, 5, 4]
    const uniqArr = unique(arr)
    expect(uniqArr).toHaveLength(6)
  })
})

describe('test .sort() method:', () => {
  test('  check if .sort(array) works correctly', () => {
    const arr = [6, 4, 8, 2]
    const sortedArr = sort(arr)
    expect(sortedArr.join('')).toEqual('2468')
  })
})

describe('test .sortBy() method:', () => {
  test('  check if .sortBy(array) works correctly', () => {
    const arr = [
      { age: 5, name: 'E' },
      { age: 9, name: 'B' },
      { age: 3, name: 'A' },
      { age: 12, name: 'D' },
      { age: 7, name: 'C' },
    ]
    const sortedByAge = [
      { age: 3, name: 'A' },
      { age: 5, name: 'E' },
      { age: 7, name: 'C' },
      { age: 9, name: 'B' },
      { age: 12, name: 'D' },
    ]
    const sortedArr = sortBy(arr, 1, 'age')
    expect(JSON.stringify(sortedArr) === JSON.stringify(sortedByAge)).toBeTruthy()

    const sortedByNonStringKey = sortBy(arr, 1, 99)
    expect(JSON.stringify(sortedByNonStringKey) === JSON.stringify(arr)).toBeTruthy()

    const sortedByNonExistKey = sortBy(arr, 1, 'balance')
    expect(JSON.stringify(sortedByNonExistKey) === JSON.stringify(arr)).toBeTruthy()
  })
})

describe('test .pick() method:', () => {
  test('  check if .pick(array) works correctly', () => {
    const str = 'abcdefghijklmnopqrstuvwxyz'
    const arr = str.split('')
    const uniqChar = pick(arr)[0]
    expect(str.includes(uniqChar)).toBeTruthy()
  })

  test('  check if .pick(array, count) works correctly', () => {
    const str = 'abcdefghijklmnopqrstuvwxyz'
    const arr = str.split('')
    const picked = pick(arr, 10)
    expect(picked).toHaveLength(10)
  })
})

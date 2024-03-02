// detection.test

/* eslint-env jest */

import {
  isInteger,
  isArray,
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  isNil,
  isFunction,
  isObject,
  isDate,
  isElement,
  isLetter,
  isEmail,
  isEmpty,
  hasProperty
} from './detection.js'

describe('test .isInteger() method:', () => {
  const positives = [1, 1000, 9999, 0, -3]
  positives.forEach((val) => {
    test(`test .isInteger(${val}) --> true`, () => {
      expect(isInteger(val)).toBe(true)
    })
  })

  const negatives = [1.5, -3.2, '', undefined]
  negatives.forEach((val) => {
    test(`test .isInteger(${val}) --> false`, () => {
      expect(isInteger(val)).toBe(false)
    })
  })
})

describe('test .isArray() method:', () => {
  const positives = [[], [1, 2, 3]]
  positives.forEach((val) => {
    test(`test .isArray(${val}) --> true`, () => {
      expect(isArray(val)).toBe(true)
    })
  })

  const negatives = [1.5, '', undefined]
  negatives.forEach((val) => {
    test(`test .isArray(${val}) --> false`, () => {
      expect(isArray(val)).toBe(false)
    })
  })
})

describe('test .isString() method:', () => {
  const positives = ['', 'abc xyz', '10000']
  positives.forEach((val) => {
    test(`test .isString(${val}) --> true`, () => {
      expect(isString(val)).toBe(true)
    })
  })

  const negatives = [{}, 30, [], 1.5, null, undefined]
  negatives.forEach((val) => {
    test(`test .isString(${val}) --> false`, () => {
      expect(isString(val)).toBe(false)
    })
  })
})

describe('test .isNumber() method:', () => {
  const positives = [1, 1.5, 0, 9999, -2]
  positives.forEach((val) => {
    test(`test .isNumber(${val}) --> true`, () => {
      expect(isNumber(val)).toBe(true)
    })
  })

  const negatives = [{}, [], '', null, undefined]
  negatives.forEach((val) => {
    test(`test .isNumber(${val}) --> false`, () => {
      expect(isNumber(val)).toBe(false)
    })
  })
})

describe('test .isBoolean() method:', () => {
  const positives = [true, false, 3 !== 2, 3 === 2]
  positives.forEach((val) => {
    test(`test .isBoolean(${val}) --> true`, () => {
      expect(isBoolean(val)).toBe(true)
    })
  })

  const negatives = [{}, [], '', 1, 0, null, undefined]
  negatives.forEach((val) => {
    test(`test .isBoolean(${val}) --> false`, () => {
      expect(isBoolean(val)).toBe(false)
    })
  })
})

describe('test .isNull() method:', () => {
  const positives = [null]
  positives.forEach((val) => {
    test(`test .isNull(${val}) --> true`, () => {
      expect(isNull(val)).toBe(true)
    })
  })

  const negatives = [{}, [], '', 0, undefined]
  negatives.forEach((val) => {
    test(`test .isNull(${val}) --> false`, () => {
      expect(isNull(val)).toBe(false)
    })
  })
})

describe('test .isUndefined() method:', () => {
  let v
  const positives = [undefined, v]
  positives.forEach((val) => {
    test(`test .isUndefined(${val}) --> true`, () => {
      expect(isUndefined(val)).toBe(true)
    })
  })

  const negatives = [{}, [], '', 0, null]
  negatives.forEach((val) => {
    test(`test .isUndefined(${val}) --> false`, () => {
      expect(isUndefined(val)).toBe(false)
    })
  })
})

describe('test .isNil() method:', () => {
  let v
  const positives = [undefined, v, null]
  positives.forEach((val) => {
    test(`test .isNil(${val}) --> true`, () => {
      expect(isNil(val)).toBe(true)
    })
  })

  const negatives = [{}, [], '', 0]
  negatives.forEach((val) => {
    test(`test .isNil(${val}) --> false`, () => {
      expect(isNil(val)).toBe(false)
    })
  })
})

describe('test .isFunction() method:', () => {
  const positives = [function () {}, () => {}]
  positives.forEach((val) => {
    test(`test .isFunction(${val}) --> true`, () => {
      expect(isFunction(val)).toBe(true)
    })
  })

  const negatives = [{}, [], '', 0, null]
  negatives.forEach((val) => {
    test(`test .isFunction(${val}) --> false`, () => {
      expect(isFunction(val)).toBe(false)
    })
  })
})

describe('test .isObject() method:', () => {
  const ob = new Object()  // eslint-disable-line
  const positives = [{}, ob, Object.create({})]
  positives.forEach((val) => {
    test(`test .isObject(${val}) --> true`, () => {
      expect(isObject(val)).toBe(true)
    })
  })

  const negatives = [17, [], '', 0, null, () => {}, true]
  negatives.forEach((val) => {
    test(`test .isObject(${val}) --> false`, () => {
      expect(isObject(val)).toBe(false)
    })
  })
})

describe('test .isDate() method:', () => {
  const dt = new Date()
  const positives = [dt]
  positives.forEach((val) => {
    test(`test .isDate(${val}) --> true`, () => {
      expect(isDate(val)).toBe(true)
    })
  })

  const negatives = [17, [], '', 0, null, () => {}, true, {}, dt.toUTCString()]
  negatives.forEach((val) => {
    test(`test .isDate(${val}) --> false`, () => {
      expect(isDate(val)).toBe(false)
    })
  })
})

describe('test .isElement() method:', () => {
  const el = document.createElement('DIV')
  const positives = [el]
  positives.forEach((val) => {
    test(`test .isElement(${val}) --> true`, () => {
      expect(isElement(val)).toBe(true)
    })
  })

  const negatives = [17, [], '', 0, null, () => {}, true, {}]
  negatives.forEach((val) => {
    test(`test .isElement(${val}) --> false`, () => {
      expect(isElement(val)).toBe(false)
    })
  })
})

describe('test .isLetter() method:', () => {
  const positives = ['a', 'A', 'sigma']
  positives.forEach((val) => {
    test(`test .isLetter(${val}) --> true`, () => {
      expect(isLetter(val)).toBe(true)
    })
  })

  const negatives = [{}, [], '', 0, undefined, 'a23b']
  negatives.forEach((val) => {
    test(`test .isLetter(${val}) --> false`, () => {
      expect(isLetter(val)).toBe(false)
    })
  })
})

describe('test .isEmail() method:', () => {
  const positives = ['admin@pwshub.com', 'abc@qtest.com']
  positives.forEach((val) => {
    test(`test .isEmail(${val}) --> true`, () => {
      expect(isEmail(val)).toBe(true)
    })
  })

  const negatives = [{}, [], '', 0, undefined, 'a23b@qtest@com']
  negatives.forEach((val) => {
    test(`test .isEmail(${val}) --> false`, () => {
      expect(isEmail(val)).toBe(false)
    })
  })
})

describe('test .isEmpty() method:', () => {
  const positives = ['', 0, {}, [], undefined, null]
  positives.forEach((val) => {
    test(`test .isEmpty(${val}) --> true`, () => {
      expect(isEmpty(val)).toBe(true)
    })
  })

  const negatives = [{ a: 1 }, '12', 9, [7, 1]]
  negatives.forEach((val) => {
    test(`test .isEmpty(${val}) --> false`, () => {
      expect(isEmpty(val)).toBe(false)
    })
  })
})

describe('test .hasProperty() method:', () => {
  const obj = {
    name: 'alice',
    age: 17,
  }
  const positives = ['name', 'age']
  positives.forEach((val) => {
    test(`test .hasProperty(${val}) --> true`, () => {
      expect(hasProperty(obj, val)).toBe(true)
    })
  })

  const negatives = [{ a: 1 }, 'email', 9, '__proto__']
  negatives.forEach((val) => {
    test(`test .hasProperty(${val}) --> false`, () => {
      expect(hasProperty(obj, val)).toBe(false)
    })
  })
  test('test .hasProperty(null) --> false', () => {
    expect(hasProperty(null)).toBe(false)
  })
})

// string.test

/* eslint-env jest */

import {
  truncate,
  stripTags,
  escapeHTML,
  unescapeHTML,
  ucfirst,
  ucwords,
  replaceAll,
  stripAccent,
  slugify
} from './string.js'

describe('test .truncate() method:', () => {
  const inputs = [
    {
      text: 'If a property is non-configurable, its writable attribute can only be changed to false.',
      limit: 60,
      expectation: 'If a property is non-configurable, its writable attribute...',
    },
    {
      text: 'this string is less than limit',
      limit: 100,
      expectation: 'this string is less than limit',
    },
    {
      text: 'uyyiyirwqyiyiyrihklhkjhskdjfhkahfiusayiyfiudyiyqwiyriuqyiouroiuyi',
      limit: 20,
      expectation: 'uyyiyirwqyiyiyrih...',
    },
  ]

  inputs.forEach(({ text, limit, expectation }, k) => {
    test(`  check .truncate(text, ${k})`, () => {
      const actual = truncate(text, limit)
      expect(actual).toEqual(expectation)
    })
  })
})

describe('test .stripTags() method:', () => {
  const inputs = [
    {
      text: '<a>Hello <b>world</b></a>',
      expectation: 'Hello world',
    },
  ]

  inputs.forEach(({ text, expectation }, k) => {
    test(`  check .stripTags(text, ${k})`, () => {
      const actual = stripTags(text)
      expect(actual).toEqual(expectation)
    })
  })

  test('  check .stripTags(non-text)', () => {
    expect(() => {
      stripTags({})
    }).toThrow()
  })
})

describe('test .escapeHTML() method:', () => {
  const inputs = [
    {
      text: '<a>Hello <b>world</b></a>',
      expectation: '&lt;a&gt;Hello &lt;b&gt;world&lt;/b&gt;&lt;/a&gt;',
    },
  ]

  inputs.forEach(({ text, expectation }) => {
    test(`  check .escapeHTML(${text})`, () => {
      const actual = escapeHTML(text)
      expect(actual).toEqual(expectation)
    })
  })
})

describe('test .unescapeHTML() method:', () => {
  const inputs = [
    {
      text: '&lt;a&gt;Hello &lt;b&gt;world&lt;/b&gt;&lt;/a&gt;',
      expectation: '<a>Hello <b>world</b></a>',
    },
  ]

  inputs.forEach(({ text, expectation }) => {
    test(`  check .unescapeHTML(${text})`, () => {
      const actual = unescapeHTML(text)
      expect(actual).toEqual(expectation)
    })
  })
})

describe('test .ucfirst() method:', () => {
  const inputs = [
    {
      text: 'HElLo wOrLd',
      expectation: 'Hello world',
    },
    {
      text: 'h',
      expectation: 'H',
    },
  ]

  inputs.forEach(({ text, expectation }) => {
    test(`  check .ucfirst(${text})`, () => {
      const actual = ucfirst(text)
      expect(actual).toEqual(expectation)
    })
  })
})

describe('test .ucwords() method:', () => {
  const inputs = [
    {
      text: 'HElLo wOrLd',
      expectation: 'Hello World',
    },
  ]

  inputs.forEach(({ text, expectation }) => {
    test(`  check .ucwords(${text})`, () => {
      const actual = ucwords(text)
      expect(actual).toEqual(expectation)
    })
  })
})

describe('test .replaceAll() method:', () => {
  const inputs = [
    {
      input: {
        a: 'Hello world',
        b: 'l',
        c: '2',
      },
      expectation: 'He22o wor2d',
    },
    {
      input: {
        a: 'Hello world',
        b: 'l',
        c: 2,
      },
      expectation: 'He22o wor2d',
    },
    {
      input: {
        a: 798078967,
        b: 7,
        c: 1,
      },
      expectation: '198018961',
    },
    {
      input: {
        a: 'Hello world',
        b: ['l', 'o'],
        c: ['2', '0'],
      },
      expectation: 'He220 w0r2d',
    },
    {
      input: {
        a: 'Hello world',
        b: ['l', 'o'],
        c: '2',
      },
      expectation: 'He222 w2r2d',
    },
    {
      input: {
        a: 'Hello world',
        b: ['l'],
        c: ['2', '0'],
      },
      expectation: 'Hello world',
    },
    {
      input: {
        a: 'Hello world',
        b: 'l',
      },
      expectation: 'Hello world',
    },
    {
      input: {
        a: 'Hello world',
      },
      expectation: 'Hello world',
    },
    {
      input: {
        a: 10000,
      },
      expectation: '10000',
    },
    {
      input: {
        a: 0,
      },
      expectation: '0',
    },
  ]

  inputs.forEach(({ input, expectation }) => {
    const { a, b, c } = input
    test(`  check .replaceAll(${a}, ${b}, ${c})`, () => {
      const actual = replaceAll(a, b, c)
      expect(actual).toEqual(expectation)
    })
  })
})

describe('test .stripAccent() method:', () => {
  const inputs = [
    {
      text: 'Sur l\'année 2015 - ủ Ù ỹ Ỹ',
      expectation: 'Sur l\'annee 2015 - u U y Y',
    },
  ]

  inputs.forEach(({ text, expectation }) => {
    test(`  check .stripAccent(${text})`, () => {
      const actual = stripAccent(text)
      expect(actual).toEqual(expectation)
    })
  })
})

describe('test .slugify() method:', () => {
  const inputs = [
    {
      text: 'Sur l\'année 2015',
      expectation: 'sur-l-annee-2015',
    },
    {
      text: 'Nghị luận tác phẩm "Đường kách mệnh" của Hồ Chí Minh',
      expectation: 'nghi-luan-tac-pham-duong-kach-menh-cua-ho-chi-minh',
    },
  ]

  inputs.forEach(({ text, expectation }) => {
    test(`  check .slugify(${text})`, () => {
      const actual = slugify(text)
      expect(actual).toEqual(expectation)
    })
  })
})

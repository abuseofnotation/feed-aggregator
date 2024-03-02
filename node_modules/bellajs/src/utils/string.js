// utils / string

import {
  isArray,
  isString,
  isNumber,
  hasProperty
} from './detection.js'

const toString = (input) => {
  const s = isNumber(input) ? String(input) : input
  if (!isString(s)) {
    throw new Error('InvalidInput: String required.')
  }
  return s
}

export const truncate = (s, len = 140) => {
  const txt = toString(s)
  const txtlen = txt.length
  if (txtlen <= len) {
    return txt
  }
  const subtxt = txt.substring(0, len).trim()
  const subtxtArr = subtxt.split(' ')
  const subtxtLen = subtxtArr.length
  if (subtxtLen > 1) {
    subtxtArr.pop()
    return subtxtArr.map(word => word.trim()).join(' ') + '...'
  }
  return subtxt.substring(0, len - 3) + '...'
}

export const stripTags = (s) => {
  return toString(s).replace(/(<([^>]+)>)/ig, '').trim()
}

export const escapeHTML = (s) => {
  return toString(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export const unescapeHTML = (s) => {
  return toString(s)
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

export const ucfirst = (s) => {
  const x = toString(s).toLowerCase()
  return x.length > 1 ? x.charAt(0).toUpperCase() + x.slice(1) : x.toUpperCase()
}

export const ucwords = (s) => {
  return toString(s).split(' ').map((w) => {
    return ucfirst(w)
  }).join(' ')
}

export const replaceAll = (s, alpha, beta) => {
  let x = toString(s)
  const a = isNumber(alpha) ? String(alpha) : alpha
  const b = isNumber(beta) ? String(beta) : beta

  if (isString(a) && isString(b)) {
    const aa = x.split(a)
    x = aa.join(b)
  } else if (isArray(a) && isString(b)) {
    a.forEach((v) => {
      x = replaceAll(x, v, b)
    })
  } else if (isArray(a) && isArray(b) && a.length === b.length) {
    const k = a.length
    if (k > 0) {
      for (let i = 0; i < k; i++) {
        const aaa = a[i]
        const bb = b[i]
        x = replaceAll(x, aaa, bb)
      }
    }
  }
  return x
}

const getCharMap = () => {
  const lmap = {
    a: 'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ|ä|æ',
    c: 'ç',
    d: 'đ|ð',
    e: 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|ë',
    i: 'í|ì|ỉ|ĩ|ị|ï|î',
    n: 'ñ',
    o: 'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ|ö|ø',
    s: 'ß',
    u: 'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự|û',
    y: 'ý|ỳ|ỷ|ỹ|ỵ|ÿ',
  }

  const map = {
    ...lmap,
  }
  Object.keys(lmap).forEach((k) => {
    const K = k.toUpperCase()
    map[K] = lmap[k].toUpperCase()
  })

  return map
}

export const stripAccent = (s) => {
  let x = toString(s)

  const updateS = (ai, key) => {
    x = replaceAll(x, ai, key)
  }

  const map = getCharMap()
  for (const key in map) {
    if (hasProperty(map, key)) {
      const a = map[key].split('|')
      a.forEach((item) => {
        return updateS(item, key)
      })
    }
  }
  return x
}

export const slugify = (s, delimiter = '-') => {
  return stripAccent(s)
    .trim()
    .toLowerCase()
    .replace(/\W+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s/g, delimiter)
}

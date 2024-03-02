// date.test

/* eslint-env jest */

import { jest } from '@jest/globals'

import {
  formatDateString,
  formatTimeAgo
} from './date.js'

describe('test .formatDateString() method', () => {
  const d = new Date()

  test('  check .formatDateString() with default options', () => {
    const result = formatDateString(d)
    const reg = /^\w+\s\d+,\s+\d{4},\s\d+:\d+:\d+\s(AM|PM)\s(GMT)\+\d+$/
    expect(result.match(reg) !== null).toBeTruthy()
  })

  test('  check .formatDateString() with custom options', () => {
    const result = formatDateString(d, {
      dateStyle: 'full',
      timeStyle: 'medium',
      hour12: true,
    })
    const reg = /^\w+,\s\w+\s\d+,\s+\d{4}\sat\s\d+:\d+:\d+\s(AM|PM)$/
    expect(result.match(reg) !== null).toBeTruthy()
  })

  test('  check .formatDateString() with custom language and options', () => {
    const result = formatDateString(d, 'en', {
      dateStyle: 'full',
      timeStyle: 'medium',
      hour12: true,
    })
    const reg = /^\w+,\s\w+\s\d+,\s+\d{4}\sat\s\d+:\d+:\d+\s(AM|PM)$/
    expect(result.match(reg) !== null).toBeTruthy()
  })
})

describe('test .formatTimeAgo() method:', () => {
  jest.useFakeTimers()
  jest.spyOn(global, 'setTimeout')

  const d = new Date()

  test('  check if .formatTimeAgo() return "just now"', () => {
    const result = formatTimeAgo(d)
    expect(result === 'just now').toBeTruthy()
    const justnowCustomMessage = formatTimeAgo(d, 'vi', 'vừa mới xong')
    expect(justnowCustomMessage === 'vừa mới xong').toBeTruthy()
  })

  test('  check .formatTimeAgo() after 5s', () => {
    setTimeout(() => {
      const result = formatTimeAgo(d)
      expect(result === '5 seconds ago').toBeTruthy()
    }, 5000)
    jest.advanceTimersByTime(5000)
  })
})

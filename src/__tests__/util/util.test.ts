import * as util from '../../util'

describe('ensure formatNumber works', () => {
  test('passing in number', () => {
    const numString = util.formatNumber(30000)

    expect(numString).toBe('30,000')
  })

  test('passing in string', () => {
    const numString = util.formatNumber('50000')

    expect(numString).toBe('50,000')
  })

  test('small numbers', () => {
    const numString = util.formatNumber(40)

    expect(numString).toBe('40')
  })

  test('large numbers', () => {
    const numString = util.formatNumber(1_300_500_000)

    expect(numString).toBe('1,300,500,000')
  })
})

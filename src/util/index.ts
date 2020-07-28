/**
 * @description Converts a number or string to a format that includes commas
 *
 * @example
 * formatNumber(1000)
 * // => 1,000
 *
 * formatNumber(40_000)
 * // => 40,000
 */
export function formatNumber(number: string | number): string {
  return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

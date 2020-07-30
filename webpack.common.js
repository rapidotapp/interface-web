/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @fileoverview Common Webpack config for CRA and Storybook configs
 */

const path = require('path')

/** @type Record<string, string> */
const alias = {}
alias['~'] = path.join(__dirname, 'src')
alias['~atoms'] = path.join(__dirname, 'src/components/atoms')
alias['~molecules'] = path.join(__dirname, 'src/components/molecules')
alias['~organisms'] = path.join(__dirname, 'src/components/organisms')

module.exports = {
  alias,
}

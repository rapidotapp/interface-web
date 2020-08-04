/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

const { alias } = require('./webpack.common')

module.exports = function ({ env }) {
  return {
    reactScriptsVersion: 'react-scripts',
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        Object.assign(webpackConfig.resolve.alias, alias)

        return webpackConfig
      },
    },
    jest: {
      configure: (jestConfig, { env, paths, resolve, rootDir }) => {
        jestConfig.moduleNameMapper['^~atoms(.*)$'] =
          '<rootDir>/src/components/atoms$1'
        jestConfig.moduleNameMapper['^~molecules(.*)$'] =
          '<rootDir>/src/components/molecules$1'
        jestConfig.moduleNameMapper['^~organisms(.*)$'] =
          '<rootDir>/src/components/organisms$1'
        // this must be added last
        jestConfig.moduleNameMapper['^~(.*)$'] = '<rootDir>/src$1'

        return jestConfig
      },
    },
    devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
      // webpackConfig.port doesn't work here
      return devServerConfig
    },
  }
}

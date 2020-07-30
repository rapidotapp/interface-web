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
    devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
      // webpackConfig.port doesn't work here
      return devServerConfig
    },
  }
}

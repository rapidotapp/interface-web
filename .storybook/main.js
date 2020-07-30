const { alias } = require('../webpack.common')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: (webpackConfig) => {
    Object.assign(webpackConfig.resolve.alias, alias)

    return webpackConfig
  },
}

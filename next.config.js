const path = require('path')

module.exports = {
  webpack: (config, { dev }) => {
    config.resolve.modules = [path.resolve(__dirname, 'components'), 'node_modules']
    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  }
}

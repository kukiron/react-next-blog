const path = require('path')

module.exports = {
  webpack: config => {
    config.resolve.modules = [path.resolve(__dirname, 'components'), 'node_modules']
    return config
  },
  webpackDevMiddleware: config => config
}

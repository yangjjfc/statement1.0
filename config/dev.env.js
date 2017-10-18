var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SERVER:'"http://scmp.dev.cloudyigou.com/gateway"',
  IMAGE_UPLOAD:'"http://scmp.dev.cloudyigou.com/gateway/upload"',
  IMAGE_DOWNLOAD:'"http://dfs.test.cloudyigou.com/dfs/"',
})

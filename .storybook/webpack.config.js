const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: ['vue-style-loader', 'css-loader', 'sass-loader']
  })
  defaultConfig.plugins.push(new VueLoaderPlugin())

  return defaultConfig
}

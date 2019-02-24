const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_module/,
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.mjs', '.ts', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '..', 'src')
    }
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new VueLoaderPlugin(),
    new HtmlPlugin({ template: 'src/template.html' }),
    new BundleAnalyzerPlugin()
  ],
  serve: {
    content: path.resolve(__dirname, 'public'),
    add: app => {
      app.use(convert(history()));
    },
    host: '0.0.0.0'
  }
};

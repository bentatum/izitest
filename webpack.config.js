
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: path.resolve('./src/index.js')
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'js/app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loader: 'standard'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js']
  },
  plugins: [
    new CleanPlugin(['./dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: false,
      minify: false
    })
  ]
}

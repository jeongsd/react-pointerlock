/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack/hot/dev-server',
    './app.js',
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'react-pointerlock': path.join(__dirname, '..', 'src/react-pointerlock.js'),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  }
};

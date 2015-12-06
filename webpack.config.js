/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    modulesDirectories: [
      './src',
      'node_modules',
    ],
  },
  entry: './src/react-pointerlock.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-pointerlock.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      __DEV__: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
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
  },
};

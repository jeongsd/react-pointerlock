var path = require('path');

module.exports = {
  resolve: {
    modulesDirectories: [
      './src',
      'node_modules',
    ],
  },
  entry: './src/react-pointerlock.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'react-pointerlock.js',
  },
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

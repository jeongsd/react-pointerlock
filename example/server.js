/* eslint-disable no-var */
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from './webpack.config';
import path from 'path';

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: __dirname,
  hot: true,
  stats: {
    colors: true
  },
});

server.listen(8080, 'localhost', () => {
  console.log('server on localhost:8080');
});

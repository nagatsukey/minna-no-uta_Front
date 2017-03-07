const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: false,
  inline: true,
  progress: true,
  historyApiFallback: true,
  stats: { colors: true },
  contentBase: './dist',
});

server.listen(4000);


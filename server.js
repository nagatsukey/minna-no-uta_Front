const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  hot: true,
  inline: true,
  contentBase: './dist',
  watchOptions: { poll: true },
  historyApiFallback: true,
  stats: { colors: true },
}));

app.use(hotMiddleware(compiler, {
  log: console.log,
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4000, '0.0.0.0', (err) => {
  if (err) {
    return console.error(err);
  }

  console.info('Listening at http://localhost:4000');
});

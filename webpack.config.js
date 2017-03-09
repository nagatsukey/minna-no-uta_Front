const webpack = require('webpack');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: DEV ? [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client?path=http://localhost:4000/__webpack_hmr',
    './src/app.js',
  ] : [
    './src/app.js'
  ],
  output: {
    path:`${ __dirname}/dist`,
    filename: 'app.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.json$/,
        loader: 'json',
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: DEV ? [
    new webpack.HotModuleReplacementPlugin(),
  ] : [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ]
};

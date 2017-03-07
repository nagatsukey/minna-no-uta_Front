const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: ["./src/app.js"],
  output: {
    path: __dirname+"/dist",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json',
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true,
      ignore: null,
    })
  ]
};

const {resolve} = require('path')

module.exports = {
  entry: resolve(__dirname, 'source/index.js'),
  output: {
    path: resolve(__dirname, 'bin'),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  devServer: {
    port: 9000
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: resolve(__dirname, 'source'),
      query: {
        presets: [ "es2015", "react", "react-hmre" ]
      }
    }]
  }
}

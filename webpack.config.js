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
    loaders: [
      {
        test: /\.js$/,
        include: resolve(__dirname, 'source'),
        loader: "babel",
        query: {
          presets: [ "es2015", "react", "react-hmre" ]
        }
      },
      {
        test: /\.styl$/,
        include: resolve(__dirname, 'source'),
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  }
}

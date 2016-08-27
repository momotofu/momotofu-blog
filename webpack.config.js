const {resolve} = require('path')

module.exports = {
  entry: resolve(__dirname, 'views/index.js'),
  output: {
    path: resolve(__dirname, 'bin'),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          resolve(__dirname, 'views')
        ],
        loader: "babel",
        query: {
          presets: [ "es2015", "react" ]
        }
      },
      {
        test: /\.jade$/,
        include: [
          resolve(__dirname, 'views')
        ],
        loader: 'json-loader'
      },
      {
        test: /\.styl$/,
        include: [
          resolve(__dirname, 'views')
        ],
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.json$/,
        include: [
          resolve(__dirname, 'api')
        ],
        loader: 'json-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  }
}

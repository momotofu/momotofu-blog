const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'views/index.js'),
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'views')
        ],
        loader: "babel",
        query: {
          presets: [ "es2015", "react" ]
        }
      },
      {
        test: /\.jade$/,
        include: [
          path.resolve(__dirname, 'views')
        ],
        loader: 'json-loader'
      },
      {
        test: /\.styl$/,
        include: [
          path.resolve(__dirname, 'views')
        ],
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.json$/,
        include: [
          path.resolve(__dirname, 'api')
        ],
        loader: 'json-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  }
}

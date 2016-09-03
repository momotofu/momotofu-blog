var fs = require('fs')
var gulp = require('gulp')
var nodemon = require('nodemon')
var path = require('path')
var webpack = require('webpack')

/**
  webpack configuration
 */

var frontendConfig = {
  entry: path.join(__dirname, './source/index.js'),
  output: {
    path: path.join(__dirname, '/bin'),
    filename: 'frontend.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'source'),
        loader: 'babel',
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.styl$/,
        include: [
          path.resolve(__dirname, 'source')
        ],
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.jade$/,
        include: [
          path.resolve(__dirname, 'source')
        ],
        loader: 'jade-loader'
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
  plugins: [
    new webpack.HotModuleReplacementPlugin({quite: true})
  ]
}

/**
  tasks
 */

function onBuild(done) {
  return function(err, stats) {
    if (err) {
      console.log(err)
    } else {
      console.log(stats.toString())
    }
    if (done) {
      done()
    }
  }
}

gulp.task('stack-build', (done) => {
  webpack(frontendConfig).run(onBuild(done))
})

gulp.task('stack-watch', () => {
  webpack(frontendConfig).watch(100, onBuild());
  nodemon({
    script: path.join(__dirname, 'app.js')
  })
})


gulp.task('build', ['stack-build'])
gulp.task('watch', ['stack-watch'])



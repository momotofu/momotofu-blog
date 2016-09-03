var stylus = require('stylus')
var __ = require('./utils/tofu-color')


module.exports = function(source) {
  stylus(source)
    .define('__', __)
    .render(function(err, css){
      if (err) throw err
      return css
    })
}
var express = require('express')

var app = new express()
var fs = require('fs')
var path = require('path')
var engines = require('consolidate')

app.engine('jade', engines.jade)

app.set('views', './views')
app.set('view engine', 'jade')

app.use('/js', express.static(__dirname + '/bin'))

app.get('/', function(req, res) {
  res.render('index')
})

var server = app.listen(9000, function() {
  console.log('Server running at http://localhost:' + server.address().port)
})
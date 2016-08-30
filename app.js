var express = require('express')

var app = new express()
var fs = require('fs')
var path = require('path')
var engines = require('consolidate')
var Router = require('./router')
var bodyParser = require('body-parser')

app.engine('jade', engines.jade)

app.set('views', './views')
app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/js', express.static(__dirname + '/bin'))
app.use('/:page', Router)


app.get('/', function(req, res) {
  res.redirect('/momotofu');
})

var server = app.listen(process.env.PORT || 8000, function() {
  console.log('Server running at http://localhost:' + server.address().port)
})
var express = require('express')

var app = new express()
var fs = require('fs')
var path = require('path')
var engines = require('consolidate')
var Router = require('./router')
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer')

/**
  Configure email transporter
  */

var smtpConfig = {
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_TOKEN
  }
}

var emailTransporter = nodemailer.createTransport(smtpConfig)

/**
  Configure app
  */

app.engine('jade', engines.jade)

app.set('views', './views')
app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/js', express.static(__dirname + '/bin'))
app.use('/images', express.static(__dirname + '/media/images'))
app.use('/videos', express.static(__dirname + '/media/videos'))
app.use('/:page', Router)

/**
  Handle routes
  */

app.get('/', function(req, res) {
  res.redirect('/momotofu');
})

app.post('/sendForm', function(req, res) {
  emailTransporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New message from: ' + req.body.name + ' with email: ' + req.body.email,
    text: req.body.message
  }, function(err, info) {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    } else {
      console.log('info: ', info)
      res.status(200).send('success')
    }
  })
})

var server = app.listen(process.env.PORT || 9000, function() {
  console.log('Server running at http://localhost:' + server.address().port)
})
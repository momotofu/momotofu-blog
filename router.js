var express = require('express')
var fs = require('fs')

var router = express.Router({
  mergeParams: true
})

router.use(function (req, res, next) {
  console.log(req.method, 'for', req.params.page, ' at ' + req.path)
  next()
})

router.get('/', function (req, res) {
  res.render('index', {'page': req.params.page})
})

module.exports = router
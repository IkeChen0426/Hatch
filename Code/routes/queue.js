var express = require('express')
var router = express.Router()
require("../serve/queue/index")
/* GET stack page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '队列' })
})

module.exports = router

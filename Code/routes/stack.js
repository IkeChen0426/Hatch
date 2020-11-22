var express = require('express')
var router = express.Router()
require("../serve/stack/index")
/* GET stack page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router

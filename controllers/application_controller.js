var models  = require('../models');
var express = require('express');
var router  = express.Router();
//what should go in here?
router.get('/', function(req, res) {
  res.redirect('/people');
});

module.exports = router;

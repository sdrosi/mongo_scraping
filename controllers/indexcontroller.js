var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
//var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  res.render('index')
})

/*
router.get('/aboutme', function(req, res) {
  res.render('aboutme')
})

router.get('/portfolio', function(req, res) {
  res.render('portfolio')
})

router.get('/contactme', function(req, res) {
  res.render('contactme')
})
*/



// Export routes for server.js to use.
module.exports = router;
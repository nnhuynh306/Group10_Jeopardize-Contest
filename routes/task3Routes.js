const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser');

  // define the home page route
var data = require('../data.js');

router.get('/', function(req, res) {
    res.locals.products = data.products
    res.locals.categories = data.categories
    res.render('task3');
})

module.exports = router
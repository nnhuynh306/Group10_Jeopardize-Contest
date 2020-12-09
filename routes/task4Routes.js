const express = require('express')
const router = express.Router();


  // define the home page route
var data = require('../data.js');

router.get('/', function(req,res){
    res.locals.list = data.zodiacs;
    res.render('task4')
  })
  
router.get('/task4-details', function(req,res){
    res.locals.zodiac = data.zodiacs[req.query.id];
    res.render('task4-details');
  })
  

module.exports = router
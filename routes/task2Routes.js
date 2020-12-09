const express = require('express')
const router = express.Router();


  // define the home page route
var data = require('../data.js');

router.get('/', function(req, res) {
    res.locals.emotions = data.emotions;
    res.locals.quotePath ='/task2/default.jpg';
    res.render('task2')
  })
  
  router.get('/:title', function(req, res) {
    res.locals.emotions = data.emotions;
    for (let emotion of data.emotions){
        if (emotion.title === req.params.title){
          res.locals.quotePath = emotion.quotePath;
            break;
        }
    }
    res.render('task2')
  })

  module.exports = router
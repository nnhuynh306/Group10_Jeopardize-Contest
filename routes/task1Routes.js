const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser');

  // define the home page route
var data = require('../data.js');

router.get('/', function(req, res) {
    res.render('task1');
  })
  
  router.use(bodyParser.urlencoded({ extended: true }));
  
  router.post('/salary', (req, res) => {
    var task1_data = req.body
    var salary = task1_data.salary
    var res_task1 = {
      NEC: parseInt(salary*0.55), 
      FFA: parseInt(salary*0.1), 
      EDU: parseInt(salary*0.1), 
      LTSS: parseInt(salary*0.1), 
      PLAY: parseInt(salary*0.1), 
      GIVE: parseInt(salary*0.05)
    }
    console.log('Got body:', salary);
    res.render('task1', res_task1);
  });

module.exports = router
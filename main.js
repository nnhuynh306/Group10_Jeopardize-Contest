const express = require('express');
const hbs = require('express-handlebars');
var bodyParser = require('body-parser');
const data = require('./data');
var app = express();

app.use(express.static(__dirname))

var ifCond = function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
};

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    helpers: {
      ifCond: ifCond
    }
}));


app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/index.htm', function(req, res) {
  res.render('index');
})

app.get('/task1.htm', function(req, res) {
  res.render('task1');
})

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/salary', (req, res) => {
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


app.get('/task2', function(req, res) {
  res.locals.emotions = data.emotions;
  res.locals.quotePath ='/task2/default.jpg';
  res.render('task2')
})

app.get('/task2/:title', function(req, res) {
  res.locals.emotions = data.emotions;
  for (let emotion of data.emotions){
      if (emotion.title === req.params.title){
        res.locals.quotePath = emotion.quotePath;
          break;
      }
  }
  res.render('task2')
})


app.get('/task3', function(req, res) {
    res.locals.products = data.products
    res.locals.categories = data.categories
    res.render('task3');
})


app.get('/task4.htm', function(req,res){
  res.locals.list = data.zodiacs;
  res.render('task4')
})

app.get('/task4-details.htm', function(req,res){
  res.locals.zodiac = data.zodiacs[req.query.id];
  res.render('task4-details');
})

app.listen((process.env.PORT || 5000), () => {

})

const express = require('express');
const hbs = require('express-handlebars');
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

app.use('/task1', require('./routes/task1Routes.js'))

app.use('/task2', require('./routes/task2Routes.js'))

app.use('/task3', require('./routes/task3Routes.js'))

app.use('/task4', require('./routes/task4Routes.js'))


app.listen((process.env.PORT || 5000), () => {

})

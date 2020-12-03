const express = require('express');
const hbs = require('express-handlebars');
var bodyParser = require('body-parser');
const data = require('./data');
var app = express();

app.use(express.static(__dirname))

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));


app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/index.htm', function(req, res) {
    res.render('index');
})

app.get('/task3.htm', function(req, res) {
    var data = {
        categories: [
            {
              title: "Samsung", id: 1
            }, 
            {
              title: "Sony", id: 2
            }, 
            {
              title: "Panasonic", id: 3
            }
        ],
        products: [
            {
              title: "TIVI QLED SAMSUNG QA55Q7FAMKXXV",
              description: "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
              price: 57900000,
              category: 1,
              imagePath: "task3/smart-tv-4k-qled-q7f-01.jpg"
            }, 
            {
              title: "INTERNET TIVI SONY 40 INCH KDL-40W650D",
              description: "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
              price: 9900000,
              category: 2, 
              imagePath: "task3/tivi-lcd-sony-kdl-40w650d-01.jpg"
            }, 
            {
              title: "TIVI LED PANASONIC 55 INCH TH-55DS630V", 
              description: "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.", 
              price: 16990000, 
              category: 3, 
              imagePath: "task3/tivi-panasonic-th-55ds630v.jpg"
            }, 
            {
              title: "TIVI LED PANASONIC 40 INCH TH-40DS500V", 
              description: "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.", 
              price: 7990000, 
              category: 3, 
              imagePath: "task3/tivi-led-panasonic-th-40ds500v.jpg"
            }, 
            {
              title: "ANDROID TIVI SONY 43 INCH KDL-43W800C", 
              description: "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.", 
              price: 13400000, 
              category: 2, 
              imagePath: "task3/tivi-lcd-sony-kdl-43w800c-vn3.jpg"
            }, 
            {
              title: "TIVI LED PANASONIC 58 INCH TH-58DX700V", 
              description: "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.", 
              price: 28490000, 
              category: 3, 
              imagePath: "task3/tivi-led-panasonic-th-58dx700v.jpg"
            }
          ]
    }
    res.render('task3', data);
})


app.get('/task4.htm', function(req,res){
  res.locals.list = data.zodiacs;
  res.render('task4')
})

app.get('/task4-details.htm', function(req,res){
  res.locals.zodiac = data.zodiacs[req.query.id];
  res.render('task4-details');
})

app.listen(5000, () => {
  console.log("Listening on port: 5000");
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
